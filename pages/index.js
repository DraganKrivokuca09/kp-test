import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ ads }) {
  return (
    <>
      <Head>
        <title>Oglasi</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <img src="/logo.svg" alt="logo" />
      </header>

      <main className={styles.main}>
        {ads.map((ad, index) => {
          return (
            <Link href={`/oglas/${ad.ad_id}`} key={index} className={styles.ad}>
              <div
                className={styles.image}
                style={{
                  backgroundImage: `url(${`https://kupujemprodajem.com${ad.photo1_tmb_300x300}`})`,
                }}
              />

              <div>{ad.name}</div>
              <div>
                {ad.price} {ad.currency}
              </div>
            </Link>
          );
        })}
      </main>

      <footer>KupujemProdajem © 2022 All rights reserved</footer>
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch("http://localhost:3000/api/ads");
  const ads = await res.json();
  return { ads };
};
