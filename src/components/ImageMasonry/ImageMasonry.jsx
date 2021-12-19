import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Masonry from '@mui/lab/Masonry'
import Tooltip from '@mui/material/Tooltip'
import styled from 'styled-components'
import { FaDesktop, FaFacebookF, FaInstagram } from 'react-icons/fa'

const getFlag = (countryName) => {
  switch (countryName) {
    case 'Brunei':
      return (
        <Tooltip title='Brunei'>
          <FlagSpan role='img' aria-label='brunei'>🇧🇳</FlagSpan>
        </Tooltip>
      )
    case 'Cambodia':
      return (
        <Tooltip title='Cambodia'>
          <FlagSpan role='img' aria-label='cambodia'>🇰🇭</FlagSpan>
        </Tooltip>
      )
    case 'Indonesia':
      return (
        <Tooltip title='Indonesia'>
          <FlagSpan role='img' data-tip='hello world' aria-label='indonesia'>🇮🇩</FlagSpan>
        </Tooltip>
      )
    case 'Laos':
      return (
        <Tooltip title='Laos'>
          <FlagSpan role='img' aria-label='laos'>🇱🇦</FlagSpan>
        </Tooltip>
      )
    case 'Malaysia':
      return (
        <Tooltip title='Malaysia'>
          <FlagSpan role='img' aria-label='malaysia'>🇲🇾</FlagSpan>
        </Tooltip>
      )
    case 'Myanmar':
      return (
        <Tooltip title='Myanmar'>
          <FlagSpan role='img' aria-label='myanmar'>🇲🇲</FlagSpan>
        </Tooltip>
      )
    case 'Philippines':
      return (
        <Tooltip title='Philippines'>
          <FlagSpan role='img' aria-label='philippines'>🇵🇭</FlagSpan>
        </Tooltip>
      )
    case 'Singapore':
      return (
        <Tooltip title='Singapore'>
          <FlagSpan role='img' aria-label='singapore'>🇸🇬</FlagSpan>
        </Tooltip>
      )
    case 'Thailand':
      return (
        <Tooltip title='Thailand'>
          <FlagSpan role='img' aria-label='thailand'>🇹🇭</FlagSpan>
        </Tooltip>
      )
    case 'Viet Nam':
      return (
        <Tooltip title='Viet Nam'>
          <FlagSpan role='img' aria-label='viet Nam'>🇻🇳</FlagSpan>
        </Tooltip>
      )
  }
}

export const FlagSpan = styled.span`
  font-size: 24px;
  margin-right: 10px;
`

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
  color: white;
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  margin-right: 10px;
  align-items: center;

  @media(max-width:567px) {
    height: 20px;
    width: 20px;
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
  const [allSectors, setAllSectors] = useState([])
  const [currentSector, setCurrentSector] = useState('')
  const [noOfImages, setNoOfImages] = useState(3)

  const size = useWindowSize()
  useEffect(() => {
    if (size < 535) setNoOfImages(2)
    else setNoOfImages(3)
  }, [])

  useEffect(() => {
    if (size < 535) setNoOfImages(2)
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

    const tempAllSectors = entrepreneurs.map(entrepreneurs => entrepreneurs.industry).filter((value, index, self) => self.indexOf(value) === index)

    if (tempAllSectors.length > 1) {
      tempAllSectors.sort()
      tempAllSectors.reverse()
      tempAllSectors.push('All Sectors')
      tempAllSectors.reverse()
    }

    setAllSectors(tempAllSectors)
    setCurrentSector('All Sectors')
    setAllCountries(tempAllCountries)
    setCurrentCountry('All Countries')
  }, [])

  useEffect(() => {
    if (currentCountry === 'All Countries') {
      setDisplayedEntrepreneurs(allEntrepreneurs)
      setCurrentSector('All Sectors')
    } else {
      const filtered = allEntrepreneurs.filter(e => e.country === currentCountry)

      const tempAllSectors = filtered.map(entrepreneurs => entrepreneurs.industry).filter((value, index, self) => self.indexOf(value) === index)

      if (tempAllSectors.length > 1) {
        tempAllSectors.sort()
        tempAllSectors.reverse()
        tempAllSectors.push('All Sectors')
        tempAllSectors.reverse()
      }

      setDisplayedEntrepreneurs(filtered)
      setAllSectors(tempAllSectors)
      setCurrentSector('All Sectors')
    }
  }, [currentCountry])

  useEffect(() => {
    if (currentSector === 'All Sectors') {
      if (currentCountry === 'All Countries') setDisplayedEntrepreneurs(allEntrepreneurs)
      else setDisplayedEntrepreneurs(displayedEntrepreneurs.filter(e => e.country === currentCountry))
    } else {
      if (currentCountry === 'All Countries') setDisplayedEntrepreneurs(allEntrepreneurs.filter(e => e.industry === currentSector))
      else setDisplayedEntrepreneurs(displayedEntrepreneurs.filter(e => e.country === currentCountry && e.industry === currentSector))
    }
  }, [currentSector])

  return (
    <>

      {entrepreneurs.length === 0
        ? <p>Sign up for the event to be the first entrepreneur to be featured here.</p>
        : <>
          <div style={{ display: 'flex', marginBottom: '20px' }}>

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

            <div className='dropdown' style={{ marginRight: '8px' }}>
              <Tooltip title='Filter by sector' placement='top-end'>
                <button
                  className='btn btn-outline-light dropdown-toggle'
                  type='button' id='dropdownMenuButton'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  {currentSector}
                </button>
              </Tooltip>
              <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                {allSectors.map(s => (
                  <button key={s} className='dropdown-item' onClick={() => setCurrentSector(s)}>{s}</button>
                ))}
              </div>

            </div>
          </div>

          <Box sx={{ marginBottom: '150px' }}>
            <Masonry columns={noOfImages} spacing={1}>
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
                      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <H5Styled>{`${item.firstName} ${item.lastName} `}{getFlag(item.country)}</H5Styled>
                        <span>{item.companyName}</span>
                        <span>{item.industry}</span>

                      </div>
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
          </>}
    </>

  )
}
