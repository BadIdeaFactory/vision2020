import React from 'react'
import PropTypes from 'prop-types'
import { InView } from 'react-intersection-observer'
import { ParallaxLayer } from '@react-spring/parallax'
import ParseText from './ParseText'
import Image from '../Image'
import {
  TRANSITION_IN_DELAY,
  TRANSITION_IN_THRESHOLD,
  PARALLAX_QUOTE_SPEED
} from './constants'

ContextCenterQuote.propTypes = {
  offset: PropTypes.number,
  context: PropTypes.shape({
    page: PropTypes.number
  })
}

function ContextCenterQuote ({ offset, context = {} }) {
  return (
    <React.Fragment key={context.page}>
      <ParallaxLayer offset={offset} speed={PARALLAX_QUOTE_SPEED}>
        <div className="context-center-quote-container">
          <div>
            {/* Images */}
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
                  width: '60%',
                  left: '20%',
                  position: 'relative', // override absolute positioning
                  lineHeight: 0 // remove gap below image
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
            <div className="context-align-center context-text-container center-quote-text">
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

          .center-quote-text {
            width: 40%;
            min-width: 240px;
            margin-top: -10px; /* remove gap between image and text */
            margin: 0 auto;
            z-index: -1; /* place underneath image for better transitioning+placement */
            background-color: white;
            text-align: center;
          }
        `}
      </style>
    </React.Fragment>
  )
}

export default ContextCenterQuote
