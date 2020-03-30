import React, { useEffect } from 'react'
import uuid from 'react-uuid'
import {
  StyledPersonToAdd,
  StyledSpan,
  CreateButton,
  StyledWrap,
} from './Runninglist.styles'
import saveToLocal from '../utils/localStorage'

export default function RunninglistPeopleFromProfile({
  plus,
  setToNewRunninglist,
  toNewRunninglist,
  clickedListId,
  persons,
  setPersons,
}) {
  useEffect(() => {
    saveToLocal('persons', persons)
  }, [persons])

  useEffect(() => {
    saveToLocal('toNewRunninglist', toNewRunninglist)
  }, [toNewRunninglist])

  function handleAddClick(event) {
    const selectedSingle = persons.find(item => item.id === event.target.id)
    const notClickedPerson = persons.filter(item => item.id !== event.target.id)
    setPersons(notClickedPerson)

    setToNewRunninglist([
      ...toNewRunninglist,
      {
        firstName: selectedSingle.firstName,
        lastName: selectedSingle.lastName,
        state: selectedSingle.state,
        id: selectedSingle.id,
        class: selectedSingle.class,
        listid: clickedListId,
      },
    ])
  }

  return persons.map(person => (
    <label key={uuid()} htmlFor={person.id}>
      <StyledPersonToAdd key={uuid()}>
        <StyledWrap
          value={person.firstName}
          name={person.firstName}
          id={person.id}
          onClick={handleAddClick}
        >
          {person.firstName} {person.lastName}
        </StyledWrap>
        <StyledSpan value={person.class}>{person.class}</StyledSpan>
        <CreateButton type="submit">
          <img src={plus} alt="add a person to running list"></img>
        </CreateButton>
      </StyledPersonToAdd>
    </label>
  ))
}
