import React, {useState, useEffect} from 'react';
import Label from './Label';
import TextItem from './TextItem';
import styled from 'styled-components';

const StyledTextItemContainer = styled.div`
  min-width: 250px;
  max-width: 100%;
  display: flex;
`;

// const ChatWindow = styled.div`
//   overflow-y: auto;
//   max-height: 100%;
//   display: grid;
// `;

const OwnTextItem = styled(StyledTextItemContainer)`
  // background-color: green;
`;
const Another = ({...props}) => {
  const [text, setText] = useState("");
  const [currentUser, setCurrentUser] = useState("")




useEffect(() => {
  if (currentUser === "") {
    setCurrentUser(`user_${Math.floor(Math.random() * (999999999 - 1000000))}:`)
  }
}, [currentUser])


const handleChange = (e) => {
  setText(e.target.value)
}

const handleSubmit = (e) => {
  props.ws.send(JSON.stringify({text: text, user: currentUser}))
  setText("")
}

const handleKeyDown = e => {
  if (e.keyCode === 13 && text.length > 0) {
    handleSubmit(e)
  }
}

  return (
    <>
      {props.allItems.map(item => (
        <div>
          <div>
            {item.user}
          </div>
          <div>
            {item.text}
          </div>
        </div>
      ))}
      <input onChange={e => handleChange(e)} value={text} onKeyDown={e => handleKeyDown(e)}></input>
      <button onClick={handleSubmit}>Submit</button>
      </>
  )
}

export default Another;