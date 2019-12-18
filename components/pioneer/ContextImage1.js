import React from 'react'
import PropTypes from 'prop-types'
import { InView } from 'react-intersection-observer'
import { ParallaxLayer } from '@react-spring/parallax'
import ParseText from './ParseText'
import Image from '../Image'
import { TRANSITION_IN_DELAY } from './constants'

ContextImage1.propTypes = {
  offset: PropTypes.number,
  context: PropTypes.shape({
    page: PropTypes.number
  })
}

function ContextImage1 ({ offset, context = {} }) {
  console.log(context)

  return (
    <React.Fragment key={context.page}>
      {/* Images */}
      <ParallaxLayer offset={offset} speed={1}>
        <InView
          as="div"
          className="context-transition-container"
          threshold={0.25}
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
              left: context.page % 2 ? 'auto' : 0,
              top: '10%',
              width: 'calc(50% - 50px - 25px)'
            }}
          >
            {context.images.map((image, index) => {
              return (
                <Image
                  key={image}
                  src={`/media/images/${image}`}
                  className="lightbox"
                  alt=""
                />
              )
            })}
          </div>
        </InView>
      </ParallaxLayer>

      {/* Text */}
      <ParallaxLayer
        offset={offset}
        speed={0.5}
        style={{ pointerEvents: 'none' }}
      >
        <div
          style={{
            textAlign: 'left',
            width: '40%',
            // Odd number pages align text to the left
            // Even number pages align text to the right
            marginLeft:
              context.page % 2 ? 'calc(10% + 50px)' : 'calc(50% - 50px)',
            marginTop: '20%'
          }}
          className="context-text-container"
        >
          <ParseText text={context.text} />
        </div>
      </ParallaxLayer>
    </React.Fragment>
  )
}

export default ContextImage1