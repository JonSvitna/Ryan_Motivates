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
const MOMENTS = [
  {
    num: '01',
    title: 'PROM & FORMAL NIGHTS',
    sub: 'Make the entrance unforgettable.',
    // Swap: /assets/bmw-exterior.png for best exterior night crop
    img: '/assets/bmw-exterior.png',
    alt: 'White BMW 750 — prom arrival',
    pos: 'center center',
  },
  {
    num: '02',
    title: 'DATE NIGHTS & ANNIVERSARIES',
    sub: 'Set the tone before dinner starts.',
    // Swap: /assets/cabin-rear-bench.png or /assets/cabin-seats.png
    img: '/assets/cabin-rear-bench.png',
    alt: 'Red leather interior — intimate evening',
    pos: 'center 40%',
  },
  {
    num: '03',
    title: 'EXECUTIVE & AIRPORT TRAVEL',
    sub: 'Quiet. Private. Precise.',
    // Swap: /assets/cabin-dash.png for cockpit precision shot
    img: '/assets/cabin-dash.png',
    alt: 'BMW 750 cockpit — executive travel',
    pos: 'center 55%',
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
