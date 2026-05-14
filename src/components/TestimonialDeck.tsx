import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SITE } from "../content/site";

export function TestimonialDeck() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section id="proof" ref={ref} className="bg-void py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.36em] text-champagne">Proof, not adjectives</p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-paper md:text-4xl">
              The kind of notes an EA forwards without editing.
            </h2>
          </div>
          <p className="max-w-sm font-mono text-[10px] uppercase leading-relaxed tracking-[0.26em] text-mist">
            Executive transport pages often read like insurance binders. Here, the brief is shorter: one driver, one car, receipts your office can file without
            translation.
          </p>
        </motion.div>

        <div className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:gap-6">
          {SITE.testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
              className="min-w-[min(420px,82vw)] snap-start rounded-[2rem] border border-white/10 bg-slate-ink/80 p-8 shadow-diffuse md:min-w-[380px]"
            >
              <blockquote className="text-lg leading-relaxed text-paper/95 md:text-xl">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm font-semibold text-champagne">{t.name}</p>
                <p className="mt-1 text-xs text-mist">
                  {t.role} · {t.org}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
