import React, { useState } from "react";
import { MessageSquare, ArrowRight, ArrowLeft, Building2 } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const activeCase = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#F5F8FC] border-t border-b border-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#2456A6] uppercase bg-blue-50 px-3 py-1.5 rounded-full inline-block">
            Client Outcomes
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-navy tracking-tight">
            Our Business Success Stories
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 text-sm font-light">
            Read how global retail networks, supermarkets, and wholesale groups overcame import-export issues with Globexxa's private-label and compliance solutions.
          </p>
        </div>

        {/* Carousel Layout Box */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-150 rounded-3xl shadow-xl overflow-hidden relative">
          
          {/* Subtle logo accent */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-blue-50 rounded-full blur-3xl opacity-60"></div>

          <div className="p-8 sm:p-12 space-y-8 relative z-10 text-left">
            
            {/* Case Info Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-100 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2456A6] flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-primary-navy text-lg">{activeCase.company}</h4>
                  <span className="text-xs text-sky-blue tracking-wider font-semibold font-mono uppercase">
                    {activeCase.location}
                  </span>
                </div>
              </div>
              
              {/* NDA Shield */}
              <div className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-600 rounded-md text-[10px] uppercase tracking-wider font-bold">
                NDA Confidentiality Verified
              </div>
            </div>

            {/* Structured Challenge & Solutions Column */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              <div className="md:col-span-1 space-y-2">
                <h5 className="font-bold text-red-600 uppercase tracking-widest text-[10px]">THE CHALLENGE:</h5>
                <p className="text-gray-600 leading-relaxed font-light">{activeCase.challenge}</p>
              </div>

              <div className="md:col-span-1 space-y-2 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
                <h5 className="font-bold text-[#2456A6] uppercase tracking-widest text-[10px]">THE SOLUTION:</h5>
                <p className="text-gray-600 leading-relaxed font-light">{activeCase.solution}</p>
              </div>

              <div className="md:col-span-1 space-y-2 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6 bg-blue-50/40 p-3 rounded-xl">
                <h5 className="font-bold text-emerald-600 uppercase tracking-widest text-[10px]">THE BUSINESS IMPACT:</h5>
                <p className="font-semibold text-primary-navy leading-relaxed">{activeCase.impact}</p>
              </div>
            </div>

            {/* Slider Navigation Row */}
            <div className="flex justify-between items-center border-t border-gray-100 pt-6">
              <span className="text-xs text-gray-400 font-mono">
                Showing success {activeIndex + 1} of {TESTIMONIALS.length}
              </span>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full border border-gray-200 hover:border-primary-navy hover:text-primary-navy text-gray-400 transition"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full border border-primary-navy bg-[#163A70] hover:bg-royal-blue text-white transition animate-pulse"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
