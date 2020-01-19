import React, {useState} from 'react';
import Another from './another'
const Test = ({...props}) => {
  const [allItems, setAllItems] = useState([]);

  const ws = new WebSocket('ws://localhost:40510');
  ws.onopen = () => {
    console.log('websocket is connected ...')        // sending a send event to websocket server
    ws.send('connected')
  }   
  ws.onmessage = (message) => {
    let parsed = JSON.parse(message.data);
      console.log(message)
      console.log(parsed)
      // setAllItems("a")
      setAllItems([{user: parsed.user, text: parsed.text}])
  
  }
  return (
    <div>
    <Another ws={ws} allItems={allItems}></Another>
  </div>
  )

}

export default Test;