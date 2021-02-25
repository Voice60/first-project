import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA'
const SET_IS_FETCHING = 'auth/SET_IS_FETCHING'

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
export const getMe = () => async (dispatch) => {
  let response = await authAPI.me()
  
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data
    dispatch(setAuthUserData(id, login, email, true))
  }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe)

  if (response.data.resultCode === 0) {
    dispatch(getMe())
  } else {
    dispatch(stopSubmit('login', { _error: response.data.messages }))
  }
}
export const logout = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.logout(email, password, rememberMe)

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}



export default authReducer;

window.state = initialState
