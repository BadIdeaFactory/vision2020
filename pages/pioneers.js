import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import CategoryEyebrow from '../components/CategoryEyebrow'
import LowerNav from '../components/LowerNav'
import NavButton from '../components/NavButton'
import { UI_COLOR_PRIMARY } from '../main/const'

PioneerItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

function PioneerItem ({ id, label }) {
  return (
    <>
      <Link href="/pioneers/[id]" as={`/pioneers/${id}`}>
        <a>
          {/* Wrapper element ensures square image at any width */}
          <div className="pioneer-pic-wrapper">
            <div className="pioneer-pic" />
          </div>
          <div className="pioneer-label">{label}</div>
        </a>
      </Link>
      <style jsx>{`
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
          background-image: url(/terrell_bitmap.jpg);
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50% 0;
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
          <li><h5>Agents of Change</h5></li>
          <ul>
            <li>
              <PioneerItem id="mary-church-terrell" label="Mary Church Terrell" />
            </li>
            <li>
              <PioneerItem id="florynce-kennedy" label="Florynce Kennedy" />
            </li>
            <li>
              <PioneerItem id="emma-gonzalez" label="Emma González" />
            </li>
          </ul>
          <li><h5>Politics & Government</h5></li>
          <ul>
            <li>
              <PioneerItem id="jeannette-rankin" label="Jeannette Rankin" />
            </li>
            <li>
              <PioneerItem id="shirley-chisholm" label="Shirley Chisholm" />
            </li>
            <li>
              <PioneerItem id="women-in-the-116th-us-congress" label="Women in the 116th U.S. Congress" />
            </li>
          </ul>
          <li><h5>Business & Finance</h5></li>
          <ul>
            <li>
              <PioneerItem id="alva-belmont" label="Alva Belmont" />
            </li>
            <li>
              <PioneerItem id="indra-nooyi" label="Indra Nooyi" />
            </li>
            <li>
              <PioneerItem id="arlan-hamilton" label="Arlan Hamilton" />
            </li>
          </ul>
          <li><h5>STEM</h5></li>
          <ul>
            <li>
              <PioneerItem id="grace-hopper" label="Grace Hopper" />
            </li>
            <li>
              <PioneerItem id="reshma-saujani" label="Reshma Saujani" />
            </li>
            <li>
              <PioneerItem id="sabrina-gonzalez-pasterski" label="Sabrina Gonzalez Pasterski" />
            </li>
          </ul>
          <li><h5>Communications & Media</h5></li>
          <ul>
            <li>
              <PioneerItem id="ida-b-wells" label="Ida B. Wells" />
            </li>
            <li>
              <PioneerItem id="gloria-steinem" label="Gloria Steinem" />
            </li>
            <li>
              <PioneerItem id="brittney-c-cooper" label="Brittney C. Cooper" />
            </li>
          </ul>
          <li><h5>Sports</h5></li>
          <ul>
            <li>
              <PioneerItem id="bernice-sandler" label="Bernice Sandler" />
            </li>
            <li>
              <PioneerItem id="dawn-staley" label="Dawn Staley" />
            </li>
            <li>
              <PioneerItem id="mone-davis" label="Mo’ne Davis" />
            </li>
          </ul>
        </ul>
        <div className="nav-button">
          <NavButton href="/credits">
            Credits
          </NavButton>
        </div>
      </div>
    </section>

    <LowerNav
      left="exit"
      right="vote"
    />

    <style jsx global>{`
      body {
        background-color: ${UI_COLOR_PRIMARY};
      }
    `}
    </style>
    <style jsx>{`
      .pioneers-list-container {
        border-top: 10px solid black;
        position: absolute;
        bottom: 52px;
        top: 1030px;
        left: 70px;
        right: 70px;
        overflow: hidden;
        overflow-y: scroll;
      }

      @media only screen and (max-width: 768px) {
        .pioneers-list-container {
          position: relative;
          top: 0;
          left: 0;
          width: calc(100vw - 60px);
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
        padding-bottom: 40px;
        border-bottom: 20px solid black;
      }

      .pioneers-list > li {
        text-align: center;
        position: relative;
        margin-top: 1.5em;
      }

      .pioneers-list > li:not(:first-of-type) {
        border-top: 1px solid black;
      }

      .pioneers-list h5 {
        display: block;
        padding-top: 0.35em;
        margin-bottom: 0.75em;
        margin-top: 0.75em;
        font-family: 'Noto Serif', serif;
        font-size: 48px;
        font-weight: bold;
        letter-spacing: -2px;
        line-height: 60px;
        white-space: nowrap;
      }

      @media only screen and (max-width: 768px) {
        .pioneers-list h5 {
          font-size: 24px;
          text-transform: capitalize;
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
        min-height: 10vh;
        margin-top: 0.25em;
        justify-content: center;
        align-items: center;
      }

      .nav-button {
        width: 100%;
        text-align: center;
      }
    `}
    </style>
  </Layout>
)

export default PioneersList
