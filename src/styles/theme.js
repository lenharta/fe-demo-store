import { css } from 'styled-components'
import mixins from './mixins'

export const darkTheme = {
  mixins,

  ////////// PAGES
  ////////// ===============
  indexPage: css``,
  
  routeNotFoundPage: css``,
  
  
  ////////// COMPONENTS
  ////////// ===============
  headerComponent: css`
    background: var(--primary);
    p {
      color: var(--accent);
    }

    svg {
      color: var(--accent);
      :hover {
        opacity: 0.7;
      }
    }
  `,

  toTopComponent: css`
    background: var(--accent);
    color: black;
  `,

  layoutComponent: css``,

  PrimaryButtonComponent: css``,

  SecondaryButtonComponent: css``,
}


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