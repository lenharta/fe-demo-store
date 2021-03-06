import * as React from "react"
import { useState, useRef } from "react"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import { Link } from "gatsby"

import feLogo from "../images/FE-logo-2.webp"
import Icons from "../images/icons"
import { navLinks, socialMedia } from "../utils/config"
import useOnClickOutside from "../hooks/useOnClickOutside"
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion"

const Container = styled.div`
  ${({ theme }) => theme.mixins.flexBetween}
  height: var(--mobile-nav-height);
  flex-direction: row;
  padding: 1rem;
  width: 100%;
  /* z-index: 9; */
  @media (min-width: 1080px) {
    display: none;
  }
`

const LogoLink = styled(Link)`
  ${props => props.theme.styledLink}
  font-size: clamp(var(--fz-3), 4vw, var(--fz-4));
  font-family: var(--p-font);
  color: var(--accent);
  letter-spacing: 2px;
  padding: 0.5rem;
`

const Hamburger = styled.button`
  ${({ theme }) => theme.mixins.flexCenter}
  ${props => props.theme.resetButton}
  color: var(--accent);
  padding: 0.5rem;
  z-index: 50;
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
  font-family: var(--p-font);
  font-size: clamp(var(--fz-3), 5vw, var(--fz-4));
  color: var(--accent);
  padding: 0.5rem 0rem;

  &:hover {
    color: var(--secondary);
  }
`

const MobileMenuWrapper = styled.aside`
  ${({ theme }) => theme.mixins.blurBackground}
  ${({ theme }) => theme.mixins.flexBetween}
  border: solid 2px var(--accent-section);
  background: var(--primary);
  width: min(70vw, 400px);
  flex-direction: column;
  position: absolute;
  padding: 6rem 2rem;
  min-height: 100vh;
  bottom: 0;
  right: -4px;
  top: 0;

  ul {
    ${props => props.theme.resetList}
    margin: 0 0 3rem 0;
    width: 100%;
    li {
      margin: 1.25rem 0;
      width: 100%;
    }
  }
`

const MobileMenuWrapperAnimated = styled(motion.div)`
  ${({ theme }) => theme.mixins.blurBackground}
  ${({ theme }) => theme.mixins.flexBetween}
  border: solid 1px var(--accent-section);
  background: var(--primary);
  width: min(70vw, 400px);
  flex-direction: column;
  padding: 6rem 2rem;
  position: absolute;
  min-height: 100vh;
  bottom: 0;
  right: -4px;
  top: 0;

  ul {
    ${props => props.theme.resetList}
    width: 100%;
    li {
      margin: 1.25rem 0;
      width: 100%;
    }
  }
`

const MenuLogoLink = styled(Link)`
  ${({ theme }) => theme.mixins.flexStart}
  width: 100%;
  img {
    display: block;
    width: 6rem;

    @media (min-width: 768px) {
      width: 7.5rem;
    }
  }
`

const Social = styled.article`
  justify-self: flex-start;
  width: 100%;
  h1 {
    font-family: var(--p-font);
    color: var(--secondary);
    font-size: clamp(var(--fz-2), 4vw, var(--fz-3));
    letter-spacing: 2px;
    margin: 0.5rem 0;
  }

  div {
    ${({ theme }) => theme.mixins.flexCenter}
    justify-content: flex-start;
    margin-left: -0.5rem;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    a {
      ${props => props.theme.styledLink}
      color: var(--accent);
      padding: 0.5rem;
      svg {
        height: 2rem;
        width: 2rem;
        &:hover {
          color: var(--secondary);
        }
      }
    }
    @media (min-width: 600px) {
      svg {
        height: 2.75rem;
        width: 2.75rem;
      }
    }
  }
`

const Copy = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  font-family: var(--s-font);
  color: var(--grayscale);
  align-items: flex-start;
  flex-direction: column;
  font-size: var(--fz-1);
  width: 100%;
  p {
    display: block;
    a {
      display: inline-block;
      ${props => props.theme.styledLink}
      color: var(--accent);
      padding: 0;
    }
  }
