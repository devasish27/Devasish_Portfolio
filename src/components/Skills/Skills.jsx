import React from 'react'
import styles from './Skills.module.scss'

const groups = [
  { title: 'Languages', items: ['Python', 'C', 'JavaScript'] },
  { title: 'Web', items: ['HTML', 'CSS', 'React', 'Node.js'] },
  { title: 'AI/ML', items: ['TimeGAN', 'LSTM', 'NLP', 'PyTorch'] },
  { title: 'Tools', items: ['Git', 'Docker', 'PowerBI'] }
]

export default function Skills() {
  return (
    <div className={styles.wrap}>
      {groups.map(g => (
        <div key={g.title} className={styles.group}>
          <h4>{g.title}</h4>
          <div className={styles.chips}>
            {g.items.map(s => <span key={s} className={styles.chip}>{s}</span>)}
          </div>
        </div>
      ))}
    </div>
  )
}
