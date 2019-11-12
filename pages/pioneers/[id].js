import React, { useRef, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Layout from '../../components/Layout'
import CategoryEyebrow from '../../components/CategoryEyebrow'
import Image from '../../components/Image'
import LowerNav from '../../components/LowerNav'
import VoteButton from '../../components/VoteButton'
import Lightbox from '../../components/Lightbox'
import { getEntry } from '../../data/load'

export default function Pioneer () {
  const router = useRouter()
  const parallax = useRef(null)

  const data = getEntry(router.query.id)

  useEffect(() => {
    console.log(parallax.current)
    if (parallax.current) {
      parallax.current.originalOnScroll = parallax.current.onScroll
      parallax.current.onScroll = event => {
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
        <title>{data.NAME} {'// Vision2020'}</title>
      </Head>

      <div className="bglinefixed" />
      <Lightbox />

      <Parallax
        ref={parallax}
        pages={6}
        scrolling
        style={{
          left: 0,
          top: 0
        }}
      >
        {/* <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#f1fefc' }} />
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#f9fcf1' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#f1fcf9' }} /> */}
        <ParallaxLayer offset={5} speed={1} style={{ backgroundColor: '#aaa' }} />

        {/* Page 1 */}
        <ParallaxLayer
          offset={0} speed={0.5}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}
          onClick={() => parallax.current.scrollTo(0.99)}
        >
          <Image
            src="/static/mary/3b47842u.jpg"
            style={{
              maxWidth: '80%',
              maxHeight: '50%',
              marginTop: '-50%'
              // height: '117%'
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1} style={{ padding: '30px' }}>
          <CategoryEyebrow>{data.NAME}</CategoryEyebrow>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0} speed={1}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
          <div className="page1" style={{ marginTop: '100%' }}>
            <div className="largename">{data.NAME}</div>
            <div className="lifedate">{data['LIFE DATE']}</div>
          </div>
        </ParallaxLayer>

        {/* as long as offset is not rounded up to 1 it will appear between page offsets, weird huh */}
        <ParallaxLayer
          offset={0.99} speed={1}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
          <div className="bgline" />
          <div className="titles" style={{ textAlign: 'center' }}>
            {data['TITLE 1'] && <div>{data['TITLE 1']}</div>}
            {data['TITLE 2'] && <div>{data['TITLE 2']}</div>}
            {data['TITLE 3'] && <div>{data['TITLE 3']}</div>}
            {data['TITLE 4'] && <div>{data['TITLE 4']}</div>}
          </div>
        </ParallaxLayer>

        {/* Slide 1 */}
        <ParallaxLayer
          offset={1}
          speed={1}
          onClick={() => parallax.current.scrollTo(1.5)}
        >
          <Image src="/static/mary/Mary-Church-Terrell-1.jpg" className="fake-image lightbox" style={{ width: '35%', left: '58%', top: '20%' }} data-src="/static/mary/Mary-Church-Terrell-1.jpg" />
          <Image src="/static/mary/6a08546u.jpg" className="fake-image lightbox" style={{ width: '30%', left: '54%', top: '41%' }} />
          <Image src="/static/mary/mary_church_terrell_web.jpg" className="fake-image lightbox" style={{ width: '45%', left: '59%', top: '44%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} style={{ pointerEvents: 'none' }}>
          <div className="context context1" style={{ textAlign: 'left', width: '40%', marginLeft: '10%', marginTop: '50%' }}>
            {data['CONTEXT TEXT 1']}
          </div>
        </ParallaxLayer>

        {/* Slide 2 */}
        <ParallaxLayer
          offset={1.99}
          speed={1}
          onClick={() => parallax.current.scrollTo(2)}
        >
          <Image src="/static/mary/3b30139u.jpg" className="fake-image lightbox" style={{ width: '45%', left: '10%', top: '20%' }} />
          <Image src="/static/mary/Mary_Church_Terrell_portrait.jpg" className="fake-image lightbox" style={{ width: '40%', left: '-2%', top: '57%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.99} speed={0.5} style={{ pointerEvents: 'none' }}>
          <div className="context context1" style={{ textAlign: 'left', width: '40%', marginLeft: '58%', marginTop: '30%' }}>
            {data['CONTEXT TEXT 2']}
          </div>
        </ParallaxLayer>

        {/* Slide 3 */}
        <ParallaxLayer offset={2} speed={1}>
          <Image src="/static/mary/30267a.jpg" className="fake-image lightbox" style={{ width: '20%', left: '0%', top: '23%' }} />
          <Image src="/static/mary/3b39728u.jpg" className="fake-image lightbox" style={{ width: '20%', left: '0%', top: '33%' }} />
          <Image src="/static/mary/pbox.jpg" className="fake-image lightbox" style={{ width: '20%', left: '0%', top: '49%' }} />
          <Image src="/static/mary/2010_2_1ab_001.jpg" className="fake-image lightbox" style={{ width: '20%', left: '22%', top: '33%' }} />
          <Image src="/static/mary/7794198-logo.png" className="fake-image lightbox" style={{ width: '20%', left: '22%', top: '49%' }} />
          <Image src="/static/mary/Deltasigmathetafounders.jpg" className="fake-image lightbox" style={{ width: '20%', left: '22%', top: '65%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5} style={{ pointerEvents: 'none' }}>
          <div className="context context1" style={{ textAlign: 'left', width: '40%', marginLeft: '48%', marginTop: '60%', backgroundColor: 'white' }}>
            {data['CONTEXT TEXT 3']}
          </div>
          <div className="quote" style={{ textAlign: 'left', width: '45%', marginLeft: '48%', marginTop: '2em' }}>
            <div className="quote-content">
              <div>“</div>
              We knock at the bar of justice, asking an equal chance.
            </div>
            <p className="attribution">— Attribution first name last name</p>
          </div>
        </ParallaxLayer>

        {/* Slide 4 */}
        <ParallaxLayer offset={2.99} speed={0.5} style={{ pointerEvents: 'none' }}>
          <div className="context context1" style={{ textAlign: 'left', width: '35%', marginLeft: '10%', marginTop: '60%' }}>
            {data['CONTEXT TEXT 4']}
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.99} speed={1}>
          <Image src="/static/mary/IMG_4438.jpg" className="fake-image lightbox f1" style={{ width: '60%', left: '45%', top: '34%' }} />
        </ParallaxLayer>

        {/* Slide 5 */}
        <ParallaxLayer offset={3} speed={0.5} style={{ pointerEvents: 'none' }}>
          <div className="context context1" style={{ textAlign: 'left', width: '35%', marginLeft: '10%', marginTop: '70%' }}>
            {data['CONTEXT TEXT 5']}
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1}>
          <Image src="/static/mary/Tru1P-09152015-014.jpg" className="fake-image lightbox f1" style={{ width: '60%', left: '45%', top: '45%' }} />
        </ParallaxLayer>

        {/* Slide 6 */}
        <ParallaxLayer offset={3.99} speed={1}>
          <Image src="/static/mary/Protesting-768x501 with mct c1952.jpg" className="fake-image lightbox" style={{ width: '49%', left: '7%', top: '34%' }} />
          <Image src="/static/mary/Mary_Church_Terrell_-_NARA_-_559207.jpg" className="fake-image lightbox" style={{ width: '46%', left: '-2%', top: '49%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={3.99} speed={0.5} style={{ pointerEvents: 'none' }}>
          <div className="context context1" style={{ textAlign: 'left', width: '40%', marginLeft: '58%', marginTop: '30%' }}>
            {data['CONTEXT TEXT 6']}
          </div>
        </ParallaxLayer>

        {/* Slide 7 */}
        <ParallaxLayer offset={4} speed={0.5} style={{ pointerEvents: 'none' }}>
          <div className="context context1" style={{ textAlign: 'left', width: '35%', marginLeft: '5%', marginTop: '50%' }}>
            {data['CONTEXT TEXT 7']}
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={1}>
          <Image src="/static/mary/Mary_Church_Terrell_-_NARA_-_559207.jpg" className="fake-image lightbox f1" style={{ width: '60%', left: '45%', top: '34%' }} />
        </ParallaxLayer>

        {/* Vote */}
        <ParallaxLayer offset={5} speed={1}>
          <div className="vote-thing">
            <h2>What's your vision for 2020?</h2>
            <p>Cast your vote and see how others voted</p>
            <Link href="/vote">
              <a>
                <span>Vote</span>
              </a>
            </Link>
          </div>
        </ParallaxLayer>
      </Parallax>

      <LowerNav
        left="pioneers"
        right="vote"
      />

      <style jsx>
        {`
          .page1 {
            text-align: center;
            margin-top: 4vh;
            margin-left: 30px;
            margin-right: 30px;
          }
          .largename {
            font-size: 8vh;
            line-height: 7vh;
            color: black;
            text-transform: uppercase;
          }
          .lifedate {
            margin-top: 0.25em;
            font-size: 4vh;
            white-space: nowrap;
          }
          .titles {
            font-size: 5vh;
            color: gray;
            text-transform: uppercase;
            background-color: white;
            z-index: 1;
            padding: 0.5em;
          }
          .bgline {
            position: fixed;
            height: 110%;
            width: 0;
            border-left: 2px solid black;
            left: 50%;
            margin-left: -2px;
            z-index: -1;
          }
          .bglinefixed {
            position: fixed;
            height: 97%;
            width: 0;
            border-left: 2px solid black;
            left: 50%;
            margin-left: -2px;
            z-index: -1;
          }
          .context {
            font-size: 2vh;
            position: relative;
            background-color: white;
          }
          :global(.fake-image) {
            background-color: #ccc;
            box-shadow: 0 0 2em 0 rgba(0,0,0,0.25);
            position: absolute;
          }
          .f1 {
            width: 60%;
            top: 30%;
            right: -5%;
          }
          .quote {
            z-index: 1;
            background-color: white;
          }
          .quote-content {
            font-size: 3vh;
            font-weight: bold;
            text-transform: uppercase;
          }
          .attribution {
            font-style: italic;
            text-align: right;
            white-space: nowrap;
          }
          .vote-thing {
            color: white;
            display: flex;
            height: 100vh;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 3em;
          }
          .vote-thing h2 {
            font-size: 3em;
            text-align: center;
            padding: 30px;
          }
          .vote-thing p {
            font-style: italic;
          }
          .vote-thing a {
            appearance: none;
            width: 6em;
            height: 3em;
            background-color: white;
            color: black;
            text-transform: uppercase;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 1.5em;
            margin: 0 auto;
            margin-top: 1em;
            font-size: 1em;
            cursor: pointer;
            margin-top: 1em;
            border: 0;
          }
        `}
      </style>
    </Layout>
  )
}
