import React, {useState} from 'react';

const Another = ({...props}) => {
const [messages, setMessages] = useState([]);
    // event emmited when connected
props.ws.onopen = () => {
    console.log('websocket is connected ...')        // sending a send event to websocket server
    props.ws.send('connected')
}    // event emmited when receiving message 
props.ws.onmessage = (ev) => {
    console.log(ev)
    messages && setMessages(ev)
}
console.log(messages)

return (
  <div>
    {messages.data}
  </div>
)
}

export default Another;