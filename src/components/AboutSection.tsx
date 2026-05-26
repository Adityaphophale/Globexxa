import React from "react";
import { Globe, Award, Target, MessageSquareCode, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#2456A6] uppercase bg-blue-50 px-3 py-1.5 rounded-full inline-block">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-navy tracking-tight">
            Globexxa: Where Global Vision Meets Excellence
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg font-light">
            Headquartered in India with an active network extending into Singapore and the USA, we are an enterprise-level, end-to-end B2B trade partner optimizing global sourcing.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column Overview text */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-primary-navy">
              More than just an Exporter – We are your Dedicated Sourcing and Packaging Engine
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Globexxa is a premium private-label solutions firm that specializes in sourcing, processing, testing, packaging, and custom-branding Indian-origin commodities for quick deployment on worldwide store shelves.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We eliminate standard intermediate trading agents, establishing direct linkages with regional farmer-Belts and certified crop processing facilities in India. Every batch is traceable, certified, and fully documented in compliance with strict target-country requirements.
            </p>

            {/* List of actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-gray-700">Direct sourcing from verified networks</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-gray-700">Custom labeling under client brands</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-gray-700">Strict regulatory FDA &amp; FSSAI compliance</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-gray-700">Integrated ocean shipping coordination</span>
              </div>
            </div>
          </div>

          {/* Right Column Grid card showcasing India, Singapore, USA presence */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-tr from-[#163A70] to-[#2456A6] text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-blue/10 rounded-full blur-2xl"></div>
              
              <h4 className="font-extrabold text-lg text-amber-400 uppercase tracking-wider mb-4">
                Structured Global Linkages
              </h4>
              
              <div className="space-y-6 relative z-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl shrink-0">
                    🇮🇳
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">India Headquarters &amp; Sourcing Desk</h5>
                    <p className="text-xs text-gray-300">Oversees farm relationships, milling controls, custom labeling &amp; Mundra port loading pipelines.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl shrink-0">
                    🇸🇬
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">Singapore Trade Office</h5>
                    <p className="text-xs text-gray-300">Handles Asia-Pacific wholesale distribution logistics and multi-region business settlements.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl shrink-0">
                    🇺🇸
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">USA Advisory and North American Liaison</h5>
                    <p className="text-xs text-gray-300">Supports US FDA regulatory coordination, supermarket vendor setup and local customs liaison.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission and Vision Bento styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-slate-50 border border-slate-200/50 p-8 rounded-2xl flex flex-col justify-between group hover:border-[#2456A6]/30 transition duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#2456A6] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-primary-navy">Our Mission</h4>
              <p className="text-gray-600 line-span-3 text-sm leading-relaxed">
                To simplify and accelerate global trade pathways for global buyers. By providing uncompromised transparency, private-label branding tools, and verified Indian crop supply chains, we ensure seamless global access with premium compliance standards.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-slate-50 border border-slate-200/50 p-8 rounded-2xl flex flex-col justify-between group hover:border-amber-500/35 transition duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-primary-navy">Our Vision</h4>
              <p className="text-gray-600 line-span-3 text-sm leading-relaxed">
                To stand as the world's most trusted B2B gateway for authentic, premium Indian exports. We envision a trading framework governed by technology, consistent batch testing, and customized brand representation for every client.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
