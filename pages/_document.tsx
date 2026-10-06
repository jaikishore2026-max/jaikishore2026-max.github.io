import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#050508" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased selection:bg-cyan selection:text-obsidian">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
