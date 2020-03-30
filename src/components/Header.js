import React from 'react'
import {
  StyledLogoText,
  HeaderSection,
  Logo,
  StyledProfileImg,
} from './Header.styles'
import schoolway from '../img/svg/children-schoolway.svg'
import profile from './pages/profile/nacirabogenschneider.jpg'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <HeaderSection>
      <Logo src={schoolway} alt="two walking school-children"></Logo>
      <StyledLogoText>Schulweg</StyledLogoText>
      <NavLink to="/profile">
        <StyledProfileImg src={profile} alt="profile"></StyledProfileImg>
      </NavLink>
    </HeaderSection>
  )
}
