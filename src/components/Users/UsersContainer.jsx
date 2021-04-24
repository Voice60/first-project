import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setIsFollowing, unfollow, setUsersTh } from '../../redux/usersReducer';
import Users from './Users'
import Preloader from '../common/preloader/Preloader';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUsers, getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount } from '../../redux/usersSelectors';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setUsersTh(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (page) => {
    this.props.setUsersTh(page, this.props.pageSize)
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
    usersPage: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  WithAuthRedirect,
  connect(mapStateToProps, {
      follow, unfollow, setIsFollowing, setCurrentPage, setUsersTh
    })
)(UsersContainer)
