import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#030712" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased selection:bg-accent-indigo/30 selection:text-accent-cyan">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
