import React, {useState} from 'react';
import Another from './another'
const Test = ({...props}) => {
  const [allItems, setAllItems] = useState([]);

  const ws = new WebSocket('ws://localhost:443');
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