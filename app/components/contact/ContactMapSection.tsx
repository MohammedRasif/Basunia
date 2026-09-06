interface ContactMapSectionProps {
  locationName?: string;
  address?: string;
  ratingText?: string;
}

export default function ContactMapSection({
  locationName = "Basunia & Associate",
  address = "Gulshan 1, Dhaka, Bangladesh",
  ratingText = "★ 4.9 (112 reviews)",
}: ContactMapSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-16 sm:pb-24">
      <div className="relative w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
        {/* OpenStreetMap embed — Gulshan 1, Dhaka (23.7809°N, 90.4125°E), zoom 16 */}
        <iframe
          title={`${locationName} Location — ${address}`}
          src="https://www.openstreetmap.org/export/embed.html?bbox=90.3975%2C23.7709%2C90.4275%2C23.7909&layer=mapnik&marker=23.7809%2C90.4125"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="w-full h-full"
        />

        {/* Map Location Overlay Badge */}
        <div className="absolute top-4 left-4 bg-white p-4 rounded-xl shadow-lg border border-slate-100 max-w-xs hidden sm:block">
          <h4 className="marcellus text-sm font-bold text-slate-900">
            {locationName}
          </h4>
          <p className="arimo text-xs text-slate-500 mt-0.5">
            {address}
          </p>
          <div className="mt-2 flex items-center gap-1 text-[11px] text-[#8E1831] font-semibold">
            <span>{ratingText}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
