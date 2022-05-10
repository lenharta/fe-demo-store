import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { navLinks } from "../utils/config"
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion"
import MobileNav from "./MobileNav"

const StyledHeader = styled.header`
  border: solid 1px var(--accent-section);
  position: fixed;
  height: auto;
  width: 100%;
  left: 0;
  top: 0;
`

const NavList = styled.ul`
  display: none;

  @media (min-width: 1080px) {
    ${({ theme }) => theme.mixins.flexCenter}
    li {
      ${({ theme }) => theme.mixins.resetList}
    }
    justify-content: flex-start;
    width: 100%;
  }
`

const StyledLink = styled(Link)`
  display: none;

  @media (min-width: 1080px) {
    ${({ theme }) => theme.mixins.flexCenter}
    ${props => props.theme.styledLink}
    font-family: var(--th-font);
    color: var(--accent);
    width: 100%;
    span {
      font-family: var(--p-font);
    }
  }
`

const Header = ({ siteTitle }) => {
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

  // Add Nav Build for Framer Motion
  const animatedNavItems = (
    <>
      {/* ! BUILD ONCE REDUCED MOTION IS COMPLETE ! */}
    </>
  )

  const navLogo = (
    <>
      <StyledLink to="/">
        <span>{siteTitle}</span>
      </StyledLink>
    </>
  )

  return (
    <StyledHeader>
      <nav>
        {prefersReducedMotion ? (
          <>

          </>
        ) : (
          <>
            {/* ! WILL REPLACE AND MOVE ABOVE ! */}
            {navLogo}

            <NavList>{navItems}</NavList>

            <MobileNav logo={siteTitle} />
          </>
        )}
      </nav>
    </StyledHeader>
  )
}

export default Header
