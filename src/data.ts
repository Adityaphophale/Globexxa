import { ProductCategory, Service, TimelineStep, Testimonial } from "./types";

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "sugar",
    name: "Sugar Solutions",
    badge: "APEDA & FSSAI Registered",
    icon: "Wheat", // or Sugar icon/candy
    description: "Premium crystalline sugar sourced from the finest Indian mills. Compliant with international food standards and customized retail or bulk pack formats.",
    items: [
      {
        name: "Fine Refined White Sugar",
        detail: "S30 & M30 grade white sugar, processed with strict adherence to moisture and ICUMSA requirements.",
        packagingTypes: ["50kg PP bags", "1kg retail bags", "25kg paper sacks"],
        moq: "24 MT (1 Container FCL)",
        hsCode: "1701.99",
        exportCompliance: ["FSSAI", "ISO 22000", "Phytosanitary Cert"]
      },
      {
        name: "Raw Sugar & Brown Sugar",
        detail: "Natural gold cane sugar rich in molasses flavors, suitable for biological and food production purposes.",
        packagingTypes: ["50kg bulk bags", "500g zipper pouches"],
        moq: "24 MT",
        hsCode: "1701.14",
        exportCompliance: ["APEDA", "FSSAI", "SGS Certified"]
      },
      {
        name: "Organic Cane Sugar",
        detail: "Chemically-free raw brown and white sugars with organic international tracing validation.",
        packagingTypes: ["25kg multiwall paper bags", "1kg eco-kraft pouches"],
        moq: "12 MT",
        hsCode: "1701.13",
        exportCompliance: ["USDA Organic", "APEDA Organic", "OneCert"]
      }
    ]
  },
  {
    id: "spices",
    name: "Pure Indian Spices",
    badge: "Spices Board of India Approved",
    icon: "Flame",
    description: "Sourced from the heartlands of Gujarat and Rajasthan. Whole, ground, or custom blended spices, tested for aflatoxin, pesticide residues, and microbial load.",
    items: [
      {
        name: "Premium Ground Turmeric",
        detail: "High curcumin content (3.5% - 5%) turmeric powder, brilliant golden-yellow with natural preservation.",
        packagingTypes: ["25kg laminated bags", "400g cardboard canisters", "100g bags"],
        moq: "5 MT",
        hsCode: "0908.11",
        exportCompliance: ["FSSAI", "Spice Board Cert", "ASTA Standard Compliance"]
      },
      {
        name: "Whole Dried Red Chillies",
        detail: "Premium dry red chillies (Sanm, Teja, Guntur varieties) selected by stemless/stemmed grades and heat levels.",
        packagingTypes: ["10kg jute/gunny bags", "25kg compressed bale packs"],
        moq: "10 MT",
        hsCode: "0904.22",
        exportCompliance: ["Phytosanitary Cert", "Aflatoxin Tested"]
      },
      {
        name: "Cumin Seeds & Powder",
        detail: "99% pure machine-cleaned, Singapore grade cumin seeds with strong volatile oil values.",
        packagingTypes: ["25kg craft paper bags", "50kg jute bags"],
        moq: "10 MT",
        hsCode: "0909.31",
        exportCompliance: ["SGS Inspection Verified", "FSSAI"]
      }
    ]
  },
  {
    id: "sauces",
    name: "Sauces & Pastes",
    badge: "FSSAI licensed formulations",
    icon: "Droplet",
    description: "Retail-ready cooking pasts and dipping sauces made from locally-grown farm-fresh chillies, garlic, and state-of-the-art packaging technology.",
    items: [
      {
        name: "Premium Tomato Ketchup",
        detail: "Thick, flavorful, and high-solid tomato paste based ketchup modified for both retail and fast-food chains.",
        packagingTypes: ["500g squeezy bottles", "1kg standup pouches", "5kg catering cans"],
        moq: "5,000 units",
        hsCode: "2103.20",
        exportCompliance: ["FSSAI", "ISO 22000", "Halal Compliant"]
      },
      {
        name: "Sriracha & Green Chilli Sauces",
        detail: "Fiery green and red chilli sauces with optimal acidity, fully bottled or packed under private labels.",
        packagingTypes: ["250ml glass bottles", "500ml PET containers"],
        moq: "10,000 bottles",
        hsCode: "2103.90",
        exportCompliance: ["FDA Registration Guide Ready", "FSSAI"]
      },
      {
        name: "Ginger-Garlic Paste",
        detail: "80:20 rich aromatic blend paste, hygienically crushed with zero artificial colorants.",
        packagingTypes: ["200g small laminate pouches", "1kg catering buckets"],
        moq: "10 MT",
        hsCode: "0910.11",
        exportCompliance: ["FSSAI", "HACCP Certified"]
      }
    ]
  },
  {
    id: "grains",
    name: "Grains & Staples",
    badge: "APEDA & SGS Certified",
    icon: "Wheat",
    description: "Carefully aged Indian Basmati rice, premium millets, and stone-milled wheat flours loaded onto containers from Mundra port.",
    items: [
      {
        name: "Aged 1121 Basmati Rice",
        detail: "Extra-long grain creamy sella basmati rice, aged for 12+ months to maximize aromatic elongation and non-sticky texture.",
        packagingTypes: ["5kg/10kg/20kg premium BOPP bags", "25kg non-woven sacks"],
        moq: "24 MT (1 Container FCL)",
        hsCode: "1006.30",
        exportCompliance: ["APEDA Registration", "Weight & Moisture Certificate", "NPPO Certificate"]
      },
      {
        name: "Premium Pearl Millets (Bajra)",
        detail: "Naturally organic dietary millets sourced directly from dry climate regions of Gujarat and Rajasthan.",
        packagingTypes: ["50kg jute bags", "25kg vacuum sealed sacs"],
        moq: "24 MT",
        hsCode: "1008.21",
        exportCompliance: ["FSSAI", "APEDA", "Nutritional Certification Verified"]
      },
      {
        name: "Stone-Ground Chakki Atta",
        detail: "100% whole wheat flour, meticulously milled on traditional stones to preserve natural bran fiber and high gluten index.",
        packagingTypes: ["5kg/10kg colorful BOPP brand packages"],
        moq: "20 MT",
        hsCode: "1101.00",
        exportCompliance: ["FSSAI", "HACCP Formulation"]
      }
    ]
  },
  {
    id: "packaged",
    name: "Packaged Foods & Namkeens",
    badge: "Ready-to-Ship Retail Packs",
    icon: "Package",
    description: "Classic Indian snacks, crispy namkeens, retail-packaged savory items, and pickles ready for international supermarket shelves.",
    items: [
      {
        name: "Premium Flavored Pickles",
        detail: "Mango, Lime, Mixed Veg, and Garlic pickles matured in high-quality mustard oil and handcrafted spice blends.",
        packagingTypes: ["400g glass jars", "1kg catering bags"],
        moq: "5,000 units",
        hsCode: "2001.90",
        exportCompliance: ["FSSAI", "APEDA Approved", "US FDA compliance certified"]
      },
      {
        name: "Authentic Indian Namkeen",
        detail: "Bhujia, Gathia, Sev, and roasted mixtures fried in premium vegetable oils under strict hygienic standards.",
        packagingTypes: ["150g nitrogen-flushed packages", "500g bulk retail packs"],
        moq: "10,000 bags",
        hsCode: "1905.90",
        exportCompliance: ["FSSAI", "Halal Approved", "US FDA labeling compliant"]
      }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    title: "Global Sourcing & Procurement",
    description: "We navigate extensive farming belts and industrial hubs across India to procure commodities meeting precise specifications, negotiating competitive pricing directly.",
    iconName: "Search",
    subservices: [
      "Supplier audits & verification",
      "Direct contract farming pricing models",
      "Moisture & quality sorting parameters",
      "SGS/Eurofins lab screening arrangements"
    ]
  },
  {
    title: "Private Label Packaging & SKU Creation",
    description: "We help international brands launch premium private labels by designing, formulating, packaging, and sorting ready-to-sell retail formulations under client brands.",
    iconName: "Palette",
    subservices: [
      "Custom brand layout & design styling",
      "Multi-lingual packaging text compliance",
      "Zip-lock, BOPP, glass, and vacuum pack options",
      "Barcode & QR generation ready for supermarkets"
    ]
  },
  {
    title: "Branding & Outer Box Solutions",
    description: "Creating premium outer shippers, master cartons, and moisture-controlled secondary packaging designed for multi-month maritime shipping routes.",
    iconName: "FileText",
    subservices: [
      "5-ply corrugated heavy duty cardboard boxes",
      "Export palletization (wooden & plastic) with ISPM-15 fumigation",
      "Moisture-absorbing silica gel integration",
      "Global standard weight-marking systems"
    ]
  },
  {
    title: "Export & Compliance Documentation",
    description: "We manage the entire administrative compliance gauntlet, drafting error-free documentation to prevent any customs delay at ports of origin and destination.",
    iconName: "BookOpen",
    subservices: [
      "B/L (Bill of Lading) & Certificate of Origin documentation",
      "APEDA, Phytosanitary inspect and Spice Board clearances",
      "Customs House Agent (CHA) interface on Indian ports",
      "Letter of Credit (L/C) compliance auditing"
    ]
  },
  {
    title: "Global Supply Logistics & Freight Coordination",
    description: "Providing sea, air, and dry-freight coordination with premium carrier lines (Maersk, MSC, CMA CGM) under optimized pricing models.",
    iconName: "Truck",
    subservices: [
      "FOB, CIF, CFR, and DDP shipping models",
      "Reefer (temperature-controlled) containers for perishable goods",
      "Vessel slot booking and port-handling protocols",
      "LCL (Less than Container Load) consolidation support"
    ]
  },
  {
    title: "Warehousing & Port Consolidation",
    description: "Clean, temperature-regulated facilities near critical export ports to assemble and package multiple client lines into a single shipping manifest.",
    iconName: "Database",
    subservices: [
      "Port-adjacent warehousing systems",
      "Pest-controlled clean storage zones",
      "Lot tracking and shipping sorting",
      "Pre-shipment packaging verification checks"
    ]
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    stepNumber: "01",
    title: "B2B Consultation & Formulation Discovery",
    subtitle: "Understanding Product Specs, Tariffs, and Packaging",
    description: "Our trade specialists review your required product standards, target market regulations, container volume, and customized labeling choices.",
    highlight: "24-Hour Callback Assurance"
  },
  {
    stepNumber: "02",
    title: "Sampling, Lab Analysis & Approval",
    subtitle: "Ensuring Compliance and Quality Before Mass Sourcing",
    description: "We deliver physical product samples along with detailed laboratory analysis certifications (SGS, pesticide limits, weight tests) to secure client approval.",
    highlight: "SGS Verified Batch Reports"
  },
  {
    stepNumber: "03",
    title: "State-of-the-Art Private Labeling & Milling",
    subtitle: "Custom Brand Labeling and Protective Outer Sacks",
    description: "Our state-of-the-art packaging mills process the raw commodities, apply customized brand styles (BOPP, laminated pouches), and complete shipping palletization.",
    highlight: "Supermarket-Ready POS Markups"
  },
  {
    stepNumber: "04",
    title: "Maritime Freight Booking & Custom House Clearance",
    subtitle: "Navigating Customs Administration Safely",
    description: "We book vessels, handle customs clearance at Indian ports (Mundra/JNPT), organize phytosanitary inspections, and draft final compliance paperwork.",
    highlight: "Bill of Lading & Phyto Clearance in 48 hrs"
  },
  {
    stepNumber: "05",
    title: "Ocean Transport & Port-of-Destination Delivery",
    subtitle: "Traceable, Secure Worldwide Shipping Lines",
    description: "Cargo is securely loaded onto premier sea lines. We provide comprehensive continuous cargo tracking to help your custom house warehouse receive merchandise smoothly.",
    highlight: "Continuous Temperature and GPS Tracking"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    company: "UAE Premier FMCG Retail Chain",
    location: "Dubai, UAE",
    challenge: "Fast rollout of customized private-label spices and pickles on international supermarket chains within 3 months to capture peak winter shopping seasons.",
    solution: "Sourced high-grade turmeric, red chillies, and mature mango pickles. Set up bilingual (Arabic/English) BOPP pouches and managed consolidated container freight directly to Jebel Ali Port.",
    impact: "Successfully launched 30+ custom-brand SKUs on time. Shelf availability achieved in record time, resulting in an additional $1.2M in seasonal wholesale sales."
  },
  {
    company: "African Import Union Consortium",
    location: "Mombasa, Kenya",
    challenge: "Inconsistent delivery schedules and unstable sugar pricing from unreliable export suppliers, threatening bulk supply commitments for packaging factories.",
    solution: "Secured constant price agreements with verified Tier-1 Indian sugar mills and secured a reliable slot booking schedule with regional maritime cargo lines.",
    impact: "Supplied 15,000 MT of S30 cane sugar smoothly. Order volume scaled three-fold in 12 months with zero demurrage charges recorded at ports."
  },
  {
    company: "Ethnic Food Distribution Network",
    location: "London, United Kingdom",
    challenge: "Adapting traditional Indian spices and grains to conform strictly to stringent UK border pesticide residues regulations and UK Food Standards protocols.",
    solution: "Structured an advanced double-audit testing program utilizing Eurofins laboratories to ensure pesticide results satisfied EU/UK standards before maritime packing.",
    impact: "Assured zero custom delay or cargo rejections at UK ports. Sourced 1121 aged basmati rice basket with 100% border clearance speed."
  }
];

