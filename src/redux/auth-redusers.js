import { message } from "antd"

import { authAPI, securityAPI } from "../api/api"
import { setErrorMessage } from "./errorReducer"

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA'
const SET_IS_FETCHING = 'auth/SET_IS_FETCHING'
const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL'

let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  captchaURL: null,
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
    case GET_CAPTCHA_URL:
      return { ...state, captchaURL: action.captchaURL }
    default:
      return state
  }
}
//actionsCreators
export const setAuthUserData = (userId, login, email, isAuth) => ({ type: SET_AUTH_USER_DATA, data: { userId, login, email, isAuth } })
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })
export const setCaptcha = (captchaURL) => ({ type: GET_CAPTCHA_URL, captchaURL })


//thunks
export const getMe = () => async (dispatch) => {
  let response = await authAPI.me()
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data
    dispatch(setAuthUserData(id, login, email, true))
  }
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe, captcha)
  if (response.data.resultCode === 0) {
    dispatch(getMe())
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptcha())
    }
    dispatch(setErrorMessage(response.data.messages))
  }
}
export const logout = (email, password, rememberMe, captcha) => async (dispatch) => {
  let response = await authAPI.logout(email, password, rememberMe, captcha)
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}
export const getCaptcha = () => async (dispatch) => {
  let response = await securityAPI.getCaptcha()
  const captchaURL = response.data.url
  dispatch(setCaptcha(captchaURL))
}



export default authReducer;

window.state = initialState
