import React from "react";
import styles from "./ProjectCard.module.scss";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card} tabIndex="0">
      <img
        src={project.img}
        alt={project.title}
        className={styles.thumb}
      />

      <div className={styles.overlay}>
        <div>
          {/* TAGS */}
          <div className={styles.tags}>
            {project.tags?.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>

          <h3>{project.title}</h3>
          <p className={styles.summary}>{project.summary}</p>

          {/* TECH STACK */}
          <div className={styles.tech}>
            {project.tech.map(t => (
              <span key={t} className={styles.chip}>{t}</span>
            ))}
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className={styles.actions}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconBtn}
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconBtn}
              aria-label="Live Demo"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
