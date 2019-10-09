import React from 'react'
import Link from 'next/link'

function VoteButton (props) {
  return (
    <>
      <div className="vote-button">
        <Link href="/vote">
          <a>
            <span>Vote</span>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .vote-button {
            position: fixed;
            right: 1em;
            bottom: 1em;
            width: 4em;
            height: 4em;
            background-color: black;
            border-radius: 50%;
            font-size: 2em;
            overflow: hidden;
          }

          a,
          a:visited,
          a:hover,
          a:active {
            text-decoration: none;
            text-transform: uppercase;
            color: white;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          a span {
            border-bottom: 3px solid white;
          }

          a:hover {
            color: red;
          }

          a:hover span {
            border-color: red;
          }
        `}
      </style>
    </>
  )
}

export default VoteButton
