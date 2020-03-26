import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Layout from '../components/Layout'
import CategoryEyebrow from '../components/CategoryEyebrow'
import LowerNav from '../components/LowerNav'
import { getData } from '../data/load'
import {
  UI_COLOR_PRIMARY,
  UI_COLOR_SECONDARY,
  MOBILE_BREAKPOINT_MAX
} from '../const'
import { isKiosk } from '../kiosk'
import WebHeader from '../components/WebHeader'

const TEAM = [
  {
    name: 'ORGANIZER',
    text:
      'Drexel University, Institute for Women’s Health and Leadership, Vision 2020, Lynn H. Yeakel, president and founder'
  },
  {
    name: 'DESIGNERS',
    text:
      'Dome Collective in collaboration with MakerB Studio (Furniture Design), Bad Idea Factory (Software Development), This is our work (Graphic Design)'
  },
  {
    name: 'CURATORS/PROJECT MANAGERS',
    text: 'Melissa Clemmer and Page Talbott, Talbott Exhibits and Planning'
  },
  {
    name: 'FABRICATORS',
    text: 'Art Guild, Inc.'
  },
  {
    name: 'VISION 2020 HISTORIAN',
    text: 'Joanne Murray'
  }
]

const Credits = (props) => (
  <div>
    <h5>{props.name}</h5>
    <p>{props.text}</p>
    <style jsx>
      {`
        div {
          border-top: 1px solid #8fddd1;
        }

        h5 {
          margin-top: 1em;
          margin-bottom: 1em;
          font-size: 20px;
          color: #8fddd1;
          text-align: left;
        }
      `}
    </style>
  </div>
)

Credits.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string
}

const CreditsPage = () => (
  <Layout>
    <Head>
      <title>Credits // Vision2020</title>
    </Head>

    {isKiosk() && <CategoryEyebrow>Credits</CategoryEyebrow>}

    <div className="credits-container">
      {!isKiosk() && <WebHeader color={UI_COLOR_SECONDARY} />}

      <h3>Exhibition Team</h3>

      <div className="credits">
        {TEAM.map((item) => {
          // NOTE: the credits have no connection to the image they're crediting.
          return <Credits name={item.name} text={item.text} key={item.name} />
        })}
      </div>

      <h3>Photo Credits</h3>

      <div className="credits">
        {getData().map((item) => {
          // NOTE: the credits have no connection to the image they're crediting.
          return (
            <Credits
              name={item.name}
              text={item.image_credits}
              key={item.key}
            />
          )
        })}
      </div>
    </div>

    {isKiosk() ? (
      <LowerNav
        left={LowerNav.types.PIONEERS}
        middle={LowerNav.types.EXIT}
        right={LowerNav.types.VOTE}
      />
    ) : (
      <LowerNav left={LowerNav.types.PIONEERS} right={LowerNav.types.EXIT} />
    )}

    <style jsx global>
      {`
        body {
          background-color: black;
          color: white;
        }

        body:not(.kiosk) .credits-container {
          margin: 20px auto;
        }
      `}
    </style>
    <style jsx>
      {`
        .credits-container {
          max-width: 620px;
          margin: 160px auto 200px;
        }

        h3 {
          color: ${UI_COLOR_PRIMARY};
          margin-top: 0.75em;
          margin-bottom: 1em;
          padding-top: 1em;
        }

        h3:not(:first-of-type) {
          border-top: 10px solid ${UI_COLOR_PRIMARY};
        }

        .credits {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        @media only screen and (max-width: ${MOBILE_BREAKPOINT_MAX}) {
          .credits-container {
            width: auto;
            padding: 0 20px;
          }

          h3 {
            font-size: 24px;
            text-align: left;
            margin-bottom: 1.5em;
            margin-top: 1em;
          }

          .credits {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}
    </style>
  </Layout>
)

export default CreditsPage
