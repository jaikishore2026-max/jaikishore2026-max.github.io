import Head from 'next/head'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found | Jaikishore</title>
        <meta name="description" content="This page could not be found. Return to Jaikishore’s portfolio to explore his work, story, and contact details." />
        <meta name="robots" content="noindex" />
      </Head>
      <main className="not-found">
        <Link className="brand-mark not-found-brand" href="/" aria-label="Jaikishore — home">
          <span>JK</span>
          <b>JAIKISHORE <i>/ 01</i></b>
        </Link>
        <p className="not-found-kicker">404 / PAGE NOT FOUND</p>
        <h1>This page isn&apos;t in the logbook.</h1>
        <p className="not-found-copy">The link may have moved. Head back to the portfolio to explore the work, story, and ways to get in touch.</p>
        <nav className="not-found-links" aria-label="Helpful links">
          <Link className="button button-primary" href="/">Back to home <ArrowUpRight size={16} /></Link>
          <Link className="button button-ghost" href="/#projects">Explore projects</Link>
          <Link className="button button-ghost" href="/#contact">Contact</Link>
        </nav>
      </main>
    </>
  )
}
