import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './User.module.css';

const Users = (props) => {
  const spanStyle = { cursor: 'pointer' }
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  let defaultUserPhotoURL =
    'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg'

  return <div className={styles.usersPage}>
    <div>
      {pages.map(page => {
        return <span style={spanStyle}
          className={`${props.currentPage === page && styles.selected} ${styles.page}`}
          onClick={() => { props.onPageChanged(page) }}>{page}</span>
      })}
    </div>
    {props.usersPage.map(user => {
      return <div key={user.id} className={styles.item}>
        <NavLink to={'/profile/' + user.id}>
          <img src={user.photos.small === null ? defaultUserPhotoURL : user.photos.small} alt="фоточка" />
        </NavLink>
        <div className={styles.info}>
          <p className={styles.name}>{user.name}</p>
          <p className={styles.status}>{user.status}</p>
          {user.followed
            ? <button onClick={() => {

              axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                withCredentials: true,
                headers: {
                  'API-KEY': '3e1ac1ca-cb43-40e4-a712-258cafdbad88'
                }
              })
                .then(response => {
                  if (response.data.resultCode === 0) {
                    props.unfollow(user.id)
                  }
                })


            }} className={styles.follow}>Unfollow</button>
            : <button onClick={() => {

              axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                withCredentials: true,
                headers: {
                  'API-KEY': '3e1ac1ca-cb43-40e4-a712-258cafdbad88'
                }

              })
                .then(response => {
                  if (response.data.resultCode === 0) {
                    props.follow(user.id)
                  }
                })


            }} className={styles.follow}
            >Follow</button>}
        </div>
      </div>
    })}
    <button className={styles.showMoreButton}>show more</button>
  </div>
}

export default Users;