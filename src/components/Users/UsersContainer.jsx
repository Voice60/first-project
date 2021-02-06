import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setIsFollowing, unfollow, getUsers } from '../../redux/usersReducer';
import Users from './User/Users'
import Preloader from '../common/preloader/Preloader';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.setCurrentPage, this.props.pageSize)
  }

  onPageChanged = (page) => {
    this.props.getUsers(page, this.props.pageSize)
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
          usersPage={this.props.usersPage}
          followingInProgress={this.props.followingInProgress} />
      } </>

  }
}

let mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default compose(
  WithAuthRedirect,
  connect(mapStateToProps, {
      follow, unfollow, setIsFollowing, setCurrentPage, getUsers
    })
)(UsersContainer)
