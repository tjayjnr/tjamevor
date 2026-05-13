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
          Mechanical Engineer with expertise in thermal systems, computational analysis, and biomimetic design.
          Currently pursuing a Master's degree at New Mexico Institute of Mining and Technology, I specialize in
          heat pipe optimization, FEA/CFD modeling, and experimental validation. My research focuses on designing
          innovative thermal management solutions inspired by nature, leveraging advanced computational tools
          (COMSOL, OpenFOAM, FluidX3D) and experimental characterization. I am passionate about translating
          complex engineering challenges into practical, high-performance solutions through rigorous analysis and
          hands-on fabrication. Strong background in team collaboration, critical decision-making, and driving
          projects from conception through commercialization.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="card-grid">
          <div className="card">
            <p className="card-org">NASA New Mexico Space Grant Consortium · May 2025 – Present</p>
            <h3>D-Shaped Biomimetic Heat Pipe with Separated Vapor-Condensate Flow</h3>
            <p>Designed D-shaped heat pipe geometry to optimize vapor and condensate flow separation. Characterized biomimetic porous wick structures via microCT imaging and CFD. Conducted multi-phase thermal simulations in COMSOL, OpenFOAM, and FluidX3D, and fabricated experimental prototypes with nanofluid working fluids.</p>
            <p className="card-tech">COMSOL · OpenFOAM · FluidX3D · SolidWorks · MATLAB</p>
          </div>
          <div className="card">
            <p className="card-org">NASA University Nanosatellite Program · May 2025 – Aug 2025</p>
            <h3>Thermal Management — 6U CubeSat Thermal Analysis</h3>
            <p>Developed a comprehensive thermal model for a space-based CubeSat accounting for solar radiation, Earth albedo, and deep-space conditions. Conducted transient analysis to identify hot/cold spots and optimized radiator design for reliable operation across eclipse cycles.</p>
            <p className="card-tech">COMSOL Multiphysics · MATLAB · Thermal Modeling</p>
          </div>
          <div className="card">
            <p className="card-org">Feb 2025 – Apr 2025</p>
            <h3>Composite Materials Analysis — Helical Fiber-Reinforced Structures</h3>
            <p>Performed comparative FEA of uniform vs. helical fiber-reinforced composites using ABD matrix theory. Achieved 18% improvement in flexural stiffness at equivalent mass. Identified delamination and fiber-matrix failure mechanisms validated against theoretical models.</p>
            <p className="card-tech">COMSOL · ANSYS · MATLAB</p>
          </div>
          <div className="card">
            <p className="card-org">Oct 2024 – Present</p>
            <h3>Fluid-Filled Sensor-Activated Biomimetic Helmet Liner</h3>
            <p>Designing a three-layer protective liner inspired by woodpecker cranial damping. Fluid-filled lattice achieves tunable stiffness (up to 1,400× increase) for dynamic impact protection. Integrated Time-of-Flight sensors for real-time impact localization and system feedback.</p>
            <p className="card-tech">ANSYS · Topology Optimization · Biomimetic Design · Sensor Integration</p>
          </div>
          <div className="card">
            <p className="card-org">Jan 2023 – Aug 2023</p>
            <h3>High-Speed Meat-Slicing Machine — Design & Fabrication</h3>
            <p>Led multi-disciplinary mechanical design covering cutting speed, vibration control, and user safety. Managed full fabrication cycle: part manufacturing, assembly, automation integration, and performance testing.</p>
            <p className="card-tech">SolidWorks · Mechanical Design · Fabrication</p>
          </div>
        </div>
      </section>

      <section id="publications">
        <h2>Publications</h2>
        <div className="publication-list">
          <div className="publication-item">
            <p className="pub-title">Nanofluid Enhancement of Gravity-Assisted Copper Heat Pipes: A Systematic Investigation of Working Fluid Optimization</p>
            <p className="pub-authors">Timothy Junior Amevor, Ashok Kumar Ghosh</p>
            <p className="pub-journal">ASTFE Digital Library — TFEC2026, pp. 837–846 · DOI: 10.1615/TFEC2026.ml.061637</p>
            <a href="https://www.dl.astfe.org/en/conferences/tfec2026,75df5e4b311b19c8,67aacf6b2f268a0c.html" className="pub-link" target="_blank" rel="noreferrer">View paper →</a>
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
        <div className="skill-groups">
          <div className="skill-group">
            <p className="skill-category">Simulation & Analysis</p>
            <ul className="skill-list">
              <li>COMSOL Multiphysics</li><li>ANSYS</li><li>OpenFOAM</li><li>FluidX3D</li>
            </ul>
          </div>
          <div className="skill-group">
            <p className="skill-category">CAD & Modeling</p>
            <ul className="skill-list">
              <li>SolidWorks</li><li>AutoCAD</li><li>Blender</li><li>Fusion 360</li><li>ParaView</li>
            </ul>
          </div>
          <div className="skill-group">
            <p className="skill-category">Programming & Data</p>
            <ul className="skill-list">
              <li>MATLAB</li><li>Python</li><li>FIJI/ImageJ</li><li>3D Slicer</li>
            </ul>
          </div>
          <div className="skill-group">
            <p className="skill-category">Manufacturing & Lab</p>
            <ul className="skill-list">
              <li>Additive Manufacturing</li><li>Welding</li><li>CNC Operation</li><li>Data Acquisition</li><li>Sensor Calibration</li>
            </ul>
          </div>
          <div className="skill-group">
            <p className="skill-category">Documentation</p>
            <ul className="skill-list">
              <li>LaTeX</li><li>Microsoft Office</li><li>Technical Writing</li><li>Git Version Control</li>
            </ul>
          </div>
          <div className="skill-group">
            <p className="skill-category">Professional</p>
            <ul className="skill-list">
              <li>Team Leadership</li><li>Project Management</li><li>Research Planning</li><li>Data Interpretation</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact">
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
