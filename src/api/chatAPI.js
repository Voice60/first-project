let subscribers = []
let ws

const openHandler = () => {
  //setConnected(true)

}
const closeHandler = () => {
  setTimeout(connect, 2000)
  // setErrorMessage('Соединение потеряно')
}
const messageHandler = (event) => {
  const newMessages = JSON.parse(event.data)
  subscribers.forEach(s => s(newMessages))
}
const errorHandler = () => {
  // setErrorMessage('Произошла ошибка')

}

const cleanUp = () => {
  ws?.removeEventListener('close', closeHandler)
  ws?.removeEventListener('message', messageHandler)
  ws?.removeEventListener('open', openHandler)
  ws?.removeEventListener('error', errorHandler)
}

const connect = () => {
  cleanUp()
  ws?.close()
  ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

  ws.addEventListener('close', closeHandler)
  ws.addEventListener('message', messageHandler)
  ws.addEventListener('open', openHandler)
  ws.addEventListener('error', errorHandler)
}

// const connect = () => {

//   ws?.close()
//   ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

//   ws.onclose = () => {
//     setTimeout(connect, 2000)
//   }
//   ws.onopen = () => {

//   }
//   ws.onerror = () => {

//   }
//   ws.onmessage = (event) => {
//     const newMessages = JSON.parse(event.data)
//     subscribers.forEach(s => s(newMessages))
//   }
// }



export const chatAPI = {
  start() {
    connect()
  },
  stop() {
    subscribers = []
    cleanUp()
    ws?.close()
  },
  subscribe(callback) {
    subscribers.push(callback)
  },
  unsubscribe(callback) {
    subscribers.filter(s => s !== callback)
  },
  sendMessage(message) {
    ws?.send(message)
  }
}