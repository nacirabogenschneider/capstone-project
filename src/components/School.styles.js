import styled from 'styled-components/macro'

const StyledHeader = styled.div`
  font-size: 1.3rem;
  font-weight: 300;
  padding: 10px;
  display: flex;
  align-items: center;
  margin: 10px;
`
const StyledContent = styled.div`
  font-size: 1.1rem;
  display: flex;
  padding: 10px;
  align-items: center;
  margin: 10px;
`
const SchoolSection = styled.section`
  position: absolute;
  background: white;
  opacity: 0.94;
  top: 115px;
  min-height: 240px;
  left: 10px;
  right: 10px;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px #2b7380;
`
const StyledImage = styled.img`
  height: 35px;
  padding-right: 10px;
`
export { StyledImage, SchoolSection, StyledContent, StyledHeader }
