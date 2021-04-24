import { getMe } from "./auth-redusers"

const SET_INITIALIZED = 'app/SET_INITIALIZED'

let initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}
//actionsCreators
export const initializedSuccess = () => ({ type: SET_INITIALIZED})

//thunks
export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getMe())
  Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
}

export default appReducer;
