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
import logo from "../images/FE-logo-2.webp"

const StyledLink = styled(Link)`
  ${({theme}) => theme.mixins.flexCenter}



  p {
    display: none;
  }
`

/* HEADER TAG LOCATED IN GLOBALSTYLE.JS */
const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBetween}
  flex-direction: column;
  height: 100%;
  width: 100%;
  nav {
    ${({ theme }) => theme.mixins.flexCenter}
    flex-direction: column;
    height: 100%;
    div {
      margin: 20px 0px;
      img {
        height: 100px;
        width: 100px;
        @media (max-width: 1600px) {
          height: 75px;
          width: 75px;
        }
        @media (max-width: 1080px) {
          height: 60px;
          width: 60px;
        }
      }
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
    <StyledLink to="/">
      <FaStore />
      <p>Shop</p>
    </StyledLink>
  )
  const three = (
    <StyledLink to="/">
      <FaMapPin />
      <p>Locations</p>
    </StyledLink>
  )
  const four = (
    <StyledLink to="/">
      <FaHeart />
      <p>Our Story</p>
    </StyledLink>
  )
  const five = (
    <StyledLink to="/">
      <FaUserAlt />
      <p>Account</p>
    </StyledLink>
  )
  const six = (
    <StyledLink to="/">
      <FaShoppingCart />
      <p>Cart</p>
    </StyledLink>
  )

  const navItems = [one, two, three, four, five, six]

  return (
    <>
      <header>
        <Wrapper>
          <nav>
            {navItems.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </nav>
        </Wrapper>
      </header>
    </>
  )
}

export default Header
