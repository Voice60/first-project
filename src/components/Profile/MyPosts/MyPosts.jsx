import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postElements = props.posts.map(el => <Post message={el.message} likes={el.likes} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text)
    props.dispatch(action)
  }

  return (
    <div>
      <span>My posts</span>
      <div>
        <textarea onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText} />
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={styles.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;