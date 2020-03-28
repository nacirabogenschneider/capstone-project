import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function ProfileAddPeople({ editPeople, woman, man, child }) {
  return (
    <AddPerson style={{ display: editPeople }}>
      <form>
        <input
          type="text"
          required={true}
          placeholder="Trage einen Namen ein"
        ></input>
        <input
          type="radio"
          id="woman"
          name="state"
          value="woman"
          checked
        ></input>
        <label htmlFor="woman">
          <StyledImg src={woman}></StyledImg>
        </label>

        <input type="radio" id="man" name="state" value="man" checked></input>
        <label htmlFor="man">
          <StyledImg src={man}></StyledImg>
        </label>

        <input
          type="radio"
          id="child"
          name="state"
          value="child"
          checked
        ></input>
        <label htmlFor="child">
          <StyledImgChild src={child}></StyledImgChild>
        </label>

        <input type="text" placeholder="Trage die Klasse ein"></input>
      </form>
    </AddPerson>
  )
}

const AddPerson = styled.section`
  margin: 12px;
`
const StyledImg = styled.img`
  height: 22px;
`
const StyledImgChild = styled.img`
  height: 18px;
`
