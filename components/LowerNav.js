import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

LowerNav.propTypes = {
  left: PropTypes.bool,
  middle: PropTypes.bool,
  right: PropTypes.bool,
  inverse: PropTypes.bool
}

export default function LowerNav (props) {
  const { left, middle, right, inverse, ...rest } = props

  return (
    <>
      <nav className={inverse ? 'lower-nav-inverse' : ''} {...rest}>
        <ul>
          <li>
            {
              left && (
                <Link href="/pioneers">
                  <a>Pioneers</a>
                </Link>
              )
            }
          </li>
          <li>
            {
              middle && (
                <Link href="/credits">
                  <a>Credits</a>
                </Link>
              )
            }
          </li>
          <li>
            {
              right && (
                <Link href="/">
                  <a>Exit</a>
                </Link>
              )
            }
          </li>
        </ul>
      </nav>

      <style jsx>
        {`
          nav {
            position: fixed;
            bottom: 0;
            text-align: center;
            width: 100%;
            padding: 3em;
            left: 0;
          }

          ul {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            justify-content: space-between;
          }

          nav > ul {
            padding: 0;
          }

          li {
            list-style-type: none;
            margin: 0;
            text-align: center;
          }

          li:first-child {
            text-align: left;
          }

          li:last-child {
            text-align: right;
          }

          a {
            color: black;
            text-decoration: none;
            font-size: 2em;
            text-transform: uppercase;
            border-bottom: 3px solid black;
            font-weight: bold;
          }

          .lower-nav-inverse a {
            color: white;
            border-color: white;
          }
        `}
      </style>
    </>
  )
}
