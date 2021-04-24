import { Button, Checkbox, Form, Input, message } from 'antd';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { login } from "../../redux/auth-redusers";

let Login = (props) => {
  let onFinish = (values) => {
    login(values.email, values.password, values.rememberMe, values.captcha)
  }

  let showerror = (error) => {
    if (error) {
      message.error(error)
    }
  }
  
  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div>
      <Title>Авторизация</Title>
      <Form
        name='basic'
        onFinish={onFinish}>
        <Form.Item
          name='login'
          rules={[
            {
              required: true,
              message: 'Please input your login!',
            },
          ]}>
          <Input placeholder='login' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}>
          <Input.Password placeholder='password' />
        </Form.Item>
        {props.captchaURL && <img src={props.captchaUrl} alt='captcha'/>}
        {props.captchaURL && <Form.Item
          name='captcha'
          rules={[
            {
              required: true,
              message: 'Please input your login!',
            },
          ]}>
          <Input placeholder='captcha' />
        </Form.Item>}

        <Form.Item name="rememberMe" default={false} valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item >
          <Button onClick={showerror} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login