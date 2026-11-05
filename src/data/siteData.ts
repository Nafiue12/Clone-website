import { Slide, ServiceItem, PartnerItem, PartnerResource, StatItem } from '../types';

export const COMPANY_INFO = {
  name: 'Global IT Technology',
  tagline: 'Business IT Support, Cloud & Security',
  phone: '03 9070 8103',
  phoneHref: 'tel:0390708103',
  intlPhone: '+61 3 9070 8103',
  generalEmail: 'info@globalit.technology',
  salesEmail: 'sales@globalit.technology',
  supportEmail: 'support@globalit.technology',
  address: 'PO Box 298 Batman, Melbourne, VIC 3058',
  addressLine1: 'PO Box 298 Batman',
  addressLine2: 'Melbourne, VIC 3058, Australia',
  facebook: 'https://www.facebook.com/Global-IT-Technology-101908881958345',
  hours: 'Mon - Fri: 8:30 AM - 5:30 PM AEST',
  acmaCertified: 'Registered & certified by ACMA (Australian Communications and Media Authority)'
};

export const SLIDES: Slide[] = [
  {
    id: 1,
    tagline: 'We Provide IT-Services',
    title: 'One Business - Multiple IT Services',
    description: "We help businesses in many ways, tailoring technology solutions to fit Organisations' needs. With the constant changes in technology, we proud ourselves for listening to our clients’ needsand offer a wide range of the most updated solutions",
    buttonText: 'Services we provide',
    buttonAction: 'services',
    bgImage: '/images/banner-hero.jpg'
  },
  {
    id: 2,
    tagline: 'We offer expert IT consultation',
    title: 'Consulting',
    description: 'Expert IT consultation to leverage technology investments.',
    buttonText: 'Read more',
    buttonAction: 'service-modal',
    serviceId: 'consultancy',
    bgImage: '/images/banner-consulting.jpg'
  },
  {
    id: 3,
    tagline: 'Fulfill your business’ needs',
    title: 'Procurement',
    description: 'Up to date IT procurement practices and systems.',
    buttonText: 'Read more',
    buttonAction: 'service-modal',
    serviceId: 'procurement',
    bgImage: '/images/banner-procurement.jpg'
  },
  {
    id: 4,
    tagline: 'Make your IT management simpler',
    title: 'Managed Services',
    description: 'IT infrastructure managed, optimised and made simpler for you.',
    buttonText: 'Read more',
    buttonAction: 'service-modal',
    serviceId: 'managed-services',
    bgImage: '/images/banner-managed.jpg'
  },
  {
    id: 5,
    tagline: 'Cloud Computing & Infrastructure',
    title: 'Cloud Services',
    description: 'Leading cloud Services for easy and sharable information access.',
    buttonText: 'Read more',
    buttonAction: 'service-modal',
    serviceId: 'cloud-services',
    bgImage: '/images/banner-cloud.jpg'
  },
  {
    id: 6,
    tagline: 'An experienced team supervising the system',
    title: 'Maintenance Solutions',
    description: 'Hassle-free system maintenance.',
    buttonText: 'Read more',
    buttonAction: 'service-modal',
    serviceId: 'maintenance-solutions',
    bgImage: '/images/banner-maintenance.jpg'
  },
  {
    id: 7,
    tagline: 'Implement actionable IT security compliance',
    title: 'Security Solutions',
    description: 'End-to-end security solutions for today’s cyber threats.',
    buttonText: 'Read more',
    buttonAction: 'service-modal',
    serviceId: 'security-solutions',
    bgImage: '/images/banner-security.jpg'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'managed-services',
    title: 'Managed Services',
    shortDesc: 'Global IT ensures your systems are properly maintained at a mutually agreed upon price. Proactive management puts your business in control...',
    fullDesc: 'Global IT ensures your systems are properly maintained at a mutually agreed upon price. Proactive management puts your business in a position of strength, preventing downtime before it disrupts your operations. Our managed IT services offer complete peace of mind with 24/7 proactive monitoring, dedicated helpdesk support, patch management, and regular technology reviews tailored to your organization.',
    bullets: [
      'Proactive 24/7 infrastructure monitoring & alerting',
      'Rapid response local Australian helpdesk support',
      'Server, workstation & endpoint fleet management',
      'Scheduled preventive maintenance & patch deployment',
      'Strategic virtual CIO (vCIO) quarterly roadmaps'
    ],
    icon: 'server',
    slug: '/services/managed-services/',
    bgImage: '/images/banner-managed.jpg'
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    shortDesc: 'Global IT provides leading cloud services to enable you and your employees to access your business files from anywhere on any device...',
    fullDesc: 'Global IT provides leading cloud services to enable you and your employees to access your business files securely from anywhere on any device. We help you migrate workloads, set up robust Microsoft 365 environments, configure secure cloud backups, and architect scalable hybrid or multi-cloud infrastructures designed for resilience and growth.',
    bullets: [
      'Microsoft 365 and Azure setup, migration & administration',
      'Hybrid cloud architecture & private cloud hosting',
      'Automated geo-redundant cloud backup & disaster recovery',
      'Secure remote working & virtual desktop environments',
      'Cost optimization & licensing rationalization'
    ],
    icon: 'cloud',
    slug: '/services/cloud-services/',
    bgImage: '/images/banner-cloud.jpg'
  },
  {
    id: 'maintenance-solutions',
    title: 'Maintenance Solutions',
    shortDesc: 'Our network cabling technicians are fully registered and certified by ACMA, the Australian Communications and Media Authority, and help us deliver flawless cabling & hardware upkeep...',
    fullDesc: 'Our network cabling technicians are fully registered and certified by ACMA, the Australian Communications and Media Authority, and help us ensure all your structured cabling, server racks, network switches, and physical hardware are professionally installed, certified, and maintained. We keep your physical and logical infrastructure running smoothly with minimal disruption.',
    bullets: [
      'ACMA certified structured data cabling (Cat6, Cat6A, Fibre)',
      'Server room rack cleanups, testing & cable management',
      'Preventative hardware health audits & thermal testing',
      'UPS power backup testing & emergency replacement',
      'Network equipment firmware updates & preventative servicing'
    ],
    icon: 'wrench',
    slug: '/services/maintenance-solutions/',
    bgImage: '/images/banner-maintenance.jpg'
  },
  {
    id: 'procurement',
    title: 'Procurement',
    shortDesc: 'Our team offers end-to-end solutions, including project planning, procurement, ICT hardware deployment, zero-touch deployment, and fleet management...',
    fullDesc: 'Our team offers end-to-end solutions, including project planning, procurement, ICT hardware deployment, zero-touch deployment, and fleet management. Our approach frees your team from hardware headaches. Through partnerships with top distributors like Dicker Data, Leader, and Ingram Micro, we secure tier-1 commercial hardware at competitive pricing with genuine warranties.',
    bullets: [
      'Zero-touch deployment with Windows Autopilot & Apple DEP',
      'Hardware fleet procurement (laptops, desktops, monitors)',
      'Enterprise networking gear (Cisco, Meraki, switches, APs)',
      'Direct tier-1 distributor relationships & competitive pricing',
      'Full lifecycle asset management, decommissioning & e-waste'
    ],
    icon: 'shopping-cart',
    slug: '/services/procurement/',
    bgImage: '/images/banner-procurement.jpg'
  },
  {
    id: 'consultancy',
    title: 'Consultancy',
    shortDesc: 'Whether it’s strategy, planning and execution, architecture, business transformation, risk management or business continuity, we offer expert ICT consultation...',
    fullDesc: 'Whether it’s strategy, planning and execution, architecture, business transformation, risk management or business continuity, we offer expert ICT consultation services. With over 20 years of hands-on industry experience, our founder and advisors evaluate your existing environment and design practical, vendor-agnostic technology roadmaps that generate tangible business value.',
    bullets: [
      'Digital transformation & technology roadmapping',
      'IT budget optimization & procurement auditing',
      'Business continuity & disaster recovery planning',
      'Infrastructure architecture & vendor evaluation',
      'Regulatory compliance & technology governance'
    ],
    icon: 'briefcase',
    slug: '/services/consultancy/',
    bgImage: '/images/banner-consulting.jpg'
  },
  {
    id: 'security-solutions',
    title: 'Security Solutions',
    shortDesc: 'We help selecting the right platform and with architecting and designing a solution that meets your business and technical requirements against cyber threats...',
    fullDesc: 'We help selecting the right platform and with architecting and designing a solution that meets your business and technical requirements against today’s sophisticated cyber threats. From endpoint detection and multi-factor authentication to firewall defense and security awareness training, we build multilayered protection around your essential business data.',
    bullets: [
      'Essential Eight alignment and security auditing',
      'Cisco & Check Point firewall implementation',
      'Next-Gen Endpoint Detection & Response (EDR)',
      'Duo Multi-Factor Authentication (MFA) & Zero Trust',
      'Staff phishing simulations & cybersecurity training'
    ],
    icon: 'shield-check',
    slug: '/services/security-solutions/',
    bgImage: '/images/banner-security.jpg'
  }
];

