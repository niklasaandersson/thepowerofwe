import React, { useState, useEffect } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
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

export default function ImageMasonry ({ entrepreneurs }) {
  const [allEntrepreneurs, setAllEntrepreneurs] = useState(entrepreneurs)
  const [displayedEntrepreneurs, setDisplayedEntrepreneurs] = useState(entrepreneurs)

  const [allCountries, setAllCountries] = useState([])
  const [currentCountry, setCurrentCountry] = useState('')

  const [allSectors, setAllSectors] = useState([])
  const [currentSector, setCurrentSector] = useState('')

  useEffect(() => {
    setDisplayedEntrepreneurs(entrepreneurs)

    const tempAllCountries = entrepreneurs.map(entrepreneurs => entrepreneurs.country).filter((value, index, self) => self.indexOf(value) === index)
    const tempAllSectors = entrepreneurs.map(entrepreneurs => entrepreneurs.industry).filter((value, index, self) => self.indexOf(value) === index)

    if (tempAllCountries.length > 1) {
      tempAllCountries.sort()
      tempAllCountries.reverse()
      tempAllCountries.push('All Countries')
      tempAllCountries.reverse()
    }

    if (tempAllSectors.length > 1) {
      tempAllSectors.sort()
      tempAllSectors.reverse()
      tempAllSectors.push('All Sectors')
      tempAllSectors.reverse()
    }

    if (tempAllCountries.length === 1) setCurrentCountry(tempAllCountries[0])
    else setCurrentCountry('All Countries')

    if (tempAllSectors.length === 1) setCurrentSector(tempAllSectors[0])
    else setCurrentSector('All Sectors')

    setAllCountries(tempAllCountries)
    setAllSectors(tempAllSectors)
  }, [])

  useEffect(() => {
    if (currentCountry === 'All Countries') {
      setDisplayedEntrepreneurs(allEntrepreneurs)
      const tempAllSectors = entrepreneurs.map(entrepreneurs => entrepreneurs.industry).filter((value, index, self) => self.indexOf(value) === index)
      if (tempAllSectors.length > 1) {
        tempAllSectors.sort()
        tempAllSectors.reverse()
        tempAllSectors.push('All Sectors')
        tempAllSectors.reverse()
      }
      setAllSectors(tempAllSectors)
      if (tempAllSectors.length === 1) setCurrentSector(tempAllSectors[0])
      else setCurrentSector('All Sectors')
    } else {
      const filtered = allEntrepreneurs.filter(e => e.country === currentCountry)
      const tempAllSectors = filtered.map(entrepreneurs => entrepreneurs.industry).filter((value, index, self) => self.indexOf(value) === index)

      if (tempAllSectors.length > 1) {
        tempAllSectors.sort()
        tempAllSectors.reverse()
        tempAllSectors.push('All Sectors')
        tempAllSectors.reverse()
      }

      setAllSectors(tempAllSectors)
      if (tempAllSectors.length === 1) setCurrentSector(tempAllSectors[0])
      else setCurrentSector('All Sectors')

      setDisplayedEntrepreneurs(filtered)
    }
  }, [currentCountry])

  useEffect(() => {
    if (currentCountry === 'All Countries' && currentSector === 'All Sectors') {
      setDisplayedEntrepreneurs(entrepreneurs)
    }

    if (currentCountry === 'All Countries' && currentSector !== 'All Sectors') {
      const filtered = entrepreneurs.filter(e => e.industry === currentSector)
      setDisplayedEntrepreneurs(filtered)
    }
    if (currentCountry !== 'All Countries' && currentSector !== 'All Sectors') {
      const filtered = entrepreneurs.filter(e => e.industry === currentSector && e.country === currentCountry)
      setDisplayedEntrepreneurs(filtered)
    }
    if (currentCountry !== 'All Countries' && currentSector === 'All Sectors') {
      const filtered = entrepreneurs.filter(e => e.country === currentCountry)
      setDisplayedEntrepreneurs(filtered)
    }
  }, [currentSector])

  return (
    <>

      {entrepreneurs.length === 0
        ? <p style={{ marginBottom: '80px' }}>Sign up for the event to be the featured here with other women entrepreneurs shortly.</p>
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

            <div className='dropdown'>
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
          <div style={{ margin: '0 auto 80px auto' }}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 2, 950: 3, 1100: 4 }}
            >
              <Masonry>
                {displayedEntrepreneurs.map((item, index) => (
                  <div key={item._id} style={{ width: '100%', display: 'block', padding: '3px' }}>
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
            </ResponsiveMasonry>
          </div>
          </>}
    </>

  )
}
