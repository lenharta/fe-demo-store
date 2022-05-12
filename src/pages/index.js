import * as React from "react"
import { useState, useRef } from "react"
import { navigate } from "gatsby"
import { motion } from "framer-motion"
import styled from "styled-components"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import PrimaryButton from "../components/PrimaryButton"
import SecondaryButton from "../components/SecondaryButton"

const PageWrapper = styled.section`
  ${props => props.theme.pageWrapper}
`

const VideoContainer = styled.div`
  max-height: calc(100vh - var(--mobile-nav-height));
  display: inline-block;
  width: 100%;
  video {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`

const Overlay = styled.div`
  position: relative;
  width: 100%;
  top: 0;
  left: 0;

  h1 {
    font-size: clamp(var(--fz-4), 4vw, var(--fz-5));
    color: var(--secondary);
  }
`

const IndexPage = () => {
  const [playVideo, setPlayVideo] = useState(true)
  const togglePlayPause = () => setPlayVideo(!playVideo)

  const vidRef = useRef(null)

  function handlePlayVideo() {
    if (playVideo === true) {
      vidRef.current.play()
    } else if (playVideo === false) {
      vidRef.current.pause()
    }
  }

  return (
    <Layout>
      <Seo title="Home | Flying Embers" />
      <PageWrapper>
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
        {/* <h1>Index Page</h1> */}
        {/* <PrimaryButton
          text={`Buy Online`}
          onClick={() => navigate("shop")}
        />
        <SecondaryButton
          text={`Buy In Store`}
          onClick={() => navigate("locations")}
        /> */}
      </PageWrapper>
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
