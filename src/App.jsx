import { useState, useEffect } from 'react'

const education = [
  { school: 'Sri Eshwar College of Engineering', degree: 'B.Tech IT', detail: 'CGPA: 8.33 (upto 6th sem)', years: '2023–2027' },
  { school: 'Palaniammal Municipal Girls Hr Sec School', degree: 'HSC', detail: '90%', years: '2022–2023' },
  { school: 'Palaniammal Municipal Girls Hr Sec School', degree: 'SSLC', detail: 'All Pass', years: '2020–2021' },
]

const internships = [
  {
    title: 'MERN Stack Internship — Better Tomorrow',
    year: '2025',
    desc: 'Hands-on full-stack development internship. Built a responsive web app implementing user authentication, RESTful APIs, and CRUD operations.',
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Postman'],
  },
  {
    title: 'Cloud Computing Internship',
    year: '2025',
    desc: '15-day hands-on internship on AWS Cloud — EC2, S3, IAM, RDS, VPC. Deployed and monitored cloud infrastructure with security and high-availability best practices.',
    stack: ['AWS EC2', 'S3', 'IAM', 'RDS', 'VPC'],
  },
]

const projects = [
  {
    name: 'SeatSync',
    year: '2026',
    desc: 'Movie ticket booking app with real-time seat availability via Socket.IO. Prevents double-booking using MongoDB findOneAndUpdate() for atomic, concurrent-safe seat locks.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.IO'],
    link: '#',
  },
  {
    name: 'Auth Playground',
    year: '2025',
    desc: 'Interactive platform to learn JWT, access & refresh tokens, cookies, and localStorage — teaching token expiry, theft risks, and storage trade-offs.',
    stack: ['React', 'Node.js', 'JWT'],
    link: '#',
  },
  {
    name: 'Snippet Hub',
    year: '2024',
    desc: 'MERN-stack platform to create, manage, and share code snippets — public/private visibility, authentication, favorites, and personal libraries.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: '#',
  },
]

const certifications = [
  { name: 'LinguaSkill (B1 Level)', org: 'Cambridge', year: '2026' },
  { name: 'Human Computer Interaction', org: 'NPTEL', year: '2026' },
  { name: 'Modern C++', org: 'NPTEL', year: '2024' },
  { name: 'SQL', org: 'HackerRank', year: '2024' },
]

const achievements = [
  { platform: 'LeetCode', detail: '750+ problems solved · Contest rating 1,390' },
  { platform: 'SkillRack', detail: '620+ problems solved' },
  { platform: 'HackerRank', detail: 'Hackos: 3341 · C++ Silver · C Silver · SQL Bronze' },
  { platform: 'CODELEE', detail: '3rd position, Coding Contest' },
]

const skills = [
  { label: 'Programming', items: ['C', 'C++', 'JavaScript', 'Java'] },
  { label: 'Databases', items: ['MongoDB', 'MySQL'] },
  { label: 'Core', items: ['Data Structures', 'Algorithms', 'OOPS', 'OS', 'CN', 'System Design'] },
  { label: 'Tools', items: ['GitHub', 'VS Code', 'Postman'] },
]

function Section({ id, cmd, children }) {
  return (
    <section id={id} className="section">
      <div className="section-head">
        <span className="prompt">guest@portfolio</span>
        <span className="colon">:~$</span>
        <span className="cmd">{cmd}</span>
      </div>
      <div className="section-body">{children}</div>
    </section>
  )
}

