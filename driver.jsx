// Driver — intimate portrait + quote
const Driver = () => {
  return (
    <section className="driver" id="driver" data-screen-label="06 Driver">
      <div className="driver-grid" data-reveal>
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
              Driven by professionalism
              <em>— Ryan J., Chauffeur</em>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

window.Driver = Driver;
