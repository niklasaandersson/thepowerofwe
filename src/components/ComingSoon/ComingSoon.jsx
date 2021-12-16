import React from 'react'
import styled from 'styled-components'
import logo from '../asset.png'

const ContentDiv = styled.div`
  display: flex;
  align-items: flex-end;
  height: 93%;
  padding: 0 5%;

  @media (max-width: 1004px) {
    padding: 0 2%;
  }

  @media (max-width: 669px) {
    flex-direction: column-reverse;
    height: 90% !important;
  }
`

const Img = styled.img`
  height: 60vh;

  @media (max-width: 669px) {
      height: 40vh;
  }

`

const ImgDiv = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-end;

  @media (max-width: 1004px) {
    width: 60%;
  }

  @media (max-width: 669px) {
    width: 100%;
    justify-content: center;
  }
`

const TextDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 30px;
  flex-direction: column;
  height: 100%;

  @media (max-width: 669px) {
    padding-left: 0;
  }

`

const H1 = styled.h1`
    @media (max-width: 766px) {
    font-size: 2rem
  }

  @media (max-width: 450px) {
    font-size: 1.5rem
  }
`

function ComingSoon () {
  return (
    <ContentDiv>
      <ImgDiv>
        <Img src={logo} />
      </ImgDiv>
      <TextDiv>
        <H1>’The Power of WE: Connecting Across ASEAN’ Event Platform is coming soon…</H1>
        <a href='https://form.jotform.com/213346215659054'>
          <button
            type='button'
            class='btn btn-outline-light'
            style={{ borderRadius: '8px', marginTop: '20px' }}
          >
          Sign up for the event
          </button>
        </a>
      </TextDiv>
    </ContentDiv>
  )
}

export default ComingSoon
