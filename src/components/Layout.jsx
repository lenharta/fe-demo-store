import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import ToTopButton from "./ToTopButton"

import styled from "styled-components"
import { darkTheme } from "../styles/theme"
import GlobalStyle from "../styles/GlobalStyle"
import { ThemeProvider } from "styled-components"

const Site = styled.div`
  ${({ theme }) => theme.mixins.flexEnd}
  width: 100%;
`

const Content = styled.div`
  width: 90%;
  height: 100%;
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
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Site>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <Content>
            <main>{children}</main>
            <footer>
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
                <a href="https://github.com/lenharta/fe-demo-store">
                  Source Code
                </a>
              </div>
            </footer>
          </Content>
          <ToTopButton
            onClick={() => window.scrollTo(0, 0)}
            disabled={window.location.scrollX === 0}
          />
        </Site>
      </ThemeProvider>
    </>
  )
}

// POSSIBLE ERROR WITH { propTypes } MISSING, TRY FIRST

export default Layout

/* ${({ theme }) => theme.mixins.flexCenter} */
