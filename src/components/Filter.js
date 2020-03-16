import React, { useEffect, useState, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function Filter({
  setSelectedState,
  schoolStates,
  selectedPrimarySchool,
  primarySchools,
  setCardSchoolObject,
}) {
  const [isSelectedState, setIsSelectedState] = useState()
  const [isSelectedPrimarySchool, setIsSelectedPrimarySchool] = useState(
    'Wähle deine Schule'
  )
  const [
    isSelectedPrimarySchoolName,
    setIsSelectedPrimarySchoolName,
  ] = useState('')
  const [
    isSelectedPrimarySchoolAddress,
    setIsSelectedPrimarySchoolAddress,
  ] = useState('')

  const [isSelectedSchoolCoordinates] = useState([])

  const filterSchoolsByPrimaryState = useCallback(() => {
    return primarySchools
      .filter(school => school.state === isSelectedState)
      .map(school => school.name + ', ' + school.address)
      .sort()
      .map(sortedSchool => <Option key={sortedSchool}>{sortedSchool}</Option>)
  }, [isSelectedState, primarySchools])

  useEffect(() => {
    setSelectedState(isSelectedState)
    filterSchoolsByPrimaryState()
  }, [isSelectedState, filterSchoolsByPrimaryState, setSelectedState])

  useEffect(() => {
    const schoolAddress = isSelectedPrimarySchool.split(',')
    const selectedSchoolAddress =
      schoolAddress[schoolAddress.length - 2] +
      ',' +
      schoolAddress[schoolAddress.length - 1]
    setIsSelectedPrimarySchoolAddress(selectedSchoolAddress)

    const schoolValues = isSelectedPrimarySchool.split(',')
    const selectedValueName = schoolValues[0]
    setIsSelectedPrimarySchoolName(selectedValueName)
  }, [isSelectedPrimarySchool, primarySchools])

  useEffect(() => {
    setCardSchoolObject({
      name: isSelectedPrimarySchoolName,
      address: isSelectedPrimarySchoolAddress,
      lat: isSelectedSchoolCoordinates.lat,
      lng: isSelectedSchoolCoordinates.lng,
    })
  }, [
    isSelectedPrimarySchoolName,
    isSelectedPrimarySchoolAddress,
    isSelectedSchoolCoordinates,
    setCardSchoolObject,
  ])

  function setStateSelector() {
    return schoolStates.map(state => (
      <option key={state.name}>{state.name}</option>
    ))
  }

  function handleStateChange(event) {
    setIsSelectedState(event.target.value)
  }
  function handleSchoolChange(event) {
    setIsSelectedPrimarySchool(event.target.value)
  }
  return (
    <>
      <SelectSection key="Filter">
        <Select key="State-Filter" onChange={handleStateChange}>
          <Option key={isSelectedState}>Wähle dein Bundesland</Option>
          {setStateSelector()}
        </Select>

        <Select key="School-Filter" onChange={handleSchoolChange}>
          <Option key={selectedPrimarySchool}>Wähle deine Schule</Option>
          {isSelectedState &&
            isSelectedState !== 'Wähle dein Bundesland' &&
            filterSchoolsByPrimaryState()}
        </Select>
        <NavLink to="/card">
          <AddPointButton aria-label="check">auswählen</AddPointButton>
        </NavLink>
      </SelectSection>
    </>
  )
}

const ContentWrapper = styled.main`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 54px;
  width: 100%;
`
const SelectSection = styled(ContentWrapper)`
  position: absolute;
  display: flex;
  bottom: 54px;
  width: 100%;
`
const Option = styled.option`
  font-size: 20px;
`
const Select = styled.select`
  font-family: 'Arial';
  height: 48px;
  width: 92vw;
  border-radius: 12px;
  border: none;
  margin: 5px 0;
  font-size: 1.1rem;
  background: white;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #a4b0af;
  &:focus {
    box-shadow: 0 0 10px 2px #ee7600;
  }
`
const AddPointButton = styled.button`
  display: flex;
  left: 45vw;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  height: 45px;
  width: auto;
  border: none;
  margin: 4px;
  font-size: 1.1rem;
  text-decoration: none;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px #a4b0af;
  background: white;
  &:focus {
    box-shadow: 0 0 10px 2px #ee7600;
  }
`
