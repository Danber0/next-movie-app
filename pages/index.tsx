import styles from "../styles/Home.module.scss";
import MainContainer from "../components/MainContainer";
import Image from "next/image";

import poster from "../public/image/poster.svg";
import plus from "../public/image/plus.svg";
import Card from "../components/Card";

export default function Home() {
  return (
    <MainContainer>
      <div className={styles.container}>
        <div className={styles.chooseAndSearch}>
          <div className={styles.type}>
            <span className={styles.active}>Фильм</span>
            <span>Сериалы</span>
          </div>
          <div className={styles.inputSearch}>
            <input type="text" placeholder="Введите фильм..." />
          </div>
        </div>
        <div className={styles.slider}>
          <Image src={poster} alt="poster" />
          <div className={styles.info}>
            <h1>Джуманджи</h1>
            <h4>Экшен, приключение, комедия</h4>
            <div className={styles.action}>
              <button>Смотреть</button>
              <div>
                <Image src={plus} alt="Добавить" width={25} height={25} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.topFilms}>
          <div className={styles.topInfo}>
            <h1>Топ 250 фильмов</h1>
          </div>
          <div className={styles.cardContent}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
