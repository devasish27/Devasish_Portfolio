import React from "react";
import styles from "./Education.module.scss";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <div className={styles.education}>
      {/* B.Tech */}
      <div className={styles.card}>
        <div className={styles.icon}>
          <FaGraduationCap />
        </div>

        <div className={styles.content}>
          <h3>GMR Institute of Technology</h3>
          <p className={styles.degree}>
            B.Tech – Artificial Intelligence & Machine Learning
          </p>
          <span className={styles.duration}>2021 – 2025</span>
        </div>
      </div>

      {/* Intermediate */}
      <div className={styles.card}>
        <div className={styles.icon}>
          <FaGraduationCap />
        </div>

        <div className={styles.content}>
          <h3>Srichaitanya Junior College</h3>
          <p className={styles.degree}>
            Intermediate (MPC / Science)
          </p>
          <span className={styles.duration}>2019 – 2021</span>
        </div>
      </div>

      {/* 10th SSC */}
      <div className={styles.card}>
        <div className={styles.icon}>
          <FaGraduationCap />
        </div>

        <div className={styles.content}>
          <h3>Sri Chaitanya Techno School</h3>
          <p className={styles.degree}>
            SSC – Secondary School Certificate
          </p>
          <span className={styles.duration}>2018 – 2019</span>
        </div>
      </div>
    </div>
  );
}