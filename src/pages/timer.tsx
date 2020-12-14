import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import { Wrapper, Layout, TimeWrapper, LogOutBtn } from '../components/styled'
import fire, { db } from '../fire'

//TODO: Refactor styled
const ImageWrapper = styled.div`
  padding: 90px;
`

const Image = styled.img`
  width: 250px;
  height: 250px;
`

const MinutesWrapper = styled.div``

const Timer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [desktopTime, setDesktopTime] = useState(0)
  const [mobileTime, setMobileTime] = useState(0)

  const user = fire.auth().currentUser
  const usersRef = db.ref(`users/${user.uid}`)

  React.useEffect(() => {
    if (window.innerWidth < 800) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [])

  React.useEffect(() => {
    let interval = null

    if (isMobile) {
      interval = setInterval(() => {
        setMobileTime(s => s + 1)
        usersRef.update({ timeMobile: mobileTime + 1 })
      }, 1000)
    } else if (!isMobile) {
      interval = setInterval(() => {
        setDesktopTime(s => s + 1)
        usersRef.update({ timeDesktop: desktopTime + 1 })
      }, 1000)
    }

    return () => clearInterval(interval)

  }, [desktopTime, mobileTime])

  return (
    <Layout isMobile={isMobile}>
      <LogOutBtn onClick={() => fire.auth().signOut()}>Log out</LogOutBtn>
      <TimeWrapper>
        <Wrapper>
          <ImageWrapper>
            <Image src={'/timer.svg'} alt="Timer" />
          </ImageWrapper>
        </Wrapper>
        <MinutesWrapper>{`${desktopTime}s`}</MinutesWrapper>
      </TimeWrapper>

      <TimeWrapper>
        <Wrapper>
          <ImageWrapper>
            <Image src={'/timer.svg'} alt="Timer" />
          </ImageWrapper>
        </Wrapper>
        <MinutesWrapper>{`${mobileTime}s`}</MinutesWrapper>
      </TimeWrapper>

    </Layout>
  )
}

export default Timer
