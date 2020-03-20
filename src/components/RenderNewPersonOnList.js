import React, { useEffect } from 'react'
import { StyledSpan, StyledPersonEntry } from './Runninglist.styles'
import saveToLocal from './utils/localStorage'

export default function RenderNewPersonOnList({
  toNewRunninglist,
  minus,
  setPersons,
  persons,
  clickedListId,
}) {
  function handleRemoveClick(event) {
    let index = toNewRunninglist.findIndex(
      item => item.name === event.target.id
    )

    const selectedPerson = toNewRunninglist.splice(index, 1)
    const selectedSingle = selectedPerson[0]
    setPersons([...persons, selectedSingle])
  }
  useEffect(() => {
    saveToLocal('persons', persons)
  }, [persons])

  return toNewRunninglist
    .filter(person => person.listid === clickedListId)
    .map(person => (
      <StyledPersonEntry key={person.name} value={person.name}>
        <StyledSpan
          value={person.name}
          onClick={handleRemoveClick}
          id={person.name}
        >
          {person.name}
        </StyledSpan>
        <StyledSpan value={person.class}> {person.class}</StyledSpan>
        <img src={minus} alt="remove button"></img>
      </StyledPersonEntry>
    ))
}
