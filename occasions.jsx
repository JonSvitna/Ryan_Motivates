// Occasions — editorial service grid
const Occasions = () => {
  const occasions = [
    { n:'I.',    t:'Date Nights',            d:'Make the arrival as memorable as the destination.' },
    { n:'II.',   t:'Airport Transfers',      d:'Punctual, calm, and professionally driven.' },
    { n:'III.',  t:'Weddings',               d:'Arrive in the quiet elegance the day deserves.' },
    { n:'IV.',   t:'Proms & Formals',         d:'Arrive like you own the night.' },
    { n:'V.',    t:'Corporate Travel',        d:'Executive presentation, door to door.' },
    { n:'VI.',   t:'Birthdays & Occasions',  d:'Because every celebration deserves a grand entrance.' },
    { n:'VII.',  t:'Photo Shoots',            d:'The right backdrop begins before the camera clicks.' },
    { n:'VIII.', t:'Nights Out',              d:'No parking. No driving. No ceiling on the evening.' },
  ];

  return (
    <section className="occasions" id="occasions" data-screen-label="Occasions">
      <div className="occasions-inner">
        <div className="occasions-head" data-reveal>
          <div>
            <div className="chapter-mark">
              <span className="rune">—</span>
              For Every Occasion
            </div>
            <h2 className="display occasions-display">
              One car. <em>Every night</em><br/>that matters.
            </h2>
          </div>
          <p className="lede">
            From the tarmac to the altar — every occasion deserves
            the same quiet luxury and unhurried presence.
          </p>
        </div>

        <div className="occasions-grid">
          {occasions.map((o, i) => (
            <div
              className="occ-item"
              key={i}
              data-reveal
              style={{'--delay': `${i * 55}ms`}}
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
