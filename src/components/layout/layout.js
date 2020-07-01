import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import "./layout.module.css"
import { useWindow } from "../../hooks"
import Header from "./header/header"
import Main from "./main/main"

const Layout = ({ children }) => {
  const w = typeof window !== "undefined" ? window : null
  const [isClient, setIsClient] = useState(false)
  const { view } = useWindow(w)

  useEffect(() => {
    //   onLoad, fire this effect, setStateX causes a re-render to hydrate
    setIsClient(prev => (!prev ? true : prev))
  }, [])

  // TODO: siteMetadata
  return (
    isClient && (
      <>
        <Header view={view} />
        <Main view={view} children={children} />
        {/* <Footer view={view} /> */}
      </>
    )
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
