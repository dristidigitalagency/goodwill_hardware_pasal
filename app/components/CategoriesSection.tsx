export default function CategoriesSection() {
  const categories = [
    {
      id: "cat-taps",
      title: "Branded Taps",
      description:
        "Premium single & double lever taps, pillar cocks, wall mixers, and sensor faucets from top brands.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: "from-blue-500 to-blue-700",
      bg: "bg-blue-50",
      border: "border-blue-100",
      text: "text-blue-700",
      count: "50+ Products",
    },
    {
      id: "cat-basins",
      title: "Water Basins",
      description:
        "Wall-hung, counter-top, under-mount and pedestal wash basins in vitreous china and ceramic.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      ),
      color: "from-sky-500 to-sky-700",
      bg: "bg-sky-50",
      border: "border-sky-100",
      text: "text-sky-700",
      count: "30+ Products",
    },
    {
      id: "cat-seats",
      title: "Toilet Seats",
      description:
        "Soft-close, quick-release, antibacterial, and smart toilet seats that fit most standard toilet pans.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-indigo-500 to-indigo-700",
      bg: "bg-indigo-50",
      border: "border-indigo-100",
      text: "text-indigo-700",
      count: "20+ Products",
    },
    {
      id: "cat-accessories",
      title: "Bathroom Accessories",
      description:
        "Towel rails, soap dispensers, shower heads, flush valves, and complete bathroom fitting solutions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      color: "from-violet-500 to-violet-700",
      bg: "bg-violet-50",
      border: "border-violet-100",
      text: "text-violet-700",
      count: "100+ Products",
    },
  ];

  return (
    <section id="categories" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Product Categories
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 font-poppins mb-4">
            Everything You Need for{" "}
            <span className="section-title-gradient">Your Bathroom</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            From premium taps to elegant basins — we stock it all. All top brands, best quality.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <a
              key={cat.id}
              id={cat.id}
              href="#products"
              className={`group flex flex-col items-center text-center p-6 rounded-2xl border ${cat.bg} ${cat.border} card-hover cursor-pointer`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.color} text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {cat.icon}
              </div>
              <h3 className={`text-lg font-bold ${cat.text} mb-2 font-poppins`}>
                {cat.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {cat.description}
              </p>
              <span className={`text-xs font-bold ${cat.text} bg-white border ${cat.border} px-3 py-1 rounded-full`}>
                {cat.count}
              </span>
            </a>
          ))}
        </div>

        {/* Brand logos strip */}
        <div className="mt-16 pt-10 border-t border-slate-100">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">
            Top Brands We Carry
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {["Jaquar", "Kohler", "Cera", "Roca", "Hindware", "Parryware", "American Standard", "TOTO"].map(
              (brand) => (
                <span
                  key={brand}
                  className="text-slate-400 font-bold text-sm md:text-base hover:text-blue-600 transition-colors cursor-default"
                >
                  {brand}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
