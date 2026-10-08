import usePageTitle from "../hooks/usePageTitle.js";
import { tracks, academyPerks, academyFormats } from "../data/academy.js";
import PageHero from "../components/ui/PageHero.jsx";
import Section from "../components/ui/Section.jsx";
import Card from "../components/ui/Card.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Button from "../components/ui/Button.jsx";
import TrackCard from "../components/academy/TrackCard.jsx";
import FaqSection from "../components/home/FaqSection.jsx";
import Cta from "../components/home/Cta.jsx";
import { useTone } from "../components/ui/ToneContext.js";

function InfoGrid({ items, cols }) {
  const t = useTone();
  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${cols}`}>
      {items.map((x, i) => (
        <Reveal key={x.title} delay={i * 0.06} className="h-full">
          <Card className="h-full">
            <h3 className={`font-display text-lg font-bold ${t.title}`}>
              {x.title}
            </h3>
            <p className={`mt-2 text-sm ${t.muted}`}>{x.desc}</p>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}

export default function Academy() {
  usePageTitle("Academy");
  return (
    <>
      <PageHero
        eyebrow="ExeTech Academy"
        title="Learn tech skills. Build a career."
        intro="Practical training for students, graduates and young people who want to become software engineers, security professionals, project managers, data experts and AI builders."
      />
      <Section tone="light" eyebrow="Learning tracks" title="Choose your path">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t, i) => (
            <TrackCard
              key={t.title}
              track={t}
              detailed
              delay={(i % 3) * 0.06}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/contact" variant="dark">
            Apply or ask a question
          </Button>
        </div>
      </Section>
      <Section tone="mist" eyebrow="What you get" title="More than lectures">
        <InfoGrid items={academyPerks} cols="lg:grid-cols-4" />
      </Section>
      <Section
        tone="midnight"
        eyebrow="Ways to learn"
        title="Pick the format that fits your life"
      >
        <InfoGrid items={academyFormats} cols="lg:grid-cols-4" />
      </Section>
      <FaqSection />
      <Cta />
    </>
  );
}
