import React from 'react'
import styled from 'styled-components'

const InputItem = styled.input`
  border: 0;
  display: block;
  &:focus {
    outline: none;
    border-bottom: 1px solid black;
  }
  box-sizing: border-box;
  font-size: 24px;
  background-color:#C4C4C4;
  margin-bottom: 25px;
  padding: 10px;
`

interface IInputProp {
  placeholder: string,
  handleSetValue?: (value: string) => void,
  name: string,
}

const Input: React.FC<IInputProp> = ({ placeholder, name }) => {

  return (
    <InputItem 
      placeholder={placeholder} 
      name={name}
    />
)}

export default Input
