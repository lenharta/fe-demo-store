import * as React from "react"
import styled from "styled-components"
import { FaAngleRight } from "react-icons/fa"

const ButtonWrapper = styled.button`
  ${props => props.theme.primaryButtonComponent}
  ${({ theme }) => theme.mixins.flexBetween}
  padding: 0.5rem 1rem;
  border-radius: 50px;
  max-width: 400px;
  width: 100%;
`
const Title = styled.span`
  font-size: var(--fz-2);
  letter-spacing: 1.5px;
`

const PrimaryButton = ({
  text,
  onClick,
  disabled = false,
  accented = false,
}) => {
  return (
    <ButtonWrapper onClick={onClick} disabled={disabled} accented={accented}>
      <Title>{text}</Title>
      <FaAngleRight />
    </ButtonWrapper>
  )
}

export default PrimaryButton
