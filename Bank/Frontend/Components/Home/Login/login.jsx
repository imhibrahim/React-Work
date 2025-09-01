import{Button, Card,Form,Input} from "antd"
const {Item}= Form;
const Loginpage=()=>{
const onFinish=(values)=>{
console.log(values)
}
   return(
     <div className="flex">

<div className="w-1/2 items-center justify-center hidden md:flex">
<img src="/bank.png" alt="Bank" className="w-4/5"/>
</div>
<div className="w-full md:w-1/2 items-center justify-center flex p-6 bg-white">
<Card className="shadow-2xl !bg-pink-50">
   <h1 className="text-2xl text-center font-semibold mb-4">Bank Login</h1>
   <Form onFinish={onFinish}>
<Item name="username" label="User Name" rules={[{required:true}]}>
   <Input placeholder="Enter Name"/>
</Item>
<Item name="password" label="User Password" rules={[{required:true}]}>
   <Input placeholder="Enter Password"/>
</Item>
<Button htmlType="submit" className="!bg-pink-300 !font-bold !text-white">Login</Button>
   </Form>
</Card>

</div>

    </div>
   )

}

export default Loginpage