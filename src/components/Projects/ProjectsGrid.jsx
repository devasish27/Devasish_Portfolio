import React from 'react'
import projects from '../../data/projects'
import ProjectCard from './ProjectCard'
import styles from './ProjectsGrid.module.scss'

export default function ProjectsGrid() {
  return (
    <div className={styles.grid}>
      {projects.map(p => <ProjectCard key={p.id} project={p} />)}
    </div>
  )
}