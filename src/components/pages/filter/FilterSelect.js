import React from 'react'
import uuid from 'react-uuid'
import { Select } from './Filter.styles'

export default function SelectFilter({
  value,
  handleChange,
  initialText,
  options,
}) {
  return (
    <Select key="State-Filter" value={value} onChange={handleChange}>
      <option key={uuid()}>{initialText}</option>
      {options}
    </Select>
  )
}
