import React from "react"
import PropTypes from "prop-types"

const Main = ({ view, children }) => {
  const childrenCloned = React.cloneElement(children, { view })

  return (
    <main id="main" data-view={view} aria-atomic="true">
      {childrenCloned}
    </main>
  )
}

Main.propTypes = {
  view: PropTypes.string,
  children: PropTypes.any,
}

export default Main
