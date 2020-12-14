import React from 'react'
import styled from 'styled-components'

const TitleItem = styled.h2`
  padding-top: 50px;
  padding-left: 200px;
  padding-right: 200px;
  padding-bottom: 50px;
`

interface ITitleProps {
  title: string,
}

const Title: React.FC<ITitleProps> = ({ title }) => (
  <TitleItem>
    {title}
  </TitleItem>
)

export default Title
