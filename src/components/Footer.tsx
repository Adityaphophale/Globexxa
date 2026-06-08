import React from "react";
import { Ship, Mail, Phone, Award, Globe, Linkedin, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-deep-charcoal text-gray-400 py-16 border-t border-white/5 select-none text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        
        {/* Brand identity column */}
        <div className="lg:col-span-2 space-y-6">
<<<<<<< HEAD
          <a href="#home" className="flex items-center group">
            <img
              src="/logo.png"
              alt="Globexxa Logo"
              className="h-14 w-auto object-contain rounded-md shadow-sm"
            />
=======
          <a href="#home" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-gradient-to-tr from-gold-bright to-royal-blue rounded-lg flex items-center justify-center font-bold text-white text-base">
              G
            </div>
            <div>
              <span className="font-extrabold text-lg text-white tracking-tight block leading-none">
                Globexxa
              </span>
              <span className="text-[9px] text-sky-blue font-mono uppercase tracking-widest mt-1 block">
                “Where Global Vision Meets Excellence”
              </span>
            </div>
>>>>>>> 049c6cf028ec37184997eb2e5b4c9c25ebc1f8fd
          </a>
          <p className="text-sm font-light leading-relaxed max-w-sm">
            Globexxa is a premium private-label solutions firm sourcing agricultural derivatives, sugar, spices, and grains directly from verified Indian farmer-belts for worldwide containerized shipping.
          </p>
          <div className="flex gap-4">
            <a href="https://linkedin.com/company/globexxa" className="p-2 rounded bg-white/5 text-gray-400 hover:text-sky-blue hover:bg-white/10 transition">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://instagram.com/official_globexxa" className="p-2 rounded bg-white/5 text-gray-400 hover:text-sky-blue hover:bg-white/10 transition">
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h4 className="text-white font-extrabold text-xs uppercase tracking-widest text-amber-400">Company Site map</h4>
          <ul className="space-y-2 text-sm font-light">
            <li><a href="#about" className="hover:text-sky-blue transition">Corporate Profile</a></li>
            <li><a href="#services" className="hover:text-sky-blue transition">Main Supply Services</a></li>
            <li><a href="#products" className="hover:text-sky-blue transition">Product Catalogues</a></li>
            <li><a href="#timeline" className="hover:text-sky-blue transition">Trade Flow Timeline</a></li>
            <li><a href="#markets" className="hover:text-sky-blue transition">International Markets</a></li>
            <li><a href="#certifications" className="hover:text-sky-blue transition">Accreditation Seals</a></li>
          </ul>
        </div>

        {/* Column 3: Port categories */}
        <div className="space-y-4">
          <h4 className="text-white font-extrabold text-xs uppercase tracking-widest text-[#2AA7E8]">Product Portfolios</h4>
          <ul className="space-y-2 text-sm font-light">
            <li><a href="#products" className="hover:text-sky-blue transition">Crystalline Sugar Solutions</a></li>
            <li><a href="#products" className="hover:text-sky-blue transition">Pure Ground &amp; Whole Spices</a></li>
            <li><a href="#products" className="hover:text-sky-blue transition">Ready Foods &amp; Condiments</a></li>
            <li><a href="#products" className="hover:text-sky-blue transition">Aged 1121 Basmati Rice</a></li>
            <li><a href="#products" className="hover:text-sky-blue transition">Indian Millets &amp; Atta Flour</a></li>
            <li><a href="#products" className="hover:text-sky-blue transition">Premium Snack Packaging</a></li>
          </ul>
        </div>

        {/* Column 4: Trust parameters */}
        <div className="space-y-4">
          <h4 className="text-white font-extrabold text-xs uppercase tracking-widest text-emerald-400">Trade Assistance</h4>
          <ul className="space-y-3 text-xs md:text-sm font-light">
            <li className="flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>IEC: 24200155XX</span>
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>APEDA Approved Exporter</span>
            </li>
            <li className="flex items-center gap-2">
              <Ship className="w-4 h-4 text-[#2AA7E8] shrink-0" />
              <span>FOB · CIF · CFR · DDP Ready</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom disclaimer strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/5 text-xs flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 font-mono">
        <p>© 2026 Globexxa Export Services. All rights reserved. Sourced &amp; manufactured in Vadodara, Gujarat, India.</p>
        <div className="flex gap-4">
          <span>IEC Verification: DGFT India</span>
          <span>•</span>
          <span>GSTIN: 24AADCGXXXXZ1Z0</span>
        </div>
      </div>
    </footer>
  );
}
