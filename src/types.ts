export interface Slide {
  id: number;
  tagline: string;
  title: string;
  description: string;
  buttonText: string;
  buttonAction: string;
  serviceId?: string;
  bgImage: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  bullets: string[];
  icon: string;
  slug: string;
  bgImage: string;
}

export interface PartnerItem {
  id: string;
  name: string;
  logo: string;
  category: 'Networking' | 'Cloud & Software' | 'Hardware & Distribution' | 'Cybersecurity' | 'Telecommunications';
  website?: string;
  description?: string;
}

export interface PartnerResource {
  id: string;
  title: string;
  image: string;
  tag: string;
  link: string;
  description: string;
}

export interface StatItem {
  id: string;
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
}
