import React, { useRef, useEffect, useState } from "react"
import css from "./bar.module.css"

const Bar = ({ type, value }) => {
  let barStyle
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

  return (
    <div className={css.Bar__Container}>
      {barStyle}
      <div className={css.Bar__Bottom} ref={bottomBarRef}></div>
    </div>
  )
}

Bar.propTypes = {}

export default React.memo(Bar)
