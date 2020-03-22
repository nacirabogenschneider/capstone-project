import React from 'react'
import { AddPointButton } from './Filter.styles'

export default function FilterButton({ styling, label, onClick, value }) {
  return (
    <AddPointButton style={styling} onClick={onClick} aria-label={label}>
      {value}
    </AddPointButton>
  )
}
