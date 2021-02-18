import React, { useState, useEffect } from "react"
import { useTransition, animated as a } from "react-spring"
import Quote from "../assets/quote-close.svg"
import css from "../pages-css/index.module.css"
import { Brand, Image, Card, Contact, SkillBar } from "../components"
import {
  useSiteMetadata,
  useIntro,
  useTestimonial,
  useAbout,
  useHobbies,
  useWorksWith,
  usePersonality,
  useMotivations,
} from "../hooks"

const IndexPage = ({ view }) => {
  // Constants
  const profilePicSrc = "/profile.jpg"
  const profilePicAlt = "Nichole Antonia profile standing"
  // Content
  const { title } = useSiteMetadata()
  const [mounted, setMounted] = useState(false)
  const introCopy = useIntro()
  const testimonial = useTestimonial()
  const actionPic = "/action-001b.jpg"
  const actionPic2 = "/action-002.jpg"
  const actionPicAlt = "Nichole Antonia designing prototype at table"
  const actionPicAlt2 =
    "Nichole Antonia designing prototype at table shot from above"
  const aboutCopy = useAbout()
  const hobbies = useHobbies()
  const worksWith = useWorksWith()
  const personality = usePersonality()
  const motivations = useMotivations()
  // Dims
  const profilePicDimensions = {
    height: 300,
    width: 300,
  }
  const actionPicDimensions = {
    height: 300,
    width: 300,
  }
  const actionPicDimensions2 = {
    height: 440,
    width: 890,
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
        <a.article className={css.Index} key={key} style={props}>
          <section className={css.Index__Section}>
            <div className={css.Profile}>
              <Brand>
                <h1 className={css.Title}>{title}</h1>
              </Brand>
              <Image
                src={profilePicSrc}
                alt={profilePicAlt}
                dimensions={profilePicDimensions}
              />
            </div>
            <div className={css.Intro}>
              <div className={css.Intro__Text}>
                <p className={css.Copy__Intro}>{introCopy}</p>
              </div>
            </div>
          </section>
          <section className={css.Index__Section}>
            <div className={css.About}>
              <Image
                src={actionPic2}
                alt={actionPicAlt2}
                dimensions={actionPicDimensions2}
              />
            </div>
            {/* Personality */}
            <section
              className={[
                "wrap",
                css.About__Section,
                css.About__Personality,
              ].join(" ")}
            >
              <div className={css.List__Headings}>
                <p>{motivations.title}</p>
                <p>{personality.title}</p>
              </div>
              <div className={css.List__Skills}>
                <ul>{motivationItems}</ul>
                <ul>{personalityItems}</ul>
              </div>
            </section>
            {/* Uses */}
            <section
              className={["wrap", css.About__Section, css.About__Uses].join(
                " "
              )}
            >
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
          </section>

          <section className={css.Index__Section}>
            <section className={css.About__Section}>
              <p className={css.Copy__Intro}>{aboutCopy}</p>
              <Image
                className={css.About__Image}
                src={actionPic}
                alt={actionPicAlt}
                dimensions={actionPicDimensions}
              />
            </section>
            <Card>
              <div className={css.Card__Container}>
                <div className={css.Copy__QuoteImage}>
                  <Quote />
                </div>
                <blockquote>
                  <p className={css.Testimonial}>{testimonial.body}</p>
                  <section className={css.Testimonial__Author}>
                    <p>{testimonial.author}</p>
                    <p>{testimonial.author_title_and_organization}</p>
                  </section>
                </blockquote>
              </div>
            </Card>
          </section>
          <section className={css.Index__Section}>
            <h3>Latest case studies</h3>
            <ul className={css.Case__Studies}>
              <li>STUFF1</li>
              <li>STUFF2</li>
            </ul>
          </section>
          <section className={css.Index__Section}>
            <div className={css.Contact}>
              <Card>
                <div className={css.Card__Container}>
                  <Contact />
                </div>
              </Card>
            </div>
          </section>
        </a.article>
      )
  )

  return <>{content}</>
}

export default IndexPage
