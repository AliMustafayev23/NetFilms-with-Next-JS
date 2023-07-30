import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://github.com/AliMustafayev23" target="_blank">
        Ali Mustafayev
      </Link>
    </footer>
  );
};

export default Footer;
