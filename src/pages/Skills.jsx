import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiCss3, SiHtml5, SiTailwindcss, SiVite } from 'react-icons/si'

const skills = [
  { name: 'React', icon: <FaReact /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'HTML5', icon: <SiHtml5 /> },
  { name: 'CSS3', icon: <SiCss3 /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Vite', icon: <SiVite /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
]

const Skills = () => (
  <section className="section">
    <h2 className="section__title">Skills</h2>
    <ul className="grid skills">
      {skills.map(s => (
        <li key={s.name} className="skill card">
          <span className="skill__icon">{s.icon}</span>
          <span className="skill__name">{s.name}</span>
        </li>
      ))}
    </ul>
  </section>
)

export default Skills