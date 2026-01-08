import { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const subject = encodeURIComponent(`Portfolio contact from ${data.get('name')}`)
    const body = encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('name')} <${data.get('email')}>`)
    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`
    setStatus('Opening your email app...')
  }

  return (
    <section className="section">
      <h2 className="section__title">Contact</h2>
      <form className="card form" onSubmit={onSubmit}>
        <label>
          Name
          <input name="name" type="text" required placeholder="Your name" />
        </label>
        <label>
          Email
          <input name="email" type="email" required placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" required placeholder="How can I help?" />
        </label>
        <button className="btn primary" type="submit">Send</button>
        {status && <p className="status">{status}</p>}
      </form>

      <div className="card mt">
        <p>Email: vikashsingh5780@gmail.com</p>
      </div>
    </section>
  )
}

export default Contact