import React from 'react'
import School from './School'

export default {
  title: 'School/SchoolCard',
  component: School,
}

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
