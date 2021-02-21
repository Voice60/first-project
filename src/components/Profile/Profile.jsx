import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {
  return (
    <main>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </main>
  )
}

export default Profile;