// lib/i18n/content/pricingContent.ts
// Locale-aware pricing page content.

import type { Locale } from '../translations';

export interface PricingPlanContent {
  name: string;
  units: string;
  badge: string | null;
  color: string;
  ctaKey: string;
  ctaStyle: string;
  features: string[];
  price: {
    monthly: number | null;
    annual: number | null;
  };
}

export interface PricingFaqItem {
  q: string;
  a: string;
}

export interface PricingContent {
  plans: PricingPlanContent[];
  faqItems: PricingFaqItem[];
  trustItems: { icon: string; label: string; sub: string }[];
  comparisonRows: Array<[string, string, string, string, string]>;
}

const content: Partial<Record<Locale, PricingContent>> = {
  en: {
    plans: [
      {
        name: 'Free',
        price: { monthly: 0, annual: 0 },
        units: 'Up to 50 units',
        badge: null,
        color: 'border-gray-200',
        ctaKey: 'get_started',
        ctaStyle: 'border border-navy text-navy hover:bg-navy hover:text-white',
        features: [
          '✅ Visitor Management (all 4 flows)',
          '✅ Notice Board',
          '✅ Community Help',
          '✅ Basic Maintenance billing',
          '✅ 1 Admin account',
          '✅ Push notifications',
          '✅ 6 Indian language UI',
          '❌ Issues & Complaints',
          '❌ Events & Polls',
          '❌ Parking Management',
        ],
      },
      {
        name: 'Standard',
        price: { monthly: 2999, annual: 2499 },
        units: 'Up to 200 units',
        badge: 'Most Popular',
        color: 'border-teal ring-2 ring-teal',
        ctaKey: 'start_trial',
        ctaStyle: 'bg-teal text-white hover:bg-teal/90',
        features: [
          '✅ Everything in Free',
          '✅ Issues & Complaints',
          '✅ Events & Polls',
          '✅ Parking Management',
          '✅ 3 Committee role accounts',
          '✅ Email notifications',
          '✅ Payment defaulter reports',
          '✅ Priority email support',
          '❌ Amenity Booking',
          '❌ Advanced Analytics',
        ],
      },
      {
        name: 'Pro',
        price: { monthly: 5999, annual: 4999 },
        units: 'Up to 500 units',
        badge: null,
        color: 'border-gray-200',
        ctaKey: 'start_trial',
        ctaStyle: 'bg-navy text-white hover:bg-navy/90',
        features: [
          '✅ Everything in Standard',
          '✅ Amenity Booking',
          '✅ Advanced Analytics dashboard',
          '✅ Priority support (phone + email)',
          '✅ Unlimited Committee members',
          '✅ Custom branding',
          '✅ API Access',
          '✅ Audit logs',
          '✅ Custom notification templates',
          '✅ Multi-society admin',
        ],
      },
      {
        name: 'Enterprise',
        price: { monthly: null, annual: null },
        units: '500+ units',
        badge: null,
        color: 'border-gray-200',
        ctaKey: 'contact_sales',
        ctaStyle: 'border border-navy text-navy hover:bg-navy hover:text-white',
        features: [
          '✅ Everything in Pro',
          '✅ Dedicated server infrastructure',
          '✅ White-label app',
          '✅ SLA guarantee (99.9% uptime)',
          '✅ Onboarding manager',
          '✅ Custom integrations',
          '✅ VAPT security audit',
          '✅ Custom payment gateway',
          '✅ On-site training',
          '✅ Quarterly reviews',
        ],
      },
    ],
    faqItems: [
      {
        q: 'Is the Free plan really free forever?',
        a: 'Yes. The Free plan has no expiry date and no credit card required. You get Visitor Management, Notice Board, Community Help, and Basic Maintenance for up to 50 units — permanently free.',
      },
      {
        q: 'Can I upgrade or downgrade mid-month?',
        a: 'You can upgrade anytime and your new features are available immediately. Downgrades take effect at the end of your current billing cycle. You will never lose data when downgrading.',
      },
      {
        q: 'Do you charge per unit / per flat?',
        a: 'No per-unit pricing below 200 units. Standard covers up to 200 units for a flat ₹2,999/month regardless of how many residents you have. Pro covers up to 500 units.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept UPI (Google Pay, PhonePe, Paytm), all major credit/debit cards, and NEFT/RTGS for annual plans. Invoice billing available for Enterprise.',
      },
      {
        q: 'Is there a contract or lock-in period?',
        a: 'No lock-in on monthly plans. Annual plans offer 2 months free and are billed once per year. You can cancel anytime with a 30-day money-back guarantee on all paid plans.',
      },
      {
        q: 'What happens if my society grows beyond the unit limit?',
        a: 'You will get an in-app notification 30 days before hitting the limit. You can upgrade in one tap — your data and settings are fully preserved.',
      },
    ],
    trustItems: [
      { icon: '🔒', label: '30-Day Money-Back Guarantee', sub: 'On all paid plans, no questions asked.' },
      { icon: '🛡️', label: 'SOC-2 Compliant Infrastructure', sub: 'Your data is encrypted and secure.' },
      { icon: '🇮🇳', label: 'Data Stored in India', sub: 'Compliant with Indian data protection laws.' },
      { icon: '📞', label: 'Real Humans in Support', sub: 'Phone + WhatsApp + email.' },
    ],
    comparisonRows: [
      ['Unit limit', '50', '200', '500', 'Unlimited'],
      ['Visitor Management', '✅', '✅', '✅', '✅'],
      ['Notice Board', '✅', '✅', '✅', '✅'],
      ['Basic Maintenance', '✅', '✅', '✅', '✅'],
      ['Community Help', '✅', '✅', '✅', '✅'],
      ['Issues & Complaints', '❌', '✅', '✅', '✅'],
      ['Events & Polls', '❌', '✅', '✅', '✅'],
      ['Parking Management', '❌', '✅', '✅', '✅'],
      ['Amenity Booking', '❌', '❌', '✅', '✅'],
      ['Advanced Analytics', '❌', '❌', '✅', '✅'],
      ['API Access', '❌', '❌', '✅', '✅'],
      ['Custom Branding', '❌', '❌', '✅', '✅'],
      ['White-label App', '❌', '❌', '❌', '✅'],
      ['Dedicated Server', '❌', '❌', '❌', '✅'],
      ['SLA Guarantee', '❌', '❌', '❌', '✅'],
      ['Admin accounts', '1', '3', 'Unlimited', 'Unlimited'],
      ['6-language UI', '✅', '✅', '✅', '✅'],
      ['Support', 'Community', 'Email', 'Phone + Email', 'Dedicated manager'],
    ],
  },
  hi: {
    plans: [
      {
        name: 'फ्री',
        price: { monthly: 0, annual: 0 },
        units: '50 यूनिट्स तक',
        badge: null,
        color: 'border-gray-200',
        ctaKey: 'get_started',
        ctaStyle: 'border border-navy text-navy hover:bg-navy hover:text-white',
        features: [
          '✅ विज़िटर प्रबंधन (सभी 4 फ्लो)',
          '✅ नोटिस बोर्ड',
          '✅ कम्युनिटी हेल्प',
          '✅ बेसिक मेंटेनेंस बिलिंग',
          '✅ 1 एडमिन अकाउंट',
          '✅ पुश नोटिफिकेशन',
          '✅ 6 भारतीय भाषा UI',
          '❌ issues और complaints',
          '❌ इवेंट्स और पोल्स',
          '❌ पार्किंग प्रबंधन',
        ],
      },
      {
        name: 'स्टैंडर्ड',
        price: { monthly: 2999, annual: 2499 },
        units: '200 यूनिट्स तक',
        badge: 'सबसे लोकप्रिय',
        color: 'border-teal ring-2 ring-teal',
        ctaKey: 'start_trial',
        ctaStyle: 'bg-teal text-white hover:bg-teal/90',
        features: [
          '✅ फ्री में सब',
          '✅ issues और complaints',
          '✅ इवेंट्स और पोल्स',
          '✅ पार्किंग प्रबंधन',
          '✅ 3 कमेटी रोल अकाउंट्स',
          '✅ ईमेल नोटिफिकेशन',
          '✅ पेमेंट डिफॉल्टर रिपोर्ट्स',
          '✅ प्रायोरिटी ईमेल सपोर्ट',
          '❌ एमेंटी बुकिंग',
          '❌ एडवांस्ड एनालिटिक्स',
        ],
      },
      {
        name: 'प्रो',
        price: { monthly: 5999, annual: 4999 },
        units: '500 यूनिट्स तक',
        badge: null,
        color: 'border-gray-200',
        ctaKey: 'start_trial',
        ctaStyle: 'bg-navy text-white hover:bg-navy/90',
        features: [
          '✅ स्टैंडर्ड में सब',
          '✅ एमेंटी बुकिंग',
          '✅ एडवांस्ड एनालिटिक्स डैशबोर्ड',
          '✅ प्रायोरिटी सपोर्ट (फोन + ईमेल)',
          '✅ अनलिमिटेड कमेटी मेंबर',
          '✅ कस्टम ब्रांडिंग',
          '✅ API एक्सेस',
          '✅ ऑडिट लॉग',
          '✅ कस्टम नोटिफिकेशन टेम्पलेट्स',
          '✅ मल्टी-सोसायटी एडमिन',
        ],
      },
      {
        name: 'एंटरप्राइज़',
        price: { monthly: null, annual: null },
        units: '500+ यूनिट्स',
        badge: null,
        color: 'border-gray-200',
        ctaKey: 'contact_sales',
        ctaStyle: 'border border-navy text-navy hover:bg-navy hover:text-white',
        features: [
          '✅ प्रो में सब',
          '✅ डेडिकेटेड सर्वर इंफ्रास्ट्रक्चर',
          '✅ white-label ऐप',
          '✅ SLA गारंटी (99.9% अपटाइम)',
          '✅ ऑनबोर्डिंग मैनेजर',
          '✅ कस्टम इंटीग्रेशन',
          '✅ VAPT सुरक्षा ऑडिट',
          '✅ कस्टम पेमेंट गेटवे',
          '✅ ऑन-साइट ट्रेनिंग',
          '✅ त्रैमासिक रिव्यू',
        ],
      },
    ],
    faqItems: [
      {
        q: 'क्या Free प्लान वास्तव में हमेशा के लिए मुफ्त है?',
        a: 'हाँ। Free प्लान की कोई समाप्ति तिथि नहीं और कोई क्रेडिट कार्ड नहीं चाहिए। आपको 50 यूनिट्स तक विज़िटर प्रबंधन, नोटिस बोर्ड, कम्युनिटी हेल्प, और बेसिक मेंटेनेंस मिलता है — स्थायी रूप से मुफ्त।',
      },
      {
        q: 'क्या मैं महीने के बीच में अपग्रेड या डाउग्रेड कर सकता हूँ?',
        a: 'हाँ, आप किसी भी समय अपग्रेड कर सकते हैं और नई सुविधाएँ तुरंत उपलब्ध हो जाती हैं। डाउग्रेड आपकी वर्तमान बिलिंग साइकिल के अंत में लागू होते हैं। डाउग्रेड करते समय आपका डेटा कभी नहीं खोता।',
      },
      {
        q: 'क्या आप प्रति यूनिट / प्रति फ्लैट शुल्क लेते हैं?',
        a: '200 यूनिट्स से कम पर कोई प्रति-यूनिट मूल्य नहीं है। Standard 200 यूनिट्स तक किसी भी सोसायटी के लिए ₹2,999/माह के flat शुल्क पर आता है। Pro 500 यूनिट्स तक कवर करता है।',
      },
      {
        q: 'आप कौन-सी पेमेंट विधियाँ स्वीकार करते हैं?',
        a: 'हम UPI (Google Pay, PhonePe, Paytm), सभी प्रमुख क्रेडिट/डेबिट कार्ड, और वार्षिक योजनाओं के लिए NEFT/RTGS स्वीकार करते हैं। Enterprise के लिए इनवॉइस बिलिंग उपलब्ध है।',
      },
      {
        q: 'क्या कोई अनुबंध या लॉक-इन अवधि है?',
        a: 'मासिक योजनाओं पर कोई लॉक-इन नहीं है। वार्षिक योजनाएँ 2 महीने मुफ्त देती हैं और साल में एक बार बिल की जाती हैं। आप सभी पेयड योजनाओं पर 30-दिन की money-back guarantee के साथ कभी भी कैंसिल कर सकते हैं।',
      },
      {
        q: 'अगर मेरी सोसायटी यूनिट सीमा से आगे बढ़ जाए तो क्या होगा?',
        a: 'सीमा तक पहुँचने से 30 दिन पहले आपको in-app notification मिलेगा। आप एक टैप से अपग्रेड कर सकते हैं — आपका डेटा और सेटिंग्स पूरी तरह सुरक्षित रहती हैं।',
      },
    ],
    trustItems: [
      { icon: '🔒', label: '30-दिन की मनी-बैक गारंटी', sub: 'सभी पेयड प्लान पर, कोई सवाल नहीं।' },
      { icon: '🛡️', label: 'SOC-2 अनुकूल इंफ्रास्ट्रक्चर', sub: 'आपका डेटा एन्क्रिप्टेड और सुरक्षित है।' },
      { icon: '🇮🇳', label: 'डेटा भारत में संग्रहीत', sub: 'भारतीय डेटा सुरक्षा कानूनों का पालन।' },
      { icon: '📞', label: 'सपोर्ट में असली इंसान', sub: 'फोन + WhatsApp + ईमेल।' },
    ],
    comparisonRows: [
      ['यूनिट सीमा', '50', '200', '500', 'असीमित'],
      ['विज़िटर प्रबंधन', '✅', '✅', '✅', '✅'],
      ['नोटिस बोर्ड', '✅', '✅', '✅', '✅'],
      ['बेसिक मेंटेनेंस', '✅', '✅', '✅', '✅'],
      ['कम्युनिटी हेल्प', '✅', '✅', '✅', '✅'],
      ['Issues & Complaints', '❌', '✅', '✅', '✅'],
      ['इवेंट्स & पोल्स', '❌', '✅', '✅', '✅'],
      ['पार्किंग प्रबंधन', '❌', '✅', '✅', '✅'],
      ['एमेंटी बुकिंग', '❌', '❌', '✅', '✅'],
      ['एडवांस्ड एनालिटिक्स', '❌', '❌', '✅', '✅'],
      ['API एक्सेस', '❌', '❌', '✅', '✅'],
      ['कस्टम ब्रांडिंग', '❌', '❌', '✅', '✅'],
      ['White-label ऐप', '❌', '❌', '❌', '✅'],
      ['डेडिकेटेड सर्वर', '❌', '❌', '❌', '✅'],
      ['SLA गारंटी', '❌', '❌', '❌', '✅'],
      ['एडमिन अकाउंट्स', '1', '3', 'अनलिमिटेड', 'अनलिमिटेड'],
      ['6-भाषा UI', '✅', '✅', '✅', '✅'],
      ['सपोर्ट', 'कम्युनिटी', 'ईमेल', 'फोन + ईमेल', 'डेडिकेटेड मैनेजर'],
    ],
  },
};

export function getPricingContent(locale: Locale): PricingContent {
  return (content[locale] ?? content.en) as PricingContent;
}
