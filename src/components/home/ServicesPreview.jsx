import { ArrowRight } from 'lucide-react'
import { services } from '../../data/services.js'
import Section from '../ui/Section.jsx'
import Button from '../ui/Button.jsx'
import ServiceCard from '../services/ServiceCard.jsx'

export default function ServicesPreview() {
  return (
    <Section tone="light" eyebrow="What we do" title="Everything your business needs in tech, under one team" intro="From a first website to a secured, automated platform, we cover the full journey.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.slice(0, 6).map((s, i) => <ServiceCard key={s.title} service={s} delay={i * 0.05} />)}
      </div>
      <div className="mt-10 text-center"><Button to="/services" variant="dark">See all 12 services <ArrowRight size={16} /></Button></div>
    </Section>
  )
}
