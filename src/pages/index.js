import React, { useState, useEffect } from "react"
import { useTransition, animated as a } from "react-spring"
import css from "../pages-css/index.module.css"
import { Brand, Image, Card, Contact } from "../components"
import { useSiteMetadata, useIntro, useTestimonial } from "../hooks"
import Quote from "../assets/quote-close.svg"

const IndexPage = ({ view }) => {
  const profilePicSrc = "/profile.jpg"
  const profilePicAlt = "Nichole Antonia profile standing"
  const introCopy = useIntro()
  const testimonial = useTestimonial()
  const profilePicDimensions = {
    height: 300,
    width: 300,
  }
  const brandStyles = [css.Index__Section, css.Brand]
  const picStyles = [css.Index__Section, css.NoFlex]
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
          <section className={brandStyles.join("")}>
            <Brand>
              <h1>{title}</h1>
            </Brand>
          </section>
          <section className={picStyles.join("")}>
            <Image
              src={profilePicSrc}
              alt={profilePicAlt}
              dimensions={profilePicDimensions}
            />
            <p className={css.Copy__Intro}>{introCopy}</p>
          </section>
          <section className={css.Index__Section}>
            <Card>
              <div className={css.Card__Container}>
                <div className={css.Copy__QuoteImage}>
                  <Quote />
                </div>
                <blockquote>
                  <p className={css.Testimonial}>{testimonial.body}</p>
                  <section>
                    <p>{testimonial.author}</p>
                    <p>{testimonial.author_title_and_organization}</p>
                  </section>
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
