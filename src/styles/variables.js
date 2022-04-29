import { css } from "styled-components"

const variables = css`
  :root {
    ////////// FONTS
    --p-font: MeekDPMedium !important;
    --p-font-blk: MeekDPBlack !important;
    --p-font-sup: MeekDPSuper !important;
    --p-font-bld: MeekDPBold !important;
    --s-font: Larsseit !important;

    ////////// COLORS
    --primary: rgba(0, 0, 0, 1);
    --second: rgba(255, 255, 255, 1);
    --accent: rgba(185, 140, 71, 1);
    --accent-2: rgba(32, 29, 30, 1);

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

    ////////// BORDERS
    // {ADD COLORS IN THEME.JS}
    --border-sz-1: solid 2px;
    --border-sz-2: solid 3px;
    --border-sz-3: solid 4px;

    ////////// BORDER RADIUS
    // {MAY CHANGE}
    --br-1: 10px;
    --br-2: 15px;
    --br-3: 25px;

    ////////// FILTERS
    // {MAY CHANGE}
    --blur-1: blur(10px);
    --blur-2: blur(20px);
    --blur-3: blur(30px);
  }
`

export default variables
