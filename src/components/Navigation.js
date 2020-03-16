import React from 'react'
import styled from 'styled-components'
import meetpointFlag from '../img/svg/_flag.svg'
import currentSchoolImg from '../img/svg/_school.svg'
import pin from '../img/svg/_location.svg'
import group from '../img/svg/_group.svg'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'
export default function Navigation() {
  return (
    <StyledNavbar>
      <StyledLink exact to="/">
        <img src={pin}></img>
        <span>home</span>
      </StyledLink>
      <StyledLink to="/">
        <img src={currentSchoolImg}></img>
        <span>school</span>
      </StyledLink>
      <StyledLink to="/card">
        <img src={meetpointFlag}></img>meetpoint
      </StyledLink>
      <StyledLink to="/runninglist">
        <img src={group}></img>
        <div>runninglist</div>
      </StyledLink>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  background: white;
  height: 52px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 0 10px 3px #2b7380;
  z-index: 600;
`
const StyledLink = styled(NavLink)`
  font-size: 14px;
  display: flex;
  flex-direction: column;
`
