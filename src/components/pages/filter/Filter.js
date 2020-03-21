import React, { useEffect, useState, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { Option, SelectSection } from './Filter.styles'
import saveToLocal from '../utils/localStorage'
import FilterButton from './FilterButton'
import FilterSelect from './FilterSelect'

export default function Filter({
  setSelectedSchool,
  selectedSchool,
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

  useEffect(() => {
    setSelectedState(stateOfChoice)
    saveToLocal('stateOfChoice', stateOfChoice)
    filterSchoolsByPrimaryState()
  }, [stateOfChoice, filterSchoolsByPrimaryState, setSelectedState])

  useEffect(() => {
    const schoolAddressOfSelectedSchool = selectedSchool.split(',')
    const selectedSchoolAddress =
      schoolAddressOfSelectedSchool[schoolAddressOfSelectedSchool.length - 2] +
      ',' +
      schoolAddressOfSelectedSchool[schoolAddressOfSelectedSchool.length - 1]

    setSchoolOfChoiceAddress(selectedSchoolAddress)

    const selectedSchoolName = schoolAddressOfSelectedSchool[0]
    setSchoolOfChoiceName(selectedSchoolName)
    saveToLocal('selectedSchool', selectedSchool)
  }, [selectedSchool, primarySchools])

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
      <option key={state.name} value={selectedSchool.name}>
        {state.name}
      </option>
    ))
  }
  function handleSchoolChange(event) {
    setSelectedSchool(event.target.value)
  }
  function handleStateChange(event) {
    setStateOfChoice(event.target.value)
  }

  return (
    <SelectSection key="Filter">
      <FilterSelect
        value={stateOfChoice}
        onChange={handleStateChange}
        initialText="Wähle dein Bundesland"
        options={setStateSelector()}
      />
      <FilterSelect
        value={selectedSchool}
        onChange={handleSchoolChange}
        initialText="Wähle deine Schule"
        options={filterSchoolsByPrimaryState()}
      />
      <NavLink to="/meetpoint">
        <FilterButton label="check" />
      </NavLink>
    </SelectSection>
  )
}
