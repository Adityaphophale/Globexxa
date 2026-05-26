import React, { useState } from "react";
import { Search, Palette, Package, BookOpen, Truck, Database, ChevronDown, ChevronUp, Check } from "lucide-react";
import { SERVICES } from "../data";

export default function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case "Search":
        return <Search className="w-6 h-6" />;
      case "Palette":
        return <Palette className="w-6 h-6" />;
      case "FileText":
        return <Package className="w-6 h-6" />;
      case "BookOpen":
        return <BookOpen className="w-6 h-6" />;
      case "Truck":
        return <Truck className="w-6 h-6" />;
      case "Database":
        return <Database className="w-6 h-6" />;
      default:
        return <Package className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-[#F5F8FC] to-white text-gray-800 border-t border-sky-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-sky-blue uppercase bg-sky-blue/10 px-3 py-1.5 rounded-full inline-block">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-navy tracking-tight">
            Comprehensive B2B Trade &amp; Packing Solutions
          </h2>
          <div className="w-16 h-1 bg-[#2AA7E8] mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg font-light">
            We manage the end-to-end export life cycle from factory gate to final destination port, ensuring absolute compliance and uncompromised quality controls.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                className={`bg-white border rounded-2xl p-6 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isExpanded
                    ? "border-sky-blue shadow-xl shadow-sky-blue/5 ring-1 ring-sky-blue"
                    : "border-gray-200/60 hover:border-sky-blue/40 shadow-sm"
                }`}
              >
                <div>
                  {/* Service Icon with dynamic style depending on topic */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-navy to-royal-blue text-white flex items-center justify-center mb-6">
                    {getIcon(service.iconName)}
                  </div>

                  <h3 className="text-lg font-bold text-primary-navy mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Subservice lines list when expanded */}
                {isExpanded && (
                  <div className="border-t border-gray-100 pt-4 mt-2 space-y-2.5 animate-slide-in">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-2">
                      Key Capabilities:
                    </span>
                    {service.subservices.map((sub, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-700">{sub}</span>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-sky-blue hover:text-royal-blue hover:underline transition"
                >
                  <span>{isExpanded ? "Hide Specifics" : "View Operational Specifics"}</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            );
          })}
        </div>

        {/* Operational Excellence Notice */}
        <div className="bg-primary-navy text-white rounded-3xl p-8 md:p-12 mt-16 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-primary-navy/10 border border-sky-blue/15 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-royal-blue/15 rounded-full blur-3xl"></div>
          <div className="space-y-2 relative z-10 max-w-2xl text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#2AA7E8]">Custom Consolidation Desk</span>
            <h4 className="text-xl md:text-2xl font-bold">Need multiple product lines mixed into a single 40ft Container?</h4>
            <p className="text-gray-300 text-sm font-light">
              We operate consolidation warehouses near Mundra (Gujarat) and JNPT (Mumbai). We can coordinate, test, custom-label, and package spices, grains, and sugar in a single combined container manifest.
            </p>
          </div>
          <a
            href="https://wa.me/919274821162?text=Hi%20Globexxa%20Team%2C%20tell%20me%20more%20about%20your%20Multi-product%20Container%20Consolidation%20Service."
            target="_blank"
            referrerPolicy="no-referrer"
            className="px-6 py-3.5 bg-[#2AA7E8] hover:bg-[#1f93d1] text-primary-navy font-bold rounded-xl text-xs uppercase tracking-wider whitespace-nowrap transition cursor-pointer shrink-0"
          >
            Inquire Consolidation
          </a>
        </div>

      </div>
    </section>
  );
}
