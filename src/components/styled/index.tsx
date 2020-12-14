import styled from 'styled-components'

type TIsMobile = {
  isMobile?: boolean,
}

export const Layout = styled.div<TIsMobile>`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${((props) => props.isMobile ? 'column' : 'row')};
  width: 100vw;
  height: ${((props) => props.isMobile ? 'auto' : '100vh')};
  font-family: Roboto, sans-serif;
`

export const Wrapper = styled.div<TIsMobile>`
  border-radius: 57px;
  background: #C4C4C4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 45px;
`

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-size: 24px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
