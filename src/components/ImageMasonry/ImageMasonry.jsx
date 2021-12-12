import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Masonry from '@mui/lab/Masonry'

export default function ImageMasonry ({ entrepreneurs }) {
  const [allEntrepreneurs, setAllEntrepreneurs] = useState([])
  const [displayedEntrepreneurs, setDisplayedEntrepreneurs] = useState([])
  const [allCountries, setAllCountries] = useState([])
  const [currentCountry, setCurrentCountry] = useState('')
  const [allSectors, setAllSectors] = useState([])
  const [currentSector, setCurrentSector] = useState('')

  useEffect(() => {
    setAllEntrepreneurs(entrepreneurs)
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

  return (
    <>
      <div style={{ display: 'flex', marginBottom: '20px' }}>

        <div className='dropdown' style={{ marginRight: '8px' }}>
          <button
            class='btn btn-outline-light dropdown-toggle'
            type='button' id='dropdownMenuButton'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
          >
            {currentCountry}
          </button>

          <div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
            {allCountries.map(c => (
              <button key={c} className='dropdown-item' onClick={() => setCurrentCountry(c)}>{c}</button>
            ))}
          </div>
        </div>

        <div className='dropdown' style={{ marginRight: '8px' }}>
          <button
            class='btn btn-outline-light dropdown-toggle'
            type='button' id='dropdownMenuButton'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
          >
            {currentSector}
          </button>

          <div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
            {allSectors.map(s => (
              <button key={s} className='dropdown-item' onClick={() => setCurrentSector(s)}>{s}</button>
            ))}
          </div>
        </div>
      </div>

      <Box sx={{ marginBottom: '150px' }}>
        <Masonry columns={3} spacing={1}>
          {displayedEntrepreneurs.map((item, index) => (
            <Stack key={item._id}>
              <img
                src={`${item.imageURL}?w=162&auto=format`}
                srcSet={`${item.imageURL}?w=162&auto=format&dpr=2 2x`}
                alt={item.title}
                loading='lazy'
                style={{ borderRadius: '8px' }}
              />
            </Stack>
          ))}
        </Masonry>
      </Box>
    </>
  )
}
