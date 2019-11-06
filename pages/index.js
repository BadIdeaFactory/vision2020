import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import LowerNav from '../components/LowerNav'
import CategoryEyebrow from '../components/CategoryEyebrow'
import AttractMode from '../components/AttractMode'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Vision2020</title>
      </Head>

      {/* <h1 className="title">vision2020 placeholder</h1>
      <p className="description">
        attract mode is ... {process.env.VISION2020_ATTRACT || 'none'}
      </p>

      <p className="description">
        <Link href="/pioneers">
          <a>character select screen</a>
        </Link>
      </p> */}
      <AttractMode />
      {/* <div className='row'>
        <a href='https://nextjs.org/docs' className='card'>
          <h3>Documentation &rarr;</h3>
          <p>Learn more about Next.js in the documentation.</p>
        </a>
        <a href='https://nextjs.org/learn' className='card'>
          <h3>Next.js Learn &rarr;</h3>
          <p>Learn about Next.js by following an interactive tutorial!</p>
        </a>
        <a
          href='https://github.com/zeit/next.js/tree/master/examples'
          className='card'
        >
          <h3>Examples &rarr;</h3>
          <p>Find other example boilerplates on the Next.js GitHub.</p>
        </a>
      </div> */}
      <CategoryEyebrow color="#91ddd0">Agents of Change</CategoryEyebrow>
      <div className="button-container">
        <Link href="/pioneers">
          <button>Mary Church Terrell</button>
        </Link>
      </div>

      <LowerNav />

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }

        .button-container {
          position: absolute;
          left: 0;
          bottom: 200px;
          width: 100%;
          text-align: center;
        }
        button {
          background-color: #ecdb5a;
          padding: 1em;
          font-size: 2em;
          color: black;
          appearance: none;
          border: 0;
          font-family: 'Anton';
          text-transform: uppercase;
        }
      `}
      </style>
    </Layout>
  )
}

export default Home
