/////////////
/////////////
/////  GLOBAL TRANSITIONS
/////////////
/////////////

export const toTopButton = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        type: "spring",
        stiffness: 100,
      },
    },
  },
}
