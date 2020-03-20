import React from 'react'
import { action } from '@storybook/addon-actions'
import { Filter } from './Filter'

export default {
  title: 'Filter/Select',
  component: Filter,
}
const selectStyle = {
  fontFamily: 'Raleway',
  height: 48,
  width: 350,
  borderRadius: 12,
  border: 'none',
  marginTop: 5,
  marginBottom: 5,
  paddingLeft: 8,
  fontSize: '1.1rem',
  background: 'white',
  opacity: 0.94,
  boxShadow: '0 0 10px 2px #2b7380',
}

export const schoolFilter = () => (
  <select
    key="State-Filter"
    value={'stateOfChoice'}
    onChange={action('filter primary schools by state')}
    style={selectStyle}
  >
    <option key="key">Wähle deine Schule</option>
    <option key="key">Schule Heidacker</option>
    <option key="key">Wolfgang-Borchert-Schule</option>
    <option key="key">Schule Appelhoff</option>
  </select>
)
