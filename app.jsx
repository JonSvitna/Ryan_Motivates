// Main App — Night Series
const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "champagne",
  "ambientGlow": "cognac",
  "ribbon": true
}/*EDITMODE-END*/;

const ACCENT_PALETTES = {
  ice: {
    rose: '#A8B4C4',
    bright: '#D8E0EB',
    deep: '#5A6575',
  },
  rose: {
    rose: '#C8A18A',
    bright: '#E8C9B0',
    deep: '#8C6E5A',
  },
  champagne: {
    rose: '#D4B98E',
    bright: '#EBD9B0',
    deep: '#9C8455',
  },
  platinum: {
    rose: '#C9C5BD',
    bright: '#E6E2D9',
    deep: '#8A8680',
  },
  copper: {
    rose: '#B88562',
    bright: '#D9A984',
    deep: '#7C5638',
  },
};

const GLOWS = {
  mercury: { a: 'rgba(148, 168, 188, 0.24)', b: 'rgba(255, 255, 255, 0.05)' },
  amethyst: { a: 'rgba(154,110,158,0.28)', b: 'rgba(200,161,138,0.10)' },
  oxblood:  { a: 'rgba(120,30,45,0.30)',   b: 'rgba(200,161,138,0.10)' },
  cognac:   { a: 'rgba(160,100,60,0.25)',  b: 'rgba(200,161,138,0.10)' },
  obsidian: { a: 'rgba(50,50,60,0.30)',    b: 'rgba(180,180,180,0.06)' },
};

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const go = (id) => () => document.getElementById(id).scrollIntoView({behavior:'smooth'});

  return (
    <nav className={"nav " + (scrolled ? 'scrolled' : '')}>
      <div className="nav-mark" onClick={go('hero')}>
        <span className="nav-mono">RJ</span>
        <span className="nav-name">
          Night Series
          <em>Luxury Chauffeur</em>
        </span>
      </div>
      <div className="nav-links">
        <button className="nav-link" onClick={go('occasions')}>Occasions</button>
        <button className="nav-link" onClick={go('cabin')}>The Cabin</button>
        <button className="nav-link" onClick={go('driver')}>The Driver</button>
        <button className="nav-link" onClick={go('cta')}>Contact</button>
      </div>
      <button className="nav-cta" onClick={go('reserve')}>
        <span>Reserve</span>
      </button>
    </nav>
  );
};

const MobileCTA = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener('scroll', onScroll, {passive:true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={"mobile-cta-bar " + (visible ? 'visible' : '')}>
      <a className="mobile-cta-call" href="tel:6672071472">Call Ryan</a>
      <button
        className="mobile-cta-reserve"
        onClick={() => document.getElementById('reserve').scrollIntoView({behavior:'smooth'})}
      >
        Reserve
      </button>
    </div>
  );
};

const App = () => {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Scroll reveal — cinematic entrance system
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('is-visible');
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Apply accent palette
  useEffect(() => {
    const p = ACCENT_PALETTES[t.accent] || ACCENT_PALETTES.ice;
    const root = document.documentElement;
    root.style.setProperty('--rose', p.rose);
    root.style.setProperty('--rose-bright', p.bright);
    root.style.setProperty('--rose-deep', p.deep);
    const h = p.rose.replace('#','');
    const r = parseInt(h.slice(0,2),16);
    const g = parseInt(h.slice(2,4),16);
    const b = parseInt(h.slice(4,6),16);
    root.style.setProperty('--line', `rgba(${r},${g},${b},0.14)`);
    root.style.setProperty('--line-strong', `rgba(${r},${g},${b},0.28)`);
  }, [t.accent]);

  // Apply ambient glow
  useEffect(() => {
    const g = GLOWS[t.ambientGlow] || GLOWS.mercury;
    const sheet = document.getElementById('__tweak-ambient') ||
      (() => { const s=document.createElement('style'); s.id='__tweak-ambient'; document.head.appendChild(s); return s; })();
    sheet.textContent = `
      .moment::before {
        background:
          radial-gradient(ellipse 80% 60% at 50% 50%, ${g.a}, transparent 70%),
          radial-gradient(ellipse 60% 40% at 30% 80%, ${g.b}, transparent 70%) !important;
      }
      .driver::before {
        background:
          radial-gradient(ellipse 60% 60% at 80% 50%, ${g.a}, transparent 70%),
          radial-gradient(ellipse 60% 60% at 20% 50%, ${g.b}, transparent 70%) !important;
      }
      .reserve::before {
        background:
          radial-gradient(ellipse 60% 50% at 80% 30%, ${g.a}, transparent 70%),
          radial-gradient(ellipse 60% 50% at 20% 70%, ${g.b}, transparent 70%) !important;
      }
    `;
  }, [t.ambientGlow]);

  return (
    <>
      {t.ribbon && <div className="ribbon" />}
      <Nav />
      <Hero />
      <Showcase />
      <Arrival />
      <Occasions />
      <Nameplate />
      <Moment />
      <Cabin />
      <Experience />
      <Trust />
      <Driver />
      <Reserve />
      <CTAFooter />
      <MobileCTA />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Accent">
          <TweakRadio
            label="Palette"
            value={t.accent}
            options={[
              {value:'champagne', label:'Champagne'},
              {value:'ice', label:'Black Ice'},
              {value:'rose', label:'Rose'},
              {value:'platinum', label:'Platinum'},
              {value:'copper', label:'Copper'},
            ]}
            onChange={v => setTweak('accent', v)}
          />
        </TweakSection>
        <TweakSection label="Ambient">
          <TweakRadio
            label="Glow"
            value={t.ambientGlow}
            options={[
              {value:'cognac',   label:'Cognac'},
              {value:'mercury', label:'Mercury'},
              {value:'amethyst', label:'Amethyst'},
              {value:'oxblood',  label:'Oxblood'},
              {value:'obsidian', label:'Obsidian'},
            ]}
            onChange={v => setTweak('ambientGlow', v)}
          />
          <TweakToggle
            label="Top light ribbon"
            value={t.ribbon}
            onChange={v => setTweak('ribbon', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
