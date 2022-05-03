import * as React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import HeroImg from "../images/P-FE-bitters-and-botanicals-pack.webp"

import Layout from "../components/Layout"
import PrimaryButton from "../components/PrimaryButton"
import Seo from "../components/Seo"
import SecondaryButton from "../components/SecondaryButton"

const Hero = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  flex-direction: row;
  width: 100%;
  height: 100%;
  img {
    width: 40rem;
  }
`

const HeroCopy = styled.div`
  ${({ theme }) => theme.mixins.flexStart}
  flex-direction: column;
  height: 100%;
  width: 50%;
`

const TitleOne = styled.h2`
  ${props => props.theme.heroTitleOne}
  font-family: var(--p-font);
  margin-bottom: 0.5rem;
  width: 100%;
`
const TitleTwo = styled.h2`
  ${props => props.theme.heroTitleTwo}
  font-family: var(--p-font);
  margin-bottom: 0.5rem;
  width: 100%;
`
const TitleThree = styled.h1`
  ${props => props.theme.heroTitleThree}
  font-family: var(--p-font);
  width: 100%;
  margin-bottom: 3rem;
`
const HeroLinks = styled.div`
  ${({ theme }) => theme.mixins.flexStart}
  flex-direction: row;
  width: 100%;

  button {
    margin-right: 2rem;
  }
`

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Seo title="Home | Flying Embers" />
        <section>
          <Hero>
            <HeroCopy>
              <TitleOne>Hard To Brew,</TitleOne>
              <TitleTwo>Easy To Love</TitleTwo>
              <TitleThree>Flying Embers</TitleThree>
              <HeroLinks>
                <PrimaryButton
                  text={`Buy Online`}
                  onClick={() => navigate("shop")}
                />
                <SecondaryButton
                  text={`Buy In Store`}
                  onClick={() => navigate("locations")}
                />
              </HeroLinks>
            </HeroCopy>
            <img src={HeroImg} alt="Bitters and Botanicals Variety Pack" />
          </Hero>
        </section>
      </Layout>
    </>
  )
}

export default IndexPage

////////// PROJECT RULES
//////////
// *** Place Styled Component Variables above the JSX Component
//
// *** Font Styles and Sizes are done in GlobalStyles
//
// *** Wrap pages around Semantic "article" tags, Divide Articles into sections
//
// ***
//
// ***
//
// ***
//
// ***
//
// ***
//
// ***
//
// ***
//
// ***
//
// ***
//
// ***
//
// ***
//
// ***
//
// ***
//
// ***
//
// ***
//
// ***
//
// ***
//
// ***
//
// ***
//
// ***
//
// ***
//
// ***
//
// ***
//
// ***
// "gid://shopify/ProductVariant/42958095122683"
