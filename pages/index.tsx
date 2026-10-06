import Head from 'next/head'
import FuturePortfolio from '../components/FuturePortfolio'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jaikishore — Tech Builder / CMO / Founder in Progress</title>
        <meta name="description" content="Jaikishore is a 17-year-old tech builder and CMO at Falkon Labs, building products, communities, and the future with code and vision." />
        <meta name="keywords" content="Jaikishore, developer, tech builder, Falkon Labs, AI engineering, portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jaikishore — Building the future with code & vision" />
        <meta property="og:description" content="Tech builder, CMO at Falkon Labs, and founder in progress." />
        <meta property="og:url" content="https://jaikishore2026-max.github.io/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jaikishore — Tech Builder / CMO" />
        <meta name="twitter:description" content="Building products, communities, and the future with code and vision." />
      </Head>
      <FuturePortfolio />
    </>
  )
}
