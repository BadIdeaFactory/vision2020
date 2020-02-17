import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {
  MOBILE_BREAKPOINT,
  UI_BUTTON_BORDER_LG,
  UI_BUTTON_BORDER_SM,
  TYPE_BUTTON_LG,
  TYPE_BUTTON_SM
} from '../const'

NavButton.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  children: PropTypes.any
}

export default function NavButton (props) {
  const { href, onClick = () => {}, style, children } = props

  return (
    <>
      {/* If `href` is provided, render a Next.js <Link>, otherwise
        render a div with an onChange handler.
      */}
      {href ? (
        <Link href={href}>
          <a style={style} draggable={false}>
            {children}
          </a>
        </Link>
      ) : (
        <div style={style} onClick={onClick}>
          {children}
        </div>
      )}

      <style jsx>
        {`
          a,
          div {
            padding: 0.1em 0.55em;
            text-decoration: none;
            font-family: 'Anton', sans-serif;
            font-size: ${TYPE_BUTTON_LG};
            text-transform: uppercase;
            white-space: nowrap;
            pointer-events: auto;

            background-color: white;
            color: black;
            border: ${UI_BUTTON_BORDER_LG} solid black;
          }

          div {
            display: inline-block;
            cursor: pointer;
          }

          @media screen and (max-width: ${MOBILE_BREAKPOINT}),
            screen and (orientation: landscape) {
            a,
            div {
              font-size: ${TYPE_BUTTON_SM};
              border: ${UI_BUTTON_BORDER_SM} solid black;
            }
          }
        `}
      </style>
    </>
  )
}
