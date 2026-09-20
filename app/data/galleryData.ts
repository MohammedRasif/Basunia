export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  src: string;
  description: string;
  tag?: string;
  year?: string;
}

export const galleryCategories = [
  { name: "All", slug: "all" },
  { name: "Chamber & Practice", slug: "chamber-practice" },
  { name: "Court & Strategy", slug: "court-strategy" },
  { name: "Events & Seminars", slug: "events-seminars" },
  { name: "Consultations & Clients", slug: "consultations" },
  { name: "Library & Research", slug: "library-research" },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g-1",
    title: "Legal Consultation & Document Review",
    category: "Consultations & Clients",
    categorySlug: "consultations",
    src: "/assets/images/gallery/gallery-img-1.webp",
    description: "In-depth case evaluation and client consultation session in our executive conference room.",
    tag: "Client Advisory",
    year: "2026",
  },
  {
    id: "g-2",
    title: "Judicial Strategy & Case Dossier Analysis",
    category: "Court & Strategy",
    categorySlug: "court-strategy",
    src: "/assets/images/gallery/gallery-img-2.webp",
    description: "Senior advocates strategizing litigation arguments and cross-referencing precedent records.",
    tag: "Supreme Court Dossier",
    year: "2026",
  },
  {
    id: "g-3",
    title: "Commercial Settlement & Agreement Review",
    category: "Chamber & Practice",
    categorySlug: "chamber-practice",
    src: "/assets/images/gallery/gallery-img-3.webp",
    description: "Corporate law associates reviewing structured settlement terms and commercial contracts.",
    tag: "Corporate Law",
    year: "2026",
  },
  {
    id: "g-4",
    title: "Comprehensive Legal Reference Library",
    category: "Library & Research",
    categorySlug: "library-research",
    src: "/assets/images/gallery/gallery-img-4.webp",
    description: "Our historic legal reference library housing over 5,000 law reports and statutory compendiums.",
    tag: "Chamber Library",
    year: "2025",
  },
  {
    id: "g-5",
    title: "Chambers Strategy & Evidence Analysis",
    category: "Court & Strategy",
    categorySlug: "court-strategy",
    src: "/assets/images/gallery/gallery-img-5.webp",
    description: "Collaborative litigation workshop examining judicial evidence and procedural timelines.",
    tag: "Litigation Workshop",
    year: "2026",
  },
  {
    id: "g-6",
    title: "Professional Representation & Judicial Ethics",
    category: "Chamber & Practice",
    categorySlug: "chamber-practice",
    src: "/assets/images/gallery/gallery-img-6.webp",
    description: "Upholding judicial integrity, professional standards, and uncompromised client advocacy.",
    tag: "Legal Advocacy",
    year: "2025",
  },
  {
    id: "g-7",
    title: "Supreme Court Practice & Chamber Conference",
    category: "Chamber & Practice",
    categorySlug: "chamber-practice",
    src: "/assets/images/gallery/gallery-img-7.webp",
    description: "Partners and associates convening for a high-level briefing on upcoming appellate hearings.",
    tag: "Partner Briefing",
    year: "2026",
  },
  {
    id: "g-8",
    title: "International Legal Seminar & Keynote Address",
    category: "Events & Seminars",
    categorySlug: "events-seminars",
    src: "/assets/images/gallery/gallery-img-8.webp",
    description: "Keynote presentation on arbitration frameworks and contemporary dispute resolution.",
    tag: "International Seminar",
    year: "2025",
  },
  {
    id: "g-9",
    title: "High-Value Agreement Execution & Signing",
    category: "Consultations & Clients",
    categorySlug: "consultations",
    src: "/assets/images/gallery/gallery-img-9.webp",
    description: "Formal execution and closing ceremony for multinational commercial transactions.",
    tag: "Contract Signing",
    year: "2026",
  },
  {
    id: "g-10",
    title: "Corporate Legal Advisory & Boardroom Meeting",
    category: "Events & Seminars",
    categorySlug: "events-seminars",
    src: "/assets/images/expertise-banner-meeting.webp",
    description: "Advising enterprise stakeholders on regulatory compliance and mergers & acquisitions.",
    tag: "Boardroom Advisory",
    year: "2025",
  },
  {
    id: "g-11",
    title: "Appellate Team Discussion & Brief Preparation",
    category: "Court & Strategy",
    categorySlug: "court-strategy",
    src: "/assets/images/story-team.webp",
    description: "Legal researchers and junior barristers drafting appellate memorandums and legal briefs.",
    tag: "Brief Preparation",
    year: "2026",
  },
  {
    id: "g-12",
    title: "Chambers Leadership & Legal Counsel",
    category: "Chamber & Practice",
    categorySlug: "chamber-practice",
    src: "/assets/images/whoweare.webp",
    description: "Senior leadership mentoring advocates and setting strategic direction for firm practice.",
    tag: "Chambers Leadership",
    year: "2025",
  },
];
