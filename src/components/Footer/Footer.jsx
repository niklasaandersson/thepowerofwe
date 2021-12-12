import React from 'react'
import logo from './logo.png'
import styled from 'styled-components'
import { FaEnvelope } from 'react-icons/fa'

const FooterDiv = styled.div`
    font-size: 14px;
    background-color: rgba(29,29,31,0.72);
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    color: #d1cfcf;
    font-weight: 300;
`

const LogoDiv = styled.div`
    width: 40%; 
    height: 90px;
    display: flex;
    align-items: center;
`

const LinksDiv = styled.div`
    width: 30%; 
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`

const ContactDiv = styled.div`
    width: 30%; 
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`

function Footer () {
  return (
    <FooterDiv>
      <LogoDiv>
        <img src={logo} style={{ height: '50px', marginLeft: '20px' }} />
      </LogoDiv>

      <LinksDiv>
        <h4>Links</h4>
        <a>ILO Asia-Pacific</a>
        <a>AWEN</a>
        <a>PhilWEN</a>
      </LinksDiv>
      <ContactDiv>
        <strong>Contact us</strong>
        <FaEnvelope />
      </ContactDiv>

    </FooterDiv>
  )
}

export default Footer
