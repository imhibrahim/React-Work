import { Card, Input,Image, Form, Select, Button } from "antd"
import HomeLayout from "../../Layout/HomeLayout"
import { SearchOutlined } from "@ant-design/icons"

const NewTransection=()=>{
    const [transectionform]=Form.useForm();
    const onFinish=(values)=>{
        console.log(values)
    }
return(
   <HomeLayout>
    <Card title="New Transection" extra={<Input placeholder="Searching ...." addonAfter={<SearchOutlined/>} style={{cursor:'pointer'}}/>}>

<div>
  <div className="flex items-center justify-start ms-30 gap-2">
    <Image src="https://cdn-icons-png.flaticon.com/512/3584/3584670.png" width={120} />
  </div>
</div>

<div className="mt-3 grid md:grid-cols-3 gap-8">

<div className=" mt-3 flex flex-col gap-3">
    <div className="flex justify-between item-center">
        <b>Name :</b> <b>Muhammad Ibrahim</b>
    </div>
     <div className="flex justify-between item-center">
        <b>Mobile :</b> <b>+92354654545</b>
    </div>
     <div className="flex justify-between item-center">
        <b>Balence :</b> <b>500</b>
    </div>
     <div className="flex justify-between item-center">
        <b>Currency :</b> <b>PKR</b>
    </div>
</div>
<div></div>
<Form onFinish={onFinish} form={transectionform} layout="vertical">
    <div className="grid md:grid-cols-2 gap-x-2">
        <Form.Item label="Transection Type" rules={[{required:true}]} name="transectionType">
            <Select placeholder="Transection Type" className="w-full" options={[
                {value:"Home",label:"HOME"},
                {value:"office",label:"Office"}
            ]}></Select>
        </Form.Item>

        <Form.Item label="Transection Amount" rules={[{required:true}]} name='transectionAmount'>
         <Input placeholder="500.00" type="number"/>
        </Form.Item>
    </div>
              <Form.Item label=" Reference" rules={[{required:true}]} name="refrence">
        <Input.TextArea/> 
        </Form.Item>
         <Form.Item >
        <Button htmlType="submit" type="text" className="!bg-blue-300 !text-white">Submit</Button>
        </Form.Item>
</Form>
</div>
    </Card>
   </HomeLayout>
)
}

export default NewTransection