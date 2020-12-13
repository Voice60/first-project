import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  let imgLink = "https://sun9-76.userapi.com/8uZE7-59Mbq_ocDrskyxQL-Px78UDHkJa3xuhQ/xckGh84Ok20.jpg"

  let postElements = (
    <div className={styles.item}>
      <img className={styles.img} src={imgLink}></img>
      <p className={styles.message}>{props.message}</p>
      <span className={styles.likes}>{props.likes}</span>
    </div>)

  return postElements;
}

export default Post;