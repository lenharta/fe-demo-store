import * as React from "react"
import { useStaticQuery, graphql, Link, location } from "gatsby"
import PropTypes from "prop-types"

import Header from "./Header"
import ToTopButton from "./ToTopButton"

import styled from "styled-components"
import { Theme } from "../styles/theme"
import GlobalStyle from "../styles/GlobalStyle"
import { ThemeProvider } from "styled-components"

const Content = styled.div`
  width: 100%;
  height: 100%;

  main {
    ${({ theme }) => theme.mixins.flexCenter}
    flex-direction: column; 
    margin: 0 auto;
    width: 100%;
  }

  footer {
    ${({ theme }) => theme.mixins.flexCenter}
    width: 100%;
  }
`

const Layout = ({ children, location }) => {
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
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Content>
        <main location={location}>{children}</main>
        <footer>
          <address></address>
        </footer>
      </Content>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};



  /* <div>
  @ <Link href="https://www.flyingembers.com/">Flying Embers</Link>,{" "}
  {new Date().getFullYear()}
</div>
<div>
  Built with <Link href="https://www.gatsbyjs.com">Gatsby</Link> and{" "}
  <Link href="https://www.shopify.com">Shopify</Link>
</div>
<div>
  View the{" "}
  <Link href="https://github.com/lenharta/fe-demo-store">
    Source Code
  </Link>
</div> */



  /* <ToTopButton
  onClick={() => window.scrollTo(0, 0)}
  disabled={window.location.scrollX === 0}
/> */

// POSSIBLE ERROR WITH { propTypes } MISSING, TRY FIRST

export default Layout

/* ${({ theme }) => theme.mixins.flexCenter} */
