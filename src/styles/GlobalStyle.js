import { createGlobalStyle } from "styled-components"
import variables from "./variables"

const GlobalStyle = createGlobalStyle`
  ${variables}

  ////////// FONTS
  ////////// 
  ////////// 
  ////////// 
  @font-face {
    font-family: Larsseit;
    font-display: swap;
    src: url('https://cdn.shopify.com/s/files/1/0352/6367/6475/files/Larsseit.ttf?v=1585817649');
    font-weight: 400;
  }
  @font-face {
    font-family: MeekDPMedium;
    font-display: swap;
    src: url('https://cdn.shopify.com/s/files/1/0352/6367/6475/t/51/assets/Meek_Display_v0.2-Medium.otf?v=5992236951338147950');
    font-weight: 400;
  }
  @font-face {
    font-family: MeekDPBlack;
    font-display: swap;
    src: url('https://cdn.shopify.com/s/files/1/0352/6367/6475/t/51/assets/Meek_Display_v0.2-Black.otf?v=5692274455165416449');
    font-weight: 400;
  }
  @font-face {
    font-family: MeekDPSuper;
    font-display: swap;
    src: url('https://cdn.shopify.com/s/files/1/0352/6367/6475/t/51/assets/Meek_Display_v0.2-Super.otf?v=6630240497740892830');
    font-weight: 400;
  }
  @font-face {
    font-family: MeekDPBold;
    font-display: swap;
    src: url('https://cdn.shopify.com/s/files/1/0352/6367/6475/t/51/assets/Meek_Display_v0.2-Bold.otf?v=968513694871126778');
    font-weight: 400;
  }

  ////////// GLOBALS
  ////////// 
  ////////// 
  ////////// 
  *,
  *:before,
  *:after {
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

  ////////// SEMANTIC ELEMENTS
  ////////// 
  ////////// 
  ////////// 
  body {
    width: 100%;
    height: 100%;
    color: #000000;
    background: #efefef;
  }
  
  main {}
  header {}
  footer {}
  section {}
  article {}
  tbody {}
  thead {}
  tfoot {}
  th {}
  tr {}
  ol {}
  ul {}
  li {}
  button {}
  input {}
  form {}
  select {}


  ////////// TEXT ELEMENTS
  ////////// 
  ////////// 
  ////////// 
  // Adjust Sizes & Colors from Figma
  h1 {
    color: #000000;
    font-size: 5rem;
    letter-spacing: 3.5px;
  }

  h2 {
    color: #000000;
    font-size: 4rem;
    letter-spacing: 3.5px;
  }

  h3 {
    color: #000000;
    font-size: 3rem;
    letter-spacing: 3.5px;
  }

  h4 {
    color: #000000;
    font-size: 2.5rem;
    letter-spacing: 3.5px;
  }

  h5 {
    color: #000000;
    font-size: 2rem;
    letter-spacing: 3.5px;
  }

  h6 {
    color: #000000;
    font-size: 1.5rem;
    letter-spacing: 3.5px;
  }

  span {
    color: #000000;
    font-size: 1.5rem;
    letter-spacing: 1px;
  }

  a {
    color: #000000;
    font-size: 1rem;
  }

  p {
    color: #000000;
    font-size: 1rem;
  }
`

export default GlobalStyle
