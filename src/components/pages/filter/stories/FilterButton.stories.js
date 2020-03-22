import React from 'react'
import { action } from '@storybook/addon-actions'
import { Filter } from '../Filter'

export default {
  title: 'Filter/Select',
  component: Filter,
}

const styledFilterButton = {
  fontFamily: 'Raleway',
  display: 'flex',
  left: '45vw',
  textDecoration: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  height: 45,
  width: 'auto',
  border: 'none',
  margin: 4,
  fontSize: '1rem',
  textDecoration: 'none',
  borderRadius: 12,
  boxShadow: '0 0 10px 2px #2b7380',
  background: 'white',
}

export const filterButton = () => (
  <button
    onClick={action('Route to Meetingoint')}
    style={styledFilterButton}
    aria-label="check"
  >
    auswählen
  </button>
)
