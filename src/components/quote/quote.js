import React from "react"
import PropTypes from "prop-types"
import css from "./quote.module.css"

const Quote = ({ text }) => {
  return <aside className={css.Quote}>{text}</aside>
}

Quote.propTypes = {
  text: PropTypes.string,
}

export default Quote
