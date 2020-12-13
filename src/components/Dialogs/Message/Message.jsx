import React from 'react';
import styles from './Message.module.css'

const Message = (props) => {
  let imgLink = "https://sun9-76.userapi.com/8uZE7-59Mbq_ocDrskyxQL-Px78UDHkJa3xuhQ/xckGh84Ok20.jpg"
  return (
    <div className={styles.message}>
      <img className={styles.img} src={imgLink}></img>
      <p>{props.message}</p>
    </div>
  )
}

export default Message;