import React from 'react'
import PropTypes from 'prop-types'
import { ParallaxLayer } from '@react-spring/parallax'
import PioneerTitleCard from './PioneerTitleCard'

PioneerLede.propTypes = {
  data: PropTypes.object
}

export default function PioneerLede ({ data }) {
  const profileImageUrl = require(`../public/portraits/${data.portrait_img}?webp`)

  return (
    <>
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
            src={profileImageUrl}
            onLoad={(e) => {
              e.target.style.opacity = 1
              e.target.style.transform = 'translateY(0)'
            }}
          />
        </div>
      </ParallaxLayer>

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
        <div className="pioneer-title-card-container">
          <PioneerTitleCard data={data} />
        </div>
      </ParallaxLayer>
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
            opacity: 0;
            transform: translateY(3vh);
            transition: 500ms opacity ease-in-out, 500ms transform ease-in-out;
          }

          .pioneer-title-card-container {
            position: absolute;
            top: 40%;
            left: 0;
            right: 0;
            bottom: 160px;
            background-color: white;
          }
        `}
      </style>
    </>
  )
}
