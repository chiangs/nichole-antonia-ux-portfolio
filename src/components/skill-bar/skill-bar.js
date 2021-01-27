import React from "react"
import Bar from "./bar/bar"
import Label from "./label/label"
import css from "./skill-bar.module.css"

const SkillBar = ({ type, value, label1, label2 }) => {
  const skillLabel1 = <Label>Introvert</Label>
  const skillLabel2 = <Label>Introvert</Label>
  const skillBar = type === "bar" ? <Bar value={value} /> : null

  return (
    <div className={css.Skillbar__Container}>
      {skillLabel1}
      {skillBar}
      {skillLabel2}
    </div>
  )
}

SkillBar.propTypes = {}

export default SkillBar
