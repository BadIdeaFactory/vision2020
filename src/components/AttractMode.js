import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { Parallax } from '@react-spring/parallax'
import { InView } from 'react-intersection-observer'
import CategoryEyebrow from './CategoryEyebrow'
import MainButton from './MainButton'
import PioneerLede from './PioneerLede'
import Chevron from './Chevron'
import DIRECTORY from '../data/directory.json'
import { getEntry } from '../data/load'

function fadeInButton (attractId) {
  const el = document.querySelector('.button-container')
  el.style.opacity = 1
}

function fadeOutButton () {
  const el = document.querySelector('.button-container')
  el.style.opacity = 0
}

function scrollPage (event) {
  const scrollEl = document.querySelector('.scrollsnapper')
  scrollEl.scrollTo({
    top: scrollEl.offsetHeight,
    left: 0,
    behavior: 'smooth'
  })
}

AttractMode.propTypes = {
  kioskId: PropTypes.oneOf([0, 1, 2, 3, 4, 5])
}

function AttractMode (props) {
  const { kioskId = 0 } = props
  const attractLinks = DIRECTORY[kioskId].persons
  const [attractId, setAttractId] = useState(0)
  const videoRef = useRef(null)
  let nearEndTriggered = useRef(false).current
  let hasDelayed = useRef(false).current

  // Briefly delay the playback of video on start
  function handlePlay () {
    if (!hasDelayed) {
      videoRef.current.pause()
    }
    window.setTimeout(() => {
      hasDelayed = true
      if (videoRef.current && typeof videoRef.current.play === 'function') {
        videoRef.current.play()
      }
    }, 1000)
  }

  function handleTimeUpdate (event) {
    if (
      event.target.duration - event.target.currentTime <= 2.5 &&
      !nearEndTriggered
    ) {
      fadeOutButton()
      nearEndTriggered = true
    }
  }

  function handleEnded () {
    let nextId = attractId + 1
    if (nextId === attractLinks.length) {
      nextId = 0
    }

    setAttractId(nextId)
    console.log(
      '[Vision2020] Attract mode: next video is',
      nextId,
      '-',
      attractLinks[nextId].name
    )
  }

  const data = getEntry(attractLinks[attractId].slug)

  useEffect(() => {
    fadeInButton(attractId)
  }, [attractId])

  return (
    <>
      <div className="attract-container">
        <div id="attract-video" className="attract-video-container">
          <video
            autoPlay
            muted
            src={`/media/attract/${attractLinks[attractId].slug}.mp4`}
            ref={videoRef}
            onPlay={handlePlay}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
          />
        </div>
      </div>

      <CategoryEyebrow>{DIRECTORY[kioskId].name}</CategoryEyebrow>

      <div className="button-container">
        <MainButton href={`/pioneers/${attractLinks[attractId].slug}`}>
          {attractLinks[attractId].name}
        </MainButton>
      </div>

      <Chevron onClick={scrollPage} />

      <div className="scrollsnapper">
        <div className="scrollsnapper-page" onClick={scrollPage} />
        <div className="scrollsnapper-page">
          {/* PioneerLede expects to be inside a Parallax component */}
          <Parallax pages={1}>
            <PioneerLede data={data} />
          </Parallax>

          {/* When we hit the bottom of the scroll, transition to pioneer page */}
          {/* Elements created by InView will require global styles, so we put it
          inside a container to allow scoped styles */}
          <div className="navigation-trigger">
            <InView
              as="div"
              onChange={(inView, entry) => {
                if (inView) {
                  Router.push({
                    pathname: `/pioneers/${attractLinks[attractId].slug}`,
                    query: { animated: false }
                  })
                }
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .attract-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: white;
            display: flex;
            align-content: center;
            justify-content: center;
          }

          .attract-video-container {
            position: absolute;
            width: 100vmin; /* Allows somewhat viewable experience on landscape viewports */
            height: 100vh;
          }

          /* Video is set to be "full screen" for flexibility even
           though we'll only be displaying it on one screen */
          .attract-video-container video {
            width: 100%;
            height: 100%;
          }

          @media screen and (orientation: portrait) {
            .attract-video-container video {
              object-fit: cover;
            }
          }

          .button-container {
            position: fixed;
            left: 0;
            bottom: 15%;
            width: 100%;
            text-align: center;
            opacity: 0;
            transition: opacity 750ms;
          }

          button {
            background-color: #ecdb5a;
            padding: 1em;
            font-size: 2em;
            color: black;
            appearance: none;
            border: 0;
            font-family: 'Anton';
            text-transform: uppercase;
          }

          .scrollsnapper {
            width: 100vw;
            height: 100vh;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 200;
            /* Allow scroll snapping */
            scroll-snap-type: y mandatory;
            display: flex;
            flex-flow: column nowrap;
            overflow-y: auto;
          }

          /* Each "page" in the scroll snap container */
          .scrollsnapper-page {
            position: relative;
            width: 100%;
            height: 100%;
            flex: none;
            scroll-snap-align: center;
          }

          .navigation-trigger {
            position: absolute;
            bottom: 0;
            height: 1px;
            width: 100%;
          }
        `}
      </style>
    </>
  )
}

export default AttractMode
