import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from '../../redux/usersReducer';
import Users from './User/Users'

class UsersAPI extends React.Component {
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
    return <Users follow={this.props.follow}
      unfollow={this.props.unfollow}
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged}
      usersPage={this.props.usersPage}/>
  }
}

let mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage))
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountAC(totalUsersCount))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI);