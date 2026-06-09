import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProductPortfolio from "./components/ProductPortfolio";
import TimelineSection from "./components/TimelineSection";
import GlobalMarkets from "./components/GlobalMarkets";
import CaseStudies from "./components/CaseStudies";
import Certifications from "./components/Certifications";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { Phone, Check, ShieldCheck, Ship, MessageSquareCode } from "lucide-react";

export default function App() {
  const [prefilledProduct, setPrefilledProduct] = useState<string | undefined>(undefined);

  const handleProductQuoteClick = (productName?: string) => {
    setPrefilledProduct(productName);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGeneralQuoteToggle = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-amber-500 selection:text-primary-navy">
      {/* Structural Components */}
      <Navbar
        onQuoteClick={handleGeneralQuoteToggle}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onQuoteClick={handleGeneralQuoteToggle}
          onExploreClick={() => {
            const portfolio = document.getElementById("products");
            portfolio?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Endless scrolling corporate trust strip */}
        <div className="bg-gradient-to-r from-gold-bright to-gold-solid py-3 border-y border-amber-500 overflow-hidden relative select-none">
          <div className="flex whitespace-nowrap gap-12 text-[#0B192C] font-mono text-xs font-bold uppercase animate-marquee tracking-wide">
            <span>🔹 APEDA Registered Agricultural Broker</span>
            <span>🔹 Spices Board of India Approved Batch Testing</span>
            <span>🔹 FSSAI Licensed Processing Facility</span>
            <span>🔹 US FDA Export Compliance Ready</span>
            <span>🔹 Sea Reefer and Dry FCL Logistics</span>
            <span>🔹 24h custom tariff &amp; duty pricing response</span>
            <span>🔹 Palletized cargo with ISPM-15 fumigation standards</span>
            <span>-</span>
            <span>🔹 APEDA Registered Agricultural Broker</span>
            <span>🔹 Spices Board of India Approved Batch Testing</span>
            <span>🔹 FSSAI Licensed Processing Facility</span>
            <span>🔹 US FDA Export Compliance Ready</span>
          </div>
        </div>

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Product Portfolio */}
        <ProductPortfolio onQuoteClick={handleProductQuoteClick} />

        {/* Timeline flow */}
        <TimelineSection />

        {/* Global reach */}
        <GlobalMarkets />

        {/* Testimony outcomes */}
        <CaseStudies />

        {/* Compliance certificates */}
        <Certifications />

        {/* Sourcing contact sheet */}
        <ContactForm
          prefilledProduct={prefilledProduct}
          onClearPrefill={() => setPrefilledProduct(undefined)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Trigger: WhatsApp consultation button safely */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end select-none">
        <a
          href="https://wa.me/919274821162?text=Hello%20Globexxa%20Team%2C%20I%20would%20like%20to%20discuss%20sourcing%20and%20import-export%20solutions%20for%20Indian-origin%20commodities.%20Please%20connect%20me%20with%20a%20trade%20consultant."
          target="_blank"
          referrerPolicy="no-referrer"
          className="flex items-center gap-2.5 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl hover:scale-105 transition duration-300 font-bold text-xs uppercase tracking-wider block"
        >
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4" />
            <span>Consult Desk</span>
          </div>
        </a>
      </div>



    </div>
  );
}
