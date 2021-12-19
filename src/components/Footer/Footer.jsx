import React from 'react'
import logo from './logo.png'
import styled from 'styled-components'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const FooterDiv = styled.div`
    font-size: 14px;
    background-color: #ec5ea5;
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    color: rgb(42,47,184);
    font-weight: 300;
    height: 200px;

    @media(max-width:750px) {
      flex-direction: column;
      height: 370px;

    }
`

const LogoDiv = styled.div`
    width: 40%; 
    height: 90px;
    display: flex;
    align-items: center; 

    @media(max-width:750px) {
      margin-top: 10px;
      margin-bottom: 20px;
      width: 100%;
      justify-content: center;
    }
`

const LinksDiv = styled.div`
    width: 30%; 
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media(max-width:750px) {
     margin-bottom: 30px;
     width: 40%; 
    }
`

const ContactDiv = styled.div`
    width: 30%; 
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media(max-width:750px) {
     width: 40%; 
    }
`

function Footer () {
  return (
    <FooterDiv>
      <LogoDiv>
        <img src={logo} style={{ height: '50px', marginLeft: '20px' }} />
      </LogoDiv>

      <LinksDiv>
        <h5 style={{ fontWeight: '700' }}>Links</h5>
        <a href='https://www.ilo.org/' style={{ color: 'rgb(42,47,184)' }}>ILO Asia-Pacific</a>
        <a href='https://www.asean-bac.org/' style={{ color: 'rgb(42,47,184)' }}>AWEN</a>
        <a href='https://philwen.org/' style={{ color: 'rgb(42,47,184)' }}>PhilWEN</a>
      </LinksDiv>

      <ContactDiv>
        <h5 style={{ fontWeight: '700' }}>Contact us</h5>
        <a href='mailto:' style={{ color: 'rgb(42,47,184)' }}>
          <span><FaEnvelope /></span>
          <span> xxx@ilo.org</span>
        </a>
        <a href='tel:00662881234' style={{ color: 'rgb(42,47,184)' }}>
          <span><FaPhone /></span>
          <span> +662 288 1234</span>
        </a>
      </ContactDiv>

    </FooterDiv>
  )
}

export default Footer
