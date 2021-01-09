const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
  posts: [
    { name: 'Пенис', likes: 16, message: 'Хай' },
    { name: 'Пенис', likes: 16, message: 'i\'m gay' },
    { name: 'Пенис', likes: 16, message: 'Привет, это Пенесита' },
    { name: 'Пенис', likes: 16, message: 'Я нигер' }
  ],
  newPostText: '',
  profile: null
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
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    default:
      return state
  }
}

export const addPost = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;