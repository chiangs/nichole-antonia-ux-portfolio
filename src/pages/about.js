import React, { useState, useEffect } from "react"
import { useTransition, animated as a } from "react-spring"
import css from "../pages-css/about.module.css"
import { Card, Image, Contact } from "../components"

const AboutPage = ({ view }) => {
  const actionPic = "/action-001.jpg"
  const actionPic2 = "/action-002.jpg"
  const actionPicAlt = "Nichole Antonia designing prototype at table"
  const actionPicAlt2 =
    "Nichole Antonia designing prototype at table shot from above"
  const tempCopy =
    "I have spend the last 5 years dedicating myself to the care of premature and sick infants in the NICU. This work has helped me develop a great sense of empathy."
  const tempCopy2 =
    "I am working to make user-friendly and desireable start-to-end solutions that makes a difference for both the end user and the costumer. "
  const actionPicDimensions = {
    height: 220,
    width: 142,
  }
  const actionPicDimensions2 = {
    height: 160,
    width: 400,
  }

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
        <a.article className={css.About}>
          <section className={css.About__Section}>
            <Image
              src={actionPic}
              alt={actionPicAlt}
              dimensions={actionPicDimensions}
            />
            <p className={css.Copy__Intro}>{tempCopy}</p>
          </section>
          <section className={css.About__Section}>
            <p>{tempCopy2}</p>
          </section>
          <section className={css.About__Section}>
            <Card>
              <div className={css.Card__Container}>
                <Contact />
              </div>
            </Card>
          </section>
          <section className={css.About__Section}>
            <Image
              src={actionPic2}
              alt={actionPicAlt2}
              dimensions={actionPicDimensions2}
            />
          </section>
          <section className={css.About__Section}>
            <div className={css.List__Headings}>
              <p>Hobbies</p>
              <p>Works with</p>
            </div>
            <div className={css.List}>
              <Card>
                <div className={css.Card__Container}>
                  <ul>
                    <li>Yoga and meditation</li>
                    <li>Crafts</li>
                  </ul>
                  <ul>
                    <li>Figma</li>
                    <li>Adobe XD</li>
                  </ul>
                </div>
              </Card>
            </div>
          </section>
        </a.article>
      )
  )

  return <>{content}</>
}

export default AboutPage
