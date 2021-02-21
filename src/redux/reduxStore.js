import authReducer from "./auth-redusers";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from "./appReducer";
const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store;
