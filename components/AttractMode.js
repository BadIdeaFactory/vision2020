import React, { useEffect } from 'react'
import CategoryEyebrow from './CategoryEyebrow'
import MainButton from './MainButton'

function animate () {
  console.log('[Vision2020.Attract] Beginning attract loop')
  // Reset
  document.querySelector('.attract-container').classList.add('reset')
  document.querySelector('.filter').style.opacity = 0
  document.querySelector('.bg-gradient').style.opacity = 0
  document.querySelector('.bg-gradient').style.transform = 'scale(1)'
  document.querySelector('.image').style.opacity = 0
  document.querySelector('.image').style.transform = 'scale(1)'
  // document.querySelector('.image').style.filter = 'hue-rotate(90deg)'
  document.querySelector('.filter').style.opacity = 0
  document.querySelector('.attract-container').style.backgroundColor = 'white'
  document.querySelector('.attract-container').style.opacity = 1

  document.querySelector('#WE-KNOCK-AT-THE').style.transform = 'translateX(-45px)'
  document.querySelector('#BAR-OF-JUSTICE').style.transform = 'translateX(45px)'
  document.querySelector('#ASKING-AN').style.transform = 'translateX(-45px)'
  document.querySelector('#EQUAL-CHANCE').style.transform = 'translateX(-45px)'

  // Start
  window.setTimeout(() => {
    try {
      document.querySelector('.attract-container').classList.remove('reset')
      document.querySelector('#WE-KNOCK-AT-THE').style.opacity = 1
      document.querySelector('#WE-KNOCK-AT-THE').style.transform = 'translateX(0)'
    } catch {
      console.log('animation aborted')
    }
  }, 500)
  window.setTimeout(() => {
    try {
      document.querySelector('#BAR-OF-JUSTICE').style.opacity = 1
      document.querySelector('#BAR-OF-JUSTICE').style.transform = 'translateX(0)'
    } catch {
      console.log('animation aborted')
    }
  }, 1000)
  window.setTimeout(() => {
    try {
      document.querySelector('#ASKING-AN').style.opacity = 1
      document.querySelector('#ASKING-AN').style.transform = 'translateX(0)'
    } catch {
      console.log('animation aborted')
    }
  }, 1500)
  window.setTimeout(() => {
    try {
      document.querySelector('#EQUAL-CHANCE').style.opacity = 1
      document.querySelector('#EQUAL-CHANCE').style.transform = 'translateX(0)'
    } catch {
      console.log('animation aborted')
    }
  }, 2000)
  window.setTimeout(() => {
    try {
      document.querySelector('.attract-container').style.backgroundColor = 'black'
      document.querySelector('#WE-KNOCK-AT-THE').style.opacity = 0
      document.querySelector('#BAR-OF-JUSTICE').style.opacity = 0
      document.querySelector('#ASKING-AN').style.opacity = 0
      document.querySelector('#EQUAL-CHANCE').style.opacity = 0
    } catch {
      console.log('animation aborted')
    }
  }, 2750)
  window.setTimeout(() => {
    try {
      document.querySelector('.bg-gradient').style.opacity = 1
      document.querySelector('.bg-gradient').style.transform = 'scale(1.1)'
      document.querySelector('.image').style.opacity = 1
      document.querySelector('.image').style.transform = 'scale(1.1)'
      document.querySelector('.image').style.filter = 'hue-rotate(90deg)'
    } catch {
      console.log('animation aborted')
    }
  }, 4250)
  window.setTimeout(() => {
    try {
      document.querySelector('.filter').style.opacity = 1
    } catch {
      console.log('animation aborted')
    }
  }, 5500)
  window.setTimeout(() => {
    try {
      document.querySelector('.attract-container').style.opacity = 0
    } catch {
      console.log('animation aborted')
    }
  }, 7500)
}

function AttractMode (props) {
  useEffect(() => {
    try {
      animate()
    } catch (err) {
      console.log('Initial attract mode aborted')
    }
    const cycleId = window.setInterval(animate, 10000)
    return () => {
      console.log('Clearing attract mode')
      window.clearInterval(cycleId)
    }
  }, [])

  return (
    <>
      <div className="attract-container">
        <div className="quote">
          <svg width="836px" height="1126px" viewBox="0 0 836 1126" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontWeight="normal">
              <g id="POSTER_TERRELL" transform="translate(-119.000000, -334.000000)" fill="#000000">
                <g id="QUOTE" transform="translate(87.000000, 352.000000)">
                  <text id="WE-KNOCK-AT-THE" fontFamily="Knockout-HTF68-FullFeatherwt, Knockout" fontSize="100" line-spacing="50" letterSpacing="0.800000012">
                    <tspan x="185.55" y="62.8">WE KNOCK AT THE  </tspan>
                  </text>
                  <text id="ASKING-AN" fontFamily="Knockout-HTF68-FullFeatherwt, Knockout" fontSize="100" line-spacing="50" letterSpacing="0.800000012">
                    <tspan x="282.15" y="659.8">ASKING AN</tspan>
                  </text>
                  <text id="BAR-OF-JUSTICE" fontFamily="Knockout-HTF70-FullWelterwt, Knockout" fontSize="250" line-spacing="220" letterSpacing="4">
                    <tspan x="123.125" y="351">BAR OF </tspan>
                    <tspan x="28" y="571">JUSTICE,</tspan>
                  </text>
                  <text id="EQUAL-CHANCE" fontFamily="Knockout-HTF70-FullWelterwt, Knockout" fontSize="250" line-spacing="220" letterSpacing="4">
                    <tspan x="125" y="948">EQUAL </tspan>
                    <tspan x="45" y="1168">CHANCE</tspan>
                  </text>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="bg-gradient" />
        <div
          className="image"
          style={{
            backgroundImage: 'url(/terrell_bitmap.png)'
          }}
        />
        <div
          className="filter"
          style={{
            backgroundImage: 'url(/terrell_bitmap.png), linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(249,255,0,1) 100%)'
          }}
        />

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
          transition: background-color 2000ms, opacity 2000ms;
          z-index: -1;
          background-color: white;
        }
        .reset, .reset * {
          transition: none !important;
        }
        .quote {
          margin: 0 auto;
          text-align: center;
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        .image {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: all 2000ms;
          background-position: center 200px;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .filter {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: all 2000ms;
          background-position: center 200px;
          background-repeat: no-repeat;
          background-size: cover;
          background-blend-mode: screen;
          transform: scale(1.1);
        }
        .bg-gradient {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: all 2000ms;

          background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(153,153,153,1) 18%, rgba(0,0,0,1) 100%);
        }
        .reset .bg-gradient {
          transition: unset;
        }
        svg text {
          opacity: 0;
          transition: opacity 2000ms, transform 2500ms;
        }
        .button-container {
          position: fixed;
          left: 0;
          bottom: 200px;
          width: 100%;
          text-align: center;
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
