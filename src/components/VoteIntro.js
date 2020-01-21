import React from 'react'
import UIButton from './UIButton'
import { UI_COLOR_SECONDARY } from '../const'
import star from '../images/ui/star.svg'

function VoteIntro (props) {
  return (
    <>
      <div className="vote-intro-container vote-thing">
        <div className="vote-intro-content">
          <div className="vote-intro-stars">
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
          </div>

          <h2>What's your vision in 2020?</h2>
          <p>Cast a vote and see how others voted!</p>

          <div className="vote-intro-button">
            <UIButton href="/vote">Vote now</UIButton>
          </div>

          <div className="vote-intro-stars">
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
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
            width: 80%;
            height: 80%;
            max-width: 660px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }

          .vote-intro-stars {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 5vh;
            max-height: 92px;
            justify-content: space-between;
          }

          .vote-intro-stars img {
            /* Setting height forces svg to maintain aspect ratio */
            height: 100%;
          }

          .vote-intro-content h2 {
            color: ${UI_COLOR_SECONDARY};
            margin: 0;
          }

          .vote-intro-content p {
            margin: 0;
          }

          .vote-intro-button {
            margin: 1em 0;
          }
        `}
      </style>
    </>
  )
}

export default VoteIntro
