import React, { useState } from 'react'
import Preloader from '../../common/preloader/Preloader'
import ProfileDataForm from './ProfileDataForm'
import ProfileStatus from './ProfileStatus'
import { UserOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title'
import { Modal, Upload, message, Button, Popover } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import Text from 'antd/lib/typography/Text';
import { Space } from 'antd';
import styles from './ProfileInfo.module.scss'
let ProfileInfo = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const onSubmit = (formData) => {
    // Временное решение
    formData.contacts = {
      facebook: formData.facebook,
      github: formData.github,
      instagram: formData.instagram,
      mainLink: formData.mainLink,
      twitter: formData.twitter,
      vk: formData.vk,
      website: formData.website,
      youtube: formData.youtube
    }

    delete formData.youtube
    delete formData.website
    delete formData.vk
    delete formData.twitter
    delete formData.mainLink
    delete formData.instagram
    delete formData.github
    delete formData.facebook

    props.saveProfile(formData)
      .then(
        () => {
          setIsModalVisible(false)
        }
      )
  }

  if (!props.profile) {
    return <Preloader />
  }

  const onPhotoSelected = (e) => {
    if (e.target.files.length > 0) {
      props.setPhoto(e.target.files[0])
    }
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
      <div className={styles.mainInfo}>
        {ProfilePhoto}
        <div style={{ marginLeft: '20px' }}>
          <Title ledel={3}>{props.profile.fullName}</Title>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        </div>

      </div>
      <div>
        {props.profile.aboutMe && <div><Text strong>About me: </Text> {props.profile.aboutMe}</div>}
        <Text strong>About job: </Text>
        <Text>
          {props.profile.lookingForAJob
            ? <>{props.profile.lookingForAJobDescription}</>
            : <>don't interesting</>}
        </Text>
        <div className={styles.contacts}>
          {

            // If profile.contacts have at least 1 item, then map is start
            Object.keys(props.profile.contacts).length && Object.keys(props.profile.contacts).map(el => {
              if (props.profile.contacts[el] !== null) {
                return <div><Text strong>{el}</Text>: <Text>{props.profile.contacts[el]}</Text> </div>
              } else { return <></> }
            })}
        </div>

        {props.isOwner &&
          <Button size={'small'} type={'primary'} onClick={showModal}>Edit</Button>}

      </div>
      <ProfileDataForm visible={isModalVisible}
        handleCancel={handleCancel}
        profile={props.profile}
        initialValues={props.profile}
        onSubmit={onSubmit}
        setEditMode={setIsModalVisible} />
    </div>
  )
}

export default ProfileInfo