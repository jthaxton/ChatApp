import React, {useState} from 'react';
import Another from './another'
const Test = ({...props}) => {
  const ws = new WebSocket('ws://localhost:40510');
  return (
    <div>
    <Another ws={ws}></Another>
  </div>
  )

}

export default Test;