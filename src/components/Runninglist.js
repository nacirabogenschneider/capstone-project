import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import uuid from 'react-uuid'
import plus from '../img/solid-sm/sm-plus.svg'
import RunninglistDetails from './RunninglistDetails'
import circle from '../img/svg/_circle.svg'
import minus from '../img/svg/_minus.svg'
import saveToLocal from './utils/localStorage'
import CreateRunninglist from './CreateRunninglist'
import {
  RunningListInput,
  StyledTextWrapper,
  StyledRunninglistSection,
  TimeInput,
  StyledRunningTitle,
  StyledRow,
  CreateButton,
} from './Runninglist.styles'

export default function Runninglist({ meetpoint }) {
  const staticProfilData = [
    { name: 'Nacira Bogenschneider', state: 'parent', key: uuid() },
    { name: 'Vincent', state: 'child', class: '2a', key: uuid() },
    { name: 'Marlene', state: 'child', class: 'VSKb', key: uuid() },
    { name: 'Bruno', state: 'child', key: uuid() },
  ]
  const unique = uuid()
  const [clickedListId, setClickedListID] = useState('')
  const [isClicked, setIsClicked] = useState(null)

  const [runningLists, setRunningLists] = useState(
    () => JSON.parse(localStorage.getItem('runningLists')) || []
  )

  const { register, handleSubmit, reset } = useForm()

  useEffect(() => {
    saveToLocal('runningLists', runningLists)
  }, [runningLists])

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

  return (
    <>
      <StyledRunninglistSection>
        <StyledRow>
          <StyledRunningTitle>
            <div>Lauflisten</div>
          </StyledRunningTitle>
        </StyledRow>
        <CreateRunninglist
          circle={circle}
          runningLists={runningLists}
          setClickedListID={setClickedListID}
          setIsClicked={setIsClicked}
        />
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
