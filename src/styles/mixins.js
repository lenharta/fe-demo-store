import { css } from "styled-components"
import { variables } from "./variables"

const mixins = {
  variables,

  // DISPLAYS
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexStart: css`
    display: flex;
    justify-content: start;
    align-items: start;
  `,

  flexEnd: css`
    display: flex;
    justify-content: end;
    align-items: end;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  flexAround: css`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,

  flexEven: css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `,
}

export default mixins