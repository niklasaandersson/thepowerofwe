import React from 'react'
import styled from 'styled-components'
import { SectorTitle } from './Styles.js'

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
`

const StyledLi = styled.li`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 20px;
`

const StyledLiTitle = styled.span`
  width: 35%;
  text-align: left;
`

function Agenda () {
  return (
    <div>
      <SectorTitle>Agenda</SectorTitle>
      <StyledUl>
        <StyledLi><StyledLiTitle>2:00 - 2:25pm</StyledLiTitle><span>Opening Session</span></StyledLi>
        <StyledLi><StyledLiTitle>2:25 - 3:00pm</StyledLiTitle><span>WE Discussions</span></StyledLi>
        <StyledLi><StyledLiTitle>3:00 - 4:20pm</StyledLiTitle><span>WE Speed networking</span></StyledLi>
        <StyledLi><StyledLiTitle>4:20 - 4:30pm</StyledLiTitle><span>Closing Remarks</span></StyledLi>
      </StyledUl>
    </div>
  )
}

export default Agenda
