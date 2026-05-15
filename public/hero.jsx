// Hero — Full viewport · BMW editorial · Left-aligned campaign composition
const Hero = () => {
  return (
    <section className="hero" id="hero">
      {/* Atmosphere */}
      <div className="hero-bg" />
      <div className="hero-grad-left" />
      <div className="hero-grad-top" />
      <div className="hero-grad-bottom" />

      {/*
        BMW 750 hero image — wet street, night exterior
        Swap src to /assets/bmw-hero-v2.png or /assets/bmw-hero.png
      */}
      <div className="hero-car">
        <img
          src="/assets/bmw-hero-v2.png"
          alt="White BMW 750 — Baltimore night arrival"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Editorial content — left-aligned */}
      <div className="hero-body">
        <p className="hero-eyebrow">Baltimore Private Chauffeur</p>

        <h1 className="hero-hl">
          <span>THE NIGHT</span>
          <span>BEGINS</span>
          <span>BEFORE</span>
          <span>YOU ARRIVE.</span>
        </h1>

        <p className="hero-sub">
          A private BMW 750 experience for nights that deserve more than a ride.
        </p>

        <div className="hero-actions">
          <a href="#book" className="btn-primary">Book Your Night</a>
          <a href="sms:+16672071472" className="btn-ghost">Text 667 · 207 · 1472</a>
        </div>

        <p className="hero-trust">Private · Professional · On Time</p>
      </div>
    </section>
  );
};

window.Hero = Hero;
