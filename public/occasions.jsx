// ExperienceStatement — large editorial text, no icons
const ExperienceStatement = () => {
  return (
    <section className="exp-stmt" id="occasions">
      <div className="exp-stmt-inner">

        <div className="exp-stmt-mark" data-reveal>
          <span className="exp-stmt-vline" />
          <span className="exp-stmt-num">01</span>
        </div>

        <div data-reveal data-delay="1">
          <h2 className="exp-stmt-hl">
            Not a limo.<br />
            Not a rideshare.<br />
            A private arrival.
          </h2>
          <div className="exp-stmt-sep" />
          <p className="exp-stmt-sub">
            For proms, weddings, date nights, airport transfers, and moments where the entrance matters.
          </p>
        </div>

      </div>
    </section>
  );
};

// Moments — 3 editorial panels, not cards
// Image slots for editorial photos — drop files into assets/ to replace placeholders.
// Target filenames (upload these as @-path files):
//   assets/editorial-waterfront.jpg  →  couple at Baltimore waterfront, BMW, formal night
//   assets/editorial-water-club.jpg  →  chauffeur at The Water Club Baltimore
//   assets/editorial-airport.jpg     →  corporate/airport BMW scene

const _img = (target, fallback) => {
  // Use target if it exists via a cached check; otherwise use fallback.
  // Runtime check not possible in static JSX — swap to target once file is uploaded.
  return target;
};

const MOMENTS = [
  {
    num: '01',
    title: 'PROM & FORMAL NIGHTS',
    sub: 'Make the entrance unforgettable.',
    img: '/assets/editorial-waterfront.jpg',
    fallback: '/assets/bmw-hero.png',
    alt: 'White BMW 750 — Baltimore waterfront, formal night',
    pos: 'center 40%',
  },
  {
    num: '02',
    title: 'DATE NIGHTS & ANNIVERSARIES',
    sub: 'Set the tone before dinner starts.',
    img: '/assets/editorial-water-club.jpg',
    fallback: '/assets/cabin-rear-wide.png',
    alt: 'Chauffeur at The Water Club Baltimore — date night arrival',
    pos: 'center 45%',
  },
  {
    num: '03',
    title: 'EXECUTIVE & AIRPORT TRAVEL',
    sub: 'Quiet. Private. Precise.',
    img: '/assets/editorial-airport.jpg',
    fallback: '/assets/cabin-front-view.png',
    alt: 'BMW 750 — corporate airport arrival',
    pos: 'center 50%',
  },
];

const Moments = () => {
  return (
    <section className="moments" id="moments">
      <div className="moments-inner">
        <div className="moments-panels" data-reveal>
          {MOMENTS.map((m) => (
            <div key={m.num} className="moment-panel">
              <img
                src={m.img}
                alt={m.alt}
                style={{ objectPosition: m.pos }}
                loading="lazy"
                onError={(e) => { e.target.src = m.fallback; }}
              />
              <div className="moment-panel-overlay" />
              <div className="moment-panel-content">
                <p className="moment-panel-num">{m.num}</p>
                <p className="moment-panel-title">{m.title}</p>
                <p className="moment-panel-sub">{m.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.ExperienceStatement = ExperienceStatement;
window.Moments = Moments;
// Legacy alias
window.Occasions = () => React.createElement(React.Fragment, null,
  React.createElement(ExperienceStatement),
  React.createElement(Moments)
);