export const GLOBAL_MARKETS = [
  { name: "United States", flag: "🇺🇸", cities: "New York, Houston, San Francisco", focus: "Spices, Dry Fruits & Atta" },
  { name: "Singapore", flag: "🇸🇬", cities: "Changi, Jurong Logistics Hub", focus: "Rice, Grains & Sauces" },
  { name: "United Arab Emirates", flag: "🇦🇪", cities: "Dubai, Abu Dhabi, Sharjah", focus: "Sugar, Pulses & Spices" },
  { name: "United Kingdom", flag: "🇬🇧", cities: "London, Birmingham", focus: "Ethnic Packaged Foods" },
  { name: "Germany", flag: "🇩🇪", cities: "Hamburg, Rotterdam Channel", focus: "Organic Grains & Pulp" },
  { name: "Saudi Arabia", flag: "🇸🇦", cities: "Jeddah, Riyadh Terminal", focus: "White Sugar & Sella Rice" },
  { name: "Australia", flag: "🇦🇺", cities: "Sydney, Melbourne Hub", focus: "Ready Meals & Spice Powders" },
  { name: "East Africa", flag: "🇳🇬", cities: "Mombasa, Lagos, Durban Ports", focus: "Bulk Sugar & Raw Grains" }
];

export const CERTIFICATIONS = [
  { id: "apeda", name: "APEDA", type: "Agricultural & Processed Food Exports Authority of India", desc: "Mandatory compliance for agricultural materials ensures safety and provenance guidelines." },
  { id: "fssai", name: "FSSAI", type: "Food Safety and Standards Authority of India", desc: "Top safety standard verifying clean raw materials processing, hygiene, and export clearance of edibles." },
  { id: "spices", name: "Spices Board", type: "Spices Board under Ministry of Commerce, India", desc: "Accreditation for premium processing, authentic testing, and strict pesticide safety inspection." },
  { id: "iec", name: "IEC Code", type: "Import Export Code by Govt of India DGFT", desc: "Legally registers Globexxa as a validated global shipper with authorized custom permissions." },
  { id: "iso", name: "ISO 9001:2015", type: "Quality Management Systems Registration", desc: "Standardizes sourcing logistics, paperwork, supplier evaluation, and batch traceability." }
];
