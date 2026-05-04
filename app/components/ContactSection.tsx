const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9779800000000";

export default function ContactSection() {
  const contactItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      label: "WhatsApp",
      value: "+977 98-XXXXXXXX",
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20GoodWill%20Hardware%20Pasal!`,
      color: "bg-green-500",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: "New Colony, Sukedhara, Kathmandu, Nepal",
      href: "https://maps.app.goo.gl/sNNvKXw7JjCpPs3C8",
      color: "bg-blue-500",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Business Hours",
      value: "Sun–Fri: 9AM – 7PM",
      href: null,
      color: "bg-amber-500",
    },
  ];

  const whatsappTopics = [
    { text: "Tap Price Inquiry", emoji: "🚿" },
    { text: "Basin Availability", emoji: "🪣" },
    { text: "Toilet Seat Options", emoji: "🚽" },
    { text: "Bulk Order Discount", emoji: "📦" },
    { text: "Installation Guide", emoji: "🔧" },
    { text: "Warranty Query", emoji: "✅" },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 font-poppins mb-4">
            We&apos;re Just a{" "}
            <span className="section-title-gradient">WhatsApp Away</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Have questions? Want to know prices? Chat with us on WhatsApp — our team is ready to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact Cards */}
          <div className="space-y-4">
            {contactItems.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group"
                >
                  <div className={`${item.color} text-white p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-slate-800 font-bold text-sm md:text-base">{item.value}</p>
                  </div>
                  <svg className="ml-auto w-5 h-5 text-slate-300 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ) : (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm"
                >
                  <div className={`${item.color} text-white p-3 rounded-xl`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-slate-800 font-bold text-sm md:text-base">{item.value}</p>
                  </div>
                </div>
              )
            )}

            {/* Map embed placeholder */}
            <div className="h-48 bg-gradient-to-br from-blue-50 to-slate-100 rounded-2xl border border-slate-200 flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.659694003159!2d85.34349251146352!3d27.727791576071454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1967b8e4762d%3A0xb93a41c659171320!2sGoodwill%20Hardware!5e0!3m2!1sen!2snp!4v1777882313011!5m2!1sen!2snp" width="600" height="450" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>

          {/* WhatsApp quick topics */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            {/* Header */}
            <div className="hero-gradient p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-base">GoodWill Hardware Pasal</p>
                  <p className="text-green-300 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Online — Typically replies in minutes
                  </p>
                </div>
              </div>
              <p className="text-slate-200 text-sm">
                👋 Hello! How can we help you today?
              </p>
            </div>

            {/* Quick topics */}
            <div className="p-6">
              <p className="text-slate-500 text-sm font-semibold mb-4">
                Quick Inquiry Topics:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {whatsappTopics.map((topic) => (
                  <a
                    key={topic.text}
                    id={`contact-${topic.text.toLowerCase().replace(/\s+/g, "-")}`}
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `Hello GoodWill Hardware Pasal! ${topic.emoji} I want to inquire about: ${topic.text}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 text-sm font-medium hover:bg-green-50 hover:border-green-300 hover:text-green-700 transition-all duration-200 group"
                  >
                    <span className="text-base">{topic.emoji}</span>
                    <span className="text-xs">{topic.text}</span>
                    <svg className="w-3 h-3 ml-auto text-slate-300 group-hover:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>

              <a
                id="contact-whatsapp-main"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20GoodWill%20Hardware%20Pasal!%20I%20need%20some%20help.`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn mt-5 w-full flex items-center justify-center gap-3 text-white font-bold py-4 rounded-xl shadow-lg text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Open WhatsApp Chat Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