`

const MobileNav = ({ logo }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const toggleMenu = () => setOpenMenu(!openMenu)

  const wrapperRef = useRef()
  useOnClickOutside(wrapperRef, () => setOpenMenu(false))
  const prefersReducedMotion = usePrefersReducedMotion()

  // Start Animation Variants
  const linkTransitionSlide = {
    hidden: {
      type: "spring",
      opacity: 0,
      x: 150,
      transition: {
        duration: 0.4,
      },
    },
    show: i => ({
      type: "spring",
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.2,
      },
    }),
  }
  const navTransitionSlide = {
    hidden: {
      type: "spring",
      opacity: 0,
      x: 150,
      transition: {
        duration: 0.4,
      },
    },
    show: i => ({
      type: "spring",
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.1,
      },
    }),
  }
  const menuTransitionSlide = {
    hidden: {
      x: 600,
      transition: {
        opacity: 0,
      },
    },
    show: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        opacity: 1,
      },
    },
    remove: {
      y: `100vh`,
      transition: {
        type: "spring",
        duration: 0.5,
        opacity: 0,
      },
    },
  }
  // End Animations

  const navItemsAnimated = (
    <>
      {navLinks.map(({ title, url, ariaLabel }, i) => (
        <motion.li
          key={i}
          variants={navTransitionSlide}
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
          <Hamburger
            onClick={toggleMenu}
            aria-label={
              openMenu ? `Close Navigation Menu` : `Open Navigation Menu`
            }
          >
            {openMenu ? <Icons name={`Close`} /> : <Icons name={`Hamburger`} />}
          </Hamburger>

          {openMenu ? (
            <>
              <MobileMenuWrapper ref={wrapperRef}>
                <ul aria-label={`Navigation`}>{navItems}</ul>

                <Social>
                  <h1 aria-label={`Follow Us On Social`}>Follow Us On</h1>
                  <div aria-label={`Social Links`}>
                    {socialMedia.map(({ title, url }, i) => (
                      <a key={i} href={url} aria-label={title}>
                        <Icons name={title} />
                      </a>
                    ))}
                  </div>
                </Social>
                <MenuLogoLink to="/">
                  <img src={feLogo} alt={`Flying Embers Logo`} />
                </MenuLogoLink>
                <Copy>
                  <p>
                    <a href="https://www.flyingembers.com/">Flying Embers ??</a>,{" "}
                    {new Date().getFullYear()}
                  </p>
                  <p>Demo Site | No Rights Reserved.</p>
                  <p>
                    Developed By |{" "}
                    <a href="https://lenharta.netlify.app/">@Lenharta</a>
                  </p>
                </Copy>
              </MobileMenuWrapper>
            </>
          ) : null}
        </>
      ) : (
        <>
          <Hamburger
            onClick={toggleMenu}
            aria-label={
              openMenu ? `Close Navigation Menu` : `Open Navigation Menu`
            }
          >
            {openMenu ? <Icons name={`Close`} /> : <Icons name={`Hamburger`} />}
          </Hamburger>

          <AnimatePresence>
            {openMenu && (
              <MobileMenuWrapperAnimated
                variants={menuTransitionSlide}
                ref={wrapperRef}
                key="mobileMenu"
                initial="hidden"
                animate="show"
                exit="remove"
              >
                <ul>{navItemsAnimated}</ul>

                <Social>
                  <h1 aria-label={`Follow Us On Social`}>Follow Us On</h1>
                  <div aria-label={`Social Links`}>
                    {socialMedia.map(({ title, url }, i) => (
                      <motion.a
                        aria-label={title}
                        variants={linkTransitionSlide}
                        initial="hidden"
                        animate="show"
                        custom={i}
                        href={url}
                        key={i}
                      >
                        <Icons name={title} />
                      </motion.a>
                    ))}
                  </div>
                </Social>
                <MenuLogoLink to="/">
                  <img src={feLogo} alt={`Flying Embers Logo`} />
                </MenuLogoLink>
                <Copy>
                  <p>
                    <a href="https://www.flyingembers.com/">Flying Embers ??</a>,{" "}
                    {new Date().getFullYear()}
                  </p>
                  <p>Demo Site | No Rights Reserved.</p>
                  <p>
                    Developed By |{" "}
                    <a href="https://lenharta.netlify.app/">@Lenharta</a>
                  </p>
                </Copy>
              </MobileMenuWrapperAnimated>
            )}
          </AnimatePresence>
        </>
      )}
    </Container>
  )
}

export default MobileNav
