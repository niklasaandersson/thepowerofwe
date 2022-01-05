import React from 'react'
import styled from 'styled-components'
import { SectorTitle } from './Styles.js'

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding-inline-start: 0;
  max-width: 450px;
  margin: 0 auto;
`

const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 20px;

  @media(max-width:450px) {
    font-size: 16px;
  }
  
`

function Agenda () {
  return (
    <div>
      <SectorTitle id='agenda'>Agenda</SectorTitle>
      <StyledUl>
        <StyledLi><span>Opening Session</span></StyledLi>
        <StyledLi><span>WE Discussions</span></StyledLi>
        <StyledLi><span>WE Speed Networking</span></StyledLi>
        <StyledLi><span>Closing Remarks</span></StyledLi>
      </StyledUl>
    </div>
  )
}

export default Agenda
