import React from 'react'
import PropTypes from 'prop-types'
import NavButton from './NavButton'

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
                <NavButton href="/pioneers">
                  Pioneers
                </NavButton>
              )
            }
          </li>
          <li>
            {
              middle && (
                <NavButton href="/credits">
                  Credits
                </NavButton>
              )
            }
          </li>
          <li>
            {
              right && (
                <NavButton href="/">
                  Exit
                </NavButton>
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
            pointer-events: none;
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
        `}
      </style>
    </>
  )
}
