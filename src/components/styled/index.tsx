import styled from 'styled-components'
import { Link } from 'react-router-dom'

const mobile = 475
const clientWidth = document.documentElement.clientWidth
const isMobile = clientWidth < mobile
const fontSize = isMobile ? '1rem' : '1.4rem'

export const Layout = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(() => isMobile ? 'column' : 'row')};
  width: 100vw;
  height: ${isMobile ? 'auto' : '100vh'};
  font-family: Roboto, sans-serif;
  font-size: ${fontSize};
`

export const Wrapper = styled.div`
  padding-right: ${isMobile ? '35px' : '70px'};
  padding-left: ${isMobile ? '35px' : '70px'};
  border-radius: 57px;
  background: #C4C4C4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;

`

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 45px;
`

export const LogOutBtn = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  border: 0;
  outline: none;
  &:active {
    border: 0;
    outline: none;
  }
  background: transparent;
  cursor: pointer;
  font-size: ${fontSize};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2`
  padding-bottom: ${isMobile ? '35px' : '50px'};
  padding-top: ${isMobile ? '75px' : '100px'};
`

export const TimerTitle = styled.h3`
  margin: 0;
`

export const Input= styled.input`
  border: 0;
  display: block;
  &:focus {
    outline: none;
    border-bottom: 1px solid black;
  }
  box-sizing: border-box;
  font-size: ${fontSize};
  background-color:#C4C4C4;
  margin-bottom: 25px;
  padding: 10px;
`

export const ButtonSubmit = styled.button`
  padding-top: 15px;
  padding-left: 30px;
  padding-bottom: 15px;
  padding-right: 30px;
  background-color: #828282;
  border-radius: 63px;
  border: 0;
  &:focus {
    outline: none;
  }
  cursor: pointer;
  font-size: ${fontSize};
`

export const FooterWrapper = styled(Link)`
  padding-top: ${isMobile ? '10px' : '30px'};
  padding-bottom: ${isMobile ? '10px' : '30px'};
  color: #88888C;
  text-decoration: underline;
  cursor: pointer;
  font-size: ${isMobile ? '0.5rem' : '1rem'};
  span {
    color: #000;
  }
`

export const Image = styled.img`
  max-width: ${isMobile ? '100px' : '250px'};
  min-width: 100px;
  width: 100%;
  height: ${isMobile ? '100px' : 'auto'};
  margin-top: ${isMobile ? '85px' : '90px'};
  margin-bottom: ${isMobile ? '85px' : '90px'};
  margin-left: ${isMobile ? '50px' : '90px'};
  margin-right: ${isMobile ? '50px' : '90px'};
`

export const MinutesWrapper = styled.div`
  font-size: ${fontSize};
`
