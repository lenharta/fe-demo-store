import * as React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button``
const Title = styled.p``

const PrimaryButton = ({ text, onClick, disabled = false }) => {
  return (
    <ButtonWrapper onClick={onClick} disabled={disabled}>
      <Title>{text}</Title>
    </ButtonWrapper>
  )
}

export default PrimaryButton
