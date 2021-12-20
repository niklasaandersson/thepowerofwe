import React from 'react'
import Masonry from 'react-masonry'
import styled from 'styled-components'
import { FaDesktop, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { Brunei, Cambodia, Indonesia, Laos, Malaysia, Myanmar, Philippines, Singapore, Thailand, Vietnam } from './Flags'
import Tooltip from '@mui/material/Tooltip'

const getFlag = (countryName) => {
  switch (countryName) {
    case 'Brunei':
      return (
        <Tooltip title='Brunei'>
          <Brunei />
        </Tooltip>
      )
    case 'Cambodia':
      return (
        <Tooltip title='Cambodia'>
          <Cambodia />
        </Tooltip>
      )
    case 'Indonesia':
      return (
        <Tooltip title='Indonesia'>
          <Indonesia />
        </Tooltip>
      )
    case 'Laos':
      return (
        <Tooltip title='Laos'>
          <Laos />
        </Tooltip>
      )
    case 'Malaysia':
      return (
        <Tooltip title='Malaysia'>
          <Malaysia />
        </Tooltip>
      )
    case 'Myanmar':
      return (
        <Tooltip title='Myanmar'>
          <Myanmar />
        </Tooltip>
      )
    case 'Philippines':
      return (
        <Tooltip title='Philippines'>
          <Philippines />
        </Tooltip>
      )
    case 'Singapore':
      return (
        <Tooltip title='Singapore'>
          <Singapore />
        </Tooltip>
      )
    case 'Thailand':
      return (
        <Tooltip title='Thailand'>
          <Thailand />
        </Tooltip>
      )
    case 'Viet Nam':
      return (
        <Tooltip title='Viet Nam'>
          <Vietnam />
        </Tooltip>
      )
  }
}

const HooverDiv = styled.div`
      position: absolute;
      border-radius: 8px;
      top: 0%;
      padding: 10px;
      background-color: #460827be;
      height: 100%;
      width: 100%;
      display: flex;
      text-align: left;
      opacity: 0;
      transition: all 1s ease;
      cursor: pointer;
      flex-direction: column;
      font-size: 80%;
  
      &:hover {
        opacity: 1;
      }
  
      @media(max-width:610px) {
        padding: 5px;
      }
  
      @media(max-width:450px) {
        padding: 8px;
      }
  `

const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `

const H5Styled = styled.h5`
    margin-bottom: 0;
    font-weight: 700;
  
    @media(max-width:610px) {
      font-size: 1rem;
    }
  `

const SocialDiv = styled.div`
    margin-top: 7px;
    display: flex;
  `

const SocialDivButton = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    color:#000;
    background-color: #ffffff8d;
    display: flex;
    justify-content: center;
    margin-right: 10px;
    align-items: center;
    transition: all 0.2s ease;
  
  
    @media(max-width:567px) {
      height: 20px;
      width: 20px;
    }
  
    &:hover {
      background-color: #ffffffbb;
    }
  `

function Images ({ displayedEntrepreneurs }) {
  return (
    <Masonry>
      {displayedEntrepreneurs.map((item, index) => (
        <div key={item._id} style={{ width: '100%', display: 'block' }}>
          <div style={{ position: 'relative' }}>
            <div>
              <img
                src={`${item.imageURL}?w=162&auto=format`}
                srcSet={`${item.imageURL}?w=162&auto=format&dpr=2 2x`}
                alt={item.title}
                loading='lazy'
                style={{ borderRadius: '8px', width: '100%' }}
              />
            </div>
            <HooverDiv>
              <TextDiv>
                <H5Styled>{`${item.firstName} ${item.lastName} `}{getFlag(item.country)}</H5Styled>
                <span>{item.companyName}</span>
                <span>{item.industry}</span>
              </TextDiv>
              <SocialDiv>
                {item.website &&
                  <Tooltip title='Website' placement='top-end'>
                    <a href={'//' + item.website} target='_blank' rel='noopener noreferrer'>
                      <SocialDivButton>
                        <FaDesktop />
                      </SocialDivButton>
                    </a>
                  </Tooltip>}

                {item.facebook &&
                  <Tooltip title='Facebook' placement='top-end'>
                    <a href={'//' + item.facebook} target='_blank' rel='noopener noreferrer'>
                      <SocialDivButton>
                        <FaFacebookF />
                      </SocialDivButton>
                    </a>
                  </Tooltip>}

                {item.instagram &&
                  <Tooltip title='Instagram' placement='top-end'>
                    <a href={'//' + item.instagram} target='_blank' rel='noopener noreferrer'>
                      <SocialDivButton>
                        <FaInstagram />
                      </SocialDivButton>
                    </a>
                  </Tooltip>}
              </SocialDiv>
            </HooverDiv>
          </div>
        </div>))}
    </Masonry>
  )
}

export default Images
