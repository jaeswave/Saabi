import { ArrowRight } from 'lucide-react'
import Section from '../ui/Section.jsx'
import Button from '../ui/Button.jsx'
import Reveal from '../ui/Reveal.jsx'
import { site } from '../../config/site.js'

export default function Cta() {
  return (
    <Section tone="brand">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Have a project in mind?</h2>
        <p className="mt-5 text-lg text-indigo-100">Tell us what you need, even if it is outside our listed services. You will get a reply within one business day.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button to="/contact" variant="white">Start a project <ArrowRight size={16} /></Button>
          <Button href={`https://wa.me/${site.whatsapp}`} variant="outline">Chat on WhatsApp</Button>
        </div>
      </Reveal>
    </Section>
  )
}
