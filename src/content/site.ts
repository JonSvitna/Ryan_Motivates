/** Site copy and configuration (from prior Night Series build). */
export const SITE = {
  brand: "Night Series",
  tagline: "Private chauffeur. One sedan. Yours for the evening.",
  phoneDisplay: "667 · 207 · 1472",
  phoneTel: "+16672071472",
  driver: "Ryan J.",
  vehicle: "BMW 750",
  exterior: "Pearl white",
  interior: "Oxblood leather",
  city: "Baltimore, MD",
  coverage: ["Baltimore metro", "Annapolis", "Columbia", "BWI · DCA · IAD", "Washington, D.C."],
  hero: {
    kicker: "Private chauffeur · Baltimore and the District",
    title: "Ground that reads",
    titleAccent: "like a closing frame.",
    sub:
      "One chauffeur, one BMW 750, composed the way a shoot day is composed: quiet call sheet, exact timing, no crowd.",
  },
  stats: [
    { value: "10+", label: "Years behind the wheel for private clients" },
    { value: "1", label: "Vehicle — so the cabin always matches the brief" },
    { value: "<60m", label: "Typical confirmation window on new requests" },
  ],
  fleet: [
    {
      title: "Flagship — your frame",
      body: "Pearl white 750, oxblood cabin, ambient lighting dialed before you arrive.",
      image: "/assets/bmw-hero-v2.png",
      real: true,
    },
    {
      title: "Alternate sedan",
      body: "Placeholder — reserve this slot when a second vehicle is added to the roster.",
      image: "https://picsum.photos/seed/rsfleet2/960/640",
      real: false,
    },
    {
      title: "Evening SUV",
      body: "Placeholder — imagery for larger groups or luggage-heavy routes.",
      image: "https://picsum.photos/seed/rsfleet3/960/640",
      real: false,
    },
  ],
  services: [
    {
      title: "Airport runs",
      copy: "BWI, DCA, IAD — curbside timing that respects TSA lines you cannot control.",
    },
    {
      title: "Weddings and anniversaries",
      copy: "Door-to-door continuity: first look through last guest, same driver, same car.",
    },
    {
      title: "Executive evenings",
      copy: "Dinner in Harbor East, meetings downtown, late Capitol Hill — one thread the whole night.",
    },
    {
      title: "By the hour",
      copy: "Hold the sedan between venues; Ryan stays on comms, not on a timer app.",
    },
  ],
  testimonials: [
    {
      quote:
        "He was at the curb before I finished checking out. The cabin smelled like nothing — which is exactly what I wanted after a week of conference hotels.",
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
        "We used him for a client dinner and an 11 p.m. BWI pull. Same polish at both ends. My EA now keeps the card in her desk, not her phone.",
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
