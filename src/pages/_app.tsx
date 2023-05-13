import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* <link rel='shortcut icon' href='favicon/vercel.svg' />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png/vercel.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content='#06092B' /> */}

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/vercel.svg"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/vercel.svg"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/vercel.svg"/>
        <link rel="manifest" href="/manifest.json"/>
        <link rel="mask-icon" href="/favicon/vercel.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>    
      <Component {...pageProps} />
    </>
  )
}
