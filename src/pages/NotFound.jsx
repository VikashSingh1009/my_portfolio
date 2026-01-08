import { Link } from 'react-router-dom'

const NotFound = () => (
  <section className="section center">
    <h2>404 – Page not found</h2>
    <Link to="/" className="btn">Go Home</Link>
  </section>
)

export default NotFound