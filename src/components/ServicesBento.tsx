import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SITE } from "../content/site";

export function ServicesBento() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="services" ref={ref} className="bg-paper py-24 text-ink md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.36em] text-champagne-dim">How the night is run</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Routes that stay on one call sheet.</h2>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6">
          {SITE.services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.06 * i, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.35)] md:p-9"
            >
              <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-slate-600">{s.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
