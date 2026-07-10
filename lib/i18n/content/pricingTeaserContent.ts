// lib/i18n/content/pricingTeaserContent.ts
// Locale-aware content for the homepage pricing teaser (3 plan cards).

import type { Locale } from '../translations';

export interface PricingTeaserPlan {
  id: string;
  name: string;
  desc: string;
  features: string[];
}

export interface PricingTeaserContent {
  plans: PricingTeaserPlan[];
  mostPopular: string;
  needMoreUnits: string;
}

const content: Partial<Record<Locale, PricingTeaserContent>> = {
  en: {
    mostPopular: 'Most Popular',
    needMoreUnits: 'Need 500+ units?',
    plans: [
      { id: 'free', name: 'Free', desc: 'For societies up to 50 units', features: ['Visitor Management', 'Notice Board', 'Community Help', 'Basic Maintenance', '1 Admin'] },
      { id: 'standard', name: 'Standard', desc: 'For societies up to 200 units', features: ['Everything in Free', 'Issues & Complaints', 'Events & Polls', '3 Committee Roles', 'Email Notifications'] },
      { id: 'pro', name: 'Pro', desc: 'For societies up to 500 units', features: ['Everything in Standard', 'Amenity Booking', 'Advanced Analytics', 'Custom Branding', 'API Access'] },
    ],
  },
  hi: {
    mostPopular: 'सबसे लोकप्रिय',
    needMoreUnits: '500+ यूनिट्स चाहिए?',
    plans: [
      { id: 'free', name: 'फ्री', desc: '50 यूनिट्स तक की सोसायटियों के लिए', features: ['विज़िटर मैनेजमेंट', 'नोटिस बोर्ड', 'कम्युनिटी हेल्प', 'बेसिक मेंटेनेंस', '1 एडमिन'] },
      { id: 'standard', name: 'स्टैंडर्ड', desc: '200 यूनिट्स तक की सोसायटियों के लिए', features: ['फ्री में सब कुछ', 'Issues & Complaints', 'इवेंट्स और पोल्स', '3 कमेटी रोल', 'ईमेल नोटिफिकेशन'] },
      { id: 'pro', name: 'प्रो', desc: '500 यूनिट्स तक की सोसायटियों के लिए', features: ['स्टैंडर्ड में सब कुछ', 'एमेनिटी बुकिंग', 'एडवांस्ड एनालिटिक्स', 'कस्टम ब्रांडिंग', 'API एक्सेस'] },
    ],
  },
  gu: {
    mostPopular: 'સૌથી લોકપ્રિય',
    needMoreUnits: '500+ યુનિટ્સ જોઈએ છે?',
    plans: [
      { id: 'free', name: 'ફ્રી', desc: '50 યુનિટ્સ સુધીની સોસાયટીઓ માટે', features: ['વિઝિટર મેનેજમેન્ટ', 'નોટિસ બોર્ડ', 'કોમ્યુનિટી હેલ્પ', 'બેઝિક મેન્ટેનન્સ', '1 એડમિન'] },
      { id: 'standard', name: 'સ્ટાન્ડર્ડ', desc: '200 યુનિટ્સ સુધીની સોસાયટીઓ માટે', features: ['ફ્રીમાં બધું', 'Issues & Complaints', 'ઇવેન્ટ્સ અને પોલ્સ', '3 કમિટી રોલ', 'ઈમેલ નોટિફિકેશન'] },
      { id: 'pro', name: 'પ્રો', desc: '500 યુનિટ્સ સુધીની સોસાયટીઓ માટે', features: ['સ્ટાન્ડર્ડમાં બધું', 'એમેનિટી બુકિંગ', 'એડવાન્સ્ડ એનાલિટિક્સ', 'કસ્ટમ બ્રાન્ડિંગ', 'API એક્સેસ'] },
    ],
  },
  ta: {
    mostPopular: 'மிகவும் பிரபலமானது',
    needMoreUnits: '500+ யூனிட்கள் தேவையா?',
    plans: [
      { id: 'free', name: 'ஃப்ரீ', desc: '50 யூனிட்கள் வரையிலான சொசைட்டிகளுக்கு', features: ['விசிட்டர் மேலாண்மை', 'நோட்டீஸ் போர்டு', 'கம்யூனிட்டி ஹெல்ப்', 'அடிப்படை மெயின்டெனன்ஸ்', '1 அட்மின்'] },
      { id: 'standard', name: 'ஸ்டாண்டர்ட்', desc: '200 யூனிட்கள் வரையிலான சொசைட்டிகளுக்கு', features: ['ஃப்ரீயில் உள்ள அனைத்தும்', 'Issues & Complaints', 'இவென்ட்ஸ் & போல்ஸ்', '3 கமிட்டி ரோல்கள்', 'மின்னஞ்சல் அறிவிப்புகள்'] },
      { id: 'pro', name: 'ப்ரோ', desc: '500 யூனிட்கள் வரையிலான சொசைட்டிகளுக்கு', features: ['ஸ்டாண்டர்டில் உள்ள அனைத்தும்', 'அமெனிட்டி புக்கிங்', 'மேம்பட்ட அனலிட்டிக்ஸ்', 'கஸ்டம் பிராண்டிங்', 'API அணுகல்'] },
    ],
  },
  mr: {
    mostPopular: 'सर्वाधिक लोकप्रिय',
    needMoreUnits: '500+ युनिट्स हवे आहेत?',
    plans: [
      { id: 'free', name: 'फ्री', desc: '50 युनिट्सपर्यंतच्या सोसायट्यांसाठी', features: ['व्हिजिटर मॅनेजमेंट', 'नोटीस बोर्ड', 'कम्युनिटी हेल्प', 'बेसिक मेंटेनन्स', '1 अ‍ॅडमिन'] },
      { id: 'standard', name: 'स्टँडर्ड', desc: '200 युनिट्सपर्यंतच्या सोसायट्यांसाठी', features: ['फ्रीमधील सर्व काही', 'Issues & Complaints', 'इव्हेंट्स आणि पोल्स', '3 कमिटी रोल्स', 'ईमेल नोटिफिकेशन'] },
      { id: 'pro', name: 'प्रो', desc: '500 युनिट्सपर्यंतच्या सोसायट्यांसाठी', features: ['स्टँडर्डमधील सर्व काही', 'अ‍ॅमेनिटी बुकिंग', 'अ‍ॅडव्हान्स्ड अ‍ॅनालिटिक्स', 'कस्टम ब्रँडिंग', 'API अ‍ॅक्सेस'] },
    ],
  },
  pa: {
    mostPopular: 'ਸਭ ਤੋਂ ਪਸੰਦੀਦਾ',
    needMoreUnits: '500+ ਯੂਨਿਟ ਚਾਹੀਦੇ ਹਨ?',
    plans: [
      { id: 'free', name: 'ਫ੍ਰੀ', desc: '50 ਯੂਨਿਟਾਂ ਤੱਕ ਦੀਆਂ ਸੋਸਾਇਟੀਆਂ ਲਈ', features: ['ਵਿਜ਼ਿਟਰ ਮੈਨੇਜਮੈਂਟ', 'ਨੋਟਿਸ ਬੋਰਡ', 'ਕਮਿਊਨਿਟੀ ਹੈਲਪ', 'ਬੇਸਿਕ ਮੇਂਟੇਨੈਂਸ', '1 ਐਡਮਿਨ'] },
      { id: 'standard', name: 'ਸਟੈਂਡਰਡ', desc: '200 ਯੂਨਿਟਾਂ ਤੱਕ ਦੀਆਂ ਸੋਸਾਇਟੀਆਂ ਲਈ', features: ['ਫ੍ਰੀ ਵਿੱਚ ਸਭ ਕੁਝ', 'Issues & Complaints', 'ਇਵੈਂਟਸ ਅਤੇ ਪੋਲਸ', '3 ਕਮੇਟੀ ਰੋਲ', 'ਈਮੇਲ ਨੋਟੀਫਿਕੇਸ਼ਨ'] },
      { id: 'pro', name: 'ਪ੍ਰੋ', desc: '500 ਯੂਨਿਟਾਂ ਤੱਕ ਦੀਆਂ ਸੋਸਾਇਟੀਆਂ ਲਈ', features: ['ਸਟੈਂਡਰਡ ਵਿੱਚ ਸਭ ਕੁਝ', 'ਐਮੇਨਿਟੀ ਬੁਕਿੰਗ', 'ਐਡਵਾਂਸਡ ਐਨਾਲਿਟਿਕਸ', 'ਕਸਟਮ ਬ੍ਰਾਂਡਿੰਗ', 'API ਪਹੁੰਚ'] },
    ],
  },
};

export function getPricingTeaserContent(locale: Locale): PricingTeaserContent {
  return (content[locale] ?? content.en) as PricingTeaserContent;
}