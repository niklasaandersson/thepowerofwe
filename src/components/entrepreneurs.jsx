import React from 'react'
import ImageMasonry from '../components/ImageMasonry/ImageMasonry'
import { SectorTitle } from './Styles'

function Entrepreneurs ({ entrepreneurs }) {
  return (
    <>
      <SectorTitle>Meet The Entrepreneurs</SectorTitle>
      <ImageMasonry entrepreneurs={entrepreneurs} />
    </>
  )
}

export default Entrepreneurs
