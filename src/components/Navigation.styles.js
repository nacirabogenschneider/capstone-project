import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

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
const StyledIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export { StyledIconWrapper, StyledLink, StyledNavbar }
