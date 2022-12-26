import Head from "next/head";
import Link from "next/link";
import styles from "../../../styles/AdView.module.css";

export default function AdView({ ad }) {
  return (
    <>
      <Head>
        <title>Otvoren oglas</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <img src="/logo.svg" alt="logo" />
      </header>
      <Link className={styles.back} href="/">
        &lt; Vrati se na Listu Oglasa
      </Link>

      <main className={styles.main}>
        <section className={styles.ad}>
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
        </section>

        <section className={styles.description}>
          <div>
            Kategorija: {ad.category_name} &gt; {ad.group_name}
          </div>
          <div>Lokacija: {ad.location_name}</div>
          <div>Opis: {ad.description}</div>
        </section>

        <section
          className={styles.gallery}
          style={{
            backgroundImage: `url(${`https://kupujemprodajem.com${ad.photo_path1}`})`,
          }}
        />
      </main>

      <footer>KupujemProdajem © 2022 All rights reserved</footer>
    </>
  );
}

AdView.getInitialProps = async ({ query }) => {
  const res = await fetch(`http://localhost:3000/api/ad/${query.adId}`);
  const ad = await res.json();
  return { ad };
};
