import React from "react"
import css from "./brand.module.css"

const Brand = ({ children }) => {
  return <div className={css.Brand}>{children}</div>
}

export default Brand
