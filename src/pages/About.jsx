import usePageTitle from '../hooks/usePageTitle.js'
import { founderFacts } from '../data/content.js'
import PageHero from '../components/ui/PageHero.jsx'
import Section from '../components/ui/Section.jsx'
import Card from '../components/ui/Card.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import ProcessTimeline from '../components/home/ProcessTimeline.jsx'
import WhyUs from '../components/home/WhyUs.jsx'
import PartnerNetwork from '../components/home/PartnerNetwork.jsx'
import Cta from '../components/home/Cta.jsx'

export default function About() {
  usePageTitle('About')
  return (
    <>
      <PageHero eyebrow="About ExeTech" title="Engineers who understand how business runs" intro="ExeTech was founded to give companies a technology partner that builds securely, communicates clearly and thinks about results, not just code." />
      <Section tone="light" eyebrow="Our story" title="From operations to engineering">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal className="space-y-5 text-lg text-slate-600">
            <p>Our founder spent nine years leading operations and digital transformation, automating workflows, managing compliance and delivering cross-team projects on time and on budget.</p>
            <p>He then moved into full-stack engineering and cybersecurity, building production applications, introducing secure development practices and training over a hundred students.</p>
            <p>That combination shapes ExeTech: we build software the way an operator would want it, secure by default, measurable and easy to run.</p>
          </Reveal>
          <div className="grid gap-4">
            {founderFacts.map((f, i) => (
              <Reveal key={f.value} delay={i * 0.08}>
                <Card><p className="bg-gradient-to-r from-brand to-aqua bg-clip-text font-display text-3xl font-extrabold text-transparent">{f.value}</p><p className="mt-1 text-slate-600">{f.label}</p></Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
      <ProcessTimeline /><WhyUs tone="mist" /><PartnerNetwork /><Cta />
    </>
  )
}
