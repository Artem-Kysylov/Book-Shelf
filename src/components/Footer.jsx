// Import Libraries 
import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

// Import Assets 
import Logo from '../assets/logo-light.svg'


// Style
const WebsiteFooter = styled.footer`
      width: 100%;
      padding: 15px;
      height: 10vh;
      background: var(--black);

    @media (max-width: 428px) {
      height: auto;
  }
`

const Container = styled.div`
    max-width: 1200px;
    padding: 0 10px;
    margin: 0 auto;
`

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 428px) {
    flex-direction: column;
    gap: 20px;
  }
`

const LogoLink = styled(Link)`
  text-decoration: none;
`

const Copyright = styled.p`
    color: var(--beige);
    font-size: 13px;
`


// Component 
export const Footer = () => {
  return (
    <WebsiteFooter>
      <Container>
        <FooterWrapper>
            <LogoLink to='/'>
                <img src={Logo} alt="logo" />
            </LogoLink>
            <Copyright>
                Copyright. All rights reserved.
            </Copyright>
        </FooterWrapper>
      </Container>
    </WebsiteFooter>
  )
}
