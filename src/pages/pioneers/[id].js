import React, { useRef } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Layout from '../../components/Layout'
import CategoryEyebrow from '../../components/CategoryEyebrow'
import VoteIntro from '../../components/VoteIntro'
import LowerNav from '../../components/LowerNav'
import SwipePrompt from '../../components/SwipePrompt'
import Lightbox from '../../components/Lightbox'
import PioneerLede from '../../components/PioneerLede'
import { MOBILE_BREAKPOINT, UI_COLOR_SECONDARY } from '../../const'
import { getEntry } from '../../data/load'
import ContextCenterQuote from '../../components/pioneer/ContextCenterQuote'
import ContextImage1 from '../../components/pioneer/ContextImage1'
import ContextImage2 from '../../components/pioneer/ContextImage2'
import ContextImage5 from '../../components/pioneer/ContextImage5'
import ContextSlideshow from '../../components/pioneer/ContextSlideshow'
import triangle from '../../images/ui/triangle.svg'

Pioneer.getInitialProps = async ({ query }) => {
  return { query }
}

export default function Pioneer (props) {
  const router = useRouter()
  const parallax = useRef(null)

  const slug = router.query.id
  const data = getEntry(slug)

  // Might be null on first render
  if (!data) return null

  // Do we want to show transition effects when we load this?
  // This is done client-side because next.js pre-rednder has problems
  // with paths where this is a dynamic value
  function shouldWeAnimate () {
    const params = new URLSearchParams(window.location.search)
    const animated = params.get('animated')
    // Only return `false` if animated === 'false
    // This is the only safe way to "coerce" the string value to boolean
    return animated !== 'false'
  }

  const animated = (typeof window !== 'undefined')
    ? shouldWeAnimate()
    : router.query.animated

  // Determine how many pages there are.
  // const pages = data.context.length
  // const lastPageOffset = pages - 1
  // For some reason `<Parallax>` pages have 1 screen in between each page
  // so we divide the number of pages in half, then add one for the
  // title screen. The number of pages is incerased by +1 for the down arrow.
  // Others have faced this issue.
  // - https://github.com/react-spring/react-spring/issues/771
  // - https://github.com/react-spring/react-spring/issues/707
  const pages = ((data.context.length + 1) / 2) + 1
  const lastPageOffset = Number.isInteger(pages - 1) ? pages - 1 : pages - 1 + 0.49

  // Scroll to next page on click because we don't know how to handle
  // scroll / flick action yet.
  function clickToScroll (event) {
    // parallax.current.scrollTo(parallax.current.offset + 1)
  }

  function renderContext (context) {
    // const offset = context.page
    // Offsetting is weird.
    // Odd number pages need an offset of (page / 2) + .49 to make a value of x.99
    const offset = context.page % 2 ? (context.page / 2) + 0.49 : (context.page / 2)

    // Single quote context slides (one or fewer images)
    if (context.text.startsWith('>') && context.images.length <= 1) {
      return <ContextCenterQuote key={offset} offset={offset} context={context} />
    } else if (context.slideshow && context.slideshow.length > 0) {
      return <ContextSlideshow key={offset} offset={offset} context={context} />
    } else if (context.images.length > 1 && context.images.length <= 4) {
      // If there are 2-4 images, stagger them
      return <ContextImage2 key={offset} offset={offset} context={context} />
    } else if (context.images.length >= 5) {
      // If there are 5 or more images, tile them
      return <ContextImage5 key={offset} offset={offset} context={context} />
    }

    // Use ContextImage1 for one or zero images
    return <ContextImage1 key={offset} offset={offset} context={context} />
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
        {/* (OLD) Weirdly, `pages` needs to be +2 */}
        <Parallax
          ref={parallax}
          // pages={pages + 2}
          pages={pages}
          scrolling="true"
          style={{
            left: 0,
            top: 0,
            backgroundColor: 'white'
          }}
          onClick={clickToScroll}
        >
          {/* Page 1: Title screen "Lede" */}
          <div className="pioneer-spine" />
          <PioneerLede data={data} animated={animated} />
          <ParallaxLayer offset={0} speed={1} style={{ padding: '30px' }}>
            <CategoryEyebrow>{data.name}</CategoryEyebrow>
          </ParallaxLayer>

          {/* Context slides */}
          {data.context.map(renderContext)}

          {/* Triangle */}
          {/* On its own page at the end */}
          <ParallaxLayer offset={lastPageOffset} speed={1} style={{ pointerEvents: 'none' }}>
            <div className="arrow-holder">
              <img src={triangle} draggable={false} />
            </div>
          </ParallaxLayer>
        </Parallax>
        <SwipePrompt />
      </div>

      <div className="section2">
        <VoteIntro />
      </div>

      <LowerNav left={LowerNav.types.PIONEERS} right={LowerNav.types.VOTE} />

      <style jsx global>
        {`
          html {
            /* Allows section2 to not be stuck mid-scroll-position */
            scroll-snap-type: y mandatory;
          }

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

          @media screen and (max-width: ${MOBILE_BREAKPOINT}),
            screen and (orientation: landscape) {
            .context blockquote p ,
            .context blockquote p:first-of-type::before {
              font-size: 20px;
            }
          }

          /* Quote attribution: only apply if it's direct next sibling of blockquote */
          .context blockquote + p > em:first-child {
            display: block;
            margin-top: 3em;
            font-family: 'Noto Serif', serif;
            font-size: 22px;
            text-transform: initial;
            line-height: 1.4;
          }

          @media screen and (max-width: ${MOBILE_BREAKPOINT}),
            screen and (orientation: landscape) {
            .context blockquote + p > em:first-child {
              font-size: 14px;
            }
          }

          /* Quote attribution divider */
          .context blockquote + p > em:first-child::before {
            content: '';
            display: block;
            position: relative;
            width: 50px;
            height: 0px;
            border-top: 5px solid black;
            top: -1.5em;
          }

          @media screen and (max-width: ${MOBILE_BREAKPOINT}),
            screen and (orientation: landscape) {
            .context blockquote + p > em:first-child::before {
              width: 35px;
              height: 0px;
              border-top: 3px solid black;
            }
          }

          .context-align-center .context blockquote + p > em:first-child::before {
            left: calc(50% - 25px);
          }

          .context-text-parallaxlayer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            pointer-events: none;
          }

          .context-text-container {
            position: relative;
            background-color: white;
            padding: 2em 0;
          }

          .image-container {
            position: absolute;
            margin-top: -10%;
          }

          .image-container img {
            max-width: 100%;
            margin-top: 15px;
          }
        `}
      </style>
      <style jsx global>
        {`
          .context-transition-container {
            opacity: 0;
            transform: translateY(5em);
            transition: opacity 1000ms, transform 1000ms ease-out;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
          }

          .context-transition-container.visible {
            opacity: 1;
            transform: translateY(0);
          }

          .section1 > div > div > div {
            border: 1px solid red;
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
            scroll-snap-align: center;
          }

          .section1 {
            position: sticky;
            top: 0;
            left: 0;
            bottom: 0;
            background-color: black;
            overscroll-behavior: contain;
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

          @media (max-width: ${MOBILE_BREAKPOINT}) {
            .pioneer-spine {
              border-left: 50px solid ${UI_COLOR_SECONDARY};
              margin-left: -25px;
            }
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
