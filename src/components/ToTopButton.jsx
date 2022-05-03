import * as React from "react"
import styled from "styled-components"
import { FaAngleUp } from "react-icons/fa"

const ButtonWrapper = styled.button`
  ${({theme}) => theme.mixins.flexCenter}
  ${props => props.theme.toTopComponent}
  position: fixed;
  bottom: 5rem;
  right: 5rem;
  padding: 1rem;

  svg {
    height: 30px;
    width: 30px;
  }
`

const ToTopButton = ({ onClick, disabled = false }) => {
  return (
    <ButtonWrapper onClick={onClick} disabled={disabled} aria-label={`Scroll To Top`}>
        <FaAngleUp />
    </ButtonWrapper>
  )
}

export default ToTopButton