export const STATS: StatItem[] = [
  { id: 'projects', value: 120, label: 'Projects Completed' },
  { id: 'clients', value: 175, label: 'Satisfied Clients' },
  { id: 'staff', value: 15, label: 'Experienced Staff' },
  { id: 'nps', value: 9.1, decimals: 1, suffix: '', label: 'Customer NPS' }
];

export const PARTNERS: PartnerItem[] = [
  {
    id: 'cisco',
    name: 'Cisco Partner',
    logo: '/images/cisco.png',
    category: 'Networking',
    description: 'Premier networking, routing, switching, and collaboration solutions.'
  },
  {
    id: 'meraki',
    name: 'Cisco Meraki',
    logo: '/images/meraki.png',
    category: 'Networking',
    description: 'Cloud-managed IT solutions including Wi-Fi, switches, security, and smart cameras.'
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    logo: '/images/microsoft.png',
    category: 'Cloud & Software',
    description: 'Enterprise cloud services, Microsoft 365, Azure infrastructure, and Windows.'
  },
  {
    id: 'surface',
    name: 'Microsoft Surface Modern Solutions',
    logo: '/images/microsoft-surface.png',
    category: 'Hardware & Distribution',
    description: 'Authorized modern workplace hardware and deployment solutions program.'
  },
  {
    id: 'dicker-data',
    name: 'Dicker Data',
    logo: '/images/dicker-data.png',
    category: 'Hardware & Distribution',
    description: 'Leading Australian technology distributor for enterprise hardware & software.'
  },
  {
    id: 'leader',
    name: 'Leader Computers',
    logo: '/images/leader.png',
    category: 'Hardware & Distribution',
    description: 'Australia’s largest Australian-owned IT distributor and PC manufacturer.'
  },
  {
    id: 'checkpoint',
    name: 'Check Point Software',
    logo: '/images/checkpoint.png',
    category: 'Cybersecurity',
    description: 'Industry-leading cybersecurity solutions across networks, clouds, and mobile devices.'
  },
  {
    id: 'ingram',
    name: 'Ingram Micro',
    logo: '/images/ingram.png',
    category: 'Hardware & Distribution',
    description: 'Global technology distributor providing comprehensive cloud and device logistics.'
  },
  {
    id: 'nbn',
    name: 'Business NBN',
    logo: '/images/nbn.png',
    category: 'Telecommunications',
    description: 'High-speed business-grade fibre broadband and symmetrical data connections.'
  },
  {
    id: 'poly',
    name: 'Poly (HP)',
    logo: '/images/poly.png',
    category: 'Telecommunications',
    description: 'Professional video conferencing, headsets, and conference room solutions.'
  },
  {
    id: 'ekahau',
    name: 'Ekahau',
    logo: '/images/ekahau.png',
    category: 'Networking',
    description: 'Enterprise Wi-Fi design, survey, and RF spectrum analysis technology.'
  },
  {
    id: 'duo',
    name: 'Duo Security (Cisco)',
    logo: '/images/duo.png',
    category: 'Cybersecurity',
    description: 'User-friendly Multi-Factor Authentication (MFA) and Zero-Trust access control.'
  }
];

