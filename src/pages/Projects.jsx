import projects from '../data/projects'
import { Link } from 'react-router-dom'

const Projects = () => (
  <section className="section">
    <h2 className="section__title">Projects</h2>
    <div className="grid projects">
      {projects.map(p => (
        <article key={p.title} className="card project">
          <img src={p.image} alt={`${p.title} preview`} className="project__img" loading="lazy" />
          <div className="project__body">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="project__tags">
              {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <div className="project__links">
              {/* <a className="btn small" href={p.demo} target="_blank" rel="noreferrer">Live</a>
              <a className="btn small" href={p.source} target="_blank" rel="noreferrer">Code</a> */}
            </div>
          </div>
        </article>
      ))}
    </div>
    <div className="center mt-lg">
      <Link to="/contact" className="btn">Let’s work together</Link>
    </div>
  </section>
)

export default Projects