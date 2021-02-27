import React from "react"
import css from "./project-preview.module.css"
import PreviewKeywords from "./preview-keywords/preview-keywords"
import PreviewLabel from "./preview-label/preview-label.js"
import PreviewImage from "./preview-image/preview-image.js"
import PreviewButton from "./preview-button/preview-button.js"

const ProjectPreview = ({
  title,
  description,
  tags,
  hero_image,
  hero_image_alt,
  offcenter,
  theme,
  body,
  ...props
}) => {
  const previewStyle =
    theme === "mini"
      ? [css.Preview__Card, css.Preview__Mini]
      : [css.Preview__Card]
  const previewImageStyle = !!offcenter
    ? [css.Image__Off__Center].concat(previewStyle)
    : previewStyle
  const buttonLabel = "View case study"

  const keywordElements = tags.map(k => (
    <span key={k} className={css.Keyword}>
      {k}
    </span>
  ))
  const titleElement = <h5 className={css.Title}>{title}</h5>
  const descriptionElement = theme !== "mini" && (
    <p className={css.Description}>{description}</p>
  )
  const miniButtonElement = theme === "mini" && (
    <div className={css.Preview__Button}>
      <PreviewButton>
        <span>{buttonLabel}</span>
      </PreviewButton>
    </div>
  )
  const buttonElement = theme !== "mini" && (
    <div className={css.Preview__Button}>
      <PreviewButton>
        <span>{buttonLabel}</span>
      </PreviewButton>
    </div>
  )

  return (
    <aside className={previewImageStyle.join(" ")}>
      <section className={css.Preview__Info}>
        <PreviewKeywords>{keywordElements}</PreviewKeywords>
        <PreviewLabel>{titleElement}</PreviewLabel>
        <PreviewLabel>{descriptionElement}</PreviewLabel>
        <div className={css.Default__Button__Wrapper}>{buttonElement}</div>
      </section>
      <section className={css.Preview__Image}>
        <PreviewImage>
          <img src={hero_image} alt={hero_image_alt} />
        </PreviewImage>
        {miniButtonElement}
      </section>
    </aside>
  )
}
ProjectPreview.propTypes = {}

export default ProjectPreview
