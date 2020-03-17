import React from 'react'
import styled from 'styled-components'
import meetpointFlag from '../img/svg/_flag.svg'
import currentSchoolImg from '../img/svg/_school.svg'
import pin from '../img/svg/_location.svg'
import group from '../img/svg/_group.svg'
import { BrowserRouter as Switch, NavLink } from 'react-router-dom'
export default function Navigation() {
  return (
    <StyledNavbar>
      <StyledLink exact to="/">
        <img src={pin} alt="navigationpoint - home"></img>
        <span>Maps</span>
      </StyledLink>
      <StyledLink to="/school">
        <img src={currentSchoolImg} alt="navigationpoint - school"></img>
        <span>Schule</span>
      </StyledLink>
      <StyledLink to="/meetpoint">
        <img src={meetpointFlag} alt="navigationpoint - meetpoints"></img>
        Treffpunkt
      </StyledLink>
      <StyledLink to="/runninglist">
        <img src={group} alt="navigationpoint - runninglist"></img>
        <div>Laufliste</div>
      </StyledLink>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100vw;
  background: white;
  height: 52px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 0 4px 1px #2b7380;
  z-index: 600;
`
const StyledLink = styled(NavLink)`
  font-family: 'Raleway';
  font-size: 12px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  &.active {
    background: #5fc3c7;
  }
`
