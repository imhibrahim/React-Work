import { Button, Card, Form, Input, Table } from "antd";
import AdminLayout from "../../Layout/AdminLayout";
import { DeleteOutlined, EditOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { trimData } from "../../../modules/module";
import axios from "axios";
const {Item}=Form;
import swal from"sweetalert";
import { useState } from "react";


function NewEmployee(){


//stats collection 
const [empForm]=Form.useForm();
const [photo,setphoto]=useState(null);

// second time
const onFinish =async (values)=>{
try{
     let finalobj  = trimData(values);
     finalobj.profile=photo? photo:"bankimages/pic1.jpg";
     const {data}=await axios.post("http://localhost:4500/api/users",finalobj);
     console.log(data);
      swal("Success","Employee Inserted!","success");
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

//handleupload first time
// const handleupload= async(e)=>{
//     console.log(e.target.files[0])
// }


//handleupload second time
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




//cloumn for table
const columns=[
    {
    title:"pic",
    key:"pic"
},
  {
    title:"Full Name",
    dataIndex:"name",
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
    key:"address"
},
{
    title:"Action",
    key:"action",
    render:()=>(
<div className="flex gap-1">
    <Button className="!bg-pink-100 !text-pink-500" icon={<EyeInvisibleOutlined/>}/>
    <Button className="!bg-green-100 !text-green-500" icon={<EditOutlined/>}/>
    <Button className="!bg-rose-100 !text-rose-500" icon={<DeleteOutlined/>}/>

</div>
    )
}
]

return(
    <>
  <AdminLayout> 

<div className="grid md:grid-cols-3 gap-3">
<Card title="Add New Employee">
<Form layout="vertical" onFinish={onFinish} form={empForm}>
<Item label="Profile" name="profile">
    <Input onChange={handleupload} type="file"></Input>
</Item>
<div className="grid md:grid-cols-2 gap-x-2">
    <Item label="Full Name" name="fullname" rules={[{required:true}]}>
    <Input type="text" placeholder="Name"/>
</Item>
<Item label="Number"  name="number" rules={[{required:true}]}>
    <Input type="number" placeholder="Number"/>
</Item>
   <Item label="Email" name="email" rules={[{required:true}]}>
    <Input type="mail" placeholder="@gmail.com"/>
</Item>
<Item label="Password"  name="password" rules={[{required:true}]}>
    <Input type="password" placeholder="Password"/>
</Item>
</div>
<Item label="Address" name="address">
    <Input.TextArea/>
</Item>
<Item>
    <Button className="!bg-blue-400 !text-white !font-bold" type="text" htmlType="submit">Submit</Button>
</Item>
</Form>
</Card>

<Card title="Employee List" className="md:col-span-2">
    <Table columns={columns} dataSource={[{},{}]}/>
</Card>
</div>




  </AdminLayout>
    </>
)

}
export default NewEmployee;