import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import StoreContext from "../../storeContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {


  return (
    <StoreContext.Consumer> 
      { (store) => { 
        let state = store.getState();

        let addMessage = () => {
          store.dispatch(addMessageActionCreator())
        }

        let onMessageChange = (text) => {
          let action = updateNewMessageTextActionCreator(text)
          store.dispatch(action)
        }
        return <Dialogs
          state={state}
          addMessage={addMessage}
          onMessageChange={onMessageChange} />
      }
    }
    </StoreContext.Consumer>
  )
}

export default DialogsContainer;