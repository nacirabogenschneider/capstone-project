import React from 'react'
import { action } from '@storybook/addon-actions'
import { Filter } from './Filter'
import * as states from './states.json'

import { Select } from './Filter.styles'
import uuid from 'react-uuid'

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

export const StateFilter = () => (
  <select
    key="State-Filter"
    value={'stateOfChoice'}
    onChange={action('handleStateChange')}
    style={selectStyle}
  >
    <option key={uuid()}>Wähle dein Bundesland</option>
    <option key={uuid()}>Hamburg</option>
    <option key={uuid()}>Berlin</option>
    <option key={uuid()}>Bayern</option>
  </select>
)