export const PARTNER_RESOURCES: PartnerResource[] = [
  {
    id: 'brief',
    title: 'Meraki Executive Brief: Hybrid Work & IT Agility',
    image: '/images/meraki-brief.jpg',
    tag: 'Executive Brief',
    link: 'https://merakiresources.cisco.com/Embrace-ITChange-MFG.html?ref=3fJATMB',
    description: 'Discover how modern IT leaders empower agile teams and accelerate operational efficiency through cloud-first networking.'
  },
  {
    id: 'ebook',
    title: 'How Manufacturers Can Secure Everything',
    image: '/images/meraki-ebook.jpg',
    tag: 'Industry E-Book',
    link: 'https://merakiresources.cisco.com/how-manufacturers-can-secure-everything.html?ref=3fJATMB',
    description: 'A comprehensive guide to safeguarding operational technology (OT), endpoints, and physical spaces against digital threats.'
  },
  {
    id: 'w1',
    title: 'Cloud-Managed Smart Cameras & Sensors',
    image: '/images/widget-1.jpg',
    tag: 'Smart IoT',
    link: 'https://meraki.cisco.com/form/trial?ref=2Ox8axj',
    description: 'Deploy enterprise physical security with zero on-site servers, intelligent video analytics, and instant cloud alerts.'
  },
  {
    id: 'w2',
    title: 'Next-Gen Wi-Fi 6 & Cloud Switching',
    image: '/images/widget-2.jpg',
    tag: 'Networking',
    link: 'https://sites.ziftsolutions.com/cisco.ziftsolutions.com/8a9982c27d10d859017d11c083e010f3',
    description: 'Deliver blazing fast, dependable connectivity with centralized web-based dashboard configuration and remote diagnostics.'
  },
  {
    id: 'w3',
    title: 'Automated Cyber Threat Protection',
    image: '/images/widget-3.jpg',
    tag: 'Security',
    link: 'https://sites.ziftsolutions.com/cisco.ziftsolutions.com/8a9982217d106edc017d11c2e2932fb7',
    description: 'Defend against zero-day threats, phishing, and malware with automated Cisco Talos intelligence baked into your gateway.'
  },
  {
    id: 'w4',
    title: 'Zero-Touch Branch SD-WAN Deployment',
    image: '/images/widget-4.jpg',
    tag: 'SD-WAN',
    link: 'https://sites.ziftsolutions.com/cisco.ziftsolutions.com/8a9982217d106edc017d11cefbdf306f',
    description: 'Connect multi-location branches seamlessly over secure SD-WAN with automatic failover and optimized cloud SaaS routing.'
  },
  {
    id: 'w5',
    title: 'Cisco Meraki Free Product Trial Program',
    image: '/images/widget-5.jpg',
    tag: 'Free Trial',
    link: 'https://meraki.cisco.com/form/trial?ref=2Ox8axj',
    description: 'Test genuine Cisco Meraki access points, switches, or security appliances in your office for 30 days at zero cost.'
  },
  {
    id: 'w6',
    title: 'Remote Workforce Endpoint Systems',
    image: '/images/widget-6.jpg',
    tag: 'Workforce',
    link: 'https://sites.ziftsolutions.com/cisco.ziftsolutions.com/8a9982c27d10d859017d11d273c311c2',
    description: 'Manage, patch, and secure remote worker laptops and mobile devices wherever work happens with unified Systems Manager.'
  }
];
