import React from 'react'
import PropTypes from 'prop-types'

CategoryEyebrow.propTypes = {
  children: PropTypes.node
}

export default function CategoryEyebrow (props) {
  const { children } = props

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
            margin-bottom: 3em;
            color: #f5ce3e;
          }
        `}
      </style>
    </>
  )
}
