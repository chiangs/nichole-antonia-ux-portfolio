import React from "react"
import PropTypes from "prop-types"
import css from "./footer.module.css"

const Footer = ({ view }) => {
  return <footer id="footer" className={css.Footer}></footer>
}

Footer.propTypes = {
  view: PropTypes.string,
}

export default Footer
