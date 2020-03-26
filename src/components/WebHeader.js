import React from 'react'
import PropTypes from 'prop-types'

WebHeader.propTypes = {
  color: PropTypes.string
}

function WebHeader ({ color }) {
  return (
    <>
      <h1>Pioneering Women</h1>
      <style jsx>
        {`
          h1 {
            text-align: center;
            text-transform: uppercase;
            font-size: 3vh;
            font-weight: normal;
            color: ${color || 'black'};
            width: 100%;
            margin: 0;
            line-height: 6vh;
            white-space: nowrap;
            border-bottom: 10px solid ${color || 'black'};
          }
        `}
      </style>
    </>
  )
}

export default WebHeader
