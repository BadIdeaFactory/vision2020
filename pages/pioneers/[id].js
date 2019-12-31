import React, { useRef, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Layout from '../../components/Layout'
import CategoryEyebrow from '../../components/CategoryEyebrow'
import VoteIntro from '../../components/VoteIntro'
import LowerNav from '../../components/LowerNav'
import Lightbox from '../../components/Lightbox'
import PioneerLede from '../../components/PioneerLede'
import { UI_COLOR_SECONDARY } from '../../main/const'
import { getEntry } from '../../data/load'
import ContextCenterQuote from '../../components/pioneer/ContextCenterQuote'
import ContextImage1 from '../../components/pioneer/ContextImage1'
import ContextSlideshow from '../../components/pioneer/ContextSlideshow'

Pioneer.getInitialProps = async (context) => {
  return {
    noTransition: context.query.noTransition
  }
}

export default function Pioneer () {
  const router = useRouter()
  const parallax = useRef(null)

  const slug = router.query.id
  const data = getEntry(slug)
  const noTransition = getEntry(router.query.noTransition)
  console.log('noTransition', noTransition)

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

  // Might be null on first render
  if (!data) return null

  // Determine how many pages there are.
  const pages = data.context.length
  const lastPageOffset = pages - 1

  function renderContext (context) {
    const offset = context.page

    // Single quote context slides
    if (context.text.startsWith('>')) {
      return <ContextCenterQuote offset={offset} context={context} />
    } else if (context.slideshow && context.slideshow.length <= 1) {
      return <ContextSlideshow offset={offset} context={context} />
    }

    // Use ContextImage1 for one or zero images
    // TODO: make the layouts for all the others.
    if (context.images.length > 1) {
      console.log('todo: create layout for slide with', context.images.length, 'images')
    }

    return <ContextImage1 offset={offset} context={context} />
  }

  return (
    <Layout className="pioneer-page">
      <Head>
        <title>
          {data.name} {'// Vision2020'}
        </title>
      </Head>

      <Lightbox />

      <div className="section1">
        <Parallax
          ref={parallax}
          pages={pages}
          scrolling
          style={{
            left: 0,
            top: 0,
            backgroundColor: 'white'
          }}
        >
          {/* Page 1: Title screen "Lede" */}
          <div className="pioneer-spine" />
          <PioneerLede data={data} />
          <ParallaxLayer offset={0} speed={1} style={{ padding: '30px' }}>
            <CategoryEyebrow>{data.name}</CategoryEyebrow>
          </ParallaxLayer>

          {/* Context slides */}
          {data.context.map(renderContext)}

          {/* Triangle */}
          <ParallaxLayer offset={lastPageOffset} speed={1} style={{ pointerEvents: 'none' }}>
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
          body {
            background-color: black;
          }

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

          .context blockquote p:first-of-type::before {
            content: '“';
            display: block;
            font-family: 'Anton', sans-serif;
            font-size: 40px;
            text-transform: uppercase;
          }

          /* Quote attribution: only apply if it's direct child of blockquote */
          /* TODO: It's possible for <em> to appear as a child of <p> (the quote)
            itself, so we need to consider what happens when this appears there. */
          .context blockquote em,
          .context blockquote + p > em:first-child {
            display: block;
            margin-top: 3em;
            font-family: 'Noto Serif', serif;
            font-size: 22px;
            text-transform: initial;
            line-height: 1.4;
          }

          /* Quote attribution divider */
          .context blockquote em::before,
          .context blockquote + p > em:first-child::before {
            content: '';
            display: block;
            position: relative;
            width: 50px;
            height: 0px;
            border-top: 5px solid black;
            top: -1.5em;
          }

          .context-align-center .context blockquote em::before,
          .context-align-center .context blockquote + p > em:first-child::before {
            left: calc(50% - 25px);
          }

          .context-text-container {
            position: relative;
            background-color: white;
            padding: 2em 0;
          }

          .context {
            font-size: 22px;
          }

          .fake-image {
            background-color: #ccc;
          }

          .image-container {
            position: absolute;
          }

          .image-container img {
            width: 100%;
            margin-top: 15px;
          }

          .f1 {
            width: 60%;
            top: 30%;
            right: -5%;
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
