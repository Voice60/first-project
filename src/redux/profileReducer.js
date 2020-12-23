const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

let initialState = {
  posts: [
    { name: 'Пенис', likes: 16, message: 'Хай' },
    { name: 'Пенис', likes: 16, message: 'i\'m gay' },
    { name: 'Пенис', likes: 16, message: 'Привет, это Пенесита' },
    { name: 'Пенис', likes: 16, message: 'Я нигер' }
  ],
  newPostText: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        name: 'Пенис',
        message: state.newPostText,
        likes: 0
      }
      return {
         ...state,
         posts: [ ...state.posts, newPost ],
         newPostText: ''
        }
    case UPDATE_NEW_POST_TEXT:
      return {
         ...state,
         newPostText: action.newText 
        }
    default:
      return state
  }
}

export const addPostActionCreator = () =>
  ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;