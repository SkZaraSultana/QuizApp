import React from "react";
import styles from "../componentsStyles/Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.navitems}>
        <div className={styles.logo}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Zara’s TempRadar Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
