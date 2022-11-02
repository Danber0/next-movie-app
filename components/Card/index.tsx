import React from "react";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";

const Card = () => {
  return (
    <div className={styles.card}>
      <Image
        src="/image/poster.svg"
        alt="poster"
        width={190}
        height={210}
        className={styles.cardBackImage}
      />
      <div className={styles.infoCard}>
        <h5>Джуманджи</h5>
        <span>2022</span>
        <div className={styles.actionCard}>
          <button>Смотреть</button>
          <div>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.37931 3.87931H5.12069V0.62069C5.12069 0.27931 4.84138 0 4.5 0C4.15862 0 3.87931 0.27931 3.87931 0.62069V3.87931H0.62069C0.27931 3.87931 0 4.15862 0 4.5C0 4.84138 0.27931 5.12069 0.62069 5.12069H3.87931V8.37931C3.87931 8.72069 4.15862 9 4.5 9C4.84138 9 5.12069 8.72069 5.12069 8.37931V5.12069H8.37931C8.72069 5.12069 9 4.84138 9 4.5C9 4.15862 8.72069 3.87931 8.37931 3.87931Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
