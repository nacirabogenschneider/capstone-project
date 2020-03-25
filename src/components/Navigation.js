import React from 'react'
import {
  StyledIconWrapper,
  StyledLink,
  StyledNavbar,
} from './Navigation.styles'
import meetpointFlag from '../img/svg/flag.svg'
import currentSchoolImg from '../img/svg/school.svg'
import pin from '../img/svg/location.svg'
import group from '../img/svg/group.svg'

export default function Navigation() {
  return (
    <StyledNavbar>
      <StyledLink exact to="/">
        <StyledIconWrapper>
          <img src={pin} alt="navigationpoint - home"></img>
          <div>Maps</div>
        </StyledIconWrapper>
      </StyledLink>
      <StyledLink to="/school">
        <StyledIconWrapper>
          <img src={currentSchoolImg} alt="navigationpoint - school"></img>
          <div>Schule</div>
        </StyledIconWrapper>
      </StyledLink>
      <StyledLink to="/meetpoint">
        <StyledIconWrapper>
          <img src={meetpointFlag} alt="navigationpoint - meetpoints"></img>
          <div>Treffpunkt</div>
        </StyledIconWrapper>
      </StyledLink>
      <StyledLink to="/runninglist">
        <StyledIconWrapper>
          <img src={group} alt="navigationpoint - runninglist"></img>
          <div>Laufliste</div>
        </StyledIconWrapper>
      </StyledLink>
    </StyledNavbar>
  )
}
