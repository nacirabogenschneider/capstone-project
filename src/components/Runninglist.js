import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import uuid from 'react-uuid'
import plus from '../img/solid-sm/sm-plus.svg'
import RunninglistDetails from './RunninglistDetails'
import circle from '../img/svg/_circle.svg'
import minus from '../img/svg/_minus.svg'

export default function Runninglist({ meetpoint }) {
  const unique = uuid()
  const [clickedListId, setClickedListID] = useState('')
  const [isClicked, setIsClicked] = useState(null)
  const [runningLists, setRunningLists] = useState([])
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = data => {
    setRunningLists([
      ...runningLists,
      {
        time: data.time,
        listname: data.listname,
        meetpoint: meetpoint.name,
        id: unique,
        key: unique,
      },
    ])

    reset()
  }

  const staticProfilData = [
    { name: 'Nacira Bogenschneider', state: 'parent', key: uuid() },
    { name: 'Vincent', state: 'child', class: '2a', key: uuid() },
    { name: 'Marlene', state: 'child', class: 'VSKb', key: uuid() },
    { name: 'Bruno', state: 'child', key: uuid() },
  ]

  function handleListClick(event) {
    setClickedListID(event.target.id)
    setIsClicked(true)
  }

  function createRunninglist() {
    return runningLists.map(list => (
      <label key={list.key} htmlFor={list.id}>
        <StyledRow>
          <StyledTime>{list.time}</StyledTime>
          <StyledTextWrapper>
            <RunningListName>
              <div
                key={list.key}
                id={list.id}
                onClick={handleListClick}
                value={list.listname}
              >
                {list.listname}
              </div>
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
          <StyledRunningTitle>
            <div>Lauflisten</div>
          </StyledRunningTitle>
        </StyledRow>
        {createRunninglist()}
        <RunninglistDetails
          clickedListId={clickedListId}
          setIsClicked={setIsClicked}
          isClicked={isClicked}
          staticProfilData={staticProfilData}
          runninglists={runningLists}
          plus={plus}
          minus={minus}
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
  box-shadow: 0 0 10px 2px #2b7380;
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
  top: 100px;
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
  margin: 0 4px;
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
  padding: 0;
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
  margin: 6px 0;
  display: flex;
  width: 100vw;
`

const CreateButton = styled.button`
  background: transparent;
  padding: 10px;
  border: none;
`
