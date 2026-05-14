import { motion, useReducedMotion } from "framer-motion";
import { SkylineSilhouette } from "./SkylineSilhouette";
import { SITE } from "../content/site";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

export function HeroCinematic() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-void">
      {/* Night wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_70%_10%,rgba(201,169,98,0.08),transparent_55%),radial-gradient(ellipse_80%_50%_at_20%_80%,rgba(40,70,110,0.18),transparent_60%),linear-gradient(180deg,#020308_0%,#0a0d14_45%,#0c1018_100%)]" />

      {/* City bokeh */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-paper/30 blur-sm"
            style={{
              width: 4 + (i % 5) * 3,
              height: 4 + (i % 5) * 3,
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 55}%`,
            }}
            animate={
              reduce
                ? {}
                : { opacity: [0.15, 0.55, 0.2], scale: [1, 1.25, 1] }
            }
            transition={{
              duration: 5 + (i % 4),
              repeat: Infinity,
              ease: [0.45, 0, 0.55, 1],
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Animated water plane */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[46vh] overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage: `
              linear-gradient(100deg, transparent 0%, rgba(120,170,200,0.12) 35%, rgba(220,235,245,0.08) 50%, transparent 70%),
              repeating-linear-gradient(-8deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 14px)
            `,
            backgroundSize: "220% 100%, 100% 100%",
          }}
          animate={reduce ? {} : { backgroundPosition: ["0% 60%", "100% 40%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -left-[15%] right-[-15%] bottom-[-18%] h-[52%] rounded-[100%] bg-gradient-to-t from-cyan-950/35 via-slate-900/10 to-transparent blur-3xl"
          animate={reduce ? {} : { x: [0, 36, -24, 0], opacity: [0.45, 0.65, 0.5, 0.55] }}
          transition={{ duration: 16, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
        />
        <motion.div
          className="absolute inset-x-[-20%] bottom-[-8%] h-[38%] bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"
          animate={reduce ? {} : { translateY: [0, -6, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
        />
      </div>

      {/* Skyline */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[38vh] text-paper/25 md:bottom-[40vh]">
        <SkylineSilhouette className="h-auto w-full min-w-[960px]" />
      </div>

      {/* BMW — real asset */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      >
        <div className="relative w-[min(1180px,112vw)] translate-y-[6%] md:translate-y-[4%]">
          <div className="absolute inset-0 -z-10 scale-95 bg-gradient-to-t from-black/55 via-transparent to-transparent blur-2xl" />
          <img
            src="/assets/bmw-hero-v2.png"
            alt={`${SITE.vehicle} ${SITE.exterior} — chauffeur vehicle`}
            className="mx-auto w-full object-contain object-bottom drop-shadow-[0_40px_80px_rgba(0,0,0,0.55)]"
            loading="eager"
            decoding="async"
          />
        </div>
      </motion.div>

      {/* Copy — asymmetric left stack (variance) */}
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1400px] flex-col px-4 pb-28 pt-32 md:px-8 md:pb-36 md:pt-36">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl md:max-w-2xl"
        >
          <motion.p
            variants={item}
            className="mb-5 font-mono text-[10px] uppercase tracking-[0.42em] text-champagne/90"
          >
            {SITE.hero.kicker}
          </motion.p>
          <motion.h1
            variants={item}
            className="text-[clamp(2.4rem,6.4vw,4.75rem)] font-semibold leading-[0.95] tracking-tight text-paper"
          >
            {SITE.hero.title}{" "}
            <span className="text-champagne">{SITE.hero.titleAccent}</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-7 max-w-[52ch] text-base leading-relaxed text-mist md:text-lg"
          >
            {SITE.hero.sub}
          </motion.p>
          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#reserve"
              className="inline-flex items-center gap-2 rounded-full bg-champagne px-6 py-3 text-sm font-semibold text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] transition-transform active:scale-[0.98] hover:brightness-110"
            >
              Check availability
              <span aria-hidden className="font-mono text-xs">
                →
              </span>
            </a>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist hover:text-paper"
            >
              {SITE.phoneDisplay}
            </a>
          </motion.div>
        </motion.div>

        <div className="mt-auto hidden pt-24 md:block">
          <p className="max-w-md font-mono text-[10px] uppercase leading-relaxed tracking-[0.32em] text-mist/80">
            Cinematic grade night exterior · water plate in motion · skyline read like a matte painting
          </p>
        </div>
      </div>
    </section>
  );
}
