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
  const date = new Date()
  date.setFullYear(2022, 2, 24)
  date.setUTCHours(7)
  date.setMinutes(0)
  date.setSeconds(0)
  return (
    <>
      <div>
        <img src={logo} style={{ height: '200px' }} />
      </div>
      <div style={{ marginTop: '30px' }}>
        <H1>The Power of WE:  </H1>
        <H1> Connecting Across ASEAN</H1>

      </div>
      <H1Date>{moment(date).format('LT, DD MMMM YYYY')}</H1Date>

      <div style={{ marginTop: '25px', margin: '10px' }}>
        <Link to='agenda' spy smooth offset={-30}>
          <button
            type='button'
            className='btn btn-outline-light'
            style={{ borderRadius: '0.25rem', margin: '4px' }}
          >
            See the agenda
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
            <a href='https://form.jotform.com/220042322352438'>
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
              Meet the entrepreneurs
          </button>
        </Link>

      </div>

    </>
  )
}

export default Hero
