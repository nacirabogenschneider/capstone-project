import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function Runninglist({ plus, back, check }) {
  return (
    <>
      <StyledRunninglistSection>
        <StyledRow>
          <StyledRunningTime>Startzeit</StyledRunningTime>
          <StyledRunningHeader>Laufliste</StyledRunningHeader>
        </StyledRow>
        <StyledRow>
          <TimeInput type="time"></TimeInput>
          <StyledTextWrapper>
            <p> Laufliste Nummer 1</p>
            <img src={plus}></img>
          </StyledTextWrapper>
        </StyledRow>

        <div>
          <ButtonWrapper>
            <NavLink to="/meetpoint">
              <AddPointButton aria-label="check">
                <img src={back} alt="back button"></img>
              </AddPointButton>
            </NavLink>
            <NavLink to="/card">
              <AddPointButton aria-label="check">
                <img src={check} alt="check button"></img>
              </AddPointButton>
            </NavLink>
          </ButtonWrapper>
        </div>
      </StyledRunninglistSection>
    </>
  )
}
const StyledTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  border: none;
  width: 100vw;
  background: white;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #a4b0af;
`

const StyledRunninglistSection = styled.section`
  position: absolute;
  font-family: Raleway;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  top: 120px;
`
const TimeInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 48px;
  width: 80px;
  border: none;
  border-radius: 12px;
  background: white;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #a4b0af;
`

const StyledRunningHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  background: #ee7600;
  width: 100vw;
  height: 48px;
  border-radius: 12px;
  border: none;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #a4b0af;
`

const StyledRow = styled.div`
  display: flex;
  margin: 5px 0;
  width: 100vw;
`
const StyledRunningTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  background: #ee7600;
  font-family: 'Arial';
  height: 48px;
  width: 80px;
  border-radius: 12px;
  border: none;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #a4b0af;
`
const AddPointButton = styled.button`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
  border: none;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px #a4b0af;
  background: white;
`

const ButtonWrapper = styled.div`
  display: flex;
`
