import React, { useState, useEffect } from "react"
import { useTransition, animated as a } from "react-spring"
import css from "../pages-css/about.module.css"
import { Card, Image, Contact, SkillBar } from "../components"
import {
  useAbout,
  useAbout2,
  useHobbies,
  useWorksWith,
  usePersonality,
  useMotivations,
} from "../hooks"

const AboutPage = ({ view }) => {
  // Content
  const actionPic = "/action-001.jpg"
  const actionPic2 = "/action-002.jpg"
  const actionPicAlt = "Nichole Antonia designing prototype at table"
  const actionPicAlt2 =
    "Nichole Antonia designing prototype at table shot from above"
  const aboutCopy = useAbout()
  const about2Copy = useAbout2()
  const hobbies = useHobbies()
  const worksWith = useWorksWith()
  const personality = usePersonality()
  const motivations = useMotivations()

  // Dims
  const actionPicDimensions = {
    height: 400,
    width: 180,
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

  const hobbyListItems = hobbies.list.map((h, i) => (
    <li key={`hobby${i}`}>{h}</li>
  ))
  const worksWithItems = worksWith.list.map((w, i) => (
    <li key={`work${i}`}>{w}</li>
  ))
  const motivationItems = motivations.skillbar.map(s => (
    <li key={s.label_1} className="skillbar">
      <SkillBar
        type={"fill"}
        value={s.level}
        label1={s.label_1}
        label2={s.label_2}
      />
    </li>
  ))
  const personalityItems = personality.skillbar.map(s => (
    <li key={s.label_1} className="skillbar">
      <SkillBar
        type={"point"}
        value={s.level}
        label1={s.label_1}
        label2={s.label_2}
      />
    </li>
  ))

  const content = transitions.map(
    ({ item, key, props }) =>
      item && (
        <a.article key={key} className={css.About}>
          <h1 className={css.About__Title}>
            UX Designer with a background in Healthcare
          </h1>
          {/* Intro */}
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
          {/* Skills */}
          <section className={["wrap", css.About__Section].join(" ")}>
            <div className={css.List__Headings}>
              <p>{motivations.title}</p>
              <p>{personality.title}</p>
            </div>
            <div className={css.List__Skills}>
              <ul>{motivationItems}</ul>
              <ul>{personalityItems}</ul>
            </div>
          </section>

          {/* Keywords */}
          <section className={["wrap", css.About__Section].join(" ")}>
            <div className={css.List__Headings}>
              <p>{hobbies.title}</p>
              <p>{worksWith.title}</p>
            </div>
            <div className={css.List}>
              <Card>
                <div className={css.Card__Container}>
                  <ul>{hobbyListItems}</ul>
                  <ul>{worksWithItems}</ul>
                </div>
              </Card>
            </div>
          </section>
        </a.article>
      )
  )

  return (
    <>
      <p>Nothing to see here!</p>
    </>
  )
}

export default AboutPage
