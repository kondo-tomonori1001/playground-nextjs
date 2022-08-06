import '../styles/globals.css'
import type { AppProps } from 'next/app'

import NextHeadSeo from 'next-head-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <NextHeadSeo 
        title="Hello World!"
        description='welcome to website'
        customLinkTags={[
          {
            rel: 'icon', 
            type: 'image/x-icon',
            href: '/favicon.ico'
          }
        ]}
      />
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
