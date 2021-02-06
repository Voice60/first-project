import React from 'react';
import axios from 'axios';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profileReducer.js';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import Profile from './Profile.jsx';
import { Redirect, withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api.js';
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    !userId && (userId = 2)
    this.props.getUserProfile(userId)
  }

  render() {
    return <>
      <Profile {...this.props} profile={this.props.profile} />
    </>
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

export default compose(
  connect(mapStateToProps, {
    getUserProfile
  }),
  withRouter,
  WithAuthRedirect
)(ProfileContainer)
