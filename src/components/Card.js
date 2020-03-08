import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Meetpoint from './Meetpoint'
import App from '../App'

Cards.propTypes = {
  selectedSchoolName: PropTypes.string,
  selectedSchoolAddress: PropTypes.string,
  selectedSchoolMeetpoint: PropTypes.string,
  currentSchool: PropTypes.string,
}

export default function Cards({
  cardSchoolObject,
  currentSchoolImg,
  selectedMeetpoint,
}) {
  const [card] = useState(cardSchoolObject)
  return (
    <>
      <InfoCards>
        <SchoolCard>
          <CardHeader>
            <img src={currentSchoolImg} alt="current school"></img>
            <p>{card.name}</p>
          </CardHeader>
          <p>{card.address}</p>
        </SchoolCard>
        <Meetpoint />
      </InfoCards>
    </>
  )
}
const InfoCards = styled.section`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 100px;
  width: 100%;
`
const CardHeader = styled.section`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 20px;
`
const SchoolCard = styled.section`
  display: flex;
  width: 92vw;
  flex-direction: column;
  font-family: 'Raleway';
  border-radius: 12px;
  padding: 10px;
  margin: 5px 0;
  font-size: 1.2rem;
  background: white;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #a4b0af;
`
