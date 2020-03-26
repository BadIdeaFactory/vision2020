import React from 'react'
import PropTypes from 'prop-types'
import { UI_COLOR_PRIMARY, MOBILE_BREAKPOINT_MAX } from '../const'

CategoryEyebrow.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
}

export default function CategoryEyebrow (props) {
  const { children, color } = props

  return (
    <>
      <h1>{children}</h1>
      <style jsx>
        {`
          h1 {
            text-align: center;
            text-transform: uppercase;
            font-size: 36px;
            font-weight: normal;
            color: ${color || UI_COLOR_PRIMARY};
            position: absolute;
            top: 80px;
            left: 0;
            width: 100%;
            pointer-events: none;
            margin: 0;
            white-space: nowrap;
          }

          @media only screen and (max-width: ${MOBILE_BREAKPOINT_MAX}) {
            h1 {
              position: fixed;
              width: calc(100% - 60px);
              left: 30px;
              top: 0;
              margin-top: 30px;
              height: 70px;
              font-size: 30px;
              border-bottom: 10px solid ${color || 'black'};
            }
          }
        `}
      </style>
    </>
  )
}
