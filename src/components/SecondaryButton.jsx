import * as React from 'react'
import styled from 'styled-components'

// SAME AS PRIMARY BUTTON, DIFFERENT COLORS FOR DIFFERENT THEMES
const ButtonWrapper = styled.button``
const Title = styled.p``

const SecondaryButton = ({ text, onClick, disabled = false }) => {
  return (
    <ButtonWrapper onClick={onClick} disabled={disabled}>
      <Title>{text}</Title>
    </ButtonWrapper>
  )
}

export default SecondaryButton