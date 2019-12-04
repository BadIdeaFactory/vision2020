import React from 'react'
import PropTypes from 'prop-types'
import { InView } from 'react-intersection-observer'
import { UI_COLOR_PRIMARY, TYPOGRAPHY_DISPLAY } from '../main/const'

PioneerTitleCard.propTypes = {
  data: PropTypes.object
}

function PioneerTitleCard ({ data }) {
  return (
    <>
      <div className="pioneer-title-card">
        <InView
          as="div"
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
      </div>

      <style jsx>
        {`
          .pioneer-title-card {
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
          :global(.pioneer-title-card > div) {
            opacity: 0;
            transform: translateY(4em);
            transition: opacity 1000ms, transform 600ms ease-out;
          }

          :global(.pioneer-title-card > div.visible) {
            opacity: 1;
            transform: translateY(0);
          }

          /* Note: do not adjust line-height here, we need
          white space for the accent mark in GONZÁLEZ */
          h2 {
            font-size: 140px;
            margin: 0 10%;
          }

          .pioneer-lifedate {
            margin-top: 1em;
            margin-bottom: 1em;
            font-weight: bold;
            font-size: 48px;
            white-space: nowrap;
          }

          .pioneer-titles {
            font-family: ${TYPOGRAPHY_DISPLAY};
            font-size: 60px;
            line-height: 1.5;
            color: ${UI_COLOR_PRIMARY};
            text-transform: uppercase;
            margin: 0 10%;
          }
        `}
      </style>
    </>
  )
}

export default PioneerTitleCard
