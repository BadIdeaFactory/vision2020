import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'
import Layout from './Layout'
import WebHeader from './WebHeader'
import { UI_COLOR_SECONDARY } from '../const'
import DIRECTORY from '../data/directory.json'

PosterItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

function PosterItem ({ id, label }) {
  const profileImageUrlWebp = require(`../../public/posters/${id}.png?webp`)
    .default
  const profileImageUrl = require(`../../public/posters/${id}.png`).default

  return (
    <>
      <Link href="/pioneers/[id]" as={`/pioneers/${id}`}>
        <a draggable={false}>
          <div className="poster">
            <picture>
              <source type="image/webp" srcSet={profileImageUrlWebp} />
              <img
                src={profileImageUrl}
                aria-labelledby={`poster-label-${id}`}
                draggable={false}
              />
            </picture>
          </div>
          <div className="poster-label" id={`poster-label-${id}`}>
            {label}
          </div>
        </a>
      </Link>
      <style jsx>
        {`
          .poster {
            position: relative;
            width: 300px;
            height: 420px;
            border: 10px solid black;
            background-color: white;
            overflow: hidden;

            /* Allow centering on mobile */
            display: inline-block;
            margin: 0 auto;
          }

          .poster img {
            width: 100%;
            margin-top: -10%;
          }

          .poster-label {
            font-size: 18px;
            font-family: 'Anton';
            line-height: 1.4;
            margin-top: 1em;
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

const PosterList = () => (
  <Layout>
    <Head>
      <title>Pioneering women // Vision2020</title>
    </Head>

    <section>
      <WebHeader />

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
                    <PosterItem id={person.slug} label={person.name} />
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>

    <style jsx global>
      {`
        body {
          background-color: ${UI_COLOR_SECONDARY};
        }
      `}
    </style>
    <style jsx>
      {`
        .pioneers-list {
          padding: 0;
          font-size: 2vh;
          border-bottom: 10px solid black;
          padding-bottom: 1.5em;
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
            border-top: 10px solid black;
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

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 0;
        }

        .pioneers-list > ul {
          text-align: center;
        }

        .pioneers-list > ul > li {
          display: inline-block;
          text-transform: uppercase;
          text-align: center;
          font-size: 1em;
          margin-right: 20px;
          justify-content: center;
          align-items: center;
          width: 100%:
        }

        .pioneers-list > ul > li:last-child {
          margin-right: 0;
        }


        @media only screen and (max-width: 1092px) {
          .pioneers-list > ul > li {
            display: block;
            margin-right: 0;
            padding-bottom: 1.5em;
            border-bottom: 1px solid black;
            margin-top: 1.5em;
          }

          .pioneers-list > ul > li:last-child {
            border-bottom: 0;
          }
        }
      `}
    </style>
  </Layout>
)

export default PosterList
