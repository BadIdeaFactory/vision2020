import React from 'react'
import PropTypes from 'prop-types'

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
            color: ${color || 'black'};
          }

          @media only screen and (max-width: 768px) {
            h1 {
              font-size: 18px;
              margin-top: 40px;
            }
          }
        `}
      </style>
    </>
  )
}
