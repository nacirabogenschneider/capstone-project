import React, { useState, useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import uuid from 'react-uuid'
import styled from 'styled-components'

export default function RunninglistDetails({
  runninglists,
  staticProfilData,
  isClicked,
  setIsClicked,
  plus,
}) {
  const [person, setPerson] = useState([])
  const [addedPerson, setAddedPerson] = useState([])
  const [toogleSelectForm, setToggleSelectForm] = useState(false)
  const { register, handleSubmit, reset } = useForm()

  function onSubmit(event) {
    event.preventDefault()
    reset()
  }

  useEffect(() => {
    isClicked && isClicked !== null && setToggleSelectForm(isClicked)
  }, [isClicked])

  // function renderProfilePeople() {
  //   staticProfilData.map(person => (
  //     <>
  //       <img scr={person.state === 'adult' ? 'adult' : 'child'}></img>
  //       <div>{person.runningPersonName}</div>
  //       <div>{person.class}</div>
  //     </>
  //   ))
  // }

  function handleAddClick(event) {
    event.stopPropagation()
    let index = staticProfilData.findIndex(
      item => item.name === event.target.id
    )
    let deleted = staticProfilData.splice(index, 1)
    console.log('INDEXtoDELET', deleted)
    setPerson(deleted)
  }

  function peopleSelectorRadioButton() {
    return staticProfilData.map(person => (
      <StyledTextWrapper key={uuid()}>
        <RadioButtonWrapper
          onClick={handleAddClick}
          value={person.name}
          name={person.name}
          id={person.name}
        >
          {person.name}
        </RadioButtonWrapper>
        <CreateButton type="submit">
          <img src={plus} alt="create button"></img>
        </CreateButton>
      </StyledTextWrapper>
    ))
  }

  function renderNewPersonOnList() {
    return person.map(person => (
      <StyledPersonEntry key={person.name}>{person.name}</StyledPersonEntry>
    ))
  }
  // useEffect(() => {
  //   setAddedPerson(...addedPerson, person)
  // }, [person])

  function toogle() {
    setToggleSelectForm(!toogleSelectForm)
    setIsClicked(false)
  }

  function renderSelectPeopleForm() {
    return (
      toogleSelectForm && (
        <>
          <Exit onClick={toogle}>x</Exit>
          <StyledForm onSubmit={handleSubmit(onSubmit)} id={uuid()}>
            <div>
              <div>Zeit - Name Der Liste</div>
              {person.length === 0 && (
                <StyledPersonEntry>
                  Deine Liste ist noch leer...
                </StyledPersonEntry>
              )}
              {addedPerson && renderNewPersonOnList()}
              <div>Wähle Personen aus Deinem Profil</div>
              {peopleSelectorRadioButton()}
            </div>
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
  font-family: Raleway;
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
