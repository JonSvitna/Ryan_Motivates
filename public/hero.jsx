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
          <div className="hero-eyebrow">Luxury chauffeur · White BMW 750 · Baltimore</div>
          <h1 className="hero-display">
            <span className="line-1">Arrive in style.</span>
            <em className="line-2">Every time.</em>
          </h1>
          <p className="hero-sub">
            Private hire — one vehicle, one chauffeur, on your schedule. Serving Baltimore and surrounding areas.
          </p>
          <p className="hero-cta-solo">
            <button type="button" className="hero-cta-link" onClick={() => document.getElementById('reserve').scrollIntoView({ behavior: 'smooth' })}>
              Reserve a date
            </button>
          </p>
        </div>

        <div className="hero-meta-strip">
          <div className="hero-meta-item">
            <span className="l">Vehicle</span>
            <span className="v">BMW 750</span>
          </div>
          <span className="hero-meta-divider" />
          <div className="hero-meta-item">
            <span className="l">Cabin</span>
            <span className="v">Red leather</span>
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
