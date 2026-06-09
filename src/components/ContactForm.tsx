import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, CheckCircle, Send, ShieldAlert, Sparkles, ArrowRight } from "lucide-react";

interface ContactFormProps {
  prefilledProduct?: string;
  onClearPrefill?: () => void;
}

export default function ContactForm({ prefilledProduct, onClearPrefill }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    productCategory: "Agro Commodities",
    comments: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; referenceNo?: string; message: string } | null>(null);

  // If there's a prefilled product, update our category field automatically
  useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({
        ...prev,
        productCategory: prefilledProduct,
        comments: `Hi Globexxa, I would like to request detailed quotes and physical product samples for: ${prefilledProduct}.`
      }));
    }
  }, [prefilledProduct]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.email || !formData.country || !formData.productCategory || !formData.comments) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      setSubmitResult(data);
      
      // Reset form if successful
      if (data.success) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          country: "",
          productCategory: "Agro Commodities",
          comments: ""
        });
        if (onClearPrefill) onClearPrefill();
      }
    } catch (err) {
      console.error(err);
      setSubmitResult({
        success: false,
        message: "Failed to connect to Globexxa trade desk server at the moment. Please send an email directly to info@globexxa.com."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F5F8FC] border-t border-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#2456A6] uppercase bg-blue-50 px-3 py-1.5 rounded-full inline-block">
            Connect With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-navy tracking-tight">
            Consult Our Global Trade Desk
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg font-light">
            Ready to secure a safe sourcing pipeline and customized packaging formats? Message our trade officers now.
          </p>
        </div>

        {/* Form and info row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary-navy">Our Corporate Office</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                Contact our desk directly. We operate direct response coordinates with active physical verification assets at ports of packaging.
              </p>
            </div>

            <div className="space-y-6">
              {/* HQ Address */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white border border-gray-150 rounded-xl text-[#2456A6] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-gray-850">India Headquarters &amp; Sourcing Facility</h4>
                  <p className="text-xs text-gray-500 leading-normal mt-1">
                    4th Floor, Siddhivinayak Arcus 413, Bhayli Road Bhayli Vadodara, Gujarat 391410 India
                  </p>
                  <p className="text-[10px] text-sky-blue mt-1 font-mono uppercase font-bold">Mundra Port: 340km Logistics Radius</p>
                </div>
              </div>
            </div>

            {/* Quick Email & Phone Strip */}
            <div className="bg-white border rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="mailto:info@globexxa.com" className="flex items-center gap-2 text-gray-700 hover:text-[#2456A6] transition">
                <Mail className="w-4 h-4 text-sky-blue" />
                <span className="text-sm font-semibold">info@globexxa.com</span>
              </a>
              <a href="tel:+919274821162" className="flex items-center gap-2 text-gray-700 hover:text-[#2456A6] transition">
                <Phone className="w-4 h-4 text-sky-blue" />
                <span className="text-sm font-semibold">+91 92748 21162</span>
              </a>
            </div>
          </div>

          {/* Right inquiry form column */}
          <div className="lg:col-span-7 bg-white border border-gray-200/60 p-8 sm:p-10 rounded-3xl shadow-xl shadow-slate-200/40 relative">
            <span className="absolute top-0 right-0 w-24 h-24 bg-sky-blue/5 rounded-full blur-2xl"></span>
            
            <h3 className="font-extrabold text-xl text-primary-navy mb-1 text-left flex items-center gap-2">
              <Sparkles className="text-amber-500 w-5 h-5" />
              <span>Inquiry Sourcing Form</span>
            </h3>
            <p className="text-xs text-gray-400 mb-6 text-left leading-relaxed">
              Submit your required parameters. We return tailored bulk price quotes, SGS purity reports and logistics options in 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              {/* Row 1: Full Name & Organization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-extrabold tracking-widest text-[#7C8E7C] uppercase block mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-none py-3 px-4 text-sm text-gray-800 focus:border-[#1E5128] focus:ring-1 focus:ring-[#1E5128] focus:outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-extrabold tracking-widest text-[#7C8E7C] uppercase block mb-2">Organization *</label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-none py-3 px-4 text-sm text-gray-800 focus:border-[#1E5128] focus:ring-1 focus:ring-[#1E5128] focus:outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 2: Email Address & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-extrabold tracking-widest text-[#7C8E7C] uppercase block mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-none py-3 px-4 text-sm text-gray-800 focus:border-[#1E5128] focus:ring-1 focus:ring-[#1E5128] focus:outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-extrabold tracking-widest text-[#7C8E7C] uppercase block mb-2">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-none py-3 px-4 text-sm text-gray-800 focus:border-[#1E5128] focus:ring-1 focus:ring-[#1E5128] focus:outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 3: Country & Product Interest */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-extrabold tracking-widest text-[#7C8E7C] uppercase block mb-2">Country *</label>
                  <input
                    type="text"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-none py-3 px-4 text-sm text-gray-800 focus:border-[#1E5128] focus:ring-1 focus:ring-[#1E5128] focus:outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-extrabold tracking-widest text-[#7C8E7C] uppercase block mb-2">Product Interest *</label>
                  <div className="relative">
                    <select
                      name="productCategory"
                      required
                      value={formData.productCategory}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-none py-3 px-4 pr-10 text-sm text-gray-800 focus:border-[#1E5128] focus:ring-1 focus:ring-[#1E5128] focus:outline-none transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="Agro Commodities">Agro Commodities</option>
                      <option value="Sugar Solutions">Sugar Solutions</option>
                      <option value="Pure Indian Spices">Pure Indian Spices</option>
                      <option value="Sauces & Pastes">Sauces, Pastes & Ketchup</option>
                      <option value="Grains & Staples">Grains &amp; Basmati Rice</option>
                      <option value="Packaged Foods & Namkeens">Packaged Organic Snacks</option>
                      <option value="Custom General Inquiry">General Procurement Inquiry</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 4: Requirements / Message */}
              <div>
                <label className="text-[10px] font-extrabold tracking-widest text-[#7C8E7C] uppercase block mb-2">Requirements / Message *</label>
                <textarea
                  name="comments"
                  required
                  rows={4}
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Specify quantity, origin, or other technical details..."
                  className="w-full bg-white border border-gray-200 rounded-none p-4 text-sm text-gray-850 placeholder-gray-400 focus:border-[#1E5128] focus:ring-1 focus:ring-[#1E5128] focus:outline-none transition-all duration-200 resize-y min-h-[120px]"
                ></textarea>
              </div>

              {submitResult && (
                <div
                  className={`p-4 rounded-none flex gap-3 text-xs leading-relaxed border ${
                    submitResult.success
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-800"
                      : "bg-amber-500/10 border-amber-500/20 text-amber-800"
                  }`}
                >
                  {submitResult.success ? (
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600" />
                  ) : (
                    <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5 text-amber-600" />
                  )}
                  <div>
                    <p className="font-bold">{submitResult.success ? "RFQ Document Filed Successfully" : "Sourcing desk report statement"}</p>
                    <p>{submitResult.message}</p>
                    {submitResult.referenceNo && (
                      <p className="font-mono mt-1 text-[11px] font-bold">Inquiry Reference Number: {submitResult.referenceNo}</p>
                    )}
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#1E5128] hover:bg-[#163e1f] text-white font-bold text-xs uppercase tracking-widest rounded-none transition duration-300 flex justify-center items-center gap-2 cursor-pointer disabled:opacity-50 border-none"
              >
                {isSubmitting ? (
                  <span>Processing B2B parameters...</span>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
