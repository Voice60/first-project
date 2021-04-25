import { Button, Checkbox, Form, Input, message } from 'antd';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import { Redirect } from 'react-router-dom';

let Login = (props) => {
  let onFinish = (values) => {
    props.login(values.email, values.password, values.rememberMe, values.captcha)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div style={{maxWidth: '400px', margin: '0 auto'}}>
      <Title>Авторизация</Title>
      <Form
        name='basic'
        onFinish={onFinish}>
        <Form.Item
          name='email'
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
        {props.captchaURL && <img style={{marginBottom: '24px'}} src={props.captchaURL} alt='captcha'/>}
        {props.captchaURL && <Form.Item
          name='captcha'
          rules={[
            {
              required: true,
              message: 'captcha is required!',
            },
          ]}>
          <Input placeholder='captcha' />
        </Form.Item>}

        <Form.Item name="rememberMe" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login