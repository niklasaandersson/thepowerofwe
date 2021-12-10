import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Masonry from '@mui/lab/Masonry'

export default function ImageMasonry (props) {
  const [country, setCountry] = useState('All countries')
  const [sector, setSector] = useState('All sectors')

  return (
    <>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <div class='dropdown' style={{ marginRight: '8px' }}>
          <button class='btn btn-outline-light dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>{country}</button>
          <div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
            <a class='dropdown-item' href='#'>Action</a>
            <a class='dropdown-item' href='#'>Another action</a>
            <a class='dropdown-item' href='#'>Something else here</a>
          </div>
        </div>

        <div class='dropdown'>
          <button class='btn btn-outline-light dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>{sector}</button>
          <div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
            <a class='dropdown-item' href='#'>Action</a>
            <a class='dropdown-item' href='#'>Another action</a>
            <a class='dropdown-item' href='#'>Something else here</a>
          </div>
        </div>
      </div>

      <Box sx={{ marginBottom: '150px' }}>
        <Masonry columns={3} spacing={1}>
          {props.entrepreneurs.map((item, index) => (
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
