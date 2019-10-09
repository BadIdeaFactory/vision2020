import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import CategoryEyebrow from '../components/CategoryEyebrow'
import VoteForm from '../components/VoteForm'
import LowerNav from '../components/LowerNav'

const VotePage = () => {
  const [hasVoted, setVote] = useState(null)

  function handleSubmitVote (data) {
    setVote(data)
    console.log(data)
  }

  return (
    <>
      <Layout className="vote-page">
        <Head>
          <title>Cast your vote // Vision2020</title>
        </Head>

        <CategoryEyebrow>Cast your vote</CategoryEyebrow>

        {hasVoted ? (
          <>
            <div style={{ fontSize: '2em', textAlign: 'center' }}>
              <h2>Thank you!</h2>
              <p><em>Here’s how others voted:</em></p>
              <p>TODO: chart</p>
            </div>
          </>
        ) : (
          <>
            <div style={{ fontSize: '2em', textAlign: 'center' }}>
              <h2>What’s your vision?</h2>
              <p><em>Select a goal to support in 2020</em></p>
            </div>
            <VoteForm onSubmit={handleSubmitVote} />
          </>
        )}

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
