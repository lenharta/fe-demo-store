import * as React from "react"
import { navigate } from "gatsby"

import Layout from "../components/Layout"
import PrimaryButton from "../components/PrimaryButton"
import Seo from "../components/Seo"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Seo title="Home | Flying Embers" />
        <section>
          <p>Section Container</p>
          <h3>Index Page</h3>
          <PrimaryButton text="Go to Error" onClick={() => navigate("404")} />
        </section>
      </Layout>
    </>
  )
}

export default IndexPage

////////// PROJECT RULES
//////////
//////////
//////////
// 
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
// 
