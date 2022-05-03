import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import {
  FaStore,
  FaMapPin,
  FaHeart,
  FaUserAlt,
  FaShoppingCart,
} from "react-icons/fa"
import logo from "../images/FE-logo-3.webp"

const StyledHeader = styled.header`
  padding: 6rem 1rem;
  position: fixed;
  height: 100vh;
  width: 10%;
  left: 0;
  top: 0;
`

const StyledLink = styled(Link)`
  ${({theme}) => theme.mixins.flexCenter}
  padding: 1rem;
  svg {
    height: 45px;
    width: 45px;
  }
  @media (max-width: 1600px) {
    svg {
      height: 35px;
      width: 35px;
    }
  }
  @media (max-width: 1080px) {
    svg {
      height: 30px;
      width: 30px;
    }
  }
  @media (max-width: 768px) {
    /* REMOVE AND REPLACE WITH MOBILE MENU BUTTON */
  }
`

/* HEADER TAG LOCATED IN GLOBALSTYLE.JS */
const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  flex-direction: column;
  height: 100%;
  width: 100%;
  nav {
    ${({ theme }) => theme.mixins.flexBetween}
    flex-direction: column;
    height: 100%;
    width: 100%;
    div {
      img {
        height: 100px;
        width: 100px;
      }
    }
  }
  @media (max-width: 1600px) {
    img {
      height: 75px;
      width: 75px;
    }
  }
  @media (max-width: 1080px) {
    img {
      height: 60px;
      width: 60px;
    }
  }
`

const Header = ({ siteTitle }) => {
  const one = (
    <StyledLink to="/">
      <img src={logo} alt={siteTitle} aria-label={siteTitle} />
    </StyledLink>
  )

  const two = (
    <StyledLink to="/shop" aria-label="Shop">
      <FaStore />
    </StyledLink>
  )
  const three = (
    <StyledLink to="/locations" aria-label="Locations">
      <FaMapPin />
    </StyledLink>
  )
  const four = (
    <StyledLink to="/about" aria-label="About Us">
      <FaHeart />
    </StyledLink>
  )
  const five = (
    <StyledLink to="/user" aria-label="Account">
      <FaUserAlt />
    </StyledLink>
  )
  const six = (
    <StyledLink to="/cart" aria-label="Shopping Cart">
      <FaShoppingCart />
    </StyledLink>
  )

  const navItems = [one, two, three, four, five, six]

  return (
    <>
      <StyledHeader>
        <Wrapper>
          <nav>
            {navItems.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </nav>
        </Wrapper>
      </StyledHeader>
    </>
  )
}

export default Header
