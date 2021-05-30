import Preloader from '../../components/common/preloader/Preloader';
import { sendMessage, startMessagesListening, stopMessagesListening } from '../../redux/chatReducer';
import { setErrorMessage } from '../../redux/errorReducer';
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import TextArea from 'antd/lib/input/TextArea'
import Text from 'antd/lib/typography/Text'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const ChatPage = () => {
  const dispatch = useDispatch()
  const messages = useSelector(state => state.chat.messages)
  const [yourMessage, setYourMessage] = useState('')
  // const [connected, setConnected] = useState(false)

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

  // if (!connected) { return <Preloader /> }

  return (
    <div>
      <div>
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
      </div>
      <TextArea value={yourMessage} onChange={(e) => setYourMessage(e.target.value)} rows={3} />
      <Button onClick={() => { sendMessageHandler() }} type="primary">Отправить</Button>
    </div>
  )
}

export default ChatPage
