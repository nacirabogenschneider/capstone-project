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
}) {
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
  useEffect(() => {
    saveToLocal('persons', persons)
  }, [persons])

  return toNewRunninglist.map(person => (
    <label key={uuid()} htmlFor={person.id}>
      <StyledPersonEntry key={person.id} value={person.name}>
        <StyledSpan
          value={person.name}
          id={person.id}
          name={person.name}
          onClick={handleRemoveClick}
        >
          {person.name}
        </StyledSpan>
        <StyledSpan value={person.class}>{person.class}</StyledSpan>
        <CreateButton type="submit">
          <img src={minus} alt="remove button"></img>
        </CreateButton>
      </StyledPersonEntry>
    </label>
  ))
}
