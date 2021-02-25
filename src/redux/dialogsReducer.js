const ADD_MESSAGE = 'dialogs/ADD_MESSAGE'

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
  ]
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 6,
        message: action.message
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
      }
    default:
      return state
  }
}

export const addMessageActionCreator = (message) =>
  ({ type: ADD_MESSAGE, message })

export default dialogsReducer;
