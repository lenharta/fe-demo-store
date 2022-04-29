import * as React from "react"
import { navigate } from "gatsby"

import Layout from "../components/Layout"
import PrimaryButton from "../components/PrimaryButton"
import Seo from "../components/Seo"

const NotFoundPage = () => {
  return (
    <>
      <Layout>
        <Seo title="Page Not Found | Flying Embers" />
        <header></header>
        <PrimaryButton text={"Go Home"} onClick={() => navigate("/")} />
      </Layout>
    </>
  )
}

export default NotFoundPage
