import styles from "../styles/Home.module.scss";
import MainContainer from "../components/MainContainer";
import Image from "next/image";

import Card from "../components/Card";

export default function Home({ posts }) {
  console.log(posts);
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
          <Image
            src="/image/poster.svg"
            alt="poster"
            width={865}
            height={460}
          />
          <div className={styles.info}>
            <h1>Джуманджи</h1>
            <h4>Экшен, приключение, комедия</h4>
            <div className={styles.action}>
              <button>Смотреть</button>
              <div>
                <Image
                  src="/image/plus.svg"
                  alt="plus"
                  layout="fixed"
                  width={25}
                  height={25}
                />
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

export async function getStaticProps() {
  const token = "3C45MQP-VVSME6H-JBTXTF7-J2BFT08";
  const res = await fetch(
    `https://api.kinopoisk.dev/movie?token=${token}&field=rating.kp&search=7-10&field=year&search=2017-2020&field=typeNumber&search=2&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&limit=20`
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
