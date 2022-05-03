import * as React from "react"
import styled from "styled-components"
import { FaAngleRight } from "react-icons/fa"

// SAME AS PRIMARY BUTTON, DIFFERENT COLORS FOR DIFFERENT THEMES
const ButtonWrapper = styled.button`
  ${props => props.theme.secondaryButtonComponent}
  ${({ theme }) => theme.mixins.flexBetween}
  height: 60px;
  width: 300px;
  border-radius: 50px;
  padding: 1rem;
`
const Title = styled.span`
  font-size: var(--fz-2);
  letter-spacing: 1.5px;
`

const SecondaryButton = ({ text, onClick, disabled = false }) => {
  return (
    <ButtonWrapper onClick={onClick} disabled={disabled}>
      <Title>{text}</Title>
      <FaAngleRight /> 
    </ButtonWrapper>
  )
}

export default SecondaryButton
