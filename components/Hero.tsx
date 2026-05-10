"use client";

import ExportedImage from "next-image-export-optimizer";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9779800000000";

export default function Hero() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello GoodWill Hardware Pasal! I'm interested in your products. Please help me find what I need."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section
      id="home"
      className="hero-gradient relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-64 h-64 md:w-96 md:h-96 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-blue-300/5 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fadeInUp">
            <div className="inline-flex items-center gap-2 shimmer-badge text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 shadow-lg">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Premium Bathroom & Hardware Products
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 font-poppins">
              Premium{" "}
              <span className="text-sky-400">Hardware</span>{" "}
              <br className="hidden sm:block" />
              For Modern Living
            </h1>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Your one-stop destination for high-suction Neo Kitchen Chimneys, advanced RO Water Purifiers, elegant Sanitary Ware, and industrial Machinery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#categories"
                className="bg-white text-blue-900 font-bold text-sm px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-center"
              >
                Explore Categories
              </a>
              <button
                id="hero-whatsapp-cta"
                onClick={handleWhatsApp}
                className="whatsapp-btn flex items-center justify-center gap-2 text-white font-bold text-sm px-8 py-4 rounded-full shadow-xl"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Ask for Price
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start">
              {[
                { value: "25+", label: "Years Experience" },
                { value: "1000+", label: "Product Models" },
                { value: "Nepal", label: "Wide Delivery" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-extrabold text-sky-400 font-poppins">
                    {stat.value}
                  </p>
                  <p className="text-slate-400 text-xs font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image Grid */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4 animate-float">
              <div className="space-y-4">
                <div className="relative h-56 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <ExportedImage
                    src="/images/products/chimneys/maxima_chimney_right_side.jpg"
                    alt="Premium Neo Chimney"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
                    Neo Chimneys
                  </span>
                </div>
                <div className="relative h-40 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <ExportedImage
                    src="/images/products/water-purifiers/Smar-RO.png"
                    alt="Modern RO Purifiers"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
                    Smart RO Systems
                  </span>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative h-40 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <ExportedImage
                    src="/images/products/tap1.jpg"
                    alt="Premium Sanitary Ware"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
                    Sanitary Ware
                  </span>
                </div>
                <div className="relative h-56 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <ExportedImage
                    src="/images/products/chimneys/superio_chimney.png"
                    alt="Neo Superio"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
                    Kitchen Tech
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-5 py-3 shadow-2xl z-10">
              <p className="text-white text-xs font-semibold">✨ 25+ Years of Trust</p>
              <p className="text-sky-300 text-[10px]">Opposite Mercure Hotel</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 27.5C840 35 960 40 1080 37.5C1200 35 1320 25 1380 20L1440 15V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
