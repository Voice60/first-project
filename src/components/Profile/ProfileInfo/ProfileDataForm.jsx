import React from 'react'
import { Form, Button, Input, Modal } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import Checkbox from 'antd/lib/checkbox/Checkbox';

let ProfileDataForm = (props) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }

  return <Modal title="Edit profile info"
    visible={props.visible}
    onCancel={props.handleCancel}
    footer={null}>

    <Form {...layout} onFinish={props.onSubmit}>
      <Form.Item rules={[
        {
          required: true,
          message: 'Name is required',
        },
      ]} initialValue={props.profile.fullName} name='fullName' label="Name" >
        <Input />
      </Form.Item>
      <Form.Item rules={[
        {
          required: true,
          message: 'About Me is required',
        },
      ]} initialValue={props.profile.aboutMe} name='AboutMe' label="About Me" >
        <TextArea />
      </Form.Item>
      <Form.Item initialValue={props.profile.lookingForAJob} name='lookingForAJOB' label="Looking for a job" >
        <Checkbox />
      </Form.Item>
      <Form.Item rules={[
        {
          required: true,
          message: 'Job desciprion is required',
        },
      ]} initialValue={props.profile.lookingForAJobDescription} name='lookingForAJOBDescription' label="Job desciprion" >
        <Input />
      </Form.Item>
      {Object.keys(props.profile.contacts).length && Object.keys(props.profile.contacts).map(el => {
        return <Form.Item initialValue={props.profile.contacts[el]} name={el} label={el} >
          <Input />
        </Form.Item>
      })}
      <Form.Item wrapperCol={{ offset: 8, span: 16  }}>
        <Button type='primary' htmlType='submit'>Submit</Button>
      </Form.Item>
    </Form>
  </Modal>
}

export default ProfileDataForm