import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexCenter}
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
`

const NavList = styled.ul`
  /* ${({theme}) => theme.mixins.flexCenter} */
  width: 100%;
`

const StyledLink = styled(Link)`
  ${props => props.theme.styledLink}
  font-family: var(--th-font);
  color: var(--accent);
  span {
    font-family: var(--p-font);
  }
`

const Header = ({ siteTitle }) => {
  const one = (
    <StyledLink to="/shop" aria-label="Shop">
      {`Shop`}
    </StyledLink>
  )
  const two = (
    <StyledLink to="/locations" aria-label="Locations">
      {`Locations`}
    </StyledLink>
  )
  const three = (
    <StyledLink to="/about" aria-label="About Us">
      {`About Us`}
    </StyledLink>
  )
  const four = (
    <StyledLink to="/user" aria-label="Account">
      {`Account`}
    </StyledLink>
  )
  const five = (
    <StyledLink to="/cart" aria-label="Shopping Cart">
      {`Cart`}
    </StyledLink>
  )

  const navItems = [one, two, three, four, five]

  return (
    <StyledHeader>
      <nav>
        <NavList>
          <StyledLink to="/">
            <span>{siteTitle}</span>
          </StyledLink>
          {navItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </NavList>
      </nav>
    </StyledHeader>
  )
}

export default Header
