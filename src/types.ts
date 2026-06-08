export interface Product {
  name: string;
  detail: string;
  packagingTypes: string[];
  moq: string;
  hsCode?: string;
  exportCompliance: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  badge?: string;
  items: Product[];
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
  subservices: string[];
}

export interface TimelineStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
}

export interface Testimonial {
  company: string;
  location: string;
  challenge: string;
  solution: string;
  impact: string;
}

export interface ChatMessage {
  sender: "user" | "assistant";
  text: string;
  timestamp: string;
}
