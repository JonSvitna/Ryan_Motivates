// Driver — intimate portrait + quote
const Driver = () => {
  return (
    <section className="driver" id="driver" data-screen-label="06 Driver">
      <div className="driver-grid">
        <div className="driver-portrait">
          <div className="image-shell image-shell--portrait">
            <image-slot
              id="driver-ryan-v2"
              src="/assets/ryan-portrait.png"
              placeholder="Ryan portrait"
              shape="rect"
            ></image-slot>
          </div>
          <span className="frame" />
        </div>
        <div className="driver-quote">
          <div className="chapter-mark">
            <span className="rune">iv</span>
            Chapter Four — The Driver
          </div>
          <span className="mark">"</span>
          <p className="driver-quote-text">
            Your comfort. Your time. <em>My priority.</em>
          </p>
          <div className="driver-sig">
            <span className="line" />
            <span className="name">
              Driven By Professionalism
              <em>— Ryan J., Chauffeur</em>
            </span>
          </div>
          <div className="driver-stats">
            <div className="driver-stat">
              <span className="n">10+</span>
              <span className="l">Years Driving</span>
            </div>
            <div className="driver-stat">
              <span className="n">5★</span>
              <span className="l">Average Rating</span>
            </div>
            <div className="driver-stat">
              <span className="n">2k+</span>
              <span className="l">Evenings</span>
            </div>
            <div className="driver-stat">
              <span className="n">100%</span>
              <span className="l">On Time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.Driver = Driver;
