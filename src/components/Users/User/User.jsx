import React from 'react';
import styles from './User.module.css';

const User = (props) => {

  let userElements = (
    <div className={styles.item}>
      <div className={styles.img}> img</div>
      <div className={styles.info}>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.status}>{props.status}</p>
        {props.follow 
        ? <button onClick={ () => { props.unfollowFunction(props.id) }} className={styles.follow}>Unfollow</button> 
        : <button onClick={ () => { props.followFunction(props.id) }} className={styles.follow}>Follow</button>}
      </div>
    </div>)
  return userElements;
}

export default User;