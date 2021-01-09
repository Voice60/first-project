import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {
  return (
    <main>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </main>
  )
}

export default Profile;