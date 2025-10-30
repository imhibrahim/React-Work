import { Card, Input,Image, Form, Select, Button } from "antd";
import HomeLayout from "../../Layout/HomeLayout";
import axios from "axios";
import { useState } from "react";

const Transection=()=>{
  const name = localStorage.getItem("Name");
  const mail = localStorage.getItem("Mail");
  const amount = localStorage.getItem("balance");
  const[transectionForm]=Form.useForm();
  const [balance, setBalance] = useState(amount);

//   const onFinish=async(values)=>{
// console.log(values)
//   }


const onFinish = async (values) => {
  try {
    // API call with axios
    const { data } = await axios.post("http://localhost:4500/api/transection", values);

    swal('Transection',`Transaction successful! Remaining balance: ${data.remainingBalance}`,'success');
    console.log("Response:", data);
    localStorage.setItem('balance',data.remainingBalance)
  setBalance(data.remainingBalance);
  } catch (error) {
    console.error("Error:", error);

    if (error.response) {
      // Server responded with error message
      alert(error.response.data.message || "Transaction failed!");
    } else {
      // Server not reachable or network issue
      alert("Network error! Check backend connection.");
    }
  }
};



    return(
        <HomeLayout>
<Card title="Transection Amount" extra={<Input placeholder="Searching ...."></Input>}>
<div class="grid grid-cols-2 gap-4 ">
  <div class="grid grid-flow-col grid-rows-4 gap-4">
  <div className="flex justify-center">
    <Image src="trans.png" width={120} />
  </div>

  <div>
    <b>Name :</b> &nbsp;&nbsp;&nbsp;&nbsp; <b>{name}</b>
    <br />
    <b>Mail :</b> &nbsp;&nbsp;&nbsp;&nbsp; <b>{mail}</b>
    <br />
    <b>Amount :</b> &nbsp;&nbsp;&nbsp;&nbsp; <b>{balance}</b>
    <br />
    <b>Currency :</b> &nbsp;&nbsp;&nbsp;&nbsp; <b>PKR</b>
  </div>
</div>

  <div className="grid md:grid-cols gap-x-3 text-center">
    <Form name="transection" onFinish={onFinish} layout="vertical" initialValues={{ username: name,email:mail }}  >
        <div className="grid grid-cols-2 gap-4 ">


 <Form.Item label="Amount" rules={[{required:true}]} name='amount'>
    <Input placeholder="500.00"/>
 </Form.Item>

 <Form.Item label="Transection Type" name='type' rules={[{require:true}]}>
   <Select placeholder="TransectionType" className="w-full" options={[{value:"Home",label:"Home"},{value:"others",label:"Others"},
    {value:"Firend",label:"Friend"}
   ]}/>
 </Form.Item>
<Form.Item label="User Name" name="username">
  <Input readOnly />
</Form.Item>

<Form.Item label="Email" name="email">
  <Input readOnly />
</Form.Item>
        </div>

 <Form.Item label="Referenc" rules={[{required:true}]} name='refrence'>
  <Input.TextArea placeholder="References :"/>
 </Form.Item>

<Form.Item>
    <Button htmlType="submit" className="!bg-blue-500 !text-white">Submit</Button>
 </Form.Item>
    </Form>
  </div>

</div>

</Card>

        </HomeLayout>
    )
}

export default Transection;