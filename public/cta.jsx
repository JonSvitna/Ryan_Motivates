// CTA / Footer + cold-close farewell (Taste Skill: editorial exit, IO reveal)
const Farewell = () => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={'farewell ' + (visible ? 'farewell--visible' : '')}
      aria-hidden={!visible}
    >
      <div className="farewell-ice" aria-hidden="true" />
      <p className="farewell-kicker">The impression that remains</p>
      <p className="farewell-line">
        Not mileage logged in an app — <em>the silence after the door closes,</em>
        when the city sounds like someone else&#x2019;s concern.
      </p>
      <p className="farewell-sub">
        Precision reserved for guests who expect the same from a vehicle as from a tailor.
      </p>
      <div className="farewell-sig">
        <span className="farewell-mark">Night Series</span>
        <span className="farewell-divider" />
        <span className="farewell-locale">Baltimore · Private Chauffeur</span>
      </div>
    </div>
  );
};

const CTAFooter = () => {
  return (
    <section className="cta" id="cta" data-screen-label="08 Contact">
      <div className="cta-inner">
        <div className="chapter-mark" style={{ justifyContent: 'center', display: 'inline-flex', marginBottom: 40 }}>
          <span className="rune">vi</span>
          Chapter Six — The Invitation
        </div>
        <h2 className="cta-display">
          When the evening
          <em>asks for more.</em>
        </h2>
        <p className="cta-tag">
          When you are ready, one number reaches the person who stages the car — not a queue.
        </p>
        <a className="cta-phone cta-phone--primary" href="tel:+16672071472">
          <span className="ic">
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path d="M9 4 L13 4 L15 10 L12 13 C13.5 16 16 18.5 19 20 L22 17 L28 19 L28 23 C28 25 26 27 24 27 C13 27 5 19 5 8 C5 6 7 4 9 4 Z" stroke="currentColor" strokeWidth="1.1" fill="none" />
            </svg>
          </span>
          <span>667 · 207 · 1472</span>
        </a>

        <footer className="footer">
          <div className="footer-col footer-brand">
            <div className="mono">R.J.</div>
            <p>Night Series Chauffeur</p>
            <p>BMW 750 · Pearl white · Red leather</p>
            <p>Baltimore, MD</p>
          </div>
          <div className="footer-col">
            <h5>Service</h5>
            <a href="#reserve">Reserve</a>
            <a href="#occasions">Occasions</a>
            <a href="#cabin">Cabin</a>
            <a href="#driver">Ryan</a>
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
            <a href="tel:+16672071472">667 · 207 · 1472</a>
            <p>Call or text, by appointment</p>
            <p>24 hours, by request</p>
          </div>
        </footer>
        <div className="footer-bottom">
          <span>© 2026 Ryan J. Luxury Chauffeur</span>
          <em>Composed · Discreet · Exact</em>
          <span>Baltimore · After Dusk</span>
        </div>
      </div>

      <Farewell />
    </section>
  );
};

window.CTAFooter = CTAFooter;
