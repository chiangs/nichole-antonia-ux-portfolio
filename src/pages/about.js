import React, { useState, useEffect } from "react"
import { useTransition, animated as a } from "react-spring"
// Internal
import css from "../pages-css/about.module.css"
import { useHast, useAbout, useAbout2 } from "../hooks"
import { SEO, Image, Card, Contact } from "../components"

const AboutPage = ({ view }) => {
  // State
  const [mounted, setMounted] = useState(false)

  // Content
  const title = "About me"
  const description = "What you won't see on my CV."
  const aboutCopy1Hast = useAbout()
  const aboutCopy2Hast = useAbout2()
  const aboutCopy1 = useHast(aboutCopy1Hast)
  const aboutCopy2 = useHast(aboutCopy2Hast)

  // Contants
  const actionPic = "/action-002.jpg"
  const actionPicAlt =
    "Nichole Antonia designing prototype at table shot from above"
  const actionPicDimensions = {
    height: "auto",
    width: "auto",
  }

  // Effects
  useEffect(() => {
    setMounted(true)
  }, [])
  const transitions = useTransition(mounted, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  // Components
  const image = (
    <Image
      src={actionPic}
      alt={actionPicAlt}
      dimensions={actionPicDimensions}
    />
  )

  const content = transitions.map(
    ({ item, key, props }) =>
      item && (
        <a.article className={css.About} key={key} style={props}>
          <h1 className={css.About__Title}>{title}</h1>
          <section className={css.About__Section}>{aboutCopy1}</section>
          <section className={css.About__Image}>{image}</section>
          <section className={css.About__Section}>{aboutCopy2}</section>
          <section className={css.About__Section}>
            <Card>
              <Contact />
            </Card>
          </section>
        </a.article>
      )
  )

  return (
    <>
      <SEO pageTitle={title} pageDescription={description} />
      {content}
    </>
  )
}

export default AboutPage
