import React from 'react'
import {
  StyledTextWrapper,
  StyledRow,
  CreateButton,
  StyledTime,
  RunningListName,
} from './Runninglist.styles'

export default function CreateRunninglist({
  runningLists,
  circle,
  setClickedListID,
  setIsClicked,
  displayedMeetpoint,
}) {
  function handleListClick(event) {
    setClickedListID(event.target.id)
    setIsClicked(true)
  }
  return runningLists
    .filter(list => list.meetpoint === displayedMeetpoint)
    .map(list => (
      <label key={list.key} htmlFor={list.id}>
        <StyledRow>
          <StyledTime>{list.time}</StyledTime>
          <StyledTextWrapper>
            <RunningListName>
              <div
                key={list.key}
                id={list.id}
                onClick={handleListClick}
                value={list.listname}
              >
                {list.listname}
              </div>
            </RunningListName>
            <CreateButton type="submit">
              <img src={circle} alt="add button"></img>
            </CreateButton>
          </StyledTextWrapper>
        </StyledRow>
      </label>
    ))
}
