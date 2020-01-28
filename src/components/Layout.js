import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import createActivityDetector from '../vendor/activity-detector'
import Metatags from './Metatags'
import WireframeOverlay from './WireframeOverlay'
import {
  MOBILE_BREAKPOINT,
  TYPOGRAPHY_DISPLAY,
  TYPOGRAPHY_BODY
} from '../const'
import { isKiosk } from '../kiosk'

// Imports and initializes Firebase
// Runs here because every page in our app uses <Layout />
// so loading any page initializes it
import '../firebase'

// A hook to determine user idleness
// Borrowed from https://egghead.io/lessons/react-detect-user-activity-with-a-custom-useidle-react-hook
// We've forked the contents of the `activity-detector` package
// because it reads from `document` unsafely; it fails in a server
// rendering environment. See: https://github.com/tuenti/activity-detector/issues/10
function useIdle (options) {
  const [isIdle, setIsIdle] = React.useState(false)

  React.useEffect(() => {
    const activityDetector = createActivityDetector(options)
    activityDetector.on('idle', () => setIsIdle(true))
    activityDetector.on('active', () => setIsIdle(false))

    return () => activityDetector.stop()
  }, [options])

  return isIdle
}

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}

export default function Layout ({ className = '', ...props }) {
  // After a certain amount of time is idle, return to attract screen
  // (only in Kiosk mode)
  const isIdle = useIdle({
    timeToIdle: 180000, // 3 minutes
    // Remove default 'inactivityEvent' which automatically sets to idle when page is tabbed out
    inactivityEvents: []
  })

  // If kiosk, add a class to body to make it easier to apply kiosk-specific styles
  useEffect(() => {
    if (isKiosk()) {
      document.body.classList.add('kiosk')
    }
  })

  useEffect(() => {
    if (isKiosk() && window.location.pathname !== '/' && isIdle) {
      console.log(
        '[Vision2020] Screen idle for 3 minutes, returning to attract mode.'
      )
      Router.push('/')
    }
  }, [isIdle])

  return (
    <>
      <Metatags />
      <div id="vision2020" className={className}>
        {!isKiosk() && process.env.DEV_ADA_WIREFRAME === true && (
          <WireframeOverlay />
        )}
        {props.children}
      </div>

      <style jsx global>
        {`
          html {
            box-sizing: border-box;
          }

          body.kiosk {
            user-select: none;
          }

          *,
          *::after,
          *::before {
            box-sizing: inherit;
          }

          @font-face {
            font-family: 'Anton';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(/fonts/Anton/Anton-Regular.woff2) format('woff2'),
              url(/fonts/Anton/Anton-Regular.ttf) format('truetype');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          @font-face {
            font-family: 'Noto Serif';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(/fonts/Noto_Serif/NotoSerif-Regular.ttf) format('truetype');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          @font-face {
            font-family: 'Noto Serif';
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(/fonts/Noto_Serif/NotoSerif-Italic.ttf) format('truetype');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          @font-face {
            font-family: 'Noto Serif';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(/fonts/Noto_Serif/NotoSerif-Bold.ttf) format('truetype');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          @font-face {
            font-family: 'Noto Serif';
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(/fonts/Noto_Serif/NotoSerif-BoldItalic.ttf)
              format('truetype');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          html,
          body {
            width: 100%;
            height: 100%;
          }

          body {
            margin: 0;
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
            font-family: ${TYPOGRAPHY_BODY};
            font-size: 22px;
            overscroll-behavior: none;
            overflow-x: hidden;
          }

          @media (max-width: ${MOBILE_BREAKPOINT}) {
            body {
              font-size: 16px;
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${TYPOGRAPHY_DISPLAY};
            font-weight: normal;
            text-align: center;
            text-transform: uppercase;
            line-height: 1.1;
            letter-spacing: 0.02em;
          }

          h2 {
            font-size: 180px;
            font-size: 9.375vh; /* matches 180px on 1920x1080 portrait */
          }

          h3 {
            font-size: 60px;
            font-size: 3.125vh; /* matches 60px on 1920x1080 portrait */
          }

          section {
            min-height: 100vh;
            padding: 30px;
            position: relative;
          }

          @media screen and (min-width: 768px) {
            section {
              padding: 30px 70px;
              padding-bottom: 120px;
            }
          }

          ::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </>
  )
}

/*

        #vision2020 {
          min-height: 100vh;
          padding: 30px;
          position: relative;
        }

        @media screen and (min-width: 768px) {
          #vision2020 {
            padding: 30px 80px;
            padding-bottom: 120px;
          }
        }
*/
