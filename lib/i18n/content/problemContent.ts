// lib/i18n/content/problemContent.ts
// Locale-aware content for the homepage "Society management is broken" section (3 problem cards).

import type { Locale } from '../translations';

export interface ProblemItem {
  id: string;
  title: string;
  desc: string;
  fix: string;
}

export interface ProblemContent {
  problems: ProblemItem[];
}

const content: Partial<Record<Locale, ProblemContent>> = {
  en: {
    problems: [
      { id: 'visitor', title: 'Security chaos at the gate', desc: 'Guards with paper registers, residents complaining about unknown visitors, no OTP flow, no accountability.', fix: 'Visitor Management with OTP entry, pre-approved passes, and a full log.' },
      { id: 'maintenance', title: 'WhatsApp maintenance fights', desc: '300 people in one group, fee disputes, no receipts, chasing defaulters every month manually.', fix: 'Automated bills, UPI payment links, defaulter list at a glance.' },
      { id: 'issues', title: 'Complaints go nowhere', desc: 'Issues raised on WhatsApp get buried. No tracking, no resolution timeline, no accountability.', fix: 'Complaint ticketing with assigned owners, status updates, and closure photos.' },
    ],
  },
  hi: {
    problems: [
      { id: 'visitor', title: 'गेट पर सिक्योरिटी की अफरा-तफरी', desc: 'गार्ड पेपर रजिस्टर के साथ, रेजिडेंट्स अनजान विज़िटर्स की शिकायत करते हैं, कोई OTP फ्लो नहीं, कोई जवाबदेही नहीं।', fix: 'OTP एंट्री, पहले से स्वीकृत पास, और पूरे लॉग के साथ विज़िटर मैनेजमेंट।' },
      { id: 'maintenance', title: 'WhatsApp मेंटेनेंस झगड़े', desc: 'एक ग्रुप में 300 लोग, फीस विवाद, कोई रसीद नहीं, हर महीने मैन्युअली डिफॉल्टर्स के पीछे भागना।', fix: 'ऑटोमेटेड बिल, UPI पेमेंट लिंक, एक नज़र में डिफॉल्टर लिस्ट।' },
      { id: 'issues', title: 'शिकायतें कहीं नहीं पहुंचतीं', desc: 'WhatsApp पर उठाए गए मुद्दे दब जाते हैं। कोई ट्रैकिंग नहीं, कोई resolution timeline नहीं, कोई जवाबदेही नहीं।', fix: 'सौंपे गए owners, स्टेटस अपडेट, और closure फोटो के साथ complaint ticketing।' },
    ],
  },
  gu: {
    problems: [
      { id: 'visitor', title: 'ગેટ પર સિક્યુરિટીની અંધાધૂંધી', desc: 'ગાર્ડ કાગળના રજિસ્ટર સાથે, રેસિડન્ટ્સ અજાણ્યા વિઝિટર્સ વિશે ફરિયાદ કરે છે, કોઈ OTP ફ્લો નથી, કોઈ જવાબદારી નથી.', fix: 'OTP એન્ટ્રી, પહેલેથી-મંજૂર પાસ, અને સંપૂર્ણ લોગ સાથે વિઝિટર મેનેજમેન્ટ.' },
      { id: 'maintenance', title: 'WhatsApp મેન્ટેનન્સ ઝઘડા', desc: 'એક ગ્રુપમાં 300 લોકો, ફી વિવાદો, કોઈ રસીદ નહીં, દર મહિને મેન્યુઅલી ડિફોલ્ટર્સ પાછળ ભાગવું.', fix: 'ઓટોમેટેડ બિલ, UPI પેમેન્ટ લિંક, એક નજરમાં ડિફોલ્ટર લિસ્ટ.' },
      { id: 'issues', title: 'ફરિયાદો ક્યાંય પહોંચતી નથી', desc: 'WhatsApp પર ઉઠાવેલા મુદ્દા દબાઈ જાય છે. કોઈ ટ્રેકિંગ નહીં, કોઈ resolution timeline નહીં, કોઈ જવાબદારી નહીં.', fix: 'સોંપેલ owners, સ્ટેટસ અપડેટ, અને closure ફોટા સાથે complaint ticketing.' },
    ],
  },
  ta: {
    problems: [
      { id: 'visitor', title: 'கேட்டில் பாதுகாப்பு குழப்பம்', desc: 'காகித பதிவேடுகளுடன் காவலர்கள், அறியப்படாத விசிட்டர்கள் பற்றி புகார் தெரிவிக்கும் குடியிருப்பாளர்கள், OTP ஃப்ளோ இல்லை, பொறுப்புணர்வு இல்லை.', fix: 'OTP நுழைவு, முன் அனுமதிக்கப்பட்ட பாஸ்கள், மற்றும் முழு லாக் கொண்ட விசிட்டர் மேலாண்மை.' },
      { id: 'maintenance', title: 'WhatsApp மெயின்டெனன்ஸ் சண்டைகள்', desc: 'ஒரு குழுவில் 300 பேர், கட்டண தகராறுகள், ரசீது இல்லை, ஒவ்வொரு மாதமும் கைமுறையாக டிஃபால்டர்களைத் துரத்துதல்.', fix: 'தானியங்கு பில்கள், UPI பணம் செலுத்தும் இணைப்புகள், ஒரே பார்வையில் டிஃபால்டர் பட்டியல்.' },
      { id: 'issues', title: 'புகார்கள் எங்கும் போவதில்லை', desc: 'WhatsApp-இல் எழுப்பப்படும் பிரச்சினைகள் புதைந்துவிடுகின்றன. கண்காணிப்பு இல்லை, தீர்வு காலவரிசை இல்லை, பொறுப்புணர்வு இல்லை.', fix: 'நியமிக்கப்பட்ட உரிமையாளர்கள், நிலை புதுப்பிப்புகள், மற்றும் முடிவு புகைப்படங்களுடன் Complaint ticketing.' },
    ],
  },
  mr: {
    problems: [
      { id: 'visitor', title: 'गेटवर सिक्युरिटीचा गोंधळ', desc: 'गार्ड कागद रजिस्टरसह, रहिवासी अनोळखी व्हिजिटर्सबद्दल तक्रार करतात, कोणताही OTP फ्लो नाही, कोणतीही जबाबदारी नाही.', fix: 'OTP एंट्री, आधीच मंजूर पास, आणि संपूर्ण लॉगसह व्हिजिटर मॅनेजमेंट.' },
      { id: 'maintenance', title: 'WhatsApp मेंटेनन्स भांडणे', desc: 'एका ग्रुपमध्ये 300 लोक, फी वाद, कोणतीही पावती नाही, दर महिन्याला मॅन्युअली डिफॉल्टर्सच्या मागे धावणे.', fix: 'ऑटोमेटेड बिल, UPI पेमेंट लिंक, एका दृष्टीक्षेपात डिफॉल्टर यादी.' },
      { id: 'issues', title: 'तक्रारी कुठेच पोहोचत नाहीत', desc: 'WhatsApp वर मांडलेले मुद्दे दबले जातात. कोणताही ट्रॅकिंग नाही, कोणतीही resolution timeline नाही, कोणतीही जबाबदारी नाही.', fix: 'नेमलेले owners, स्टेटस अपडेट्स, आणि closure फोटोंसह complaint ticketing.' },
    ],
  },
  pa: {
    problems: [
      { id: 'visitor', title: 'ਗੇਟ ’ਤੇ ਸਿਕਿਓਰਿਟੀ ਦੀ ਹਫੜਾ-ਦਫੜੀ', desc: 'ਗਾਰਡ ਕਾਗਜ਼ੀ ਰਜਿਸਟਰਾਂ ਨਾਲ, ਨਿਵਾਸੀ ਅਣਜਾਣ ਵਿਜ਼ਿਟਰਾਂ ਬਾਰੇ ਸ਼ਿਕਾਇਤ ਕਰਦੇ ਹਨ, ਕੋਈ OTP ਫਲੋ ਨਹੀਂ, ਕੋਈ ਜਵਾਬਦੇਹੀ ਨਹੀਂ।', fix: 'OTP ਐਂਟਰੀ, ਪਹਿਲਾਂ ਤੋਂ ਮਨਜ਼ੂਰ ਪਾਸ, ਅਤੇ ਪੂਰੇ ਲੌਗ ਨਾਲ ਵਿਜ਼ਿਟਰ ਮੈਨੇਜਮੈਂਟ।' },
      { id: 'maintenance', title: 'WhatsApp ਮੇਂਟੇਨੈਂਸ ਝਗੜੇ', desc: 'ਇੱਕ ਗਰੁੱਪ ਵਿੱਚ 300 ਲੋਕ, ਫੀਸ ਵਿਵਾਦ, ਕੋਈ ਰਸੀਦ ਨਹੀਂ, ਹਰ ਮਹੀਨੇ ਮੈਨੁਅਲੀ ਡਿਫਾਲਟਰਾਂ ਦੇ ਪਿੱਛੇ ਭੱਜਣਾ।', fix: 'ਆਟੋਮੇਟਿਡ ਬਿੱਲ, UPI ਭੁਗਤਾਨ ਲਿੰਕ, ਇੱਕ ਨਜ਼ਰ ਵਿੱਚ ਡਿਫਾਲਟਰ ਸੂਚੀ।' },
      { id: 'issues', title: 'ਸ਼ਿਕਾਇਤਾਂ ਕਿਤੇ ਨਹੀਂ ਪਹੁੰਚਦੀਆਂ', desc: 'WhatsApp ’ਤੇ ਉਠਾਏ ਮੁੱਦੇ ਦੱਬ ਜਾਂਦੇ ਹਨ। ਕੋਈ ਟ੍ਰੈਕਿੰਗ ਨਹੀਂ, ਕੋਈ resolution timeline ਨਹੀਂ, ਕੋਈ ਜਵਾਬਦੇਹੀ ਨਹੀਂ।', fix: 'ਸੌਂਪੇ ਗਏ owners, ਸਟੇਟਸ ਅੱਪਡੇਟ, ਅਤੇ closure ਫੋਟੋਆਂ ਨਾਲ complaint ticketing।' },
    ],
  },
};

export function getProblemContent(locale: Locale): ProblemContent {
  return (content[locale] ?? content.en) as ProblemContent;
}