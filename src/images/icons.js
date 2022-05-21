import React from "react"
import PropTypes from "prop-types"
import { MdMenu, MdClose } from "react-icons/md"
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaLinkedinIn,
  FaExternalLinkAlt,
  FaAngleRight,
  FaAngleLeft,
  FaAngleUp,
  FaAngleDown
} from "react-icons/fa"

const Icons = ({ name }) => {
  switch (name) {
    case "Close":
      return <MdClose />
    case "Facebook":
      return <FaFacebook />
    case "Hamburger":
      return <MdMenu />
    case "Instagram":
      return <FaInstagram />
    case "LinkedIn":
      return <FaLinkedinIn />
    case "Pinterest":
      return <FaPinterest />
    case "Up":
      return <FaAngleUp />
    case "Down":
      return <FaAngleDown />
    case "Right":
      return <FaAngleRight />
    case "Left":
      return <FaAngleLeft />
    default:
      return <FaExternalLinkAlt />
  }
}

Icons.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icons
