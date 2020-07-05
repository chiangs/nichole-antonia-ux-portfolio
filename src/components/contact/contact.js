import React from "react"
import css from "./contact.module.css"
import LinkedIn from "../../assets/linkedin.svg"
import Email from "../../assets/email.svg"

const contact = props => {
  const tempContactCopyPhone = `+47 968 49 108`
  const tempContactEmail = `antonia.nichole.ux@gmail.com`
  return (
    <section className={css.Contact}>
      <Email />
      <div className={css.Contact__Info}>
        <p>
          <a href={`tel:${tempContactCopyPhone}`}>{tempContactCopyPhone}</a>
        </p>
        <p>
          <a href={`mailto:${tempContactEmail}`}>{tempContactEmail}</a>
        </p>
      </div>
      <LinkedIn />
    </section>
  )
}

export default contact
