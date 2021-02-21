import React from 'react';
import { connect } from 'react-redux';
import { addPost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPost(newPostText))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);