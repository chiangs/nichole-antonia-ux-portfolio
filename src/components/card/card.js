import React from "react"
import PropTypes from "prop-types"
import css from "./card.module.css"

const Card = ({ children }) => {
  return <section className={css.Card}>{children}</section>
}

TextBox.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Card
