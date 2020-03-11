import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function Runninglist({ meetpoint, plus, back, check }) {
  useEffect(() => {
    console.log('RUNNINGLIST', meetpoint.meetpoint)
  })

  return (
    <>
      <StyledRunninglistSection>
        <StyledRow>
          <StyledRunningHeader>
            {(meetpoint.length === 0 && 'Dein Treffpunkt') ||
              meetpoint.meetpoint}
          </StyledRunningHeader>
        </StyledRow>
        <StyledRow>
          <StyledRunningTitle>
            <h1>Lauflisten</h1>
          </StyledRunningTitle>
        </StyledRow>

        <StyledRow>
          <TimeInput type="time"></TimeInput>
          <StyledTextWrapper>
            <RunningList> Laufliste Nummer 1</RunningList>
            <img src={plus}></img>
          </StyledTextWrapper>
        </StyledRow>

        <div>
          <ButtonWrapper>
            <AddPointButton as={NavLink} to="/card" aria-label="back">
              <img src={back} alt="back button"></img>
            </AddPointButton>

            <AddPointButton as={NavLink} to="/card" aria-label="check">
              <img src={check} alt="check button"></img>
            </AddPointButton>
          </ButtonWrapper>
        </div>
      </StyledRunninglistSection>
    </>
  )
}

const RunningList = styled.p`
  padding-left: 10px;
  margin: 0;
`
const StyledTextWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  border: none;
  width: 100vw;
  background: white;
  margin: 0 4px;
  padding: 0;
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
  height: 48px;
  width: 80px;
  margin: 0 4px;
  border: none;
  border-radius: 12px;
  background: white;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #a4b0af;
  &:active,
  &:focus {
    box-shadow: 0 0 10px 2px #ee7600;
  }
`

const StyledRunningTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 100vw;
  height: 48px;
  border-radius: 12px;
  border: none;
  padding-left: 10px;
  margin: 0 4px;
  opacity: 0.94;
  font-size: 1.4rem;
  box-shadow: 0 0 10px 2px #a4b0af;
`

const StyledRunningHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ee7600;

  width: 100vw;
  height: 48px;
  border-radius: 12px;
  border: none;
  padding-left: 10px;
  margin: 0 4px;
  opacity: 0.94;
  color: white;
  font-size: 1.4rem;
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
  justify-content: center;
  background: #ee7600;
  font-family: 'Arial';
  height: 48px;
  width: 80px;
  margin: 0 4px;
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
  margin: 4px;
  border: none;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px #a4b0af;
  background: white;
  &:active,
  &:focus {
    box-shadow: 0 0 10px 2px #ee7600;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
