import * as React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import PrimaryButton from "../components/PrimaryButton"

const ConstructionPage = () => {
  return (
    <>
      <Layout>
        <h1>Construction Page</h1>
        <h3>**Not with Production Build**</h3>
        <br />
        <PrimaryButton text="Go Home" onClick={() => navigate("/")} />
        <br />

        {/* FOR EXAMPLE PURPOSES, WILL DELETE */}
        <ExampleLarrisett>
          <h1>larrisett</h1>
          <h2>larrisett</h2>
          <h3>larrisett</h3>
          <h4>larrisett</h4>
          <h5>larrisett</h5>
          <h6>larrisett</h6>
          <span>larrisett</span><br />
          <p>larrisett</p>
        </ExampleLarrisett>
        <hr />
        <ExampleMeekMD>
          <h1>MEEK MEDIUM</h1>
          <h2>MEEK MEDIUM</h2>
          <h3>MEEK MEDIUM</h3>
          <h4>MEEK MEDIUM</h4>
          <h5>MEEK MEDIUM</h5>
          <h6>MEEK MEDIUM</h6>
          <span>MEEK MEDIUM</span><br />
          <p>MEEK MEDIUM</p>
        </ExampleMeekMD>
        <hr />
        <ExampleMeekBLK>
          <h1>MEEK Black</h1>
          <h2>MEEK Black</h2>
          <h3>MEEK Black</h3>
          <h4>MEEK Black</h4>
          <h5>MEEK Black</h5>
          <h6>MEEK Black</h6>
          <span>MEEK Black</span><br />
          <p>MEEK Black</p>
        </ExampleMeekBLK>
        <hr />
        <ExampleMeekSuper>
          <h1>MEEK Super</h1>
          <h2>MEEK Super</h2>
          <h3>MEEK Super</h3>
          <h4>MEEK Super</h4>
          <h5>MEEK Super</h5>
          <h6>MEEK Super</h6>
          <span>MEEK Super</span><br />
          <p>MEEK Super</p>
        </ExampleMeekSuper>
        <hr />
        <ExampleMeekBold>
          <h1>MEEK Bold</h1>
          <h2>MEEK Bold</h2>
          <h3>MEEK Bold</h3>
          <h4>MEEK Bold</h4>
          <h5>MEEK Bold</h5>
          <h6>MEEK Bold</h6>
          <span>MEEK Bold</span><br />
          <p>MEEK Bold</p>
        </ExampleMeekBold>
        {/* FOR EXAMPLE PURPOSES, WILL DELETE */}
      </Layout>
    </>
  )
}

export default ConstructionPage

// FOR EXAMPLE PURPOSES, WILL DELETE
const ExampleLarrisett = styled.div`
  font-family: Larsseit !important;
  color: white;
`
const ExampleMeekMD = styled.div`
  font-family: MeekDPMedium !important;
  color: white;
`
const ExampleMeekBLK = styled.div`
  font-family: MeekDPBlack !important;
  color: white;
`
const ExampleMeekSuper = styled.div`
  font-family: MeekDPSuper !important;
  color: white;
`
const ExampleMeekBold = styled.div`
  font-family: MeekDPBold !important;
  color: white;
`
// FOR EXAMPLE PURPOSES, WILL DELETE