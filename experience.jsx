// Experience — minimal feature list, type-driven
const Experience = () => {
  const rows = [
    {ix:'I.',   lbl:'Hand-stitched ', em:'oxblood leather.', d:'Italian hide, drawn by hand. You feel it before you see it.'},
    {ix:'II.',  lbl:'Ambient ', em:'cabin lighting.',       d:'Twelve presets. Choose the room before you enter it.'},
    {ix:'III.', lbl:'Heated, ventilated, ', em:'massaging seats.', d:'Five intensities, three programs. Your back forgets the day.'},
    {ix:'IV.',  lbl:'A near-', em:'silent ride.',           d:'Acoustic glass. Sealed doors. A powerplant tuned to whisper.'},
    {ix:'V.',   lbl:'Complimentary ', em:'water & charge.',  d:'Cold bottled water. Wireless and wired. Both colors of cable.'},
    {ix:'VI.',  lbl:'Personalized ', em:'music & vibe.',     d:'Your playlist before you ask. Your scent on request.'},
    {ix:'VII.', lbl:'Spotless, private,', em:' yours alone.', d:'Sanitized before every ride. The cabin belongs to you.'},
  ];
  return (
    <section className="experience" id="experience" data-screen-label="05 Experience">
      <div className="experience-grid">
        <div className="experience-head">
          <div className="chapter-mark">
            <span className="rune">iii</span>
            Chapter Three — The Detail
          </div>
          <h2 className="display">
            The luxury <em>you can feel.</em>
          </h2>
        </div>
        <div className="experience-list">
          {rows.map((r, i) => (
            <div className="exp-row" key={i}>
              <span className="ix">{r.ix}</span>
              <span className="lbl">{r.lbl}<em>{r.em}</em></span>
              <span className="det">{r.d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Experience = Experience;
