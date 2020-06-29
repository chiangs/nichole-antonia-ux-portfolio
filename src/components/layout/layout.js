import React from "react"
import PropTypes from "prop-types"
import Header from "./header/header"
import Main from "./main/main"
import Footer from "./footer/footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header view={view} />
      <Main view={view} children={children} />
      <Footer view={view} />
    </>
  )
}

Layout.propTypes = {}

export default Layout
view = { view }
