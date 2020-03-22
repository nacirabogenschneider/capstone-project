import React from 'react'
import { AddPointButton } from './Filter.styles'

export default function FilterButton({ style, label, onClick, value }) {
  return (
    <AddPointButton style={style} onClick={onClick} aria-label={label}>
      {value}
    </AddPointButton>
  )
}
