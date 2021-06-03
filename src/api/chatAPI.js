const subscribers = {
  'message': [],
  'connect': []
}
let ws

const openHandler = () => {
  notifySubscribersAboutStatus(true)
}
const closeHandler = () => {
  notifySubscribersAboutStatus(false)
  setTimeout(connect, 2000)
}
const messageHandler = (event) => {
  const newMessages = JSON.parse(event.data)
  subscribers['message'].forEach(s => s(newMessages))
}
const errorHandler = () => {
  notifySubscribersAboutStatus(false)
}

const cleanUp = () => {
  ws?.removeEventListener('close', closeHandler)
  ws?.removeEventListener('message', messageHandler)
  ws?.removeEventListener('open', openHandler)
  ws?.removeEventListener('error', errorHandler)
}

const notifySubscribersAboutStatus = (status) => {
  subscribers['connect'].forEach(s => {s(status)})
}

const connect = () => {
  cleanUp()
  ws?.close()
  ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
  notifySubscribersAboutStatus(false)
  ws.addEventListener('close', closeHandler)
  ws.addEventListener('message', messageHandler)
  ws.addEventListener('open', openHandler)
  ws.addEventListener('error', errorHandler)
}

export const chatAPI = {
  start() {
    connect()
  },
  stop() {
    subscribers['message'] = []
    cleanUp()
    ws?.close()
  },
  subscribe(event ,callback) {
    subscribers[event].push(callback)
  },
  unsubscribe(event, callback) {
    subscribers[event] = subscribers[event].filter(s => s !== callback)
  },
  sendMessage(message) {
    ws?.send(message)
  }
}