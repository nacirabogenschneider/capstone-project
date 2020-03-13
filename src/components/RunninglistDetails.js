import React, { useState } from 'react'
import uuid from 'react-uuid'
import styled from 'styled-components'

{
  /* <RunninlistDetails adult={adult} child={schild} /> */
}

export default function RunninglistDetails({
  runninglists,
  staticProfilData,
  plus,
}) {
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
    return
    /* <p onClick={handleExitClick}>x</p> position relativ top: right:0 */
  }

  function handleAddButtonCklick() {
    console.log('PERSON HINZUFÜGEN')
  }
  function handleSaveButtonCkick() {
    console.log('AllE DATEN AB INS ARRAY')
  }
  return (
    <StyledForm id={uuid()}>
      <div>
        <h1>Zeit - Name der Laufliste</h1>
        <div>
          <p>Person der Laufliste hinzufügen</p>
          <button onClick={handleAddButtonCklick}>
            <img src={plus}></img>
          </button>
        </div>
        <div>Personen zur Laufliste hinzufügen +</div>
        <button onClick={handleSaveButtonCkick}>speichern</button>
      </div>
    </StyledForm>
  )
}

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
  opacity: 0.94;
  background: #ee7600;
  z-index: 300;
`
