import { Button, Card, Form, Image, Input, Popconfirm, Table, Tooltip } from "antd";
import AdminLayout from "../../Layout/AdminLayout";
import { DeleteOutlined, EditOutlined, EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { trimData } from "../../../modules/module";
import axios from "axios";
const {Item}=Form;
import swal from"sweetalert";
import { useEffect, useState } from "react";


function NewEmployee(){
//stats collection 
const [empForm]=Form.useForm();
const [photo,setphoto]=useState(null);
//get data states
const [allemployee,setemp]=useState([]);
const [edit,setEdit]=useState(null);

    //get employee
 useEffect(()=>{
const fatch=async()=>{
    try{
          const {data}=await axios.get("http://localhost:4500/api/users");
          console.log(data)
          // go to backend
          setemp(data.data)
    }
    catch(e){
          swal("Warning","Enable to data found ! ","warning");
    }
}
fatch()
 },[])




const onFinish =async (values)=>{
try{
     let finalobj  = trimData(values);
     finalobj.profile=photo? photo:"bankimages/pic1.jpg";
     const {data}=await axios.post("http://localhost:4500/api/users",finalobj);
     console.log(data);
      swal("Success","Employee Inserted!","success").then(()=>{
           window.location.reload();
      });
      empForm.resetFields();
      setphoto(null);
   
        
  
 
}
catch(error){
    // console.log(error)
    if(error?.response?.data.error.code === 11000){
        empForm.setFields([
            {
                name:"email",
                errors:["Email Already Exits"]
            }
        ])
    }
    else{
        swal("Warning","Try Again later","warning");
    }
}
}


const handleupload= async(e)=>{
  try{
   let file=e.target.files[0];
    const formData=new FormData();
    formData.append("photo",file);
   const {data}=await axios.post("http://localhost:4500/api/upload",formData);
   //console.log(data)

   console.log(setphoto(data.filepath))


  }
  catch(e){
    swal("Failed","Enable To Upload Image","warning")
  }
}

//delete 
const onDeleteUser= async(id)=>{
// alert(id)
try{
   const {data}=await axios.delete(`http://localhost:4500/api/users/${id}`);
   swal('Success',"User Is Delete Successfully...","success").then(()=>{
    window.location.reload();
   });
   console.log(data);

}
catch(e){
  swal('Error',"Enable to delete this Data \n Please Try again Later !",'error');
  console.log(e)
}
}

//update
const onUpdate=async(obj)=>{
  //console.log(obj)

  //Create State on top
setEdit(obj);
empForm.setFieldsValue(obj)

}

const onEdit=async(values)=>{
 try{
   let finalobj=trimData(values);
  if(photo){
    finalobj.profile=photo
  }
  //console.log(edit._id)
   const {data}=await axios.put(`http://localhost:4500/api/users/${edit._id}`,finalobj);

   swal('Success',"User Is Delete Successfully...","success").then(()=>{
  window.location.reload();
    console.log(data)
   });

 }
 catch(e){
  swal("Error","Unable to Updated","error")
  console.log(e)
 }
}





//cloumn for table
const columns=[
    {
    title:"pic",
    key:"pic",
    render:(src,obj)=>(
        <Image  src={`http://localhost:4500/${obj.profile}`}  className="rounded-full" width={40} height={40}/>
        )
},
  {
    title:"Full Name",
    dataIndex:"fullname",
    key:"name"
},
  {
    title:"Email",
    dataIndex:"email",
    key:"email"
},
  {
    title:"Address",
    dataIndex:"address",
    key:"address",
       render: (text) => (
    <Tooltip title={text}>
      <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "block", maxWidth: 120 }}>
        {text}
      </span>
    </Tooltip>
  )
    
},  
{
    title:"Action",
    key:"action",
    render:(_,obj)=>(
<div className="flex gap-1">
    <Button className={`${obj.isActive?"!bg-indego-100 !text-indego-500":"!bg-pink-100 !text-pink-500"}`} icon={obj.isActive?<EyeOutlined/>:<EyeInvisibleOutlined/>}/>
 
<Popconfirm title="This Data is Update ?" description="All Time's Update this data"
onCancel={()=>swal("Safe","Data is Safe Mode..","warning")}
  onConfirm={()=>onUpdate(obj)}><Button className="!bg-green-100 !text-green-500" icon={<EditOutlined/>}/></Popconfirm>

<Popconfirm title="Are You Sure ! ?" description="Once You Delete this , You can not see again !" onCancel={()=>swal("Safe","Data is Safe Mode..","success")}
  onConfirm={()=>onDeleteUser(obj._id)}>
      <Button className="!bg-rose-100 !text-rose-500" icon={<DeleteOutlined/>}/>
</Popconfirm>

</div>
    )
}
]

return(
    <>
  <AdminLayout> 

<div className="grid md:grid-cols-3 gap-3">
<Card title="Add New Employee">
<Form layout="vertical" onFinish={edit?onEdit:onFinish} form={empForm}>
<Item label="Profile">
    <Input onChange={handleupload} type="file"></Input>
</Item>
<div className="grid md:grid-cols-2 gap-x-2">
    <Item label="Full Name" name="fullname" rules={[{required:true}]}>
    <Input type="text" placeholder="Name"/>
</Item>
<Item label="Number"  name="mobile" rules={[{required:true}]}>
    <Input type="number" placeholder="Number"/>
</Item>
   <Item label="Email" name="email" rules={[{required:true}]}>
    <Input type="mail" placeholder="@gmail.com"/>
</Item>
<Item label="Password"  name="password" rules={[{required:true}]}>
    <Input type="password" disabled={edit?true:false} placeholder="Password"/>
</Item>
</div>
<Item label="Address" name="address">
    <Input.TextArea/>
</Item>
<Item>
  {
   edit?  <Button className="!bg-rose-400 !text-white !font-bold" type="text" htmlType="submit">Updated</Button>:
     <Button className="!bg-blue-400 !text-white !font-bold" type="text" htmlType="submit">Submit</Button>
  }
</Item>
</Form>
</Card>

<Card title="Employee List" className="md:col-span-2" style={{overflowX:"auto"}}>
    <Table columns={columns} dataSource={allemployee} scroll={{x:"max-content"}}/>
</Card>
</div>




  </AdminLayout>
    </>
)

}
export default NewEmployee;