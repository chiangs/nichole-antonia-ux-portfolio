import React, { useState, useEffect } from "react"
import { useTransition, animated as a } from "react-spring"
import css from "../pages-css/work.module.css"
import { useSiteMetadata } from "../hooks"

const WorkPage = ({ view }) => {
  // Content
  const { title } = useSiteMetadata()
  const [mounted, setMounted] = useState(false)

  // Effects
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
        <a.article className={css.Work} key={key} style={props}>
          WorkWorkWorkWorkWorkWorkWorkWorkWorkWorkWork
        </a.article>
      )
  )

  return <>{content}</>
}

export default WorkPage
