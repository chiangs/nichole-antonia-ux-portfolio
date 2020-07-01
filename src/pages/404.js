import React, { useState, useEffect } from "react"
import { useTransition, animated as a } from "react-spring"

import css from "../pages-css/404.module.css"

const NotFoundPage = () => {
  const title = "404"
  const description = `The page couldn't be found...the sadness. ¯\\_(ツ)_/¯`
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
        <a.article className={css.NotFound} key={key} style={props}>
          <h1 className={css.NotFound__Title}>{title}</h1>
          <p className={css.NotFound__Description}>{description}</p>
        </a.article>
      )
  )

  return (
    <>
      {/* <SEO pageTitle="404: Not found" /> */}
      {content}
    </>
  )
}

export default NotFoundPage
