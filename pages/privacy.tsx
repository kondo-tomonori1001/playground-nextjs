import type { NextPage } from 'next';
import styles from '../styles/pages/Privacy.module.css';
import NextHeadSeo from 'next-head-seo';

const Privacy: NextPage = () => {
  return (
    <>
      <NextHeadSeo title="PrivacyPolicy" />
      <main className={styles.main}>
        <h1 className={styles.title}>PraivacyPraivacyPraivacyPraivacyPraivacyPraivacyPraivacyPraivacyPraivacyPraivacy</h1>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2022 Tomonori Kondo </p>
      </footer>
    </>
  );
};

export default Privacy;
