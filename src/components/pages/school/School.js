import React, { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

import {
  StyledImage,
  StyledContent,
  StyledHeader,
  StyledLink,
  Counter,
  StyledCounter,
  CounterDiv,
  StyledCounterVsk,
} from './School.styles'
import uuid from 'react-uuid'
import saveToLocal from '../utils/localStorage'
import globe from './globe.svg'
import at from './at.svg'
import fax from './fax.svg'

export default function School({
  primeSchools,
  selectedSchool,
  currentSchoolImg,
  phone,
  mail,
  setChosenSchool,
  chosenSchool,
}) {
  const selectedSchoolByChoice = findFullSchoolElement() || 'Wähle eine Schule'
  const propsVsk = useSpring({
    number: selectedSchoolByChoice.vsk,
    from: { number: 0 },
  })

  const propsCl1 = useSpring({
    number: selectedSchoolByChoice.class1,
    from: { number: 0 },
  })

  const propsCl2 = useSpring({
    number: selectedSchoolByChoice.class2,
    from: { number: 0 },
  })
  const propsCl3 = useSpring({
    number: selectedSchoolByChoice.class3,
    from: { number: 0 },
  })
  const propsCl4 = useSpring({
    number: selectedSchoolByChoice.class4,
    from: { number: 0 },
  })

  useEffect(() => {
    setChosenSchool(selectedSchoolByChoice)
    saveToLocal('chosenSchool', chosenSchool)
  }, [selectedSchoolByChoice, setChosenSchool, chosenSchool])

  return (
    <React.Fragment key={uuid}>
      <StyledHeader key={uuid()}>
        <StyledImage src={currentSchoolImg} alt="current school"></StyledImage>
        <div>{selectedSchoolByChoice.name || 'Wähle eine Schule'}</div>
      </StyledHeader>
      <StyledCounterVsk key={uuid()}>
        <CounterDiv>
          <span>Vorschulklasse</span>
          <Counter>
            <animated.span>
              {propsVsk.number.interpolate(num => Math.floor(num))}
            </animated.span>
          </Counter>
        </CounterDiv>
      </StyledCounterVsk>
      <StyledCounter key={uuid()}>
        <CounterDiv>
          <span>Klasse 1</span>
          <Counter>
            <animated.span>
              {propsCl1.number.interpolate(num => Math.floor(num))}
            </animated.span>
          </Counter>
        </CounterDiv>
        <CounterDiv>
          <span>Klasse 2</span>
          <Counter>
            <animated.span>
              {propsCl2.number.interpolate(num => Math.floor(num))}
            </animated.span>
          </Counter>
        </CounterDiv>
        <CounterDiv>
          <span>Klasse 3</span>
          <Counter>
            <animated.span>
              {propsCl3.number.interpolate(num => Math.floor(num))}
            </animated.span>
          </Counter>
        </CounterDiv>
        <CounterDiv>
          <span>Klasse 4</span>
          <Counter>
            <animated.span>
              {propsCl4.number.interpolate(num => Math.floor(num))}
            </animated.span>
          </Counter>
        </CounterDiv>
      </StyledCounter>

      <StyledContent key={uuid()}>
        <StyledImage src={mail} alt="mail"></StyledImage>
        <div>{selectedSchoolByChoice.address}</div>
      </StyledContent>
      <StyledContent key={uuid()}>
        <StyledImage src={phone} alt="phone"></StyledImage>
        <div>{selectedSchoolByChoice.phone}</div>
      </StyledContent>
      <StyledContent key={uuid()}>
        <StyledImage src={fax} alt="fax"></StyledImage>
        <div>{selectedSchoolByChoice.fax}</div>
      </StyledContent>
      <StyledContent key={uuid()}>
        <StyledImage src={at} alt="mail to"></StyledImage>
        <StyledLink href={`mailto:${selectedSchoolByChoice.email}`}>
          {selectedSchoolByChoice.email}
        </StyledLink>
      </StyledContent>
      <StyledContent key={uuid()}>
        <StyledImage src={globe} alt="website link"></StyledImage>
        <StyledLink href={selectedSchoolByChoice.website} target="_blank">
          {selectedSchoolByChoice.website}
        </StyledLink>
      </StyledContent>
    </React.Fragment>
  )

  function findFullSchoolElement() {
    const selectedSchoolNameAndAddress = selectedSchool.split(',')
    const selectedSchoolName = selectedSchoolNameAndAddress[0]
    const selectedSchoolByChoiceInArray = primeSchools.filter(
      school => school.name === selectedSchoolName
    )
    const selectedSchoolByChoice = selectedSchoolByChoiceInArray[0]
    return selectedSchoolByChoice
  }
}
