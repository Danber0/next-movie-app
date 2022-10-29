import React from "react";
import styles from "./Sidebar.module.scss";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.action}>
        <div className={styles.logo}>
          <img src="" alt="logo" />
          Danber.
        </div>
        <div className={styles.menu}>
          <Link href="/">Главная</Link>
          <Link href="/favourite">Избранное</Link>
          <Link href="/popular">Популярное</Link>
        </div>
        <div className={styles.generis}>
          <div className={styles.horror}>Ужасы</div>
          <div className={styles.comedy}>Комедия</div>
          <div className={styles.crime}>Криминал</div>
          <div className={styles.melodramas}>Мелодрамы</div>
        </div>
        <div className={styles.sort}>
          <div className={styles.year}>Год</div>
          <div className={styles.rate}>Рейтинг</div>
        </div>
      </div>
      <div className={styles.auth}>Войти</div>
    </div>
  );
};

export default Sidebar;
