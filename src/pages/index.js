import * as React from "react"
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

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home | Flying Embers" />
      <PageWrapper>
        
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
