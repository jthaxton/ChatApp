import React from 'react';

const Test = ({...props}) => {
  const ws = new WebSocket('ws://localhost:40510');    // event emmited when connected
  ws.onopen = () => {
      console.log('websocket is connected ...')        // sending a send event to websocket server
      ws.send('connected')
  }    // event emmited when receiving message 
  ws.onmessage = (ev) => {
      console.log(ev);
  }
  return (
    <div>
    hi
  </div>
  )

}

export default Test;