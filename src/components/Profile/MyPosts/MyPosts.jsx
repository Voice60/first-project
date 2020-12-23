import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let state = props.profilePage

  let postElements = state.posts.map(el => <Post message={el.message} likes={el.likes} />)

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.onPostChange(text)
  }

  return (
    <div>
      <span>My posts</span>
      <div>
        <textarea onChange={onPostChange}
          ref={newPostElement}
          value={state.newPostText} />
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={styles.posts}>
        {postElements}
      </div>
    </div>
  ) 
}

export default MyPosts;