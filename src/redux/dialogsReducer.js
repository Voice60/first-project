const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const ADD_MESSAGE = 'ADD_MESSAGE'

let initialState = {
  dialogs: [
    { id: 1, name: 'Колька' },
    { id: 2, name: 'Пенчик' },
    { id: 3, name: 'Кирюша' }
  ],
  messages: [
    { id: 1, message: 'Пена передает привет' },
    { id: 2, message: 'Хай бебибонс энд хай дитд зяблс' },
    { id: 3, message: 'хачу аливье' },
    { id: 4, message: 'авыав' },
    { id: 5, message: 'ваыаы' },
  ],
  newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessageText
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: ''
      }
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText
      }
    default:
      return state
  }
}

export const addMessageActionCreator = () =>
  ({ type: ADD_MESSAGE })

export const updateNewMessageTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default dialogsReducer;
