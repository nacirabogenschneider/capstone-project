import React, { useState } from 'react'
import uuid from 'react-uuid'
import styled from 'styled-components'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

{
  /* <RunninlistDetails adult={adult} child={schild} /> */
}

export default function RunninglistDetails({
  runninglists,
  staticProfilData,
  plus,
}) {
  const [person, setPerson] = useState([])
  console.log('AUSWAHL', setPerson)
  function renderProfilePeople() {
    staticProfilData.map(person => (
      <>
        <img scr={person.state === 'adult' ? 'adult' : 'child'}></img>
        <div>{person.runningPersonName}</div>
        <div>{person.class}</div>
      </>
    ))
  }

  const options = [
    { value: 'Nacira Bogenschneider', label: 'Nacira Bogenschneider' },
    { value: 'Vincent', label: 'Vincent' },
    { value: 'Marlene', label: 'Marlene' },
    { value: 'Bruno', label: 'Bruno' },
  ]

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
  return (
    <>
      <Exit>x</Exit>
      <StyledForm id={uuid()}>
        <div>
          <StyledHeader>Zeit - Name der Laufliste</StyledHeader>
          <div>
            <Select
              onChange={setPerson}
              options={options}
              placeholder="Person hinzufügen"
              isSearchable
              isMulti
              autoFocus
            ></Select>
            {/* <AddPersonSelection>
              <option>Person der Laufliste hinzufügen</option>
            </AddPersonSelection> */}
            {/* <StyledButton onClick={handleAddButtonCklick}>
              <img src={plus}></img>
            </StyledButton> */}
          </div>
        </div>
        <SaveButton onClick={handleSaveButtonCkick}>speichern</SaveButton>
      </StyledForm>
    </>
  )
}

const Exit = styled.button`
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Raleway;
  width: 100%;
  height: auto;
  padding: 10px;
  opacity: 0.99;
  background: #ee7600;
  z-index: 300;
  opacity: 0.98;
`
const AddPersonSelection = styled(Select)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  height: 48px;
  border-radius: 12px;
  border: none;
  padding-left: 10px;
  margin-left: -20px;
  opacity: 0.94;
  font-size: 1.2rem;
  box-shadow: 0 0 10px 2px #732806;
  &:active,
  &:focus {
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
