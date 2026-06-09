import React, { useState, useEffect } from "react";
import { ArrowRight, ShieldCheck, Award, Ship, Star } from "lucide-react";

interface HeroSectionProps {
  onQuoteClick: () => void;
  onExploreClick: () => void;
}

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=2000", // Cargo liner on ocean
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000", // Container port terminal
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000", // Warehouse logistics
  "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=2000"  // Spices & agricultural sourcing
];

export default function HeroSection({ onQuoteClick, onExploreClick }: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative bg-primary-navy overflow-hidden pt-12 pb-20 md:py-28 lg:py-36 text-white border-b border-white/5">
      {/* Premium Hero Banner Background Image Asset */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentImageIndex ? "opacity-30" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt="Globexxa Global Trade"
              className="w-full h-full object-cover object-right md:object-center select-none pointer-events-none mix-blend-luminosity brightness-90"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
        {/* Subtle royal blue glow highlight overlay */}
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-primary-navy via-primary-navy/70 to-transparent"></div>
        <div className="absolute inset-y-0 left-0 w-full md:w-[70%] bg-gradient-to-r from-primary-navy via-primary-navy/85 to-transparent"></div>
      </div>

      {/* Background vector accents representing trade lanes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] pointer-events-none opacity-5 flex items-center justify-center select-none">
        <svg viewBox="0 0 1000 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          {/* Sourcing links radiating from India */}
          <path d="M500,300 Q200,100 100,150" fill="none" stroke="#2AA7E8" strokeWidth="2" strokeDasharray="5,5" />
          <path d="M500,300 Q800,100 900,120" fill="none" stroke="#2AA7E8" strokeWidth="2" strokeDasharray="5,5" />
          <path d="M500,300 Q400,500 200,550" fill="none" stroke="#2AA7E8" strokeWidth="2" strokeDasharray="5,5" />
          <path d="M500,300 Q700,500 850,450" fill="none" stroke="#2AA7E8" strokeWidth="2" strokeDasharray="5,5" />
          {/* Glowing central node */}
          <circle cx="500" cy="300" r="10" fill="#EF9F27" />
          <circle cx="500" cy="300" r="25" fill="none" stroke="#EF9F27" strokeWidth="1" className="animate-ping" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-10">
        {/* Centered Column Text */}
        <div className="max-w-4xl mx-auto space-y-8 text-center flex flex-col items-center">
          {/* Animated geo location badge */}
          <div className="inline-flex items-center gap-2 bg-royal-blue/20 border border-sky-blue/30 rounded-full px-4 py-1.5 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-xs font-semibold tracking-wider text-sky-blue uppercase">
              Vadodara, Gujarat — Enterprise Private Label Desk
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Connecting <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-200 bg-clip-text text-transparent font-extrabold drop-shadow">Indian Excellence</span> to Global Markets
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl font-light mx-auto">
              We specilize in direct farm sourcing, private-label retail packaging, strict regulatory compliance, and seamless container shipping for international supermarkets, FMCG buyers, and global wholesales.
            </p>
          </div>

          {/* Quick trust highlights */}
          <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-300">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Phytosanitary Certified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-gold-bright" />
              <span>Customs Ready (IEC)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Ship className="w-4 h-4 text-sky-blue" />
              <span>SGS Quantity Verified</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={onQuoteClick}
              className="px-8 py-4 bg-gradient-to-r from-gold-bright to-gold-solid hover:from-amber-400 hover:to-gold-bright text-primary-navy font-bold text-sm tracking-widest uppercase rounded-lg shadow-lg shadow-amber-500/20 transition duration-300 text-center cursor-pointer"
            >
              Get Custom Quote
            </button>
            <button
              onClick={onExploreClick}
              className="px-8 py-4 bg-transparent border border-white/20 hover:border-white/40 text-white font-medium text-sm tracking-wider rounded-lg flex items-center justify-center gap-2 transition duration-300"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Global Container Stats Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 border border-sky-blue/10 bg-sky-blue/5 rounded-2xl overflow-hidden backdrop-blur-sm">
          <div className="bg-primary-navy/75 p-6 text-center border-r border-b md:border-b-0 border-white/5">
            <p className="text-3xl sm:text-4xl font-extrabold text-gold-bright">15+</p>
            <p className="text-xs uppercase text-gray-400 tracking-wider font-semibold mt-1">Premium Categories</p>
          </div>
          <div className="bg-primary-navy/75 p-6 text-center border-b md:border-b-0 md:border-r border-white/5">
            <p className="text-3xl sm:text-4xl font-extrabold text-gold-bright">24+</p>
            <p className="text-xs uppercase text-gray-400 tracking-wider font-semibold mt-1">Countries Served</p>
          </div>
          <div className="bg-primary-navy/75 p-6 text-center border-r border-white/5">
            <p className="text-3xl sm:text-4xl font-extrabold text-gold-bright">500k+</p>
            <p className="text-xs uppercase text-gray-400 tracking-wider font-semibold mt-1">MT Shipped Annually</p>
          </div>
          <div className="bg-primary-navy/75 p-6 text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-gold-bright">100%</p>
            <p className="text-xs uppercase text-gray-400 tracking-wider font-semibold mt-1">Customs Cleared Rate</p>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 select-none">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentImageIndex ? "bg-gold-bright w-6" : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
