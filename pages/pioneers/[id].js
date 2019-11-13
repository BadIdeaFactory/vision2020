import React, { useRef, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Layout from '../../components/Layout'
import CategoryEyebrow from '../../components/CategoryEyebrow'
import Image from '../../components/Image'
import VoteIntro from '../../components/VoteIntro'
import LowerNav from '../../components/LowerNav'
import Lightbox from '../../components/Lightbox'
import PioneerTitleCard from '../../components/PioneerTitleCard'
import { UI_COLOR_SECONDARY } from '../../main/const'
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

  // profile image tests
  let profileImageUrl = '/Mary_Church_Terrell_profile_portrait.png'
  if (router.query.id === 'brittney-c-cooper') {
    profileImageUrl = '/cooper_profile_portrait.png'
  } else if (router.query.id === 'women-in-the-116th-us-congress') {
    profileImageUrl = '/congress_profile_portrait.png'
  }

  return (
    <Layout className="pioneer-page">
      <Head>
        <title>{data.NAME} {'// Vision2020'}</title>
      </Head>

      <div className="pioneer-spine" />

      <Lightbox />

      <div className="section1">
        <Parallax
          ref={parallax}
          pages={4.5}
          scrolling
          style={{
            left: 0,
            top: 0
          }}
        >
          {/* Page 1 */}
          <ParallaxLayer
            offset={0} speed={0.5}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => parallax.current.scrollTo(0.99)}
          >
            <div
              style={{
                width: '100%',
                backgroundColor: 'black',
                height: '40%',
                position: 'absolute',
                top: 0,
                left: 0,
                overflow: 'hidden',
                backgroundImage: `url(${profileImageUrl})`,
                backgroundPosition: '50% 0',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}
            />
            {/* <Image
              src={profileImageUrl}
              style={{
                maxWidth: '60%',
                minWidth: '400px',
                display: 'block',
                margin: '20% auto 0'
              }}
            />
          </div> */}
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={1} style={{ padding: '30px' }}>
            <CategoryEyebrow>{data.NAME}</CategoryEyebrow>
          </ParallaxLayer>

          <ParallaxLayer
            offset={0} speed={1}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
          >
            <div className="pioneer-title-card-container">
              <PioneerTitleCard data={data} />
            </div>
          </ParallaxLayer>

          {/* Slide 1 */}
          <ParallaxLayer
            offset={0.99}
            speed={1}
            onClick={() => parallax.current.scrollTo(1.5)}
          >
            <Image src="/mary/Mary-Church-Terrell-1.jpg" className="fake-image lightbox" style={{ width: '35%', left: '58%', top: '20%' }} data-src="/mary/Mary-Church-Terrell-1.jpg" />
            <Image src="/mary/6a08546u.jpg" className="fake-image lightbox" style={{ width: '30%', left: '54%', top: '41%' }} />
            <Image src="/mary/mary_church_terrell_web.jpg" className="fake-image lightbox" style={{ width: '45%', left: '59%', top: '44%' }} />
          </ParallaxLayer>
          <ParallaxLayer offset={0.99} speed={0.5} style={{ pointerEvents: 'none' }}>
            <div
              className="context context1"
              style={{
                textAlign: 'left',
                marginLeft: '20%',
                marginTop: '50%',
                marginRight: 'calc(50% - 50px)'
              }}
            >
              {data['CONTEXT TEXT 1']}
            </div>
          </ParallaxLayer>

          {/* Slide 2 */}
          <ParallaxLayer
            offset={1}
            speed={1}
            onClick={() => parallax.current.scrollTo(2)}
          >
            <Image src="/mary/3b30139u.jpg" className="fake-image lightbox" style={{ width: '45%', left: '10%', top: '20%' }} />
            <Image src="/mary/Mary_Church_Terrell_portrait.jpg" className="fake-image lightbox" style={{ width: '40%', left: '-2%', top: '57%' }} />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5} style={{ pointerEvents: 'none' }}>
            <div className="context context1" style={{ textAlign: 'left', width: '40%', marginLeft: '58%', marginTop: '30%' }}>
              {data['CONTEXT TEXT 2']}
            </div>
          </ParallaxLayer>

          {/* Slide 3 */}
          <ParallaxLayer offset={1.99} speed={1}>
            <Image src="/mary/30267a.jpg" className="fake-image lightbox" style={{ width: '20%', left: '0%', top: '23%' }} />
            <Image src="/mary/3b39728u.jpg" className="fake-image lightbox" style={{ width: '20%', left: '0%', top: '33%' }} />
            <Image src="/mary/pbox.jpg" className="fake-image lightbox" style={{ width: '20%', left: '0%', top: '49%' }} />
            <Image src="/mary/2010_2_1ab_001.jpg" className="fake-image lightbox" style={{ width: '20%', left: '22%', top: '33%' }} />
            <Image src="/mary/7794198-logo.png" className="fake-image lightbox" style={{ width: '20%', left: '22%', top: '49%' }} />
            <Image src="/mary/Deltasigmathetafounders.jpg" className="fake-image lightbox" style={{ width: '20%', left: '22%', top: '65%' }} />
          </ParallaxLayer>
          <ParallaxLayer offset={1.99} speed={0.5} style={{ pointerEvents: 'none' }}>
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
          <ParallaxLayer offset={2} speed={0.5} style={{ pointerEvents: 'none' }}>
            <div className="context context1" style={{ textAlign: 'left', width: '35%', marginLeft: '10%', marginTop: '60%' }}>
              {data['CONTEXT TEXT 4']}
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={1}>
            <Image src="/mary/IMG_4438.jpg" className="fake-image lightbox f1" style={{ width: '60%', left: '45%', top: '34%' }} />
          </ParallaxLayer>

          {/* Slide 5 */}
          <ParallaxLayer offset={2.99} speed={0.5} style={{ pointerEvents: 'none' }}>
            <div className="context context1" style={{ textAlign: 'left', width: '35%', marginLeft: '10%', marginTop: '70%' }}>
              {data['CONTEXT TEXT 5']}
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2.99} speed={1}>
            <Image src="/mary/Tru1P-09152015-014.jpg" className="fake-image lightbox f1" style={{ width: '60%', left: '45%', top: '45%' }} />
          </ParallaxLayer>

          {/* Slide 6 */}
          <ParallaxLayer offset={3} speed={1}>
            <Image src="/mary/Protesting-768x501 with mct c1952.jpg" className="fake-image lightbox" style={{ width: '49%', left: '7%', top: '34%' }} />
            <Image src="/mary/Mary_Church_Terrell_-_NARA_-_559207.jpg" className="fake-image lightbox" style={{ width: '46%', left: '-2%', top: '49%' }} />
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.5} style={{ pointerEvents: 'none' }}>
            <div className="context context1" style={{ textAlign: 'left', width: '40%', marginLeft: '58%', marginTop: '30%' }}>
              {data['CONTEXT TEXT 6']}
            </div>
          </ParallaxLayer>

          {/* Slide 7 */}
          <ParallaxLayer offset={3.99} speed={0.5} style={{ pointerEvents: 'none' }}>
            <div className="context context1" style={{ textAlign: 'left', width: '35%', marginLeft: '5%', marginTop: '50%' }}>
              {data['CONTEXT TEXT 7']}
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={3.99} speed={1}>
            <Image src="/mary/Mary_Church_Terrell_-_NARA_-_559207.jpg" className="fake-image lightbox f1" style={{ width: '60%', left: '45%', top: '34%' }} />
            <div className="arrow-holder">
              <img src="/ui/triangle.svg" />
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
      <div className="section2">
        <VoteIntro />
      </div>

      <LowerNav
        left="pioneers"
        right="vote"
      />

      <style jsx>
        {`
          .section1, .section2 {
            position: relative;
            width: 100vw;
            height: 100vh;
            top: 0;
            left: 0;
          }
          .section1 {
            position: sticky;
            bottom: 0;
          }

          .section2 {
            box-shadow: 0 0 5vh 0 rgba(0, 0, 0, 0.25);
          }

          .pioneer-title-card-container {
            position: absolute;
            top: 40%;
            left: 0;
            right: 0;
            bottom: 160px;
          }

          .pioneer-spine {
            position: fixed;
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
          .arrow-holder {
            width: 100%;
            background-color: white;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            height: 20%;
            position: absolute;
            bottom: 0;
          }
        `}
      </style>
    </Layout>
  )
}
