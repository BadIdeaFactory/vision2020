import React from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import LowerNav from '../../components/LowerNav'
import VoteButton from '../../components/VoteButton'
import { useRouter } from 'next/router'

export default function Post () {
  const router = useRouter()

  return (
    <Layout>
      <Head>
        <title>{router.query.id} ${'// Vision2020'}</title>
      </Head>

      <h1>{router.query.id}</h1>
      <p>This is the content.</p>

      <LowerNav left />
      <VoteButton />
    </Layout>
  )
}
