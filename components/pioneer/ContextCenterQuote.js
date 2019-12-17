import React from 'react'
import PropTypes from 'prop-types'
import { InView } from 'react-intersection-observer'
import { ParallaxLayer } from '@react-spring/parallax'
import ParseText from './ParseText'
import Image from '../Image'

const TRANSITION_IN_DELAY = 500

ContextCenterQuote.propTypes = {
  offset: PropTypes.number,
  context: PropTypes.shape({
    page: PropTypes.number
  })
}

function ContextCenterQuote ({ offset, context = {} }) {
  return (
    <React.Fragment key={context.page}>
      {/* Text */}
      <ParallaxLayer
        offset={offset}
        speed={0.75}
        style={{ pointerEvents: 'none' }}
      >
        <div
          style={{
            textAlign: 'center',
            width: '40%',
            marginLeft: '30%',
            marginTop: '30%',
            backgroundColor: 'white'
          }}
          className="context-align-center context-text-container"
        >
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
            <ParseText text={context.text} />
          </InView>
        </div>
      </ParallaxLayer>

      {/* Images */}
      <ParallaxLayer offset={offset} speed={0.75}>
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
              top: '10%',
              width: '50%',
              left: '25%'
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

      <style jsx global>
        {`
          .context-transition-container {
            opacity: 0;
            transform: translateY(5em);
            transition: opacity 1000ms, transform 1000ms ease-out;
          }

          .context-transition-container.visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>
    </React.Fragment>
  )
}

export default ContextCenterQuote
