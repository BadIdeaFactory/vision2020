import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { InView } from 'react-intersection-observer'
import CategoryEyebrow from './CategoryEyebrow'
import MainButton from './MainButton'
import PioneerLede from './PioneerLede'
import Chevron from './Chevron'
import DIRECTORY from '../data/directory.json'
import { getEntry } from '../data/load'

function fadeInButton () {
  const el = document.querySelector('.button-container')
  el.style.opacity = 1
}

function fadeOutButton () {
  const el = document.querySelector('.button-container')
  el.style.opacity = 0
}

AttractMode.propTypes = {
  kioskId: PropTypes.oneOf([0, 1, 2, 3, 4, 5])
}

function AttractMode (props) {
  const { kioskId = 0 } = props
  const attractLinks = DIRECTORY[kioskId].persons

  const [attractId, setAttractId] = useState(0)
  const videoRef = useRef(null)
  const parallax = useRef(null)
  let nearEndTriggered = useRef(false).current

  function handlePlay () {
    fadeInButton()
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

  function scrollPage (event) {
    const top = document.querySelector('.scrollcontent').offsetTop
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const data = getEntry(attractLinks[attractId].slug)

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

      <section className="scrollcontent">
        <Parallax pages={2} ref={parallax}>
          <ParallaxLayer
            offset={0}
            speed={1}
            onClick={() => parallax.current.scrollTo(1)}
          />

          <ParallaxLayer offset={1} speed={1}>
            <InView
              as="div"
              onChange={(inView, entry) => {
                // Once we hit this point, hijack scroll to complete the thing
                // Meh - it doesn't work as expected - it just resets the scroll position.
                // if (inView) {
                //   parallax.current.scrollTo(1)
                // }
                console.log('Inview:', inView)
              }}
            />
          </ParallaxLayer>

          {/* When we hit the bottom of the scroll, transition to pioneer page */}
          <ParallaxLayer offset={1} speed={1}>
            <InView
              as="div"
              style={{
                position: 'absolute',
                bottom: 0,
                height: '1px',
                width: '100%'
              }}
              onChange={(inView, entry) => {
                if (inView) {
                  Router.push(
                    `/pioneers/${attractLinks[attractId].slug}?noTransition=true`
                  )
                }
              }}
            />
          </ParallaxLayer>

          <PioneerLede data={data} later />
        </Parallax>
      </section>

      <style jsx>
        {`
          section {
            padding: 0;
          }

          .scrollcontent {
            width: 100vw;
            height: 100vh;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 200;
          }

          .attract-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            position: sticky;
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
        `}
      </style>
    </>
  )
}

export default AttractMode
