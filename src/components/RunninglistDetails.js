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
  isClicked,
  setIsClicked,
}) {
  const [person, setPerson] = useState([])
  const [addedPerson, setAddedPerson] = useState([])
  const [toogleSelectForm, setToggleSelectForm] = useState(false)
  const { register, handleSubmit, reset } = useForm()
  function onSubmit(event) {
    console.log('CLICKED SUBMIT')
    event.preventDefault()
    console.log(event.taget.value)
    setAddedPerson(event.taget.value)

    reset()
  }
  console.log('ADDEDPERSON', addedPerson)
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
  function addSelectedPerson() {
    const selectedPeopel = staticProfilData.filter(
      person => person.name === addedPerson
    )
  }
  function peopleSelectorRadioButton() {
    return staticProfilData.map(person => (
      <RadioButtonWrapper key={uuid()}>
        <StyledRadioInput>
          <input type="radio" value={person.name} />
          {person.name}
        </StyledRadioInput>
      </RadioButtonWrapper>
    ))
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
              <div>Zeit - Name Der Liste</div>
              <StyledPersonEntry>
                Deine Liste ist noch leer...
              </StyledPersonEntry>
              <div>Wähle Personen aus Deinem Profil</div>
              {/* <div>{renderProfilePeople()}</div> */}

              {peopleSelectorRadioButton()}
            </div>
            <SaveButton type="submit" name="submit" onSubmitw={onSubmit}>
              speichern
            </SaveButton>
          </StyledForm>
        </>
      )
    )
  }
  return renderSelectPeopleForm()
}

const StyledPersonEntry = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 14px;
  margin: 8px 4px;
  background: transparent;
  border: 1px solid white;
  border-radius: 12px;
`
const RadioButtonWrapper = styled.div`
  padding: 14px;
  margin: 8px 4px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px #732806;
`
const StyledRadioInput = styled.label`
  font-size: 18px;
  color: black;
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
    box-shadow: 0 0 10px 2px #732806;
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
