import React from "react"
import PropTypes from "prop-types"
import css from "./navbar.module.css"
import Link from "./link/link"

const Navbar = props => {
  return (
    <nav id="navbar" className={css.Navbar}>
      <ul className="nav--list">
        <Link />
      </ul>
    </nav>
  )
}

Navbar.propTypes = {}

export default Navbar
