import styles from "./footer.module.scss";

import Container from "../container";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>footer.js - todo</p>
      </Container>
    </footer>
  );
}
