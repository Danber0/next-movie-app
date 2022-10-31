import React from "react";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import poster from "../../public/image/poster.svg";
import plus from "../../public/image/plus.svg";

const Card = () => {
  return (
    <div className={styles.card}>
      <Image src={poster} alt="Картинка" className={styles.cardBackImage} />
      <div className={styles.infoCard}>
        <h5>Джуманджи</h5>
        <span>2022</span>
        <div className={styles.action}>
          <button>Смотреть</button>
          <div>
            <Image src={plus} alt="Добавить" width={12} height={12} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
