// Hero — cinematic intimate night
const Hero = () => {
  return (
    <section className="hero" id="hero" data-screen-label="01 Hero">
      <div className="hero-bg" />
      <div className="hero-glow" />
      <div className="hero-glow b" />
      <div className="hero-beam" />
      <div className="hero-noise" />

      {/* car silhouette */}
      <div className="hero-stage">
        <div className="image-shell image-shell--hero">
          <image-slot
            id="hero-car-v2"
            src="/assets/bmw-hero-v2.png"
            placeholder="White BMW 750 · black ice"
            shape="rect"
            fit="contain"
          ></image-slot>
        </div>
      </div>

      <div className="hero-content">
        <div>
          <div className="hero-eyebrow">Private Chauffeur · BMW 750 · Baltimore &amp; Beyond</div>
          <h1 className="hero-display">
            Arrive Like
            <em>It Matters.</em>
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
