import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import Meetpoint from './Meetpoint'
import meetpointFlag from '../img/svg/_flag.svg'
import currentSchoolImg from '../img/svg/_school.svg'
import { Route, Switch } from 'react-router-dom'

Card.propTypes = {
  selectedSchoolName: PropTypes.string,
  selectedSchoolAddress: PropTypes.string,
  selectedSchoolMeetpoint: PropTypes.string,
  currentSchool: PropTypes.string,
}

export default function Card({ cardSchoolObject, meetpoint, setMeetpoint }) {
  const [card] = useState(cardSchoolObject)
  return (
    <>
      <Switch>
        <Route>
          <InfoCards>
            <SchoolCard>
              <CardHeader>
                <StyledSvg
                  src={currentSchoolImg}
                  alt="current school"
                ></StyledSvg>
                <StyledSpan>{card.name}</StyledSpan>
              </CardHeader>
              <MeetHeader>
                <StyledSvg
                  src={meetpointFlag}
                  alt="current meetpoint"
                ></StyledSvg>
                <StyledSpan key={meetpoint.meetpoint}>
                  {meetpoint.meetpoint}
                </StyledSpan>
              </MeetHeader>
            </SchoolCard>
            <Meetpoint setMeetpoint={setMeetpoint} meetpoint={meetpoint} />
          </InfoCards>
        </Route>
      </Switch>
    </>
  )
}

const StyledSpan = styled.span`
  margin-left: 8px;
`
const StyledSvg = styled.img`
  width: 34px;
  height: 34px;
`
const InfoCards = styled.section`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 110px;
  width: 100%;
`
const CardHeader = styled.section`
  display: flex;
  padding: 5px;
  justify-content: left;
  align-items: center;
  font-size: 20px;
`
const MeetHeader = styled.section`
  display: flex;
  padding: 5px;
  justify-content: left;
  align-items: center;
  font-size: 20px;
`
const SchoolCard = styled.section`
  display: flex;
  width: 90vw;
  flex-direction: column;
  font-family: 'Raleway';
  border-radius: 12px;
  padding: 10px;
  margin: 5px 0;
  font-size: 1.2rem;
  background: white;
  opacity: 0.95;
  box-shadow: 0 0 10px 2px #2b7380;
`
