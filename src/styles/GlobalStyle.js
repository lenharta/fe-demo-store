import { createGlobalStyle } from "styled-components"
import variables from "./variables"

const GlobalStyle = createGlobalStyle`
  ${variables}

  ////////// FONTS
  @font-face {
    font-family: 'Poppins', sans-serif;
    font-display: swap;
    src: url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;1,400;1,600&family=Poppins:ital,wght@0,300;0,900;1,300;1,900&display=swap');
  }
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
  ////////// GLOBAL RESET
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    outline: 0;
    font-size: 100%;
    box-sizing: border-box;
    background: transparent;
    scroll-behavior: smooth;
    vertical-align: baseline;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  ////////// GLOBAL SEMANTIC ELEMENTS
  html {
    width: 100%;
  }
  body {
    ${props => props.theme.body}
    width: 100%;
    min-height: 100%;
  }
  article {
    ${({ theme }) => theme.mixins.flexCenter}
    width: 100%;
    padding: 0 1rem; 
  }
  section {
    width: 100%
  }
  h1,
  h2,
  h3,
  h4 {
    margin: 0 0 10px 0;
    line-height: 1.1;
  }
  a {
  }
`

export default GlobalStyle
//////////
//////////
//////////
//////////
//////////
//////////
//////////
//////////
//////////
//////////
//////////
//////////
/* body {} */
/* main {} */
/* header {} */
/* footer {} */
/* section {} */
/* article {} */
/* tbody {} */
/* thead {} */
/* tfoot {} */
/* th {} */
/* tr {} */
/* ol {} */
/* ul {} */
/* li {} */
/* select {} */
/* button {} */
/* input {} */
/* form {} */
