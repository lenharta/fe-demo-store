import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: MeekDPMedium !important; 
    src: url('../fonts/Meek_Display_v0.2-Medium.otf') format('opentype');
  }
    
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    box-sizing: border-box;
    scroll-behavior: smooth;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body {
    color: #000000;
    background: #efefef;
  }

`

export default GlobalStyle
