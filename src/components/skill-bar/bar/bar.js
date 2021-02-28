import React, { useRef, useEffect, useState } from "react"
import css from "./bar.module.css"

const Bar = ({ type, value }) => {
  let barStyle
  let dots
  const calcPercent = value => (value / 10) * 100
  const pointRef = useRef(null)
  const bottomBarRef = useRef(null)
  const [left, setLeft] = useState(0)
  useEffect(() => {
    if (type === "point" && !!bottomBarRef?.current) {
      const bottomWidth = bottomBarRef.current.clientWidth
      const leftPos = (value / 10) * bottomWidth
      if (!left) {
        setLeft(prev => leftPos)
      }
    }
  }, [type, value, left, setLeft])

  if (type === "fill") {
    const valueStyle = {
      width: `${calcPercent(value)}%`,
    }
    barStyle = <div className={css.Bar__Top} style={valueStyle}></div>
  }
  if (type === "point") {
    const valueStyle = {
      left: `${left}px`,
    }
    barStyle = (
      <div className={css.Bar__Point} ref={pointRef} style={valueStyle}></div>
    )
  }
  if (type === "dot") {
    barStyle = null
    const classFilled = [css.Dot, css.Filled].join(" ")
    const classEmpty = [css.Dot, css.Empty].join(" ")
    const achieved = value
    const toGo = 5 - value
    const filled = []
    const empty = []
    for (let index = 1; index <= achieved; index++) {
      filled.push(<div key={`filled${index}`} className={classFilled}></div>)
    }
    for (let index = 1; index <= toGo; index++) {
      empty.push(<div key={`unfilled${index}`} className={classEmpty}></div>)
    }
    dots = filled.concat(empty).map(d => d)
  }

  return (
    <div className={css.Bar__Container}>
      {barStyle}
      {type !== "dot" && (
        <div className={css.Bar__Bottom} ref={bottomBarRef}></div>
      )}
      {dots}
    </div>
  )
}

Bar.propTypes = {}

export default React.memo(Bar)
