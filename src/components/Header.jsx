import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { navLinks } from "../utils/config"
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion"
import MobileNav from "./MobileNav"
import { motion } from "framer-motion"
 
const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexCenter}
  border: solid 1px var(--accent-section);
  height: var(--mobile-nav-height);
  background: var(--primary);
  position: fixed;
  z-index: 10;
  width: 100%;
  right: 0;
  left: 0;
  top: 0;
  nav {
    ${({ theme }) => theme.mixins.flexBetween}
    flex-direction: row;
    width: 100%;
  }

  @media (min-width: 1080px) {
    height: var(--desktop-nav-height);
    padding: 0 6rem;
  }
`

const NavList = styled.ul`
  display: none;

  @media (min-width: 1080px) {
    ${({ theme }) => theme.mixins.flexCenter}
    ${props => props.theme.resetList}
    justify-content: flex-end;
    height: 100%;
    li {
      font-size: clamp(var(--fz-2), 5vw, var(--fz-3));
      letter-spacing: 1px;
      margin: 0 0.5rem;
    }
  }
`

const StyledLink = styled(Link)`
  display: none;

  @media (min-width: 1080px) {
    ${({ theme }) => theme.mixins.flexCenter}
    ${props => props.theme.styledLink}
    justify-content: flex-start;
    font-family: var(--th-font);
    color: var(--accent);
    padding: 0.75rem;
    width: 100%;
    &:hover {
      color: var(--secondary);
    }
  }
`

const Logo = styled(Link)`
  display: none;

  @media (min-width: 1080px) {
    ${({ theme }) => theme.mixins.flexCenter}
    ${props => props.theme.styledLink}
    justify-content: flex-start;
    font-family: var(--s-font);
    color: var(--accent);
    padding: 1rem;
    span {
      font-size: clamp(var(--fz-3), 5vw, var(--fz-4));
      font-family: var(--p-font);
      letter-spacing: 2px;
      width: 100%;
      &:hover {
        color: var(--secondary);
      }
    }
  }
`

const Header = ({ siteTitle }) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const navTransitionUp = {
    hidden: {
      type: "spring",
      opacity: 0,
      y: 100,
      transition: {
        duration: 0.5,
      },
    },
    show: i => ({
      type: "spring",
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
      },
    }),
  }
  const logoTransitionUp = {
    hidden: {
      type: "spring",
      opacity: 0,
      y: 100,
      transition: {
        duration: 0.5,
      }
    },
    show: {
      type: "spring",
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    },
  }

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
  const animatedNavItems = (
    <>
      {navLinks.map(({ title, url, ariaLabel }, i) => (
        <motion.li
        key={i}
        variants={navTransitionUp}
        initial="hidden"
        animate="show"
        custom={i}
        >
          <StyledLink to={url} aria-label={ariaLabel}>
            {title}
          </StyledLink>
        </motion.li>
      ))}
    </>
  )

  const navLogo = (
    <>
      <span>{siteTitle}</span>
    </>
  )

  const animatedNavLogo = (
    <>
      <motion.span
        variants={logoTransitionUp}
        initial="hidden"
        animate="show"
      >
        {siteTitle}
      </motion.span>
    </>
  )

  return (
    <StyledHeader>
      <nav>
        {prefersReducedMotion ? (
          <>
            <Logo to="/">{navLogo}</Logo>

            <NavList>{navItems}</NavList>

            <MobileNav logo={siteTitle} />
          </>
        ) : (
          <>
            {/* ! WILL REPLACE AND MOVE ABOVE ! */}
            <Logo to="/">{animatedNavLogo}</Logo>

            <NavList>{animatedNavItems}</NavList>

            <MobileNav logo={siteTitle} />
          </>
        )}
      </nav>
    </StyledHeader>
  )
}

export default Header
