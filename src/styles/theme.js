import { css } from "styled-components"
import mixins from "./mixins"

export const darkTheme = {
  mixins,

  //////////
  ////////// GLOBAL
  body: css`
    background: var(--primary);
  `,

  //////////
  ////////// PAGES
  indexPage: css``,
  notFoundPage: css``,
  aboutPage: css``,
  cartPage: css``,
  locationsPage: css``,
  shopPage: css``,
  userPage: css``,

  //////////
  ////////// LAYOUT COMPONENTS
  layoutComponent: css``,
  headerComponent: css`
    background: var(--primary);
    p {
      color: var(--accent);
    }
    svg {
      color: var(--accent);
      :hover {
        opacity: var(--hover-opacity);
      }
    }
  `,

  //////////
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
      props.accented === true ? `none` : `var(--border-button)`};
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

  //////////
  ////////// UTILIT
  // ( NOTE ) => FIX UNEVEN BORDERS IN REFACTORING
  // border classes
  layoutBorderClass: css`
    border: var(--layout-border);
  `,
  // Text classes
  heroTitleOne: css`
    color: var(--secondary);
  `,
  heroTitleTwo: css`
    color: var(--secondary);
  `,
  heroTitleThree: css`
    color: var(--accent);
  `,
  outlinedTextPrimary: css`
    @supports (-webkit-text-stroke: 3px var(--primary)) {
      -webkit-text-stroke: 3px var(--primary);
      -webkit-text-fill-color: transparent;
    }
  `,
  outlinedTextSecondary: css`
    @supports (-webkit-text-stroke: 3px var(--secondary)) {
      -webkit-text-stroke: 3px var(--secondary);
      -webkit-text-fill-color: transparent;
    }
  `,

  outlinedHeading: css`
    @supports (-webkit-text-stroke: 3px transparent) {
      h1 {
        -webkit-text-stroke: 3px orange;
        -webkit-text-fill-color: transparent;
      }
      h2 {
        -webkit-text-stroke: 3px orange;
        -webkit-text-fill-color: transparent;
      }
      h3 {
        -webkit-text-stroke: 3px orange;
        -webkit-text-fill-color: transparent;
      }
      h4 {
        -webkit-text-stroke: 3px orange;
        -webkit-text-fill-color: transparent;
      }
      h5 {
        -webkit-text-stroke: 3px orange;
        -webkit-text-fill-color: transparent;
      }
      h6 {
        -webkit-text-stroke: 3px orange;
        -webkit-text-fill-color: transparent;
      }
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
