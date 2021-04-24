import React, { useState } from 'react'
import Preloader from '../../common/preloader/Preloader'
import ProfileDataForm from './ProfileDataForm'
import ProfileStatus from './ProfileStatus'



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

  const onSubmit = (formData) => {
    props.saveProfile(formData) 
    .then(
      () => {
        setEditMode(false)
      }
    )
  }

  return (
    <div key={props.profile.userId}>
      <img src={props.profile.photos.large} alt="profile photo" />
      {props.isOwner && <input type={'file'} onChange={onPhotoSelected} />}
      {editMode 
      ? <ProfileDataForm profile={props.profile} initialValues={props.profile} onSubmit={onSubmit} setEditMode={setEditMode} />
      : <ProfileData isOwner={props.isOwner} setEditMode={setEditMode} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />}

    </div>
  )
}

const ProfileData = ({ profile, status, updateStatus, setEditMode, isOwner }) => {
  return <div>
    <h1>{profile.fullName}</h1>
    <ProfileStatus status={status} updateStatus={updateStatus} />
    {profile.aboutMe && <p><b>About me:</b> {profile.aboutMe}</p>}
    <p> <b>About job:</b> {profile.lookingForAJob
      ? <>{profile.lookingForAJobDescription}</>
      : <>don't interesting</>}</p>
    {Object.keys(profile.contacts).length && Object.keys(profile.contacts).map(el => {
      if (profile.contacts[el] !== null) {
        return <p><b>{el}</b>: {profile.contacts[el]} </p>
      }
    })}
    {isOwner && <button onClick={() => {setEditMode(true)}}>Edit</button>}
  </div>
}

export default ProfileInfo