import React from "react"
import PropTypes from "prop-types"
import css from "./bar.module.css"

const Bar = ({ value }) => {
  return (
    <div className={css.Bar__Container}>
      <div className={css.Bar__Top}></div>
      <div className={css.Bar__Bottom}></div>
    </div>
  )
}

Bar.propTypes = {}

export default Bar
