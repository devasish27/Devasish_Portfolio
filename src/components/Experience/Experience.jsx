import React from 'react'
import styles from './Experience.module.scss'

const items = [
  {
    period: 'JUN 2025 - JUL 2025',
    role: 'GNCIPL – AI/ML Intern ',
    bullets: [
      'Developed anomaly detection models using TimeGAN to identify unusual patterns in datasets.', 
      'Built two Streamlit applications: a Book Recommendation system and a FinancialAssistant tool.',
      'Optimized model performance and deployed interactive dashboards for endusers.'
    ]
  },
  {
    period: 'AUG 2024 - DEC 2024',
    role: 'Hippocloud Technologies Pvt Ltd – React Developer Intern ',
    bullets: [
      'Developed responsive UI components using React.js and Material UI.',
      'Integrated frontend with RESTful APIs built using Node.js.',
      'Collaborated with backend team to manage data flow using MySQL'
    ]
  },
  {
    period: 'JUL 2023 - AUG 2023',
    role: 'Necun Innovations Pvt Ltd – Software Intern ',
    bullets: [
      'Built OCR-based applications using Python for automated OMR evaluation.',
      'Strengthened problem-solving and debugging skills through real-world tasks'
    ]
  }
]

export default function Experience() {
  return (
    <div className={styles.timeline}>
      {items.map((it, idx) => (
        <div className={styles.item} key={idx}>
          <div className={styles.left}>
            <div className={styles.period}>{it.period}</div>
          </div>
          <div className={styles.right}>
            <h4>{it.role}</h4>
            <ul>
              {it.bullets.map((b,i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
