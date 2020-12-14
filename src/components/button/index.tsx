import React from 'react'
import styled from 'styled-components'

const ButtonItem = styled.button`
  padding-top: 15px;
  padding-left: 30px;
  padding-bottom: 15px;
  padding-right: 30px;
  background-color: #828282;
  border-radius: 63px;
  border: 0;
  font-size: 16px;
  cursor: pointer;
`

interface IButtonProps {
  title: string,
  handleClick?: (event: any) => Promise<void>,
}

const Button: React.FC<IButtonProps> = ({ title }) => (
  <ButtonItem type="submit">{title}</ButtonItem>
)

export default Button
