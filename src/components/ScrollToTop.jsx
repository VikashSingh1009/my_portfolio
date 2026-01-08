import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    <div className="socials">
      <a href="https://github.com/VikashSingh1009" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/vikashsingh1009" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      {/* <a href="https://twitter.com/yourname" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a> */}
    </div>
  </footer>
)

export default Footer