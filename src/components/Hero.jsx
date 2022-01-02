import React from 'react'
import { H1Date } from './ComingSoon/ComingSoon'
import logo from './asset.png'
import Tooltip from '@mui/material/Tooltip'
import moment from 'moment'

import styled from 'styled-components'
import { Link } from 'react-scroll'
import { Brunei, Cambodia, Indonesia, Laos, Malaysia, Myanmar, Philippines, Singapore, Thailand, Vietnam } from './Flags'

import './Hero.css'

const H1 = styled.h1`
  font-size: 2.2rem;

  @media(max-width: 650px) {
    font-size: 1.8rem;
  }

  @media(max-width: 520px) {
    font-size: 1.5rem;
  }

  @media(max-width: 430px) {
    font-size: 1.2rem;
    font-weight: 700;
  }
  
`

const FlagContainer = styled.div`
  display: inline-block;
`

function Hero () {
  const urlParams = new URLSearchParams(window.location.search)
  const success = urlParams.get('success')
  console.log(success)

  return (
    <>
      <div>
        <img src={logo} style={{ height: '200px' }} />
      </div>
      <div style={{ marginTop: '30px' }}>
        <H1>The Power of WE: Connecting Women</H1>
        <H1>Entrepreneurs in South-East Asia</H1>

      </div>
      <H1Date>{moment('2022-01-20T14:00:00').format('LT, DD MMMM YYYY')}</H1Date>

      {/*
        <p className='p' style={{ marginBottom: '10px' }}><small>Click on your country's flag to see time for the event</small></p>

      <div style={{ marginBottom: '40px' }}>
        <Tooltip title='Brunei 3 - 5.30pm' placement='top-end'>
          <FlagContainer>
            <Brunei />
          </FlagContainer>
        </Tooltip>

        <Tooltip title='Cambodia 2 - 4.30pm' placement='top-end'>
          <FlagContainer>
            <Cambodia />
          </FlagContainer>
        </Tooltip>

        <Tooltip title='Indonesia 2 - 4.30pm' placement='top-end'>
          <FlagContainer>
            <Indonesia />
          </FlagContainer>
        </Tooltip>

        <Tooltip title='Laos 2 - 4.30pm' placement='top-end'>
          <FlagContainer>
            <Laos />
          </FlagContainer>
        </Tooltip>

        <Tooltip title='Malaysia 3 - 5.30pm' placement='top-end'>
          <FlagContainer>
            <Malaysia />
          </FlagContainer>
        </Tooltip>

        <Tooltip title='Myanmar 1:30 - 4pm' placement='top-end'>
          <FlagContainer>
            <Myanmar />
          </FlagContainer>
        </Tooltip>

        <Tooltip title='Philippines 3 - 5.30pm' placement='top-end'>
          <FlagContainer>
            <Philippines />
          </FlagContainer>
        </Tooltip>

        <Tooltip title='Singapore 3 - 5.30pm' placement='top-end'>
          <FlagContainer>
            <Singapore />
          </FlagContainer>
        </Tooltip>

        <Tooltip title='Thailand 2 - 4.30pm' placement='top-end'>
          <FlagContainer>
            <Thailand />
          </FlagContainer>
        </Tooltip>

        <Tooltip title='Viet Nam 2 - 4.30pm' placement='top-end'>
          <FlagContainer>
            <Vietnam />
          </FlagContainer>
        </Tooltip>
      </div>
      */}

      <div style={{ marginTop: '25px', margin: '10px' }}>
        <Link to='agenda' spy smooth offset={-30}>
          <button
            type='button'
            className='btn btn-outline-light'
            style={{ borderRadius: '0.25rem', margin: '4px' }}
          >
            See The Agenda
          </button>
        </Link>

        {success
          ? <button
            type='button'
            className='btn btn-success'
            style={{ borderRadius: '0.25rem', opacity: 1, margin: '4px' }}
            disabled
          >
          You are signed up
            </button>

          : <>
            <a href='https://form.jotform.com/213346215659054'>
              <button
                type='button'
                className='btn btn-outline-light'
                style={{ borderRadius: '0.25rem', margin: '4px' }}
              >
          Sign up for the event
              </button>
            </a>
            </>}
        <Link to='meetTheEntrepreneurs' spy smooth offset={-30}>
          <button
            type='button'
            className='btn btn-outline-light'
            style={{ borderRadius: '0.25rem', margin: '4px' }}
          >
              Meet The Entrepreneurs
          </button>
        </Link>

      </div>

    </>
  )
}

export default Hero
