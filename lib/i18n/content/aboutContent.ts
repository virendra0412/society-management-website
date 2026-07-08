// lib/i18n/content/aboutContent.ts
// Locale-aware content for the about page sections.

import type { Locale } from '../translations';

export interface AboutTimelineItem {
  year: string;
  title: string;
  desc: string;
}

export interface AboutValueItem {
  icon: string;
  title: string;
  desc: string;
}

export interface AboutTeamItem {
  name: string;
  title: string;
  emoji: string;
  bio: string;
}

export interface AboutStatsItem {
  num: string;
  label: string;
}

export interface AboutPageContent {
  timeline: AboutTimelineItem[];
  values: AboutValueItem[];
  team: AboutTeamItem[];
  stats: AboutStatsItem[];
}

const content: Partial<Record<Locale, AboutPageContent>> = {
  en: {
    timeline: [
      { year: '2022', title: 'The problem discovered', desc: 'Our founders lived in a gated society in Ahmedabad. The secretary was managing 180 units with WhatsApp groups and a paper register. A robbery happened because the gate log was missing for three days.' },
      { year: '2023 Q1', title: 'Research phase begins', desc: '18 months of conversations with 200+ RWA presidents across Mumbai, Pune, Bengaluru, Ahmedabad, and Chennai. Every pain point documented.' },
      { year: '2023 Q3', title: 'First prototype built', desc: 'A basic visitor management MVP tested with 12 pilot societies. Feedback was overwhelming — they wanted billing, notices, and more.' },
      { year: '2024 Q1', title: 'SocietyApp v1.0 launched', desc: '22 modules. Free tier with real visitor management. React Native apps for iOS and Android. Multilingual UI in 6 languages.' },
      { year: '2024', title: 'Growing rapidly', desc: '1,200+ societies onboarded. 85,000+ residents on the platform. MyGate secretaries switching for the free tier.' },
    ],
    values: [
      { icon: '🔍', title: 'Transparency', desc: 'Every rupee tracked. Every entry logged. Admins and residents always on the same page.' },
      { icon: '✨', title: 'Simplicity', desc: 'If a 55-year-old secretary cannot use it in 5 minutes, we have not done our job right.' },
      { icon: '🗣️', title: 'Respect for Local Language', desc: 'India has dozens of languages. We support 6 — and we are not done.' },
      { icon: '🔐', title: 'Privacy First', desc: 'Resident data is never sold. Society data stays within the society’s control.' },
    ],
    team: [
      { name: 'Arjun Mehta', title: 'Co-Founder & CEO', emoji: '👨‍💼', bio: 'Former RWA secretary. Built SocietyApp after managing his own society manually for 3 years.' },
      { name: 'Priya Nair', title: 'Co-Founder & CTO', emoji: '👩‍💻', bio: 'Ex-Flipkart senior engineer. Leads the React Native and backend engineering teams.' },
      { name: 'Vikram Shah', title: 'Head of Product', emoji: '👨‍🎨', bio: '10 years in B2B SaaS product. Obsessed with reducing time-to-value for first-time users.' },
    ],
    stats: [
      { num: '1,200+', label: 'Societies onboarded' },
      { num: '85,000+', label: 'Residents on platform' },
      { num: '22', label: 'Modules built' },
      { num: '6', label: 'Indian languages' },
    ],
  },
  hi: {
    timeline: [
      { year: '2022', title: 'समस्या की पहचान', desc: 'हमारे संस्थापक अहमदाबाद की एक गेटेड सोसायटी में रहते थे। सचिव 180 यूनिट्स का प्रबंधन WhatsApp ग्रुप और पेपर रजिस्टर से कर रहा था। गेट लॉग तीन दिनों से गायब होने की वजह से चोरी हो गई।' },
      { year: '2023 Q1', title: 'अनुसंधान चरण शुरू', desc: 'मुंबई, पुणे, बेंगलुरु, अहमदाबाद और चेन्नई में 200+ RWA अध्यक्षों के साथ 18 महीने की बातचीत। हर परेशानी दर्ज की गई।' },
      { year: '2023 Q3', title: 'पहला प्रोटोटाइप बना', desc: '12 पायलट सोसायटियों के साथ एक बेसिक वीज़िटर मैनेजमेंट MVP टेस्ट किया गया। प्रतिक्रिया बहुत अच्छी थी — उन्हें बिलिंग, नोटिस और बहुत कुछ चाहिए था।' },
      { year: '2024 Q1', title: 'SocietyApp v1.0 लॉन्च', desc: '22 मॉड्यूल। असली वीज़िटर मैनेजमेंट के साथ फ्री टियर। iOS और Android के लिए React Native ऐप। 6 भाषाओं में मल्टीलिंगुअल UI।' },
      { year: '2024', title: 'तेज़ी से बढ़ रहा है', desc: '1,200+ सोसायटियों का onboarding. 85,000+ रेजिडेंट्स प्लेटफॉर्म पर. MyGate के सचिव मुफ्त टियर के लिए बदल रहे हैं।' },
    ],
    values: [
      { icon: '🔍', title: 'पारदर्शिता', desc: 'हर रूपया ट्रैक किया जाता है. हर एंट्री लॉग की जाती है. एडमिन और रेजिडेंट्स हमेशा एक ही पृष्ठ पर होते हैं.' },
      { icon: '✨', title: 'सरलता', desc: 'अगर 55 साल का सचिव 5 मिनट में इसे इस्तेमाल नहीं कर सकता, तो हमने अपना काम ठीक से नहीं किया है.' },
      { icon: '🗣️', title: 'स्थानीय भाषा का सम्मान', desc: 'भारत में कई भाषाएँ हैं. हम 6 भाषाओं का समर्थन करते हैं — और हम रुकने वाले नहीं हैं.' },
      { icon: '🔐', title: 'गोपनीयता पहले', desc: 'रेजिडेंट डेटा कभी बेचा नहीं जाता. सोसायटी डेटा सोसायटी के नियंत्रण में रहता है.' },
    ],
    team: [
      { name: 'अर्जुन मेहता', title: 'संस्थापक एवं CEO', emoji: '👨‍💼', bio: 'पूर्व RWA सचिव. अपने अपनी सोसायटी का 3 साल तक मैन्युअली प्रबंधन करने के बाद SocietyApp बनाया।' },
      { name: 'प्रिया नायर', title: 'संस्थापक एवं CTO', emoji: '👩‍💻', bio: 'पूर्व Flipkart senior engineer. React Native और backend engineering टीमों का नेतृत्व करती हैं।' },
      { name: 'विक्रम शाह', title: 'हेड ऑफ प्रोडक्ट', emoji: '👨‍🎨', bio: 'B2B SaaS प्रोडक्ट में 10 साल. पहले-पहल उपयोगकर्ताओं के लिए time-to-value कम करने में obsesed हैं।' },
    ],
    stats: [
      { num: '1,200+', label: 'सोसायटियाँ जुड़ीं' },
      { num: '85,000+', label: 'प्लेटफ़ॉर्म पर रेजिडेंट्स' },
      { num: '22', label: 'बने हुए मॉड्यूल' },
      { num: '6', label: 'भारतीय भाषाएँ' },
    ],
  },
  gu: {
    timeline: [
      { year: '2022', title: 'સમસ્યાનું ખૂલવું', desc: 'અમારા સ્થાપકો અમદાવાદમાં ગેટેડ સોસાયટીમાં રહેતા હતા. સેક્રેટરી 180 યુનિટ્સનું WhatsApp ગ્રુપ અને પેપર રજિસ્ટરથી વ્યવસ્થાપન કરી રહ્યો હતો. ગેટ લોગ ત્રણ દિવસ માટે ગાયબ હોવાને કારણે ચોરી થઈ ગઈ.' },
      { year: '2023 Q1', title: 'રિસર્ચ સ્ટેજ શરૂ', desc: 'મુંબઈ, પુણે, બેંગલુરુ, અમદાવાદ અને ચેન્નైમાં 200+ RWA અધ્યક્ષો સાથે 18 મહિના સુધી વાતચીત. દરેક પેઇનપોઇન્ટનો દસ્તાવેજીकरण.' },
      { year: '2023 Q3', title: 'પ્રથમ પ્રોટોટાઈપ બનાવાયું', desc: '12 પાયલોટ સોસાયટીઓ સાથે એક આધારભૂત વીઝિટર મેનેજમેન્ટ MVP માપાયું. પ્રતિસાદ આકર્ષક હતું — તેમને બિલિંગ, નોટિસ અને વધુ જોઈએ હતું.' },
      { year: '2024 Q1', title: 'SocietyApp v1.0 લોન્ચ', desc: '22 મોડ્યૂલ. વાસ્તવિક વીઝિટર મેનેજમેન્ટ સાથે ફ્રી ટાયર. iOS અને Android માટે React Native એપ્લિકેશન્સ. 6 ભાષાઓમાં મલ્ટીલિંગ્વલ UI.' },
      { year: '2024', title: 'ઝડપી વૃદ્ધિ', desc: '1,200+ સોસાયટીઓ onboard. 85,000+ રેસિડેન્ટ્સ પ્લેટફોર્મ પર. MyGateના સેક્રેટરીઝ ફ્રી ટાયર માટે સ્વિચ કરી રહ્યા છે.' },
    ],
    values: [
      { icon: '🔍', title: 'પારદર્શિતા', desc: 'દર રુપિયા ટ્રૅક થાય છે. દરેક એન્ટ્રીનો લોગ થાય છે. એડમિન અને રેસિડેન્ટ્સ હંમેશા એક જ પેજ પર હોય છે.' },
      { icon: '✨', title: 'સાદગી', desc: 'જો 55 વર્ષનો સેક્રેટરી 5 મિનિટમાં તેનો ઉપયોગ કરી ના શકે, તો અમે اپنا કામ સાચુ કર્યુ નથી.' },
      { icon: '🗣️', title: 'સ્થાનિક ભાષાનો સન્માન', desc: 'ભારતમાં ઘણા ભાષાઓ છે. અમે 6નો સપોર્ટ આપીએ છીએ — અને અમે રुकવા વાળા નથી.' },
      { icon: '🔐', title: 'ગોપનીયતા પહેલા', desc: 'રેસિડેન્ટ ડેટા ક્યારેય વેચાતું નથી. સોસાયટી ડેટા સોસાયટીના નિયંત્રણમાં જ રહે છે.' },
    ],
    team: [
      { name: 'અર્જુન મેહતા', title: 'સંस्थાપક અને CEO', emoji: '👨‍💼', bio: 'પૂર્વ RWA સેક્રેટરી. પોતાની સોસાયટીનું 3 વર્ષ સુધી મેન્યુઅલી મેનેજ કર્યા પછી SocietyApp બનાવી.' },
      { name: 'પ્રિયા നായર', title: 'સંस्थાપક અને CTO', emoji: '👩‍💻', bio: 'પૂર્વ Flipkart senior engineer. React Native અને backend engineering ટીમોનું નેતૃત્વ કરે છે.' },
      { name: 'વિક્રમ શાહ', title: 'હેડ ઓફ પ્રોડક્ટ', emoji: '👨‍🎨', bio: 'B2B SaaS પ્રોડક્ટમાં 10 વર્ષ. પ્રથમ વખત વાપરનાર માટે time-to-value ઓછું કરવી આ їхનો શોખ છે.' },
    ],
    stats: [
      { num: '1,200+', label: 'સોસાયટીઓ onboard' },
      { num: '85,000+', label: 'પ્લેટફોર્મ પર રેસિડેન્ટ્સ' },
      { num: '22', label: 'બનીલ MODULES' },
      { num: '6', label: 'ભારતીય ભાષાઓ' },
    ],
  },
  ta: {
    timeline: [
      { year: '2022', title: 'சிக்கல் கண்டுபிடிக்கப்பட்டது', desc: 'எங்கள் நிறுவனர் அகமதாபாத்தில் உள்ள ஒரு கேட் செய்யப்பட்ட சமுதாயத்தில் வாழ்ந்தனர். செயலர் 180 யூனிட்களை WhatsApp குழுக்கள் மற்றும் காகித பதிவேட்டால் நிர்வகித்து வந்தார். கேட் லாக் மூன்று நாட்களுக்கு இல்லாததால் திருட்டு நிகழ்ந்தது.' },
      { year: '2023 Q1', title: 'ஆராய்ச்சி கட்டம் தொடங்கியது', desc: 'மும்பை, புனே, பெங்களூரு, அகமதாபாத் மற்றும் சென்னை முழுவதும் 200+ RWA தலைவர்களுடன் 18 மாத உரையாடல்கள். ஒவ்வொரு வேதனையும் ஆவணமாக்கப்பட்டது.' },
      { year: '2023 Q3', title: 'முதல் முன்மாதிரி உருவாக்கப்பட்டது', desc: '12 பைலட் சமுதாயங்களுடன் அடிப்படை விருந்தினர் மேலாண்மை MVP சோதிக்கப்பட்டது. கருத்து மிகுந்தது — அவர்கள் பில்லிங், அறிவிப்புகள் மற்றும் இன்னும் பலவற்றை விரும்பினர்.' },
      { year: '2024 Q1', title: 'SocietyApp v1.0 அறிமுகமானது', desc: '22 மாட்யூல்கள். உண்மையான விருந்தினர் மேலாண்மையுடன் Free tier. iOS மற்றும் Android-க்கான React Native apps. 6 மொழிகளில் மல்டிலிங்குவல் UI.' },
      { year: '2024', title: 'விரைவாக வளர்ச்சி', desc: '1,200+ சமுதாயங்கள் இணைந்தன. 85,000+ குடியிருப்பாளர்கள் தளத்தில். MyGate செயலர்கள் Free tierக்காக மாறுகின்றனர்.' },
    ],
    values: [
      { icon: '🔍', title: 'வெளிப்படைத்தன்மை', desc: 'ஒவ்வொரு ரூபாயும் கண்காணிக்கப்படுகிறது. ஒவ்வொரு நுழைவும் பதிவு செய்யப்படுகிறது. நிர்வாகிகளும் குடியிருப்பாளர்களும் எப்போதும் ஒரே பக்கத்தில் உள்ளனர்.' },
      { icon: '✨', title: 'எளிமை', desc: '55 வயது செயலர் 5 நிமிஷத்தில் இதைப் பயன்படுத்த முடியாவிட்டால், நாங்கள் நமது வேலையை சரியாக செய்யவில்லை.' },
      { icon: '🗣️', title: 'உள்ளூர் மொழிக்கான மரியாதை', desc: 'இந்தியாவில் பல மொழிகள் உள்ளன. நாங்கள் 6 மொழிகளை ஆதரிக்கிறோம் — மேலும் நிற்கப் போவதில்லை.' },
      { icon: '🔐', title: 'தனியுரிமை முதலில்', desc: 'குடியிருப்பாளர் தரவு ஒருபோதும் விற்கப்படாது. சமுதாய தரவு சமுதாயத்தின் கட்டுப்பாட்டிலேயே இருக்கும்.' },
    ],
    team: [
      { name: 'அர்ஜுன் மேத்தா', title: 'Co-Founder & CEO', emoji: '👨‍💼', bio: 'முன்னாள் RWA செயலர். தனது சொந்த சமுதாயத்தை 3 ஆண்டுகள் கைமுறையாக நிர்வகித்த பிறகு SocietyApp உருவாக்கினார்.' },
      { name: 'பிரியா நாயர்', title: 'Co-Founder & CTO', emoji: '👩‍💻', bio: 'முன்னாள் Flipkart senior engineer. React Native மற்றும் backend engineering குழுக்களுக்கு தலைமை தாங்குகிறார்.' },
      { name: 'விக்ரம் ஷா', title: 'Head of Product', emoji: '👨‍🎨', bio: 'B2B SaaS தயாரிப்பில் 10 ஆண்டுகள். முதல் முறையாகப் பயன்படுத்துபவர்களுக்கான value-ஐ குறைப்பதில் தீவிர கவனம் செலுத்துகிறார்.' },
    ],
    stats: [
      { num: '1,200+', label: 'சமுதாயங்கள் இணைந்தன' },
      { num: '85,000+', label: 'தளத்தில் குடியிருப்பாளர்கள்' },
      { num: '22', label: 'உருவாக்கப்பட்ட மாட்யூல்கள்' },
      { num: '6', label: 'இந்திய மொழிகள்' },
    ],
  },
  mr: {
    timeline: [
      { year: '2022', title: 'समस्येची ओळख', desc: 'आमचे संस्थापक अहमदाबादमधील गेटेड सोसायटीत राहत होते. सचिव 180 युनिट्सचे WhatsApp ग्रुप आणि पेपर रजिस्टरने व्यवस्थापन करत होता. गेट लॉग तीन दिवस गायब असल्यामुळे चोरी झाली.' },
      { year: '2023 Q1', title: 'संशोधन टप्पा सुरू', desc: 'मुंबई, पुणे, बेंगलुरू, अहमदाबाद आणि चेन्नईतील 200+ RWA अध्यक्षांबरोबर 18 महिन्यांची बोलणी. प्रत्येक वेदना बिंदू नोंदवला गेला.' },
      { year: '2023 Q3', title: 'पहिला प्रोटोटाइप बनवला', desc: '12 पायलट सोसायटींसह एक बेसिक व्हिजिटर मॅनेजमेंट MVP tested. प्रतिक्रिया भव्य होती — त्यांना बिलिंग, नोटिस आणि आणखी बरेच हवे होते.' },
      { year: '2024 Q1', title: 'SocietyApp v1.0 लाँच', desc: '22 मॉड्यूल. खऱ्या व्हिजिटर मॅनेजमेंटसह फ्री टियर. iOS आणि Android साठी React Native अॅप. 6 भाषांमध्ये मल्टीलिंग्वल UI.' },
      { year: '2024', title: 'वेगाने वाढत आहे', desc: '1,200+ सोसायटी ऑनबोर्ड. 85,000+ रेजिडेंट्स प्लॅटफॉर्मवर. MyGateचे सचिव फ्री टियरसाठी बदलत आहेत.' },
    ],
    values: [
      { icon: '🔍', title: 'पारदर्शकता', desc: 'प्रत्येक रूपयाचे ट्रॅकिंग. प्रत्येक एंट्री लॉग. एडमिन आणि रेजिडेंट्स नेहमी एकाच पानावर.' },
      { icon: '✨', title: 'सोपेपणा', desc: 'जर 55-वर्षीय सचिव 5 मिनिटांत वापरू शकत नसेल, तर आम्ही आपले काम ठीक केलं नाही.' },
      { icon: '🗣️', title: 'स्थानिक भाषेचा आदर', desc: 'भारतात अनेक भाषा आहेत. आम्ही 6 भाषांचा सपोर्ट देतो — आणि थांबणार नाही.' },
      { icon: '🔐', title: 'गोपनीयता प्रथम', desc: 'रेजिडेंट डेटा कधीही विकला जात नाही. सोसायटी डेटा सोसायटीच्या नियंत्रणात राहतो.' },
    ],
    team: [
      { name: 'अर्जुन मेहता', title: 'संस्थापक आणि CEO', emoji: '👨‍💼', bio: 'पूर्व RWA सचिव. स्वतःच्या सोसायटीचे 3 वर्ष हाताळल्यानंतर SocietyApp उभारले.' },
      { name: 'प्रिया नायर', title: 'संस्थापक आणि CTO', emoji: '👩‍💻', bio: 'पूर्व Flipkart senior engineer. React Native आणि backend engineering टीमना नेतृत्व करते.' },
      { name: 'विक्रम शहा', title: 'हेड ऑफ प्रोडक्ट', emoji: '👨‍🎨', bio: 'B2B SaaS प्रोडक्टमध्ये 10 वर्षे. पहिल्यांदा वापरणाऱ्या वापरकर्त्यांसाठी value कमी करण्यावर लक्ष केंद्रित करते.' },
    ],
    stats: [
      { num: '1,200+', label: 'सोसायटी ऑनबोर्ड' },
      { num: '85,000+', label: 'प्लॅटफॉर्मवरील रेजिडेंट्स' },
      { num: '22', label: 'बनलेले मॉड्यूल' },
      { num: '6', label: 'भारतीय भाषा' },
    ],
  },
  pa: {
    timeline: [
      { year: '2022', title: 'ਮਸਲੇ ਦੀ ਪਛਾਣ', desc: 'ਸਾਡਾ ਸਥਾਪਤ ਕਰਤਾ ਅਹਿਮਦਾਬਾਦ ਵਿੱਚ ਇੱਕ ਗੇਟਿਡ ਸੋਸਾਈਟੀ ਵਿੱਚ ਰਹਿੰਦਾ ਸੀ। ਸੈਕ੍ਰੇਟਰੀ 180 ਯੂਨਿਟਾਂ ਦਾ WhatsApp גרੁੱਪ ਅਤੇ ਪੇਪਰ ਰਜਿਸਟਰ ਨਾਲ ਪ੍ਰਬੰਧ ਕਰ ਰਿਹਾ ਸੀ। ਗੇਟ ਲੌਗ ਤਿੰਨ ਦਿਨਾਂ ਤੋਂ ਗੁਆਚਣਾ ਪੈਕੇ盗ਾਬੀ ਹੋ ਗਈ।' },
      { year: '2023 Q1', title: 'ਖੋਜ ਦਾ ਤਰੱਕਾ ਸ਼ੁਰੂ', desc: 'ਮੁੰਬਈ, ਪੁਣੇ, ਬੈਂਗਲੁਰੁ, ਅਹਿਮਦਾਬਾਦ ਅਤੇ ਚੈਨਈ ਵਿੱਚ 200+ RWA ਅਧਿਕਾਰੀਆਂ ਨਾਲ 18 ਮਹੀਨਿਆਂ ਦੀ ਗੱਲਬਾਤ। ਹਰ ਪੇਨ ਪੌਇੰਟ ਦਸਤਾਵੇਜ਼ੀਕਰਨ ਕੀਤਾ ਗਿਆ।' },
      { year: '2023 Q3', title: 'ਪਹਿਲਾ ਪ੍ਰੋਟੋਟਾਈਪ ਬਣਾਇਆ', desc: '12 ਪਾਇਲਟ ਸੋਸਾਈਟੀਆਂ ਨਾਲ ਇੱਕ ਬੇਸਿਕ ਵਿਜ਼ਿਟਰ ਮੈਨਿਜਮੈਂਟ MVP ਟੈਸਟ ਕੀਤਾ ਗਿਆ। ਪ੍ਰਤੀਕਿਰਿਆ ਅਤਿ ਵਧੀਆ ਸੀ — ਉਨ੍ਹਾਂ ਨੂੰ ਬਿਲਿੰਗ, ਨੋਟੀਸ ਅਤੇ ਹੋਰ ਬਹੁਤ ਕੁਝ ਚਾਹੀਦਾ ਸੀ।' },
      { year: '2024 Q1', title: 'SocietyApp v1.0 ਲਾਂਚ', desc: '22 ਮਾਡਿਊਲ. ਅਸਲੀ ਵਿਜ਼ਿਟਰ ਮੈਨਿਜਮੈਂਟ ਨਾਲ ਫਰੀ ਟਾਇਰ. iOS ਅਤੇ Android ਲਈ React Native ਐਪਸ. 6 ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਮਲਟੀਲਿੰਗੁਆਲ UI.' },
      { year: '2024', title: 'ਤੇਜ਼ੀ ਨਾਲ ਵਾਧਾ', desc: '1,200+ ਸੋਸਾਈਟੀਆਂ onboard. 85,000+ ਰੇਜ਼ਿਡੈਂਟਸ ਪਲੇਟਫਾਰਮ ਉੱਤੇ. MyGate ਦੇ ਸੈਕ੍ਰੇਟਰੀ ਫਰੀ ਟਾਇਰ ਲਈ ਬਦਲੇ ਜਾ ਰਹੇ ਹਨ.' },
    ],
    values: [
      { icon: '🔍', title: 'ਪਾਰਦਰਸ਼ਤਾ', desc: 'ਹਰ ਰੁਪਇਆ ਟਰੈਕ ਹੁੰਦਾ ਹੈ. ਹਰ ਏਂਟਰੀ ਲੌਗ ਹੁੰਦੀ ਹੈ. ਐਡਮਿਨ ਅਤੇ ਰੇਜ਼ਿਡੈਂਟਸ ਹਮੇਸ਼ਾ ਇਕੋ ਪੇਜ ਉੱਤੇ ਹੁੰਦੇ ਹਨ.' },
      { icon: '✨', title: 'ਸਰਲਤਾ', desc: 'ਜੇਕਰ 55 ਸਾਲਾ ਸੈਕ੍ਰੇਟਰੀ 5 ਮਿੰਟ ਵਿੱਚ ਇਸਨੂੰ ਨਹੀਂ ਵਰਤ ਸਕਦਾ, ਤਾਂ ਅਸੀਂ ਆਪਣਾ ਕੰਮ ਠੀਕ ਨਹੀਂ ਕੀਤਾ.' },
      { icon: '🗣️', title: 'ਸਥਾਨਿਕ ਭਾਸ਼ਾ ਦਾ ਮਰਿਆਦਾ', desc: 'ਭਾਰਤ ਵਿੱਚ ਬਹੁਤੀਆਂ ਭਾਸ਼ਾਵਾਂ ਹਨ. ਅਸੀਂ 6 ਭਾਸ਼ਾਵਾਂ ਦਾ ਸਮਰਥਨ ਕਰਦੇ ਹਾਂ — ਅਤੇ ਅਸੀਂ ਰੁਕਣ ਵਾਲੇ ਨਹੀਂ ਹਾਂ.' },
      { icon: '🔐', title: 'ਗੁਪਤਤਾ ਪਹਿਲਾਂ', desc: 'ਰੇਜ਼ਿਡੈਂਟ ਡਾਟਾ ਕਦਾਚ ਨਹੀਂ ਵੇਚਿਆ ਜਾਂਦਾ. ਸੋਸਾਈਟੀ ਡਾਟਾ ਸੋਸਾਈਟੀ ਦੇ ਨਿਯੰਤਰਣ ਵਿੱਚ ਰਹਿੰਦਾ ਹੈ.' },
    ],
    team: [
      { name: 'ਅਰਜੁਨ ਮਿਹਤਾ', title: 'ਸਥਾਪਕ ਅਤੇ CEO', emoji: '👨‍💼', bio: 'ਪੁਰਾਣਾ RWA ਸੈਕ੍ਰੇਟਰੀ. ਆਪਣੀ ਸੋਸਾਈਟੀ ਨੂੰ 3 ਸਾਲ ਤੱਕ ਮੈਨੂਅਲ ਤਰੀਕੇ ਨਾਲ ਚਲਾਉਣ ਤੋਂ ਬਾਅਦ SocietyApp ਬਣਾਈ.' },
      { name: 'ਪ੍ਰੀਆ ਨਾਇਰ', title: 'ਸਥਾਪਕ ਅਤੇ CTO', emoji: '👩‍💻', bio: 'ਪੁਰਾਣੀ Flipkart senior engineer. React Native ਅਤੇ backend engineering ਟੀਮਾਂ ਦਾ নেতৃত্ব ਕਰਦੀ ਹੈ.' },
      { name: 'ਵਿਕ੍ਰਮ ਸ਼ਾਹ', title: 'ਹੈੱਡ ਆਫ਼ ਪ੍ਰੋਡਕਟ', emoji: '👨‍🎨', bio: 'B2B SaaS ਪ੍ਰੋਡਕਟ ਵਿੱਚ 10 ਸਾਲ. ਪਹਿਲੀ ਵਾਰ ਵਰਤਣ ਵਾਲਿਆਂ ਲਈ value ਘਟਾਉਣ ਵਿੱਚ ਮਾਹਰ ਹਨ.' },
    ],
    stats: [
      { num: '1,200+', label: 'ਸੋਸਾਈਟੀਆਂ ਜੋੜੀਆਂ' },
      { num: '85,000+', label: 'ਪਲੇਟਫਾਰਮ ਉੱਤੇ ਰੇਜ਼ਿਡੈਂਟਸ' },
      { num: '22', label: 'ਬਣੇ ਮਾਡਿਊਲ' },
      { num: '6', label: 'ਭਾਰਤੀ ਭਾਸ਼ਾਵਾਂ' },
    ],
  },
};

export function getAboutContent(locale: Locale): AboutPageContent {
  return (content[locale] ?? content.en) as AboutPageContent;
}
