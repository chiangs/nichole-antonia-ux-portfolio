import React from "react"
import css from "./contact.module.css"
import LinkedIn from "../../assets/linkedin.svg"
import Email from "../../assets/email.svg"
import Phone from "../../assets/phone.svg"

const contact = props => {
  const tempContactCopyPhone = `+47 968 49 108`
  const tempContactEmail = `antonia.nichole.ux@gmail.com`
  const tempLinkedIn = `https://www.linkedin.com/in/nichole-antonia/`
  const templLinkedInText = `linkedin.com/in/nichole-antonia/`
  return (
    <section className={css.Contact}>
      <ul className={css.Contact__Info}>
        <li className={css.Info__Item}>
          <Email />
          <a href={`mailto:${tempContactEmail}`}>{tempContactEmail}</a>
        </li>

        <li className={css.Info__Item}>
          <Phone />
          <a href={`tel:${tempContactCopyPhone}`}>{tempContactCopyPhone}</a>
        </li>

        <li className={css.Info__Item}>
          <LinkedIn />
          <a href={tempLinkedIn}>{templLinkedInText}</a>
        </li>
      </ul>
    </section>
  )
}

export default contact
