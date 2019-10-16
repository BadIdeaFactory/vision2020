import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import CategoryEyebrow from '../components/CategoryEyebrow'
import VoteForm from '../components/VoteForm'
import VoteResults from '../components/VoteResults'
import DemographicsForm from '../components/DemographicsForm'
import LowerNav from '../components/LowerNav'

const VotePage = () => {
  const [voteState, setVoteState] = useState(0)
  const [vote, setVote] = useState(false)
  const [demo, setDemo] = useState(false)

  function handleSubmitVote (data) {
    setVote(data)

    // Go to next vote page
    setVoteState(1)
  }

  function handleSubmitDemographics (data) {
    setDemo(data)

    // Go to next vote page
    setVoteState(2)
    submitData()
  }

  function submitData () {
    const date = new Date()
    console.log({
      date,
      vote,
      demo
    })
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

        <LowerNav left right inverse />
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
          margin-top: 3em;
        }
      `}
      </style>
    </>
  )
}

export default VotePage
