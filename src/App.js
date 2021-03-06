import React, { useEffect, useState } from 'react'
import { getEntrepreneursCall } from './apiCalls'
import './App.css'
import Hero from './components/Hero'
import Agenda from './components/agenda'
import MeetTheEntrepreneurs from './components/meetTheEntrepreneurs'
import Logo from './components/Logo/Logo'
import Footer from './components/Footer/Footer'
import ComingSoon from './components/ComingSoon/ComingSoon'
import styled from 'styled-components'

const ContentDiv = styled.div`
  width: 80%;

  @media(max-width: 650px) {
    padding: 0 15px;
    margin-top: 30px;
    width: 100%;
  }
`

function App () {
  const [entrepreneurs, setEntrepreneurs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getM = async () => {
      const response = await getEntrepreneursCall()
      setEntrepreneurs(response.data)
      setIsLoading(false)
    }
    getM()
  }, [])

  return (
    <>
      <div className='App'>
        <Logo />
        <ContentDiv>
          {process.env.REACT_APP_COMING_SOON === 1
            ? <ComingSoon />
            : <>
              <Hero />
              <Agenda id='agenda' />
              <MeetTheEntrepreneurs id='meetTheEntrepreneurs' entrepreneurs={entrepreneurs} isLoading={isLoading} />
              </>}
        </ContentDiv>

      </div>
      <Footer />
    </>
  )
}

export default App
