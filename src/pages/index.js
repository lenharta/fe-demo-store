import * as React from "react"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { navigate } from "gatsby"

import { Seo, Layout, PrimaryButton, SkipToContent } from "../components"
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion"

//
// =====
//

const Hero = styled.section`
  ${({ theme }) => theme.mixins.flexCenter}
  margin-top: var(--mobile-nav-height);
  position: relative;
  overflow: hidden;
  min-height: 60vh;

  width: 100%;
  left: 0;
  top: 0;

  video {
    object-fit: cover;
    position: absolute;
    min-height: 100%;
    min-width: 100%;
    z-index: -2;
  }

  @media (min-width: 1080px) {
    min-height: calc(90vh - var(--desktop-nav-height));
    margin-top: var(--desktop-nav-height);
  }
`
const HeroContent = styled.div`
  display: block;
  width: 100%;
  position: absolute;
  padding: 1.5rem;
  z-index: 0;
  bottom: 0;

  h1 {
    font-size: clamp(2.25em, 6vw, 6em);
    font-family: var(--p-font);
    color: var(--secondary);
    margin-bottom: 1.5rem;
    span {
      color: var(--accent);
      letter-spacing: 2px;
    }
  }

  @media (min-width: 1080px) {
    /* width: 100%; */
    padding: 3rem 6rem;

    span {
      letter-spacing: 5px;
    }
  }

  @media (min-width: 1600px) {
    /* padding: 6rem 0; */
    margin: 0 auto;
    max-width: 1600px;
  }
`
const HeroButtons = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  align-items: flex-start;
  flex-direction: column;
  button {
    width: 100%;
    font-size: clamp(1.25em, 2vw, 1.75em);
    &:last-child {
      margin-top: 1.5rem;
    }
  }

  @media (min-width: 1080px) {
    justify-content: flex-start;
    flex-direction: row;
    button {
    }
  }
`
const AnimatedHeroButtons = styled(motion.div)`
  ${({ theme }) => theme.mixins.flexCenter}
  align-items: flex-start;
  flex-direction: column;
  width: min(100%, 1600px);
  button {
    font-size: clamp(1em, 2vw, 1.5em);
    padding: 0.75rem 1rem;
    &:last-child {
      margin-top: 1.5rem;
    }
    &:hover {
      cursor: pointer;
    }
  }

  @media (min-width: 1080px) {
    justify-content: flex-start;
    flex-direction: row;
    button {
      padding: 0.75rem 2rem;
      &:first-child {
        margin-right: 2rem;
      }
      &:last-child {
        margin-top: 0;
      }
    }
  }
`
const HomePageWrapper = styled.section`
  ${({ theme }) => theme.mixins.flexCenter}
  width: min(100%, 1600px);
  flex-direction: column;

  section {
    padding: 0 1.5rem;
    margin: 1.5rem auto;
    min-height: 100vh;
    width: 100%;

    @media (min-width: 1080px) {
      padding: 6rem;
    }
  }
`
const SkipButtonWrapper = styled.div`
  display: none;

  @media (min-width: 1080px) {
    ${({ theme }) => theme.mixins.flexCenter}
    width: 100%;
    height: 10vh;

    &:hover {
      cursor: pointer;
    }
  }
`
// animation config
const animatedButton = {
  hidden: {
    type: "spring",
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
  show: {
    type: "spring",
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
}

//
// =====
//

const IndexPage = () => {
  const [playVideo, setPlayVideo] = useState()
  const vidRef = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (playVideo === false) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }, [playVideo])

  //
  // =====
  //

  return (
    <Layout>
      <Seo title="Home | Flying Embers" />
      <Hero onClick={() => setPlayVideo(!playVideo)}>
        <video autoPlay muted ref={vidRef} playsInline loop>
          <source
            src="//cdn.shopify.com/s/files/1/0352/6367/6475/t/51/assets/video.mp4?v=176295901941828733541639625563"
            type="video/mp4"
          />
          Your browser does not support HTML video.
        </video>
        <HeroContent>
          <h1>
            Hard To Brew,
            <br />
            Easy To Love.
            <br />
            <span>FLYING EMBERS</span>
          </h1>
          {prefersReducedMotion ? (
            <>
              <HeroButtons>
                <PrimaryButton
                  text={`Buy Online`}
                  onClick={() => navigate("shop")}
                />
                <PrimaryButton
                  text={`Buy In Store`}
                  onClick={() => navigate("locations")}
                  accented={true}
                />
              </HeroButtons>
            </>
          ) : (
            <>
              <AnimatedHeroButtons
                variants={animatedButton}
                initial={`hidden`}
                animate={`show`}
              >
                <PrimaryButton
                  text={`Buy Online`}
                  onClick={() => navigate("shop")}
                />
                <PrimaryButton
                  text={`Buy In Store`}
                  onClick={() => navigate("locations")}
                  accented={true}
                />
              </AnimatedHeroButtons>
            </>
          )}
        </HeroContent>
      </Hero>
      <HomePageWrapper>
        <SkipButtonWrapper>
          <SkipToContent />
        </SkipButtonWrapper>

        <section id="content"></section>
        <section></section>
        <section></section>
      </HomePageWrapper>
    </Layout>
  )
}

export default IndexPage

// "gid://shopify/ProductVariant/42958095122683"

// query HeroImage($id: StringQueryOperatorInput!) {
//   shopifyProductVariant(id: $id) {
//     product {
//       title
//       featuredImage {
//         src
//       }
//     }
//   }
// }

// {
// 	"id": {
// 		"ne":  "gid://shopify/ProductVariant/42958095122683"
//   }
// }
