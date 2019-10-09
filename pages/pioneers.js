import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import CategoryEyebrow from '../components/CategoryEyebrow'
import LowerNav from '../components/LowerNav'

const PioneersList = () => (
  <Layout>
    <Head>
      <title>Pioneering women // Vision2020</title>
    </Head>

    <CategoryEyebrow>Pioneering women</CategoryEyebrow>

    <ul className="pioneers-list">
      <li><span>Agents of Change</span></li>
      <ul>
        <li><Link href="/pioneers/[id]" as="/pioneers/mary-church-terrell"><a>Mary Church Terrell</a></Link></li>
        <li><Link href="/pioneers/[id]" as="/pioneers/florynce-kennedy"><a>Florynce Kennedy</a></Link></li>
        <li><Link href="/pioneers/[id]" as="/pioneers/emma-gonzalez"><a>Emma González</a></Link></li>
      </ul>
      <li><span>Politics & Government</span></li>
      <ul>
        <li><Link href="/pioneers/[id]" as="/pioneers/jeannette-rankin"><a>Jeannette Rankin</a></Link></li>
        <li><Link href="/pioneers/[id]" as="/pioneers/shirley-chisholm"><a>Shirley Chisholm</a></Link></li>
        <li><Link href="/pioneers/[id]" as="/pioneers/women-in-the-116th-us-congress"><a>Women in the 116th U.S. Congress</a></Link></li>
      </ul>
      <li><span>Business & Finance</span></li>
      <ul>
        <li><Link href="/pioneers/[id]" as="/pioneers/alva-belmont"><a>Alva Belmont</a></Link></li>
        <li><Link href="/pioneers/[id]" as="/pioneers/indra-nooyi"><a>Indra Nooyi</a></Link></li>
        <li><Link href="/pioneers/[id]" as="/pioneers/arlan-hamilton"><a>Arlan Hamilton</a></Link></li>
      </ul>
      <li><span>Science, Technology, Engineering, & Mathematics</span></li>
      <ul>
        <li><Link href="/pioneers/[id]" as="/pioneers/grace-hopper"><a>Grace Hopper</a></Link></li>
        <li><Link href="/pioneers/[id]" as="/pioneers/reshma-saujani"><a>Reshma Saujani</a></Link></li>
        <li><Link href="/pioneers/[id]" as="/pioneers/sabrina-gonzalez-pasterski"><a>Sabrina Gonzalez Pasterski</a></Link></li>
      </ul>
      <li><span>Communications & Media</span></li>
      <ul>
        <li><Link href="/pioneers/[id]" as="/pioneers/ida-b-wells"><a>Ida B. Wells</a></Link></li>
        <li><Link href="/pioneers/[id]" as="/pioneers/gloria-steinem"><a>Gloria Steinem</a></Link></li>
        <li><Link href="/pioneers/[id]" as="/pioneers/brittney-c-cooper"><a>Brittney C. Cooper</a></Link></li>
      </ul>
      <li><span>Sports</span></li>
      <ul>
        <li><Link href="/pioneers/[id]" as="/pioneers/bernice-sandler"><a>Bernice Sandler</a></Link></li>
        <li><Link href="/pioneers/[id]" as="/pioneers/dawn-staley"><a>Dawn Staley</a></Link></li>
        <li><Link href="/pioneers/[id]" as="/pioneers/mone-davis"><a>Mo’ne Davis</a></Link></li>
      </ul>
    </ul>

    <LowerNav middle right />
    <style jsx>{`
      .pioneers-list {
        padding: 0;
        font-size: 2vh;
      }

      .pioneers-list > li {
        text-align: center;
        position: relative;
        margin-top: 10px !important;
      }

      .pioneers-list > li::before {
        content: '';
        border-top: 1px solid black;
        width: 100%;
        height: 1px;
        position: absolute;
        left: 0;
        top: 50%;
      }

      .pioneers-list > li > span {
        background-color: white;
        padding: 0 0.25em;
        display: inline-block;
        white-space: nowrap;
        // Position text above line
        position: relative;
        z-index: 1;
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 0;
      }

      @media screen and (min-width: 768px) {
        .pioneers-list > ul {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-column-gap: 10%;
          max-width: 90%;
          margin: 0 auto;
        }

        .pioneers-list > ul > li {
          display: inline-block;
        }
      }

      .pioneers-list > ul > li {
        text-transform: uppercase;
        text-align: center;
        font-size: 1em;
        display: flex;
        min-height: 10vh;
        margin-top: 0.25em;
        justify-content: center;
        align-items: center;
      }

        a,
        a:visited,
        a:active,
        a:hover {
          text-decoration: none;
          color: black;
        }
      }
    `}
    </style>
  </Layout>
)

export default PioneersList
