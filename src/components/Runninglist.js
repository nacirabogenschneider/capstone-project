import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import eye from '../img/outline-md/md-eye.svg'
import { symbol } from 'prop-types'
import adult from '../img/solid-sm/adult.svg'
import child from '../img/solid-sm/child.svg'

export default function Runninglist({ meetpoint, plus, back, check }) {
  useEffect(() => {
    console.log('RUNNINGLIST', meetpoint.meetpoint)
  })

  const [allRunningLists, setAllRunningLists] = useState([])
  const [selectedTime, setSelectedTime] = useState('')
  const [nameOfRunningList, setNameOfRunningList] = useState('')

  const createRunninglist = (
    <>
      <StyledRow>
        <StyledTime>{selectedTime}</StyledTime>
        <StyledTextWrapper>
          <RunningListName>
            <div>{nameOfRunningList}</div>
            {/* <img src={adult} alt="adult"></img>
            <img src={child} alt="child"></img>
            <img src={child} alt="child"></img> */}
          </RunningListName>
          <CreateButton>
            <img src={eye} alt="add button"></img>
          </CreateButton>
        </StyledTextWrapper>
      </StyledRow>
    </>
  )

  function submitHandler(event) {
    event.preventDefault()
    setAllRunningLists([...allRunningLists, createRunninglist])
    console.log('Name der Liste - ', event.target.value)
    console.log('UHRZEIT: ')
    console.log('Click')
  }

  function onListNameChange(event) {
    setNameOfRunningList(event.target.value)
  }
  function timeChangeHandler(event) {
    setSelectedTime(event.target.value)
  }
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
        {allRunningLists}

        <form onSubmit={submitHandler}>
          <StyledRow>
            <TimeInput
              type="time"
              name="time"
              onChange={timeChangeHandler}
            ></TimeInput>
            <StyledTextWrapper>
              <RunningListInput
                type="text"
                name="list-name"
                // value={nameOfRunningList}
                placeholder="Name der neuen Liste?"
                onChange={onListNameChange}
              ></RunningListInput>
              <CreateButton>
                <img src={plus} type="submit" alt="add button"></img>
              </CreateButton>
              <CreateButton onClick={submitHandler}>
                <img src={check} alt="create button"></img>
              </CreateButton>
            </StyledTextWrapper>
          </StyledRow>
        </form>

        <div>
          <ButtonWrapper>
            <AddPointButton as={NavLink} to="/card" aria-label="back">
              <img src={back} alt="back button"></img>
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
const RunningListInput = styled.input`
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
  &:active,
  &:focus {
    box-shadow: 0 0 10px 2px #ee7600;
  }
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
const StyledTime = styled.div`
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
  padding: 0;
  opacity: 0.94;
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
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 95vh;
  height: 400px;
  background: #ee7600;
  opacity: 0.96;
`
const CreateButton = styled.div`
  padding: 0 10px;
  border: none;
`
