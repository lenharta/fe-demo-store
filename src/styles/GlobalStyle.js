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

  
  ////////// GLOBAL SEMANTIC ELEMENTS
  ////////// 
  body {
    ${props => props.theme.body}
  }

  header {
    ${(props) => props.theme.headerComponent}
    height: 100vh;
    position: fixed;
    padding: 5rem 1rem;
    width: 10%;
    left: 0;
    top: 0;
  }

  main {
    width: 100%;
  }
  section {
    ${({ theme }) => theme.mixins.flexCenter}
    width: 100%;
    height: 100vh;
  }
  li {
    list-style-type: none;
  }

  ////////// TEXT ELEMENTS
  ////////// 
  h1 {
    font-size: var(--fz-10);
    letter-spacing: 3.5px;
  }

  h2 {
    font-size: var(--fz-8);
    letter-spacing: 3.5px;
  }

  h3 {
    font-size: var(--fz-6);
    letter-spacing: 3.5px;
  }

  h4 {
    font-size: var(--fz-5);
    letter-spacing: 3.5px;
  }

  h5 {
    font-size: var(--fz-4);
    letter-spacing: 3.5px;
  }

  h6 {
    font-size: var(--fz-3);
    letter-spacing: 3.5px;
  }

  span {
    font-size: var(--fz-2);
  }

  a {
    font-size: var(--fz-2);
    text-decoration: none;
    text-decoration-color: none;
  }

  p {
    font-size: var(--fz-2);
  }

  ////////// BUTTONS & INPUTS
  ////////// 
  button {}
  select {}
  input {}
  form {}

`

export default GlobalStyle

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
