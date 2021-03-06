import styled from 'styled-components/macro'

const StyledHeader = styled.div`
  font-size: 1.3rem;
  font-weight: 300;
  padding: 10px;
  display: flex;
  align-items: center;
  margin: 10px;
  width: 420px;
`
const StyledContent = styled.div`
  font-size: 1.1rem;
  display: flex;
  padding: 10px;
  align-items: center;
  margin: 10px;
  width: 420px;
  overflow: 'hidden';
`
const StyledCounter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 420px;
`
const CounterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 420px;
`
const StyledCounterVsk = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items: center;
  width: 420px;
`
const SchoolSection = styled.section`
  position: absolute;
  width: 420px;
  background: white;
  opacity: 0.94;
  top: 115px;
  bottom: 100px;
  overflow-y: scroll;
  min-height: 240px;
  left: 10px;
  right: 10px;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px #2b7380;
`
const StyledImage = styled.img`
  height: 35px;
  padding-right: 10px;
  fill: black;
`
const StyledLink = styled.a`
  color: #2b7380;
  &:hover {
    color: #ee7600;
  }
`
const Counter = styled.span`
  color: #2b7380;
  display: flex;
  font-size: 1.6rem;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding: 18px;
  border: 1px solid orange;
  border-radius: 50%;
  height: 30px;
  width: 30px;
`
export {
  StyledImage,
  SchoolSection,
  StyledContent,
  StyledHeader,
  StyledLink,
  Counter,
  StyledCounter,
  CounterDiv,
  StyledCounterVsk,
}
