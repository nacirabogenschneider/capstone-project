import styled from 'styled-components/macro'

const HeaderSection = styled.div`
  padding: 0 8px;
  font-family: 'Crafty Girls';
  width: auto;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fbfbfb;
  border-bottom: 0.8px solid lightgray;
  z-index: 100;
  box-shadow: 0 0 4px 1px #2b7380;
`

const StyledLogoText = styled.div`
  color: #4a5568;
`
const Logo = styled.img`
  width: 45px;
`

const StyledProfileImg = styled.img`
  margin: 10px 0 0 0;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 1px solid black;
`

export { StyledLogoText, HeaderSection, Logo, StyledProfileImg }
