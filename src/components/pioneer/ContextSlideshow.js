import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { InView } from 'react-intersection-observer'
import { useTransition, animated } from 'react-spring'
import { ParallaxLayer } from '@react-spring/parallax'
import ImageGallery from 'react-image-gallery'
import ParseText from './ParseText'
import {
  TRANSITION_IN_DELAY,
  TRANSITION_IN_THRESHOLD,
  PARALLAX_IMAGE_SPEED,
  PARALLAX_TEXT_SPEED
} from './constants'
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css'

ContextSlideshow.propTypes = {
  offset: PropTypes.number,
  context: PropTypes.shape({
    page: PropTypes.number
  })
}

function ContextSlideshow ({ offset, context = {} }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const transitions = useTransition(currentSlide, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  const images = context.slideshow.map((image) => ({
    original: require(`../../../public/media/images/${image.image}?webp`)
      .default
  }))

  return (
    <React.Fragment key={context.page}>
      {/* Images */}
      <ParallaxLayer offset={offset} speed={PARALLAX_IMAGE_SPEED}>
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
          style={{
            // Odd number pages align images to the right
            // Even number pages align images to the left
            right: context.page % 2 ? 0 : 'auto',
            left: context.page % 2 ? 'auto' : 0,
            top: '10%',
            width: 'calc(50% - 50px - 25px)',
            position: 'absolute'
          }}
        >
          <div
            className="image-container"
            style={{
              position: 'relative' // override
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
              onBeforeSlide={(index) => {
                setCurrentSlide(index)
              }}
            />
          </div>
          <div
            style={{
              // position: 'absolute',
              // right: context.page % 2 ? 0 : 'auto',
              // left: context.page % 2 ? 'auto' : 0,
              // width: 'calc(50% - 50px - 25px)',
              // top: '35%',
              position: 'relative',
              paddingRight: context.page % 2 ? '20px' : 'auto',
              paddingLeft: context.page % 2 ? 'auto' : '20px',
              backgroundColor: 'white',
              zIndex: '-1',
              marginTop: '20px'
            }}
            className="context-text-container"
          >
            {transitions.map(({ item, key, props }) => (
              <animated.div key={key} style={props}>
                <ParseText text={context.slideshow[item].text} />
              </animated.div>
            ))}
          </div>
        </InView>
      </ParallaxLayer>

      {/* Text */}
      <ParallaxLayer
        offset={offset}
        speed={PARALLAX_TEXT_SPEED}
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
            marginTop: '60%'
          }}
          className="context-text-container"
        >
          <ParseText text={context.text} />
        </div>
      </ParallaxLayer>

      <style jsx global>
        {`
          /* Override react-image-gallery global styles */
          /* Additional classname specificity is required because
          we can't rely on style load order for importance. the load
          order is different between Electron and web */
          .image-container .image-gallery-bullets {
            bottom: -50px;
          }

          .image-container .image-gallery-bullets .image-gallery-bullet {
            margin: 0 10px;
            width: 6px;
            height: 6px;
            background-color: #9b9b9b;
            transition: background-color 120ms ease;
            border: 0;
            box-shadow: none;
          }

          .image-container .image-gallery-bullets .image-gallery-bullet.active {
            background-color: black;
          }

          .image-container .image-gallery-fullscreen-button:hover::before,
          .image-container .image-gallery-play-button:hover::before,
          .image-container .image-gallery-left-nav:hover::before,
          .image-container .image-gallery-right-nav:hover::before {
            color: white;
          }

          .image-container .image-gallery-icon:hover {
            color: white;
          }
        `}
      </style>
    </React.Fragment>
  )
}

export default ContextSlideshow
