import axios from 'axios'
import React from 'react'
import User from './User/User'
import styles from './User/User.module.css'

let Users = (props) => {
  if (props.usersPage.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        props.setUsers(response.data.items) 
      })
}
let usersElements = props.usersPage.map(user => <User key={user.id} id={user.id} name={user.name} followFunction={props.follow} unfollowFunction={props.unfollow} follow={user.followed} status={user.status} />)
return <div className={styles.usersPage}>
  {usersElements}
  <button className={styles.showMoreButton}>show more</button>
</div>
}
export default Users

