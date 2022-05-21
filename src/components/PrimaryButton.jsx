import * as React from "react"
import styled from "styled-components"
import Icons from "../images/icons"

const ButtonWrapper = styled.button`
  ${props => props.theme.primaryButtonComponent}
  ${({ theme }) => theme.mixins.flexBetween}
  padding: 0.5rem 1rem;
  border-radius: 50px;
  max-width: 500px;
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
      <Icons name="Right" />
    </ButtonWrapper>
  )
}

export default PrimaryButton
