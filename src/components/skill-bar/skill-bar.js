import React from "react"
import Bar from "./bar/bar"
import Label from "./label/label"
import css from "./skill-bar.module.css"

const SkillBar = ({ type, value, label1, label2 }) => {
  const skillLabel1 = <Label>{label1}</Label>
  const skillLabel2 = <Label>{label2}</Label>
  const skillBar = <Bar type={type} value={value} />
  const classContainer =
    type === "dot"
      ? [css.Skillbar__Container, css.Dots]
      : [css.Skillbar__Container]

  return (
    <div className={classContainer.join(" ")}>
      <div className={css.Labels}>
        {skillLabel1}
        {skillLabel2}
      </div>
      {skillBar}
    </div>
  )
}

SkillBar.propTypes = {}

export default SkillBar
