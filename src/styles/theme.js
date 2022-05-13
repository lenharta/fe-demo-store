import { css } from "styled-components"
import mixins from "./mixins"

export const Theme = {
  mixins,

  ////////// GLOBAL {  }
  body: css`
    background: var(--primary);
  `,

  pageWrapper: css`
    ${({ theme }) => theme.mixins.flexCenter}
    margin-top: var(--mobile-nav-height);
    width: min(100%, 1600px);
    flex-direction: column;
    min-height: 100vh;
    padding: 1rem;

    @media (min-width: 1080px) {
      // WILL BE PADDING FOR DESKTOP NAV
      padding: 2rem;
    }
  `,

  resetList: css`
    margin: 0;
    padding: 0;
    list-style: none;
  `,

  resetButton: css`
    margin: 0;
    padding: 0;
    border: none;
  `,

  ////////// HEADINGS
  bigHeading: css`
    margin: 0;
    font-size: clamp(1rem, 8vw, 2rem);
  `,
  // mediumHeading: css`
  //   margin: 0;
  //   font-size: clamp(40px, 8vw, 60px);
  // `,
  // smallHeading: css`
  //   margin: 0;
  //   font-size: clamp(40px, 8vw, 60px);
  // `,

  numberedHeading: css``,

  ////////// LINKS
  styledLink: css`
    :hover {
      opacity: 0.8;
    }
    text-decoration-color: none;
    text-decoration-style: none;
    text-decoration: none;
    cursor: pointer;
  `,

  ////////// BUTTON COMPONENTS
  toTopComponent: css`
    background: var(--accent);
    color: var(--primary);
    border-radius: var(--br-round);
    border: var(--border-outline);
    :hover {
      opacity: var(--hover-opacity);
    }
  `,
  primaryButtonComponent: css`
    color: ${props =>
      props.accented === true ? `var(--accent)` : `var(--primary)`};
    background: ${props =>
      props.accented === true ? `var(--primary)` : `var(--accent)`};
    border: ${props =>
      props.accented === true ? `var(-border-button-accent)` : `var(--border-button)`};
    :hover {
      opacity: var(--hover-opacity);
      color: var(--secondary);
    }
  `,
  secondaryButtonComponent: css`
    border: var(--border-button);
    color: var(--accent);
    background: var(--primary);
    :hover {
      opacity: var(--hover-opacity);
      color: var(--secondary);
    }
  `,

  ////////// UTILITIES
  outlinedTextPrimary: css`
    @supports (-webkit-text-stroke: 3px transparent) {
      -webkit-text-stroke: 3px var(--primary);
      -webkit-text-fill-color: transparent;
    }
  `,
  outlinedTextSecondary: css`
    @supports (-webkit-text-stroke: 3px transparent) {
      -webkit-text-stroke: 3px var(--secondary);
      -webkit-text-fill-color: transparent;
    }
  `,
}

// ( TODO ) => MAKE LIGHT THEME ONCE ELEMENTS ARE PLACED, COULD ALSO TRY A DIFFERENT WAY WITH JUST REPLACING VARIABLES
// export const lightTheme = {
//   mixins,
// }

// Text Elements
// h1: css``,
// h2: css``,
// h3: css``,
// h4: css``,
// h5: css``,
// h6: css``,

// span: css``,
// a: css``,
// p: css``
