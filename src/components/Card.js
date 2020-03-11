import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import Meetpoint from './Meetpoint'
import meetpointFlag from '../img/solid-sm/meetpoints-flag.svg'
// import Runninglist from './Runninglist'
import { Route, Switch } from 'react-router-dom'

Card.propTypes = {
  selectedSchoolName: PropTypes.string,
  selectedSchoolAddress: PropTypes.string,
  selectedSchoolMeetpoint: PropTypes.string,
  currentSchool: PropTypes.string,
}

export default function Card({
  cardSchoolObject,
  currentSchoolImg,
  meetpoint,
  setMeetpoint,
}) {
  const [card] = useState(cardSchoolObject)
  return (
    <>
      <Switch>
        <Route>
          <InfoCards>
            <SchoolCard>
              <CardHeader>
                <img src={currentSchoolImg} alt="current school"></img>
                <span>{card.name}</span>
              </CardHeader>
              <div>
                <img src={meetpointFlag} alt="current meetpoint"></img>
                <span key={meetpoint.meetpoint}>{meetpoint.meetpoint}</span>
              </div>
            </SchoolCard>

            <Meetpoint
              cardSchoolObject={cardSchoolObject}
              setMeetpoint={setMeetpoint}
              meetpoint={meetpoint}
            />
          </InfoCards>
        </Route>
      </Switch>
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
  align-items: left;
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
  opacity: 0.95;
  box-shadow: 0 0 10px 2px #a4b0af;
`
