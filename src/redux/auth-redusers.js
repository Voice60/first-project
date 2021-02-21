import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
      }
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    default:
      return state
  }
}
//actionsCreators
export const setAuthUserData = (userId, login, email, isAuth) => ({ type: SET_AUTH_USER_DATA, data: { userId, login, email, isAuth } })
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })

//thunks
export const getMe = () => (dispatch) => {
  dispatch(setIsFetching(true))
  return authAPI.me().then(response => {
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data
      dispatch(setAuthUserData(id, login, email, true))
      dispatch(setIsFetching(false))
    }
  })
}
export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(getMe())
    } else {
      dispatch(stopSubmit('login', {_error: response.data.messages}))
    }
  })
}
export const logout = (email, password, rememberMe) => (dispatch) => {
  authAPI.logout(email, password, rememberMe).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }
  })
}



export default authReducer;

window.state = initialState
