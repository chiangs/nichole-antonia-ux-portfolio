import React, { useState, useEffect } from "react"
import { useTransition, animated as a } from "react-spring"
import Quote from "../assets/quote-close.svg"
import css from "../pages-css/index.module.css"
import BubblesLeft from "../assets/bubbles-left.svg"
import BubblesRight from "../assets/bubbles-right.svg"
import {
  Brand,
  Image,
  Card,
  Contact,
  SkillBar,
  ProjectPreview,
} from "../components"
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
  const titleTestimonial = "Testimonial"
  const titleCases = "Latest case studies"
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
    height: "auto",
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

  const NICU_2U = {
    title: "NICU 2 YOU",
    keywords: ["research", "prototype", "test"],
    linkExternal: "#",
    image: {
      src: "/splash-nicu.png",
      alt: "NICU 2 You design",
      dimensions: {
        height: 238,
        width: 452,
      },
    },
  }
  const FOOD_RESCUE = {
    title: "Food rescue",
    keywords: ["research", "prototype", "test"],
    linkExternal: "#",
    image: {
      src: "/splash-food-rescue.jpg",
      alt: "Food rescue design",
      dimensions: {
        height: 238,
        width: 452,
      },
    },
  }
  const caseStudies = [NICU_2U, FOOD_RESCUE].map(s => (
    <li key={s.title}>
      <a className={css.Link__Card} href={s.linkExternal}>
        <ProjectPreview {...s} theme={"mini"} />
      </a>
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
            <div className={css.About__Image}>
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
              <div className={css.Personality__Container}>
                <div className={css.List__Headings}>
                  <p>{motivations.title}</p>
                  <p>{personality.title}</p>
                </div>
                <div className={css.List__Skills}>
                  <ul>{motivationItems}</ul>
                  <ul>{personalityItems}</ul>
                </div>
              </div>
              <BubblesLeft className={css.Bubbles__1} />
            </section>
            {/* Uses */}
            <section
              className={["wrap", css.About__Section, css.About__Uses].join(
                " "
              )}
            >
              <div className={css.Uses__Container}>
                <div className={css.List__Headings}>
                  <p>{worksWith.title}</p>
                  <p>{hobbies.title}</p>
                </div>
                <div className={css.List}>
                  <div className={css.List__Uses}>
                    <ul>{worksWithItems}</ul>
                    <ul>{hobbyListItems}</ul>
                  </div>
                </div>
                <BubblesRight className={css.Bubbles__2} />
              </div>
            </section>
          </section>
          {/* Testimonials */}
          <section className={css.Index__Section}>
            <div className={css.Testimonial__Image}>
              <Image
                className={css.About__Image}
                src={actionPic}
                alt={actionPicAlt}
                dimensions={actionPicDimensions}
              />
            </div>
            <div className={css.Intro}>
              <h2 className={[css.Headings, css.Title__Testimonial].join(" ")}>
                {titleTestimonial}
              </h2>
              <Quote className={css.Quote} />
              <div className={css.Intro__Text}>
                <blockquote className={css.Copy__Intro}>
                  <p className={css.Testimonial}>{testimonial.body}</p>
                  <section className={css.Testimonial__Author}>
                    <p>{testimonial.author}</p>
                    <p>{testimonial.author_title_and_organization}</p>
                  </section>
                </blockquote>
              </div>
            </div>
          </section>
          {/* Case Studies */}
          <section
            className={[css.Index__Section, css.Case__Studies].join(" ")}
          >
            <h2 className={[css.Headings, css.Title__Cases].join(" ")}>
              {titleCases}
            </h2>
            <ul className={css.Cases}>{caseStudies}</ul>
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
