import React from 'react'
import PropTypes from 'prop-types'
import { UI_COLOR_PRIMARY } from '../main/const'

CategoryEyebrow.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
}

export default function CategoryEyebrow (props) {
  const { children, color } = props

  return (
    <>
      <h1>
        {children}
      </h1>
      <style jsx>
        {`
          h1 {
            text-align: center;
            text-transform: uppercase;
            font-size: 36px;
            font-weight: normal;
            margin-top: 80px;
            color: ${color || UI_COLOR_PRIMARY};
          }

          @media only screen and (max-width: 768px) {
            h1 {
              position: fixed;
              width: calc(100% - 60px);
              left: 30px;
              top: 0;
              margin-top: 30px;
              height: 70px;
              font-size: 30px;
              border-bottom: 10px solid black;
            }
          }
        `}
      </style>
    </>
  )
}
