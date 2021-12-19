import React from 'react'
import { H1Date } from './ComingSoon/ComingSoon'
import logo from './asset.png'
import Tooltip from '@mui/material/Tooltip'
import { FlagSpan } from './ImageMasonry/ImageMasonry'
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 2.2rem;

  @media(max-width: 650px) {
    font-size: 1.8rem;
  }

  @media(max-width: 450px) {
    font-size: 1.2rem;
    font-weight: 700;
  }
  
`

function Hero () {
  const urlParams = new URLSearchParams(window.location.search)
  const success = urlParams.get('success')

  return (
    <>
      <div>
        <img src={logo} style={{ height: '250px' }} />
      </div>
      <div style={{ marginTop: '30px' }}>
        <H1>The Power of WE: Connecting Women</H1>
        <H1>Entrepreneurs in South-East Asia</H1>

      </div>
      <H1Date>Jan 6 2022</H1Date>
      <p style={{ marginBottom: '5px' }}><small>Click on your contry's flag to see start time</small></p>
      <div style={{ marginLeft: '5px' }}>
        <Tooltip title='Brunei 3pm' placement='top-end'>
          <FlagSpan role='img' aria-label='brunei'>🇧🇳</FlagSpan>
        </Tooltip>

        <Tooltip title='Cambodia 2pm' placement='top-end'>
          <FlagSpan role='img' aria-label='cambodia'>🇰🇭</FlagSpan>
        </Tooltip>

        <Tooltip title='Indonesia 2pm' placement='top-end'>
          <FlagSpan role='img' data-tip='hello world' aria-label='indonesia'>🇮🇩</FlagSpan>
        </Tooltip>

        <Tooltip title='Laos 2pm' placement='top-end'>
          <FlagSpan role='img' aria-label='laos'>🇱🇦</FlagSpan>
        </Tooltip>

        <Tooltip title='Malaysia 3pm' placement='top-end'>
          <FlagSpan role='img' aria-label='malaysia'>🇲🇾</FlagSpan>
        </Tooltip>

        <Tooltip title='Myanmar 1:30pm' placement='top-end'>
          <FlagSpan role='img' aria-label='myanmar'>🇲🇲</FlagSpan>
        </Tooltip>

        <Tooltip title='Philippines 3pm' placement='top-end'>
          <FlagSpan role='img' aria-label='philippines'>🇵🇭</FlagSpan>
        </Tooltip>

        <Tooltip title='Singapore 3pm' placement='top-end'>
          <FlagSpan role='img' aria-label='singapore'>🇸🇬</FlagSpan>
        </Tooltip>

        <Tooltip title='Thailand 2pm' placement='top-end'>
          <FlagSpan role='img' aria-label='thailand'>🇹🇭</FlagSpan>
        </Tooltip>

        <Tooltip title='Viet Nam 2pm' placement='top-end'>
          <FlagSpan role='img' aria-label='viet Nam'>🇻🇳</FlagSpan>
        </Tooltip>

      </div>

      <div className='btn-group' role='group' aria-label='Basic example' style={{ marginTop: '10px' }}>
        <a href='#agenda'>
          <button
            type='button'
            className='btn btn-outline-light'
            style={{ borderRadius: 0, borderBottomLeftRadius: '0.25rem', borderTopLeftRadius: '0.25rem', marginRight: 0 }}
          >
            See The Agenda
          </button>
        </a>
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

        <a href='#meetTheEntrepreneurs'>
          <button
            type='button'
            className='btn btn-outline-light'
            style={{ borderBottomRightRadius: '0.25rem', borderTopRightRadius: '0.25rem', borderTopLeftRadius: 0, borderBottomLeftRadius: 0, marginLeft: -1 }}
          >
              Meet The Entrepreneurs
          </button>
        </a>
      </div>

    </>
  )
}

export default Hero
