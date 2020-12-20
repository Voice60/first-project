import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';

const Main = (props) => {
  return (
    <main>
      {/* <Avatar />
      <Discription /> */}
      <MyPostsContainer store={props.store}/>
    </main>
  )
}

export default Main;