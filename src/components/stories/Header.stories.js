import React from 'react'
import styled from 'styled-components/macro'
import { Header } from '../Header'
import schoolway from './children-schoolway.svg'
export default {
  title: 'Header/Header',
  component: Header,
}

const HeaderSection = styled.div`
  font-family: 'Crafty Girls';
  width: auto;
  font-size: 1.5rem;
  display: flex;
  padding: 0 20px;
  justify-content: flex-start;
  align-items: center;
  background: #fbfbfb;
  border-bottom: 0.8px solid lightgray;
  z-index: 100;
  box-shadow: 0 0 4px 1px #2b7380;
`

const StyledLogoText = styled.div`
  padding-left: 50px;
  color: #4a5568;
`
const Logo = styled.img`
  width: 45px;
  padding: 3px 8px 3px 12px;
`
export const headerSection = () => {
  return (
    <HeaderSection>
      <Logo src={schoolway} alt="two walking school-children"></Logo>
      <StyledLogoText>Schulweg</StyledLogoText>
    </HeaderSection>
  )
}
