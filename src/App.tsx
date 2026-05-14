import { DriverBand } from "./components/DriverBand";
import { Footer } from "./components/Footer";
import { HeroCinematic } from "./components/HeroCinematic";
import { LuxuryExperienceSection } from "./components/LuxuryExperienceSection";
import { Nav } from "./components/Nav";
import { OccasionsGrid } from "./components/OccasionsGrid";
import { ReserveForm } from "./components/ReserveForm";

export default function App() {
  return (
    <>
      <div className="film-grain" aria-hidden />
      <Nav />
      <main>
        <HeroCinematic />
        <OccasionsGrid />
        <LuxuryExperienceSection />
        <DriverBand />
        <ReserveForm />
      </main>
      <Footer />
    </>
  );
}
