import React from 'react'
import PropTypes from 'prop-types'
import { InView } from 'react-intersection-observer'
import { UI_COLOR_PRIMARY, TYPOGRAPHY_DISPLAY } from '../const'

PioneerTombstoneText.propTypes = {
  data: PropTypes.object,
  animated: PropTypes.bool
}

function PioneerTombstoneText ({ data, animated = true }) {
  return (
    <>
      <div className="pioneer-tombstone-text">
        {animated ? (
          <>
            <InView
              as="div"
              className="animated"
              onChange={(inView, entry) => {
                if (inView) {
                  entry.target.classList.add('visible')
                }
              }}
            >
              <h2>{data.name}</h2>
            </InView>
            <InView
              as="div"
              className="animated"
              onChange={(inView, entry) => {
                if (inView) {
                  window.setTimeout(() => {
                    if (entry && entry.target) {
                      entry.target.classList.add('visible')
                    }
                  }, 200)
                }
              }}
            >
              <div className="pioneer-lifedate">{data.life_date}</div>
            </InView>
            <InView
              as="div"
              className="animated"
              onChange={(inView, entry) => {
                if (inView) {
                  window.setTimeout(() => {
                    if (entry && entry.target) {
                      entry.target.classList.add('visible')
                    }
                  }, 400)
                }
              }}
            >
              <div className="pioneer-titles">
                {data.titles.map((title) => (
                  <div key={title}>{title}</div>
                ))}
              </div>
            </InView>
          </>
        ) : (
          <>
            <div className="visible">
              <h2>{data.name}</h2>
            </div>
            <div className="visible">
              <div className="pioneer-lifedate">{data.life_date}</div>
            </div>
            <div className="visible">
              <div className="pioneer-titles">
                {data.titles.map((title) => (
                  <div key={title}>{title}</div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <style jsx>
        {`
          .pioneer-tombstone-text {
            position: relative;
            width: 100%;
            height: 100%;
            padding-top: 100px;
            padding-bottom: 60px;
            background-color: white;

            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: center;

            text-align: center;
          }

          /* react-spring <animated.div> does not render namespaced classnames */
          :global(.pioneer-tombstone-text > div.animated) {
            opacity: 0;
            transform: translateY(4em);
            transition: opacity 1000ms, transform 600ms ease-out;
          }

          :global(.pioneer-tombstone-text > div.animated.visible) {
            opacity: 1;
            transform: translateY(0);
          }

          /* Note: do not adjust line-height here, we need
          white space for the accent mark in GONZÁLEZ */
          h2 {
            font-size: 140px;
            font-size: 7.292vh; /* match 140px on 1920x1080 portrait */
            margin: 0 10%;
          }

          .pioneer-lifedate {
            margin-top: 1em;
            margin-bottom: 1em;
            font-weight: bold;
            font-size: 48px;
            font-size: 2.5vh; /* match 60px on 1920x1080 portrait */
            white-space: nowrap;
          }

          .pioneer-titles {
            font-family: ${TYPOGRAPHY_DISPLAY};
            font-size: 60px;
            font-size: 3.125vh; /* match 60px on 1920x1080 portrait */
            line-height: 1.2;
            color: ${UI_COLOR_PRIMARY};
            text-transform: uppercase;
            margin: 0 10%;
          }

          .pioneer-titles > div:not(:first-child) {
            margin-top: 0.3em;
          }

          .pioneer-titles > div:not(:last-child) {
            margin-bottom: 0.3em;
          }
        `}
      </style>
    </>
  )
}

export default PioneerTombstoneText
