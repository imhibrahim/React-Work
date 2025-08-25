import { UserOutlined } from "@ant-design/icons";
import { Card, Form, Button, Input } from "antd"
const {Item}=Form;
function Login(){
const onFinish=(values)=>{
    console.log(values);
}

return(
    <>
    <div className="flex">

<div className="w-1/2 hidden md:flex items-center justify-center">
    <img src="/bank.png"  alt="My-bank"  className="w-4/5 object-content"/>
</div>

<div className="w-full w-1/2 flex items-center justify-center p-6 bg-white">
<Card className="shadow-xl w-full max-w-sm">
<h2 className="text-2xl font-semibold text-center mb-6 ">Bank Login</h2>
<Form 
onFinish={onFinish}
layout="vertical">
<Item name="username" label="User Name"  rules={[{ required: true, message: "Please enter your Name" }]}> 
   <Input prefix={<UserOutlined/>} placeholder="Enter Name" />
   

</Item>
<Item name="Password" label="User Password"  rules={[{ required: true, message: "Please enter your password" }]}> 
   <Input prefix={<UserOutlined/>} placeholder="Enter Password"/>
   

</Item>
    <Item>
        <Button
        type="text"
        htmlType="submit"
        block 
        className="!bg-blue-500 !text-white"
        >Login</Button>
    </Item>
</Form>
</Card>

</div>

    </div>
    </>
)
}

export default Login