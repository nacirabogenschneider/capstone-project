import styled from 'styled-components/macro'

const StyledSpan = styled.span`
  margin-left: 8px;
`
const StyledSvg = styled.img`
  width: 34px;
  height: 34px;
`
const InfoCards = styled.section`
  position: absolute;
  display: flex;
  justify-content: 'center';
  align-items: center;
  flex-direction: column;
  top: 110px;
  width: 440px;
`
const CardHeader = styled.section`
  display: flex;
  padding: 5px;
  justify-content: left;
  align-items: center;
  font-size: 20px;
`
const MeetHeader = styled.section`
  display: flex;
  padding: 5px;
  justify-content: left;
  align-items: center;
  font-size: 20px;
`
const SchoolCard = styled.section`
  display: flex;
  width: 420px;
  flex-direction: column;
  font-family: 'Raleway';
  border-radius: 12px;
  padding: 10px;
  margin: 5px 10px;
  font-size: 1.2rem;
  background: white;
  opacity: 0.95;
  box-shadow: 0 0 10px 2px #2b7380;
`

export { SchoolCard, MeetHeader, CardHeader, InfoCards, StyledSvg, StyledSpan }
