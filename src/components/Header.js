import React from 'react'
import styled from 'styled-components'
import currentSchoolImg from '../img/svg/_school.svg'
import schoolway from '../img/svg/_children.svg'

export default function Header() {
  return (
    <HeaderSection>
      <Logo src={schoolway}></Logo>
    </HeaderSection>
  )
}

const HeaderSection = styled.div`
  font-family: 'Bellota';
  width: auto;
  font-size: 1.5rem;
  display: flex;
  padding-left: 8px;
  justify-content: left;
  align-items: center;
  background: #fbfbfb;
  border-bottom: 0.8px solid lightgray;
  z-index: 100;
  box-shadow: 0 0 10px 3px #2b7380;
`
const Logo = styled.img`
  width: 48px;
`
