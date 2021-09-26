import styles from "./header.module.scss";

import Container from "../container";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.header_wrapper}>
            <div className={styles.header_logo}>
              <Link href="/">
                <a>katowice.dev</a>
              </Link>
            </div>
            <nav className={styles.header_nav}>
              <ul>
                <li>
                  <Link href="/realizacje">
                    <a>realizacje</a>
                  </Link>
                </li>
                <li>
                  <Link href="/oferta">
                    <a>oferta</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a>blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>kontakt</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className={styles.header_quote}>
              <Link href="/">
                <a>darmowa wycena</a>
              </Link>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
