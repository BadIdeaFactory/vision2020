import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Parallax } from '@react-spring/parallax'
import Layout from '../components/Layout'
import LowerNav from '../components/LowerNav'
import AttractMode from '../components/AttractMode'
import PioneerLede from '../components/PioneerLede'
import { getEntry } from '../data/load'

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

  function scrollPage (event) {
    const top = document.querySelector('.scrollcontent').offsetTop
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const data = getEntry('shirley-chisholm')

  return (
    <Layout>
      <Head>
        <title>Vision2020</title>
      </Head>

      <AttractMode kioskId={Number.parseInt(kioskId)} />

      <div className="chevron">
        <img src="/ui/chevron.svg" onClick={scrollPage} />
      </div>

      <section className="scrollcontent">
        <Parallax
          pages={1}
          style={{
            left: 0,
            top: 0,
            backgroundColor: 'white'
          }}
        >
          <PioneerLede data={data} />
        </Parallax>
      </section>

      <LowerNav left="pioneers" right="vote" />

      <style jsx>
        {`
          .scrollcontent {
            background-color: black;
            width: 100vw;
            height: 100vh;
          }

          .chevron {
            width: 120px;
            height: auto;
            text-align: center;
            position: absolute;
            left: 50%;
            margin-left: -60px;
            bottom: 3.25em;
            animation-name: pulse;
            animation-duration: 5s;
            animation-iteration-count: infinite;
          }

          @keyframes pulse {
            0%,
            80%,
            100% {
              opacity: 1;
            }
            90% {
              opacity: 0.5;
            }
          }
        `}
      </style>
    </Layout>
  )
}

export default Home
