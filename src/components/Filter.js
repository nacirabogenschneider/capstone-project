import React, { useEffect, useState, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { AddPointButton, Select, Option, SelectSection } from './Filter.styles'
import saveToLocal from './utils/localStorage'
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
