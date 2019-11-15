import React, { useState, useRef } from 'react'
import CategoryEyebrow from './CategoryEyebrow'
import MainButton from './MainButton'
import DIRECTORY from '../data/directory.json'

// TODO: This needs to be created dynamically based on kiosk identity
const kioskId = 0
const attractLinks = DIRECTORY[kioskId].persons

function fadeInButton () {
  const el = document.querySelector('.button-container')
  el.style.opacity = 1
}

function fadeOutButton () {
  const el = document.querySelector('.button-container')
  el.style.opacity = 0
}

function AttractMode (props) {
  const [attractId, setAttractId] = useState(0)
  const videoRef = useRef(null)
  let nearEndTriggered = useRef(false).current

  function handlePlay () {
    fadeInButton()
  }

  function handleTimeUpdate (event) {
    if ((event.target.duration - event.target.currentTime) <= 2.5 && !nearEndTriggered) {
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
    console.log('[Vision2020] Attract mode: next video is', nextId, '-', attractLinks[nextId].name)
  }

  return (
    <>
      <div className="attract-container">
        <div id="attract-video" className="attract-video-container">
          <video
            autoPlay
            muted
            width={1080}
            height={1920}
            src={`/attract/${attractLinks[attractId].slug}.mp4`}
            ref={videoRef}
            onPlay={handlePlay}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
          />
        </div>

        <CategoryEyebrow>{DIRECTORY[kioskId].name}</CategoryEyebrow>

        <div className="button-container">
          <MainButton href={`/pioneers/${attractLinks[attractId].slug}`}>
            {attractLinks[attractId].name}
          </MainButton>
        </div>
      </div>

      <style jsx>{`
        .attract-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          position: sticky;
          background-color: white;
        }

        .attract-video-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
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
