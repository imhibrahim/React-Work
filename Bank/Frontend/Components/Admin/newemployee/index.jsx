import { Button, Card, Form, Input, Table } from "antd";
import AdminLayout from "../../Layout/AdminLayout";
import { DeleteOutlined, EditOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
const {Item}=Form;

function NewEmployee(){
    const onFinish=(values)=>{
console.log(values)
}

const columns=[
    {
    title:"profile",
    key:"Full Name"
},
  {
    title:"Full Name",
    dataIndex:"Full Name",
    key:"Full Name"
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
<Form layout="vertical" onFinish={onFinish}>
<Item label="Profile" name="pic">
    <Input type="file"></Input>
</Item>
<div className="grid md:grid-cols-2 gap-x-2">
    <Item label="Full Name" name="name" rules={[{required:true}]}>
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