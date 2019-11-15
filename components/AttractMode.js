import React, { useEffect } from 'react'
import CategoryEyebrow from './CategoryEyebrow'
import MainButton from './MainButton'

const attractVideos = [
  '/attract/TERRELL.mp4',
  '/attract/GONZALEZ.mp4',
  '/attract/KENNEDY.mp4'
]

let currentVideo = 0

function createVideo (url) {
  const videoEl = document.createElement('video')
  videoEl.setAttribute('src', url)
  videoEl.setAttribute('width', 1080)
  videoEl.setAttribute('height', 1920)
  videoEl.setAttribute('autoplay', 'true')
  return videoEl
}

function playVideo () {
  const url = attractVideos[currentVideo]
  const containerEl = document.querySelector('#attract-video')
  const videoEl = createVideo(url)
  containerEl.appendChild(videoEl)
  videoEl.load()

  let trigger1 = false
  let trigger2 = false

  videoEl.addEventListener('play', (event) => {
    window.dispatchEvent(new CustomEvent('attract_video:start'))
    console.log('Playing video', url)
  })

  videoEl.addEventListener('timeupdate', (event) => {
    if (event.target.currentTime >= 4 && !trigger1) {
      window.dispatchEvent(new CustomEvent('attract_video:trigger1'))
      console.log('4 seconds elapsed')
      trigger1 = true
    }
    if ((event.target.duration - event.target.currentTime) <= 1 && !trigger2) {
      window.dispatchEvent(new CustomEvent('attract_video:trigger2'))
      console.log('1 second left')
      trigger2 = true
    }
  })
  videoEl.addEventListener('ended', () => {
    window.dispatchEvent(new CustomEvent('attract_video:end'))
    videoEl.remove()
    currentVideo++
    if (currentVideo === attractVideos.length) {
      currentVideo = 0
    }

    window.setTimeout(playVideo, 2000)
  }, false)
}

function fadeInButton () {
  const el = document.querySelector('.button-container')
  el.style.opacity = 1
}

function fadeOutButton () {
  const el = document.querySelector('.button-container')
  el.style.opacity = 0
}

function AttractMode (props) {
  useEffect(() => {
    playVideo()
  })

  useEffect(() => {
    window.addEventListener('attract_video:trigger1', fadeInButton)
    window.addEventListener('attract_video:trigger2', fadeOutButton)

    return () => {
      window.removeEventListener('attract_video:trigger1', fadeInButton)
      window.removeEventListener('attract_video:trigger2', fadeOutButton)
    }
  })

  return (
    <>
      <div className="attract-container">
        <div id="attract-video" className="attract-video-container" />

        <CategoryEyebrow>Agents of Change</CategoryEyebrow>

        <div className="button-container">
          <MainButton href="/pioneers/mary-church-terrell">
            Mary Church Terrell
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
          bottom: 20%;
          width: 100%;
          text-align: center;
          opacity: 0;
          transition: opacity 500ms;
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
