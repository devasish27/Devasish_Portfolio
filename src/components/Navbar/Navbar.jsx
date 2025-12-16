import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { FiSun, FiMoon, FiMenu } from "react-icons/fi";

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={"container " + styles.inner}>
        <div className={styles.brand} onClick={() => handleNav("home")}>
          <span className={styles.logo}>Devasish</span>
        </div>

        <div className={`${styles.links} ${open ? styles.open : ""}`}>
          <button onClick={() => handleNav("projects")}>Projects</button>
          <button onClick={() => handleNav("skills")}>Skills</button>
          <button onClick={() => handleNav("experience")}>Experience</button>
          <button onClick={() => handleNav("education")}>Education</button>
          <button onClick={() => handleNav("contact")}>Contact</button>
        </div>

        <div className={styles.actions}>
          <button
            className={`${styles.themeBtn} ${
              theme === "dark" ? styles.darkIcon : styles.lightIcon
            }`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            >
            <span className={styles.themeIcon}>
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </span>
          </button>

          <button
            className={styles.hamburger}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <FiMenu />
          </button>
        </div>
      </div>
    </nav>
  );
}
