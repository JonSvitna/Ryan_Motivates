// Showcase — edge-to-edge two-panel vehicle spread · WE-style full bleed
const Showcase = () => {
  return (
    <section className="showcase" id="showcase" data-screen-label="Showcase">

      {/* ── Left panel: Exterior ── */}
      <div className="showcase-pane showcase-pane--ext">
        <div className="showcase-img">
          <image-slot
            id="showcase-exterior"
            src="/assets/bmw-hero-v2.png"
            placeholder="White BMW 750 — autumn road, exterior · drag to fill"
            shape="rect"
            fit="cover"
          ></image-slot>
        </div>
        <div className="showcase-overlay" />
        <div className="showcase-label">
          <span className="showcase-tag">The Vehicle</span>
          <span className="showcase-value">BMW 750 · Pearl White</span>
        </div>
        <span className="showcase-num">01</span>
      </div>

      {/* ── Right panel: Interior ── */}
      <div className="showcase-pane showcase-pane--int">
        <div className="showcase-img">
          <image-slot
            id="showcase-interior"
            src="/assets/cabin-dash.png"
            placeholder="BMW interior — red leather cockpit · drag to fill"
            shape="rect"
            fit="cover"
          ></image-slot>
        </div>
        <div className="showcase-overlay" />
        <div className="showcase-label">
          <span className="showcase-tag">The Cabin</span>
          <span className="showcase-value">Oxblood Leather · Ambient Light</span>
        </div>
        <span className="showcase-num">02</span>
      </div>

    </section>
  );
};

window.Showcase = Showcase;
