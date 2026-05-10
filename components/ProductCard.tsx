"use client";

import ExportedImage from "next-image-export-optimizer";
import { useState } from "react";

import Link from "next/link";
import { Product } from "../data/types";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9779800000000";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Build absolute URL for the product image to share
    const origin =
      typeof window !== "undefined" ? window.location.origin : "https://goodwillhardware.com";
    const imageUrl = `${origin}${product.image}`;

    const message = encodeURIComponent(
      `Hello GoodWill Hardware Pasal! 🙏\n\nI'm interested in the following product:\n\n` +
      `📦 *${product.name}*\n` +
      `🏷️ Brand: ${product.brand}\n` +
      `📂 Category: ${product.category}\n\n` +
      `Product Image: ${imageUrl}\n\n` +
      `Could you please share the price and availability? Thank you!`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <Link href={`/products/${product.slug}`}>
      <article
        className="card-hover bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 flex flex-col group h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-50">
          <ExportedImage
            src={product.image}
            alt={product.name}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"
              }`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Overlay on hover */}
          <div
            className={`absolute inset-0 bg-blue-900/20 transition-opacity duration-300 flex items-center justify-center ${isHovered ? "opacity-100" : "opacity-0"
              }`}
          >
            <span className="text-white text-sm font-semibold bg-blue-600/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/30 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              View Details
            </span>
          </div>

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3 z-10">
              <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg uppercase tracking-wider">
                {product.badge}
              </span>
            </div>
          )}

          {/* Brand tag */}
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-white/90 backdrop-blur-sm text-blue-900 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm border border-slate-100">
              {product.brand}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div className="mb-2">
            <span className="text-[10px] font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-2 py-0.5 rounded">
              {product.category}
            </span>
          </div>
          <h3 className="text-base font-bold text-slate-800 mb-2 leading-tight font-poppins group-hover:text-blue-700 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1 line-clamp-2">
            {product.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {product.features.slice(0, 2).map((f) => (
              <span
                key={f}
                className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded font-semibold uppercase tracking-tighter"
              >
                {f}
              </span>
            ))}
            {product.features.length > 2 && (
              <span className="text-[10px] text-slate-400 font-medium self-center">
                +{product.features.length - 2} more
              </span>
            )}
          </div>

          {/* Price hidden - WhatsApp CTA */}
          <div className="mt-auto">
            <div className="flex items-center gap-2 mb-3 p-2 bg-slate-50 rounded-lg border border-slate-100">
              <LockIcon className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-tight">
                Enquire for price
              </p>
            </div>

            <button
              id={`whatsapp-${product.id}`}
              onClick={handleWhatsApp}
              className="whatsapp-btn w-full flex items-center justify-center gap-2 text-white text-xs font-bold py-3 px-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}
