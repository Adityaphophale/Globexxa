import React from "react";
import { MessageSquare, HeartHandshake, Box, FileText, Send, CheckCircle2 } from "lucide-react";
import { TIMELINE_STEPS } from "../data";

export default function TimelineSection() {
  const getStepIcon = (num: string) => {
    switch (num) {
      case "01":
        return <MessageSquare className="w-5 h-5 text-sky-blue" />;
      case "02":
        return <HeartHandshake className="w-5 h-5 text-sky-blue" />;
      case "03":
        return <Box className="w-5 h-5 text-sky-blue" />;
      case "04":
        return <FileText className="w-5 h-5 text-sky-blue" />;
      case "05":
        return <Send className="w-5 h-5 text-sky-blue" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-sky-blue" />;
    }
  };

  return (
    <section id="timeline" className="py-20 md:py-28 bg-[#F8FAFC] text-gray-800 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-sky-blue uppercase bg-sky-blue/10 px-3 py-1.5 rounded-full inline-block">
            Our Trade Flow
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-navy tracking-tight">
            Seamless Sourcing &amp; Sailing in 5 Steps
          </h2>
          <div className="w-16 h-1 bg-[#2AA7E8] mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg font-light">
            We handle the entire regulatory, custom clear and cargo packaging hurdles so you can focus strictly on retail expansion.
          </p>
        </div>

        {/* Timeline UI list */}
        <div className="relative pt-4 space-y-12 max-w-5xl mx-auto before:absolute before:inset-y-0 before:left-8 md:before:left-1/2 before:w-[2px] before:bg-sky-blue/20">
          {TIMELINE_STEPS.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 items-start select-none ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Icon Pin */}
                <div className="absolute left-8 md:left-1/2 -translate-x-[15px] z-10 w-8 h-8 rounded-full bg-primary-navy border-4 border-white shadow flex items-center justify-center font-bold text-xs text-amber-400">
                  {step.stepNumber}
                </div>

                {/* Left side empty space in desktop to balance */}
                <div className="w-full md:w-1/2 hidden md:block"></div>

                {/* Content Box */}
                <div className="w-full md:w-1/2 pl-14 md:pl-0">
                  <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 md:mx-4 text-left">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="p-2 rounded bg-royal-blue/10 text-royal-blue">
                        {getStepIcon(step.stepNumber)}
                      </div>
                      <div>
                        <span className="text-[10px] text-amber-500 font-bold tracking-wider font-mono uppercase block">
                          Phase {step.stepNumber}
                        </span>
                        <h3 className="font-extrabold text-primary-navy text-lg leading-tight">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-[11px] font-semibold text-sky-blue tracking-wide mb-3">
                      {step.subtitle}
                    </p>

                    <p className="text-gray-600 text-xs font-light leading-relaxed mb-4">
                      {step.description}
                    </p>

                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-600 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>{step.highlight}</span>
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
