import Head from "next/head";

export default function ErrorPage() {
  return (
    <div>
      <Head>
        <title>Ups - katowice.dev - strony internetowe katowice</title>
        <meta
          name="description"
          content="Strony Internetowe Katowice. Tworzymy szybkie strony internetowe WordPress oraz JAMstack"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>404 error</p>
    </div>
  );
}
