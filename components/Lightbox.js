import React, { useEffect, useState } from 'react'

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
          }
          .lightbox img {
            max-width: 90%;
            max-height: 90%;
          }
        `}
      </style>
    </>
  )
}
