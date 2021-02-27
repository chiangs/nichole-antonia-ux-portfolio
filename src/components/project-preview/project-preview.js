import React from "react"
import css from "./project-preview.module.css"
import PreviewKeywords from "./preview-keywords/preview-keywords"
import PreviewLabel from "./preview-label/preview-label.js"
import PreviewImage from "./preview-image/preview-image.js"
import PreviewButton from "./preview-button/preview-button.js"

const ProjectPreview = ({
  title,
  tags,
  hero_image,
  hero_image_alt,
  theme,
  body,
  ...props
}) => {
  const previewStyle =
    theme === "mini"
      ? [css.Preview__Card, css.Preview__Mini]
      : [css.Preview__Card]
  const buttonLabel = "View case study"

  const keywordElements = tags.map(k => (
    <span key={k} className={css.Keyword}>
      {k}
    </span>
  ))
  const titleElement = <h5 className={css.Title}>{title}</h5>
  const buttonElement = <span>{buttonLabel}</span>

  return (
    <aside className={previewStyle.join(" ")}>
      <section className={css.Preview__Info}>
        <PreviewKeywords>{keywordElements}</PreviewKeywords>
        <PreviewLabel>{titleElement}</PreviewLabel>
      </section>
      <section className={css.Preview__Image}>
        <PreviewImage>
          <img src={hero_image} alt={hero_image_alt} />
        </PreviewImage>
        <div className={css.Preview__Button}>
          <PreviewButton>{buttonElement}</PreviewButton>
        </div>
      </section>
    </aside>
  )
}
ProjectPreview.propTypes = {}

export default ProjectPreview
