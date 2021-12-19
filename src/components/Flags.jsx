import React from 'react'
import Flag from 'react-flagpack'
import styled from 'styled-components'

const FlagSpan = styled.span`
    cursor: pointer;
    margin: 0 5px;
`

export const Brunei = () => {
  return <FlagSpan aria-label='brunei'><Flag code='BN' /></FlagSpan>
}

export const Cambodia = () => {
  return <FlagSpan role='img' aria-label='cambodia'><Flag code='KH' /></FlagSpan>
}

export const Indonesia = () => {
  return <FlagSpan role='img' aria-label='cambodia'><Flag code='ID' /></FlagSpan>
}

export const Laos = () => {
  return <FlagSpan role='img' aria-label='indonesia'><Flag code='LA' /></FlagSpan>
}

export const Malaysia = () => {
  return <FlagSpan role='img' aria-label='malaysia'><Flag code='MY' /></FlagSpan>
}

export const Myanmar = () => {
  return <FlagSpan role='img' aria-label='myanmar'><Flag code='MM' /></FlagSpan>
}

export const Philippines = () => {
  return <FlagSpan role='img' aria-label='philippines'><Flag code='PH' /></FlagSpan>
}

export const Singapore = () => {
  return <FlagSpan role='img' aria-label='singapore'><Flag code='SG' /></FlagSpan>
}

export const Thailand = () => {
  return <FlagSpan role='img' aria-label='thailand'><Flag code='TH' /></FlagSpan>
}

export const Vietnam = () => {
  return <FlagSpan role='img' aria-label='viet nam'><Flag code='VN' /></FlagSpan>
}
