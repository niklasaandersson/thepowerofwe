import React from 'react'
import ImageMasonry from './ImageMasonry/ImageMasonry'
import { SectorTitle } from './Styles'

function Entrepreneurs ({ entrepreneurs }) {
  return (
    <>
      <SectorTitle id='meetTheEntrepreneurs'>Meet The Entrepreneurs</SectorTitle>
      <ImageMasonry entrepreneurs={entrepreneurs} />
    </>
  )
}

export default Entrepreneurs
