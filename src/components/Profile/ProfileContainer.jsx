import React from 'react';
import axios from 'axios';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, setPhoto, saveProfile } from '../../redux/profileReducer.js';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import Profile from './Profile.jsx';
import { Redirect, withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api.js';
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  refrezhProfile() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
      if (!userId) { this.props.history.push('/login') }
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refrezhProfile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refrezhProfile()
    }
  }

  render() {
    return <>
      <Profile {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        setPhoto={this.props.setPhoto}
        saveProfile={this.props.saveProfile} />
    </>
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

export default compose(
  connect(mapStateToProps, {
    getUserProfile, getStatus, updateStatus, setPhoto, saveProfile
  }),
  withRouter,
  WithAuthRedirect
)(ProfileContainer)
