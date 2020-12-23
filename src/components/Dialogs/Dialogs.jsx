import React from "react";
import styles from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'

const Dialogs = (props) => {
  let state = props.dialogsPage
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage()
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.onMessageChange(text)
  }

  let dialogsElements = state.dialogs.map(d => (<li><DialogsItem name={d.name} id={d.id} /></li>));
  let messagesElements = state.messages.map(m => (<li><Message message={m.message} /></li>))

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
              value={state.newMessageText}/>
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