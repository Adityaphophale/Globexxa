import React from "react";
import { ShieldCheck, Receipt, Globe, Award, Landmark } from "lucide-react";
import { CERTIFICATIONS } from "../data";

export default function Certifications() {
  const getCertIcon = (id: string) => {
    switch (id) {
      case "apeda":
        return <Landmark className="w-8 h-8 text-amber-500" />;
      case "fssai":
        return <ShieldCheck className="w-8 h-8 text-emerald-500" />;
      case "spices":
        return <Award className="w-8 h-8 text-sky-blue" />;
      case "iec":
        return <Receipt className="w-8 h-8 text-[#2456A6]" />;
      default:
        return <Globe className="w-8 h-8 text-indigo-400" />;
    }
  };

  return (
    <section id="certifications" className="py-20 bg-white text-gray-800 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#2456A6] uppercase bg-blue-50 px-3 py-1.5 rounded-full inline-block">
            Authorized &amp; Verified
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-navy tracking-tight">
            Accreditation &amp; Compliance Badges
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 text-sm font-light">
            Every export shipment is backed by verified registration certificates issued by statutory authorities in India representing consistent food safety guidelines.
          </p>
        </div>

        {/* Certifications Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-50 border border-slate-200/50 p-6 rounded-2xl space-y-4 hover:border-[#2456A6]/20 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 flex flex-col justify-start text-left"
            >
              <div className="w-14 h-14 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0">
                {getCertIcon(cert.id)}
              </div>
              <div className="space-y-1.5 flex-1">
                <h3 className="font-extrabold text-gray-800 text-sm">{cert.name}</h3>
                <p className="text-[#2456A6] text-[10px] font-mono font-bold leading-normal uppercase">
                  {cert.type}
                </p>
                <p className="text-gray-500 text-xs font-light leading-relaxed mt-2 pt-2 border-t border-slate-200/30">
                  {cert.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Export Licensing Strip */}
        <div className="mt-12 bg-primary-navy text-white text-center rounded-2xl p-6 border border-sky-blue/15 flex flex-wrap gap-8 justify-center items-center text-xs divide-y md:divide-y-0 md:divide-x divide-white/10 select-none">
          <div className="flex flex-col md:flex-row items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="text-gray-300">Phytosanitary Clearance:</span>
            <span className="font-mono text-white font-bold uppercase">Issued on Every Batch</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2.5 pl-0 md:pl-8 pt-4 md:pt-0">
            <span className="text-gray-300">ISO Registration:</span>
            <span className="font-mono text-white font-bold">9001:2015 Standard Compliance</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2.5 pl-0 md:pl-8 pt-4 md:pt-0">
            <span className="text-gray-300">SGS Sampling tests:</span>
            <span className="font-mono text-white font-bold">Pre-Sailing Standard Inspection</span>
          </div>
        </div>

      </div>
    </section>
  );
}
