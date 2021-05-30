import { chatAPI } from "../api/chatAPI"

export const SET_MESSAGES = 'chat/SET_MESSAGES'
export const CLEAR_MESSAGES = 'chat/CLEAR_MESSAGES'

const initialState = {
  messages: []
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

    default:
      return state
  }
}

export const setMessages = messages => ({ type: SET_MESSAGES, payload: messages })
export const clearMessages = () => ({ type: CLEAR_MESSAGES })

let _newMessagesHandler = null

const newMessageHandlerCreator = (dispatch) => {
  if (_newMessagesHandler === null) {
    _newMessagesHandler = (messages) => {
      dispatch(setMessages(messages))
    }
  }
  return _newMessagesHandler
}

export const startMessagesListening = () => async (dispatch) => {
  chatAPI.start()
  chatAPI.subscribe(newMessageHandlerCreator(dispatch))
}

export const stopMessagesListening = () => async (dispatch) => {
  dispatch(clearMessages())
  chatAPI.unsubscribe(newMessageHandlerCreator(dispatch))
  chatAPI.stop()
}

export const sendMessage = (message) => async (dispatch) => {
  chatAPI.sendMessage(message)
}

export default chatReducer