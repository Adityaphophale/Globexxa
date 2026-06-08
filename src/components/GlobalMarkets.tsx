import React, { useState } from "react";
import { Ship, Clock, Award, Star, Globe } from "lucide-react";
import { GLOBAL_MARKETS } from "../data";

export default function GlobalMarkets() {
  const [selectedMarket, setSelectedMarket] = useState(GLOBAL_MARKETS[0].name);

  const activeMarket = GLOBAL_MARKETS.find((m) => m.name === selectedMarket) || GLOBAL_MARKETS[0];

  return (
    <section id="markets" className="py-20 md:py-28 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#2456A6] uppercase bg-blue-50 px-3 py-1.5 rounded-full inline-block">
            Worldwide Delivery
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-navy tracking-tight">
            Our Active Global Export Markets
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg font-light">
            Globexxa serves corporate buyers across 4 continents with active trade representations and optimized logistics channels.
          </p>
        </div>

        {/* Dynamic Card Selection Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Selection Column */}
          <div className="lg:col-span-5 space-y-3 flex flex-col justify-start">
            <span className="text-[10px] text-gray-400 font-extrabold tracking-widest uppercase block mb-2 px-1 text-left">
              Click to view regional shipping details:
            </span>
            {GLOBAL_MARKETS.map((market) => (
              <button
                key={market.name}
                onClick={() => setSelectedMarket(market.name)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                  selectedMarket === market.name
                    ? "bg-[#163A70] border-[#163A70] text-white shadow-lg"
                    : "bg-slate-50 border-gray-100 hover:border-gray-200 text-gray-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{market.flag}</span>
                  <span className="font-bold text-sm tracking-wide">{market.name}</span>
                </div>
                <span className="text-xs opacity-60 font-medium select-none">Select Desk →</span>
              </button>
            ))}
          </div>

          {/* Right Preview Card Detail Column */}
          <div className="lg:col-span-7 bg-gradient-to-tr from-[#0F1D33] to-[#163A70] rounded-2xl p-8 text-white relative flex flex-col justify-between overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-blue/15 rounded-full blur-2xl"></div>

            <div className="space-y-6 relative z-10 text-left">
              <div className="flex items-center gap-4 border-b border-white/10 pb-6 mb-2">
                <span className="text-4xl">{activeMarket.flag}</span>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">{activeMarket.name} Port Desk</h3>
                  <span className="text-xs text-sky-blue font-mono font-bold uppercase tracking-widest">
                    ACTIVE LOGISTICS SECTOR
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-white/5 text-sky-blue mt-0.5">
                    <Ship className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider">Common Discharge Terminals:</h4>
                    <p className="text-base text-gray-100 mt-1">{activeMarket.cities}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-white/5 text-sky-blue mt-0.5">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider">Chief Export Demands:</h4>
                    <p className="text-base text-gray-100 mt-1">{activeMarket.focus}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-white/5 text-sky-blue mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider">Estimated Transit Delay:</h4>
                    <p className="text-base text-gold-bright font-bold mt-1">
                      {activeMarket.name === "Singapore" ? "7-9 Days Transit" : activeMarket.name === "United Arab Emirates" ? "12-14 Days Transit" : "21-28 Days Transit"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action button inside */}
            <div className="border-t border-white/10 pt-6 mt-8 relative z-10 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
              <p className="text-xs text-gray-300 max-w-sm text-left">
                Special custom compliance documentation (specifically USA FDA regulations or GCC standards) drafted directly by our compliance legal desk.
              </p>
              <a
                href={`https://wa.me/919274821162?text=Hi%20Globexxa%20Team%2C%20tell%20me%20more%20about%20your%20shipping%20solutions%20to%20the%20${activeMarket.name}`}
                target="_blank"
                referrerPolicy="no-referrer"
                className="px-5 py-3 bg-[#EF9F27] hover:bg-amber-500 text-primary-navy font-bold text-xs uppercase tracking-wider rounded-xl transition text-center"
              >
                Inquire region rates
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
