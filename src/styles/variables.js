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
    --accent-section: rgba(51, 51, 51, 1);
    --secondary: rgba(255, 255, 255, 1);
    --accent: rgba(185, 140, 71, 1);
    --grayscale: rgba(200, 200, 200, 0.7);

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
    --br-round: 50%;

    ////////// BUTTON VARIABLES
    --hover-opacity: 0.8;

    ////////// BORDERS
    // {ADD COLORS IN THEME.JS}
    --border-outline-sm: solid 1px var(--outline-border);
    --border-outline-md: solid 3px var(--outline-border);
    --border-outline-lg: solid 5px var(--outline-border);
    --layout-border: solid 2.5px var(--outline-border);
    --border-button: solid 3px var(--accent);
    
    ////////// NAVIGATION
    --mobile-nav-height: 5rem;
    --desktop-nav-height: 6.25rem;
    
  }
`

export default variables
