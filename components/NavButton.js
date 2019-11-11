import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

NavButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.any
}

export default function NavButton (props) {
  const { href, children } = props

  return (
    <>
      <Link href={href}>
        <a>{children}</a>
      </Link>

      <style jsx>{`
        a {
          background-color: white;
          color: black;
          text-decoration: none;
          font-family: 'Anton', sans-serif;
          font-size: 36px;
          white-space: nowrap;
          padding: 0.1em 0.55em;
          text-transform: uppercase;
          border: 8px solid black;
          pointer-events: auto;
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
