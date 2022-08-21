import { useEffect, useRef, useState } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

import type { NextPage } from 'next';
import styles from '../styles/pages/Home.module.css';
import NextHeadSeo from 'next-head-seo';
import { Footer } from '../components/containers/Footer/Footer';

const Home: NextPage = () => {
  const [vantaEffect, setVantaEffect]: [any, any] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xac0000,
          backgroundColor: 0x281f39,
          maxDistance: 34.0,
        }),
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);
  return (
    <>
      <NextHeadSeo title="Tomonori Kondo" />
      <div className="bg" ref={vantaRef}>
        <main id="aaa" className={styles.main}>
          <h1 className={styles.title}>WELCOME</h1>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
