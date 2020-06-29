import React from "react"
import PropTypes from "prop-types"
import css from "./link.module.css"

const Link = ({ label, link, active }) => {
  return <li className={css.Link}></li>
}

Link.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
  active: PropTypes.boolean,
}

export default Link
