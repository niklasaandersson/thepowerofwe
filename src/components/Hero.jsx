import React from 'react'
import { H1Date } from './ComingSoon/ComingSoon'
import logo from './asset.png'
import Tooltip from '@mui/material/Tooltip'

import styled from 'styled-components'
import { Link } from 'react-scroll'
import { Brunei, Cambodia, Indonesia, Laos, Malaysia, Myanmar, Philippines, Singapore, Thailand, Vietnam } from './Flags'

const H1 = styled.h1`
  font-size: 2.2rem;

  @media(max-width: 650px) {
    font-size: 1.8rem;
  }

  @media(max-width: 450px) {
    font-size: 1.2rem;
    font-weight: 700;
  }

  @media(max-width: 355px) {
    font-size: 1.1rem;
    font-weight: 700;
  }
  
`

const FlagContainer = styled.div`
  display: inline-block;
`

function Hero () {
  const urlParams = new URLSearchParams(window.location.search)
  const success = urlParams.get('success')

  return (
    <>
      <div>
        <img src={logo} style={{ height: '200px' }} />
      </div>
      <div style={{ marginTop: '30px' }}>
        <H1>The Power of WE: Connecting Women</H1>
        <H1>Entrepreneurs in South-East Asia</H1>

      </div>
      <H1Date>Jan 6 2022</H1Date>
      <p style={{ marginBottom: '10px', color: '#7c0842' }}><small>Click on your country's flag to see start time</small></p>

      <div>

        <Tooltip title='Brunei 3pm' placement='top-end'>
          <FlagContainer>
            <Brunei />
          </FlagContainer>
        </Tooltip>

        <Tooltip title='Cambodia 2pm' placement='top-end'>
          <FlagContainer>
            <Cambodia />
          </FlagContainer>
        </Tooltip>

        <Tooltip title='Indonesia 2pm' placement='top-end'>
          <FlagContainer>
            <Indonesia />
          </FlagContainer>
        </Tooltip>

        <Tooltip title='Laos 2pm' placement='top-end'>
          <FlagContainer>
            <Laos />
          </FlagContainer>
        </Tooltip>

        <Tooltip title='Malaysia 3pm' placement='top-end'>
          <FlagContainer>
            <Malaysia />
          </FlagContainer>
        </Tooltip>

        <Tooltip title='Myanmar 1:30pm' placement='top-end'>
          <FlagContainer>
            <Myanmar />
          </FlagContainer>
        </Tooltip>

        <Tooltip title='Philippines 3pm' placement='top-end'>
          <FlagContainer>
            <Philippines />
          </FlagContainer>
        </Tooltip>

        <Tooltip title='Singapore 3pm' placement='top-end'>
          <FlagContainer>
            <Singapore />
          </FlagContainer>
        </Tooltip>

        <Tooltip title='Thailand 2pm' placement='top-end'>
          <FlagContainer>
            <Thailand />
          </FlagContainer>
        </Tooltip>

        <Tooltip title='Viet Nam 2pm' placement='top-end'>
          <FlagContainer>
            <Vietnam />
          </FlagContainer>
        </Tooltip>

      </div>

      <div className='btn-group' role='group' aria-label='Basic example' style={{ marginTop: '25px' }}>
        <Link to='agenda' spy smooth offset={-30}>
          <button
            type='button'
            className='btn btn-outline-light'
            style={{ borderRadius: 0, borderBottomLeftRadius: '0.25rem', borderTopLeftRadius: '0.25rem', marginRight: 0 }}
          >
            See The Agenda
          </button>
        </Link>

        {success === true
          ? <button
            type='button'
            className='btn btn-outline-success'
            style={{ borderRadius: 0 }}
            disabled
          >
          You are signed up
            </button>

          : <>
            <a href='https://form.jotform.com/213346215659054'>
              <button
                type='button'
                className='btn btn-outline-light'
                style={{ borderRadius: 0 }}
              >
          Sign up for the event
              </button>
            </a>
            </>}
        <Link to='meetTheEntrepreneurs' spy smooth offset={-30}>
          <button
            type='button'
            className='btn btn-outline-light'
            style={{ borderBottomRightRadius: '0.25rem', borderTopRightRadius: '0.25rem', borderTopLeftRadius: 0, borderBottomLeftRadius: 0, marginLeft: -1 }}
          >
              Meet The Entrepreneurs
          </button>
        </Link>

      </div>

    </>
  )
}

export default Hero
