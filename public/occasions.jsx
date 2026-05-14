// Occasions — flyer-aligned grid (no mid-page CTA)
const Occasions = () => {
  const occasions = [
    { n: 'I.', t: 'Weddings', d: 'Arrive in the quiet elegance the day deserves.' },
    { n: 'II.', t: 'Proms and formal events', d: 'Polished timing from first photo to last dance.' },
    { n: 'III.', t: 'Airport transfers', d: 'BWI, DCA, IAD — curbside when your itinerary says so.' },
    { n: 'IV.', t: 'Business travel', d: 'One driver, one sedan, door-to-door focus.' },
    { n: 'V.', t: 'Special occasions', d: 'Anniversaries, galas, and nights that need a thread.' },
    { n: 'VI.', t: 'Photo shoots', d: 'A rolling set piece that matches the brief.' },
    { n: 'VII.', t: 'Night outs and more', d: 'No parking math — keep the evening unbroken.' },
  ];

  return (
    <section className="occasions" id="occasions" data-screen-label="Occasions">
      <div className="occasions-inner">
        <div className="occasions-head" data-reveal>
          <div>
            <div className="chapter-mark">
              <span className="rune">—</span>
              Perfect for any occasion
            </div>
            <h2 className="display occasions-display">
              One cabin. <em>Seven briefs</em> it already knows.
            </h2>
          </div>
          <p className="lede">
            Same service language as the print piece — pick your lane; the cabin stays consistent.
          </p>
        </div>

        <div className="occasions-grid occasions-grid--flyer">
          {occasions.map((o, i) => (
            <div
              className="occ-item"
              key={i}
              data-reveal
              style={{ '--delay': `${i * 55}ms` }}
            >
              <span className="occ-num">{o.n}</span>
              <h3 className="occ-title">{o.t}</h3>
              <p className="occ-desc">{o.d}</p>
              <span className="occ-line" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Occasions = Occasions;
