import React, { useState, useEffect } from "react"
import { useTransition, animated as a } from "react-spring"
import Quote from "../assets/quote-close.svg"
import css from "../pages-css/index.module.css"
import {
  SEO,
  Brand,
  Image,
  Card,
  Contact,
  SkillBar,
  ProjectPreview,
} from "../components"
import {
  useHast,
  useSiteMetadata,
  useIntro,
  useTestimonial,
  useHobbies,
  useWorksWith,
  usePersonality,
  useMotivations,
  useProjects,
  useSkills,
} from "../hooks"
import { sortContentBy } from "../services"

const IndexPage = ({ view }) => {
  // Constants
  const profilePicSrc = "/profile.jpg"
  const profilePicAlt = "Nichole Antonia profile standing"
  const titleTestimonial = "Testimonial"
  const titleCases = "Latest case studies"
  const classMotivations = [css.Personality__Item, css.Medium, css.Mint].join(
    " "
  )
  const classPersonality = [css.Personality__Item, css.Medium2, css.Mint].join(
    " "
  )
  const classHobbies = [css.Personality__Item, css.Small, css.Peach].join(" ")
  const classSkills = [css.Personality__Item, css.Large, css.Peach].join(" ")

  //   const classSkills = [css.Personality__Item, css.Skills].join(" ")
  // Content
  const { title, description } = useSiteMetadata()
  const [mounted, setMounted] = useState(false)
  const introAst = useIntro()
  const introCopy = useHast(introAst)
  const { testimonialFrontmatter, testimonialAst } = useTestimonial()
  const testimonialCopy = useHast(testimonialAst)
  const projects = useProjects()
  const projectsSorted = sortContentBy(projects, "order")

  const actionPic = "/action-001b.jpg"
  const actionPicAlt = "Nichole Antonia designing prototype at table"

  const hobbies = useHobbies()
  const worksWith = useWorksWith()
  const personality = usePersonality()
  const motivations = useMotivations()
  const skills = useSkills()
  // Dims
  const profilePicDimensions = {
    height: 300,
    width: 300,
  }
  const actionPicDimensions = {
    height: 300,
    width: 300,
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
    <li key={s.label_1} className={css.Skillbar}>
      <SkillBar
        type={"fill"}
        value={s.level}
        label1={s.label_1}
        label2={s.label_2}
      />
    </li>
  ))
  const personalityItems = personality.skillbar.map(s => (
    <li key={s.label_1} className={css.Skillbar}>
      <SkillBar
        type={"point"}
        value={s.level}
        label1={s.label_1}
        label2={s.label_2}
      />
    </li>
  ))
  const skillItems = skills.skillbar.map(s => (
    <li key={s.label_1} className={css.Skillbar}>
      <SkillBar
        type={"dot"}
        value={s.level}
        label1={s.label_1}
        label2={s.label_2}
      />
    </li>
  ))
  const caseStudies = projectsSorted.map(p => (
    <li key={p.frontmatter.title}>
      <a
        className={css.Link__Card}
        href={p.frontmatter.prototype_link}
        target="_blank"
        rel="noreferrer"
      >
        <ProjectPreview {...p.frontmatter} body={p.htmlAst} theme={"mini"} />
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
                <span className={css.Copy__Intro}>{introCopy}</span>
              </div>
            </div>
          </section>
          {/* Skills and Motivations */}
          <section className={css.Index__Section}>
            <div className={css.Personality__Wrapper}>
              <div className={css.Personality__Container}>
                {/* Motivations */}
                <div className={classMotivations} id={css.motivations}>
                  <span className={css.Motivations}>
                    <p className={css.Personality__Item__Title}>
                      {motivations.title}
                    </p>
                    <ul>{motivationItems}</ul>
                  </span>
                </div>
                {/* Personality */}
                <div className={classPersonality} id={css.personality}>
                  <span className={css.Personality}>
                    <p className={css.Personality__Item__Title}>
                      {personality.title}
                    </p>
                    <ul>{personalityItems}</ul>
                  </span>
                </div>
                {/* Hobbies */}
                <div className={classHobbies} id={css.hobbies}>
                  <span className={css.Personality}>
                    <p className={css.Personality__Item__Title}>
                      {hobbies.title}
                    </p>
                    <ul>{hobbyListItems}</ul>
                  </span>
                </div>
                {/* Works with */}
                <div className={classHobbies} id={css.worksWith}>
                  <span className={css.Personality}>
                    <p className={css.Personality__Item__Title}>
                      {worksWith.title}
                    </p>
                    <ul>{worksWithItems}</ul>
                  </span>
                </div>
                <div className={classSkills} id={css.skills}>
                  <span className={css.Skills}>
                    <p className={css.Personality__Item__Title}>
                      {skills.title}
                    </p>
                    <ul>{skillItems}</ul>
                  </span>
                </div>
                {/* Decorative circles */}
                <div
                  id={css.decorativeMint1}
                  className={[css.Circle__Decorative, css.Small, css.Mint].join(
                    " "
                  )}
                ></div>
                <div
                  id={css.decorativeMint2}
                  className={[css.Circle__Decorative, css.Small, css.Mint].join(
                    " "
                  )}
                ></div>
                <div
                  id={css.decorativeMint3}
                  className={[css.Circle__Decorative, css.Small, css.Mint].join(
                    " "
                  )}
                ></div>
                <div
                  id={css.decorativePeachDark1}
                  className={[
                    css.Circle__Decorative,
                    css.Medium,
                    css.Peach__Dark,
                  ].join(" ")}
                ></div>
                <div
                  id={css.decorativePeachDark2}
                  className={[
                    css.Circle__Decorative,
                    css.Medium,
                    css.Peach__Dark,
                  ].join(" ")}
                ></div>
                <div
                  id={css.decorativePeach1}
                  className={[
                    css.Circle__Decorative,
                    css.Large,
                    css.Peach,
                  ].join(" ")}
                ></div>
                <div
                  id={css.decorativePeach2}
                  className={[
                    css.Circle__Decorative,
                    css.Large,
                    css.Peach,
                  ].join(" ")}
                ></div>
              </div>
            </div>
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
                  <span className={css.Testimonial}>{testimonialCopy}</span>
                  <section className={css.Testimonial__Author}>
                    <p>{testimonialFrontmatter.author}</p>
                    <p>
                      {testimonialFrontmatter.author_title_and_organization}
                    </p>
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

  return (
    <>
      <SEO pageTitle={"Home"} pageDescription={description} />
      {content}
    </>
  )
}

export default IndexPage
