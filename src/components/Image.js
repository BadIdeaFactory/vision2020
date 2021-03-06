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
    event.stopPropagation()
    if (className.includes('lightbox')) {
      const openLightboxEvent = new CustomEvent('vision2020:open_lightbox', {
        detail: {
          url: event.target.src
        }
      })
      window.dispatchEvent(openLightboxEvent)
    }
  }

  // see: https://github.com/cyrilwanner/next-optimized-images/issues/16
  // const requireImage = require.context('../../public/media/images?resize=600', false, /\.jpg$/)

  // `require` uses next-optimized-images package
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={require(`../../public/media/images/${src}?webp`).default}
      />
      <img
        src={require(`../../public/media/images/${src}`).default}
        className={className}
        onClick={handleClick}
        draggable={false}
        {...rest}
      />
    </picture>
  )
}
