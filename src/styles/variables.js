import { css } from "styled-components"

const variables = css`
  :root {
    ////////// FONTS
    --p-font: MeekDPMedium !important;
    --p-font-bld: MeekDPBold !important;
    --p-font-blk: MeekDPBlack !important;
    --p-font-sup: MeekDPSuper !important;
    --s-font: 'Poppins', sans-serif !important;
    --th-font: Larsseit !important;

    ////////// COLORS
    --primary: rgba(0, 0, 0, 1);
    --accent-p: rgba(32, 29, 30, 1);
    --secondary: rgba(255, 255, 255, 1);
    --accent: rgba(185, 140, 71, 1);
    --outline-border: rgba(255, 255, 255, 0.25);

    ////////// FONT SIZE
    --fz-1: 0.75em;
    --fz-2: 1em;
    --fz-3: 1.5em;
    --fz-4: 2em;
    --fz-5: 2.5em;
    --fz-6: 3em;
    --fz-7: 3.5em;
    --fz-8: 4em;
    --fz-9: 4.5em;
    --fz-10: 5em;
    --fz-11: 5.5em;
    --fz-12: 6em;
    --fz-13: 6.5em;
    --fz-14: 7em;
    --fz-15: 7.5em;

    ////////// BORDER RADIUS
    // {MAY CHANGE}
    --br-round: 50%;

    ////////// FILTERS
    // {MAY CHANGE}
    --blur-1: blur(10px);
    --blur-2: blur(20px);
    --blur-3: blur(30px);

    ////////// BUTTON VARIABLES
    --hover-opacity: 0.8;

    ////////// BORDERS
    // {ADD COLORS IN THEME.JS}
    --border-outline-sm: solid 1px var(--outline-border);
    --border-outline-md: solid 3px var(--outline-border);
    --border-outline-lg: solid 5px var(--outline-border);
    --layout-border: solid 2.5px var(--outline-border);
    --border-button: solid 3px var(--accent);
    

  }
`

export default variables
