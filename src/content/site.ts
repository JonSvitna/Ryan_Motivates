/** Site copy — aligned to luxury chauffeur flyer + Night Series operations. */
export const SITE = {
  brand: "Night Series",
  tagline: "Private BMW 750 chauffeur — Baltimore, BWI, DCA, IAD, and Washington.",
  phoneDisplay: "667 · 207 · 1472",
  phoneTel: "+16672071472",
  driver: "Ryan J.",
  vehicle: "BMW 750",
  exterior: "Pearl white",
  interior: "Oxblood leather",
  city: "Baltimore, MD",
  coverage: ["Baltimore metro", "Annapolis", "Columbia", "BWI · DCA · IAD", "Washington, D.C."],
  flyer: {
    luxuryWord: "LUXURY",
    serviceLine: "CHAUFFEUR SERVICE",
    tagA: "Arrive in style. Every time.",
    tagB: "White BMW 750 · Power. Prestige. Performance.",
    pillars: [
      { title: "Professional chauffeurs", icon: "shield" as const },
      { title: "On time, every time", icon: "clock" as const },
      { title: "Private and discreet", icon: "lock" as const },
      { title: "Luxury you can feel", icon: "star" as const },
    ],
    occasions: [
      { label: "Weddings", icon: "heart" as const },
      { label: "Proms and formal events", icon: "grad" as const },
      { label: "Airport transfers", icon: "plane" as const },
      { label: "Business travel", icon: "case" as const },
      { label: "Special occasions", icon: "spark" as const },
      { label: "Photo shoots", icon: "cam" as const },
      { label: "Night outs and more", icon: "moon" as const },
    ],
    luxuryTitle: "The luxury experience",
    luxuryBullets: [
      "Oxblood leather interior",
      "Ambient cabin lighting",
      "Heated, ventilated and massaging seats",
      "Smooth, quiet, powerful ride",
      "Complimentary water and phone chargers",
      "Personalized music and cabin mood",
      "Clean, private, chauffeur-grade space",
    ],
    interiors: [
      { src: "/assets/cabin-rear.png", alt: "Rear cabin — oxblood leather seating" },
      { src: "/assets/cabin-dash.png", alt: "Cockpit — BMW dash and ambient light" },
      { src: "/assets/cabin-rear.png", alt: "Cabin detail — stitching and trim" },
    ],
    driverLine: "Driven by professionalism.",
    driverQuote: "Your comfort. Your time. My priority.",
    footerStrip: "Reliable · Respectful · Professional",
  },
  hero: {
    kicker: "Private hire · Baltimore and the District",
    sub: "One sedan, one chauffeur, composed like a locked picture edit — call sheet clear, timing exact, cabin lit before you step in.",
  },
  fleet: [
    {
      title: "Flagship on the road",
      body: "Pearl white 750 with oxblood cabin — the same vehicle featured on the print piece.",
      image: "/assets/bmw-hero-v2.png",
      real: true,
    },
    {
      title: "Second vehicle (coming)",
      body: "Placeholder frame until photography matches the flagship grade.",
      image: "https://picsum.photos/seed/rsfleet2/960/640",
      real: false,
    },
  ],
  services: [
    {
      title: "Airport transfers",
      copy: "BWI, DCA, IAD — curbside timing that respects what TSA does to your schedule.",
    },
    {
      title: "Weddings and anniversaries",
      copy: "First look through last guest: one driver, one car, one thread.",
    },
    {
      title: "Executive evenings",
      copy: "Harbor East to Capitol Hill and back — holds and releases on your signal.",
    },
    {
      title: "By the hour",
      copy: "Keep the sedan between venues; Ryan stays on comms, not on a surge model.",
    },
  ],
  testimonials: [
    {
      quote:
        "He was at the curb before I finished checking out. The cabin read neutral — which is what I wanted after a week of conference hotels.",
      name: "Margaret Voss",
      role: "Operations lead",
      org: "Regional health system",
    },
    {
      quote:
        "I stopped explaining our routing three times to three drivers. One number, one person, one car. That alone was worth the invoice.",
      name: "Darius Cole",
      role: "Founder",
      org: "Baltimore advisory practice",
    },
    {
      quote:
        "We used him for a client dinner and an 11 p.m. BWI pull. Same polish at both ends. My EA keeps the card in her desk, not her phone.",
      name: "Helena Whitford",
      role: "Chief of staff",
      org: "DC policy firm",
    },
  ],
  reserve: {
    occasions: ["Night out", "Wedding", "Anniversary", "Airport", "Business", "Prom", "Photo shoot", "Other"],
    tabs: [
      { id: "one-way" as const, label: "One way" },
      { id: "by-hour" as const, label: "By the hour" },
      { id: "event" as const, label: "Full evening" },
    ],
  },
};
