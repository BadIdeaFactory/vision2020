import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { useSpring, animated } from 'react-spring'
import Layout from '../components/Layout'
import CategoryEyebrow from '../components/CategoryEyebrow'
import VoteForm from '../components/VoteForm'
import DemographicsForm from '../components/DemographicsForm'
import LowerNav from '../components/LowerNav'
// import firebase from '../main/firebase'
import { UI_COLOR_SECONDARY } from '../main/const'

const VotePage = () => {
  const [voteState, setVoteState] = useState(0)
  const [vote, setVote] = useState(false)
  const [demo, setDemo] = useState(false)

  const props = useSpring({
    from: { transform: 'translate3d(0, 3vh, 0)', opacity: 0 },
    opacity: 1,
    transform: 'translate3d(0, 0, 0)'
  })

  useEffect(() => {
    // When the voteState hits the end, we submit data.
    // We have to do this in an effect hook so that we can
    // submit the latest state.
    if (voteState === 2) {
      // TODO:
      // THIS WORKS!
      // But we can't initialize it more than once per session.
      // How to access this after init?
      // const db = firebase.db

      // Add a new document with a generated id.

      console.log('firestore disabled')
      // const date = new Date()
      // firebase.firestore().collection('survey-responses').add({
      //   vote,
      //   timestamp: date, // Firebase accepts the raw Date object!
      //   ...demo,
      //   source: 'test' // TODO: Update source with environment
      // })
      //   .then(function (docRef) {
      //     console.log('[Firestore] Document written with ID: ', docRef.id)
      //   })
      //   .catch(function (error) {
      //     console.error('[Firestore] Error adding document: ', error)
      //   })
    }
  }, [voteState, demo, vote])

  function handleSubmitVote (data) {
    setVote(Number.parseInt(data, 10))

    // Go to next vote page
    setVoteState(1)
  }

  function handleSubmitDemographics (data) {
    setDemo(data)

    // Go to next vote page
    Router.push('/results')
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
          <h2>Thanks!</h2>
          <p>
            We're collecting anonymous data for internal purposes only. This
            will not be shown to the public. Share or skip ahead to see poll
            results.
          </p>
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

        <LowerNav left="pioneers" right="exit" />
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
            bottom: 240px;
          }

          :global(.vote-content h2) {
            color: ${UI_COLOR_SECONDARY};
            margin-bottom: 0.25em;
          }

          :global(.vote-content p) {
            font-size: 1.5em;
            text-align: center;
            margin: 2em 5em;
          }
        `}
      </style>
    </>
  )
}

export default VotePage
