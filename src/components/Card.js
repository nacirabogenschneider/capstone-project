import React from 'react'
import styled from 'styled-components'
import 


export default function Card({ currentSchool, schoolName, schoolAdress }) {
  return (
    <SchoolCard>
      <CardHeader>
        <img src={currentSchool} alt="current" />
        <p>{schoolName}</p>
      </CardHeader>
      <p>{schoolAdress}</p>
    </SchoolCard>
  )
}

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
  font-family: 'Arial';
  border-radius: 12px;
  padding: 10px;
  margin: 5px 0;
  font-size: 1.1rem;
  background: white;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #a4b0af;
`
