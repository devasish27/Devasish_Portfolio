import React from 'react'
import styles from './Hero.module.scss'
import profile from '../../assets/profile.png'
import { FiDownload, FiMail } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="home" className={styles.hero + ' container'}>
      <div className={styles.card}>
        <div className={styles.left}>
          <img src={profile} alt="Profile" className={styles.avatar} />
        </div>
        <div className={styles.right}>
          <h1>Devasish Sai Pothumudi</h1>
          <p className={styles.role}>AI & Machine Learning Engineer</p>
          <p className={styles.desc}>
           I am a graduate with a Bachelor of Technology in Artificial Intelligence and Machine Learning, 
           equipped with strong technical expertise and practical experience in AI, full-stack development, and Data Science. 
           My academic foundation is complemented by hands-on internships and project work, where I developed solutions spanning computer vision, automation, and web applications.
          </p>
          <div className={styles.ctas}>
            <a className={styles.btnGhost} href="#contact"><FiMail />&nbsp;Contact</a>
          </div>
        </div>
      </div>
    </section>
  )
}