import usePageTitle from '../hooks/usePageTitle.js'
import Hero from '../components/home/Hero.jsx'
import Stats from '../components/home/Stats.jsx'
import ServicesPreview from '../components/home/ServicesPreview.jsx'
import PartnerNetwork from '../components/home/PartnerNetwork.jsx'
import FeaturedWork from '../components/home/FeaturedWork.jsx'
import Industries from '../components/home/Industries.jsx'
import WhyUs from '../components/home/WhyUs.jsx'
import Models from '../components/home/Models.jsx'
import TechMarquee from '../components/home/TechMarquee.jsx'
import FaqSection from '../components/home/FaqSection.jsx'
import Cta from '../components/home/Cta.jsx'
import AcademySection from "../components/home/AcademySection.jsx";

export default function Home() {
  usePageTitle()
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <PartnerNetwork />
      <FeaturedWork />
      <Industries />
      <WhyUs />
      <Models />
      <TechMarquee />
      <FaqSection />
      <Cta />
      <WhyUs />
      <AcademySection />
      <Models />
    </>
  );
}
