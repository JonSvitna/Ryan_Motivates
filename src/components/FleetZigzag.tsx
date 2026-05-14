import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SITE } from "../content/site";

export function FleetZigzag() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="fleet" ref={ref} className="bg-slate-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.38em] text-champagne">Fleet board</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-paper md:text-5xl">
            One frame locked. Room for the roster to grow.
          </h2>
          <p className="mt-5 max-w-[60ch] text-mist">
            The white BMW is live on the road today. Additional vehicles stay as placeholders until photography matches the same grade.
          </p>
        </motion.div>

        <div className="mt-16 flex flex-col gap-20 md:gap-28">
          {SITE.fleet.map((row, i) => (
            <motion.article
              key={row.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div
                className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-void/60 shadow-diffuse ${
                  row.real ? "p-2" : "p-1"
                }`}
              >
                <div className="rounded-[1.65rem] ring-1 ring-inset ring-white/10">
                  <img
                    src={row.image}
                    alt={row.real ? `${SITE.vehicle} chauffeur vehicle` : "Fleet placeholder — photography pending"}
                    className={`aspect-[16/11] w-full object-cover ${row.real ? "" : "grayscale contrast-[0.92]"}`}
                    loading="lazy"
                  />
                </div>
                {!row.real && (
                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-ink/70 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-paper/80 backdrop-blur-md">
                    Placeholder
                  </span>
                )}
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-paper md:text-3xl">{row.title}</h3>
                <p className="mt-4 max-w-[52ch] text-mist">{row.body}</p>
                {row.real && (
                  <dl className="mt-8 grid gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <dt>Exterior</dt>
                      <dd className="text-paper/90">{SITE.exterior}</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <dt>Cabin</dt>
                      <dd className="text-paper/90">{SITE.interior}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Chauffeur</dt>
                      <dd className="text-paper/90">{SITE.driver}</dd>
                    </div>
                  </dl>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
