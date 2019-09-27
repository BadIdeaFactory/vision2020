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
      <style jsx>
        {`
          #vision2020 {
            min-height: 100vh;
          }
        `}
      </style>
    </>
  )
}
