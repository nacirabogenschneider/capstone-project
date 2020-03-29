import React from 'react'
import styled from 'styled-components/macro'
import { useForm } from 'react-hook-form'

export default function ProfileAddPeople({
  setEditPeople,
  editPeople,
  woman,
  man,
  child,
  setProfilePeople,
  profilePeople,
  loginData,
}) {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    setProfilePeople([
      ...profilePeople,
      {
        firstName: data.firstName,
        lastName: data.lastName,
        class: data.class,
        state: data.state,
      },
    ])
    setEditPeople('none')
  }

  return (
    <AddPerson style={{ display: editPeople }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledRow>
          <StyledNameInput
            name="firstName"
            type="text"
            placeholder="Vorname"
            ref={register({ required: true })}
          ></StyledNameInput>
          {errors.firstName && (
            <Warning>Bitte geben Sie einen Vornamen ein.</Warning>
          )}
        </StyledRow>
        <StyledRow>
          <StyledNameInput
            name="lastName"
            type="text"
            placeholder="Nachname"
            ref={register}
          ></StyledNameInput>
        </StyledRow>
        <StyledRow>
          <StyledClassInput
            name="class"
            type="text"
            placeholder="Klasse"
            ref={register}
          ></StyledClassInput>
        </StyledRow>
        <StyledRowCenter>
          <input
            type="radio"
            id="woman"
            name="state"
            value="woman"
            ref={register}
          ></input>
          <label htmlFor="woman">
            <StyledImg src={woman}></StyledImg>
          </label>
          <input
            type="radio"
            id="man"
            name="state"
            value="man"
            ref={register}
          ></input>
          <label htmlFor="man">
            <StyledImg src={man}></StyledImg>
          </label>
          <input
            type="radio"
            id="child"
            name="state"
            value="child"
            ref={register}
          ></input>
          <label htmlFor="child">
            <StyledImgChild src={child}></StyledImgChild>
          </label>
        </StyledRowCenter>
        <StyledRowRight>
          <StyledButton type="submit">speichern</StyledButton>
        </StyledRowRight>
      </form>
    </AddPerson>
  )
}

const AddPerson = styled.section`
  margin: 12px 0 30px 0;
  padding: 8px;
  border: 2px solid lightgrey;
  border-radius: 12px;
`
const StyledImg = styled.img`
  height: 22px;
`
const StyledImgChild = styled.img`
  height: 18px;
`
const StyledNameInput = styled.input`
  height: 34px;

  padding: 4px 8px;
  margin: 4px 0;
  font-size: 0.9rem;
  border: none;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px #cfcfcf;
  &:active,
  &:focus {
    box-shadow: 0 0 10px 2px #ee7600;
  }
`
const StyledClassInput = styled.input`
  height: 34px;
  width: 60px;
  padding: 4px 8px;
  margin: 4px 0 4px 0;
  font-size: 0.9rem;
  border: none;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px #cfcfcf;
  &:active,
  &:focus {
    box-shadow: 0 0 10px 2px #ee7600;
  }
`
const StyledRow = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 10px;
`

const StyledRowCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`
const StyledRowRight = styled.div`
  display: flex;
  justify-content: flex-end;
`

const StyledButton = styled.button`
  height: 34px;
  width: 100px;
  padding: 4px 8px;
  margin: 4px 0 4px 0;
  font-size: 0.9rem;
  background: white;
  border: none;
  border-radius: 12px;
  border: 2px solid lightgray;
  box-shadow: 0 0 10px 2px #cfcfcf;
  &:active,
  &:focus {
    box-shadow: 0 0 10px 2px #ee7600;
  }
`
const Warning = styled.div`
  margin-top: 3px;
  font-size: 12px;
  color: #ee7600;
`
