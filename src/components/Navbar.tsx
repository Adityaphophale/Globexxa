import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

interface NavbarProps {
  onQuoteClick: () => void;
}

export default function Navbar({ onQuoteClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "How It Works", href: "#timeline" },
    { label: "Markets", href: "#markets" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-primary-navy/95 backdrop-blur-md shadow-lg py-3"
            : "bg-primary-navy py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center group bg-white/95 px-3 py-1.5 rounded-lg shadow-md border border-white/10 hover:bg-white transition-all duration-300">
              <img
                src="/logo.png"
                alt="Globexxa Logo"
                className="h-9 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-x-1 xl:gap-x-3 2xl:gap-x-5">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-sky-blue font-semibold text-[11px] lg:text-[11px] xl:text-xs 2xl:text-sm tracking-tight xl:tracking-wide transition-colors duration-200 py-1.5 px-1.5 xl:px-2 relative group whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-sky-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-250"></span>
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 2xl:gap-3">
              <a
                href="https://wa.me/919274821162?text=Hi%20Globexxa%20Team%2C%20I%20am%20interested%20in%20discussing%20private-label%20export%20solutions."
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center gap-1 px-2 py-1 xl:px-3 xl:py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] xl:text-[11px] 2xl:text-xs font-semibold transition shrink-0 whitespace-nowrap"
              >
                <Phone className="w-3 h-3 xl:w-3.5 xl:h-3.5" />
                <span className="lg:hidden xl:inline">WhatsApp Desk</span>
                <span className="hidden lg:inline xl:hidden">WhatsApp</span>
              </a>
              <button
                onClick={onQuoteClick}
                className="px-2.5 py-1 xl:px-3.5 xl:py-1.5 2xl:px-4 2xl:py-2 font-bold text-[10px] xl:text-[11px] 2xl:text-xs bg-gradient-to-r from-gold-bright to-gold-solid hover:from-yellow-400 hover:to-gold-bright text-primary-navy rounded-full shadow-md shadow-amber-500/10 cursor-pointer tracking-wider uppercase transition-all duration-300 shrink-0 whitespace-nowrap"
              >
                Get Quote
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-sky-blue p-1 rounded-md transition"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-primary-navy border-t border-sky-blue/10 px-4 pt-4 pb-6 space-y-3 shadow-inner">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-200 hover:text-sky-blue font-medium text-base py-2 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onQuoteClick();
                }}
                className="w-full text-center px-4 py-2.5 bg-gradient-to-r from-gold-bright to-gold-solid text-primary-navy text-xs font-bold uppercase rounded-md"
              >
                Get Quote
              </button>
              <a
                href="https://wa.me/919274821162"
                target="_blank"
                referrerPolicy="no-referrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase rounded-md flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
  );
}
