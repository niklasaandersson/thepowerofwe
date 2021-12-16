import React, { useEffect, useState } from 'react'
import { getEntrepreneursCall } from './apiCalls'
import './App.css'
import Hero from './components/Hero'
import Agenda from './components/agenda'
import Entrepreneurs from './components/entrepreneurs'
import Logo from './components/Logo/Logo'
import Footer from './components/Footer/Footer'

import ComingSoon from './components/ComingSoon/ComingSoon'

function App () {
  const [entrepreneurs, setEntrepreneurs] = useState([])

  useEffect(() => {
    const getM = async () => {
      const response = await getEntrepreneursCall()
      setEntrepreneurs(response.data)
    }
    getM()
  }, [])

  return (
    <>
      <div className='App'>
        <Logo />
        <div class='content'>
          {process.env.REACT_APP_COMMING_SOON
            ? <ComingSoon />
            : <>
              <Hero />
              <Agenda />
              <Entrepreneurs entrepreneurs={entrepreneurs} />
            </>}
        </div>

      </div>
    </>
  )
}

export default App
