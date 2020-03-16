import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import uuid from 'react-uuid'
import styled from 'styled-components'

export default function RunninglistDetails({
  runninglists,
  staticProfilData,
  isClicked,
  clickedListId,
  setIsClicked,
  plus,
  minus,
}) {
  const [persons, setPersons] = useState(staticProfilData)
  const [toNewRunninglist, setToNewRunninglist] = useState([])
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

    const selectedPerson = toNewRunninglist.splice(index, 1)
    const selectedSingle = selectedPerson[0]
    setPersons([...persons, selectedSingle])
  }

  function peopleFromProfileInput() {
    return persons.map(person => (
      <StyledTextWrapper key={uuid()}>
        <StyledWrapper
          onClick={handleAddClick}
          value={person.name}
          name={person.name}
          id={person.name}
        >
          {person.name}
        </StyledWrapper>
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
          <Exit key={uuid()} onClick={toogle}>
            x
          </Exit>
          <StyledForm
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
          </StyledForm>
        </>
      )
    )
  }
  return runningListDetailsForm()
}

const StyledSpan = styled.span`
  margin: 0 4px;
`

const StyledPersonEntry = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  margin: 8px 4px;
  padding: 0 4px;
  color: white;
  background: transparent;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px #61390f;
`
const StyledWrapper = styled.div`
  padding-left: 10px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  font-size: 16px;
  border: none;
  background: white;
  margin: 0 4px;
  padding: 0;
  opacity: 0.94;
`
const Exit = styled.button`
  display: flex;
  border: none;
  background: none;
  position: absolute;
  font-size: 1.2rem;
  top: 6px;
  right: 6px;
  z-index: 900;
  color: white;
`
const StyledForm = styled.section`
  position: absolute;
  top: 0;
  left: 4px;
  right: 4px;
  display: block;
  border-radius: 12px;
  font-family: Raleway, sans-serif;
  box-sizing: inline-block;
  height: auto;
  padding: 10px;
  opacity: 0.99;
  background: #ee7600;
  z-index: 300;
  opacity: 0.98;
`
const CreateButton = styled.button`
  background: transparent;
  padding: 10px;
  border: none;
`
const StyledTextWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  border: none;
  width: 100%;
  background: white;
  margin: 10px 0;
  padding: 0;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #732806;
  &:active,
  &:focus {
    box-shadow: 0 0 10px 2px white;
  }
`
