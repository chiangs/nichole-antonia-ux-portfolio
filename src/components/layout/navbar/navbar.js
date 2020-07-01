import React from "react"
import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import css from "./navbar.module.css"
import Logo from "../../../assets/logo.svg"

const Navbar = ({ view }) => {
  const routes = [
    {
      label: "Work",
      path: "/work",
    },
    {
      label: "About",
      path: "/about",
    },
  ]

  const routeToHome = () => navigate("/")

  const links = routes.map(r => (
    <Link
      key={r.label}
      className={css.NavbarLinks}
      activeClassName={css.NavbarLinksActive}
      to={r.path}
    >
      {r.label}
    </Link>
  ))

  return (
    <nav id="navbar" className={css.Navbar}>
      <Logo onClick={routeToHome} />
      <ul className={css.NavbarList}>{links}</ul>
    </nav>
  )
}

Navbar.propTypes = {
  view: PropTypes.string,
}

export default Navbar
