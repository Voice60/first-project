import { chatAPI } from "../api/chatAPI"

export const SET_MESSAGES = 'chat/SET_MESSAGES'
export const CLEAR_MESSAGES = 'chat/CLEAR_MESSAGES'
export const SET_CONNECTED = 'chat/SET_CONNECTED'

const initialState = {
  messages: [],
  isConnected: false
}

const chatReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MESSAGES:
      return {
        ...state,
        messages: [...state.messages, ...payload]
      }
    case CLEAR_MESSAGES:
      return {
        ...state,
        messages: []
      }

    case SET_CONNECTED:
      return {
        ...state,
        isConnected: payload
      }

    default:
      return state
  }
}

export const setMessages = messages => ({ type: SET_MESSAGES, payload: messages })
export const clearMessages = () => ({ type: CLEAR_MESSAGES })
export const setConnected = (status) => ({ type: SET_CONNECTED, payload: status })

let _newMessagesHandler = null

const newMessageHandlerCreator = (dispatch) => {
  if (_newMessagesHandler === null) {
    _newMessagesHandler = (messages) => {
      dispatch(setMessages(messages))
    }
  }
  return _newMessagesHandler
}
let _statusChangedHandler = null

const statusChangedHandlerCreator = (dispatch) => {
  if (_statusChangedHandler === null) {
    _statusChangedHandler = (status) => {
      dispatch(setConnected(status))
    }
  }
  return _statusChangedHandler
}

export const startMessagesListening = () => async (dispatch) => {
  chatAPI.start()
  chatAPI.subscribe('message', newMessageHandlerCreator(dispatch))
  chatAPI.subscribe('connect', statusChangedHandlerCreator(dispatch))
}

export const stopMessagesListening = () => async (dispatch) => {
  dispatch(clearMessages())
  chatAPI.unsubscribe('message', newMessageHandlerCreator(dispatch))
  chatAPI.unsubscribe('connect', statusChangedHandlerCreator(dispatch))
  chatAPI.stop()
}

export const sendMessage = (message) => async (dispatch) => {
  chatAPI.sendMessage(message)
}

export default chatReducer