import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import StoreContext from '../../../storeContext';
import MyPosts from "./MyPosts";


const MyPostsContainer = () => {
  //

  return (
    <StoreContext.Consumer> 
      { (store) => {
        let state = store.getState().profilePage;

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        }

        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        }
        return <MyPosts
          updateNewPostText={onPostChange}
          addPost={addPost}
          profilePage={state} />
      }
    }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;