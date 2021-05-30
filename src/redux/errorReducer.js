export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'

const initialState = {
  errorMessage: null
}

const errorReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.errorMessage }

    default:
      return state
  }
}

export const setErrorMessage = (errorMessage) => ({
  type: SET_ERROR_MESSAGE,
  errorMessage
})

export default errorReducer