import React, { useEffect } from 'react'
import {
  StyledSpan,
  StyledPersonEntry,
  CreateButton,
} from './Runninglist.styles'
import saveToLocal from '../utils/localStorage'
import uuid from 'react-uuid'

export default function RenderNewPersonOnList({
  toNewRunninglist,
  setToNewRunninglist,
  minus,
  setPersons,
  persons,
  clickedListId,
}) {
  useEffect(() => {
    saveToLocal('persons', persons)
  }, [persons])

  useEffect(() => {
    saveToLocal('toNewRunninglist', toNewRunninglist)
  }, [toNewRunninglist])

  function handleRemoveClick(event) {
    const selectedSingle = toNewRunninglist.find(
      item => item.id === event.target.id
    )
    const notClicktPersons = toNewRunninglist.filter(
      item => item.id !== event.target.id
    )

    setToNewRunninglist(notClicktPersons)
    setPersons([...persons, selectedSingle])
  }

  return toNewRunninglist
    .filter(person => person.listid === clickedListId)
    .map(person => (
      <label key={uuid()} htmlFor={person.id}>
        <StyledPersonEntry key={person.id} value={person.firstName}>
          <StyledSpan
            value={person.firstName}
            id={person.id}
            name={person.firstName}
            onClick={handleRemoveClick}
          >
            {person.firstName} {person.lastName}
          </StyledSpan>

          <StyledSpan value={person.class}>{person.class}</StyledSpan>
          <CreateButton type="submit">
            <img src={minus} alt="remove button"></img>
          </CreateButton>
        </StyledPersonEntry>
      </label>
    ))
}
