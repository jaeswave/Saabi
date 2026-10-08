import { ArrowRight } from "lucide-react";
import { tracks } from "../../data/academy.js";
import Section from "../ui/Section.jsx";
import Button from "../ui/Button.jsx";
import TrackCard from "../academy/TrackCard.jsx";

export default function AcademySection() {
  return (
    <Section
      tone="sky"
      eyebrow="ExeTech Academy"
      title="We also train the next generation of tech talent"
      intro="Students and young people can learn in-demand skills with hands-on projects and real mentorship, and start a career in tech."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {tracks.map((t, i) => (
          <TrackCard key={t.title} track={t} delay={i * 0.05} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button to="/academy" variant="dark">
          Explore the Academy <ArrowRight size={16} />
        </Button>
      </div>
    </Section>
  );
}
