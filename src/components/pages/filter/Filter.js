import React, { useState, useEffect, useCallback } from 'react'
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
  const [disable, setDisable] = useState('#')
  const [styling, setStyling] = useState({ color: 'lightgrey' })
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

  function setStateSelector() {
    return schoolStates.map(state => (
      <option key={state.name} value={state.name}>
        {state.name}
      </option>
    ))
  }
  useEffect(() => {
    disable === '/school' && setStyling({ color: 'black' })
  }, [disable])
  const handleSchoolChange = async event => {
    const school = await event.target.value
    if (selectedSchool !== 'Wähle deine Schule') {
      setDisable('/school')
    }
    setSelectedSchool(school)
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
      <NavLink to={disable}>
        <FilterButton value={'auswählen'} styling={styling} label="check" />
      </NavLink>
    </SelectSection>
  )
}
