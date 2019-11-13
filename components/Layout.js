import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import WireframeOverlay from './WireframeOverlay'

// Imports and initializes Firebase
// Runs here because every page in our app uses <Layout />
// so loading any page initializes it
import '../main/firebase'

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}

export default function Layout ({ className = '', ...props }) {
  return (
    <>
      <Head>
        {/* <link href="https://fonts.googleapis.com/css?family=Anton|Noto+Serif:400,400i,700,700i&display=swap" rel="stylesheet" /> */}
      </Head>

      <div id="vision2020" className={className}>
        <WireframeOverlay />
        {props.children}
      </div>

      <style jsx global>{`
        html {
          box-sizing: border-box;
        }

        *, *::after, *::before {
          box-sizing: inherit;
        }

        @font-face {
          font-family: 'Anton';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(/fonts/Anton/Anton-Regular.woff2) format('woff2'),
               url(/fonts/Anton/Anton-Regular.ttf) format('truetype');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        @font-face {
          font-family: 'Noto Serif';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(/fonts/Noto_Serif/NotoSerif-Regular.ttf) format('truetype');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        @font-face {
          font-family: 'Noto Serif';
          font-style: italic;
          font-weight: 400;
          font-display: swap;
          src: url(/fonts/Noto_Serif/NotoSerif-Italic.ttf) format('truetype');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        @font-face {
          font-family: 'Noto Serif';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(/fonts/Noto_Serif/NotoSerif-Bold.ttf) format('truetype');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        @font-face {
          font-family: 'Noto Serif';
          font-style: italic;
          font-weight: 700;
          font-display: swap;
          src: url(/fonts/Noto_Serif/NotoSerif-BoldItalic.ttf) format('truetype');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        html, body {
          width: 100%;
          height: 100%;
        }

        body {
          margin: 0;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
          font-family: 'Noto Serif', serif;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Anton', sans-serif;
          font-weight: normal;
          text-transform: uppercase;
          line-height: 1.1;
          text-align: center;
          letter-spacing: 0.02em;
        }

        h2 {
          font-size: 180px;
        }

        h3 {
          font-size: 60px;
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
