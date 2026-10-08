import { useState } from 'react'
import { Send } from 'lucide-react'
import { site } from '../../config/site.js'
import { services } from '../../data/services.js'
import { useTone } from '../ui/ToneContext.js'
import Button from '../ui/Button.jsx'

const budgets = ['Not sure yet', 'Under ₦500k', '₦500k – ₦2m', '₦2m – ₦5m', '₦5m+']
const empty = { name: '', email: '', service: services[0].title, budget: budgets[0], message: '' }

// Opens the visitor's email app. Swap handleSubmit for Formspree/EmailJS later.
export default function ContactForm() {
  const t = useTone()
  const [f, setF] = useState(empty)
  const [sent, setSent] = useState(false)
  const field = `w-full rounded-lg border px-4 py-3 outline-none transition ${t.input}`
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`${f.service} enquiry from ${f.name}`)
    const body = encodeURIComponent(`${f.message}\n\nBudget: ${f.budget}\n${f.name} (${f.email})`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true); setF(empty)
  }
  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input className={field} required placeholder="Your name" value={f.name} onChange={set('name')} />
      <input className={field} required type="email" placeholder="Email address" value={f.email} onChange={set('email')} />
      <div className="grid gap-4 sm:grid-cols-2">
        <select className={field} value={f.service} onChange={set('service')}>{services.map((s) => <option key={s.title}>{s.title}</option>)}<option>Something else</option></select>
        <select className={field} value={f.budget} onChange={set('budget')}>{budgets.map((b) => <option key={b}>{b}</option>)}</select>
      </div>
      <textarea className={field} required rows={5} placeholder="Tell us about your project" value={f.message} onChange={set('message')} />
      <Button className="w-full" type="submit"><Send size={16} /> Send enquiry</Button>
      {sent && <p className={`text-sm ${t.accent}`}>Your email app should open with the message ready to send. You can also WhatsApp us.</p>}
    </form>
  )
}
