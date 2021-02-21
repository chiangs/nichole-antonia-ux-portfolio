import React from "react"
import css from "./project-preview.module.css"
import PreviewKeywords from "./preview-keywords/preview-keywords"
import PreviewLabel from "./preview-label/preview-label.js"
import PreviewImage from "./preview-image/preview-image.js"
import PreviewButton from "./preview-button/preview-button.js"

const ProjectPreview = ({ title, keywords, image }) => {
  const buttonLabel = "View case study"
  const keywordProps = ["research", "prototype", "test"]
  const titleProp = "NICU 2 YOU"
  const imageProp = ""

  const keywordElements = keywordProps.map(k => (
    <span key={k} className={css.Keyword}>
      {k}
    </span>
  ))
  const titleElement = <h5 className={css.Title}>{titleProp}</h5>
  const buttonElement = <span>{buttonLabel}</span>

  return (
    <aside className={css.Preview__Card}>
      <section className={css.Preview__Info}>
        <PreviewKeywords>{keywordElements}</PreviewKeywords>
        <PreviewLabel>{titleElement}</PreviewLabel>
      </section>
      <section className={css.Preview__Image}>
        <PreviewImage />
        <div className={css.Preview__Button}>
          <PreviewButton>{buttonElement}</PreviewButton>
        </div>
      </section>
    </aside>
  )
}
ProjectPreview.propTypes = {}

export default ProjectPreview