export default function App() {
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const nav = [
    ['#about', 'about'],
    ['#education', 'education'],
    ['#experience', 'experience'],
    ['#projects', 'projects'],
    ['#skills', 'skills'],
    ['#contact', 'contact'],
  ]

  return (
    <div className="app">
      <header className="topbar">
        <a className="brand" href="#top">
          <span className="dot" />PSM<span className="brand-cursor">_</span>
        </a>
        <nav className={`navlinks ${navOpen ? 'open' : ''}`}>
          {nav.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setNavOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <button className="burger" aria-label="Toggle menu" onClick={() => setNavOpen((v) => !v)}>
          <span /><span /><span />
        </button>
      </header>

      <main id="top">
        <section className="hero reveal">
          <div className="hero-window">
            <div className="win-bar">
              <span className="win-dot red" /><span className="win-dot yellow" /><span className="win-dot green" />
              <span className="win-title">about-me.js</span>
            </div>
            <pre className="hero-code">
<span className="tok-kw">const</span> <span className="tok-var">developer</span> = {'{'}
  <span className="tok-key">name</span>: <span className="tok-str">"Pooja Shri S M"</span>,
  <span className="tok-key">role</span>: <span className="tok-str">"IT Undergrad & Full-Stack Developer"</span>,
  <span className="tok-key">stack</span>: <span className="tok-str">"MERN"</span>,
  <span className="tok-key">focus</span>: [<span className="tok-str">"DSA"</span>, <span className="tok-str">"Web Apps"</span>, <span className="tok-str">"Cloud"</span>],
  <span className="tok-key">leetcode</span>: <span className="tok-num">"750+ solved"</span>,
{'}'};
            </pre>
          </div>
          <div className="hero-copy">
            <h1>Pooja Shri S M</h1>
            <p className="hero-tag">B.Tech IT student building real-time, full-stack products — from seat-lock booking systems to auth tooling — while chasing clean solves on LeetCode.</p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">View projects</a>
              <a className="btn" href="mailto:poojashri.sm2023it@sece.ac.in">Contact me</a>
            </div>
            <div className="hero-links">
              <a href="tel:+919345783513">+91 93457 83513</a>
              <a href="mailto:poojashri.sm2023it@sece.ac.in">poojashri.sm2023it@sece.ac.in</a>
              <a href="#" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="#" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>
        </section>

        <Section id="about" cmd="cat education.log">
          <div className="reveal edu-list">
            {education.map((e, i) => (
              <div className="edu-row" key={i}>
                <span className="edu-years">{e.years}</span>
                <div className="edu-main">
                  <span className="edu-school">{e.school}</span>
                  <span className="edu-degree">{e.degree} · {e.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" cmd="run internships/">
          <div className="grid two reveal">
            {internships.map((it, i) => (
              <article className="card" key={i}>
                <div className="card-top">
                  <h3>{it.title}</h3>
                  <span className="year-tag">{it.year}</span>
                </div>
                <p>{it.desc}</p>
                <div className="tags">
                  {it.stack.map((s) => <span className="tag" key={s}>{s}</span>)}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" cmd="ls projects/ --stack=MERN">
          <div className="grid three reveal">
            {projects.map((p, i) => (
              <article className="card project-card" key={i}>
                <div className="card-top">
                  <h3>{p.name}</h3>
                  <span className="year-tag">{p.year}</span>
                </div>
                <p>{p.desc}</p>
                <div className="tags">
                  {p.stack.map((s) => <span className="tag" key={s}>{s}</span>)}
                </div>
                <a className="card-link" href={p.link} target="_blank" rel="noreferrer">view repo →</a>
              </article>
            ))}
          </div>
        </Section>

        <Section id="certifications" cmd="cat certifications.txt">
          <div className="cert-list reveal">
            {certifications.map((c, i) => (
              <div className="cert-row" key={i}>
                <span className="cert-name">{c.name}</span>
                <span className="cert-org">{c.org}</span>
                <span className="cert-year">{c.year}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="achievements" cmd="curl stats/achievements">
          <div className="grid two reveal">
            {achievements.map((a, i) => (
              <div className="stat-card" key={i}>
                <span className="stat-platform">{a.platform}</span>
                <span className="stat-detail">{a.detail}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="skills" cmd="print(skills)">
          <div className="grid two reveal">
            {skills.map((s, i) => (
              <div className="skill-group" key={i}>
                <h4>{s.label}</h4>
                <div className="tags">
                  {s.items.map((it) => <span className="tag" key={it}>{it}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" cmd="./connect.sh">
          <div className="contact-box reveal">
            <p>Open to internships and full-stack roles — reach out any time.</p>
            <div className="hero-actions">
              <a className="btn primary" href="mailto:poojashri.sm2023it@sece.ac.in">Email me</a>
              <a className="btn" href="tel:+919345783513">Call me</a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Pooja Shri S M</span>
        <span className="footer-dim">built with React</span>
      </footer>
    </div>
  )
}
