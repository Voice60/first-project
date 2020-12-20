import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator())
  }

  let onMessageChange = (text) => {
    let action = updateNewMessageTextActionCreator(text)
    props.store.dispatch(action)
  }

  return (
    <Dialogs
      state={state}
      addMessage={addMessage}
      onMessageChange={onMessageChange} />
  )
}

export default DialogsContainer;