import React, { useEffect } from 'react'
import uuid from 'react-uuid'
import {
  StyledPersonToAdd,
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
  function handleAddClick(event) {
    const selectedSingle = persons.find(item => item.id === event.target.id)
    const notClickedPerson = persons.filter(item => item.id !== event.target.id)
    setPersons(notClickedPerson)
    saveToLocal('persons', persons)

    setToNewRunninglist([
      ...toNewRunninglist,
      {
        name: selectedSingle.name,
        state: selectedSingle.state,
        id: selectedSingle.id,
        listid: clickedListId,
        class: selectedSingle.class,
      },
    ])
  }
  useEffect(() => {
    saveToLocal('toNewRunninglist', toNewRunninglist)
  }, [toNewRunninglist])

  return persons.map(person => (
    <label key={uuid()} htmlFor={person.id}>
      <StyledPersonToAdd key={uuid()}>
        <StyledWrap
          value={person.name}
          name={person.name}
          id={person.id}
          onClick={handleAddClick}
        >
          {person.name}
        </StyledWrap>
        <CreateButton type="submit">
          <img src={plus} alt="add a person to running list"></img>
        </CreateButton>
      </StyledPersonToAdd>
    </label>
  ))
}
