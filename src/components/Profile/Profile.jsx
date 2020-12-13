import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';

const Main = (props) => {
  return (
    <main>
      {/* <Avatar />
      <Discription /> */}
      <MyPosts
        posts={props.profilePage.posts}
        dispatch={props.dispatch}
        newPostText={props.profilePage.newPostText} />
        addPostActionCreator
    </main>
  )
}

export default Main;