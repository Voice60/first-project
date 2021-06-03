import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import TextArea from 'antd/lib/input/TextArea'
import Text from 'antd/lib/typography/Text'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Preloader from '../../components/common/preloader/Preloader';
import { sendMessage, startMessagesListening, stopMessagesListening } from '../../redux/chatReducer';
import { setErrorMessage } from '../../redux/errorReducer';

const ChatPage = () => {
  const dispatch = useDispatch()
  const messages = useSelector(state => state.chat.messages)
  const [yourMessage, setYourMessage] = useState('')
  const isConnected = useSelector(state => state.chat.isConnected)

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  useEffect(() => {
    dispatch(startMessagesListening())
    return () => {
      dispatch(stopMessagesListening())
    }
  }, [])

  const sendMessageHandler = () => {
    if (!yourMessage) {
      return
    }
    dispatch(sendMessage(yourMessage))
    setYourMessage('')
  }

  return (
    <div>
      {!isConnected
        ? <Preloader />
        : <div>
          {messages.map((message, index) => {
            return (
              <div key={index} style={{ margin: '10px 0', display: 'flex' }}>
                {message.photo
                  ? <img style={{ width: '36px', height: '36px', borderRadius: '50%', margin: '5px 10px 5px 5px' }} src={message.photo} alt={message.userName} />
                  : <Avatar size={36} style={{ backgroundColor: '#87d068', margin: '5px 10px 5px 5px' }} icon={<UserOutlined />} />}

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Text strong>{message.userName}</Text>
                  <Text>{message.message}</Text>
                </div>
              </div>
            )
          })}
        </div>}
      <TextArea value={yourMessage} onChange={(e) => setYourMessage(e.target.value)} rows={3} />
      <Button onClick={() => { sendMessageHandler() }} type="primary">Отправить</Button>
      <div ref={messagesEndRef} />
    </div>
  )
}

export default ChatPage
