import { Button, Card, Form, Input } from "antd";
import AdminLayout from "../../Layout/AdminLayout";

import { EditOutlined } from "@ant-design/icons";
import { trimData } from "../../../modules/module";

const { Item } = Form;


function Branding(){
    const [bankForm]=Form.useForm();

    const onFinish=async(values)=>{
       const finalobj=trimData(values);
       console.log(finalobj);

    }
    return(
        <>
    <AdminLayout>
      <Card title="Branding Page" extra={<Button icon={<EditOutlined/>}/>}>
       <Form form={bankForm} layout="vertical" onFinish={onFinish}>

        <div className="grid md:grid-cols-3 gap-x-4">
      <Item label="Enter Name" name='bankName'  rules={[{required: true }]}>
  <Input placeholder="Enter Name" />
</Item>

          <Item label="Bank Tag Line" name="bankTagline" rules={[{required:true}]} >
            <Input placeholder="Enter Name"></Input>
        </Item>
         <Item label="Bank Logo" name='xyz' rules={[{required:true}]} >
            <Input type="file"></Input>
        </Item>
          <Item label="Bank Account No" name="accountNo" rules={[{required:true}]} >
            <Input placeholder="Enter Account No"></Input>
        </Item>
          <Item label="Bank Transaction Id" name="taransectionId" rules={[{required:true}]} >
            <Input placeholder="Transection Id"></Input>
        </Item>
          <Item label="Bank Address" name="bankAddress" rules={[{required:true}]} >
            <Input placeholder="Bank Address"></Input>
        </Item>
          <Item label="Admin Name" name="adminName" rules={[{required:true}]} >
            <Input placeholder="Admin Name"></Input>
        </Item>
          <Item label="Admin Mail" name="adminMail" rules={[{required:true}]} >
            <Input placeholder="Admin Mail"></Input>
        </Item>
          <Item label="Admin Password" name="adminPassword" rules={[{required:true}]} >
            <Input placeholder="Admin Password"></Input>
        </Item>
          <Item label="Website URL" name="bankUrl" rules={[{required:true}]} >
            <Input type="url" placeholder="Enter Url"></Input>
        </Item>
          <Item label="Bank Linkdin" name="bankLinkdin" rules={[{required:true}]} >
            <Input placeholder="Enter Url"></Input>
        </Item>
        </div>
          <Item label="Bank Description" name="bankDesc" rules={[{required:true}]} >
            <Input.TextArea placeholder="Enter Description"/>
        </Item>
          <Item className="flex justify-center items-center">
            
           <Button className="!bg-blue-500 !text-white !font-bold" type="text" htmlType="submit">Create</Button>
        </Item>
       </Form>
      </Card>
    </AdminLayout>
        </>
    )
}

export default Branding;