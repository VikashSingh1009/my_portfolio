import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  const close = () => setOpen(false)

  return (
    <header className="nav">
      <div className="nav__brand">
        <NavLink to="/" onClick={close}>
          <span className="logo">V</span> VIKASH SINGH 
        </NavLink>
      </div>

      <button
        className="nav__toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        ☰
      </button>

      <nav className={`nav__links ${open ? 'open' : ''}`}>
        <NavLink to="/" onClick={close} className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="/about" onClick={close} className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
        <NavLink to="/skills" onClick={close} className={({ isActive }) => (isActive ? 'active' : '')}>Skills</NavLink>
        <NavLink to="/projects" onClick={close} className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink>
        <NavLink to="/contact" onClick={close} className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>

        <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? <FiSun /> : <FiMoon />}
        </button>
      </nav>
    </header>
  )
}

export default Navbar