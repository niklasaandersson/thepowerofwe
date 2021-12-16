import React from 'react'
import logo from './logo.png'
import styled from 'styled-components'

const ImgDiv = styled.div`
  display: flex;
  justify-content: flex-end; 
  width: 100%;
  padding: 20px;

  @media (max-width: 360px) {
    justify-content: center;
  }
`

const Img = styled.img`
   height: 80px;

  @media (max-width: 669px) {
    height: 60px !important;
    width: auto;
  }

  @media (max-width: 360px) {
    height: 50px !important;
    padding: 0 5%;
  }
`

function Logo () {
  const styles = {
    imgDiv: { },
    logo: { height: '80px', float: 'right' }
  }

  return (
    <ImgDiv>
      <Img style={styles.logo} src={logo} />
    </ImgDiv>
  )
}

export default Logo
