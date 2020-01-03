import React, { useState } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { useSpring, animated } from 'react-spring'
import Layout from '../components/Layout'
import CategoryEyebrow from '../components/CategoryEyebrow'
import VoteForm from '../components/VoteForm'
import DemographicsForm from '../components/DemographicsForm'
import LowerNav from '../components/LowerNav'
import firebase from '../firebase'
import { UI_COLOR_SECONDARY } from '../const'

const VotePage = () => {
  const [voteState, setVoteState] = useState(0)
  const [vote, setVote] = useState(false)

  const props = useSpring({
    from: { transform: 'translate3d(0, 3vh, 0)', opacity: 0 },
    opacity: 1,
    transform: 'translate3d(0, 0, 0)'
  })

  function handleSubmitVote (data) {
    setVote(Number.parseInt(data, 10))

    // Go to next vote page
    setVoteState(1)
  }

  function handleSubmitDemographics (data) {
    // Add a new document with a generated id.
    const date = new Date()
    firebase
      .firestore()
      .collection('survey-responses')
      .add({
        vote,
        timestamp: date, // Firebase accepts the raw Date object!
        ...data,
        source: 'test' // TODO: Update source with environment
      })
      .then(function (docRef) {
        console.log('[Firestore] Document written with ID: ', docRef.id)
      })
      .catch(function (error) {
        console.error('[Firestore] Error adding document: ', error)
      })
      .finally(function () {
        // Go to next vote page
        Router.push('/results')
      })
  }

  let voteContent
  switch (voteState) {
    case 0:
    default:
      voteContent = (
        <animated.div className="vote-content" style={props}>
          <h2>What’s your vision?</h2>
          <p>Select a goal to support in 2020</p>
          <VoteForm onSubmit={handleSubmitVote} />
        </animated.div>
      )
      break
    case 1:
      voteContent = (
        <animated.div className="vote-content" style={props}>
          <DemographicsForm onSubmit={handleSubmitDemographics} />
        </animated.div>
      )
      break
  }

  return (
    <>
      <Layout className="vote-page">
        <Head>
          <title>Cast your vote // Vision2020</title>
        </Head>

        <CategoryEyebrow>Cast your vote</CategoryEyebrow>

        {voteContent}

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
            margin: 0 10%;
            /* Bottom alignment keeps interactive area in ADA zone */
            position: absolute;
            bottom: 1.5em; /* align skip with LowerNav */

            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 70%;
          }

          :global(.vote-content h2) {
            color: ${UI_COLOR_SECONDARY};
            margin: 0;
          }

          :global(.vote-content p) {
            text-align: center;
            width: 60%;
            min-width: 520px;
            margin: 0 auto;
          }
        `}
      </style>
    </>
  )
}

export default VotePage
