import React from "react"
import PropTypes from "prop-types"
import css from "./text-group.module.css"

const TextGroup = ({ text }) => {
  return <p className={css.TextGroup}>{text}</p>
}

TextGroup.propTypes = {
  text: PropTypes.string,
}

export default TextGroup
