import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import uuid from 'react-uuid'
import RenderNewPersonOnList from './RenderNewPersonOnList'
import RunninglistPeopleFromProfile from './RunninglistPeopleFromProfile'

import {
  StyledPersonEntry,
  StyledX,
  StyledForms,
  StyledFormHeader,
} from './Runninglist.styles'

export default function RunninglistDetails({
  runninglists,
  isClicked,
  clickedListId,
  setIsClicked,
  plus,
  minus,
}) {
  const staticProfilData = [
    { name: 'Nacira Bogenschneider', state: 'parent', id: uuid() },
    { name: 'Vincent', state: 'child', class: '2a', id: uuid() },
    { name: 'Marlene', state: 'child', class: 'VSKb', id: uuid() },
    { name: 'Bruno', state: 'child', id: uuid() },
  ]
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

  function toogle() {
    setToggleSelectForm(!toogleSelectForm)
    setIsClicked(false)
  }

  function onSubmit(event) {
    event.preventDefault()
    reset()
  }

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
              setToNewRunninglist={setToNewRunninglist}
              setPersons={setPersons}
              persons={persons}
              minus={minus}
              clickedListId={clickedListId}
            />
            {persons.length > 0 && <div>Wähle Personen aus Deinem Profil</div>}

            <RunninglistPeopleFromProfile
              toNewRunninglist={toNewRunninglist}
              setToNewRunninglist={setToNewRunninglist}
              setPersons={setPersons}
              persons={persons}
              plus={plus}
              clickedListId={clickedListId}
            />
          </div>
        </StyledForms>
      </>
    )
  )
}
