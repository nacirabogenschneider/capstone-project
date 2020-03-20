import React, { useEffect } from 'react'
import uuid from 'react-uuid'
import {
  StyledPersonToAdd,
  CreateButton,
  StyledWrap,
} from './Runninglist.styles'
import saveToLocal from './utils/localStorage'

export default function RunninglistPeopleFromProfile({
  plus,
  setPersons,
  persons,
  setToNewRunninglist,
  toNewRunninglist,
  clickedListId,
}) {
  function handleAddClick(event) {
    const index = persons.findIndex(item => item.name === event.target.id)
    const splittetElement = persons.filter(
      item => item.name !== event.target.id
    )
    // setPersons(splittetElement)

    const selectedPerson = persons.splice(index, 1)
    const selectedSingle = selectedPerson[0]
    setToNewRunninglist([
      ...toNewRunninglist,
      {
        name: selectedSingle.name,
        state: selectedSingle.state,
        key: selectedSingle.key,
        listid: clickedListId,
        class: selectedSingle.class,
      },
    ])
  }
  useEffect(() => {
    saveToLocal('toNewRunninglist', toNewRunninglist)
  }, [toNewRunninglist])

  return persons.map(person => (
    <StyledPersonToAdd key={uuid()}>
      <StyledWrap
        onClick={handleAddClick}
        value={person.name}
        name={person.name}
        id={person.name}
      >
        {person.name}
      </StyledWrap>
      <CreateButton type="submit">
        <img src={plus} alt="create button"></img>
      </CreateButton>
    </StyledPersonToAdd>
  ))
}
