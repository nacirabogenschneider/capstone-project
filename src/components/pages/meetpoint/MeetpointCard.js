import PropTypes from 'prop-types'
import React, { useState } from 'react'
import {
  SchoolCard,
  MeetHeader,
  CardHeader,
  InfoCards,
  StyledSvg,
  StyledSpan,
} from './MeetpointCard.styles'
import Meetpoint from './Meetpoint'

import { Route, Switch } from 'react-router-dom'

MeetpointCard.propTypes = {
  selectedSchoolName: PropTypes.string,
  selectedSchoolAddress: PropTypes.string,
  selectedSchoolMeetpoint: PropTypes.string,
  currentSchool: PropTypes.string,
}

export default function MeetpointCard({
  meetpointFlag,
  currentSchoolImg,
  cardSchoolObject,
  meetpoint,
  setMeetpoint,
}) {
  const [card] = useState(cardSchoolObject)
  const [selectedMeetpoint, setSelectedMeetpoint] = useState(
    () => JSON.parse(localStorage.getItem('selectedMeetpoint')) || ''
  )

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
                  {meetpoint.meetpoint || selectedMeetpoint}
                </StyledSpan>
              </MeetHeader>
            </SchoolCard>
            <Meetpoint
              selectedMeetpoint={selectedMeetpoint}
              setSelectedMeetpoint={setSelectedMeetpoint}
              setMeetpoint={setMeetpoint}
              meetpoint={meetpoint}
            />
          </InfoCards>
        </Route>
      </Switch>
    </>
  )
}
