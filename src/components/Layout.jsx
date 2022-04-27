import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Nav from "./Nav"
import GlobalStyle from "../styles/GlobalStyle"

const SiteContent = styled.div`
  main {}
`
const Footer = styled.div`
  div {
    color: rgba(0,0,0,0.4);
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query siteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Nav siteTitle={data.site.siteMetadata?.title || `Title`} />
      <SiteContent>
        <main>{children}</main>
        <Footer>
          {/* MAY WRAP TEXT WITH <p></p> */}
          <div>
            @ <a href="https://www.flyingembers.com/">Flying Embers</a>,{" "}
            {new Date().getFullYear()}
          </div>
          <div>
            Built with <a href="https://www.gatsbyjs.com">Gatsby</a> and{" "}
            <a href="https://www.shopify.com">Shopify</a>
          </div>
          <div>
            View the{" "}
            <a href="https://github.com/lenharta/fe-demo-store">Source Code</a>
          </div>
        </Footer>
      </SiteContent>
    </>
  )
}

// POSSIBLE ERROR WITH { propTypes } MISSING, TRY FIRST

export default Layout
