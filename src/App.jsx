import './App.css'

function App() {
  const profile = {
    name: 'Omesh Fernando',
    role: 'Computer Science Undergraduate',
    tagline: 'I build futuristic digital products with clean engineering and practical user value.',
    about:
      'I am a second-year Computer Science undergraduate focused on full-stack development, AI-assisted workflows, and scalable software design. I enjoy solving real-world problems through structured, user-centered applications.',
    email: 'omeshfrndo@gmail.com',
    phone: '+94 770 621 226',
    location: 'Sri Lanka',
    github: 'https://omesh.com/OmeshFernando',
    linkedin: 'https://www.linkedin.com/in/omesh-fernando-309982332/',
    cv: '#',
  }

  const skills = {
    frontend: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    backend: ['Node.js', 'Express', 'REST APIs'],
    database: ['SQL', 'MongoDB', 'Firebase'],
    tools: ['Git & GitHub', 'Figma', 'Canva'],
  }

  const projects = [
    {
      title: 'Kuddles',
      problem: 'Parents struggle to track their children\'s daily activities and school updates.',
      role: 'Frontend + API integration',
      process: 'Designed interface flows, implemented dashboard modules, and connected service endpoints.',
      outcome: 'Improved information access speed with a clean and searchable student portal.',
      stack: 'ReactNative, Node.js, Express, tailwindcss',
      status: 'In Progress',
      link: '#',
    },
    {
      title: 'Trust Home',
      problem: 'Property platforms often provide weak filtering and crowded UX.',
      role: 'UI engineering and filtering logic',
      process: 'Built multi-criteria search modules and responsive property cards.',
      outcome: 'Delivered a simpler search flow with better filtering precision.',
      stack: 'React, CSS, Jest',
      status: 'Completed',
      link: '#',
    },
    {
      title: 'University Enrollment System',
      problem: 'Students often struggle with complex enrollment processes.',
      role: 'Backend and database design',
      process: 'Designed a scalable enrollment system with robust data validation.',
      outcome: 'Reduced enrollment errors and improved student experience.',
      stack: 'Java, PostgreSQL, Spring Boot',
      status: 'Completed',
      link: '#',
    },
  ]

  return (
    <div className="site">
      <header className="topbar">
        <div className="topbar-inner">
          <p className="brand">{profile.name}</p>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Case Studies</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section">
          <p className="eyebrow">Future-Focused Portfolio</p>
          <h1>{profile.name}</h1>
          <h2>{profile.role}</h2>
          <p className="hero-text">{profile.tagline}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-ghost" href={profile.cv}>
              Download Resume
            </a>
          </div>
          <div className="hero-highlights">
            <article className="hero-pill">
              <span>Status</span>
              <strong>UG Year 2</strong>
            </article>
            <article className="hero-pill">
              <span>Focus</span>
              <strong>Full-Stack + AI</strong>
            </article>
            <article className="hero-pill">
              <span>Target</span>
              <strong>Internship Ready</strong>
            </article>
          </div>
        </section>

        <section id="about" className="section card">
          <h3>About Me</h3>
          <p>{profile.about}</p>
        </section>

        <section id="skills" className="section card">
          <h3>Skills</h3>
          <div className="skills-grid">
            <article>
              <h4>Frontend</h4>
              <p>{skills.frontend.join(' | ')}</p>
            </article>
            <article>
              <h4>Backend</h4>
              <p>{skills.backend.join(' | ')}</p>
            </article>
            <article>
              <h4>Database</h4>
              <p>{skills.database.join(' | ')}</p>
            </article>
            <article>
              <h4>Tools</h4>
              <p>{skills.tools.join(' | ')}</p>
            </article>
          </div>
        </section>

        <section id="projects" className="section">
          <h3>Case Studies</h3>
          <p className="section-intro">
            Structured projects that highlight my thinking, process, and outcomes.
          </p>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="card project-card">
                <div className="project-head">
                  <h4>{project.title}</h4>
                  <span>{project.status}</span>
                </div>
                <p>
                  <strong>Problem:</strong> {project.problem}
                </p>
                <p>
                  <strong>Role:</strong> {project.role}
                </p>
                <p>
                  <strong>Process:</strong> {project.process}
                </p>
                <p>
                  <strong>Outcome:</strong> {project.outcome}
                </p>
                <p className="project-stack">
                  <strong>Tools:</strong> {project.stack}
                </p>
                <a href={project.link}>Project Detail</a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section card contact">
          <h3>Contact</h3>
          <p>Easy ways to reach me.</p>
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
          <p>
            <strong>Phone:</strong> {profile.phone}
          </p>
          <p>
            <strong>Location:</strong> {profile.location}
          </p>
          <div className="contact-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>Email Me</a>
          </div>
        </section>
      </main>

      <footer className="section footer">
        <p>(c) 2026 {profile.name}. Designed with passion and care.</p>
      </footer>
    </div>
  )
}

export default App
