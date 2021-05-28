import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import TextArea from 'antd/lib/input/TextArea'
import Text from 'antd/lib/typography/Text'
import React, { useEffect, useRef, useState } from 'react'

import Preloader from '../../components/common/preloader/Preloader';
import { setErrorMessage } from '../../redux/errorReducer';

const ChatPage = () => {
  const [messages, setMessages] = useState([])
  const [yourMessage, setYourMessage] = useState('')
  const socket = useRef()
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    socket.current = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    socket.current.onopen = () => {
      setConnected(true)
    }
    socket.current.onmessage = (event) => {
      const newMessages = JSON.parse(event.data)
      setMessages(prev => [...prev, ...newMessages])
    }
    socket.current.onclose = () => {
      setErrorMessage('Соединение потеряно')
    }
    socket.current.onerror = () => {
      setErrorMessage('Произошла ошибка')
    }
  }, [])

  const sendMessage = async () => {
    if (!yourMessage) {
      return
    }
    socket.current.send(yourMessage)
    setYourMessage('')
  }

  if (!connected) {return <Preloader />}

  return (
    <div>
      <div>
        {messages.map((message, index) => {
          return (
            <div key={index} style={{ margin: '10px 0', display: 'flex' }}>
              {message.photo 
              ? <img style={{ width: '36px', height: '36px', borderRadius: '50%', margin: '5px 10px 5px 5px' }} src={message.photo} alt={message.userName} />
              : <Avatar size={36} style={{ backgroundColor: '#87d068', margin: '5px 10px 5px 5px'}} icon={<UserOutlined />} />}
               
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Text strong>{message.userName}</Text>
                <Text>{message.message}</Text>
              </div>
            </div>
          )
        })}
        <TextArea value={yourMessage} onChange={(e) => setYourMessage(e.target.value)} rows={3} />
        <Button onClick={() => { sendMessage() }} type="primary">Отправить</Button>
      </div>
    </div>
  )
}

export default ChatPage
