import React from 'react'
import ImageMasonry from './ImageMasonry/ImageMasonry'
import { SectorTitle } from './Styles'
import CircularProgress from '@mui/material/CircularProgress'

function Entrepreneurs ({ entrepreneurs, isLoading }) {
  return (
    <>
      <SectorTitle id='meetTheEntrepreneurs'>Meet The Entrepreneurs</SectorTitle>
      {isLoading
        ? <div style={{ height: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CircularProgress color='inherit' />
        </div>
        : <ImageMasonry entrepreneurs={entrepreneurs} />}

    </>
  )
}

export default Entrepreneurs
