import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Xbeauty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description" background-image="/xbeauty-logo.svg">
          <img src="/xbeauty-logo.svg" alt="Netlify Logo" width="604" height="118" />
        </p>
        <p className="description" background-image="/xbeauty-logo.svg">
          Coming soon...
        </p>
      </main>
    </div>
  )
}
