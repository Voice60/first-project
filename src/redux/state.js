import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const ADD_MESSAGE = 'ADD_MESSAGE'

let store = {
  _state: {
    dialogsPage: {
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
    },

    profilePage: {
      posts: [
        { name: 'Пенис', likes: 16, message: 'Хай' },
        { name: 'Пенис', likes: 16, message: 'i\'m gay' },
        { name: 'Пенис', likes: 16, message: 'Привет, это Пенесита' },
        { name: 'Пенис', likes: 16, message: 'Я нигер' }
      ],
      newPostText: ''
    }

  },
  _callSubscriber() {
    console.log('ban');
  },

  getState() { return this._state },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;
