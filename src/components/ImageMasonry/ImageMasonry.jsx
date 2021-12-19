import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Masonry from '@mui/lab/Masonry'
import Tooltip from '@mui/material/Tooltip'
import styled from 'styled-components'
import { FaDesktop, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { Brunei, Cambodia, Indonesia, Laos, Malaysia, Myanmar, Philippines, Singapore, Thailand, Vietnam } from '../Flags'

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

const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(undefined)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount
  return windowWidth
}

export default function ImageMasonry ({ entrepreneurs }) {
  const [allEntrepreneurs, setAllEntrepreneurs] = useState(entrepreneurs)
  const [displayedEntrepreneurs, setDisplayedEntrepreneurs] = useState(entrepreneurs)

  const [allCountries, setAllCountries] = useState([])
  const [currentCountry, setCurrentCountry] = useState('')

  const [currentSector, setCurrentSector] = useState('')

  const [noOfImages, setNoOfImages] = useState(3)

  const size = useWindowSize()

  useEffect(() => {
    if (size < 535) setNoOfImages(2)
    if (size > 534 && size < 1001) setNoOfImages(3)
    if (size > 1000) setNoOfImages(4)
    else setNoOfImages(3)
  }, [])

  useEffect(() => {
    if (size < 535) setNoOfImages(2)
    if (size > 534 && size < 1001) setNoOfImages(3)
    if (size > 1000) setNoOfImages(4)
  }, [size])

  useEffect(() => {
    setDisplayedEntrepreneurs(entrepreneurs)

    const tempAllCountries = entrepreneurs.map(entrepreneurs => entrepreneurs.country).filter((value, index, self) => self.indexOf(value) === index)
    if (tempAllCountries.length > 1) {
      tempAllCountries.sort()
      tempAllCountries.reverse()
      tempAllCountries.push('All Countries')
      tempAllCountries.reverse()
    }

    if (tempAllCountries.length === 1) setCurrentCountry(tempAllCountries[0])
    else setCurrentCountry('All Countries')

    setAllCountries(tempAllCountries)
  }, [])

  useEffect(() => {
    if (currentCountry === 'All Countries') {
      setDisplayedEntrepreneurs(allEntrepreneurs)
    } else {
      const filtered = allEntrepreneurs.filter(e => e.country === currentCountry)

      setDisplayedEntrepreneurs(filtered)
    }
  }, [currentCountry])

  return (
    <>

      {entrepreneurs.length === 0
        ? <p>Sign up for the event to be the first entrepreneur to be featured here.</p>
        : <>
          <div style={{ display: 'flex', marginBottom: '20px', justifyContent: 'center' }}>

            <div className='dropdown' style={{ marginRight: '8px' }}>
              <Tooltip title='Filter by country' placement='top-end'>
                <button
                  className='btn btn-outline-light dropdown-toggle'
                  type='button' id='dropdownMenuButton'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  {currentCountry}
                </button>
              </Tooltip>
              <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                {allCountries.map(c => (
                  <button key={c} className='dropdown-item' onClick={() => setCurrentCountry(c)}>{c}</button>
                ))}
              </div>

            </div>
          </div>
          <div style={{ minHeight: '400px', maxWidth: '900px', margin: '0 auto 150px auto' }}>
            <Box>
              <Masonry columns={noOfImages} spacing={2}>
                {displayedEntrepreneurs.map((item, index) => (
                  <Stack key={item._id}>
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
                  </Stack>
                ))}
              </Masonry>
            </Box>
          </div>
        </>}
    </>

  )
}
