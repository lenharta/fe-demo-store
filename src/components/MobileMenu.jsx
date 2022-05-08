import * as React from "react"
import { useState, useRef } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import Icons from "../images/icons"
import { Link } from "gatsby"

import { navLinks, socialMedia } from "../utils/config"
import useOnClickOutside from "../hooks/useOnClickOutside"
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion"


const Container = styled.div`
  ${({ theme }) => theme.mixins.flexBetween}
  height: var(--mobile-nav-height);
  flex-direction: row;
  padding: 1rem;
  width: 100%;

  @media (min-width: 1080px) {
    display: none;
  }
`

const LogoLink = styled(Link)`
  ${props => props.theme.styledLink}
  font-family: var(--p-font);
  font-size: clamp(var(--fz-3), 4vw, var(--fz-4));
  color: var(--accent);
  letter-spacing: 2px;
  padding: 0.5rem;
`

const Hamburger = styled.button`
  ${({ theme }) => theme.mixins.flexCenter}
  ${props => props.theme.resetButton}
  color: var(--accent);
  padding: 0.5rem;
  z-index: 10;
  svg {
    height: 2.5rem;
    width: 2.5rem;
    &:hover {
      opacity: var(--hover-opacity);
    }

    @media screen and (min-width: 600px) {
      height: 3rem;
      width: 3rem;
    }
  }
`

const StyledLink = styled(Link)`
  ${props => props.theme.styledLink}
  font-family: var(--th-font);
  font-size: var(--fz-3);
  color: var(--accent);
  padding: 0.5rem 0rem;
  position: relative;

  &:hover {
    &::after {
      content: " ";
      background: var(--secondary);
      position: absolute;
      height: 2px;
      bottom: 0;
      right: 0;
      left: 0;
    }
  }
`

const MobileMenuWrapper = styled.aside`
  ${({ theme }) => theme.mixins.blurBackground}
  ${({ theme }) => theme.mixins.flexCenter}
  border: solid 1px var(--accent-section);
  justify-content: flex-start;
  background: var(--primary);
  width: min(75vw, 400px);
  flex-direction: column;
  position: absolute;
  min-height: 100vh;
  padding: 2rem;
  bottom: 0;
  right: 0;
  top: 0;

  /* @supports (backdrop-filter: blur(1rem)) {
    background: var(--grayscale);
    backdrop-filter: blur(1rem);
  } */

  ul {
    ${props => props.theme.resetList}
    margin: 3rem 0;
    width: 100%;
    li {
      margin: 1.25rem 0;
      width: 100%;
    }
  }
`

const Social = styled.div`
  display: block;
  width: 100%;
  p {
    font-family: var(--p-font);
    color: var(--secondary);
    font-size: var(--fz-2);
    letter-spacing: 2px;
    padding: 0 0.5rem;
    margin: 0.5rem 0;
  }

  div {
    ${({ theme }) => theme.mixins.flexCenter}
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    height: 5rem;
    width: 100%;
  }
`

const SocialLink = styled(Link)`
  ${({ theme }) => theme.mixins.flexCenter}
  ${props => props.theme.styledLink}
  color: var(--accent);
  padding: 0.5rem;
  svg {
    height: 2rem;
    width: 2rem;
  }
`

const MobileMenu = ({ logo }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const toggleMenu = () => setOpenMenu(!openMenu)

  const wrapperRef = useRef()
  useOnClickOutside(wrapperRef, () => setOpenMenu(false))
  const prefersReducedMotion = usePrefersReducedMotion()

  const navItems = (
    <>
      {navLinks.map(({ title, url, ariaLabel }, i) => (
        <li key={i}>
          <StyledLink to={url} aria-label={ariaLabel}>
            {title}
          </StyledLink>
        </li>
      ))}
    </>
  )

  return (
    <Container>
      <LogoLink to="/">
        <span>{logo}</span>
      </LogoLink>

      {prefersReducedMotion ? (
        <>
          <Hamburger onClick={toggleMenu} aria-label={`Open Navigation Menu`}>
            {openMenu ? (
              <Icons title={`Close`} />
            ) : (
              <Icons title={`Hamburger`} />
            )}
          </Hamburger>

          {openMenu === true ? (
            <>
              <MobileMenuWrapper ref={wrapperRef}>
                <ul>{navItems}</ul>
                <Social>
                  <p>Follow Us On</p>
                  <div>
                    {socialMedia.map(({ title, url }, i) => (
                      <SocialLink key={i} to={url} aria-label={title}>
                        <Icons title={title} />
                      </SocialLink>
                    ))}
                  </div>
                </Social>
              </MobileMenuWrapper>
            </>
          ) : null}
        </>
      ) : (
        <>
          <Hamburger onClick={toggleMenu} aria-label={`Open Navigation Menu`}>
            {openMenu ? (
              <Icons title={`Close`} />
            ) : (
              <Icons title={`Hamburger`} />
            )}
          </Hamburger>

          {openMenu === true ? (
            <>
              <MobileMenuWrapper ref={wrapperRef}>
                <ul>{navItems}</ul>
                <Social>
                  <p>Follow Us On</p>
                  <div>
                    {socialMedia.map(({ title, url }, i) => (
                      <SocialLink key={i} to={url} aria-label={title}>
                        <Icons title={title} />
                      </SocialLink>
                    ))}
                  </div>
                </Social>
              </MobileMenuWrapper>
            </>
          ) : null}
        </>
      )}
    </Container>
  )
}

export default MobileMenu
