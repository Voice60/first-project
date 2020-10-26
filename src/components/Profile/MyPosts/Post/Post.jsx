import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
  return (
    <div className={c.item}>
      <img src='https://sun9-76.userapi.com/8uZE7-59Mbq_ocDrskyxQL-Px78UDHkJa3xuhQ/xckGh84Ok20.jpg'></img>
      {props.likes}
    </div>
  )
}

export default Post;