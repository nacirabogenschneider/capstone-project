import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import uuid from 'react-uuid'
import RunninglistDetails from './RunninglistDetails'
import saveToLocal from '../utils/localStorage'
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

export default function Runninglist({ meetpoint, plus, minus, circle }) {
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
