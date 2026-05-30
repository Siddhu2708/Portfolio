export default function Certifications({ items }) {
  return (
    <section id="certifications" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 sm:mb-16 text-center font-heading">Certifications & Workshops</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {items.map((c, i) => (
            <div key={c._id || c.title} className="glass-card rounded-3xl overflow-hidden group hover:border-sky-400/30 transition-all" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="aspect-video relative overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-sky-400 text-xs font-bold uppercase tracking-wider mb-1">{c.category}</p>
                  <h4 className="font-bold text-white">{c.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
