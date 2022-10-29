import React, { FC } from "react";
import styles from "./MainContainer.module.scss";
import Sidebar from "../Sidebar";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      {children}
    </div>
  );
};

export default MainContainer;
