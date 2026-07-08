// lib/i18n/content/testimonialsContent.ts
// Locale-aware testimonials content.

import type { Locale } from '../translations';

export interface TestimonialItem {
  name: string;
  title: string;
  city: string;
  units: string;
  avatar: string;
  rating: number;
  quote: string;
  highlight: string;
}

export interface TestimonialsContent {
  items: TestimonialItem[];
  trustStats: Array<{ value: string; label: string }>;
}

const content: Partial<Record<Locale, TestimonialsContent>> = {
  en: {
    items: [
      { name: 'Rajesh Patel', title: 'Secretary, Shanti Residency', city: 'Ahmedabad', units: '120 units', avatar: 'RP', rating: 5, quote: 'I was managing 120 flats on WhatsApp. Maintenance dues were a nightmare — I had to message each defaulter personally. SocietyApp gave me the defaulter list in one tap. My collection rate went from 60% to 94% in two months.', highlight: 'Collection rate: 60% → 94%' },
      { name: 'Ananya Krishnan', title: 'RWA President, Prestige Palms', city: 'Bengaluru', units: '340 units', avatar: 'AK', rating: 5, quote: 'We switched from MyGate. The per-unit pricing was killing us — ₹18,000 a month for 340 units. SocietyApp costs less than half and does everything our guards need. The OTP entry flow works exactly the way we need it to.', highlight: 'Saved ₹10,000+/month vs MyGate' },
      { name: 'Priya Mehta', title: 'Resident, Kalpataru Heights', city: 'Pune', units: '200 units', avatar: 'PM', rating: 5, quote: 'My maid has been coming for 3 years. Every day I used to get a WhatsApp from the guard. Now she has a trusted pass — I get a single evening digest. My phone is quiet, and I still know she arrived. This alone makes the app worth it.', highlight: 'Zero daily interruptions from gate' },
      { name: 'Suresh Iyer', title: 'Treasurer, Sai Gardens', city: 'Chennai', units: '85 units', avatar: 'SI', rating: 5, quote: 'Setting up our first bill took me 4 minutes. Residents got a push notification, they could see exactly what they owe and why, and 70% paid within 48 hours. No UPI screenshot chaos in the WhatsApp group anymore.', highlight: '70% paid within 48 hours of first bill' },
      { name: 'Meena Agarwal', title: 'Secretary, Emerald Township', city: 'Jaipur', units: '150 units', avatar: 'MA', rating: 5, quote: 'The Hindi language support made the difference. Our committee members who are not comfortable in English could finally use the app properly. Our security guard uses it in Hindi too. That is something MyGate never offered us.', highlight: 'Full Hindi UI for guards & committee' },
    ],
    trustStats: [
      { value: '1,200+', label: 'Societies onboarded' },
      { value: '85,000+', label: 'Residents on platform' },
      { value: '4.8★', label: 'Play Store rating' },
    ],
  },
  hi: {
    items: [
      { name: 'राजेश पटेल', title: 'सचिव, शांति रेजिडेन्सी', city: 'अहमदाबाद', units: '120 यूनिट्स', avatar: 'RP', rating: 5, quote: 'मैं 120 फ्लैट्स का प्रबंधन WhatsApp पर कर रहा था। मेंटेनेंस dues एक nightmare थे — मुझे हर डिफॉल्टर को лично मैसेज करना पड़ता था। SocietyApp ने मुझे एक टैप में डिफॉल्टर लिस्ट दे दी। मेरी collection rate दो महीनों में 60% से 94% हो गई।', highlight: 'Collection rate: 60% → 94%' },
      { name: 'अनन्या कृष्णन', title: 'RWA अध्यक्ष, प्रीस्टिज पाम्स', city: 'बेंगलुरु', units: '340 यूनिट्स', avatar: 'AK', rating: 5, quote: 'हम MyGate से बदल गए। per-unit pricing हमें मार रही थी — 340 यूनिट्स के लिए ₹18,000 महीना। SocietyApp हमारी लागत से आधे से भी कम है और हमारे गार्ड्स के लिए जरूरी हर चीज़ करता है। OTP entry flow हमारे हिसाब से बिल्कुल सही काम करता है।', highlight: 'MyGate की तुलना में ₹10,000+/माह की बचत' },
      { name: 'प्रिया मेहता', title: 'रेज़िडेंट, कल्पतरु हाईट्स', city: 'पुणे', units: '200 यूनिट्स', avatar: 'PM', rating: 5, quote: 'मेरी नौकरानी 3 साल से आ रही है। हर दिन मुझे गार्ड का WhatsApp मिलता था। अब उसके पास trusted pass है — मुझे सिर्फ एक शाम का digest मिलता है। मेरा फोन शांत रहता है और मुझे पता चलता है कि वह आ गई। यही अकेले ऐप को worth it बनाता है।', highlight: 'गेट से कोई दैनिक परेशानियाँ नहीं' },
      { name: 'सुरेश अय्यर', title: 'कोषाध्यक्ष, साई गार्डन्स', city: 'चेन्नई', units: '85 यूनिट्स', avatar: 'SI', rating: 5, quote: 'हमारा पहला बिल तैयार करना मुझे 4 मिनट लगा। रेजिडेंट्स को push notification मिला, वे देखकर समझ गए कि उन्हें क्या और क्यों देना है, और 70% लोग 48 घंटों में भुगतान कर गए। WhatsApp ग्रुप में अब UPI screenshot chaos नहीं है।', highlight: 'पहले बिल के 48 घंटों में 70% भुगतान' },
      { name: 'मीना अग्रवाल', title: 'सचिव, एमराल्ड टाउनशिप', city: 'जयपुर', units: '150 यूनिट्स', avatar: 'MA', rating: 5, quote: 'हिंदी भाषा सपोर्ट ने फर्क किया। हमारे कमेटी मेंबर जो अंग्रेज़ी में सहज नहीं थे, अब ऐप ठीक से इस्तेमाल कर सकते हैं। हमारे सुरक्षा गार्ड भी हिंदी में इसका इस्तेमाल करते हैं। MyGate ने हमें यह विकल्प कभी नहीं दिया।', highlight: 'गार्ड्स और कमेटी के लिए पूरा हिंदी UI' },
    ],
    trustStats: [
      { value: '1,200+', label: 'सोसायटियाँ जुड़ीं' },
      { value: '85,000+', label: 'प्लेटफ़ॉर्म पर रेजिडेंट्स' },
      { value: '4.8★', label: 'Play Store रेटिंग' },
    ],
  },
  gu: {
    items: [
      { name: 'રાજેશ પટેલ', title: 'સેક્રેટરી, શાંતિ રેસિડેન્સી', city: 'અમદાવાદ', units: '120 યુનિટ્સ', avatar: 'RP', rating: 5, quote: 'હું 120 ફ્લેટ્સનું મેનેજમેન્ટ WhatsApp પર કરતો હતો. मेंटેનન્સ dues એક નર્ક હતા — મને દરેક ડિફૉલ્ટરને વ્યક્તિગત રીતે મેસેજ કરવો પડતો હતો. SocietyAppએ મને એક ટૅપમાં ડિફૉલ્ટર લિસ્ટ આપી. મારી collection rate બે મહિનામાં 60% થી 94% થઈ ગઈ.', highlight: 'Collection rate: 60% → 94%' },
      { name: 'અનન્યા કૃષ્ણન', title: 'RWA પ્રમુખ, પ્રેસ્ટિજ પામ્સ', city: 'બેંગલુરુ', units: '340 યુનિટ્સ', avatar: 'AK', rating: 5, quote: 'અમે MyGateમાંથી બદલાયા. per-unit pricing અમારી માટે આબાદ હતી — 340 યુનિટ્સ માટે ₹18,000 મહિના. SocietyApp અમારી ખર્ચાની અડધી થી પણ ઓછા છે અને આપણા ગાર્ડ્સ માટે જરૂરી દરેક વસ્તુ કરે છે. OTP entry flow આપણા માટે બરાબર કામ કરે છે.', highlight: 'MyGate ની તુલનામાં ₹10,000+/માસિક બચત' },
      { name: 'પ્રિયા મહેતા', title: 'રેસિડેન્ટ, કલ્પતરુ હાઈટ્સ', city: 'પુણે', units: '200 યુનિટ્સ', avatar: 'PM', rating: 5, quote: 'મારી મૈદ 3 વર્ષથી આવી રહી છે. હरेक દિવસ મારો ગાર્ડ WhatsApp કરતો હતો. હવે તેની trusted pass છે — મને માત્ર એક સાંજનો digest મળે છે. મારો ફોન શાંત રહે છે અને મને ખબર પડે છે કે તે આવી ગઈ. આ એકલા ऐपને worth it બનાવે છે.', highlight: 'ગેટ થી રોજનીERRUPશન વિનાની સ્થિતિ' },
      { name: 'સુરેશ આયેર', title: 'ખજાનેદાર, સાઈ ગાર્ડન્સ', city: 'ચેન્નાઈ', units: '85 યુનિટ્સ', avatar: 'SI', rating: 5, quote: 'અમારો પહેલો બિલ તૈયાર કરવો મને 4 મિનિટે લાગ્યો. રેસિડેન્ટ્સને push notification મળ્યું, તેઓ જોતાં જ સમજી ગયા કે તેમને શું અને શા માટે ચૂકવવું છે, અને 70% 48 કલાકમાં ચૂકવાઈ ગયા. WhatsApp ગ્રુપમાં હવે UPI screenshot chaos નથી.', highlight: 'પહેલા બિલના 48 કલાકમાં 70% ચૂકવણી' },
      { name: 'મીના ઓગરવાલ', title: 'સેક્રેટરી, Emerald Township', city: 'જૈપુર', units: '150 યુનિટ્સ', avatar: 'MA', rating: 5, quote: 'હિન્દી ભાષા સપોર્ટે તફાવત લાવ્યો. અમારા કમિટી મેમ્બર જેઓ અંગ્રેજીમાં સ્નેહરૂપ નથી, હવે એપને યોગ્ય રીતે વાપરી શકે છે. અમારા સુરક્ષા ગાર્ડ પણ હિન્દીમાં વાપરે છે. MyGateએ આપણી માટે આ આપેલ જ નહિ.', highlight: 'ગાર્ડ્સ અને કમિટી માટે પુરું હિન્દી UI' },
    ],
    trustStats: [
      { value: '1,200+', label: 'સોસાયટીઓ onboard' },
      { value: '85,000+', label: 'પ્લેટફોર્મ પર રેસિડેન્ટ્સ' },
      { value: '4.8★', label: 'Play Store રેટિંગ' },
    ],
  },
  ta: {
    items: [
      { name: 'ராஜேஷ் படேல்', title: 'செயலர், சாந்தி ரெசிடென்சி', city: 'அகமதாபாத்', units: '120 யூனிட்ஸ்', avatar: 'RP', rating: 5, quote: 'நான் 120 ஃப்ளாட்களை WhatsApp-இல் நிர்வகித்து வந்தேன். பராமரிப்பு கட்டணங்கள் ஒரு பயங்கரமான விஷயம் — ஒவ்வொரு டிஃபால்டருக்கும் தனித்தனியாக செய்தி அனுப்ப வேண்டியிருந்தது. SocietyApp எனக்கு ஒரு டேப்பில் டிஃபால்டர் லிஸ்டைக் கொடுத்தது. என் சேகரிப்பு விகிதம் இரண்டு மாதங்களில் 60% இலிருந்து 94% ஆக உயர்ந்தது.', highlight: 'சேகரிப்பு விகிதம்: 60% → 94%' },
      { name: 'அனன்யா கிருஷ்ணன்', title: 'RWA தலைவர், பிரெஸ்டீஜ் பாம்ஸ்', city: 'பெங்களூரு', units: '340 யூனிட்ஸ்', avatar: 'AK', rating: 5, quote: 'நாங்கள் MyGate-இலிருந்து மாறினோம். per-unit pricing எங்களை கடுமையாக பாதித்தது — 340 யூனிட்களுக்கு ₹18,000 மாதம். SocietyApp எங்கள் செலவில் பாதிக்கும் குறைவாகவே உள்ளது மற்றும் எங்கள் காவலர்களுக்குத் தேவையான எல்லாவற்றையும் செய்கிறது. OTP entry flow எங்கள் தேவைக்கு சரியாக வேலை செய்கிறது.', highlight: 'MyGate-ஐ விட ₹10,000+/மாதம் சேமிப்பு' },
      { name: 'பிரியா மேத்தா', title: 'குடியிருப்பாளர், கல்பதரு ஹைட்ஸ்', city: 'புனே', units: '200 யூனிட்ஸ்', avatar: 'PM', rating: 5, quote: 'என் பணியாளர் 3 வருடங்களாக வருகிறார். ஒவ்வொரு நாளும் காவலரிடமிருந்து WhatsApp வருகிறது. இப்போது அவருக்கு trusted pass உள்ளது — நான் ஒரு மாலை digest மட்டும் பெறுகிறேன். என் போன் அமைதியாக இருக்கும், அவர் வந்துவிட்டார் என்பதை நான் இன்னும் தெரிந்துகொள்கிறேன். இது மட்டும் ஆப்பை worth it ஆக்குகிறது.', highlight: 'கேட் இருந்து தினசரி தொந்தரவுகள் இல்லை' },
      { name: 'சுரேஷ் அய்யர்', title: 'கணக்காளர், சாய் கார்டன்ஸ்', city: 'சென்னை', units: '85 யூனிட்ஸ்', avatar: 'SI', rating: 5, quote: 'எங்கள் முதல் பில் அமைக்க 4 நிமிஷங்கள் எடுத்தன. குடியிருப்பாளர்களுக்கு push notification வந்தது, அவர்கள் என்ன செலுத்த வேண்டும், ஏன் என்பதை தெளிவாகப் பார்த்தார்கள், 70% பேர் 48 மணி நேரத்திற்குள் செலுத்தினர். WhatsApp குழுவில் இனி UPI screenshot chaos இல்லை.', highlight: 'முதல் பில்லுக்குப் பிறகு 48 மணி நேரத்திற்குள் 70% பணம்' },
      { name: 'மீனா அக்ர்வால்', title: 'செயலர், Emerald Township', city: 'ஜெய்ப்பூர்', units: '150 யூனிட்ஸ்', avatar: 'MA', rating: 5, quote: 'ஹிந்தி மொழி ஆதரவு பெரிய வித்தியாசத்தை உருவாக்கியது. ஆங்கிலத்தில் வசதியாக இல்லாத எங்கள் கமிட்டி உறுப்பினர்கள் இப்போது ஆப்பை சரியாகப் பயன்படுத்த முடிகிறது. எங்கள் பாதுகாப்புக் காவலரும் ஹிந்தியில் பயன்படுத்துகிறார். MyGate இதை ஒருபோதும் வழங்கவில்லை.', highlight: 'காவலர்கள் மற்றும் கமிட்டிக்கான முழு ஹிந்தி UI' },
    ],
    trustStats: [
      { value: '1,200+', label: 'சமுதாயங்கள் இணைந்தன' },
      { value: '85,000+', label: 'தளத்தில் குடியிருப்பாளர்கள்' },
      { value: '4.8★', label: 'Play Store மதிப்பீடு' },
    ],
  },
  mr: {
    items: [
      { name: 'राजेश पटेल', title: 'सचिव, शांती रेजिडेन्सी', city: 'अहमदाबाद', units: '120 युनिट्स', avatar: 'RP', rating: 5, quote: 'मी 120 फ्लॅट्सचे व्यवस्थापन WhatsApp वर करत होतो. मेंटेनन्स dues एक नुसत्या nightmare होत्या — मला प्रत्येक डिफॉल्टरला वैयक्तिकपणे संदेश पाठवावा लागत होता. SocietyAppने मला एका टॅपमध्ये डिफॉल्टर लिस्ट दिली. माझा collection rate दोन महिन्यांत 60% ते 94% झाला.', highlight: 'Collection rate: 60% → 94%' },
      { name: 'अनन्या कृष्णन', title: 'RWA अध्यक्ष, प्रीस्टिज पाम्स', city: 'बेंगळुरू', units: '340 युनिट्स', avatar: 'AK', rating: 5, quote: 'आम्ही MyGateमधून बदललो. per-unit pricing आम्हाला जिव्हारी लागली होती — 340 युनिट्ससाठी ₹18,000 महिना. SocietyApp आमच्या खर्चापेक्षा अर्ध्यापेक्षा कमी आहे आणि आमच्या गार्ड्ससाठी आवश्यक प्रत्येक गोष्ट करते. OTP entry flow आमच्या गरजेनुसार अचूक काम करते.', highlight: 'MyGateच्या तुलनेत ₹10,000+/माहाची बचत' },
      { name: 'प्रिया मेहता', title: 'रेझिडेंट, कल्पतरू हायट्स', city: 'पुणे', units: '200 युनिट्स', avatar: 'PM', rating: 5, quote: 'माझी maid 3 वर्षांपासून येते. दररोज मला गार्डकडून WhatsApp येत होता. आता तिच्याकडे trusted pass आहे — मला फक्त एक संध्याकाळी digest मिळतो. माझा फोन शांत राहतो आणि मला माहीत असते की ती आली. हे एकट्याने app ला worth it बनवते.', highlight: 'गेटमधून कोणत्याही दैनिक त्रासाशिवाय' },
      { name: 'सुरेश अय्यर', title: 'खजिनदार, साई गार्डन्स', city: 'चेन्नई', units: '85 युनिट्स', avatar: 'SI', rating: 5, quote: 'आमचा पहिला बिल तयार करण्यासाठी मला 4 मिनिटे लागली. रेजिडेंट्सना push notification मिळाला, त्यांनी पाहून समजले की त्यांना काय आणि का द्यायचे आहे, आणि 70% लोक 48 तासांत भरले. WhatsApp ग्रुपमध्ये आता UPI screenshot chaos नाही.', highlight: 'पहिल्या बिलेच्या 48 तासांत 70% पेमेंट' },
      { name: 'मीना अग्रवाल', title: 'सचिव, Emerald Township', city: 'जयपूर', units: '150 युनिट्स', avatar: 'MA', rating: 5, quote: 'हिंदी भाषा सपोर्टने फरक केला. आमच्या कमिटी मेंबर्स जे इंग्रजीत सहज नव्हते, आता अॅप योग्यरित्या वापरू शकतात. आमचा सुरक्षा गार्डही हिंदीत वापरतो. MyGateने आम्हाला हे कधी दिले नाही.', highlight: 'गार्ड्स आणि कमिटीसाठी पूर्ण हिंदी UI' },
    ],
    trustStats: [
      { value: '1,200+', label: 'सोसायटी ऑनबोर्ड' },
      { value: '85,000+', label: 'प्लॅटफॉर्मवरील रेजिडेंट्स' },
      { value: '4.8★', label: 'Play Store रेटिंग' },
    ],
  },
  pa: {
    items: [
      { name: 'ਰਾਜੇਸ਼ ਪਟੇਲ', title: 'ਸੈਕ੍ਰੇਟਰੀ, ਸ਼ਾਂਤੀ ਰੇਸਿਡੈਂਸੀ', city: 'ਅਹਿਮਦਾਬਾਦ', units: '120 ਯੂਨਿਟਸ', avatar: 'RP', rating: 5, quote: 'ਮੈਂ 120 ਫਲੈਟਾਂ ਦਾ ਇੰਤਜ਼ਾਮ WhatsApp ’ਤੇ ਕਰ ਰਿਹਾ ਸੀ। maintenance dues ਇੱਕ nightmare ਸੱਥੇ — mujhe ਹਰ defaulter ਨੂੰ ਵੱਖ-ਵੱਖ संदेश ਕਰਨੇ ਪੇੜੇ। SocietyApp ਨੇ ਮੈਨੂੰ ਇੱਕ ਟੈਪ ਵਿੱਚ defaulter list ਦੇ ਦਿੱਤੀ। ਮੇਰੀ collection rate ਦੋ ਮਹੀਨਿਆਂ ਵਿੱਚ 60% ਤੋਂ 94% ਹੋ ਗਈ।', highlight: 'Collection rate: 60% → 94%' },
      { name: 'ਅਨਨਿਆ ਕਰਿਸ਼ਨ', title: 'RWA ਅਧਿਕਾਰੀ, ਪ੍ਰੀਸਟਿਜ ਪਾਮਸ', city: 'ਬੈਂਗਲੁਰੂ', units: '340 ਯੂਨਿਟਸ', avatar: 'AK', rating: 5, quote: 'ਅਸੀਂ MyGate ਤੋਂ ਬਦਲ ਗਏ। per-unit pricing ਸਾਨੂੰ ਤੋੜ ਰਹੀ ਸੀ — 340 ਯੂਨਿਟਾਂ ਲਈ ₹18,000 ਮਹੀਨੇ। SocietyApp ਸਾਡੀ ਲਾਗਤ ਤੋਂ ਅੱਧੇ ਤੋਂ ਵੀ ਘੱਟ ਹੈ ਅਤੇ ਸਾਡੇ ਗਾਰਡਾਂ ਲਈ ਲੋੜੀਦੀ ਹਰ ਚੀਜ਼ ਕਰਦੀ ਹੈ। OTP entry flow ਸਾਡੇ ਲਈ ਬਿਲਕੁਲ ਸਹੀ ਕੰਮ ਕਰਦੀ ਹੈ।', highlight: 'MyGate ਨਾਲੋਂ ₹10,000+/ਮਹੀਨਾ ਬਚਤ' },
      { name: 'ਪ੍ਰਿਆ ਮੇਹਤਾ', title: 'ਰੇਜ਼ਿਡੈਂਟ, ਕਲਪਤਰੂ ਹਾਈਟਸ', city: 'ਪੁਣੇ', units: '200 ਯੂਨਿਟਸ', avatar: 'PM', rating: 5, quote: 'ਮੇਰੀ ਮੈਦ 3 ਸਾਲਾਂ ਤੋਂ ਆ ਰਹੀ ਹੈ। ਹਰ ਦਿਨ ਮੈਨੂੰ ਗਾਰਡ ਦਾ WhatsApp ਆਉਂਦਾ ਸੀ। ਹੁਣ ਉਸਦੇ ਕੋਲ trusted pass ਹੈ — ਮੈਨੂੰ ਸਿਰਫ਼ ਇੱਕ ਸ਼ਾਮ ਦਾ digest ਮਿਲਦਾ ਹੈ। ਮੇਰਾ ਫੋਨ ਚੁੱਪ ਰਹਿੰਦਾ ਹੈ ਅਤੇ ਮੈਨੂੰ ਪਤਾ ਹੁੰਦਾ ਹੈ ਕਿ ਉਹ ਆ ਗਈ। ਇਹ ਇਕੱਲੇ app ਨੂੰ worth it ਬਣਾਉਂਦਾ ਹੈ।', highlight: 'ਗੇਟ ਤੋਂ ਕੋਈ ਦਿਨਵਾਰ தொந்தਰਾਵ ਨਹੀਂ' },
      { name: 'ਸੁਰੇਸ਼ ਇੱਯਰ', title: 'ਖਜ਼ਾਨਚੀ, ਸਾਈ ਗਾਰਡਨਸ', city: 'ਚੈਨਈ', units: '85 ਯੂਨਿਟਸ', avatar: 'SI', rating: 5, quote: 'ਸਾਡਾ ਪਹਲਾ ਬਿਲ ਤਿਆਰ ਕਰਨਾ ਮੈਨੂੰ 4 ਮਿੰਟ ਲੱਗਾ। ਰੇਜ਼ਿਡੈਂਟਾਂ ਨੂੰ push notification ਮਿਲਿਆ, ਉਹ ਵੇਖ ਕੇ ਸਮਝ ਗਏ ਕਿ ਉਨ੍ਹਾਂ ਨੂੰ ਕੀ ਅਤੇ ਕਿਉਂ ਦੇਣਾ ਹੈ, ਅਤੇ 70% 48 ਘੰਟਿਆਂ ਵਿਚ ਭੁਗਤਾਨ ਕਰ ਗਏ। WhatsApp group ਵਿੱਚ ਹੁਣ UPI screenshot chaos ਨਹੀਂ ਹੈ।', highlight: 'ਪਹਿਲੇ ਬਿਲ ਦੇ 48 ਘੰਟਿਆਂ ਵਿੱਚ 70% ਭੁਗਤਾਨ' },
      { name: 'ਮੀਨਾ ਆਗਰਵਾਲ', title: 'ਸੈਕ੍ਰੇਟਰੀ, Emerald Township', city: 'ਜੈਪੁਰ', units: '150 ਯੂਨਿਟਸ', avatar: 'MA', rating: 5, quote: 'ਹਿੰਦੀ ਭਾਸ਼ਾ ਸਪੋਰਟ ਨੇ ਅੰਤਰ ਲਾਇਆ। ਸਾਡੇ ਕਮਿਟੀ ਮੈਂਬਰ ਜੋ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਸੁੱਖੀ ਨਹੀਂ ਸਨ, ਹੁਣ ਐਪ ਨੂੰ ਠੀਕ ਤਰੀਕੇ ਨਾਲ ਵਰਤ ਸਕਦੇ ਹਨ। ਸਾਡੇ ਸੁਰੱਖਿਆ ਗਾਰਡ ਵੀ ਹਿੰਦੀ ਵਿੱਚ ਇਸਦਾ ਵਰਤਣ ਕਰਦੇ ਹਨ। MyGate ਨੇ ਅਸੀਂ ਨੂੰ ਇਹ ਕਦਾਚ ਨਹੀਂ ਦਿੱਤਾ।', highlight: 'ਗਾਰਡਾਂ ਅਤੇ ਕਮਿਟੀ ਲਈ ਪੂਰੀ हिंदी UI' },
    ],
    trustStats: [
      { value: '1,200+', label: 'ਸੋਸਾਈਟੀਆਂ ਜੋੜੀਆਂ' },
      { value: '85,000+', label: 'ਪਲੇਟਫਾਰਮ ਉੱਤੇ ਰੇਜ਼ਿਡੈਂਟਸ' },
      { value: '4.8★', label: 'Play Store ਰੇਟਿੰਗ' },
    ],
  },
};

export function getTestimonialsContent(locale: Locale): TestimonialsContent {
  return (content[locale] ?? content.en) as TestimonialsContent;
}
