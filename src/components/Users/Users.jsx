import axios from 'axios'
import React from 'react'
import User from './User/User'
import styles from './User/User.module.css'

class Users extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => { this.props.setUsers(response.data.items) })
  }

   render() {
    let usersElements = this.props.usersPage.map(user => <User key={user.id} id={user.id} name={user.name} followFunction={this.props.follow} unfollowFunction={this.props.unfollow} follow={user.followed} status={user.status} />)
    return <div className={styles.usersPage}>
      {usersElements}
      <button className={styles.showMoreButton}>show more</button>
    </div>
  }
}

export default Users

