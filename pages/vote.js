import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import CategoryEyebrow from '../components/CategoryEyebrow'
import VoteForm from '../components/VoteForm'
import VoteResults from '../components/VoteResults'
import DemographicsForm from '../components/DemographicsForm'
import LowerNav from '../components/LowerNav'
import firebase from '../main/firebase'
import { UI_COLOR_SECONDARY } from '../main/const'

const VotePage = () => {
  const [voteState, setVoteState] = useState(0)
  const [vote, setVote] = useState(false)
  const [demo, setDemo] = useState(false)

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
      const date = new Date()
      firebase.firestore().collection('survey-responses').add({
        vote,
        timestamp: date, // Firebase accepts the raw Date object!
        ...demo,
        source: 'test' // TODO: Update source with environment
      })
        .then(function (docRef) {
          console.log('[Firestore] Document written with ID: ', docRef.id)
        })
        .catch(function (error) {
          console.error('[Firestore] Error adding document: ', error)
        })
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
    setVoteState(2)
  }

  let voteContent
  switch (voteState) {
    case 0:
    default:
      voteContent = (
        <>
          <div style={{ fontSize: '2em', textAlign: 'center' }}>
            <h2>What’s your vision?</h2>
            <p><em>Select a goal to support in 2020</em></p>
          </div>
          <VoteForm onSubmit={handleSubmitVote} />
        </>
      )
      break
    case 1:
      voteContent = (
        <>
          <div style={{ fontSize: '2em', textAlign: 'center' }}>
            <h2>Thanks!</h2>
            <p><em>We’re collecting anonymous information for internal purposes. Share or skip ahead to see poll results.</em></p>
            <DemographicsForm onSubmit={handleSubmitDemographics} />
          </div>
        </>
      )
      break
    case 2:
      voteContent = (
        <>
          <div style={{ fontSize: '2em', textAlign: 'center' }}>
            <h2>Thank you!</h2>
            <p><em>Here’s how others voted:</em></p>
            <VoteResults />
          </div>
        </>
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

        <LowerNav
          left="pioneers"
          right="exit"
        />
      </Layout>

      <style jsx>{`
        :global(.vote-page) {
          background-color: black;
          color: white;

          display: flex;
          height: 100vh;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        h2 {
          margin: 3em 20% 0;
          color: ${UI_COLOR_SECONDARY}
        }
      `}
      </style>
    </>
  )
}

export default VotePage
