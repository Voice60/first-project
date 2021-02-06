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
        isAuth: true
      }
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    default:
      return state
  }
}
//actionsCreators
export const setAuthUserData = (userId, login, email) => ({ type: SET_AUTH_USER_DATA, data: { userId, login, email } })
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })

//thunks
export const getMe = () => (dispatch) => {
  dispatch(setIsFetching(true))
  authAPI.me().then(response => {
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data
      dispatch(setAuthUserData(id, login, email))
      dispatch(setIsFetching(false))
    }
  })
}



export default authReducer;

window.state = initialState
