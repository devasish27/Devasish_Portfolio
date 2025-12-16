import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ProjectsGrid from './components/Projects/ProjectsGrid'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Education from "./components/Education/Education";

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <section id="projects" className="container">
          <h2 style={{marginTop: '48px'}}>Projects</h2>
          <ProjectsGrid />
        </section>
        <section id="experience" className="container">
          <h2 style={{marginTop: '48px'}}>Experience</h2>
          <Experience />
        </section>
        <section id="education" className="container">
          <h2>Education</h2>
          <Education />
        </section>
        <section id="skills" className="container">
          <h2 style={{marginTop: '48px'}}>Skills</h2>
          <Skills />
        </section>
        <section id="contact" className="container">
          <h2 style={{marginTop: '48px'}}>Contact</h2>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}