import React from 'react'
import { StyledLogoText, HeaderSection, Logo } from './Header.styles'
import schoolway from '../img/svg/children-schoolway.svg'

export default function Header() {
  return (
    <HeaderSection>
      <Logo src={schoolway} alt="two walking school-children"></Logo>
      <StyledLogoText>Schulweg</StyledLogoText>
    </HeaderSection>
  )
}
