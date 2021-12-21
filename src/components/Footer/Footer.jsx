import React from 'react'
import logo from './logo.png'
import styled from 'styled-components'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const FooterDiv = styled.div`
    font-size: 14px;
    background-color: #b91d73;
    width: 100%;
    padding: 50px 10px 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(42,47,184);
    font-weight: 300;
    height: 230px;

    @media(max-width:475px) {
      flex-direction: column;
      height: 400px;
    }

`

const LogoDiv = styled.div`
    width: 40%; 
    height: 100%;
    display: flex;
    align-items: flex-start; 
    flex-direction: column;
    justify-content: flex-start;

    @media(max-width:750px) {
      width: 50%;
    }

    @media(max-width:560px) {
      width: 40%;
    }

    @media(max-width:475px) {
      width: 100%;
      align-items: center;
    }
`

const PAddress = styled.p`
    width: 60%;
    margin-top: 10px;
    text-align: left;
    margin-left: 20px;

    @media(max-width:475px) {
      text-align: center;
      margin-left: 0;
    }
`

const Img = styled.img`
  height: 50px;
  margin-left: 20px;

  @media(max-width:560px) {
    height: 30px;
  }

  @media(max-width:475px) {
    height: 45px;
    margin-left: 0;
    }
`

const LinksDiv = styled.div`
    width: 30%; 
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media(max-width:750px) {
     width: 25%; 
    }

    @media(max-width:560px) {
      width: 30%;
    }

    @media(max-width:475px) {
      width: 100%;
      align-items: center;
      margin-top: 10px;
    }
`

const ContactDiv = styled.div`
    width: 30%; 
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media(max-width:750px) {
      width: 25%; 
    }

    @media(max-width:560px) {
      width: 30%;
    }

    @media(max-width:475px) {
      width: 100%;
      align-items: center;
      margin-top: 10px;
    }
`

function Footer () {
  return (
    <FooterDiv>
      <LogoDiv>
        <Img src={logo} />
        <PAddress>United Nations Building, 11th Floor Rajdamnern Nok Avenue, Bangkok 10200, Thailand</PAddress>
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
          <span style={{ marginLeft: '5px' }}>rebuildingbetter@ilo.org</span>
        </a>
        <a href='tel:00662881234' style={{ color: 'rgb(42,47,184)' }}>
          <span><FaPhone /></span>
          <span style={{ marginLeft: '5px' }}>+662 288 1234</span>
        </a>
      </ContactDiv>

    </FooterDiv>
  )
}

export default Footer
