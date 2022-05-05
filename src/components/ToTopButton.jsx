import * as React from "react"
import styled from "styled-components"

import { motion } from "framer-motion"
import { toTopButton } from "../utils/framerMotion"

import { FaAngleUp } from "react-icons/fa"

const ButtonWrapper = styled(motion.button)`
  ${({ theme }) => theme.mixins.flexCenter}
  ${props => props.theme.toTopComponent}
  padding: 0.75rem;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  svg {
    height: 30px;
    width: 30px;
  }

  @media (min-width: 1080px) {
    bottom: 2.5rem;
    right: 2.5rem;
    svg {
      height: 40px;
      width: 40px;
    }
  }
`

const ToTopButton = ({ onClick, disabled = false }) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      disabled={disabled}
      aria-label={`Scroll To Top`}
      variants={toTopButton}
      initial={`hidden`}
      animate={window.location.scrollX > 0 ? `show` : ``}
    >
      <FaAngleUp />
    </ButtonWrapper>
  )
}

export default ToTopButton
