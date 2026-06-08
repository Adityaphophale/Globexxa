import React, { useState } from "react";
import { Package, ShieldCheck, Scale, FileText, ShoppingBag, Eye, HeartHandshake } from "lucide-react";
import { PRODUCT_CATEGORIES } from "../data";

interface ProductPortfolioProps {
  onQuoteClick: (prefilledProduct?: string) => void;
}

export default function ProductPortfolio({ onQuoteClick }: ProductPortfolioProps) {
  const [activeTab, setActiveTab] = useState(PRODUCT_CATEGORIES[0].id);

  const activeCategory = PRODUCT_CATEGORIES.find((cat) => cat.id === activeTab) || PRODUCT_CATEGORIES[0];

  // Helper function to return visual icons/badges representing the categories nicely
  const getCategoryEmoji = (id: string) => {
    switch (id) {
      case "sugar":
        return "🍬";
      case "spices":
        return "🌶️";
      case "sauces":
        return "🥫";
      case "grains":
        return "🌾";
      case "packaged":
        return "🍿";
      default:
        return "📦";
    }
  };

  return (
    <section id="products" className="py-20 md:py-28 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-xs font-bold tracking-widest text-gold-solid uppercase bg-gold-pale px-3 py-1.5 rounded-full inline-block">
            Our Export Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-navy tracking-tight">
            Certified Commodities &amp; Sourced Goods
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg font-light">
            We provide multi-category premium food products and commodities backed by continuous testing, precise packaging formats, and strict sanitary controls for export.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12 border-b border-gray-100 pb-4">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-primary-navy text-white shadow-lg shadow-primary-navy/15 scale-102"
                  : "bg-slate-50 hover:bg-slate-100 text-gray-600 hover:text-primary-navy border border-gray-200/50"
              }`}
            >
              <span className="text-base">{getCategoryEmoji(cat.id)}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Category Overview Card */}
          <div className="lg:col-span-4 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/60 p-8 rounded-2xl space-y-6">
            <span className="px-3 py-1 bg-sky-blue/10 text-sky-blue text-[10px] font-bold uppercase tracking-wider rounded-full">
              {activeCategory.badge}
            </span>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-primary-navy">{activeCategory.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{activeCategory.description}</p>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-200/60 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400 uppercase tracking-widest font-bold">Standard Loading:</span>
                <span className="font-semibold text-gray-700">Mundra Port Terminal</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 uppercase tracking-widest font-bold">Incoterm Options:</span>
                <span className="font-semibold text-gray-700">FOB, CIF, CFR, DDP</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 uppercase tracking-widest font-bold">Consolidation:</span>
                <span className="font-semibold text-emerald-600">LCL Container Supported</span>
              </div>
            </div>

            <button
              onClick={() => onQuoteClick(activeCategory.name)}
              className="w-full text-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-primary-navy font-bold text-xs uppercase tracking-wider rounded-xl transition"
            >
              Submit Global Category RFQ
            </button>
          </div>

          {/* Individual Products Listing */}
          <div className="lg:col-span-8 space-y-6">
            {activeCategory.items.map((prod, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200/60 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 group hover:border-sky-blue/30 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300"
              >
                <div className="space-y-3 flex-1 text-left">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-bold text-lg text-primary-navy group-hover:text-royal-blue transition">
                      {prod.name}
                    </h4>
                    {prod.hsCode && (
                      <span className="px-2 py-0.5 bg-slate-100 text-gray-500 text-[10px] font-mono rounded">
                        HS: {prod.hsCode}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">
                    {prod.detail}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-1.5 text-xs">
                    <div className="flex items-center gap-1 text-gray-500">
                      <Package className="w-3.5 h-3.5 text-sky-blue" />
                      <span>Packing: {prod.packagingTypes.join(" | ")}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Scale className="w-3.5 h-3.5 text-sky-blue" />
                      <span>MOQ: {prod.moq}</span>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {prod.exportCompliance.map((cert, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2 py-0.5 bg-sky-blue/5 border border-sky-blue/15 text-sky-blue text-[9px] font-bold uppercase tracking-wider rounded"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onQuoteClick(`${activeCategory.name} - ${prod.name}`)}
                  className="px-5 py-3 border border-sky-blue/20 hover:border-amber-500 text-sky-blue hover:text-primary-navy hover:bg-amber-500/10 font-bold text-xs uppercase tracking-wide rounded-xl shrink-0 transition"
                >
                  Request Sample / RFQ
                </button>
              </div>
            ))}
          </div>

        </div>

        {/* Private labeling feature promo banner */}
        <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          <div className="md:col-span-3 space-y-2 text-left">
            <h4 className="font-bold text-lg text-primary-navy flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-amber-500" />
              <span>Full Private Label Sizing and Supermarket-Ready Barcoding</span>
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed font-light">
              We don't just supply bulk volumes. We can package your orders into multi-lingual BOPP bags, jars, or cartons under your exact brand layouts, complete with legal barcodes, regional allergen notices, and compliant nutrition boards, making them instantly ready for your regional retail networks.
            </p>
          </div>
          <button
            onClick={() => onQuoteClick("Private Label Sizing consultation")}
            className="w-full py-3 bg-primary-navy text-white hover:bg-royal-blue text-xs font-bold uppercase tracking-wider rounded-xl transition"
          >
            Inquire Packaging Specs
          </button>
        </div>

      </div>
    </section>
  );
}
