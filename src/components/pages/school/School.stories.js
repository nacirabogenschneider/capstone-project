import React from 'react'
import School from './School'
import loadFromLocal from '../utils/localStorage'

export default {
  title: 'School/SchoolCard',
  component: School,
}

const primeSchools = loadFromLocal('primeSchools')

const styling = {
  position: 'absolute',
  background: 'white',
  opacity: 0.94,
  top: 115,
  minHeight: 240,
  left: 10,
  right: 10,
  borderRadius: 12,
  boxShadow: '0 0 10px 2px #2b7380',
}

export const schoolInfosCard = () => (
  <School
    styling={styling}
    // currentSchoolImg={currentSchoolImg}
    // phone={phone}
    // mail={mail}
    primeSchools={primeSchools}
  />
)
