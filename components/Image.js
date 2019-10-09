import React from 'react'
import PropTypes from 'prop-types'

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default function Image (props) {
  const { src, alt, className, ...rest } = props

  function handleClick (event) {
    if (className.includes('lightbox')) {
      const openLightboxEvent = new CustomEvent('vision2020:open_lightbox', {
        detail: {
          url: event.target.src
        }
      })
      window.dispatchEvent(openLightboxEvent)
    }
  }

  return (
    <img
      src={src}
      className={className}
      onClick={handleClick}
      {...rest}
    />
  )
}
