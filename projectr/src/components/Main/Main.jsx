import React from 'react';
import c from './Main.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'

const Main = () => {
  return (
    <main className={c.main}>
      {/* <Avatar />
      <Discription /> */}
      <MyPosts />
    </main>
  )
}

export default Main;