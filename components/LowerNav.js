import React from 'react'
import PropTypes from 'prop-types'
import NavButton from './NavButton'

const PioneersButton = () => <NavButton href="/pioneers">Pioneers</NavButton>

const CreditsButton = () => <NavButton href="/credits">Credits</NavButton>

const ExitButton = () => <NavButton href="/">Exit</NavButton>

const VoteButton = () => <NavButton href="/vote">Vote</NavButton>

function getButton (string) {
  switch (string) {
    case 'pioneers':
      return <PioneersButton />
    case 'credits':
      return <CreditsButton />
    case 'exit':
      return <ExitButton />
    case 'vote':
      return <VoteButton />
    default:
      console.error(`Nav button ${string} is not valid.`)
      break
  }

  return null
}

LowerNav.propTypes = {
  left: PropTypes.string,
  middle: PropTypes.string,
  right: PropTypes.string
}

export default function LowerNav (props) {
  const { left, middle, right, ...rest } = props

  return (
    <>
      <nav {...rest}>
        <ul>
          <li>{left && getButton(left)}</li>
          <li>{middle && getButton(middle)}</li>
          <li>{right && getButton(right)}</li>
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
            z-index: 2000;
          }

          @media only screen and (max-width: 768px) {
            nav {
              display: none;
            }
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
