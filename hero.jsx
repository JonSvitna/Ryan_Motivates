// Hero — full-bleed vehicle background · WE-style automotive editorial
const Hero = () => {
  return (
    <section className="hero" id="hero" data-screen-label="01 Hero">

      {/* ── Layer 1: Full-bleed vehicle photo (drop your image here) ── */}
      <div className="hero-vehicle">
        <image-slot
          id="hero-car-fullbleed"
          src="/assets/bmw-hero-v2.png"
          placeholder="White BMW 750 — autumn road, rear three-quarter · drag to fill"
          shape="rect"
          fit="cover"
        ></image-slot>
      </div>

      {/* ── Layer 2: Cinematic gradient overlay ── */}
      <div className="hero-overlay" />

      {/* ── Layer 3: Atmospheric depth ── */}
      <div className="hero-rain" aria-hidden="true" />
      <div className="hero-fog"  aria-hidden="true" />
      <div className="hero-glow" />
      <div className="hero-glow b" />
      <div className="hero-beam" />
      <div className="hero-beam b" />
      <div className="hero-noise" />
      <div className="hero-vignette" aria-hidden="true" />

      {/* ── Layer 4: All copy — lower section ── */}
      <div className="hero-content">

        <div className="hero-text-block">
          <div className="hero-eyebrow">Private Chauffeur · BMW 750 · Baltimore</div>
          <h1 className="hero-display">
            <span className="line-1">Arrive Like</span>
            <em className="line-2">It Matters.</em>
          </h1>
          <p className="hero-sub">
            Airport transfers, date nights, weddings, proms, and corporate travel.
            One driver. One car. <em>No compromises.</em>
          </p>
          <div className="hero-cta-row">
            <button className="btn solid" onClick={() => document.getElementById('reserve').scrollIntoView({behavior:'smooth'})}>
              <span>Reserve Your Ride</span>
              <span className="arrow" />
            </button>
            <a className="btn" href="tel:6672071472">
              <span>667 · 207 · 1472</span>
              <span className="arrow" />
            </a>
          </div>
        </div>

        <div className="hero-meta-strip">
          <div className="hero-meta-item">
            <span className="l">Vehicle</span>
            <span className="v">BMW 750</span>
          </div>
          <span className="hero-meta-divider" />
          <div className="hero-meta-item">
            <span className="l">Cabin</span>
            <span className="v">Oxblood Leather</span>
          </div>
          <span className="hero-meta-divider" />
          <div className="hero-meta-item">
            <span className="l">Driver</span>
            <span className="v">Ryan J.</span>
          </div>
          <span className="hero-meta-divider" />
          <div className="hero-meta-item">
            <span className="l">Coverage</span>
            <span className="v">Baltimore · D.C. · BWI</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <span className="stroke" />
      </div>
    </section>
  );
};

window.Hero = Hero;
