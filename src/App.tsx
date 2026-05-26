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
import TradeAssistant from "./components/TradeAssistant";
import { Phone, Check, ShieldCheck, Ship, MessageSquareCode, Globe, X } from "lucide-react";

export default function App() {
  const [prefilledProduct, setPrefilledProduct] = useState<string | undefined>(undefined);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);

  const handleProductQuoteClick = (productName?: string) => {
    setPrefilledProduct(productName);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGeneralQuoteToggle = () => {
    setIsQuotePopupOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-amber-500 selection:text-primary-navy">
      {/* Structural Components */}
      <Navbar
        onQuoteClick={handleGeneralQuoteToggle}
        onAssistantClick={() => setIsAssistantOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onQuoteClick={handleGeneralQuoteToggle}
          onExploreClick={() => {
            const portfolio = document.getElementById("products");
            portfolio?.scrollIntoView({ behavior: "smooth" });
          }}
          onAssistantClick={() => setIsAssistantOpen(true)}
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

      {/* Embedded Drawer: AI Compliance Assistant */}
      <TradeAssistant
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
      />

      {/* Floating Action Trigger: WhatsApp & AI consultation buttons combined safely */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
        <button
          onClick={() => setIsAssistantOpen(!isAssistantOpen)}
          className="flex items-center gap-2 px-5 py-3.5 bg-gradient-to-tr from-[#163A70] to-[#2AA7E8] text-white rounded-full shadow-2xl hover:scale-105 transition-all duration-300 md:flex border border-sky-blue/20 font-semibold text-xs uppercase tracking-wider"
        >
          <Globe className="w-4 h-4 animate-spin-slow" />
          <span>Ask Trade AI</span>
        </button>
      </div>

      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2">
        <a
          href="https://wa.me/919274821162?text=Hi%20Globexxa%20Team%2C%20I%20would%20like%2520to%2520discuss%20an%20import-export%2520solution%20for%20Indian-origin%20goods."
          target="_blank"
          referrerPolicy="no-referrer"
          className="flex items-center gap-2.5 px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl hover:scale-105 transition duration-300 font-bold text-xs uppercase tracking-wider block"
        >
          <Phone className="w-4 h-4" />
          <span>Consult Desk</span>
        </a>
      </div>

      {/* Global Quote Request Modal overlay */}
      {isQuotePopupOpen && (
        <div className="fixed inset-0 bg-[#0B192C]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl animate-scale-up text-left">
            <button
              onClick={() => setIsQuotePopupOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 transition text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="font-extrabold text-2xl text-primary-navy mb-2">Request Sourcing Estimate</h3>
            <p className="text-xs text-gray-500 leading-normal mb-6 font-light">
              Submit your desired parameters here. To request samples for specific products, you may select category pages directly in the catalog list below.
            </p>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setIsQuotePopupOpen(false);
                alert("General RFQ reference document created! Our trade consultants will call you back shortly.");
              }}
              className="space-y-4"
            >
              <div>
                <label className="text-xs font-bold text-gray-650 uppercase block mb-1">Active Contact Name*</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rachel Adams"
                  className="w-full bg-slate-50 border border-gray-200 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2456A6]/20 focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-650 uppercase block mb-1">Corporate Email Address*</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. procurement@gourmetgrocer.com"
                  className="w-full bg-slate-50 border border-gray-200 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2456A6]/20 focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-650 uppercase block mb-1">Required Crop Category</label>
                <select className="w-full bg-slate-50 border border-gray-200 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2456A6]/20 focus:bg-white">
                  <option>Methanol Formats / Industrial Goods</option>
                  <option>Pure Grains &amp; Basmati Rice Segment</option>
                  <option>Spices, Ground herbs &amp; Powders</option>
                  <option>Crystalline Cane Sugar Solutions</option>
                  <option>Fruit, Veg or Pickled Preserves</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#163A70] hover:bg-[#2456A6] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition cursor-pointer text-center block"
                >
                  Generate Transit Estimate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
