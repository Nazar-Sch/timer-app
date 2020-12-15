import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { 
  Wrapper, 
  Layout, 
  TimeWrapper, 
  LogOutBtn,
  Image,
  MinutesWrapper,
  TimerTitle,
} from '../components/styled'
import fire, { db } from '../fire'

const Timer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [desktopTime, setDesktopTime] = useState(0)
  const [mobileTime, setMobileTime] = useState(0)

  const _s = 1000
  const _mobileScreen = 475
  const user = fire.auth().currentUser
  const usersRef = db.ref(`users/${user.uid}`)
  const screenWidth = document.documentElement.clientWidth

  useEffect(() => {
    usersRef.on('value', (snapshot) => {
      let { timeDesktop, timeMobile } = snapshot.val()
      setDesktopTime(timeDesktop)
      setMobileTime(timeMobile)
    })
  }, [])

  useEffect(() => {
    if (screenWidth < _mobileScreen) {
      setIsMobile(true)
    }

    let interval = null
    if (isMobile) {
      interval = setInterval(() => {
        setMobileTime(s => s + 1)
        usersRef.update({ timeMobile: mobileTime + 1 })
      }, _s)
    } else if (!isMobile) {
      interval = setInterval(() => {
        setDesktopTime(s => s + 1)
        usersRef.update({ timeDesktop: desktopTime + 1 })
      }, _s)
    }

    return () => clearInterval(interval)
  }, [desktopTime, mobileTime, usersRef, screenWidth])

  return (
    <Layout>

      <LogOutBtn onClick={() => fire.auth().signOut()}>Log out</LogOutBtn>

      <TimeWrapper>
        <TimerTitle>Desktop</TimerTitle>
        <Wrapper>
          <Image src={'/timer.svg'} alt="Timer" />
        </Wrapper>
        <MinutesWrapper>{moment.utc(desktopTime*1000).format("HH:mm:ss")}</MinutesWrapper>
      </TimeWrapper>

      <TimeWrapper>
        <TimerTitle>Mobile</TimerTitle>
        <Wrapper>
          <Image src={'/timer.svg'} alt="Timer" />
        </Wrapper>
        <MinutesWrapper>{moment.utc(mobileTime*1000).format("HH:mm:ss")}</MinutesWrapper>
      </TimeWrapper>
  
    </Layout>
  )
}

export default Timer
