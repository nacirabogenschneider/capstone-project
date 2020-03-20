import styled from 'styled-components/macro'

const RunningListInput = styled.input`
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  font-size: 16px;
  border: none;
  background: white;
  opacity: 0.94;
`
const StyledTextWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  border: none;
  width: 100%;
  height: 48px;
  background: white;
  margin: 10px 10px 6px 4px;
  padding: 0;
  opacity: 0.94;
  box-shadow: 0 0 6px 2px #2b7380;
  &:active,
  &:focus {
    box-shadow: 0 0 10px 2px #ee7600;
  }
`
const StyledPersonToAdd = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  border: none;
  height: 48px;
  background: white;
  margin: 10px 4px 6px 4px;
  padding: 0;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #2b7380;
  &:active,
  &:focus {
    box-shadow: 0 0 10px 2px #ee7600;
  }
`

const StyledRunninglistSection = styled.section`
  position: absolute;
  font-family: Raleway;
  height: 510px;
  overflow-y: scroll;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  top: 100px;
`
const TimeInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 48px;
  width: 80px;
  min-width: 60px;
  margin: 10px 4px 10px 10px;
  border: none;
  border-radius: 12px;
  background: white;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #2b7380;
  &:active,
  &:focus {
    box-shadow: 0 0 10px 2px #ee7600;
  }
`
const StyledTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 80px;
  margin: 10px 4px 10px 10px;
  border: none;
  border-radius: 12px;
  background: white;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #2b7380;
`
const RunningListName = styled.div`
  padding-left: 10px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  font-size: 16px;
  border: none;
  background: white;
  margin: 0 4px;
  opacity: 0.94;
`
const StyledRunningTitle = styled.div`
  font-family: Raleway;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 100vw;
  height: 48px;
  border-radius: 12px;
  border: none;
  padding-left: 10px;
  margin: 8px 4px 0 4px;
  opacity: 0.94;
  font-size: 1.4rem;
  box-shadow: 0 0 10px 2px #2b7380;
`

const StyledRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: auto;
  overflow-y: visible;
`

const CreateButton = styled.button`
  background: transparent;
  padding: 10px;
  border: none;
`

const StyledSpan = styled.span`
  margin: 0 4px;
`
const StyledPersonEntry = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  margin: 10px 4px;
  padding: 0 4px;
  color: white;
  background: transparent;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px #2b7380;
`
const StyledWrapper = styled.div`
  padding-left: 10px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  font-size: 16px;
  border: none;
  background: white;
  margin: 0 4px;
  padding: 0;
  opacity: 0.94;
`
const StyledWrap = styled.div`
  padding-left: 10px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  font-size: 16px;
  border: none;
  background: white;
  margin: 0 4px;
  padding: 0;
  opacity: 0.94;
`
const StyledX = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  border: none;
  background: none;
  font-size: 1.4rem;
  color: white;
`
const StyledForms = styled.section`
  position: absolute;
  top: 20px;
  left: 4px;
  right: 4px;
  display: block;
  border-radius: 12px;
  font-family: Raleway, sans-serif;
  box-sizing: inline-block;
  height: auto;
  padding: 10px;
  opacity: 0.99;
  background: #5fc3c7;
  box-shadow: 0 0 10px 2px #2b7380;
  z-index: 300;
  opacity: 0.98;
`
const StyledFormHeader = styled.header`
  font-size: 1.4rem;
  padding: 8px;
`
export {
  RunningListInput,
  StyledTextWrapper,
  StyledRunninglistSection,
  TimeInput,
  StyledTime,
  RunningListName,
  StyledRunningTitle,
  StyledRow,
  CreateButton,
  StyledSpan,
  StyledPersonEntry,
  StyledWrapper,
  StyledX,
  StyledForms,
  StyledWrap,
  StyledPersonToAdd,
  StyledFormHeader,
}
