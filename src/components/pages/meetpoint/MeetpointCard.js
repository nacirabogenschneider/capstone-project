import React, { useState } from 'react'
import PropTypes from 'prop-types'
import uuid from 'react-uuid'

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
  chosenSchool,
}) {
  const [createdMeetpoints, setCreatedMeetpoints] = useState(
    () => JSON.parse(localStorage.getItem('createdMeetpoints')) || []
  )

  const [selectedMeetpoints, setSelectedMeetpoints] = useState(
    () => JSON.parse(localStorage.getItem('selectedMeetpoints')) || []
  )

  const [selectedSingleMeetpoint, setSelectedSingleMeetpoint] = useState(
    () => JSON.parse(localStorage.getItem('selectedSingleMeetpoin')) || ''
  )

  console.log('MEETPOINTCARD-', createdMeetpoints)
  console.log('SELECTED-SINGLE-MEETPOINT-', selectedSingleMeetpoint)

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

                <StyledSpan> {chosenSchool.name}</StyledSpan>
              </CardHeader>
              <MeetHeader>
                <StyledSvg
                  src={meetpointFlag}
                  alt="current meetpoint"
                ></StyledSvg>
                <StyledSpan key={uuid()}>
                  {(createdMeetpoints.length > 0 &&
                    createdMeetpoints[createdMeetpoints.length - 1]
                      .meetpoint) ||
                    (selectedSingleMeetpoint !== 'DEFAULT' &&
                      selectedSingleMeetpoint)}
                </StyledSpan>
              </MeetHeader>
            </SchoolCard>
            <Meetpoint
              setCreatedMeetpoints={setCreatedMeetpoints}
              setSelectedMeetpoints={setSelectedMeetpoints}
              setSelectedSingleMeetpoint={setSelectedSingleMeetpoint}
              createdMeetpoints={createdMeetpoints}
              selectedMeetpoints={selectedMeetpoints}
              selectedSingleMeetpoint={selectedSingleMeetpoint}
            />
          </InfoCards>
        </Route>
      </Switch>
    </>
  )
}
