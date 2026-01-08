import { Link } from 'react-router-dom'

const Home = () => (
  <section className="hero">
    <div className="hero__content">
      <h1>Hi, I’m Vikash Singh <span className="accent">👋</span></h1>
      <p className="subtitle">Front‑end Developer • React Enthusiast • Problem Solver</p>
      <div className="cta">
        <Link className="btn primary" to="/projects">View Projects</Link>
        <Link className="btn" to="/contact">Contact Me</Link>
      </div>
    </div>

    <div className="hero__art" aria-hidden="true">
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>
    </div>
  </section>
)

export default Home