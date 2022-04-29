import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./Header"
import GlobalStyle from "../styles/GlobalStyle"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "../styles/theme"
/* ${({ theme }) => theme.mixins.flexCenter} */

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
        </Site>
      </ThemeProvider>
    </>
  )
}

// POSSIBLE ERROR WITH { propTypes } MISSING, TRY FIRST

export default Layout
