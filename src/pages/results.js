import React from 'react'
import Head from 'next/head'
import { useSpring, animated } from 'react-spring'
import Layout from '../components/Layout'
import CategoryEyebrow from '../components/CategoryEyebrow'
import VoteResults from '../components/VoteResults'
import LowerNav from '../components/LowerNav'
import { UI_COLOR_SECONDARY } from '../const'

const ResultsPage = () => {
  const props = useSpring({
    from: { transform: 'translate3d(0, 3vh, 0)', opacity: 0 },
    opacity: 1,
    transform: 'translate3d(0, 0, 0)'
  })

  return (
    <>
      <Layout className="vote-page">
        <Head>
          <title>Results // Vision2020</title>
        </Head>

        <CategoryEyebrow>Cast your vote</CategoryEyebrow>

        <animated.div className="vote-content" style={props}>
          <h2>Results</h2>
          <p>Here’s how others voted:</p>
          <VoteResults />
        </animated.div>

        <LowerNav left={LowerNav.types.PIONEERS} right={LowerNav.types.EXIT} />
      </Layout>

      <style jsx>
        {`
          :global(body) {
            overflow: hidden;
          }

          :global(.vote-page) {
            background-color: black;
            color: white;

            display: flex;
            height: 100vh;
            flex-direction: column;
            align-items: stretch;
            justify-content: center;
          }

          :global(.vote-content) {
            margin: 0 20%;
            max-width: 620px;
          }

          :global(.vote-content h2) {
            color: ${UI_COLOR_SECONDARY};
            margin-bottom: 0.25em;
          }

          :global(.vote-content p) {
            text-align: center;
            margin: 2em;
          }
        `}
      </style>
    </>
  )
}

export default ResultsPage
