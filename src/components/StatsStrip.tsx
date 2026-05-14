import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SITE } from "../content/site";

export function StatsStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <section ref={ref} className="border-y border-ink/10 bg-paper py-20 text-ink md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 md:grid-cols-3 md:gap-8 md:px-8">
        {SITE.stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="border-l border-champagne/50 pl-6"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-champagne-dim">Signal</p>
            <p className="mt-3 text-5xl font-semibold tracking-tight md:text-6xl">{s.value}</p>
            <p className="mt-4 max-w-[28ch] text-sm leading-relaxed text-slate-600">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
