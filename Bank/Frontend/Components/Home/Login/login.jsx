import{Button, Card,Form,Input, message} from "antd"
import { trimData } from "../../../modules/module";
const {Item}= Form;
import axios from "axios";
import swal from"sweetalert";

const Loginpage=()=>{


   
const onFinish=async(values)=>{
//console.log(values)

try{
   let finalobj  = trimData(values);
        const {data}=await axios.post("http://localhost:4500/api/login",finalobj);
     console.log(data);
}
catch(e){
   console.log(e);
swal('Error',`Error ${e}`,"error")
}

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
<Item name="email" label="User Name" rules={[{required:true}]}>
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