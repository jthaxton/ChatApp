import React, {useState} from 'react';
import Another from './another'
const Test = ({...props}) => {
  const [allItems, setAllItems] = useState([]);
  const [conn, setConn] = useState(false);

  const ws = new WebSocket('ws://localhost:40510');
  ws.onopen = () => {
    console.log('websocket is connected ...')
    setConn(true);
    ws.send('connected')
  }   
  ws.onmessage = (message) => {
    let parsed = message.data;
      setAllItems([...allItems, {user: parsed.user, text: parsed.text}])
  
  }
  
  return (
    <div>
      {conn &&  (<div>YES</div>)}
      {!conn && (<div>NO</div>) }
    <Another ws={ws} allItems={allItems}></Another>
  </div>
  )

}

export default Test;