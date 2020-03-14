import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import uuid from 'react-uuid'
import styled from 'styled-components'

{
  /* <RunninlistDetails adult={adult} child={schild} /> */
}

export default function RunninglistDetails({
  runninglists,
  staticProfilData,
  plus,
  isClicked,
  setIsClicked,
}) {
  const [person, setPerson] = useState([])
  const [addedPerson, setAddedPerson] = useState([])
  const [toogleSelectForm, setToggleSelectForm] = useState(false)
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = data => {
    setAddedPerson(data)
    reset()
  }

  useEffect(() => {
    isClicked && isClicked !== null && setToggleSelectForm(isClicked)
  }, [isClicked])
  function renderProfilePeople() {
    staticProfilData.map(person => (
      <>
        <img scr={person.state === 'adult' ? 'adult' : 'child'}></img>
        <div>{person.runningPersonName}</div>
        <div>{person.class}</div>
      </>
    ))
  }

  function addPeopleToRunninglist() {
    console.log('DIE PERSONEN HINZUFÜGEN ')
  }

  function handleAddButtonCklick() {
    console.log('PERSON HINZUFÜGEN')
  }
  function handleSaveButtonCkick() {
    console.log('AllE DATEN AB INS ARRAY')
  }

  function handleExitClick() {
    console.log('Die Liste schließen ohne zu speichern')
  }

  function toogle() {
    setToggleSelectForm(!toogleSelectForm)
    setIsClicked(false)
  }

  function renderSelectPeopleForm() {
    return (
      toogleSelectForm && (
        <>
          <Exit onClick={toogle}>x</Exit>
          <StyledForm id={uuid()}>
            <div>
              <StyledHeader>Zeit - Name der Laufliste</StyledHeader>
              <div>
                <AddPersonSelection
                  id={uuid()}
                  ref={register()}
                  name="runninglist"
                  onChange={setPerson}
                  placeholder="Person hinzufügen"
                ></AddPersonSelection>
              </div>
            </div>
            <SaveButton type="submit" name="submit">
              speichern
            </SaveButton>
          </StyledForm>
        </>
      )
    )
  }

  console.log('State', toogleSelectForm)
  console.log('State', toogleSelectForm)
  return renderSelectPeopleForm()
}

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
const StyledHeader = styled.h1`
  color: white;
  font-family: Raleway;
  font-size: 1.4rem;
  height: 48px;
  margin: 20px;
`
const StyledButton = styled.button`
  border: none;
  background: transparent;
`
const StyledForm = styled.section`
  position: absolute;
  top: 0;
  left: 4px;
  right: 4px;
  display: block;
  border-radius: 12px;
  font-family: Raleway;
  box-sizing: inline-block;
  height: auto;
  padding: 10px;
  opacity: 0.99;
  background: #ee7600;
  z-index: 300;
  opacity: 0.98;
`
const AddPersonSelection = styled.select`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  border: none;
  opacity: 0.94;
  font-size: 1.2rem;
  box-shadow: 0 0 10px 2px #732806;
  &:active,
  &:focus {
    border: none;
    box-shadow: 0 0 10px 2px white;
  }
`
const SaveButton = styled.button`
  height: 48px;
  border-radius: 12px;
  font-size: 1rem;
  background: white;
  border: none;
  margin: 30px 0;
  box-shadow: 0 0 10px 2px #732806;
`
