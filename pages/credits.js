import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Layout from '../components/Layout'
import CategoryEyebrow from '../components/CategoryEyebrow'
import LowerNav from '../components/LowerNav'
import { getData } from '../data/load'

const Credits = (props) => (
  <div>
    <h5>{props.name}</h5>
    <p>{props.text}</p>
    <style jsx>
      {`
        div {
          border-top: 1px solid black;
          padding-top: 1em;
          padding-bottom: 2em;
        }
        h5 {
          margin-top: 0;
          font-size: 16px;
          text-transform: uppercase;
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

    <CategoryEyebrow>Credits</CategoryEyebrow>

    <div className="credits">
      {getData().map((item) => {
        // NOTE: the credits have no connection to the image they're crediting.
        return (
          <Credits name={item.NAME} text={item['IMAGE CREDITS']} key={item.NAME} />
        )
      })}
    </div>

    <LowerNav left right />
    <style jsx>
      {`
        .credits {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 10px;
        }
      `}
    </style>
  </Layout>
)

export default CreditsPage
