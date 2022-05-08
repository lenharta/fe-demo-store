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

export const pageTransitionLeft = {
  hidden: {
    x: window.innerWidth * 2,
    opacity: 0
  },
  show: {
    type: "spring",
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    }
  }
};
export const pageTransitionRight = {
  hidden: {
    x: window.innerWidth * -2,
    opacity: 0
  },
  show: {
    type: "spring",
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    }
  }
};
export const pageTransitionUp = {
  hidden: {
    y: window.innerHeight * 2,
    opacity: 0
  },
  show: {
    type: "spring",
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    }
  }
};

export const textTransitionDown = {
  hidden: {
    type: "spring",
    opacity: 0,
    y: -150,
    transition: {
      delay: 0.4,
      duration: 0.4
    }
  },
  show: {
    type: "spring",
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.4
    }
  }
};
export const textTransitionSide = {
  hidden: {
    type: "spring",
    opacity: 0,
    y: -150,
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      delayChildren: 0.3
    }
  },
  show: {
    type: "spring",
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    }
  }
};
