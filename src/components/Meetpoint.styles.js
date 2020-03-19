import styled from 'styled-components/macro'

const StyledInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 94vw;
  height: 40px;
  flex-direction: column;
  font-family: 'Raleway';
  border-radius: 12px;
  border: none;
  padding: 10px;
  margin: 5px 0;
  font-size: 1.1rem;
  background: white;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #2b7380;
  z-index: 100;
  &:active,
  &:focus {
    box-shadow: 0 0 10px 2px #ee7600;
  }
`

const StyledSuggestion = styled.div`
  display: flex;
  justify-content: left;
  background: white;
  height: 45px;
  opacity: 0.94;
  font-size: 18px;
  padding: 10px;
`
const StyledSuggestionWrapper = styled.div`
  border-radius: 12px;
  margin: 6px;
`

const AddPointButton = styled.button`
  display: flex;
  font-family: 'Raleway';
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  height: 45px;
  border: none;
  margin: 4px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 0 10px 2px #2b7380;
  &:active,
  &:focus {
    box-shadow: 0 0 10px 2px #ee7600;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  font-family: 'Raleway';
`
const StyledMeetpoint = styled.select`
  font-family: 'Raleway';
  border-radius: 12px;
  border: none;
  font-size: 1.1rem;
  height: 49px;
  width: 96vw;
  padding: 4px;
  margin: 8px 0;
  background: white;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #2b7380;
  &:focus {
    box-shadow: 0 0 10px 2px #ee7600;
  }
`
export {
  StyledInput,
  StyledSuggestion,
  StyledSuggestionWrapper,
  AddPointButton,
  ButtonWrapper,
  StyledMeetpoint,
}
