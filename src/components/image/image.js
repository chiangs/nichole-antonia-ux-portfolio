import React from "react"
import PropTypes from "prop-types"

const Image = ({ src, alt, dimensions }) => {
  return (
    <img
      src={src}
      alt={alt}
      height={dimensions.height}
      width={dimensions.width}
    ></img>
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  dimensions: PropTypes.object.isRequired,
}

export default Image
