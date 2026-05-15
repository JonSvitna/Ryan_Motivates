// Hero — Full viewport · BMW editorial · Left-aligned campaign composition
const { useState, useEffect } = React;

const CinematicIntro = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const alreadySeen = typeof sessionStorage !== 'undefined' && sessionStorage.getItem('intro-seen');
  if (isMobile || alreadySeen) return null;

  const [visible, setVisible] = React.useState(true);
  const [fading, setFading] = React.useState(false);

  const dismiss = React.useCallback(() => {
    setFading(true);
    setTimeout(() => {
      setVisible(false);
      if (typeof sessionStorage !== 'undefined') sessionStorage.setItem('intro-seen', '1');
    }, 900);
  }, []);

  React.useEffect(() => {
    if (!visible) return;
    const onScroll = () => dismiss();
    window.addEventListener('scroll', onScroll, { once: true, passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [visible, dismiss]);

  if (!visible) return null;

  return (
    <div className={'cinematic-intro' + (fading ? ' fading' : '')}>
      <video
        src="/assets/videos/isolated_car_shot.mp4"
        autoPlay
        muted
        playsInline
        onEnded={() => setTimeout(dismiss, 800)}
      />
      <div className="cinematic-intro-overlay" />
      <div className="cinematic-intro-brand">NIGHT SERIES</div>
      <button className="cinematic-intro-enter" onClick={dismiss}>Enter ↓</button>
    </div>
  );
};

window.CinematicIntro = CinematicIntro;

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
