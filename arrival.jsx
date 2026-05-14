// Chapter I — Arrival / Moment — Cabin (sticky scroll)
const Arrival = () => {
  return (
    <section className="arrival" id="arrival" data-screen-label="02 Arrival">
      <div className="arrival-grid">
        <div className="arrival-img">
          <div className="image-shell image-shell--arrival">
            <image-slot
              id="arrival-img-v2"
              src="/assets/cabin-rear.png"
              placeholder="Door opening · red interior reveal"
              shape="rect"
            ></image-slot>
          </div>
          <span className="tag">I.</span>
        </div>
        <div className="arrival-text">
          <div className="chapter-mark">
            <span className="rune">i</span>
            Chapter One — The Arrival
          </div>
          <h2 className="display">
            The white BMW is <em>already waiting.</em>
          </h2>
          <p className="lede">
            Outside the venue, idling quiet. Pearl-white BMW 750 against the dark.
            Engine warm. Cabin tempered. Phone connected.
            Ryan, standing at the door, has been there for six minutes.
          </p>
          <p className="arrival-poem">
            You don't open doors anymore.<br/>
            You don't watch clocks anymore.<br/>
            You don't <em>wait</em> anymore.
          </p>
          <button className="btn" onClick={() => document.getElementById('reserve').scrollIntoView({behavior:'smooth'})}>
            <span>Begin the Evening</span>
            <span className="arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Moment = () => {
  return (
    <section className="moment" data-screen-label="03 Moment">
      <div className="moment-text">
        <p className="moment-quote">
          "True luxury is not spectacle —
          <em>it is anticipation.</em>
          A cabin prepared before you arrive, discretion without being asked,
          and the quiet certainty that your standard is ours."
        </p>
        <div className="moment-attrib">— A Note From The Driver</div>
      </div>
    </section>
  );
};

const Cabin = () => {
  const [active, setActive] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const images = ref.current?.querySelectorAll('.cabin-img');
    if (!images) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setActive(parseInt(e.target.dataset.idx, 10));
        }
      });
    }, { rootMargin: '-40% 0% -40% 0%', threshold: 0 });
    images.forEach(img => io.observe(img));
    return () => io.disconnect();
  }, []);

  const stages = [
    {
      e: 'Texture · I',
      t: '750 ',
      em: 'red leather interior.',
      d: 'Hand-stitched oxblood hide — a single thread drawn through the seam, by hand. You feel it beneath your palm before you see it.'
    },
    {
      e: 'Light · II',
      t: 'Ambient cabin,',
      em: ' tuned to your night.',
      d: 'Twelve color presets, dimmed by the half-percent. Choose the one that matches your dress, or the city outside.'
    },
    {
      e: 'Silence · III',
      t: 'A near',
      em: ' soundless ride.',
      d: 'Acoustic glass, sealed doors, a powerplant tuned to whisper. The only thing you hear is what you choose to play — or each other.'
    }
  ];

  return (
    <section className="cabin" id="cabin" data-screen-label="04 Cabin">
      <div className="cabin-head">
        <div>
          <div className="chapter-mark">
            <span className="rune">ii</span>
            Chapter Two — The Cabin
          </div>
          <h2 className="display">
            Step inside. <em>The world doesn't follow.</em>
          </h2>
        </div>
        <p className="lede">
          From the door closing to the curb at your destination, every element is dressed
          for an audience of one. Two, if you're lucky.
        </p>
      </div>

      <div className="cabin-stack" ref={ref}>
        <div className="cabin-text">
          <div className="stage">
            {stages.map((s, i) => (
              <div key={i} className={i === active ? 'active' : ''}>
                <div className="label" style={{color: 'var(--rose)'}}>{s.e}</div>
                <h3>{s.t}<em>{s.em}</em></h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="cabin-images">
          <div className="cabin-img" data-idx="0">
            <image-slot id="cabin-rear-v2" src="/assets/cabin-rear.png" placeholder="Red leather rear cabin" shape="rect"></image-slot>
            <span className="num">01 ── Texture</span>
            <span className="ttl">Oxblood, hand-stitched.</span>
          </div>
          <div className="cabin-img" data-idx="1">
            <image-slot id="cabin-dash-v2" src="/assets/cabin-dash.png" placeholder="BMW dashboard · red interior" shape="rect"></image-slot>
            <span className="num">02 ── Cockpit</span>
            <span className="ttl">Control, refined.</span>
          </div>
          <div className="cabin-img" data-idx="2">
            <image-slot id="cabin-seat-v2" src="/assets/cabin-rear.png" placeholder="Rear cabin detail · stitched seat" shape="rect"></image-slot>
            <span className="num">03 ── Silence</span>
            <span className="ttl">Sealed quiet.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Nameplate = () => {
  return (
    <section className="nameplate" data-screen-label="03 Vehicle">
      <div className="nameplate-row">
        <div className="nameplate-mark">
          The Vehicle —
        </div>
        <div className="nameplate-specs">
          <div className="nameplate-spec">
            <span className="l">Make · Model</span>
            <span className="v">BMW 750 <em>— Sedan</em></span>
          </div>
          <div className="nameplate-spec">
            <span className="l">Exterior</span>
            <span className="v">
              <span className="nameplate-dot" style={{background:'#F2EBDD', border:'1px solid #C8C0B2'}} />
              Pearl White
            </span>
          </div>
          <div className="nameplate-spec">
            <span className="l">Cabin</span>
            <span className="v">
              <span className="nameplate-dot" style={{background:'#8A1E26'}} />
              Oxblood Leather
            </span>
          </div>
          <div className="nameplate-spec">
            <span className="l">Doors</span>
            <span className="v">Soft-close · Heated</span>
          </div>
          <div className="nameplate-spec">
            <span className="l">Drivetrain</span>
            <span className="v">V8 <em>— smooth</em></span>
          </div>
        </div>
      </div>
    </section>
  );
};

window.Arrival = Arrival;
window.Moment = Moment;
window.Cabin = Cabin;
window.Nameplate = Nameplate;

