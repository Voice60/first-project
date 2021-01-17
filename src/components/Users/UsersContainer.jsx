import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setIsFetching, setTotalUsersCount, setUsers, unfollow } from '../../redux/usersReducer';
import Users from './User/Users'
import Preloader from '../common/preloader/Preloader';
import { UsersAPI } from '../../api/api';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true)
      UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount)
        this.props.setIsFetching(false)
      })
  }

  onPageChanged = (page) => {
    this.props.setIsFetching(true)
    this.props.setCurrentPage(page)
    UsersAPI.getUsers(page, this.props.pageSize)
      .then(data => {
        this.props.setUsers(data.items)
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
  })(UsersContainer);