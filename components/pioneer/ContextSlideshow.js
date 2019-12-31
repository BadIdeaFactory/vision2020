import React from 'react'
import PropTypes from 'prop-types'
import { InView } from 'react-intersection-observer'
import { ParallaxLayer } from '@react-spring/parallax'
import ImageGallery from 'react-image-gallery'
import ParseText from './ParseText'
import { TRANSITION_IN_DELAY, TRANSITION_IN_THRESHOLD } from './constants'
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css'

ContextSlideshow.propTypes = {
  offset: PropTypes.number,
  context: PropTypes.shape({
    page: PropTypes.number
  })
}

function ContextSlideshow ({ offset, context = {} }) {
  const images = context.slideshow.map((image) => ({
    original: `/media/images/${image.image}`
  }))

  return (
    <React.Fragment key={context.page}>
      {/* Images */}
      <ParallaxLayer offset={offset} speed={1}>
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
              left: context.page % 2 ? 'auto' : 0,
              top: '10%',
              width: 'calc(50% - 50px - 25px)'
            }}
          >
            <ImageGallery
              items={images}
              showThumbnails={false}
              showFullscreenButton={false}
              useBrowserFullscreen={false}
              showPlayButton={false}
              showBullets
              onClick={(e) => {
                const openLightboxEvent = new CustomEvent(
                  'vision2020:open_lightbox',
                  {
                    detail: {
                      url: event.target.src
                    }
                  }
                )
                window.dispatchEvent(openLightboxEvent)
              }}
            />
          </div>
        </InView>
        <div
          style={{
            position: 'absolute',
            right: context.page % 2 ? 0 : 'auto',
            left: context.page % 2 ? 'auto' : 0,
            width: 'calc(50% - 50px - 25px)',
            top: '35%',
            paddingRight: context.page % 2 ? '20px' : 'auto',
            paddingLeft: context.page % 2 ? 'auto' : '20px',
            backgroundColor: 'white'
          }}
          className="context-text-container"
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
            <ParseText text={context.slideshow[0].text} />
          </InView>
        </div>
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

      <style jsx global>
        {`
          /* Override react-image-gallery global styles */
          .image-gallery-bullets {
            bottom: -50px;
          }

          .image-gallery-bullets .image-gallery-bullet {
            margin: 0 10px;
            width: 6px;
            height: 6px;
            background-color: #9b9b9b;
            transition: background-color 120ms ease;
            border: 0;
            box-shadow: none;
          }

          .image-gallery-bullets .image-gallery-bullet.active {
            background-color: black;
          }

          .image-gallery-fullscreen-button:hover::before,
          .image-gallery-play-button:hover::before,
          .image-gallery-left-nav:hover::before,
          .image-gallery-right-nav:hover::before {
            color: white;
          }

          .image-gallery-icon:hover {
            color: white;
          }
        `}
      </style>
    </React.Fragment>
  )
}

export default ContextSlideshow
