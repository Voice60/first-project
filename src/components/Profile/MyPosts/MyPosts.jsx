import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { requiredField, maxLengthCreator } from '../../../utils/validators/validators';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

let maxLength10 = maxLengthCreator(10)

let PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder={'type'} name={'yourPost'} component={'textarea'} validate={[requiredField, maxLength10]} />
      <button>Add post</button>
    </form>
  )
}
const PostReduxForm = reduxForm({ form: 'PostForm' })(PostForm)

const MyPosts = (props) => {
  let state = props.profilePage

  let postElements = state.posts.map(el => <Post message={el.message} likes={el.likes} />)

  let addNewPost = (values) => {
    props.addPost(values.yourPost)
  }

  return (
    <div>
      <span>My posts</span>
      <div>
        <PostReduxForm onSubmit={addNewPost} />
      </div>
      <div className={styles.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;