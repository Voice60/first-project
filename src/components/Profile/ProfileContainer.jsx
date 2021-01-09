import React from 'react';
import axios from 'axios';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer.js';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import Profile from './Profile.jsx';

class ProfileContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return <>
      <Profile {...this.props} profile={this.props.profile} />
    </>
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

export default connect(mapStateToProps, {
setUserProfile
})(ProfileContainer)