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
        <header>
          <h1>Error 404 - Page Not Found</h1>
        </header>
        <PrimaryButton text={"Go Home"} onClick={() => navigate("/")} />
      </Layout>
    </>
  )
}

export default NotFoundPage
