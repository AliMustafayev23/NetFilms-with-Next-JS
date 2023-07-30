import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import { FaPlayCircle } from "react-icons/fa";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Link className={styles.logo} href="/">
          <FaPlayCircle /> NETFILMS
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href="/">MOVIES</Link>
          <Link href="/">SERIES</Link>
          <Link href="/">KIDS</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
