import React from 'react';
import styled from 'styled-components';
// import Label from './Label';
// import CheckBox from './CheckBox';
// import Text from './Text';

const StyledTextItem = styled.div`
  background-color:rgb(242, 243, 245);
  border-bottom-left-radius:18px;
  border-bottom-right-radius:18px;
  border-top-left-radius:18px;
  border-top-right-radius:18px;
  box-sizing:border-box;
  color:rgb(28, 30, 33);
  direction:ltr;
  display:inline-block;
  font-family:system-ui, -apple-system, system-ui, ".SFNSText-Regular", sans-serif;
  font-size:13px;
  height:fit-content;
  line-height:16px;
  list-style-type:none;
  margin-bottom:0px;
  margin-left:0px;
  margin-right:0px;
  margin-top:0px;
  max-width:100%;
  overflow-wrap:break-word;
  position:relative;
  text-align:left;
  white-space:normal;
  width:fit-content;
  word-break:break-word;
  padding: 10px;
  max-width: 500px;
  min-width: 250px;
  width: min-content;
`;

// const DependenciesContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

const TextItem = ({...props}) => {
  
  return (
    <StyledTextItem>
      {/* <Label>
      <CheckBox {...props} disabled={props.todo.dependencies.length > 0} onChange={e => props.onChange(e, props.idx)}/>
        {props.todo.todo}
      </Label> */}
      {/* <DependenciesContainer>
      {props.todo.dependencies && props.todo.dependencies.map(dependency => (
        <Text>
          {dependency}
        </Text>
      ))} */}
      {/* </DependenciesContainer> */}
      {props.children}
    </StyledTextItem>
  );
}

export default TextItem;