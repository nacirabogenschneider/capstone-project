import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function Runninglist({ plus, back, check }) {
  return (
    <>
      <StyledRunninglistSection>
        <StyledRunningTime>Startzeit</StyledRunningTime>
        <StyledRunningHeader>Laufliste</StyledRunningHeader>
        <TimeInput type="time"></TimeInput>
        <DotWrapper>
          <AddPointButtonPlus>
            <img src={plus}></img>
          </AddPointButtonPlus>
        </DotWrapper>
      </StyledRunninglistSection>
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
    </>
  )
}

const StyledRunninglistSection = styled.section`
  position: absolute;
  display: grid;
  grid-template-columns: 20% auto;
  grid-template-rows: 20% auto;
  grid-column-gap: 12px;
  grid-row-gap: 12px;
  margin: 0 8px;
  box-sizing: border-box;
  top: 120px;
  width: 97vw;
`
const TimeInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Arial';
  height: 48px;
  border-radius: 12px;
  border: none;
  font-size: 1.1rem;
  background: white;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #a4b0af;
`
const DotWrapper = styled.div`
  display: flex;
  justify-content: right;
  font-family: 'Arial';
  height: 48px;
  border-radius: 12px;
  border: none;
  font-size: 1.4rem;
  background: white;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #a4b0af;
`

const StyledRunningHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  background: #ee7600;
  font-family: 'Arial';
  height: 48px;
  border-radius: 12px;
  border: none;
  padding-left: 12px;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #a4b0af;
`
const StyledRunningTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  background: #ee7600;
  font-family: 'Arial';
  height: 48px;
  border-radius: 12px;
  border: none;
  padding-left: 12px;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #a4b0af;
`
const AddPointButtonPlus = styled.button`
  display: flex;
  left: 45vw;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  height: 45px;
  width: 45px;
  border: none;
  background: transparent;
`
const AddPointButton = styled.button`
  display: flex;
  left: 45vw;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  height: 45px;
  width: 45px;
  border: none;
  margin: 4px;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px #a4b0af;
  background: white;
`

const ButtonWrapper = styled.div`
  display: flex;
`
