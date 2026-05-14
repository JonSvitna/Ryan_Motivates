import { FleetZigzag } from "./components/FleetZigzag";
import { Footer } from "./components/Footer";
import { HeroCinematic } from "./components/HeroCinematic";
import { Nav } from "./components/Nav";
import { ReserveForm } from "./components/ReserveForm";
import { ServicesBento } from "./components/ServicesBento";
import { StatsStrip } from "./components/StatsStrip";
import { TestimonialDeck } from "./components/TestimonialDeck";

export default function App() {
  return (
    <>
      <div className="film-grain" aria-hidden />
      <Nav />
      <main>
        <HeroCinematic />
        <StatsStrip />
        <FleetZigzag />
        <ServicesBento />
        <TestimonialDeck />
        <ReserveForm />
      </main>
      <Footer />
    </>
  );
}
