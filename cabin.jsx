// InteriorExperience — split editorial layout · red leather · no bullet lists
const InteriorExperience = () => {
  return (
    <section className="interior-exp" id="interior">
      <div className="interior-exp-inner">

        {/* Left — text */}
        <div data-reveal>
          <p className="interior-exp-eyebrow">The Cabin</p>
          <h2 className="interior-exp-hl">
            INSIDE,<br />
            EVERYTHING<br />
            SLOWS DOWN.
          </h2>
          <p className="interior-exp-copy">
            Red leather. Ambient lighting. Heated comfort. Private space.
            The kind of quiet that changes the night.
          </p>
          <a href="#book" className="btn-primary">Book Your Night</a>
        </div>

        {/* Right — image */}
        <div className="interior-exp-img" data-reveal data-delay="2">
          {/*
            Swap: /assets/cabin-rear-wide.png — red leather rear bench
            or /assets/cabin-seats.png for tighter seat detail crop
          */}
          <img
            src="/assets/cabin-rear.png"
            alt="BMW 750 red leather interior — rear cabin"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

window.InteriorExperience = InteriorExperience;
// Legacy aliases — keep these so app.jsx loads cleanly
window.Cabin = InteriorExperience;
window.CabinVideo = () => null;
