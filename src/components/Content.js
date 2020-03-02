import React from 'react'
import styled from 'styled-components'

export default function Content() {
  return <ContentWapper />
}

const ContentWapper = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 54px;
  width: 100%;
`
