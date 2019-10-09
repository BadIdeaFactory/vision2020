import React from 'react'
import PropTypes from 'prop-types'

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}

export default function Layout ({ className = '', ...props }) {
  return (
    <>
      <div id="vision2020" className={className}>
        {props.children}
      </div>

      <style jsx global>{`
        html {
          box-sizing: border-box;
        }

        *, *::after, *::before {
          box-sizing: inherit;
        }

        body {
          margin: 0;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
        }

        html, body {
          width: 100%;
          height: 100%;
        }

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
      `}
      </style>
    </>
  )
}
