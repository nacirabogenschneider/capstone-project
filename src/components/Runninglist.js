import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import uuid from 'react-uuid'
import adult from '../img/solid-sm/adult.svg'
import child from '../img/solid-sm/child.svg'
import plus from '../img/solid-sm/sm-plus.svg'
import RunninglistDetails from './RunninglistDetails'
import circle from '../img/svg/_circle.svg'

export default function Runninglist({ meetpoint, back, check }) {
  const unique = uuid()
  const [clickedListId, setClickedListID] = useState('')
  const [isClicked, setIsClicked] = useState(null)
  const [runningLists, setRunningLists] = useState([])
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = data => {
    setRunningLists([
      ...runningLists,
      { time: data.time, listname: data.listname, id: unique },
    ])
    reset()
  }

  const staticProfilData = [
    { name: 'Nacira Bogenschneider', state: 'parent' },
    { name: 'Vincent', state: 'child', class: '2a' },
    { name: 'Marlene', state: 'child', class: 'VSKb' },
    { name: 'Bruno', state: 'child' },
  ]

  useEffect(() => {
    console.log(runningLists)
  }, [runningLists])

  function handleListClick(event) {
    setClickedListID(event.target.id)
    setIsClicked(true)
  }
  console.log(isClicked)
  function createRunninglist() {
    return runningLists.map(list => (
      <label key={uuid(list)} htmlFor={list.id}>
        <StyledRow>
          <StyledTime>{list.time}</StyledTime>
          <StyledTextWrapper>
            <RunningListName>
              <div id={list.id} onClick={handleListClick} value={list.listname}>
                {list.listname} {/* renderPreviewIcons()*/}
              </div>
              {/*   const [childIconCounter, setChildIconCounter] = useState([])
              const [setAdultIconCounter, setChildIconCounter] = useState([])

              function countPersonStates(){
                staticProfilData.filter(person => person.state === "adult" ? setAdultIconCounter([...adultIconCounter, {1} ]): setChildIconCounter([...childIconCounter, {1} ]))
              }
              function renderPreviewIcons(){
               adultIconCounter.map(icon=>   <img src={adult} alt="adult"></img>) 
                childIconCounter.map(icon => <img src={child} alt="child"></img)
              }
            */}
            </RunningListName>
            <CreateButton type="submit">
              <img src={circle} alt="add button"></img>
            </CreateButton>
          </StyledTextWrapper>
        </StyledRow>
      </label>
    ))
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
        {createRunninglist()}
        <RunninglistDetails
          setIsClicked={setIsClicked}
          isClicked={isClicked}
          staticProfilData={staticProfilData}
          runningLists={runningLists}
          plus={plus}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledRow>
            <TimeInput
              type="time"
              name="time"
              ref={register({ required: true })}
            ></TimeInput>
            <StyledTextWrapper>
              <RunningListInput
                ref={register({ required: true, minLength: 2 })}
                type="text"
                name="listname"
                placeholder="Name der neuen Liste?"
              ></RunningListInput>
              <CreateButton type="submit">
                <img src={plus} alt="create button"></img>
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
  width: 100%;
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
  width: 100vw;
  height: auto;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  top: 120px;
  /* overflow-y: scroll; */
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
const CreateButton = styled.button`
  background: transparent;
  padding: 10px;
  border: none;
`
