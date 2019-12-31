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

  // `require` uses next-optimized-images package
  return (
    <img
      src={require(`../public/media/images/${src}`)}
      className={className}
      onClick={handleClick}
      {...rest}
    />
  )
}
