import { DriverBand } from "./components/DriverBand";
import { FleetZigzag } from "./components/FleetZigzag";
import { Footer } from "./components/Footer";
import { HeroCinematic } from "./components/HeroCinematic";
import { LuxuryExperienceSection } from "./components/LuxuryExperienceSection";
import { Nav } from "./components/Nav";
import { OccasionsGrid } from "./components/OccasionsGrid";
import { ReserveForm } from "./components/ReserveForm";
import { ServicesBento } from "./components/ServicesBento";
import { TestimonialDeck } from "./components/TestimonialDeck";

export default function App() {
  return (
    <>
      <div className="film-grain" aria-hidden />
      <Nav />
      <main>
        <HeroCinematic />
        <OccasionsGrid />
        <LuxuryExperienceSection />
        <FleetZigzag />
        <ServicesBento />
        <TestimonialDeck />
        <DriverBand />
        <ReserveForm />
      </main>
      <Footer />
    </>
  );
}
