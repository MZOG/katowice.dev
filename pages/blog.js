import Head from "next/head";
import Container from "../components/container";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>blog - katowice.dev - strony internetowe katowice</title>
        <meta
          name="description"
          content="Strony Internetowe Katowice. Tworzymy szybkie strony internetowe WordPress oraz JAMstack"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <p>blog</p>
      </Container>
    </div>
  );
}
