import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './User.module.css';

const User = ({ user, followingInProgress, unfollow, follow }) => {
  let defaultUserPhotoURL =
    'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg'
  return <div key={user.id} className={styles.item}>
    <NavLink to={'/profile/' + user.id}>
      <img src={user.photos.small === null ? defaultUserPhotoURL : user.photos.small} alt="фоточка" />
    </NavLink>
    <div className={styles.info}>
      <p className={styles.name}>{user.name}</p>
      <p className={styles.status}>{user.status}</p>
      {user.followed
        ? <button disabled={followingInProgress.some(id => id === user.id)}
          onClick={() => { unfollow(user.id) }} className={styles.follow}>Unfollow</button>
        : <button disabled={followingInProgress.some(id => id === user.id)}
          onClick={() => { follow(user.id) }} className={styles.follow}>Follow</button>}
    </div>
  </div>
}

export default User;