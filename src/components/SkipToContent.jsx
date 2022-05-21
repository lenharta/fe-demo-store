import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion"
import Icons from "../images/icons"
import { Link } from "gatsby"

const SkipToContentLink = styled(Link)`
  ${({ theme }) => theme.mixins.flexCenter}
  height: 100%;
  width: 100%;

  svg {
    color: var(--accent);
    width: 50px;
    height: 50px;
  }
`

const SkipToContentAnimated = styled(motion(Link))`
  ${({ theme }) => theme.mixins.flexCenter}
  height: 100%;
  width: 100%;

  svg {
    color: var(--accent);
    width: 50px;
    height: 50px;
  }
`

const SkipToContentFramer = {
  start: {
    y: 15,
    transition: {
      type: "spring",
      opacity: 1,
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
  end: {
    y: 0,
    transition: {
      opacity: 0.5,
      type: "spring",
      bounce: 0.1,
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
}

const SkipToContent = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  return prefersReducedMotion ? (
    <>
      <SkipToContentLink to={`/#content`}>
        <div>
          <Icons name="Down" />
        </div>
      </SkipToContentLink>
    </>
  ) : (
    <>
      <SkipToContentAnimated
        to={`/#content`}
        // TURN ON / OFF ANIMATION
        variants={SkipToContentFramer}
        initial={`start`}
        animate={`end`}
      >
        <Icons name="Down" />
      </SkipToContentAnimated>
    </>
  )
}

export default SkipToContent
