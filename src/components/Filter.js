import React, { useEffect, useState, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import saveToLocal from './utils/localStorage'
import loadFromLocal from './utils/localStorage'
import uuid from 'react-uuid'

export default function Filter({
  setSelectedState,
  schoolStates,
  primarySchools,
  setCardSchoolObject,
}) {
  const [stateOfChoice, setStateOfChoice] = useState(
    () =>
      JSON.parse(localStorage.getItem('stateOfChoice')) ||
      'Wähle dein Bundesland'
  )

  const [schoolOfChoice, setSchoolOfChoice] = useState(
    () =>
      JSON.parse(localStorage.getItem('schoolOfChoice')) || 'Wähle deine Schule'
  )

  const [schoolOfChoiceName, setSchoolOfChoiceName] = useState('')
  const [schoolOfChoiceAddress, setSchoolOfChoiceAddress] = useState('')
  const [schoolOfChoiceCoordinates] = useState([])
  const filterSchoolsByPrimaryState = useCallback(() => {
    return primarySchools
      .filter(school => school.state === stateOfChoice)
      .map(school => school.name + ', ' + school.address)
      .sort()
      .map(sortedSchool => <Option key={sortedSchool}>{sortedSchool}</Option>)
  }, [stateOfChoice, primarySchools])

  saveToLocal('stateOfChoice', stateOfChoice)
  saveToLocal('schoolOfChoice', schoolOfChoice)

  useEffect(() => {
    setSelectedState(stateOfChoice)
    filterSchoolsByPrimaryState()
  }, [stateOfChoice, filterSchoolsByPrimaryState, setSelectedState])

  useEffect(() => {
    const schoolAddressOfSelectedSchool = schoolOfChoice.split(',')
    const selectedSchoolAddress =
      schoolAddressOfSelectedSchool[schoolAddressOfSelectedSchool.length - 2] +
      ',' +
      schoolAddressOfSelectedSchool[schoolAddressOfSelectedSchool.length - 1]

    setSchoolOfChoiceAddress(selectedSchoolAddress)

    const selectedSchoolName = schoolAddressOfSelectedSchool[0]
    setSchoolOfChoiceName(selectedSchoolName)
  }, [schoolOfChoice, primarySchools])

  useEffect(() => {
    setCardSchoolObject({
      name: schoolOfChoiceName,
      address: schoolOfChoiceAddress,
      lat: schoolOfChoiceCoordinates.lat,
      lng: schoolOfChoiceCoordinates.lng,
    })
  }, [
    schoolOfChoiceName,
    schoolOfChoiceAddress,
    schoolOfChoiceCoordinates,
    setCardSchoolObject,
  ])

  function setStateSelector() {
    return schoolStates.map(state => (
      <option key={state.name} value={schoolOfChoice.name}>
        {state.name}
      </option>
    ))
  }

  function handleStateChange(event) {
    setStateOfChoice(event.target.value)
  }

  function handleSchoolChange(event) {
    setSchoolOfChoice(event.target.value)
  }

  return (
    <>
      <SelectSection key="Filter">
        <Select
          key="State-Filter"
          value={stateOfChoice}
          onChange={handleStateChange}
        >
          <option key={uuid()}>Wähle dein Bundesland</option>
          {setStateSelector()}
        </Select>

        <Select
          key="School-Filter"
          value={schoolOfChoice}
          onChange={handleSchoolChange}
        >
          <option key={uuid()}>Wähle deine Schule</option>
          {stateOfChoice &&
            stateOfChoice !== 'Wähle dein Bundesland' &&
            filterSchoolsByPrimaryState()}
        </Select>
        <NavLink to="/meetpoint">
          <AddPointButton aria-label="check">auswählen</AddPointButton>
        </NavLink>
      </SelectSection>
    </>
  )
}

const SelectSection = styled.main`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 110px;
  width: 100%;
`
const Option = styled.option`
  font-family: 'Raleway', 'sant serif';
  font-size: 20px;
`
const Select = styled.select`
  font-family: 'Raleway';
  height: 48px;
  width: 94vw;
  border-radius: 12px;
  border: none;
  margin: 5px 0;
  padding-left: 8px;
  font-size: 1.1rem;
  background: white;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #2b7380;
  &:focus {
    box-shadow: 0 0 10px 2px #ee7600;
  }
`
const AddPointButton = styled.button`
  font-family: 'Raleway';
  display: flex;
  left: 45vw;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: auto;
  border: none;
  margin: 4px;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px #2b7380;
  background: white;
  &:focus {
    box-shadow: 0 0 10px 2px #ee7600;
  }
`

////////////
// .selectdiv:after {
//   content: '\f078';
//   font: normal normal normal 17px/1 FontAwesome;
//   color: #0ebeff;
//   right: 11px;
//   top: 6px;
//   height: 34px;
//   padding: 15px 0px 0px 8px;
//   border-left: 1px solid #0ebeff;
//   position: absolute;
//   pointer-events: none;
// }

// /* IE11 hide native button (thanks Matt!) */
// select::-ms-expand {
// display: none;
// }

// .selectdiv select {
// -webkit-appearance: none;
// -moz-appearance: none;
// appearance: none;
// /* Add some styling */

// display: block;
// width: 100%;
// max-width: 320px;
// height: 50px;
// float: right;
// margin: 5px 0px;
// padding: 0px 24px;
// font-size: 16px;
// line-height: 1.75;
// color: #333;
// background-color: #ffffff;
// background-image: none;
// border: 1px solid #0ebeff;
// -ms-word-break: normal;
// word-break: normal;
// }
