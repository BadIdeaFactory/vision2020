import React from 'react'
import PropTypes from 'prop-types'
import { ParallaxLayer } from '@react-spring/parallax'
import { useInView } from 'react-intersection-observer'
import PioneerTombstoneText from './PioneerTombstoneText'

PioneerLede.propTypes = {
  data: PropTypes.object,
  animated: PropTypes.bool
}

export default function PioneerLede ({ data, animated = true }) {
  // Lazy-load the image for the attract page
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true
  })
  const profileImageUrl = require(`../../public/portraits/${data.portrait_img}`)
    .default

  return (
    <>
      <ParallaxLayer
        offset={0}
        speed={1}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="pioneer-tombstone-text-container">
          <PioneerTombstoneText data={data} animated={animated} />
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={0.5}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="profile-image-container">
          <img
            ref={ref}
            src={inView ? profileImageUrl : ''}
            className={animated ? 'animated' : ''}
            draggable={false}
            onLoad={(e) => {
              const el = e.target
              window.setTimeout(() => {
                el.style.opacity = 1
                el.style.transform = 'translateY(0)'
              }, 120)
            }}
          />
        </div>
      </ParallaxLayer>

      <style jsx global>
        {`
          body:not(.kiosk) .profile-image-container {
            padding-top: 6vh;
          }
        `}
      </style>
      <style jsx>
        {`
          .profile-image-container {
            display: flex;
            justify-content: center;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 40%;
            overflow: hidden;
            background-color: black;
          }

          .profile-image-container img {
            height: 100%;
          }

          .profile-image-container img.animated {
            opacity: 0;
            transform: translateY(5vh);
            transition: 500ms opacity ease-in-out, 500ms transform ease-in-out;
          }

          .pioneer-tombstone-text-container {
            position: absolute;
            top: 40%;
            left: 0;
            right: 0;
            background-color: white;
          }
        `}
      </style>
    </>
  )
}
