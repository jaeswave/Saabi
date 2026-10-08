import usePageTitle from '../hooks/usePageTitle.js'
import { services } from '../data/services.js'
import PageHero from '../components/ui/PageHero.jsx'
import Section from '../components/ui/Section.jsx'
import ServiceCard from '../components/services/ServiceCard.jsx'
import PartnerNetwork from '../components/home/PartnerNetwork.jsx'
import Models from '../components/home/Models.jsx'
import FaqSection from '../components/home/FaqSection.jsx'
import Cta from '../components/home/Cta.jsx'

export default function Services() {
  usePageTitle('Services')
  return (
    <>
      <PageHero eyebrow="Services" title="Software, security and every IT service in between" intro="Twelve services under one roof. We build the core ourselves and manage trusted partners for the rest, so you always deal with one team." />
      <Section tone="light">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => <ServiceCard key={s.title} service={s} detailed delay={(i % 3) * 0.06} />)}
        </div>
        <p className="mt-10 rounded-2xl bg-brand/10 px-6 py-5 text-sm text-slate-700">Services marked <strong>With partners</strong> are delivered by vetted specialists we manage for you. Need something not listed? Ask us. If it is tech, we will find the right team.</p>
      </Section>
      <PartnerNetwork /><Models /><FaqSection /><Cta />
    </>
  )
}
