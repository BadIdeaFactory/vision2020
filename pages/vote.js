import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import VoteForm from '../components/VoteForm'
import LowerNav from '../components/LowerNav'
import './vote.scss'

const VotePage = () => {
  const [hasVoted, setVote] = useState(null)

  function handleSubmitVote (data) {
    setVote(data)
    console.log(data)
  }

  return (
    <Layout className="vote-page">
      <Head>
        <title>Cast your vote // Vision2020</title>
      </Head>

      <h1>Cast your vote</h1>

      {hasVoted ? (
        <>
          <h2>Thank you!</h2>
          <p><em>Here’s how others voted:</em></p>
          <VoteForm onSubmit={handleSubmitVote} />
        </>
      ) : (
        <>
          <h2>What’s your vision?</h2>
          <p><em>Select a goal to support in 2020</em></p>
          <p>TODO: chart</p>
        </>
      )}

      <LowerNav left right inverse />
    </Layout>
  )
}

export default VotePage
