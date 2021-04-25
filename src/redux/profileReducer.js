import { message } from "antd"
import { stopSubmit } from "redux-form"
import { profileAPI, usersAPI } from "../api/api"
import { setErrorMessage } from "./errorReducer"

const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/GET_STATUS'
const SET_PHOTO_SUCCESS = 'profile/SET_PHOTO_SUCCESS'

let initialState = {
  posts: [
    { name: 'Пенис', likes: 16, message: 'Хай' },
    { name: 'Пенис', likes: 16, message: 'i\'m gay' },
    { name: 'Пенис', likes: 16, message: 'Привет, это Пенесита' },
    { name: 'Пенис', likes: 16, message: 'Я нигер' },
    { name: 'Кирюша', likes: 54, message: 'Я пидорас' },
    { name: 'Пенис', likes: 16, message: 'Я нигер' },
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
    case SET_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
      }
    default:
      return state
  }
}

// actionsCreators
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const setPhotoSuccess = (photos) => ({ type: SET_PHOTO_SUCCESS, photos })

// thunks

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.setUserProfile(userId)

  dispatch(setUserProfile(response.data))
}
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)

  dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}
export const setPhoto = (photo) => async (dispatch) => {
  let response = await profileAPI.savePhoto(photo)

  if (response.data.resultCode === 0) {
    dispatch(setPhotoSuccess(response.data.data.photos))
  }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  let response = await profileAPI.saveProfile(profile)
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId))
  } else {
    dispatch(setErrorMessage(response.data.messages[0]))
    return Promise.reject(response.data.messages[0]);
  }
}

export default profileReducer;