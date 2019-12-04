import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import CategoryEyebrow from '../components/CategoryEyebrow'
import LowerNav from '../components/LowerNav'
import NavButton from '../components/NavButton'
import { UI_COLOR_PRIMARY } from '../main/const'
import { getEntry } from '../data/load'
import DIRECTORY from '../data/directory.json'

PioneerItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

function PioneerItem ({ id, label }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const data = getEntry(id)
  const profileImageTrace = require(`../public/portraits/${data.portrait_img}?trace`)
  const profileImageUrl = require(`../public/portraits/${data.portrait_img}?webp&resize&size=600`)

  return (
    <>
      <Link href="/pioneers/[id]" as={`/pioneers/${id}`}>
        <a>
          {/* Wrapper element ensures square image at any width */}
          <div className="pioneer-pic-wrapper">
            <div className="pioneer-pic">
              {/* Inline svg trace while image is loading */}
              <img
                src={profileImageTrace.trace}
                aria-hidden="true"
                style={{ opacity: imageLoaded ? 0 : 1 }}
              />
              {/* Image fades in after loading */}
              <img
                src={profileImageUrl}
                style={{ opacity: imageLoaded ? 1 : 0 }}
                onLoad={(e) => {
                  setImageLoaded(true)
                }}
                aria-labelledby={`pioneer-label-${id}`}
              />
            </div>
          </div>
          <div className="pioneer-label" id={`pioneer-label-${id}`}>
            {label}
          </div>
        </a>
      </Link>
      <style jsx>
        {`
          .pioneer-pic-wrapper {
            position: relative;
            width: 100%;
            padding-bottom: 100%;
          }

          .pioneer-pic {
            position: absolute;
            width: 100%;
            height: 100%;
            border: 20px solid black;
            background-color: white;
            overflow: hidden;
          }

          .pioneer-pic img {
            height: 135%;
            left: -62%;
            position: absolute;
            bottom: 0;
            transition: '150ms opacity';
          }

          @media only screen and (max-width: 768px) {
            .pioneer-pic-wrapper {
              display: none;
            }
          }

          .pioneer-label {
            font-size: 24px;
            font-family: 'Anton';
            line-height: 1.4;
            margin-top: 1em;
          }

          @media only screen and (max-width: 768px) {
            .pioneer-label {
              font-size: 18px;
              border-top: 1px solid black;
              line-height: 50px;
              margin-top: 0;
            }
          }

          a,
          a:visited,
          a:active,
          a:hover {
            text-decoration: none;
            color: black;
          }
        `}
      </style>
    </>
  )
}

const PioneersList = () => (
  <Layout>
    <Head>
      <title>Pioneering women // Vision2020</title>
    </Head>

    <section>
      <CategoryEyebrow color="black">Pioneers</CategoryEyebrow>

      <h2>Pioneering women</h2>

      <div className="pioneers-list-container">
        <ul className="pioneers-list">
          {DIRECTORY.map((category) => (
            <React.Fragment key={category.key}>
              <li>
                <h5>{category.name}</h5>
              </li>
              <ul>
                {category.persons.map((person) => (
                  <li key={person.slug}>
                    <PioneerItem id={person.slug} label={person.name} />
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </ul>
        <div className="nav-button">
          <NavButton href="/credits">Credits</NavButton>
        </div>
      </div>
    </section>

    <LowerNav left="exit" right="vote" />

    <style jsx global>
      {`
        body {
          background-color: ${UI_COLOR_PRIMARY};
        }
      `}
    </style>
    <style jsx>
      {`
        .pioneers-list-container {
          border-top: 10px solid black;
        }

        @media only screen and (max-width: 768px) {
          .pioneers-list-container {
            position: relative;
            top: 0;
            left: 0;
            width: calc(100vw - 60px);
            position: absolute;
            top: 90px;
            left: 30px;
            bottom: 60px;
          }
        }

        h2 {
          width: 100%;
          margin-top: 400px;
        }

        @media only screen and (max-width: 768px) {
          h2 {
            display: none;
          }
        }

        .pioneers-list {
          padding: 0;
          font-size: 2vh;
          border-bottom: 10px solid black;
        }

        @media only screen and (min-width: 768px) {
          .pioneers-list {
            padding-bottom: 60px;
            border-bottom: 20px solid black;
          }
        }

        .pioneers-list > li {
          text-align: center;
          position: relative;
          margin-top: 0.5em;
        }

        .pioneers-list > li:not(:first-of-type) {
          border-top: 10px solid black;
        }

        @media only screen and (min-width: 768px) {
          .pioneers-list > li {
            margin-top: 1.5em;
          }

          .pioneers-list > li:not(:first-of-type) {
            border-top: 1px solid black;
          }
        }

        .pioneers-list h5 {
          display: block;
          font-family: 'Noto Serif', serif;
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 0.75em;
          margin-top: 0.75em;
          white-space: nowrap;
          letter-spacing: -1px;
          text-transform: initial;
        }

        @media screen and (min-width: 768px) {
          .pioneers-list h5 {
            font-size: 48px;
            line-height: 60px;
            padding-top: 0.35em;
          }
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 0;
        }

        @media screen and (min-width: 768px) {
          .pioneers-list > ul {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 20px;
            margin: 0 auto;
          }

          .pioneers-list > ul > li {
            display: inline-block;
          }
        }

        .pioneers-list > ul > li {
          text-transform: uppercase;
          text-align: center;
          font-size: 1em;
          margin-top: 0.25em;
          justify-content: center;
          align-items: center;
        }

        .nav-button {
          width: 100%;
          text-align: center;
          margin: 2em 0;
        }

        @media screen and (min-width: 768px) {
          .nav-button {
            /* Position to align with other nav buttons */
            position: relative;
            top: 90px;
          }
        }
      `}
    </style>
  </Layout>
)

export default PioneersList
