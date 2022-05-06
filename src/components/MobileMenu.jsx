import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import { navLinks } from "../utils/config"
import { motion } from "framer-motion"
import { Link } from "gatsby"

const Container = styled.section`
  @media (min-width: 768px) {
    display: none;
  }
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
const MenuHeader = styled.section``
const MenuContent = styled.section``
const NavList = styled.ul``

const MobileMenu = ({ siteTitle }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const toggleMenu = () => setOpenMenu(!openMenu)

  return (
    <Container>
      <MenuHeader>
        <StyledLink to="/">
          <span>{siteTitle}</span>
        </StyledLink>
      </MenuHeader>

      <MenuContent>
        <NavList>
          {navLinks.map(({ title, url, ariaLabel }, i) => (
            <li key={i}>
              <StyledLink to={url} aria-label={ariaLabel}>
                {title}
              </StyledLink>
            </li>
          ))}
        </NavList>
      </MenuContent>
    </Container>
  )
}

export default MobileMenu
