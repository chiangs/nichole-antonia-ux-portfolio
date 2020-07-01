import React, { useState, useEffect } from "react"
import { useTransition, animated as a } from "react-spring"
import css from "../pages-css/index.module.css"

const IndexPage = ({ view }) => {
  const title = "Home"
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
          <h1>{title}</h1>
        </a.article>
      )
  )

  return <>{content}</>
}

export default IndexPage
