import Head from "next/head";
import Container from "../components/container";

export default function Home() {
  return (
    <div>
      <Head>
        <title>katowice.dev - strony internetowe katowice</title>
        <meta
          name="description"
          content="Strony Internetowe Katowice. Tworzymy szybkie strony internetowe WordPress oraz JAMstack"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <p>elo</p>
      </Container>
    </div>
  );
}
