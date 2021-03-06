import React from 'react'
import PropTypes from 'prop-types'
import { InView } from 'react-intersection-observer'
import { ParallaxLayer } from '@react-spring/parallax'
import ParseText from './ParseText'
import Image from '../Image'
import {
  TRANSITION_IN_DELAY,
  TRANSITION_IN_THRESHOLD,
  PARALLAX_IMAGE_SPEED,
  PARALLAX_TEXT_SPEED
} from './constants'

ContextImage2.propTypes = {
  offset: PropTypes.number,
  context: PropTypes.shape({
    page: PropTypes.number
  })
}

function ContextImage2 ({ offset, context = {} }) {
  return (
    <React.Fragment key={context.page}>
      {/* Images */}
      <ParallaxLayer
        offset={offset}
        speed={PARALLAX_IMAGE_SPEED}
        className="parallax-layer"
      >
        <InView
          as="div"
          className="context-transition-container"
          threshold={TRANSITION_IN_THRESHOLD}
          onChange={(inView, entry) => {
            if (inView) {
              const timeout = setTimeout(() => {
                entry.target.classList.add('visible')
              }, TRANSITION_IN_DELAY)
              return () => clearTimeout(timeout)
            }
          }}
        >
          <div
            className="image-container"
            style={{
              // Odd number pages align images to the right
              // Even number pages align images to the left
              right: context.page % 2 ? 0 : 'auto',
              left: context.page % 2 ? 'auto' : 0
            }}
          >
            {context.images.map((image, index) => {
              // Figure out how to stagger and overlap photos
              const style = {
                width: '90%',
                marginTop: index > 0 ? '-10%' : '0',
                marginLeft: index % 2 ? '0' : '10%'
              }
              return (
                <Image
                  key={image}
                  src={image}
                  className="lightbox"
                  alt=""
                  style={style}
                />
              )
            })}
          </div>
        </InView>
      </ParallaxLayer>

      {/* Text */}
      <ParallaxLayer
        offset={offset}
        speed={PARALLAX_TEXT_SPEED}
        className="context-text-parallaxlayer parallax-layer"
      >
        <div
          // Odd number pages align text to the left
          // Even number pages align text to the right
          className={`context-text-container ${
            context.page % 2 ? 'context-align-left' : 'context-align-right'
          }`}
        >
          <ParseText text={context.text} />
        </div>
      </ParallaxLayer>
    </React.Fragment>
  )
}

export default ContextImage2
