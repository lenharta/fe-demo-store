import { createGlobalStyle } from "styled-components"
import variables from "./variables"

const GlobalStyle = createGlobalStyle`
  ${variables}

  ////////// FONTS
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
  ////////// GLOBAL RESET
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
    ${props => props.theme.headerComponent}
    ${props => props.theme.layoutBorderClass}
    border-right: none;
  }
  footer {
    ${props => props.theme.layoutBorderClass}
    border-top: none;
  }
  section {
    ${({ theme }) => theme.mixins.flexCenter}
    ${props => props.theme.layoutBorderClass}
    min-height: 100vh;
    width: 100%;
    padding: 6rem;
  }
  li {
    list-style-type: none;
  }
  ////////// TEXT ELEMENTS
  ////////// 
  h1 {
    font-size: var(--fz-12);
    letter-spacing: 3.5px;
    font-family: var(--p-font-bld);
  }
  h2 {
    font-size: var(--fz-9);
    letter-spacing: 3.5px;
    font-family: var(--p-font-sup);
  }
  h3 {
    font-size: var(--fz-6);
    letter-spacing: 3.5px;
  }
  h4 {
    font-size: var(--fz-5);
    letter-spacing: 3.5px;
  }
  span {
    font-size: var(--fz-2);
    font-family: var(--s-font);
  }
  a {
    font-size: var(--fz-2);
    font-family: var(--s-font);
    text-decoration-color: none;
    text-decoration: none;
  }
  p {
    font-size: var(--fz-2);
    font-family: var(--s-font);
  }
  ////////// BUTTONS & INPUTS
  ////////// 
  button {}
  select {}
  input {}
  form {}
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
