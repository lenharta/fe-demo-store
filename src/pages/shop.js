import * as React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import PrimaryButton from "../components/PrimaryButton"
import Seo from "../components/Seo"

const MainShopPage = () => {
  return (
    <>
      <Layout>
        <Seo title="Shop | Flying Embers" /> 
        <section>
          {/* TEMPORARY BUTTON */}
          <PrimaryButton text={"Go Home"} onClick={() => navigate("/")} />
        </section>
      </Layout>
    </>
  )
}

export default MainShopPage
