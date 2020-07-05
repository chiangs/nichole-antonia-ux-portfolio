import React, { useState, useEffect } from "react"
import { useTransition, animated as a } from "react-spring"
import css from "../pages-css/index.module.css"
import { Brand, Image, Card, Contact } from "../components"
import { useSiteMetadata } from "../hooks"
import Quote from "../assets/quote-close.svg"

const IndexPage = ({ view }) => {
  const profilePicSrc = "/profile.jpg"
  const profilePicAlt = "Nichole Antonia profile standing"
  const tempCopy =
    "I am a UX designer with a background in Healthcare. I strive to design assesible and desireable products that benefits both the  the end user and the customer."
  const tempTestimonial =
    "...Nichole has shown great promise and diligence throughout the UXD programme thus far, and we cannot wait to see what she has to display and deliver during the course of the programme. She goes above and beyond from what is expected of her on a daily basis..."
  const tempTestAuthor = "Jacques Louw and Candice Kruger"
  const tempTestAuthor2 = "UXD teachers, Noroff"
  const profilePicDimensions = {
    height: 209,
    width: 154,
  }
  const { title } = useSiteMetadata()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const transitions = useTransition(mounted, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const content = transitions.map(
    ({ item, key, props }) =>
      item && (
        <a.article className={css.Index} key={key} style={props}>
          <section className={css.Index__Section}>
            <Brand>
              <h1>{title}</h1>
            </Brand>
          </section>
          <section className={css.Index__Section}>
            <Image
              src={profilePicSrc}
              alt={profilePicAlt}
              dimensions={profilePicDimensions}
            />
            <p className={css.Copy__Intro}>{tempCopy}</p>
          </section>
          <section className={css.Index__Section}>
            <Card>
              <div className={css.Card__Container}>
                <div className={css.Copy__QuoteImage}>
                  <Quote />
                </div>
                <blockquote>
                  <p className={css.Testimonial}>{tempTestimonial}</p>
                  <p className={css.Testimonial__Author}>{tempTestAuthor}</p>
                  <p className={css.Testimonial__Author}> {tempTestAuthor2}</p>
                </blockquote>
              </div>
            </Card>
          </section>
          <section className={css.Index__Section}>
            <Card>
              <div className={css.Card__Container}>
                <Contact />
              </div>
            </Card>
          </section>
        </a.article>
      )
  )

  return <>{content}</>
}

export default IndexPage
