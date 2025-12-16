import React from 'react'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div>© {new Date().getFullYear()} Devasish • Built with React + Vite</div>
          <div> <a href="https://github.com/yourusername">GitHub</a> · <a href="https://linkedin.com/in/yourprofile">LinkedIn</a> </div>
        </div>
      </div>
    </footer>
  )
}
