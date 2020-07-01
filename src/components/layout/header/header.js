import React from "react"
import PropTypes from "prop-types"
import css from "./header.module.css"
import Navbar from "../navbar/navbar"

const Header = ({ view }) => {
  return (
    <header id="header" className={css.Header}>
      <Navbar view={view} />
    </header>
  )
}

Header.propTypes = {
  view: PropTypes.string,
}

export default Header
