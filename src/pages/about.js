import React, { useState, useEffect } from "react"
import { useTransition, animated as a } from "react-spring"
import css from "../pages-css/about.module.css"
import { Card, Image, Contact } from "../components"
import { useAbout, useAbout2 } from "../hooks"

const AboutPage = ({ view }) => {
  const actionPic = "/action-001.jpg"
  const actionPic2 = "/action-002.jpg"
  const actionPicAlt = "Nichole Antonia designing prototype at table"
  const actionPicAlt2 =
    "Nichole Antonia designing prototype at table shot from above"
  const aboutCopy = useAbout()
  const about2Copy = useAbout2()
  const actionPicDimensions = {
    height: 250,
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
          <h1 className={css.About__Title}>
            UX Designer with a background in Healthcare
          </h1>

          <section className={css.About__Section}>
            <p className={css.Copy__Intro}>{aboutCopy}</p>
            <Image
              className={css.About__Image}
              src={actionPic}
              alt={actionPicAlt}
              dimensions={actionPicDimensions}
            />
            <p>{about2Copy}</p>
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
          <section className={["wrap", css.About__Section].join(" ")}>
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
