import React from 'react'
import Preloader from '../../common/preloader/Preloader'

let ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div key={props.profile.userId}>
      <img src={props.profile.photos.large} alt="profile photo" />
      <h1>{props.profile.fullName}</h1>
      <p>Status: {props.profile.aboutMe}</p>
      <p>About job: {props.profile.lookingForAJob 
      ?<>{props.profile.lookingForAJobDescription}</>
      :<>don't interesting</>}</p>
      
    </div>
  )
}

export default ProfileInfo