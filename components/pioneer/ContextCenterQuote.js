import React from 'react'
import PropTypes from 'prop-types'
import { InView } from 'react-intersection-observer'
import { ParallaxLayer } from '@react-spring/parallax'
import ParseText from './ParseText'
import Image from '../Image'
import { TRANSITION_IN_DELAY } from './constants'

ContextCenterQuote.propTypes = {
  offset: PropTypes.number,
  context: PropTypes.shape({
    page: PropTypes.number
  })
}

function ContextCenterQuote ({ offset, context = {} }) {
  return (
    <React.Fragment key={context.page}>
      <ParallaxLayer offset={offset} speed={0.75}>
        <div className="context-center-quote-container">
          <div>
            {/* Images */}
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
                  width: '60%',
                  left: '20%',
                  position: 'relative' // override absolute positioning
                }}
              >
                {context.images.map((image, index) => {
                  return (
                    <Image
                      key={image}
                      src={image}
                      className="lightbox"
                      alt=""
                    />
                  )
                })}
              </div>
            </InView>
          </div>
          <div>
            {/* Text */}
            <div
              style={{
                textAlign: 'center',
                width: '40%',
                marginLeft: '30%',
                backgroundColor: 'white',
                zIndex: '-1', // place underneath image for better transitioning+placement
                marginTop: '-10px' // remove gap between image and text
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
          </div>
        </div>
      </ParallaxLayer>

      <style jsx>
        {`
          .context-center-quote-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        `}
      </style>

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
