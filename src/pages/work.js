import React, { useState, useEffect } from "react"
import { useTransition, animated as a } from "react-spring"
import css from "../pages-css/work.module.css"
import { useProjects } from "../hooks"
import { ProjectPreview, Card, Contact } from "../components"
import { sortContentBy } from "../services"

const WorkPage = ({ view }) => {
  // Content
  const title = "My work"
  const [mounted, setMounted] = useState(false)
  const projects = useProjects()
  const sortedProjects = sortContentBy(projects, "order")
  // Effects
  useEffect(() => {
    setMounted(true)
  }, [])
  const transitions = useTransition(mounted, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  // Elements
  const caseStudies = sortedProjects.map(p => (
    <li key={p.title} className={css.Case}>
      <a className={css.Link__Card} href={p.frontmatter.prototype_link}>
        <ProjectPreview {...p.frontmatter} body={p.htmlAst} theme={"default"} />
      </a>
    </li>
  ))

  const content = transitions.map(
    ({ item, key, props }) =>
      item && (
        <a.article className={css.Work} key={key} style={props}>
          <ul className={css.Case__Studies}>{caseStudies}</ul>
          <section className={css.Contact}>
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

export default WorkPage
