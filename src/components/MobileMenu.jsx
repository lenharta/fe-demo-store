import * as React from "react"
import { useState, useRef } from "react"
import styled from "styled-components"
import { navLinks, socialMedia } from "../utils/config"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import { MdMenu, MdClose } from "react-icons/md"

const Container = styled.div`
  ${({ theme }) => theme.mixins.flexBetween}
  flex-direction: row;
  height: 80px;
  width: 100%;
  padding: 1rem;

  @media (min-width: 1080px) {
    display: none;
  }
`

const LogoLink = styled(Link)`
  ${props => props.theme.styledLink}
  font-family: var(--p-font);
  font-size: var(--fz-4);
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
    height: 45px;
    width: 45px;
    :hover {
      opacity: var(--hover-opacity);
    }
  }
`

const StyledLink = styled(Link)`
  ${props => props.theme.styledLink}
  font-family: var(--th-font);
  font-size: var(--fz-3);
  color: var(--accent);
  padding: 1rem;

  &::after {
    content: "";
    position: relative;
    bottom: 0;
    right: 0;
    left: 0;
    color: var(--accent);
    height: 2px;
    width: 100%;
  }
`

const MobileMenuWrapper = styled.aside`
  ${({ theme }) => theme.mixins.flexCenter}
  border: solid 1px var(--accent-section);
  background: var(--primary);
  width: min(75vw, 400px);
  flex-direction: column;
  min-height: 100vh;
  position: fixed;
  padding: 2rem;
  bottom: 0;
  right: 0;
  top: 0;

  ul {
    ${props => props.theme.resetList}
    width: 100%;
    li {
      margin: 2.5rem 0;
      width: 100%;
    }
  }
`

const Social = styled.div`
  /* ${({ theme }) => theme.mixins.flexCenter} */
  justify-content: flex-start;
  width: 100%;
  p {
    color: var(--secondary);
    font-family: var(--p-font);
    font-size: var(--fz-2);
    letter-spacing: 2px;
    padding: 0 1rem;
  }
`

const MobileMenu = ({ logo }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const toggleMenu = () => setOpenMenu(!openMenu)
  const navRef = useRef(null)

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

      <Hamburger onClick={toggleMenu}>
        {openMenu ? <MdClose /> : <MdMenu />}
      </Hamburger>

      {openMenu === true ? (
        <>
          <MobileMenuWrapper>
            <ul>{navItems}</ul>
            <Social>
              <p>Follow Us On</p>
              {/* {socialMedia.map(({}))} */}
            </Social>
          </MobileMenuWrapper>
        </>
      ) : null}
    </Container>
  )
}

export default MobileMenu
