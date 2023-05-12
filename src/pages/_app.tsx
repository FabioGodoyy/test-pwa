import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/vercel.svg' />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png/vercel.svg" />
        <link rel="manifest" href="/manifest.json" />
        {/* <meta rel="theme-color" content='#06092B' /> */}
        <meta name="theme-color" content='#06092B' />
      </Head>    
      <Component {...pageProps} />
    </>
  )
}
