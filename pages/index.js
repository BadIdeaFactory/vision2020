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
          width: 100%;
          height: 300px;
          text-align: center;
          position: absolute;
          bottom: -180px;
        }

      `}
      </style>
    </Layout>
  )
}

export default Home
