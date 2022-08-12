import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Home | Vincent Abesamis</title>
        <meta key="og:title" property="og:title" content="Home | Vincent Abesamis" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Hi! This is Vince and this is my personal site."></meta>
        <meta
          property="og:description"
          content="Hi! This is Vince and this is my personal site."
          key="ogdesc"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/abevince/image/upload/v1660207856/me-banner_jxxhoa.png"
          key="ogimage"
        />
        {/* Twitter open-graph tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Vincent Abesamis - banner image" />
        <meta name="twitter:site" content="@abevince_dev" />
        <meta name="twitter:creator" content="@abevince_dev" />
        <meta name="twitter:title" content="Home | Vincent Abesamis" />
        <meta
          name="twitter:description"
          content="Hi! This is Vince and this is my personal site."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/abevince/image/upload/v1660207856/me-banner_jxxhoa.png"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
