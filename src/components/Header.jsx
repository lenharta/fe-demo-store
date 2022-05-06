import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { navLinks } from "../utils/config"
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion"
import MobileMenu from "./MobileMenu"
import { useWidthSize } from "../hooks/useWidthSize"

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexCenter}
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
`

const NavList = styled.ul`
  ${({ theme }) => theme.mixins.flexCenter}
  ${({ theme }) => theme.mixins.resetList}
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`

const StyledLink = styled(Link)`
  ${props => props.theme.styledLink}
  font-family: var(--th-font);
  color: var(--accent);
  width: 100%;
  span {
    font-family: var(--p-font);
  }
`

const Header = ({ siteTitle }) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <StyledHeader>
      <nav>
        {prefersReducedMotion ? (
          <>
            <StyledLink to="/">
              <span>{siteTitle}</span>
            </StyledLink>

            <NavList>
              {navLinks.map(({ title, url, ariaLabel }, i) => (
                <li key={i}>
                  <StyledLink to={url} aria-label={ariaLabel}>
                    {title}
                  </StyledLink>
                </li>
              ))}
            </NavList>

            <MobileMenu
              sitetitle={siteTitle}
            />
          </>
        ) : (
          <>
            <StyledLink to="/">
              <span>{siteTitle}</span>
            </StyledLink>

            <NavList>
              {navLinks.map(({ title, url, ariaLabel }, i) => (
                <li key={i}>
                  <StyledLink to={url} aria-label={ariaLabel}>
                    {title}
                  </StyledLink>
                </li>
              ))}
            </NavList>

            <MobileMenu
              sitetitle={siteTitle}
            />
          </>
        )}
      </nav>
    </StyledHeader>
  )
}

export default Header
