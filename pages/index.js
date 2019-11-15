import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import LowerNav from '../components/LowerNav'
import AttractMode from '../components/AttractMode'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Vision2020</title>
      </Head>

      <AttractMode />
      <LowerNav
        left="pioneers"
        right="vote"
      />

      <div className="chevron">
        <img
          src="/ui/chevron.svg"
          onClick={(e) => {
            const top = document.querySelector('.scrollcontent').offsetTop
            window.scrollTo({ top, behavior: 'smooth' })
          }}
        />
      </div>

      <section className="scrollcontent">
        <h1>temp</h1>
      </section>

      <style jsx>{`
        .scrollcontent {
          background-color: black;
          width: 100vw;
          height: 100vh;
          color: yellow;
          display: flex;
          align-items: center;
          justify-content: center
        }
        .scrollcontent h1 {
          font-size: 500%;
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
          0%, 80%, 100% {
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
