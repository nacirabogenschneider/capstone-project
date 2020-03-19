import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import uuid from 'react-uuid'
import saveToLocal from './utils/localStorage'
import RenderNewPersonOnList from './RenderNewPersonOnList'

import {
  StyledPersonToAdd,
  CreateButton,
  StyledSpan,
  StyledPersonEntry,
  StyledWrap,
  StyledX,
  StyledForms,
  StyledFormHeader,
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
    let index = persons.findIndex(item => item.name === event.target.id)
    let splittetElement = persons.filter(item => item.name !== event.target.id)
    const selectedPerson = persons.splice(index, 1)
    const selectedSingle = selectedPerson[0]

    setPersons(splittetElement)
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

  function toogle() {
    setToggleSelectForm(!toogleSelectForm)
    setIsClicked(false)
  }

  function onSubmit(event) {
    event.preventDefault()
    reset()
  }

  useEffect(() => {
    saveToLocal('persons', persons)
  }, [persons])

  function peopleFromProfileInput() {
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

  function runningListDetailsForm() {
    return (
      toogleSelectForm && (
        <>
          <StyledForms
            key={clickedListElement.id}
            onSubmit={handleSubmit(onSubmit)}
            id={clickedListElement.id}
          >
            <StyledX key={uuid()} onClick={toogle}>
              x
            </StyledX>
            <div>
              <StyledFormHeader>
                {clickedListElement.time} - {clickedListElement.listname}
              </StyledFormHeader>
              {toNewRunninglist.length < 1 && (
                <StyledPersonEntry>
                  Deine Liste ist noch leer...
                </StyledPersonEntry>
              )}

              <RenderNewPersonOnList
                toNewRunninglist={toNewRunninglist}
                setPersons={setPersons}
                persons={persons}
                minus={minus}
                clickedListId={clickedListId}
              />
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
