import React from "react";
import styles from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, requiredField } from "../../utils/validators/validators";

const maxLength100 = maxLengthCreator(100)

let MessageForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder={'your message'} name={'message'} component={'textarea'} validate={[requiredField, maxLength100]} />
      <div><button>send Message</button></div>
    </form>
  )
}

const MessageReduxForm = reduxForm({ form: 'message' })(MessageForm)


const Dialogs = (props) => {
  let state = props.dialogsPage

  let addNewMessage = (values) => {
    props.addMessage(values.message)
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
          <MessageReduxForm onSubmit={addNewMessage}/>
        </div>
      </div>

    </div>
  )
}

export default Dialogs;