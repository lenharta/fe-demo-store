import * as React from "react"
import { useState, useRef, useEffect } from "react"
import { navigate } from "gatsby"
import { motion } from "framer-motion"
import styled from "styled-components"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import PrimaryButton from "../components/PrimaryButton"
import SecondaryButton from "../components/SecondaryButton"

const HomePageWrapper = styled.section`
  ${({ theme }) => theme.mixins.flexCenter}
  width: min(100%, 1600px);
  flex-direction: column;
  height: 100%;
`

const Hero = styled.article`
  /* flex-direction: column; */
  ${({ theme }) => theme.mixins.flexCenter}
  margin-top: var(--mobile-nav-height);
  position: relative;
  /* z-index: -1; */
  min-width: 100%;
  min-height: 60vh;
  overflow: hidden;

  video {
    object-fit: cover;
    /* object-position: center; */
    /* object-position: center; */

    position: absolute;
    min-height: 100%;
    min-width: 100%;
    z-index: -2;
  }

  @media (min-width: 1080px) {
    margin-top: var(--desktop-nav-height);
    min-height: calc(90vh - var(--desktop-nav-height));
    video {
    }
  }
`

const HeroContent = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  min-height: 50%;
  z-index: 0;
  bottom: 0;
  left: 0;
  margin: 2rem;
  h1 {
    font-size: clamp(var(--fz-4), 5vw, var(--fz-15));
    font-family: var(--p-font);
    color: var(--secondary);
    span {
      color: var(--accent);
      letter-spacing: 2px;
    }
  }

  @media (min-width: 1080px) {
    margin: 6rem;
    h1 {
      span {
        letter-spacing: 5px;
      }
    }
  }
`

const HeroButtons = styled.div`
  ${({theme}) => theme.mixins.flexCenter}
  flex-direction: column;
  align-items: flex-start;
  /* position: absolute; */
  /* margin: 0; */
  width: 100%;
  /* z-index: 2; */
  margin-top: 1rem;
  button {
    margin: 0.5rem 0;
    padding: 1rem;
    width: 100%;
    &:hover {
      cursor: pointer;
      /* background: none; */
    }
  }
  
  @media (min-width: 1080px) {
    justify-content: flex-start;
    flex-direction: row;
    width: 100%;
    button {
    margin-right: 2rem;

    }
  }
`

const IndexPage = () => {
  const [playVideo, setPlayVideo] = useState(true)
  const vidRef = useRef(null)

  useEffect(() => {
    if (playVideo === false) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }, [playVideo])

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
        </HeroContent>
      </Hero>
      <HomePageWrapper></HomePageWrapper>

      {/* <HomePageWrapper>
        <VideoContainer onClick={togglePlayPause}>
          <video
            onClick={handlePlayVideo}
            autoPlay
            ref={vidRef}
            playsInline
            loop
          >
            <source
              src="//cdn.shopify.com/s/files/1/0352/6367/6475/t/51/assets/video.mp4?v=176295901941828733541639625563"
              type="video/mp4"
            />
            Your browser does not support HTML video.
          </video>
          <Overlay>
            <h1>
              Hard To Brew,
              <br />
              Easy To Love.
            </h1>
          </Overlay>
        </VideoContainer>
        <h1>Index Page</h1>
        <PrimaryButton
          text={`Buy Online`}
          onClick={() => navigate("shop")}
        />
        <SecondaryButton
          text={`Buy In Store`}
          onClick={() => navigate("locations")}
        />
      </HomePageWrapper> */}
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
