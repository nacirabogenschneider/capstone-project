import React from 'react'
import School from '../School'
import phone from './_phone.svg'
import mail from './_mail.svg'
import currentSchoolImg from './_school.svg'
import styled from '@emotion/styled'

export default {
  title: 'School/SchoolCard',
  component: School,
}
const selectedSchool =
  'Katholische Schule Hammer Kirche, Bei der Hammer Kirche 10, 20535 Hamburg'

const primeSchools = [
  {
    address: 'Bei der Hammer Kirche 10, 20535 Hamburg',
    fax: '+49 40 87 88 902-29',
    full_time_school: false,
    id: 'HH-3201',
    lat: 53.556728,
    lon: 10.054931,
    name: 'Katholische Schule Hammer Kirche',
    official_id: '3201',
    phone: '+49 40 87 88 902-10',
    school_type: 'Grundschule',
    school_type_entity: 'Grundschule',
    state: 'Hamburg',
  },
  {
    address: 'Öjendorfer Weg 14, 22111 Hamburg',
    fax: '+49 40 87 88 904-29',
    full_time_school: true,
    id: 'HH-3203',
    lat: 53.540571,
    lon: 10.107749,
    name: 'Katholische Schule St. Paulus',
    official_id: '3203',
    phone: '+49 40 87 88 904-10',
    school_type: 'Stadtteilschule',
    school_type_entity: 'Stadtteilschule',
    state: 'Hamburg',
  },
]
const StyledSchoolCard = styled(School)`
  position: absolute;
  background: white;
  opacity: 0.94;
  top: 115px;
  min-height: 240px;
  left: 10px;
  right: 10px;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px #2b7380;
`

export const schoolInfosCard = () => (
  <StyledSchoolCard
    currentSchoolImg={currentSchoolImg}
    phone={phone}
    mail={mail}
    selectedSchool={selectedSchool}
    primeSchools={primeSchools}
  />
)
