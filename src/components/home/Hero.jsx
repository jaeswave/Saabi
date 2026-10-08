import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { rotatingWords, trust } from '../../data/content.js'
import useRotatingIndex from '../../hooks/useRotatingIndex.js'
import NetworkCanvas from '../common/NetworkCanvas.jsx'
import Button from '../ui/Button.jsx'

export default function Hero() {
  const i = useRotatingIndex(rotatingWords.length)
  return (
    <section className="relative grid min-h-screen place-items-center overflow-hidden bg-ink pb-16 pt-28">
      <NetworkCanvas />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand/25 blur-[140px]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300">Software, security and IT solutions from Lagos to the world</p>
        <h1 className="mt-8 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl">
          We build{' '}
          <span className="inline-block min-w-[2ch]">
            <AnimatePresence mode="wait">
              <motion.span key={rotatingWords[i]} className="inline-block bg-gradient-to-r from-brand to-aqua bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                {rotatingWords[i]}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />that move business forward.
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-300">ExeTech designs, engineers and protects the digital products your customers use and your team depends on. If it is tech, we deliver it ourselves or through trusted partners.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button to="/contact">Get a free consultation <ArrowRight size={16} /></Button>
          <Button to="/portfolio" variant="outline">See our work</Button>
        </div>
        <ul className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-400">
          {trust.map((x) => <li key={x} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-aqua" />{x}</li>)}
        </ul>
      </div>
    </section>
  )
}
