import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useSpring, animated } from 'react-spring'
import Layout from '../components/Layout'
import CategoryEyebrow from '../components/CategoryEyebrow'
import VoteResults from '../components/VoteResults'
import LowerNav from '../components/LowerNav'
import { UI_COLOR_SECONDARY } from '../const'
import firebase from '../firebase'

const ResultsPage = () => {
  const [results, setResults] = useState(null)
  const props = useSpring({
    from: { transform: 'translate3d(0, 3vh, 0)', opacity: 0 },
    opacity: 1,
    transform: 'translate3d(0, 0, 0)'
  })

  useEffect(() => {
    const db = firebase.firestore().collection('survey-responses')
    db.doc('vote_counter')
      .get()
      .then(function (doc) {
        if (doc.exists) {
          const data = doc.data()
          console.log('[Firestore] Vote counter data:', data)
          setResults(data)
          window.localStorage.setItem('vision2020_votes', JSON.stringify(data))
        } else {
          // doc.data() will be undefined in this case
          console.log('[Firestore] Document `vote_counter` is not found!')
        }
        // TODO: catch rate-limiting errors?
      })
      .catch(function (error) {
        console.error(
          '[Firestore] Error getting vote counter document: ',
          error
        )

        // Fallback to localstroage
        const data = window.localStorage.getItem('vision2020_votes')
        if (data) {
          setResults(JSON.parse(data))
        }
      })
  }, [])

  return (
    <>
      <Layout className="vote-page">
        <Head>
          <title>Results // Vision2020</title>
        </Head>

        <CategoryEyebrow>Cast your vote</CategoryEyebrow>

        {results && (
          <animated.div className="vote-content" style={props}>
            <h2>Results</h2>
            <p>Here’s how others voted:</p>
            <VoteResults results={results} />
          </animated.div>
        )}

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
