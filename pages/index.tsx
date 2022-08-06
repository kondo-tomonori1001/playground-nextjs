import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'
import NextHeadSeo from 'next-head-seo';
import { Footer } from '../components/containers/Footer/Footer'

const Home: NextPage = () => {
  return (
    <>
      <NextHeadSeo
        title="Tomonori Kondo"
      />
      <main className={styles.main}>
        <h1 className={styles.title}>
          WELCOME
        </h1>
      </main>
      <Footer />
    </>
  )
}

export default Home
