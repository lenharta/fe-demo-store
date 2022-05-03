import * as React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import PrimaryButton from "../components/PrimaryButton"
import Seo from "../components/Seo"

const LocationsPage = () => {
  return (
    <>
      <Layout>
        <Seo title="Locations | Flying Embers" />
        <section>
          {/* TEMPORARY BUTTON */}
          <PrimaryButton text={"Go Home"} onClick={() => navigate("/")} />
        </section>
      </Layout>
    </>
  )
}

export default LocationsPage