import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="portfolio">
      <header>
        <div className="header-top">
          <div>
            <h1>Timothy Junior Amevor</h1>
            <p className="tagline">· Mechanical Engineering · Graduate Student Researcher ·</p>
          </div>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <nav className={menuOpen ? 'open' : ''}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#publications" onClick={() => setMenuOpen(false)}>Publications</a>
          <a href="#conferences" onClick={() => setMenuOpen(false)}>Conferences</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          Hi! I'm a passionate engineer and researcher. I love solving hard problems
          and building things that matter. Replace this with your own introduction.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Project One</h3>
            <p>A short description of what this project does and what technologies you used.</p>
            <a href="#">View →</a>
          </div>
          <div className="card">
            <h3>Project Two</h3>
            <p>A short description of what this project does and what technologies you used.</p>
            <a href="#">View →</a>
          </div>
          <div className="card">
            <h3>Project Three</h3>
            <p>A short description of what this project does and what technologies you used.</p>
            <a href="#">View →</a>
          </div>
        </div>
      </section>

      <section id="publications">
        <h2>Publications</h2>
        <div className="publication-list">
          <div className="publication-item">
            <p className="pub-title">Publication Title Goes Here</p>
            <p className="pub-authors">T. J. Amevor, Co-Author Name, et al.</p>
            <p className="pub-journal">Journal / Conference Name, Year</p>
            <a href="#" className="pub-link">View paper →</a>
          </div>
          <div className="publication-item">
            <p className="pub-title">Publication Title Goes Here</p>
            <p className="pub-authors">T. J. Amevor, Co-Author Name, et al.</p>
            <p className="pub-journal">Journal / Conference Name, Year</p>
            <a href="#" className="pub-link">View paper →</a>
          </div>
        </div>
      </section>

      <section id="conferences">
        <h2>Conferences</h2>
        <div className="conference-list">
          <div className="conference-item">
            <img
              src="/conference-poster.jpg"
              alt="ASTFE 11th Conference Poster"
              className="conference-img"
            />
            <div className="conference-info">
              <h3>ASTFE 11th Annual Conference</h3>
              <p>Presented experimental research on nanofluid-enhanced copper heat pipes, evaluating Al₂O₃–DI water nanofluids at 0.5, 1.0, and 1.5 wt% concentrations across inclination angles of 0°–90°. Findings showed that low nanoparticle loading (0.5 wt%) offered the most favorable thermal performance, while higher concentrations introduced penalties that limited heat transport capacity.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul className="skill-list">
          <li>React / JavaScript</li>
          <li>Python</li>
          <li>Data Analysis</li>
          <li>Add your own skills here</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <div className="contact-links">
          <a
            className="linkedin-badge"
            href="https://www.linkedin.com/in/timothy-junior-amevor-0b20ba296/"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="linkedin-icon" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>Connect on LinkedIn</span>
          </a>
          <a className="mail-badge" href="mailto:timothyjunior298@gmail.com">
            <svg className="mail-icon" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>timothyjunior298@gmail.com</span>
          </a>
        </div>
      </section>

      <footer>
        <p>© Timothy Junior Amevor</p>
      </footer>
    </div>
  )
}

export default App
