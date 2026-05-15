// CinematicIntro — fullscreen BMW video splash, plays once per session
const { useState, useEffect } = React;

const CinematicIntro = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const alreadySeen =
    typeof sessionStorage !== 'undefined' && sessionStorage.getItem('ns-intro-seen');

  const [visible, setVisible] = useState(!isMobile && !alreadySeen);
  const [fading, setFading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const dismiss = () => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      setVisible(false);
      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem('ns-intro-seen', '1');
      }
    }, 900);
  };

  // Dismiss on first scroll
  useEffect(() => {
    if (!visible) return;
    window.addEventListener('scroll', dismiss, { once: true, passive: true });
    return () => window.removeEventListener('scroll', dismiss);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className={'ci ' + (fading ? 'ci--out' : '') + (loaded ? ' ci--loaded' : '')}>
      {/* Video */}
      <video
        className="ci-video"
        src="/assets/bmw-intro.mp4"
        autoPlay
        muted
        playsInline
        onCanPlayThrough={() => setLoaded(true)}
        onEnded={() => setTimeout(dismiss, 600)}
      />

      {/* Vignette */}
      <div className="ci-vignette" />

      {/* Brand mark */}
      <div className="ci-brand">
        <p className="ci-brand-label">Night Series</p>
        <p className="ci-brand-sub">Baltimore Private Chauffeur</p>
      </div>

      {/* Skip / Enter */}
      <button className="ci-enter" onClick={dismiss} aria-label="Enter site">
        Enter ↓
      </button>
    </div>
  );
};

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
        Swap: /assets/bmw-hero-v2.png (current) or /assets/bmw-hero.png
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

window.CinematicIntro = CinematicIntro;
window.Hero = Hero;
