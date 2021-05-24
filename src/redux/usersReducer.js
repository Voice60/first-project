import { usersAPI } from "../api/api"

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_PAGE_SIZE = 'users/SET_PAGE_SIZE'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT'
const SET_IS_FETCHING = 'users/SET_IS_FETCHING'
const IS_FOLLOWING_PROGRESS = 'users/IS_FOLLOWING_PROGRESS'
const SET_TERM = 'users/SET_TERM'
const SET_FRIEND_FILTER = 'users/SET_FRIEND_FILTER'

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
  term: '',
  friendFilter: null
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
      return { ...state, users: action.users }
    case SET_TERM:
      return { ...state, term: action.term, currentPage: 1 }
    case SET_FRIEND_FILTER:
      return { ...state, friendFilter: action.friendFilter, currentPage: 1 }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount }
    case SET_PAGE_SIZE:
      return { ...state, pageSize: action.pageSize, currentPage: 1 }
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    case IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state
  }
}

//actionCreators 

export const followSuccess = (userid) => ({ type: FOLLOW, userid })
export const unfollowSuccess = (userid) => ({ type: UNFOLLOW, userid })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setTerm = (term) => ({ type: SET_TERM, term })
export const setFriendFilter = (friendFilter) => ({ type: SET_FRIEND_FILTER, friendFilter })
export const setPageSize = (pageSize) => ({ type: SET_PAGE_SIZE, pageSize })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })
export const setIsFollowing = (followingInProgress, userId) => ({ type: IS_FOLLOWING_PROGRESS, followingInProgress, userId })

//thunks

export const getUsers = (currentPage, pageSize, term, friendFilter) => async (dispatch) => {
  dispatch(setIsFetching(true))
  let data = await usersAPI.getUsers(currentPage, pageSize, term, friendFilter)

  dispatch(setCurrentPage(currentPage))
  dispatch(setUsers(data.items))
  dispatch(setTotalUsersCount(data.totalCount))
  dispatch(setIsFetching(false))
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(setIsFollowing(true, userId))
  let response = await apiMethod(userId)

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(setIsFollowing(false, userId))
}

export const follow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}

export const unfollow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}


export default usersReducer;

