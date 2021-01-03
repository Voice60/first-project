const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
  users: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userid) {
            return { ...user, followed: true }
          }
          return user
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userid) {
            return { ...user, followed: false }
          }
          return user
        })
      }
    case SET_USERS:
      return {...state, users: [...state.users, ...action.users]}
     default:
      return state 
  }
}

export const followAC = (userid) =>
  ({ type: FOLLOW, userid })

export const unfollowAC = (userid) =>
  ({ type: UNFOLLOW, userid })
export const setUsersAC = (users) =>
  ({ type: SET_USERS, users })

export default usersReducer;

window.userInfo = initialState
