// CTA / Footer
const CTAFooter = () => {
  const goReserve = () => document.getElementById('reserve').scrollIntoView({behavior:'smooth'});
  return (
    <section className="cta" id="cta" data-screen-label="08 Contact">
      <div className="cta-inner">
        <div className="chapter-mark" style={{justifyContent:'center', display:'inline-flex', marginBottom: 40}}>
          <span className="rune">vi</span>
          Chapter Six — The Invitation
        </div>
        <h2 className="cta-display">
          Arrive in
          <em>style.</em>
        </h2>
        <p className="cta-tag">
          One sedan, one driver, one evening at a time. When you're ready,
          we're already on our way.
        </p>
        <div className="cta-row">
          <button className="btn solid" onClick={goReserve}>
            <span>Reserve Online</span>
            <span className="arrow" />
          </button>
          <span className="cta-divider">— or —</span>
        </div>
        <a className="cta-phone" href="tel:6672071472">
          <span className="ic">
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
              <path d="M9 4 L13 4 L15 10 L12 13 C13.5 16 16 18.5 19 20 L22 17 L28 19 L28 23 C28 25 26 27 24 27 C13 27 5 19 5 8 C5 6 7 4 9 4 Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            </svg>
          </span>
          <span>667 · 207 · 1472</span>
        </a>

        <footer className="footer">
          <div className="footer-col footer-brand">
            <div className="mono">R.J.</div>
            <p>Night Series Chauffeur</p>
            <p>BMW 750 · Pearl &amp; Oxblood</p>
            <p>Baltimore, MD</p>
          </div>
          <div className="footer-col">
            <h5>Service</h5>
            <a href="#reserve">Reserve</a>
            <a href="#cabin">The Cabin</a>
            <a href="#experience">The Detail</a>
            <a href="#driver">The Driver</a>
          </div>
          <div className="footer-col">
            <h5>Coverage</h5>
            <p>Baltimore Metro</p>
            <p>Annapolis · Columbia</p>
            <p>BWI · DCA · IAD</p>
            <p>Washington, D.C.</p>
          </div>
          <div className="footer-col">
            <h5>Direct</h5>
            <a href="tel:6672071472">667 · 207 · 1472</a>
            <p>Call or text, day or night</p>
            <p>24 hours, by request</p>
          </div>
        </footer>
        <div className="footer-bottom">
          <span>© 2026 Ryan J. Luxury Chauffeur</span>
          <em>Reliable · Respectful · Professional</em>
          <span>Baltimore · After Dusk</span>
        </div>
      </div>
    </section>
  );
};

window.CTAFooter = CTAFooter;
