// Cabin — flyer spine: luxury experience + three cabin frames
const Cabin = () => {
  const [active, setActive] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const images = ref.current?.querySelectorAll('.cabin-img');
    if (!images) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setActive(parseInt(e.target.dataset.idx, 10));
        }
      });
    }, { rootMargin: '-28% 0% -28% 0%', threshold: 0 });
    images.forEach((img) => io.observe(img));
    return () => io.disconnect();
  }, []);

  const stages = [
    {
      e: 'Texture · I',
      t: '750 ',
      em: 'red leather interior.',
      d: 'Quilted hide and hand-finished seams — you feel the cabin before you read the spec sheet.',
    },
    {
      e: 'Light · II',
      t: 'Ambient cabin,',
      em: ' tuned to your night.',
      d: 'Dimmed presets so the space matches the dress code and the city outside.',
    },
    {
      e: 'Silence · III',
      t: 'A near',
      em: ' soundless ride.',
      d: 'Acoustic glass and sealed doors — the road stays outside unless you choose otherwise.',
    },
  ];

  return (
    <section className="cabin" id="cabin" data-screen-label="Cabin">
      <div className="cabin-head">
        <div>
          <div className="chapter-mark">
            <span className="rune">ii</span>
            The luxury experience
          </div>
          <h2 className="display">
            Step inside. <em>The world does not follow.</em>
          </h2>
        </div>
        <p className="lede">
          Checklist straight from the print piece — same vehicle, same cabin, same standard.
        </p>
      </div>

      <div className="cabin-stack" ref={ref}>
        <div className="cabin-text">
          <div className="stage">
            {stages.map((s, i) => (
              <div key={i} className={i === active ? 'active' : ''}>
                <div className="label" style={{ color: 'var(--rose)' }}>{s.e}</div>
                <h3>{s.t}<em>{s.em}</em></h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="cabin-images">
          <div className="cabin-img" data-idx="0">
            <image-slot id="cabin-rear-v2" src="/assets/cabin-rear.png" placeholder="Red leather rear cabin" shape="rect" />
            <span className="num">01 — Rear cabin</span>
            <span className="ttl">Red leather, quilted.</span>
          </div>
          <div className="cabin-img" data-idx="1">
            <image-slot id="cabin-dash-v2" src="/assets/cabin-dash.png" placeholder="BMW dashboard · ambient light" shape="rect" />
            <span className="num">02 — Cockpit</span>
            <span className="ttl">Control, refined.</span>
          </div>
          <div className="cabin-img" data-idx="2">
            <image-slot id="cabin-seat-v2" src="/assets/cabin-rear.png" placeholder="Cabin detail · trim" shape="rect" position="78% 42%" />
            <span className="num">03 — Detail</span>
            <span className="ttl">Stitching and trim.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

window.Cabin = Cabin;
