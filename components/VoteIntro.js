import React from 'react'
import UIButton from './UIButton'
import { UI_COLOR_SECONDARY } from '../main/const'

function VoteIntro (props) {
  return (
    <>
      <div className="vote-intro-container vote-thing">
        <div className="vote-intro-content">
          <div className="vote-intro-stars">
            <img src="/ui/star.svg" />
            <img src="/ui/star.svg" />
            <img src="/ui/star.svg" />
            <img src="/ui/star.svg" />
            <img src="/ui/star.svg" />
          </div>

          <h2>What's your vision in 2020?</h2>
          <p>Cast a vote and see how others voted</p>

          <div className="vote-intro-button">
            <UIButton href="/vote">Vote now</UIButton>
          </div>

          <div className="vote-intro-stars">
            <img src="/ui/star.svg" />
            <img src="/ui/star.svg" />
            <img src="/ui/star.svg" />
            <img src="/ui/star.svg" />
            <img src="/ui/star.svg" />
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .vote-intro-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: black;
            color: white;
          }

          .vote-intro-content {
            max-width: 660px;
            text-align: center;
          }

          .vote-intro-stars {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
          }

          .vote-intro-content h2 {
            font-family: 'Anton', sans-serif;
            line-height: 1;
            font-size: 180px;
            color: ${UI_COLOR_SECONDARY};
            text-align: center;
            text-transform: uppercase;
            margin: 0.75em 0 0.5em;
          }

          .vote-intro-content p {
            font-family: 'Noto Serif', serif;
            font-size: 22px;
          }

          .vote-intro-button {
            margin: 6em 0;
          }
        `}
      </style>
    </>
  )
}

export default VoteIntro
