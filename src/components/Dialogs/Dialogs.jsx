import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import styles from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'

const Dialogs = (props) => {
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator())
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    let action = updateNewMessageTextActionCreator(text)
    props.dispatch(action)
  }

  let dialogsElements = props.dialogsPage.dialogs.map(d => (<li><DialogsItem name={d.name} id={d.id} /></li>));
  let messagesElements = props.dialogsPage.messages.map(m => (<li><Message message={m.message} /></li>))

  return (
    <div className={styles.dialogsPage}>
      <div className={styles.searchMenu}>

      </div>
      <div className={styles.dialogsWindow}>
        <div className={styles.dialogsList}>
          <ul>
            {dialogsElements}
          </ul>
        </div>
        <div className={styles.messages}>
          <ul>
            {messagesElements}
          </ul>
          <div>
            <textarea onChange={onMessageChange}
              ref={newMessageElement}
              value={props.dialogsPage.newMessageText}/>
          </div>
          <div>
            <button onClick={addMessage}>Send message</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dialogs;