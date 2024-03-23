// Import Libraries 
import React from 'react'
import styled from 'styled-components'
import { CiSearch } from "react-icons/ci"


// Style
const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 20px;
    border: 1px solid var(--black);
    border-radius: 2px;
    width: 628px;
`

const StyledInput = styled.input`
  font-family: var(--montserrat);
  color: #AFA793;
  font-size: var(--text);

  &:focus {
    color: var(--black);
  }
`


// Component 
export const Input = (props) => {
  return (
    <InputWrapper>
        <CiSearch style={{height: '24px', width: '24px', color: '#AFA793'}} />
        <StyledInput 
          type="text" 
          placeholder='Search your books...'
          {...props} 
        />
    </InputWrapper>
  )
}
