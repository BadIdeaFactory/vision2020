import React from 'react'
import PropTypes from 'prop-types'
import SwipePrompt from './SwipePrompt'
import chevron from '../images/ui/chevron.svg'

Chevron.propTypes = {
  onClick: PropTypes.func
}

function Chevron (props) {
  const { onClick = () => {} } = props

  return (
    <>
      <div className="chevron">
        <img src={chevron} onClick={onClick} draggable={false} />
      </div>
      <SwipePrompt />

      <style jsx>
        {`
          .chevron {
            position: fixed;
            width: 100%;
            bottom: 3em; /* based off body font-size, make room for SwipePrompt */
            display: flex;
            justify-content: center;
            pointer-events: none;
          }

          .chevron img {
            width: auto; /* Maintain aspect ratio */
            height: 64px;
            height: 3.33vh; /* Matches 64px on 1920x1080 portrait */
            min-height: 32px;
            animation-name: pulse;
            animation-duration: 5s;
            animation-iteration-count: infinite;
            pointer-events: auto;
          }

          @keyframes pulse {
            0%,
            88%,
            94%,
            100% {
              transform: translateY(0);
            }
            91%,
            97% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
    </>
  )
}

export default Chevron
