import React, { useState } from 'react'
import Preloader from '../../common/preloader/Preloader'
import ProfileDataForm from './ProfileDataForm'
import ProfileStatus from './ProfileStatus'
import { UserOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title'
import { Upload, message, Button, Popover } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
let ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false)
  if (!props.profile) {
    return <Preloader />
  }

  const onPhotoSelected = (e) => {
    if (e.target.files.length > 0) {
      props.setPhoto(e.target.files[0])
    }
  }

  // const onPhotoSelected = (info) => {
  //   if (info.file.status === 'done') {
  //     props.setPhoto(info.file.originFileObj)
  //     message.success(`${info.file.name} file uploaded successfully`);
  //   } else if (info.file.status === 'error') {
  //     message.error(`${info.file.name} file upload failed.`);
  //   }
  // }

  const onSubmit = (formData) => {
    props.saveProfile(formData)
      .then(
        () => {
          setEditMode(false)
        }
      )
  }

  const content = (
    // <Upload
    //   name='file'
    //   maxCount={1}
    //   onChange={onPhotoSelected}>
    //   <Button icon={<UploadOutlined />}>Upload Photo</Button>
    // </Upload>
    <input type={'file'} onChange={onPhotoSelected} />

  )

  const ProfilePhoto = (props.isOwner
    ? props.profile.photos.large
      ? <Popover placement="bottom" content={content} trigger="hover">
        <img src={props.profile.photos.large} alt="profile" />
      </Popover>
      : <Avatar size={300} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
    : props.profile.photos.large
      ? <img src={props.profile.photos.large} alt="profile" />
      : <Avatar size={300} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />)

  return (
    <div key={props.profile.userId}>
      {ProfilePhoto}
      {editMode
        ? <ProfileDataForm profile={props.profile} initialValues={props.profile} onSubmit={onSubmit} setEditMode={setEditMode} />
        : <ProfileData isOwner={props.isOwner} setEditMode={setEditMode} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />}

    </div>
  )
}

const ProfileData = ({ profile, status, updateStatus, setEditMode, isOwner }) => {
  return <div>
    <Title ledel={3}>{profile.fullName}</Title>
    <ProfileStatus status={status} updateStatus={updateStatus} />
    {profile.aboutMe && <p><b>About me:</b> {profile.aboutMe}</p>}
    <p> <b>About job:</b> {profile.lookingForAJob
      ? <>{profile.lookingForAJobDescription}</>
      : <>don't interesting</>}</p>
    {Object.keys(profile.contacts).length && Object.keys(profile.contacts).map(el => {
      if (profile.contacts[el] !== null) {
        return <p><b>{el}</b>: {profile.contacts[el]} </p>
      } else { return <></> }
    })}
    {isOwner && <button onClick={() => { setEditMode(true) }}>Edit</button>}
  </div>
}

export default ProfileInfo