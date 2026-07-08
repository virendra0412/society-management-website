// lib/i18n/content/modulesContent.ts
// Locale-aware modules content for the features overview page.

import type { Locale } from '../translations';

export interface FeatureModuleItem {
  icon: string;
  title: string;
  href: string;
  tag: string;
  tagColor: string;
  tier: string;
  tierColor: string;
  category: 'Security' | 'Finance' | 'Community' | 'Facilities' | 'Admin';
  desc: string;
  highlights: string[];
}

export interface ModulesPageContent {
  heroBadge: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroSub: string;
  tierLabels: string[];
  modules: FeatureModuleItem[];
}

const content: Partial<Record<Locale, ModulesPageContent>> = {
  en: {
    heroBadge: '22 modules · one platform',
    heroTitle: 'Everything your society needs.',
    heroTitleAccent: 'Nothing it does not.',
    heroSub: 'From visitor gate entry to maintenance bills — every feature built for Indian residential communities. Modular pricing means you only pay for what you use.',
    tierLabels: ['Free', 'Standard', 'Pro', 'All Plans'],
    modules: [
      { icon: '🚪', title: 'Visitor Management', href: '/features/visitor-management', tag: 'Most loved', tagColor: 'bg-green/10 text-green', tier: 'Free', tierColor: 'text-green', category: 'Security', desc: 'OTP-based gate entry, pre-approved visitor passes, trusted visitor list for maids and cooks, full chronological gate log with photos.', highlights: ['OTP entry flow', 'Pre-approved passes', 'Trusted visitors (maids, cooks)', 'Guard mobile app', 'Full gate log'] },
      { icon: '💸', title: 'Maintenance & Billing', href: '/features/maintenance', tag: 'Free tier', tagColor: 'bg-teal/10 text-teal', tier: 'Free', tierColor: 'text-green', category: 'Finance', desc: 'Auto-generate monthly bills, send UPI payment links to residents, track defaulters, and issue digital receipts instantly.', highlights: ['Auto bill generation', 'UPI payment links', 'Defaulter dashboard', 'Digital receipts', 'Payment reminders'] },
      { icon: '📢', title: 'Notice Board', href: '/features/notices', tag: '', tagColor: '', tier: 'Free', tierColor: 'text-green', category: 'Community', desc: 'Post pinned notices with push notifications, category tags (urgent, water, electricity, event), and read-receipt confirmation.', highlights: ['Push notifications', 'Category tags', 'Pin important notices', 'Read receipts', 'Scheduled notices'] },
      { icon: '🛠️', title: 'Issues & Complaints', href: '/features/issues', tag: '', tagColor: '', tier: 'Standard', tierColor: 'text-teal', category: 'Admin', desc: 'Residents raise complaints with photos. Committee assigns to vendors. Everyone tracks status from open to closed with timestamps.', highlights: ['Photo attachments', 'Vendor assignment', 'Status tracking', 'Resolution timeline', 'Closure photos'] },
      { icon: '🎉', title: 'Events & Polls', href: '/features/events', tag: '', tagColor: '', tier: 'Standard', tierColor: 'text-teal', category: 'Community', desc: 'Create society events with RSVP, collect poll votes, share photo galleries after events, and export to calendar.', highlights: ['RSVP management', 'Community polls', 'Photo galleries', 'Calendar export', 'Attendance tracking'] },
      { icon: '🏊', title: 'Amenity Booking', href: '/features/amenities', tag: 'Pro', tagColor: 'bg-navy/10 text-navy', tier: 'Pro', tierColor: 'text-navy', category: 'Facilities', desc: 'Residents book clubhouse, gym, rooftop, or pool with time slots. Committee approves, collects deposits, manages conflicts.', highlights: ['Time slot booking', 'Deposit collection', 'Committee approval', 'Conflict prevention', 'Booking history'] },
      { icon: '🤝', title: 'Community Help', href: '/features/community-help', tag: '', tagColor: '', tier: 'Free', tierColor: 'text-green', category: 'Community', desc: 'Neighbour-to-neighbour service marketplace. Residents offer and request help — from tutoring to tool lending.', highlights: ['Service listings', 'Request & offer', 'Rating system', 'In-app chat', 'Category browse'] },
      { icon: '🅿️', title: 'Parking Management', href: '/features/parking', tag: '', tagColor: '', tier: 'Standard', tierColor: 'text-teal', category: 'Facilities', desc: 'Maintain a slot registry, issue guest parking permits, manage two-wheeler and four-wheeler records per flat.', highlights: ['Slot registry', 'Guest permits', 'Vehicle records', 'Permit expiry alerts', 'Flat-wise view'] },
      { icon: '🌐', title: 'Multilingual UI', href: '/features', tag: 'Industry first', tagColor: 'bg-amber/10 text-amber', tier: 'All plans', tierColor: 'text-amber', category: 'Admin', desc: 'Full UI in Hindi, Gujarati, Tamil, Marathi, Punjabi, and English — every resident can use the app in their language.', highlights: ['6 Indian languages', 'Per-user preference', 'Auto-detect option', 'RTL support planned', 'Secretary can set default'] },
      { icon: '📊', title: 'Analytics & Reports', href: '/features', tag: '', tagColor: '', tier: 'Pro', tierColor: 'text-navy', category: 'Admin', desc: 'Society health dashboard — maintenance collection rate, visitor trends, complaint resolution time, amenity utilisation.', highlights: ['Collection rate chart', 'Defaulter trend', 'Complaint heatmap', 'Amenity utilisation', 'Exportable CSV'] },
      { icon: '💬', title: 'Resident Directory', href: '/features', tag: '', tagColor: '', tier: 'Free', tierColor: 'text-green', category: 'Community', desc: 'Verified resident list with flat numbers, family members, vehicle details, and emergency contacts — all in one searchable directory.', highlights: ['Flat-wise view', 'Family members', 'Vehicle details', 'Emergency contacts', 'Role-based access'] },
      { icon: '🔔', title: 'Notifications Engine', href: '/features', tag: '', tagColor: '', tier: 'All plans', tierColor: 'text-amber', category: 'Security', desc: 'Push, SMS, and WhatsApp notifications for every event — visitor arrival, payment due, notice posted, complaint updated.', highlights: ['Push notifications', 'SMS fallback', 'WhatsApp alerts', 'Per-user preferences', 'Do not disturb hours'] },
    ],
  },
  hi: {
    heroBadge: '22 मॉड्यूल · एक प्लेटफॉर्म',
    heroTitle: 'हर चीज़ जो आपकी सोसायटी को चाहिए.',
    heroTitleAccent: 'और जो चाहिए नहीं, वह नहीं.',
    heroSub: 'विज़िटर गेट एंट्री से लेकर मेंटेनेंस बिल तक — हर फीचर भारतीय रेजिडेंशियल कम्युनिटीज़ के लिए बनाया गया है। मॉड्यूलर प्राइसिंग का मतलब है कि आप सिर्फ वही भुगतान करते हैं जो आप इस्तेमाल करते हैं।',
    tierLabels: ['फ्री', 'स्टैंडर्ड', 'प्रो', 'सभी प्लान'],
    modules: [
      { icon: '🚪', title: 'विज़िटर प्रबंधन', href: '/features/visitor-management', tag: 'सबसे लोकप्रिय', tagColor: 'bg-green/10 text-green', tier: 'फ्री', tierColor: 'text-green', category: 'Security', desc: 'OTP-आधारित गेट एंट्री, पहले से अनुमोदित विज़िटर पास, नौकरों और रसोइयों के लिए trusted visitor सूची, फोटो सहित पूरी chronological गेट लॉग।', highlights: ['OTP एंट्री फ्लो', 'पहले से अनुमोदित पास', 'Trusted विज़िटर (नौकर, रसोइया)', 'गार्ड मोबाइल ऐप', 'पूरी गेट लॉग'] },
      { icon: '💸', title: 'मेंटेनेंस और बिलिंग', href: '/features/maintenance', tag: 'फ्री टियर', tagColor: 'bg-teal/10 text-teal', tier: 'फ्री', tierColor: 'text-green', category: 'Finance', desc: 'मासिक बिल अपने आप बनाएं, रेजिडेंट्स को UPI पेमेंट लिंक भेजें, डिफॉल्टर्स ट्रैक करें और डिजिटल रसीद तुरंत जारी करें।', highlights: ['ऑटो बिल जनरेशन', 'UPI पेमेंट लिंक', 'डिफॉल्टर डैशबोर्ड', 'डिजिटल रसीद', 'पेमेंट रिमाइंडर'] },
      { icon: '📢', title: 'नोटिस बोर्ड', href: '/features/notices', tag: '', tagColor: '', tier: 'फ्री', tierColor: 'text-green', category: 'Community', desc: 'पिन किए हुए नोटिस पुश नोटिफिकेशन, कैटेगरी टैग (तत्काल, पानी, बिजली, इवेंट) और read-receipt पुष्टिकरण के साथ पोस्ट करें।', highlights: ['पुश नोटिफिकेशन', 'कैटेगरी टैग', 'महत्वपूर्ण नोटिस पिन करें', 'रीड रसीट', 'शेड्यूल नोटिस'] },
      { icon: '🛠️', title: 'इश्यूज़ और कंप्लेंट्स', href: '/features/issues', tag: '', tagColor: '', tier: 'स्टैंडर्ड', tierColor: 'text-teal', category: 'Admin', desc: 'रेजिडेंट्स फोटो के साथ कंप्लेंट्स दर्ज करते हैं. कमेटी वेंडर्स को असाइन करती है. सब स्थिति को खुला से बंद तक टाइमस्टैम्प के साथ ट्रैक करते हैं।', highlights: ['फोटो अटैचमेंट', 'वेंडर असाइनमेंट', 'स्टेटस ट्रैकिंग', 'रिज़ॉल्यूशन टाइमलाइन', 'क्लोज़र फोटो'] },
      { icon: '🎉', title: 'इवेंट्स और पोल्स', href: '/features/events', tag: '', tagColor: '', tier: 'स्टैंडर्ड', tierColor: 'text-teal', category: 'Community', desc: 'सोसायटी इवेंट बनाएं, RSVP लें, इवेंट के बाद फोटो गैलरी शेयर करें, और कैलेंडर में export करें।', highlights: ['RSVP प्रबंधन', 'कम्युनिटी पोल्स', 'फोटो गैलरी', 'कैलेंडर export', 'उपस्थिती ट्रैकिंग'] },
      { icon: '🏊', title: 'एमेंटी बुकिंग', href: '/features/amenities', tag: 'प्रो', tagColor: 'bg-navy/10 text-navy', tier: 'प्रो', tierColor: 'text-navy', category: 'Facilities', desc: 'रेजिडेंट्स क्लबहाउस, जिम, रूफटॉप या पूल को टाइम स्लॉट के साथ बुक करते हैं. कमेटी Approve करती है, डिपॉजिट वसूलती है, Konflikt संभालती है।', highlights: ['टाइम स्लॉट बुकिंग', 'डिपॉजिट कलेक्शन', 'कमेटी approval', 'कॉनफ्लिक्ट प्रिवेंशन', 'बुकिंग हिस्ट्री'] },
      { icon: '🤝', title: 'कम्युनिटी हेल्प', href: '/features/community-help', tag: '', tagColor: '', tier: 'फ्री', tierColor: 'text-green', category: 'Community', desc: 'आस-पड़ोस से आस-पड़ोस तक सेवा बाजार. रेजिडेंट्स मदद देते और मांगते हैं — ट्यूशन से लेकर टूल उधार तक।', highlights: ['सर्विस लिस्टिंग', 'अनुरोध और पेशकश', 'रेटिंग सिस्टम', 'इन-ऐप चैट', 'कैटेगरी ब्राउज़'] },
      { icon: '🅿️', title: 'पार्किंग प्रबंधन', href: '/features/parking', tag: '', tagColor: '', tier: 'स्टैंडर्ड', tierColor: 'text-teal', category: 'Facilities', desc: 'स्लॉट रजिस्टर रखें, गेस्ट पार्किंग परमिट दें, फ्लैट के हिसाब से दो-व्हीलर और फोर-व्हीलर रिकॉर्ड मैनेज करें।', highlights: ['स्लॉट रजिस्टर', 'गेस्ट परमिट', 'वाहन रिकॉर्ड', 'परमिट एक्सपायरी अलर्ट', 'फ्लैट-वाइज व्यू'] },
      { icon: '🌐', title: 'मल्टीलिंगुअल UI', href: '/features', tag: 'इंडस्ट्री फर्स्ट', tagColor: 'bg-amber/10 text-amber', tier: 'सभी प्लान', tierColor: 'text-amber', category: 'Admin', desc: 'पूरी UI हिंदी, गुजराती, तमिल, मराठी, पंजाबी और अंग्रेज़ी में — हर रेजिडेंट अपने भाषा में ऐप इस्तेमाल कर सकता है।', highlights: ['6 भारतीय भाषाएँ', 'प्रति-यूजर पसंद', 'ऑटो-डिटेक्ट विकल्प', 'RTL सपोर्ट योजना में', 'सचिव डिफॉल्ट सेट कर सकते हैं'] },
      { icon: '📊', title: 'एनालिटिक्स और रिपोर्ट्स', href: '/features', tag: '', tagColor: '', tier: 'प्रो', tierColor: 'text-navy', category: 'Admin', desc: 'सोसायटी हेल्थ डैशबोर्ड — मेंटेनेंस कलेक्शन रेट, विज़िटर ट्रेंड, कंप्लेंट रिज़ॉल्यूशन टाइम, एमेंटी उपयोग।', highlights: ['कलेक्शन रेट चार्ट', 'डिफॉल्टर ट्रेंड', 'कंप्लेंट हीटमैप', 'एमेंटी उपयोग', 'एक्सपोर्टेबल CSV'] },
      { icon: '💬', title: 'रेजिडेंट डायरेक्टरी', href: '/features', tag: '', tagColor: '', tier: 'फ्री', tierColor: 'text-green', category: 'Community', desc: 'वेरिफाइड रेजिडेंट सूची जिसमें फ्लैट नंबर, परिवार के सदस्य, वाहन विवरण और इमरजेंसी कॉन्टैक्ट्स — सब एक searchable डायरेक्टरी में।', highlights: ['फ्लैट-वाइज व्यू', 'परिवार के सदस्य', 'वाहन विवरण', 'इमरजेंसी कॉन्टैक्ट्स', 'रोल-बेस्ड एक्सेस'] },
      { icon: '🔔', title: 'नोटिफिकेशन इंजन', href: '/features', tag: '', tagColor: '', tier: 'सभी प्लान', tierColor: 'text-amber', category: 'Security', desc: 'हर इवेंट के लिए पुश, SMS, और WhatsApp नोटिफिकेशन — विज़िटर आगमन, पेमेंट ड्यू, नोटिस पोस्ट, कंप्लेंट अपडेट।', highlights: ['पुश नोटिफिकेशन', 'SMS fallback', 'WhatsApp अलर्ट', 'प्रति-यूजर प्राथमिकताएँ', 'do not disturb hours'] },
    ],
  },
};

export function getModulesContent(locale: Locale): ModulesPageContent {
  return (content[locale] ?? content.en) as ModulesPageContent;
}
