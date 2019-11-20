import React, { useEffect, useState } from 'react'
import { UI_COLOR_SECONDARY } from '../main/const'

export default function Lightbox (props) {
  const [isVisible, setVisible] = useState(false)
  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() => {
    window.addEventListener('vision2020:open_lightbox', openLightbox)

    return () => {
      window.removeEventListener('vision2020:open_lightbox', openLightbox)
    }
  })

  function openLightbox (event) {
    setImageUrl(event.detail.url)
    setVisible(true)
  }

  function toggleLightbox (event) {
    setVisible(false)
  }

  const classNames = ['lightbox']
  if (isVisible) {
    classNames.push('visible')
  }

  return (
    <>
      <div className={classNames.join(' ')} onClick={toggleLightbox}>
        <img src={imageUrl} />

        {/* Technically, tapping any part of the lightbox closes it, but
        this indicator gives the viewer a prompt */}
        <div className="close-icon">
          <svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path d="M2 2l21 21m0-21L2 23" stroke="#000" strokeWidth="5" />
            </g>
          </svg>
        </div>
      </div>
      <style jsx>
        {`
          .lightbox {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.85);
            z-index: 200;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
            transition: 120ms all;
          }

          .lightbox.visible {
            opacity: 1;
            pointer-events: auto;
            cursor: pointer;
          }

          .lightbox img {
            max-width: 90%;
            max-height: 90%;
          }

          .close-icon {
            position: absolute;
            bottom: 3vh;
            width: 3vh;
            height: 3vh;
            min-height: 40px;
            min-width: 40px;
            cursor: pointer;
          }

          .close-icon path {
            stroke: white;
          }

          .close-icon path:hover {
            stroke: ${UI_COLOR_SECONDARY};
          }
        `}
      </style>
    </>
  )
}
