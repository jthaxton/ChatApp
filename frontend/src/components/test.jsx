import React, {useState} from 'react';
import Another from './another'
const Test = ({...props}) => {
  const [allItems, setAllItems] = useState([]);
  const [conn, setConn] = useState(false);

  const HOST = "wss://chat-service-1.herokuapp.com:40510"
  // location.origin.replace(/^http/, 'ws')
  const ws = new WebSocket(HOST);
  ws.onopen = () => {
    console.log('websocket is connected ...')
    ws.send('connected')
  }   
  ws.onmessage = (message) => {
    let parsed = JSON.parse(message.data);
      setAllItems([...allItems, {user: parsed.user, text: parsed.text}])
  
  }
  
  return (
    <div>
    <Another ws={ws} allItems={allItems}></Another>
  </div>
  )

}

export default Test;