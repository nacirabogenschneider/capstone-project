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
  createdMeetpoints,
  setCreatedMeetpoints,
  selectedMeetpoints,
  setSelectedMeetpoints,
  selectedSingleMeetpoint,
  setSelectedSingleMeetpoint,
  setDisplayedMeetpoint,
  displayedMeetpoint,
}) {
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
                <StyledSpan key={uuid()}>{displayedMeetpoint}</StyledSpan>
              </MeetHeader>
            </SchoolCard>
            <Meetpoint
              displayedMeetpoint={displayedMeetpoint}
              setDisplayedMeetpoint={setDisplayedMeetpoint}
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
