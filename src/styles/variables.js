import { css } from "styled-components"

const variables = css`
  :root {
    ////////// FONTS
    --pop-font: 'Poppins', sans-serif !important;
    --p-font-bld: MeekDPBold !important;
    --p-font-blk: MeekDPBlack !important;
    --p-font-sup: MeekDPSuper !important;
    --p-font: MeekDPMedium !important;
    --s-font: Larsseit !important;
    

    ////////// COLORS
    --primary: rgba(0, 0, 0, 1);
    --accent-p: rgba(32, 29, 30, 1);
    --secondary: rgba(255, 255, 255, 1);
    --accent: rgba(185, 140, 71, 1);
    --outline-border: rgba(255, 255, 255, 0.25);

    ////////// FONT SIZE
    --fz-1: 0.75rem;
    --fz-2: 1rem;
    --fz-3: 1.5rem;
    --fz-4: 2rem;
    --fz-5: 2.5rem;
    --fz-6: 3rem;
    --fz-7: 3.5rem;
    --fz-8: 4rem;
    --fz-9: 4.5rem;
    --fz-10: 5rem;
    --fz-11: 5.5rem;
    --fz-12: 6rem;

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
