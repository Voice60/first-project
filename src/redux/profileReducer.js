import { profileAPI, usersAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'GET_STATUS'

let initialState = {
  posts: [
    { name: 'Пенис', likes: 16, message: 'Хай' },
    { name: 'Пенис', likes: 16, message: 'i\'m gay' },
    { name: 'Пенис', likes: 16, message: 'Привет, это Пенесита' },
    { name: 'Пенис', likes: 16, message: 'Я нигер' }
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        name: 'Пенис',
        message: action.newPostText,
        likes: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state
  }
}

// actionsCreators
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

// thunks

export const getUserProfile = (userId) => (dispatch) => {
  return usersAPI.setUserProfile(userId).then(response => {
    dispatch(setUserProfile(response.data))
  })
}
export const getStatus = (userId) => (dispatch) => {
  return profileAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data))
  })
}
export const updateStatus = (status) => (dispatch) => {
  return profileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
    
  })
}

export default profileReducer;