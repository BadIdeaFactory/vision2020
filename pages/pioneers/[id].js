import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'
import CategoryEyebrow from '../../components/CategoryEyebrow'
import Image from '../../components/Image'
import VoteIntro from '../../components/VoteIntro'
import LowerNav from '../../components/LowerNav'
import Lightbox from '../../components/Lightbox'
import PioneerLede from '../../components/PioneerLede'
import { UI_COLOR_SECONDARY } from '../../main/const'
import { getEntry } from '../../data/load'

ParseText.propTypes = {
  text: PropTypes.string.isRequired
}

function ParseText ({ text }) {
  return (
    <ReactMarkdown
      source={text}
      className="context"
      unwrapDisallowed
      disallowedTypes={['link', 'linkReference']}
    />
  )
}

export default function Pioneer () {
  const router = useRouter()
  const parallax = useRef(null)

  const data = getEntry(router.query.id)

  useEffect(() => {
    console.log(parallax.current)
    if (parallax.current) {
      parallax.current.originalOnScroll = parallax.current.onScroll
      parallax.current.onScroll = (event) => {
        parallax.current.originalOnScroll(event)
        console.log(parallax.current.offset)
      }
    }
    // parallax.current.animatedScroll.addListener(console.log)
  })

  if (!data) return null

  return (
    <Layout className="pioneer-page">
      <Head>
        <title>
          {data.NAME} {'// Vision2020'}
        </title>
      </Head>

      <Lightbox />

      <div className="section1">
        <Parallax
          ref={parallax}
          pages={4.5}
          scrolling
          style={{
            left: 0,
            top: 0,
            backgroundColor: 'white'
          }}
        >
          {/* Page 1 */}
          <div className="pioneer-spine" />

          <PioneerLede data={data} />

          <ParallaxLayer offset={0} speed={1} style={{ padding: '30px' }}>
            <CategoryEyebrow>{data.NAME}</CategoryEyebrow>
          </ParallaxLayer>

          {/* Slide 1 */}
          <ParallaxLayer
            offset={0.99}
            speed={1}
            // onClick={() => parallax.current.scrollTo(1.5)}
          >
            <Image
              src="/mary/Mary-Church-Terrell-1.jpg"
              className="fake-image lightbox"
              style={{ width: '35%', left: '58%', top: '20%' }}
              data-src="/mary/Mary-Church-Terrell-1.jpg"
            />
            <Image
              src="/mary/6a08546u.jpg"
              className="fake-image lightbox"
              style={{ width: '30%', left: '54%', top: '41%' }}
            />
            <Image
              src="/mary/mary_church_terrell_web.jpg"
              className="fake-image lightbox"
              style={{ width: '45%', left: '59%', top: '44%' }}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.99}
            speed={0.5}
            style={{ pointerEvents: 'none' }}
          >
            <div
              className="context context1"
              style={{
                textAlign: 'left',
                marginLeft: '20%',
                marginTop: '50%',
                marginRight: 'calc(50% - 50px)'
              }}
            >
              <ParseText text={data['CONTEXT TEXT 1']} />
            </div>
          </ParallaxLayer>

          {/* Slide 2 */}
          <ParallaxLayer
            offset={1}
            speed={1}
            // onClick={() => parallax.current.scrollTo(2)}
          >
            <Image
              src="/mary/3b30139u.jpg"
              className="fake-image lightbox"
              style={{ width: '45%', left: '10%', top: '20%' }}
            />
            <Image
              src="/mary/Mary_Church_Terrell_portrait.jpg"
              className="fake-image lightbox"
              style={{ width: '40%', left: '-2%', top: '57%' }}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{ pointerEvents: 'none' }}
          >
            <div
              className="context context1"
              style={{
                textAlign: 'left',
                width: '40%',
                marginLeft: '58%',
                marginTop: '30%'
              }}
            >
              <ParseText text={data['CONTEXT TEXT 2']} />
            </div>
          </ParallaxLayer>

          {/* Slide 3 */}
          <ParallaxLayer offset={1.99} speed={1}>
            <Image
              src="/mary/30267a.jpg"
              className="fake-image lightbox"
              style={{ width: '20%', left: '0%', top: '23%' }}
            />
            <Image
              src="/mary/3b39728u.jpg"
              className="fake-image lightbox"
              style={{ width: '20%', left: '0%', top: '33%' }}
            />
            <Image
              src="/mary/pbox.jpg"
              className="fake-image lightbox"
              style={{ width: '20%', left: '0%', top: '49%' }}
            />
            <Image
              src="/mary/2010_2_1ab_001.jpg"
              className="fake-image lightbox"
              style={{ width: '20%', left: '22%', top: '33%' }}
            />
            <Image
              src="/mary/7794198-logo.png"
              className="fake-image lightbox"
              style={{ width: '20%', left: '22%', top: '49%' }}
            />
            <Image
              src="/mary/Deltasigmathetafounders.jpg"
              className="fake-image lightbox"
              style={{ width: '20%', left: '22%', top: '65%' }}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.99}
            speed={0.5}
            style={{ pointerEvents: 'none' }}
          >
            <div
              className="context context1"
              style={{
                textAlign: 'left',
                width: '40%',
                marginLeft: '48%',
                marginTop: '60%',
                backgroundColor: 'white'
              }}
            >
              <ParseText text={data['CONTEXT TEXT 3']} />
            </div>
          </ParallaxLayer>

          {/* Slide 4 */}
          <ParallaxLayer
            offset={2}
            speed={0.5}
            style={{ pointerEvents: 'none' }}
          >
            <div
              className="context context1"
              style={{
                textAlign: 'left',
                width: '35%',
                marginLeft: '10%',
                marginTop: '60%'
              }}
            >
              <ParseText text={data['CONTEXT TEXT 4']} />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={1}>
            <Image
              src="/mary/IMG_4438.jpg"
              className="fake-image lightbox f1"
              style={{ width: '60%', left: '45%', top: '34%' }}
            />
          </ParallaxLayer>

          {/* Slide 5 */}
          <ParallaxLayer
            offset={2.99}
            speed={0.5}
            style={{ pointerEvents: 'none' }}
          >
            <div
              className="context context1"
              style={{
                textAlign: 'left',
                width: '35%',
                marginLeft: '10%',
                marginTop: '70%'
              }}
            >
              <ParseText text={data['CONTEXT TEXT 5']} />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2.99} speed={1}>
            <Image
              src="/mary/Tru1P-09152015-014.jpg"
              className="fake-image lightbox f1"
              style={{ width: '60%', left: '45%', top: '45%' }}
            />
          </ParallaxLayer>

          {/* Slide 6 */}
          <ParallaxLayer offset={3} speed={1}>
            <Image
              src="/mary/Protesting-768x501 with mct c1952.jpg"
              className="fake-image lightbox"
              style={{ width: '49%', left: '7%', top: '34%' }}
            />
            <Image
              src="/mary/Mary_Church_Terrell_-_NARA_-_559207.jpg"
              className="fake-image lightbox"
              style={{ width: '46%', left: '-2%', top: '49%' }}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            speed={0.5}
            style={{ pointerEvents: 'none' }}
          >
            <div
              className="context context1"
              style={{
                textAlign: 'left',
                width: '40%',
                marginLeft: '58%',
                marginTop: '30%'
              }}
            >
              <ParseText text={data['CONTEXT TEXT 6']} />
            </div>
          </ParallaxLayer>

          {/* Slide 7 */}
          <ParallaxLayer
            offset={3.99}
            speed={0.5}
            style={{ pointerEvents: 'none' }}
          >
            <div
              className="context context1"
              style={{
                textAlign: 'left',
                width: '35%',
                marginLeft: '5%',
                marginTop: '50%'
              }}
            >
              <ParseText text={data['CONTEXT TEXT 7']} />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={3.99} speed={1}>
            <Image
              src="/mary/Mary_Church_Terrell_-_NARA_-_559207.jpg"
              className="fake-image lightbox f1"
              style={{ width: '60%', left: '45%', top: '34%' }}
            />
            <div className="arrow-holder">
              <img src="/ui/triangle.svg" />
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>

      <div className="section2">
        <VoteIntro />
      </div>

      <LowerNav left="pioneers" right="vote" />

      <style jsx global>
        {`
          .context blockquote {
            margin-left: 0;
            margin-right: 0;
          }

          /* Override headings in Markdown format */
          .context h1,
          .context h2,
          .context h3,
          .context h4,
          .context h5,
          .context h6 {
            font-size: 22px;
            font-family: 'Noto Serif', serif;
            text-transform: initial;
            text-align: left;
            font-weight: bold;
            margin-bottom: 0;
          }

          /* Reduce margins on paragraphs following a heading */
          .context h1 + p,
          .context h2 + p,
          .context h3 + p,
          .context h4 + p,
          .context h5 + p,
          .context h6 + p {
            margin-top: 0.2em;
          }

          .context blockquote p {
            font-family: 'Anton', sans-serif;
            font-size: 40px;
            text-transform: uppercase;
            line-height: 1.2;
          }

          .context blockquote p::before {
            content: '“';
            display: block;
            font-family: 'Anton', sans-serif;
            font-size: 40px;
            text-transform: uppercase;
          }

          .context blockquote em {
            display: block;
            margin-top: 3em;
            font-family: 'Noto Serif', serif;
            font-size: 22px;
            text-transform: initial;
            line-height: 1.4;
          }

          .context blockquote em::before {
            content: '';
            display: block;
            position: relative;
            width: 50px;
            height: 0px;
            border-top: 5px solid black;
            top: -1.5em;
          }
        `}
      </style>
      <style jsx>
        {`
          .section1,
          .section2 {
            position: relative;
            width: 100vw;
            height: 100vh;
            top: 0;
            left: 0;
          }
          .section1 {
            position: sticky;
            bottom: 0;
            background-color: black;
          }

          .section2 {
            box-shadow: 0 0 5vh 0 rgba(0, 0, 0, 0.25);
          }

          .pioneer-spine {
            position: absolute;
            height: 100%;
            width: 0;
            border-left: 100px solid ${UI_COLOR_SECONDARY};
            left: 50%;
            margin-left: -50px;
            z-index: -1;
          }

          .context {
            font-size: 22px;
            position: relative;
            background-color: white;
            padding: 2em 0;
          }

          :global(.fake-image) {
            background-color: #ccc;
            position: absolute;
          }

          .f1 {
            width: 60%;
            top: 30%;
            right: -5%;
          }

          .arrow-holder {
            width: 300px;
            background-color: white;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            height: 20%;
            position: absolute;
            bottom: -20px; /* Cover a bit of the bottom of the spine */
            left: calc(50% - 150px); /* Center */
          }
        `}
      </style>
    </Layout>
  )
}
