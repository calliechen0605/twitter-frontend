import { useState } from 'react';
import { Button, Input, Form, Dialog} from 'antd-mobile';
import './index.css';
const initialValues={
  username:'hahaha',
  password:'12345',
}

const Login = () => {
  const [form] = Form.useForm()
  const onSubmit = () => {
    const values = form.getFieldValue()
    Dialog.alert({
      content:JSON.stringify(values),
    })
  }


  return (
    <div className="login">

      <Form 
        form={form}
        layout='horizontal' mode='card' initialValues={initialValues}
        footer={
          <Button block color='primary' onClick={onSubmit} size='large'>
            Login
          </Button>
        }
      >
          <Form.Item label='Username' name='username'>
            <Input placeholder='pls enter usename' clearable />
          </Form.Item>
          <Form.Item label='Password' name='password'>
            <Input placeholder='pls enter password' clearable type='password'/>
          </Form.Item>
        </Form>
    </div>
  );
}

export default Login;
