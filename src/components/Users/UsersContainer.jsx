import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setIsFetching, setTotalUsersCount, setUsers, unfollow } from '../../redux/usersReducer';
import Users from './User/Users'
import Preloader from '../common/preloader/Preloader';

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
        this.props.setIsFetching(false)
      })
  }

  onPageChanged = (page) => {
    this.props.setIsFetching(true)
    this.props.setCurrentPage(page)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setIsFetching(false)
      })

  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> :
        <Users follow={this.props.follow}
          unfollow={this.props.unfollow}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          usersPage={this.props.usersPage} />
      } </>

  }
}

let mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

export default connect(mapStateToProps,
  {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching
  })(UsersAPI);