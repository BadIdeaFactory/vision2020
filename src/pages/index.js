import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import LowerNav from '../components/LowerNav'
import AttractMode from '../components/AttractMode'
import PosterList from '../components/PosterList'
import { isKiosk } from '../kiosk'

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
  // If kioskId isn't specified, we read kiosk ID from the environment
  // variable or default to 1 (the first kiosk ID.)
  /* global VISION2020_KIOSK_ID */
  const {
    kioskId = (typeof VISION2020_KIOSK_ID !== 'undefined' &&
      VISION2020_KIOSK_ID) ||
      1
  } = router.query

  if (isKiosk() === true) {
    console.log('[Vision2020] Kiosk mode is on!')
    console.log('[Vision2020] Running kiosk #' + kioskId)

    return (
      <Layout>
        <Head>
          <title>Vision2020</title>
        </Head>

        <AttractMode kioskId={Number.parseInt(kioskId)} />

        <LowerNav left={LowerNav.types.PIONEERS} right={LowerNav.types.VOTE} />
      </Layout>
    )
  } else {
    return (
      <Layout>
        <Head>
          <title>Vision2020</title>
        </Head>

        <PosterList />
      </Layout>
    )
  }
}

export default Home
