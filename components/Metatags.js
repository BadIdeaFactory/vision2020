import React from 'react'
import Head from 'next/head'

// Temporary: no actual domain yet
const SITE_URL =
  'https://www.kimmelcenter.org/events-and-tickets/201920/free/vision-2020/'
const SITE_IMAGE =
  'https://raw.githubusercontent.com/BadIdeaFactory/vision2020/504f60bca664dac8460ab70b4a3bf27df0df3918/public/vision2020_hero_910x520.jpg'

function Metatags (props) {
  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>Vision 2020 — A Seat at the Table Interactive Exhibition</title>
      <meta
        name="title"
        content="Vision 2020 — A Seat at the Table Interactive Exhibition"
      />
      <meta
        name="description"
        content="Learn about women’s right to vote and equality 100 years later. A modern installation in the lobby of the Kimmel Center (opens March 2020)."
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta
        property="og:title"
        content="Vision 2020 — A Seat at the Table Interactive Exhibition"
      />
      <meta
        property="og:description"
        content="Learn about women’s right to vote and equality 100 years later. A modern installation in the lobby of the Kimmel Center (opens March 2020)."
      />
      <meta property="og:image" content={SITE_IMAGE} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={SITE_URL} />
      <meta
        property="twitter:title"
        content="Vision 2020 — A Seat at the Table Interactive Exhibition"
      />
      <meta
        property="twitter:description"
        content="Learn about women’s right to vote and equality 100 years later. A modern installation in the lobby of the Kimmel Center (opens March 2020)."
      />
      <meta property="twitter:image" content={SITE_IMAGE} />
    </Head>
  )
}

export default Metatags
