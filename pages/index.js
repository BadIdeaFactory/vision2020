import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import LowerNav from '../components/LowerNav'
import AttractMode from '../components/AttractMode'

// Make kioskId param match server/client
Home.getInitialProps = async (context) => {
  return {
    kioskId: context.query.kioskId
  }
}

function Home () {
  // You can force a specific attract loop to play by setting
  // the url param /?kioskId={num} where `num` is a number between 0-5
  // We've also defined custom urls at /attract/{num} where the number is
  // no longer 0-indexed (so use 1-6). This is better for non-tech viewers.
  const router = useRouter()
  const { kioskId = 0 } = router.query

  return (
    <Layout>
      <Head>
        <title>Vision2020</title>
      </Head>

      <AttractMode kioskId={Number.parseInt(kioskId)} />

      <LowerNav left="pioneers" right="vote" />
    </Layout>
  )
}

export default Home
