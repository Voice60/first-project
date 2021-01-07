import axios from 'axios'
import React from 'react'
import User from './User/User'
import styles from './Users.module.css'

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => { 
        this.props.setUsers(response.data.items) 
        this.props.setTotalUsersCount(response.data.totalCount) 
      })
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then(response => { this.props.setUsers(response.data.items) })
  }

  render() {
    const spanStyle = { cursor: 'pointer' }
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
    let usersElements = this.props.usersPage.map(user => <User photoURL={user.photos.small} key={user.id} id={user.id} name={user.name} followFunction={this.props.follow} unfollowFunction={this.props.unfollow} follow={user.followed} status={user.status} />)
    return <div className={styles.usersPage}>

      <div>
        {pages.map(page => {
          return <span style={spanStyle}
            className={this.props.currentPage === page && styles.selected}
            onClick={() => { this.onPageChanged(page) }}>{page}</span>
        })}
      </div>
      {usersElements}
      <button className={styles.showMoreButton}>show more</button>
    </div>
  }
}

export default Users

