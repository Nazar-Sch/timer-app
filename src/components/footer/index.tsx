import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FooterWrapper = styled(Link)`
  padding-top: 30px;
  padding-bottom: 30px;
`

const Text = styled.span`
  color: #88888C;
  text-decoration: underline;
`

const LinkToPage = styled.span`
  color: #000;
  text-decoration: underline;
  display: inline;
  cursor: pointer;
`

interface IFooterProps {
  text: string,
  linkText: string,
  url: any,
}

const Footer: React.FC<IFooterProps> = ({ text, linkText, url }) => (
  <FooterWrapper to={url}>
    <Text>{text}</Text>
    <LinkToPage>{linkText}</LinkToPage>
  </FooterWrapper>
)

export default Footer
