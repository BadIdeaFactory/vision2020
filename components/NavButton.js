import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

NavButton.propTypes = {
  href: PropTypes.string.isRequired,
  style: PropTypes.object,
  children: PropTypes.any
}

export default function NavButton (props) {
  const { href, style, children } = props

  return (
    <>
      <Link href={href}>
        <a style={style}>{children}</a>
      </Link>

      <style jsx>{`
        a {
          padding: 0.1em 0.55em;
          text-decoration: none;
          font-family: 'Anton', sans-serif;
          font-size: 36px;
          text-transform: uppercase;
          white-space: nowrap;
          pointer-events: auto;

          background-color: white;
          color: black;
          border: 8px solid black;
        }

        @media only screen and (max-width: 768px) {
          a {
            font-size: 18px;
          }
        }
      `}
      </style>
    </>
  )
}
