// lib/i18n/content/productDemoContent.ts
// Locale-aware content for the homepage ProductDemo section (3 scrollable demos).

import type { Locale } from '../translations';

export interface ProductDemoPhone {
  header: { label: string; sub: string };
  card1: { title: string; sub: string };
  card2: { title: string; sub: string };
  card3: { title: string; sub: string };
  badge: { value: string; label: string };
}

export interface ProductDemoItem {
  id: string;
  label: string;
  headline: string;
  sub: string;
  features: string[];
  phone: ProductDemoPhone;
}

export interface ProductDemoContent {
  demos: ProductDemoItem[];
  learn_more: string; // e.g. "Learn more about"
}

const content: Partial<Record<Locale, ProductDemoContent>> = {
  en: {
    learn_more: 'Learn more about',
    demos: [
      {
        id: 'visitor',
        label: 'Visitor Management',
        headline: 'Know who enters before they walk in.',
        sub: 'Four gate entry flows that work entirely on smartphones — no hardware, no QR reader device, no installation required.',
        features: [
          'OTP-based pre-approved invite — resident shares code with visitor',
          "Walk-in logging with real-time push to resident's phone",
          'Trusted passes for maids, cooks and drivers with schedule',
          'Delivery auto-exit timer — no manual guard follow-up needed',
          'Full chronological gate log with timestamps and approval records',
        ],
        phone: {
          header: { label: 'Gate Entry · OTP Verify', sub: 'Guard view' },
          card1: { title: 'Enter visitor OTP', sub: 'Ravi Kumar · Flat 204' },
          card2: { title: 'Entry approved', sub: '10:42 AM · 27 Jun' },
          card3: { title: 'Exit logged', sub: '11:14 AM · 32 min visit' },
          badge: { value: '24', label: 'Visitors today' },
        },
      },
      {
        id: 'maintenance',
        label: 'Maintenance & Billing',
        headline: 'End the monthly fee collection chaos.',
        sub: 'Generate maintenance bills once, push to all residents automatically, and track who has paid — with a full defaulter report.',
        features: [
          'One-click bill generation for all flats or specific wings',
          'Residents see breakdown: base + penalty + discount = total due',
          'Admin marks payment received → receipt generated instantly',
          'Defaulter list with contact info and overdue amount',
          'Bill history with payment method, transaction ID, and receipt',
        ],
        phone: {
          header: { label: 'Maintenance Bills', sub: 'June 2026' },
          card1: { title: '₹2,400 due', sub: 'June Maintenance · Due 10th' },
          card2: { title: '₹3,100 collected', sub: 'Flat 201 · Paid via UPI' },
          card3: { title: '12 defaulters', sub: '₹28,800 overdue total' },
          badge: { value: '₹1.2L', label: 'This month' },
        },
      },
      {
        id: 'community',
        label: 'Community & Notices',
        headline: 'Replace the WhatsApp group chaos.',
        sub: 'Structured notices with tags, polls where residents actually vote, and a community help board — all in one place.',
        features: [
          'Tagged notices: Urgent / Finance / Event / Maintenance / General',
          'Pinned notices stay top of the board with admin controls',
          'Push delivery — residents get notified even without opening the app',
          'Community Help: resident-to-resident service requests and offers',
          'Polls with real-time results charts — anonymous or named voting',
        ],
        phone: {
          header: { label: 'Notice Board', sub: 'All notices' },
          card1: { title: 'Water cut Saturday', sub: 'URGENT · Posted by Secretary' },
          card2: { title: 'Parking poll: 84% voted', sub: 'Motion passed · 2-wheeler lot' },
          card3: { title: 'Plumber referral', sub: 'Ankit Shah · Flat 302' },
          badge: { value: '3', label: 'New notices' },
        },
      },
    ],
  },
  hi: {
    learn_more: 'इसके बारे में और जानें',
    demos: [
      {
        id: 'visitor',
        label: 'विज़िटर प्रबंधन',
        headline: 'अंदर आने से पहले जानें कौन आ रहा है।',
        sub: 'पूरी तरह स्मार्टफोन पर काम करने वाले 4 गेट एंट्री फ्लो — कोई हार्डवेयर नहीं, कोई QR रीडर डिवाइस नहीं, कोई इंस्टॉलेशन नहीं।',
        features: [
          'OTP-आधारित पहले से स्वीकृत invite — निवासी विज़िटर को कोड शेयर करता है',
          'वॉक-इन लॉगिंग, निवासी के फोन पर रीयल-टाइम पुश के साथ',
          'शेड्यूल के साथ maid, कुक और driver के लिए trusted pass',
          'डिलीवरी ऑटो-एग्जिट टाइमर — गार्ड को मैन्युअल फॉलो-अप की जरूरत नहीं',
          'टाइमस्टैम्प और अप्रूवल रिकॉर्ड के साथ पूरा गेट लॉग',
        ],
        phone: {
          header: { label: 'गेट एंट्री · OTP वेरिफाई', sub: 'गार्ड व्यू' },
          card1: { title: 'विज़िटर OTP डालें', sub: 'रवि कुमार · फ्लैट 204' },
          card2: { title: 'एंट्री स्वीकृत', sub: '10:42 AM · 27 जून' },
          card3: { title: 'एग्जिट लॉग हुआ', sub: '11:14 AM · 32 मिनट विज़िट' },
          badge: { value: '24', label: 'आज के विज़िटर' },
        },
      },
      {
        id: 'maintenance',
        label: 'मेंटेनेंस और बिलिंग',
        headline: 'मासिक फीस कलेक्शन की परेशानी खत्म करें।',
        sub: 'एक बार में मेंटेनेंस बिल बनाएं, सभी निवासियों को अपने-आप भेजें, और किसने भुगतान किया है इसे पूरे defaulter रिपोर्ट के साथ ट्रैक करें।',
        features: [
          'सभी फ्लैट या खास wings के लिए वन-क्लिक बिल जनरेशन',
          'निवासी देखते हैं ब्रेकडाउन: base + penalty + discount = कुल देय',
          'एडमिन पेमेंट प्राप्त होने पर मार्क करता है → तुरंत रसीद बन जाती है',
          'संपर्क जानकारी और बकाया राशि के साथ Defaulter लिस्ट',
          'पेमेंट मेथड, transaction ID और रसीद के साथ बिल हिस्ट्री',
        ],
        phone: {
          header: { label: 'मेंटेनेंस बिल', sub: 'जून 2026' },
          card1: { title: '₹2,400 देय', sub: 'जून मेंटेनेंस · 10 तारीख तक देय' },
          card2: { title: '₹3,100 प्राप्त हुए', sub: 'फ्लैट 201 · UPI से भुगतान' },
          card3: { title: '12 डिफॉल्टर', sub: '₹28,800 कुल बकाया' },
          badge: { value: '₹1.2L', label: 'इस महीने' },
        },
      },
      {
        id: 'community',
        label: 'कम्युनिटी और नोटिस',
        headline: 'WhatsApp ग्रुप की अफरा-तफरी खत्म करें।',
        sub: 'टैग वाले structured नोटिस, ऐसे पोल जिनमें निवासी वाकई वोट करते हैं, और एक कम्युनिटी हेल्प बोर्ड — सब एक जगह पर।',
        features: [
          'टैग किए नोटिस: Urgent / Finance / Event / Maintenance / General',
          'Pinned नोटिस एडमिन कंट्रोल के साथ बोर्ड के टॉप पर रहते हैं',
          'पुश डिलीवरी — ऐप खोले बिना भी निवासियों को सूचना मिलती है',
          'कम्युनिटी हेल्प: निवासी-से-निवासी सेवा अनुरोध और ऑफर',
          'रीयल-टाइम रिज़ल्ट चार्ट के साथ पोल — anonymous या नाम सहित वोटिंग',
        ],
        phone: {
          header: { label: 'नोटिस बोर्ड', sub: 'सभी नोटिस' },
          card1: { title: 'शनिवार पानी बंद', sub: 'URGENT · सचिव द्वारा पोस्ट' },
          card2: { title: 'पार्किंग पोल: 84% ने वोट किया', sub: 'प्रस्ताव पास · 2-व्हीलर लॉट' },
          card3: { title: 'प्लंबर रेफरल', sub: 'अंकित शाह · फ्लैट 302' },
          badge: { value: '3', label: 'नए नोटिस' },
        },
      },
    ],
  },
  gu: {
    learn_more: 'આ વિશે વધુ જાણો',
    demos: [
      {
        id: 'visitor',
        label: 'વિઝિટર મેનેજમેન્ટ',
        headline: 'તેઓ અંદર આવે એ પહેલાં જાણો કોણ આવે છે.',
        sub: 'સંપૂર્ણપણે સ્માર્ટફોન પર કામ કરતા 4 ગેટ એન્ટ્રી ફ્લો — કોઈ હાર્ડવેર નહીં, કોઈ QR રીડર ડિવાઇસ નહીં, કોઈ ઇન્સ્ટોલેશન જરૂરી નથી.',
        features: [
          'OTP-આધારિત પહેલેથી-મંજૂર invite — રેસિડન્ટ વિઝિટરને કોડ શેર કરે છે',
          'રેસિડન્ટના ફોન પર રીયલ-ટાઈમ પુશ સાથે વોક-ઈન લોગિંગ',
          'શેડ્યુલ સાથે maid, cook અને driver માટે trusted pass',
          'ડિલિવરી ઓટો-એક્ઝિટ ટાઈમર — ગાર્ડને મેન્યુઅલ ફોલો-અપની જરૂર નહીં',
          'ટાઈમસ્ટેમ્પ અને મંજૂરી રેકોર્ડ સાથે સંપૂર્ણ ગેટ લોગ',
        ],
        phone: {
          header: { label: 'ગેટ એન્ટ્રી · OTP વેરિફાય', sub: 'ગાર્ડ વ્યુ' },
          card1: { title: 'વિઝિટર OTP દાખલ કરો', sub: 'રવિ કુમાર · ફ્લેટ 204' },
          card2: { title: 'એન્ટ્રી મંજૂર', sub: '10:42 AM · 27 જૂન' },
          card3: { title: 'એક્ઝિટ લોગ થયું', sub: '11:14 AM · 32 મિનિટ વિઝિટ' },
          badge: { value: '24', label: 'આજના વિઝિટર' },
        },
      },
      {
        id: 'maintenance',
        label: 'મેન્ટેનન્સ અને બિલિંગ',
        headline: 'માસિક ફી કલેક્શનની અંધાધૂંધી ખતમ કરો.',
        sub: 'એક વાર મેન્ટેનન્સ બિલ બનાવો, બધા રેસિડન્ટ્સને આપોઆપ મોકલો, અને કોણે ચૂકવ્યું છે તે સંપૂર્ણ defaulter રિપોર્ટ સાથે ટ્રેક કરો.',
        features: [
          'બધા ફ્લેટ અથવા ચોક્કસ wings માટે વન-ક્લિક બિલ જનરેશન',
          'રેસિડન્ટ્સ જુએ છે breakdown: base + penalty + discount = કુલ દેય',
          'એડમિન પેમેન્ટ મળ્યાનું માર્ક કરે → તરત જ રસીદ જનરેટ થાય છે',
          'સંપર્ક માહિતી અને બાકી રકમ સાથે Defaulter લિસ્ટ',
          'પેમેન્ટ મેથડ, transaction ID અને રસીદ સાથે બિલ હિસ્ટ્રી',
        ],
        phone: {
          header: { label: 'મેન્ટેનન્સ બિલ', sub: 'જૂન 2026' },
          card1: { title: '₹2,400 દેય', sub: 'જૂન મેન્ટેનન્સ · 10મી સુધીમાં દેય' },
          card2: { title: '₹3,100 મળ્યા', sub: 'ફ્લેટ 201 · UPI થી ચૂકવણી' },
          card3: { title: '12 ડિફોલ્ટર', sub: '₹28,800 કુલ બાકી' },
          badge: { value: '₹1.2L', label: 'આ મહિને' },
        },
      },
      {
        id: 'community',
        label: 'કોમ્યુનિટી અને નોટિસ',
        headline: 'WhatsApp ગ્રુપની અંધાધૂંધી બદલો.',
        sub: 'ટેગ સાથે structured નોટિસ, પોલ જેમાં રેસિડન્ટ્સ ખરેખર વોટ કરે છે, અને એક કોમ્યુનિટી હેલ્પ બોર્ડ — બધું એક જ જગ્યાએ.',
        features: [
          'ટેગ કરેલી નોટિસ: Urgent / Finance / Event / Maintenance / General',
          'Pinned નોટિસ એડમિન કંટ્રોલ સાથે બોર્ડની ટોચ પર રહે છે',
          'પુશ ડિલિવરી — એપ ખોલ્યા વગર પણ રેસિડન્ટ્સને નોટિફિકેશન મળે છે',
          'કોમ્યુનિટી હેલ્પ: રેસિડન્ટ-થી-રેસિડન્ટ સેવા વિનંતી અને ઓફર',
          'રીયલ-ટાઈમ રિઝલ્ટ ચાર્ટ સાથે પોલ — anonymous અથવા નામ સાથે વોટિંગ',
        ],
        phone: {
          header: { label: 'નોટિસ બોર્ડ', sub: 'બધી નોટિસ' },
          card1: { title: 'શનિવારે પાણી કાપ', sub: 'URGENT · સેક્રેટરી દ્વારા પોસ્ટ' },
          card2: { title: 'પાર્કિંગ પોલ: 84% એ વોટ કર્યો', sub: 'ઠરાવ પાસ · 2-વ્હીલર લોટ' },
          card3: { title: 'પ્લમ્બર રેફરલ', sub: 'અંકિત શાહ · ફ્લેટ 302' },
          badge: { value: '3', label: 'નવી નોટિસ' },
        },
      },
    ],
  },
  ta: {
    learn_more: 'இதைப் பற்றி மேலும் அறிக',
    demos: [
      {
        id: 'visitor',
        label: 'விசிட்டர் மேலாண்மை',
        headline: 'அவர்கள் உள்ளே நுழைவதற்கு முன்பே யார் வருகிறார்கள் என்று அறியுங்கள்.',
        sub: 'முழுவதுமாக ஸ்மார்ட்போன்களில் இயங்கும் 4 கேட் என்ட்ரி ஃப்ளோக்கள் — ஹார்டவேர் இல்லை, QR ரீடர் டிவைஸ் இல்லை, இன்ஸ்டாலேஷன் தேவையில்லை.',
        features: [
          'OTP-அடிப்படையிலான முன் அனுமதிக்கப்பட்ட invite — வசிப்பாளர் விசிட்டருக்கு கோடை பகிர்கிறார்',
          'வசிப்பாளரின் போனுக்கு நேரடி புஷ் அறிவிப்புடன் வாக்-இன் பதிவு',
          'அட்டவணையுடன் maid, cook மற்றும் driver-க்கான trusted pass',
          'டெலிவரி ஆட்டோ-எக்ஸிட் டைமர் — காவலருக்கு கைமுறை பின்தொடர்தல் தேவையில்லை',
          'நேர முத்திரைகள் மற்றும் அனுமதி பதிவுகளுடன் முழுமையான கேட் லாக்',
        ],
        phone: {
          header: { label: 'கேட் என்ட்ரி · OTP வெரிஃபை', sub: 'காவலர் காட்சி' },
          card1: { title: 'விசிட்டர் OTP-ஐ உள்ளிடவும்', sub: 'ரவி குமார் · ஃப்ளாட் 204' },
          card2: { title: 'நுழைவு அங்கீகரிக்கப்பட்டது', sub: '10:42 AM · 27 ஜூன்' },
          card3: { title: 'வெளியேறியது பதிவானது', sub: '11:14 AM · 32 நிமிட வருகை' },
          badge: { value: '24', label: 'இன்றைய விசிட்டர்கள்' },
        },
      },
      {
        id: 'maintenance',
        label: 'மெயின்டெனன்ஸ் & பில்லிங்',
        headline: 'மாதாந்திர கட்டண வசூல் குழப்பத்தை முடிவுக்குக் கொண்டு வாருங்கள்.',
        sub: 'மெயின்டெனன்ஸ் பில்களை ஒரே முறை உருவாக்கி, அனைத்து வசிப்பாளர்களுக்கும் தானாகவே அனுப்பி, யார் செலுத்தினார்கள் என்பதை முழு defaulter அறிக்கையுடன் கண்காணிக்கவும்.',
        features: [
          'அனைத்து ஃப்ளாட்கள் அல்லது குறிப்பிட்ட wings-க்கான ஒரு-கிளிக் பில் உருவாக்கம்',
          'வசிப்பாளர்கள் breakdown-ஐப் பார்க்கிறார்கள்: base + penalty + discount = மொத்த நிலுவை',
          'நிர்வாகி பணம் பெறப்பட்டதைக் குறிக்கிறார் → உடனடியாக ரசீது உருவாகிறது',
          'தொடர்பு விவரங்கள் மற்றும் நிலுவைத் தொகையுடன் Defaulter பட்டியல்',
          'பணம் செலுத்தும் முறை, transaction ID மற்றும் ரசீதுடன் பில் வரலாறு',
        ],
        phone: {
          header: { label: 'மெயின்டெனன்ஸ் பில்கள்', sub: 'ஜூன் 2026' },
          card1: { title: '₹2,400 நிலுவை', sub: 'ஜூன் மெயின்டெனன்ஸ் · 10ம் தேதிக்குள் செலுத்த வேண்டும்' },
          card2: { title: '₹3,100 வசூலிக்கப்பட்டது', sub: 'ஃப்ளாட் 201 · UPI மூலம் செலுத்தப்பட்டது' },
          card3: { title: '12 defaulters', sub: '₹28,800 மொத்த நிலுவை' },
          badge: { value: '₹1.2L', label: 'இந்த மாதம்' },
        },
      },
      {
        id: 'community',
        label: 'சமூகம் & அறிவிப்புகள்',
        headline: 'WhatsApp குரூப் குழப்பத்தை மாற்றுங்கள்.',
        sub: 'குறியிடப்பட்ட notices, வசிப்பாளர்கள் உண்மையில் வாக்களிக்கும் polls, மற்றும் ஒரு community help board — அனைத்தும் ஒரே இடத்தில்.',
        features: [
          'குறியிடப்பட்ட அறிவிப்புகள்: Urgent / Finance / Event / Maintenance / General',
          'Pinned அறிவிப்புகள் நிர்வாக கட்டுப்பாட்டுடன் போர்டின் மேலே இருக்கும்',
          'புஷ் டெலிவரி — ஆப்பைத் திறக்காமலேயே வசிப்பாளர்களுக்கு அறிவிப்பு கிடைக்கும்',
          'Community Help: வசிப்பாளர்-க்கு-வசிப்பாளர் சேவை கோரிக்கைகள் மற்றும் ஆஃபர்கள்',
          'நேரடி முடிவு விளக்கப்படங்களுடன் Polls — anonymous அல்லது பெயருடன் வாக்களிப்பு',
        ],
        phone: {
          header: { label: 'நோட்டீஸ் போர்டு', sub: 'அனைத்து அறிவிப்புகள்' },
          card1: { title: 'சனிக்கிழமை தண்ணீர் துண்டிப்பு', sub: 'URGENT · செயலாளரால் இடப்பட்டது' },
          card2: { title: 'பார்க்கிங் போல்: 84% வாக்களித்தனர்', sub: 'தீர்மானம் நிறைவேறியது · 2-சக்கர வாகன இடம்' },
          card3: { title: 'பிளம்பர் பரிந்துரை', sub: 'அன்கித் ஷா · ஃப்ளாட் 302' },
          badge: { value: '3', label: 'புதிய அறிவிப்புகள்' },
        },
      },
    ],
  },
  mr: {
    learn_more: 'याबद्दल अधिक जाणून घ्या',
    demos: [
      {
        id: 'visitor',
        label: 'व्हिजिटर मॅनेजमेंट',
        headline: 'ते आत येण्यापूर्वीच कोण येत आहे हे जाणून घ्या.',
        sub: 'पूर्णपणे स्मार्टफोनवर काम करणारे 4 गेट एंट्री फ्लो — हार्डवेअर नाही, QR रीडर डिव्हाइस नाही, इन्स्टॉलेशनची गरज नाही.',
        features: [
          'OTP-आधारित आधीच मंजूर invite — रहिवासी व्हिजिटरला कोड शेअर करतो',
          'रहिवाशाच्या फोनवर रिअल-टाइम पुशसह वॉक-इन लॉगिंग',
          'शेड्युलसह maid, cook आणि driver साठी trusted pass',
          'डिलिव्हरी ऑटो-एक्झिट टायमर — गार्डला मॅन्युअल फॉलो-अपची गरज नाही',
          'टाइमस्टॅम्प आणि मंजुरी रेकॉर्डसह संपूर्ण गेट लॉग',
        ],
        phone: {
          header: { label: 'गेट एंट्री · OTP व्हेरिफाय', sub: 'गार्ड व्ह्यू' },
          card1: { title: 'व्हिजिटर OTP टाका', sub: 'रवी कुमार · फ्लॅट 204' },
          card2: { title: 'एंट्री मंजूर', sub: '10:42 AM · 27 जून' },
          card3: { title: 'एक्झिट लॉग झाले', sub: '11:14 AM · 32 मिनिटे भेट' },
          badge: { value: '24', label: 'आजचे व्हिजिटर' },
        },
      },
      {
        id: 'maintenance',
        label: 'मेंटेनन्स आणि बिलिंग',
        headline: 'मासिक फी कलेक्शनचा गोंधळ संपवा.',
        sub: 'एकदाच मेंटेनन्स बिल तयार करा, सर्व रहिवाशांना आपोआप पाठवा, आणि कोणी पेमेंट केले आहे ते पूर्ण defaulter रिपोर्टसह ट्रॅक करा.',
        features: [
          'सर्व फ्लॅट्स किंवा विशिष्ट wings साठी वन-क्लिक बिल जनरेशन',
          'रहिवासी breakdown पाहतात: base + penalty + discount = एकूण देय',
          'अ‍ॅडमिन पेमेंट मिळाल्याचे मार्क करतो → त्वरित पावती तयार होते',
          'संपर्क माहिती आणि थकीत रकमेसह Defaulter यादी',
          'पेमेंट पद्धत, transaction ID आणि पावतीसह बिल इतिहास',
        ],
        phone: {
          header: { label: 'मेंटेनन्स बिल', sub: 'जून 2026' },
          card1: { title: '₹2,400 देय', sub: 'जून मेंटेनन्स · 10 तारखेपर्यंत देय' },
          card2: { title: '₹3,100 जमा झाले', sub: 'फ्लॅट 201 · UPI द्वारे पेमेंट' },
          card3: { title: '12 डिफॉल्टर', sub: '₹28,800 एकूण थकबाकी' },
          badge: { value: '₹1.2L', label: 'या महिन्यात' },
        },
      },
      {
        id: 'community',
        label: 'कम्युनिटी आणि नोटीस',
        headline: 'WhatsApp ग्रुपचा गोंधळ बदला.',
        sub: 'टॅगसह structured नोटीस, ज्यात रहिवासी खरोखर मतदान करतात असे polls, आणि एक community help बोर्ड — सर्व एकाच ठिकाणी.',
        features: [
          'टॅग केलेल्या नोटीस: Urgent / Finance / Event / Maintenance / General',
          'Pinned नोटीस अ‍ॅडमिन कंट्रोलसह बोर्डच्या वर राहतात',
          'पुश डिलिव्हरी — अ‍ॅप न उघडताही रहिवाशांना सूचना मिळते',
          'Community Help: रहिवासी-ते-रहिवासी सेवा विनंत्या आणि ऑफर',
          'रिअल-टाइम निकाल चार्टसह Polls — anonymous किंवा नावासह मतदान',
        ],
        phone: {
          header: { label: 'नोटीस बोर्ड', sub: 'सर्व नोटीस' },
          card1: { title: 'शनिवारी पाणी बंद', sub: 'URGENT · सचिवांनी पोस्ट केले' },
          card2: { title: 'पार्किंग पोल: 84% ने मतदान केले', sub: 'ठराव मंजूर · 2-व्हीलर लॉट' },
          card3: { title: 'प्लंबर रेफरल', sub: 'अंकित शाह · फ्लॅट 302' },
          badge: { value: '3', label: 'नवीन नोटीस' },
        },
      },
    ],
  },
  pa: {
    learn_more: 'ਇਸ ਬਾਰੇ ਹੋਰ ਜਾਣੋ',
    demos: [
      {
        id: 'visitor',
        label: 'ਵਿਜ਼ਿਟਰ ਮੈਨੇਜਮੈਂਟ',
        headline: 'ਉਨ੍ਹਾਂ ਦੇ ਅੰਦਰ ਆਉਣ ਤੋਂ ਪਹਿਲਾਂ ਜਾਣੋ ਕੌਣ ਆ ਰਿਹਾ ਹੈ।',
        sub: 'ਪੂਰੀ ਤਰ੍ਹਾਂ ਸਮਾਰਟਫੋਨ \'ਤੇ ਕੰਮ ਕਰਨ ਵਾਲੇ 4 ਗੇਟ ਐਂਟਰੀ ਫਲੋ — ਕੋਈ ਹਾਰਡਵੇਅਰ ਨਹੀਂ, ਕੋਈ QR ਰੀਡਰ ਡਿਵਾਈਸ ਨਹੀਂ, ਕੋਈ ਇੰਸਟਾਲੇਸ਼ਨ ਲੋੜੀਂਦੀ ਨਹੀਂ।',
        features: [
          'OTP-ਅਧਾਰਿਤ ਪਹਿਲਾਂ ਤੋਂ ਮਨਜ਼ੂਰ invite — ਨਿਵਾਸੀ ਵਿਜ਼ਿਟਰ ਨਾਲ ਕੋਡ ਸਾਂਝਾ ਕਰਦਾ ਹੈ',
          'ਨਿਵਾਸੀ ਦੇ ਫੋਨ \'ਤੇ ਰੀਅਲ-ਟਾਈਮ ਪੁਸ਼ ਨਾਲ ਵਾਕ-ਇਨ ਲੌਗਿੰਗ',
          'ਸ਼ਡਿਊਲ ਨਾਲ maid, cook ਅਤੇ driver ਲਈ trusted pass',
          'ਡਿਲੀਵਰੀ ਆਟੋ-ਐਗਜ਼ਿਟ ਟਾਈਮਰ — ਗਾਰਡ ਨੂੰ ਮੈਨੁਅਲ ਫਾਲੋ-ਅੱਪ ਦੀ ਲੋੜ ਨਹੀਂ',
          'ਟਾਈਮਸਟੈਂਪ ਅਤੇ ਮਨਜ਼ੂਰੀ ਰਿਕਾਰਡਾਂ ਨਾਲ ਪੂਰਾ ਗੇਟ ਲੌਗ',
        ],
        phone: {
          header: { label: 'ਗੇਟ ਐਂਟਰੀ · OTP ਵੈਰੀਫਾਈ', sub: 'ਗਾਰਡ ਵਿਊ' },
          card1: { title: 'ਵਿਜ਼ਿਟਰ OTP ਦਰਜ ਕਰੋ', sub: 'ਰਵੀ ਕੁਮਾਰ · ਫਲੈਟ 204' },
          card2: { title: 'ਐਂਟਰੀ ਮਨਜ਼ੂਰ', sub: '10:42 AM · 27 ਜੂਨ' },
          card3: { title: 'ਐਗਜ਼ਿਟ ਲੌਗ ਹੋਇਆ', sub: '11:14 AM · 32 ਮਿੰਟ ਵਿਜ਼ਿਟ' },
          badge: { value: '24', label: 'ਅੱਜ ਦੇ ਵਿਜ਼ਿਟਰ' },
        },
      },
      {
        id: 'maintenance',
        label: 'ਮੇਂਟੇਨੈਂਸ ਅਤੇ ਬਿਲਿੰਗ',
        headline: 'ਮਹੀਨਾਵਾਰ ਫੀਸ ਕਲੈਕਸ਼ਨ ਦੀ ਹਫੜਾ-ਦਫੜੀ ਖਤਮ ਕਰੋ।',
        sub: 'ਇੱਕ ਵਾਰ ਮੇਂਟੇਨੈਂਸ ਬਿੱਲ ਬਣਾਓ, ਸਾਰੇ ਨਿਵਾਸੀਆਂ ਨੂੰ ਆਪਣੇ-ਆਪ ਭੇਜੋ, ਅਤੇ ਕਿਸ ਨੇ ਭੁਗਤਾਨ ਕੀਤਾ ਹੈ ਇਸਨੂੰ ਪੂਰੀ defaulter ਰਿਪੋਰਟ ਨਾਲ ਟ੍ਰੈਕ ਕਰੋ।',
        features: [
          'ਸਾਰੇ ਫਲੈਟਾਂ ਜਾਂ ਖਾਸ wings ਲਈ ਵਨ-ਕਲਿੱਕ ਬਿੱਲ ਜਨਰੇਸ਼ਨ',
          'ਨਿਵਾਸੀ breakdown ਵੇਖਦੇ ਹਨ: base + penalty + discount = ਕੁੱਲ ਦੇਣਦਾਰੀ',
          'ਐਡਮਿਨ ਭੁਗਤਾਨ ਮਿਲਣ \'ਤੇ ਮਾਰਕ ਕਰਦਾ ਹੈ → ਤੁਰੰਤ ਰਸੀਦ ਬਣਦੀ ਹੈ',
          'ਸੰਪਰਕ ਜਾਣਕਾਰੀ ਅਤੇ ਬਕਾਇਆ ਰਕਮ ਨਾਲ Defaulter ਸੂਚੀ',
          'ਭੁਗਤਾਨ ਵਿਧੀ, transaction ID ਅਤੇ ਰਸੀਦ ਨਾਲ ਬਿੱਲ ਇਤਿਹਾਸ',
        ],
        phone: {
          header: { label: 'ਮੇਂਟੇਨੈਂਸ ਬਿੱਲ', sub: 'ਜੂਨ 2026' },
          card1: { title: '₹2,400 ਦੇਣਦਾਰੀ', sub: 'ਜੂਨ ਮੇਂਟੇਨੈਂਸ · 10 ਤਾਰੀਖ ਤੱਕ ਦੇਣੀ' },
          card2: { title: '₹3,100 ਇਕੱਠੇ ਹੋਏ', sub: 'ਫਲੈਟ 201 · UPI ਰਾਹੀਂ ਭੁਗਤਾਨ' },
          card3: { title: '12 ਡਿਫਾਲਟਰ', sub: '₹28,800 ਕੁੱਲ ਬਕਾਇਆ' },
          badge: { value: '₹1.2L', label: 'ਇਸ ਮਹੀਨੇ' },
        },
      },
      {
        id: 'community',
        label: 'ਕਮਿਊਨਿਟੀ ਅਤੇ ਨੋਟਿਸ',
        headline: 'WhatsApp ਗਰੁੱਪ ਦੀ ਹਫੜਾ-ਦਫੜੀ ਬਦਲੋ।',
        sub: 'ਟੈਗ ਵਾਲੇ structured ਨੋਟਿਸ, ਪੋਲ ਜਿੱਥੇ ਨਿਵਾਸੀ ਅਸਲ ਵਿੱਚ ਵੋਟ ਪਾਉਂਦੇ ਹਨ, ਅਤੇ ਇੱਕ community help ਬੋਰਡ — ਸਭ ਇੱਕੋ ਥਾਂ \'ਤੇ।',
        features: [
          'ਟੈਗ ਕੀਤੇ ਨੋਟਿਸ: Urgent / Finance / Event / Maintenance / General',
          'Pinned ਨੋਟਿਸ ਐਡਮਿਨ ਕੰਟਰੋਲ ਨਾਲ ਬੋਰਡ ਦੇ ਸਿਖਰ \'ਤੇ ਰਹਿੰਦੇ ਹਨ',
          'ਪੁਸ਼ ਡਿਲੀਵਰੀ — ਐਪ ਖੋਲ੍ਹੇ ਬਿਨਾਂ ਵੀ ਨਿਵਾਸੀਆਂ ਨੂੰ ਸੂਚਨਾ ਮਿਲਦੀ ਹੈ',
          'Community Help: ਨਿਵਾਸੀ-ਤੋਂ-ਨਿਵਾਸੀ ਸੇਵਾ ਬੇਨਤੀਆਂ ਅਤੇ ਪੇਸ਼ਕਸ਼ਾਂ',
          'ਰੀਅਲ-ਟਾਈਮ ਨਤੀਜਾ ਚਾਰਟ ਨਾਲ Polls — anonymous ਜਾਂ ਨਾਮ ਨਾਲ ਵੋਟਿੰਗ',
        ],
        phone: {
          header: { label: 'ਨੋਟਿਸ ਬੋਰਡ', sub: 'ਸਾਰੇ ਨੋਟਿਸ' },
          card1: { title: 'ਸ਼ਨੀਵਾਰ ਪਾਣੀ ਬੰਦ', sub: 'URGENT · ਸਕੱਤਰ ਦੁਆਰਾ ਪੋਸਟ ਕੀਤਾ' },
          card2: { title: 'ਪਾਰਕਿੰਗ ਪੋਲ: 84% ਨੇ ਵੋਟ ਕੀਤਾ', sub: 'ਮਤਾ ਪਾਸ · 2-ਵ੍ਹੀਲਰ ਲਾਟ' },
          card3: { title: 'ਪਲੰਬਰ ਰੈਫਰਲ', sub: 'ਅੰਕਿਤ ਸ਼ਾਹ · ਫਲੈਟ 302' },
          badge: { value: '3', label: 'ਨਵੇਂ ਨੋਟਿਸ' },
        },
      },
    ],
  },
};

export function getProductDemoContent(locale: Locale): ProductDemoContent {
  return (content[locale] ?? content.en) as ProductDemoContent;
}