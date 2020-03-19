import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import uuid from 'react-uuid'
import saveToLocal from './utils/localStorage'
import {
  StyledTextWrapper,
  CreateButton,
  StyledSpan,
  StyledPersonEntry,
  StyledWrap,
  StyledX,
  StyledForms,
} from './Runninglist.styles'

export default function RunninglistDetails({
  runninglists,
  staticProfilData,
  isClicked,
  clickedListId,
  setIsClicked,
  plus,
  minus,
}) {
  const [persons, setPersons] = useState(
    () => JSON.parse(localStorage.getItem('persons')) || staticProfilData
  )

  const [toNewRunninglist, setToNewRunninglist] = useState(
    () => JSON.parse(localStorage.getItem('toNewRunninglist')) || []
  )

  const [toogleSelectForm, setToggleSelectForm] = useState(false)
  const { handleSubmit, reset } = useForm()
  const clickedListElement = runninglists.find(
    list => list.id === clickedListId
  )

  useEffect(() => {
    isClicked && isClicked !== null && setToggleSelectForm(isClicked)
  }, [isClicked])

  function handleAddClick(event) {
    let indexOfSelectedPerson = persons.findIndex(
      item => item.name === event.target.id
    )
    let allPersonsExceptSelected = persons.filter(
      item => item.name !== event.target.id
    )
    const selectedPersonArray = persons.splice(indexOfSelectedPerson, 1)
    const selectedPerson = selectedPersonArray[0]

    setPersons(allPersonsExceptSelected)
    setToNewRunninglist([
      ...toNewRunninglist,
      {
        name: selectedPerson.name,
        state: selectedPerson.state,
        key: selectedPerson.key,
        listid: clickedListId,
        class: selectedPerson.class,
      },
    ])
    saveToLocal('toNewRunninglist', toNewRunninglist)
  }

  function toogle() {
    setToggleSelectForm(!toogleSelectForm)
    setIsClicked(false)
  }

  function onSubmit(event) {
    event.preventDefault()
    reset()
  }
  function handleRemoveClick(event) {
    let index = toNewRunninglist.findIndex(
      item => item.name === event.target.id
    )
    const selectedPersonArray = toNewRunninglist.splice(index, 1)
    const selectedPerson = selectedPersonArray[0]
    setPersons([...persons, selectedPerson])

    saveToLocal('persons', persons)
  }

  function peopleFromProfileInput() {
    return persons.map(person => (
      <StyledTextWrapper key={uuid()}>
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
      </StyledTextWrapper>
    ))
  }
  function renderNewPersonOnList() {
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
  function runningListDetailsForm() {
    return (
      toogleSelectForm && (
        <>
          <StyledX key={uuid()} onClick={toogle}>
            x
          </StyledX>
          <StyledForms
            key={clickedListElement.id}
            onSubmit={handleSubmit(onSubmit)}
            id={clickedListElement.id}
          >
            <div>
              <div>
                {clickedListElement.time} - {clickedListElement.listname}
              </div>
              {toNewRunninglist.length < 1 && (
                <StyledPersonEntry>
                  Deine Liste ist noch leer...
                </StyledPersonEntry>
              )}
              {renderNewPersonOnList()}
              {persons.length > 0 && (
                <div>Wähle Personen aus Deinem Profil</div>
              )}
              {peopleFromProfileInput()}
            </div>
          </StyledForms>
        </>
      )
    )
  }
  return runningListDetailsForm()
}
