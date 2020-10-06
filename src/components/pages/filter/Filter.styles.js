import styled from 'styled-components/macro'

const SelectSection = styled.main`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 110px;
  width: 440;
`
const Option = styled.option`
  font-family: 'Raleway', 'sant serif';
  font-size: 20px;
`
const Select = styled.select`
  font-family: 'Raleway';
  height: 48px;
  width: 420px;

  border-radius: 12px;
  border: none;
  margin: 5px 10px;
  padding-left: 8px;
  font-size: 1.1rem;
  background: white;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #2b7380;
  &:focus {
    box-shadow: 0 0 10px 2px #ee7600;
  }
`
const AddPointButton = styled.button`
  font-family: 'Raleway';
  display: flex;
  left: 45vw;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: auto;
  border: none;
  margin: 4px;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px #2b7380;
  background: white;
  &:focus {
    box-shadow: 0 0 10px 2px #ee7600;
  }
`
export { AddPointButton, Select, Option, SelectSection }
