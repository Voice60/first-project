import React from 'react';
import { connect } from 'react-redux';
import { addPost, updateNewPostText } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPost())
    },
    onPostChange: (text) => {
      let action = updateNewPostText(text);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);