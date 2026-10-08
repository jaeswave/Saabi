import { stats } from '../../data/content.js'
import Section from '../ui/Section.jsx'
import CountUp from '../ui/CountUp.jsx'

export default function Stats() {
  return (
    <Section tone="brand" compact>
      <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-5xl font-extrabold"><CountUp to={s.value} suffix={s.suffix} /></div>
            <p className="mt-2 text-sm text-indigo-100">{s.label}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
