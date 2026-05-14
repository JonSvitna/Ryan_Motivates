// Trust — why ride with Ryan J.
const Trust = () => {
  const items = [
    { n:'01', t:'Always On Time',         d:'Ryan arrives six minutes early. Not on time — early. Every ride.' },
    { n:'02', t:'Direct Communication',   d:'No dispatcher. You text or call Ryan personally, always.' },
    { n:'03', t:'Immaculate Vehicle',     d:'Detailed and sanitized before every single ride. No exceptions.' },
    { n:'04', t:'Private & Discreet',     d:'Your cabin. Your conversation. Your space. Nothing leaves the car.' },
    { n:'05', t:'Local Coverage',         d:'Baltimore · Annapolis · Columbia · BWI · DCA · IAD · Washington, D.C.' },
    { n:'06', t:'No Surge. No Apps.',     d:'Flat pricing agreed in advance. Confirmed personally. Always.' },
  ];

  return (
    <section className="trust" id="trust" data-screen-label="Why Ryan">
      <div className="trust-inner">
        <div className="trust-head" data-reveal>
          <div className="chapter-mark">
            <span className="rune">—</span>
            Why Ride With Us
          </div>
          <h2 className="display trust-display">
            The standard your<br/><em>evening deserves.</em>
          </h2>
          <p className="lede trust-lede">
            Luxury isn't just the leather — it's knowing
            the car will be there, the driver knows your name,
            and the night is entirely yours.
          </p>
        </div>

        <div className="trust-grid">
          {items.map((item, i) => (
            <div
              className="trust-item"
              key={i}
              data-reveal
              style={{'--delay': `${i * 80}ms`}}
            >
              <span className="trust-n">{item.n}</span>
              <div className="trust-body">
                <h4 className="trust-t">{item.t}</h4>
                <p className="trust-d">{item.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="trust-cta" data-reveal style={{'--delay':'400ms'}}>
          <button
            className="btn solid"
            onClick={() => document.getElementById('reserve').scrollIntoView({behavior:'smooth'})}
          >
            <span>Reserve Your Ride</span>
            <span className="arrow" />
          </button>
          <a className="trust-phone" href="tel:6672071472">
            <span>667 · 207 · 1472</span>
          </a>
        </div>
      </div>
    </section>
  );
};

window.Trust = Trust;
