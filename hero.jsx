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
          <div className="hero-eyebrow">Private Chauffeur · BMW 750</div>
          <h1 className="hero-display">
            An Evening,
            <em>Reserved.</em>
          </h1>
        </div>

        <div className="hero-foot">
          <p className="hero-tag">
            One sedan. One chauffeur. <em>One night</em> made entirely yours — from the moment
            the door closes to the moment you arrive.
          </p>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <span className="l">The Vehicle</span>
              <span className="v">BMW 750 · Pearl White</span>
            </div>
            <div className="hero-meta-item">
              <span className="l">The Cabin</span>
              <span className="v">Oxblood Leather</span>
            </div>
            <div className="hero-meta-item">
              <span className="l">The Driver</span>
              <span className="v">Ryan J.</span>
            </div>
          </div>

          <div className="hero-cta-row">
            <button className="btn solid" onClick={() => document.getElementById('reserve').scrollIntoView({behavior:'smooth'})}>
              <span>Reserve The Evening</span>
              <span className="arrow" />
            </button>
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
