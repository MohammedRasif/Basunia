export interface AboutFeatureItem {
  id: string | number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const defaultFeatures: AboutFeatureItem[] = [
  {
    id: 1,
    title: "Certified Legal Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M12 2a1 1 0 011 1v1h4a1 1 0 011 1v1a3 3 0 01-2.83 2.996L15 14h1.5a1 1 0 010 2H13v3h2a1 1 0 010 2H9a1 1 0 010-2h2v-3H9.5a1 1 0 010-2H11V8.996A3 3 0 018.17 6V5a1 1 0 011-1h4V3a1 1 0 011-1zm-4 6a1 1 0 00.993.883L9 8.877V6H7v2.877a1 1 0 001 1.123z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Affordable Price",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "99% Clients Satisfaction",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
  },
];

interface AboutFeaturesSectionProps {
  features?: AboutFeatureItem[];
}

export default function AboutFeaturesSection({
  features = defaultFeatures,
}: AboutFeaturesSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-16 sm:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-[#F9F9F9] border border-slate-100 p-6 sm:p-8 rounded-xl hover:shadow-lg transition-all space-y-3"
          >
            <div className="w-12 h-12 rounded-full bg-[#8E1831]/10 flex items-center justify-center text-[#8E1831] mb-4">
              {feature.icon}
            </div>
            <h3 className="arimo font-bold text-slate-900 text-lg sm:text-xl">
              {feature.title}
            </h3>
            <p className="arimo text-xs sm:text-sm text-slate-500 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
