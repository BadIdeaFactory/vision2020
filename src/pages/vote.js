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
import { isKiosk } from '../kiosk'
import {
  UI_COLOR_SECONDARY,
  LOCALSTORAGE_KEY,
  DB_COLLECTION,
  DB_VOTES_DOC
} from '../const'

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
    const key = `vote${vote}`

    // Increment localstorage optimistically
    // This will be overwritten with real data on results page, if
    // internet connection exists.
    const oldData = window.localStorage.getItem(LOCALSTORAGE_KEY)
    if (oldData) {
      const parsed = JSON.parse(oldData)
      parsed[key]++
      window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(parsed))
    } else {
      // If not old data, initalize with data
      const initial = {
        vote1: 0,
        vote2: 0,
        vote3: 0,
        vote4: 0
      }
      initial[key]++
      window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(initial))
    }

    // Go to results page optimistically; let the database addition
    // happen in the background.
    Router.push('/results')

    // Set vote environment
    let source = 'test'
    if (isKiosk() === true) {
      /* global VISION2020_KIOSK_ID */
      source = 'kiosk'
      if (typeof VISION2020_KIOSK_ID !== 'undefined') {
        source += `_${VISION2020_KIOSK_ID}`
      }
    }
    console.log(`[Vision2020] Sending vote from ${source} device.`)

    if (firebase) {
      const db = firebase.firestore().collection(DB_COLLECTION)

      return Promise.all([
        // Stores each individual survey response
        db.add({
          vote,
          timestamp: date, // Firebase accepts the raw Date object!
          ...data,
          source
        }),
        // Second request increments the vote counter
        db
          .doc(DB_VOTES_DOC)
          // Note: the 'vote-counter' document must already exist
          .update({
            [key]: firebase.firestore.FieldValue.increment(1)
          })
      ])
        .then(function (refs) {
          const [docRef] = refs
          console.log('[Firestore] Document written with ID: ', docRef.id)
        })
        .catch(function (error) {
          console.error('[Firestore] Error adding document: ', error)
        })
    }
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
            bottom: 2em; /* align skip with LowerNav */

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
