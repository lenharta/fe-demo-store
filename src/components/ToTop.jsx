import * as React from "react"
import styled from "styled-components"
import { FaAngleUp } from "react-icons/fa"

const Wrapper = styled.button`
  position: fixed;
  border-radius: var(--br-3);
  padding: 20px;
`
const Container = styled.div`
  ${({theme}) => theme.mixins.flexCenter}

  svg {
    height: 50px;
    width: 50px;
  }
`

const ToTopButton = (diabled = false) => {
  return (
    <Wrapper>
      <Container>
        <FaAngleUp />
      </Container>
    </Wrapper>
  )
}

export default ToTopButton
