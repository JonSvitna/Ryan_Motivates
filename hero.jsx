// Hero — cinematic luxury automotive entrance
const Hero = () => {
  return (
    <section className="hero" id="hero" data-screen-label="01 Hero">

      {/* ── Depth layer 0: base gradient ── */}
      <div className="hero-bg" />

      {/* ── Depth layer 1: atmospheric rain / streaks ── */}
      <div className="hero-rain" aria-hidden="true" />

      {/* ── Depth layer 2: ambient fog / haze ── */}
      <div className="hero-fog" aria-hidden="true" />

      {/* ── Depth layer 3: warm glows ── */}
      <div className="hero-glow" />
      <div className="hero-glow b" />

      {/* ── Depth layer 4: sweeping headlight ── */}
      <div className="hero-beam" />
      <div className="hero-beam b" />

      {/* ── Depth layer 5: film grain ── */}
      <div className="hero-noise" />

      {/* ── Depth layer 6: vehicle ── */}
      <div className="hero-stage">
        <div className="image-shell image-shell--hero">
          <image-slot
            id="hero-car-v2"
            src="/assets/bmw-hero-v2.png"
            placeholder="White BMW 750 · satin black night"
            shape="rect"
            fit="contain"
          ></image-slot>
        </div>
      </div>

      {/* ── Depth layer 7: wet pavement glow beneath car ── */}
      <div className="hero-pavement" aria-hidden="true" />

      {/* ── Depth layer 8: cinematic vignette ── */}
      <div className="hero-vignette" aria-hidden="true" />

      {/* ── Depth layer 9: copy ── */}
      <div className="hero-content">
        <div>
          <div className="hero-eyebrow">Private Chauffeur · BMW 750 · Baltimore &amp; Beyond</div>
          <h1 className="hero-display">
            <span className="line-1">Arrive Like</span>
            <em className="line-2">It Matters.</em>
          </h1>
        </div>

        <div className="hero-foot">
          <div>
            <p className="hero-tag">
              Premium chauffeur experiences for airport transfers,
              date nights, weddings, proms, and every occasion
              that deserves <em>a proper arrival.</em>
            </p>
            <p className="hero-tag-sub">
              Baltimore · Annapolis · Washington D.C. · BWI · DCA · IAD
            </p>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <span className="l">The Occasions</span>
              <span className="v">Date Nights · Airports · Weddings</span>
            </div>
            <div className="hero-meta-item">
              <span className="l">The Vehicle</span>
              <span className="v">BMW 750 · Pearl White</span>
            </div>
            <div className="hero-meta-item">
              <span className="l">The Driver</span>
              <span className="v">Ryan J.</span>
            </div>
          </div>

          <div className="hero-cta-row">
            <button className="btn solid" onClick={() => document.getElementById('reserve').scrollIntoView({behavior:'smooth'})}>
              <span>Reserve Your Ride</span>
              <span className="arrow" />
            </button>
            <a className="btn" href="tel:6672071472">
              <span>Call or Text Ryan</span>
              <span className="arrow" />
            </a>
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
