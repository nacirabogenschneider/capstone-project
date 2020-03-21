import React, { useEffect, useState, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { Option, SelectSection } from './Filter.styles'
import saveToLocal from '../utils/localStorage'
import FilterButton from './FilterButton'
import FilterSelect from './FilterSelect'

export default function Filter({
  setSelectedSchool,
  selectedSchool,
  chosenSchool,
  setSelectedState,
  schoolStates,
  primarySchools,
  stateOfChoice,
  setStateOfChoice,
}) {
  const filterSchoolsByPrimaryState = useCallback(() => {
    return primarySchools
      .filter(school => school.state === stateOfChoice)
      .map(school => school.name + ', ' + school.address)
      .sort()
      .map(sortedSchool => <Option key={sortedSchool}>{sortedSchool}</Option>)
  }, [stateOfChoice, primarySchools])

  useEffect(() => {
    saveToLocal('stateOfChoice', stateOfChoice)
    filterSchoolsByPrimaryState()
  }, [stateOfChoice, filterSchoolsByPrimaryState, setSelectedState])

  // useEffect(() => {
  //   saveToLocal('selectedSchool', selectedSchool)
  // }, [selectedSchool])

  function setStateSelector() {
    return schoolStates.map(state => (
      <option key={state.name} value={state.name}>
        {state.name}
      </option>
    ))
  }
  function handleSchoolChange(event) {
    setSelectedSchool(event.target.value)
    console.log(event.target.value)
    saveToLocal('selectedSchool', event.target.value)
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
      <NavLink to="/school">
        <FilterButton label="check" />
      </NavLink>
    </SelectSection>
  )
}
