// lib/i18n/content/supportContent.ts
// Locale-aware content for the support/help center page.
import type { Locale } from '../translations';

export interface SupportContentBlock {
  type: 'p' | 'h3' | 'tip';
  text: string;
}

export interface SupportArticle {
  slug: string;
  title: string;
  summary: string;
  readMins: number;
  body: SupportContentBlock[];
}

export interface SupportCategory {
  id: string;
  icon: string;
  label: string;
  colour: string;
  articles: SupportArticle[];
}

export interface SupportPageContent {
  heroBadge: string;
  heroTitle: string;
  heroSub: string;
  noResultsTitle: string;
  noResultsSub: string;
  categories: SupportCategory[];
}

const supportContent: Partial<Record<Locale, SupportPageContent>> = {
  en: {
    heroBadge: '🛟 Help Centre',
    heroTitle: 'How can we help?',
    heroSub: 'Guides for setup, visitors, billing, notices, admin tools, and account help.',
    noResultsTitle: 'No results for your search',
    noResultsSub: 'Try a different keyword or browse the guides below.',
    categories: [
      {
        id: 'getting-started',
        icon: '🚀',
        label: 'Getting Started',
        colour: 'bg-teal/10 text-teal',
        articles: [
          {
            slug: 'register-your-society',
            title: 'How to register your society',
            summary: 'Step-by-step guide to submitting your society application and going live.',
            readMins: 3,
            body: [
              { type: 'p', text: 'Registering your society on SocietyApp takes about 5 minutes. Here is exactly what to do.' },
              { type: 'h3', text: 'Submit your application' },
              { type: 'p', text: 'Fill in your society details, city, and admin contact info on the registration form.' },
              { type: 'tip', text: 'You can start using the gate log immediately after login, even before residents join.' },
            ],
          },
          {
            slug: 'invite-residents',
            title: 'Inviting residents to join',
            summary: 'How to share your Join Code and approve resident registrations.',
            readMins: 2,
            body: [
              { type: 'p', text: 'Every society gets a unique Join Code that residents enter during sign-up.' },
              { type: 'h3', text: 'Find your Join Code' },
              { type: 'p', text: 'Open Society Settings from the admin panel to copy your Join Code.' },
              { type: 'tip', text: 'Share the code in your residents’ WhatsApp group to launch onboarding faster.' },
            ],
          },
        ],
      },
      {
        id: 'visitor',
        icon: '🚪',
        label: 'Visitor Management',
        colour: 'bg-blue-50 text-blue-600',
        articles: [
          {
            slug: 'pre-approve-a-visitor',
            title: 'Pre-approving a visitor with an OTP',
            summary: 'Generate a one-time OTP before your guest arrives so entry is instant.',
            readMins: 2,
            body: [
              { type: 'p', text: 'The fastest way to let a guest in is to generate an OTP before they arrive.' },
              { type: 'h3', text: 'Generate an invite' },
              { type: 'p', text: 'Go to Visitors, create an invite, and share the OTP with the visitor.' },
            ],
          },
          {
            slug: 'walk-in-entry',
            title: 'Logging a walk-in visitor',
            summary: 'How the guard logs an unexpected visitor without an OTP.',
            readMins: 2,
            body: [
              { type: 'p', text: 'When a visitor arrives without an OTP, the guard uses the Walk-In flow.' },
              { type: 'h3', text: 'Guard steps' },
              { type: 'p', text: 'Enter the visitor name and host flat number to notify the resident instantly.' },
            ],
          },
        ],
      },
      {
        id: 'maintenance',
        icon: '💸',
        label: 'Maintenance & Billing',
        colour: 'bg-amber/10 text-amber',
        articles: [
          {
            slug: 'create-a-bill',
            title: 'Creating and publishing a maintenance bill',
            summary: 'How to set up a monthly bill, set due dates, and notify all residents.',
            readMins: 4,
            body: [
              { type: 'p', text: 'Create a draft bill, set the amount and due date, then publish it to residents.' },
              { type: 'h3', text: 'Publish and track' },
              { type: 'p', text: 'Residents see the bill instantly in their app and you can track payments easily.' },
            ],
          },
          {
            slug: 'defaulters-report',
            title: 'Using the Defaulters Report',
            summary: 'Find and manage flats with unpaid or overdue bills.',
            readMins: 2,
            body: [
              { type: 'p', text: 'The Defaulters Report shows every flat with at least one unpaid bill.' },
              { type: 'h3', text: 'Send reminders' },
              { type: 'p', text: 'Open a flat from the report and follow up directly from the same screen.' },
            ],
          },
        ],
      },
      {
        id: 'notices',
        icon: '📢',
        label: 'Notices & Communication',
        colour: 'bg-green/10 text-green',
        articles: [
          {
            slug: 'post-a-notice',
            title: 'Posting a notice to all residents',
            summary: 'Create and publish community notices with tags like Urgent, Finance, or Reminder.',
            readMins: 2,
            body: [
              { type: 'p', text: 'Notices are the fastest way to reach every resident at once.' },
              { type: 'h3', text: 'Create a notice' },
              { type: 'p', text: 'Choose a tag, add your message, and publish it to the society board.' },
            ],
          },
          {
            slug: 'polls',
            title: 'Running a poll or community vote',
            summary: 'Create quick polls for AGM decisions, facility upgrades, and more.',
            readMins: 2,
            body: [
              { type: 'p', text: 'Polls let you take the community’s pulse on any decision.' },
              { type: 'h3', text: 'Close a poll' },
              { type: 'p', text: 'Only admins can close a poll once you have enough votes.' },
            ],
          },
        ],
      },
      {
        id: 'admin',
        icon: '👑',
        label: 'Admin & Settings',
        colour: 'bg-purple-50 text-purple-600',
        articles: [
          {
            slug: 'add-committee-member',
            title: 'Adding a committee member with limited access',
            summary: 'Grant specific modules to a treasurer, secretary, or security officer without full admin rights.',
            readMins: 3,
            body: [
              { type: 'p', text: 'Committee members can get access to specific modules without full admin control.' },
              { type: 'h3', text: 'Assign permissions' },
              { type: 'p', text: 'Choose a role and turn each module permission on or off as needed.' },
            ],
          },
          {
            slug: 'resident-cap-upgrade',
            title: 'What happens when you hit the resident limit',
            summary: 'How resident caps work and how to upgrade to add more residents.',
            readMins: 2,
            body: [
              { type: 'p', text: 'Every plan has a maximum resident count. Upgrade when you need more seats.' },
              { type: 'h3', text: 'Upgrade your plan' },
              { type: 'p', text: 'Go to Upgrades in the admin menu and complete the purchase flow.' },
            ],
          },
        ],
      },
      {
        id: 'account',
        icon: '👤',
        label: 'Account & Profile',
        colour: 'bg-slate-100 text-slate-600',
        articles: [
          {
            slug: 'reset-password',
            title: 'Resetting your password',
            summary: 'How to recover access to your account using the OTP reset flow.',
            readMins: 1,
            body: [
              { type: 'p', text: 'If you forgot your password, use the Forgot Password flow on the login screen.' },
              { type: 'h3', text: 'Reset steps' },
              { type: 'p', text: 'Enter your email, receive an OTP, and choose a new password.' },
            ],
          },
          {
            slug: 'update-profile',
            title: 'Updating your profile and family members',
            summary: 'Change your name, phone number, photo, and add family members to your flat.',
            readMins: 2,
            body: [
              { type: 'p', text: 'Your profile stores your name, flat, phone number, and family members.' },
              { type: 'h3', text: 'Edit profile' },
              { type: 'p', text: 'Tap your profile icon and choose Edit Profile to update your details.' },
            ],
          },
        ],
      },
    ],
  },
  hi: {
    heroBadge: '🛟 हेल्प सेंटर',
    heroTitle: 'हम आपकी कैसे मदद कर सकते हैं?',
    heroSub: 'सेटअप, विजिटर, बिलिंग, नोटिस, एडमिन टूल्स, और अकाउंट मदद के लिए गाइड.',
    noResultsTitle: 'आपकी खोज का कोई परिणाम नहीं मिला',
    noResultsSub: 'अलग कीवर्ड आज़माएँ या नीचे दी गई गाइड्स ब्राउज़ करें।',
    categories: [
      {
        id: 'getting-started',
        icon: '🚀',
        label: 'शुरुआत',
        colour: 'bg-teal/10 text-teal',
        articles: [
          {
            slug: 'register-your-society',
            title: 'अपनी सोसायटी कैसे रजिस्टर करें',
            summary: 'अपनी सोसायटी की आवेदन प्रक्रिया पूरी करके लाइव होने तक की चरण-दर-चरण गाइड।',
            readMins: 3,
            body: [
              { type: 'p', text: 'SocietyApp पर सोसायटी रजिस्टर करने में लगभग 5 मिनट लगते हैं।' },
              { type: 'h3', text: 'अर्जी सबमिट करें' },
              { type: 'p', text: 'रजिस्ट्रेशन फॉर्म में सोसायटी की जानकारी, शहर और एडमिन संपर्क भरें।' },
            ],
          },
          {
            slug: 'invite-residents',
            title: 'रेजिडेंट्स को जोड़ना',
            summary: 'अपना Join Code साझा करना और रेजिडेंट्स के रजिस्ट्रेशन को अप्रूव करना।',
            readMins: 2,
            body: [
              { type: 'p', text: 'हर सोसायटी को एक अनोखा Join Code मिलता है जिसे रेजिडेंट्स साइन-अप के दौरान दर्ज करते हैं।' },
              { type: 'h3', text: 'Join Code ढूंढ़ें' },
              { type: 'p', text: 'एडमिन पैनल में Society Settings खोलकर Join Code कॉपी करें।' },
            ],
          },
        ],
      },
      {
        id: 'visitor',
        icon: '🚪',
        label: 'विजिटर मैनेजमेंट',
        colour: 'bg-blue-50 text-blue-600',
        articles: [
          {
            slug: 'pre-approve-a-visitor',
            title: 'OTP से विजिटर को पहले से अप्रूव करना',
            summary: 'अतिथि के आने से पहले एक बार का OTP जनरेट करें ताकि एंट्री तुरंत हो जाए।',
            readMins: 2,
            body: [
              { type: 'p', text: 'अतिथि को जल्दी अंदर लाने का सबसे अच्छा तरीका है OTP पहले से बनाना।' },
              { type: 'h3', text: 'इनवाइट बनाएं' },
              { type: 'p', text: 'Visitors पर जाएं, इनवाइट बनाएं, और OTP अतिथि के साथ साझा करें।' },
            ],
          },
          {
            slug: 'walk-in-entry',
            title: 'वॉक-इन विजिटर को लॉग करना',
            summary: 'गार्ड OTP के बिना अचानक आए विजिटर को कैसे लॉग करता है।',
            readMins: 2,
            body: [
              { type: 'p', text: 'जब कोई विजिटर OTP के बिना आता है, तो गार्ड Walk-In फ्लो का इस्तेमाल करता है।' },
              { type: 'h3', text: 'गार्ड के steg' },
              { type: 'p', text: 'विजिटर का नाम और होस्ट फ्लैट नंबर भरकर रेजिडेंट को तुरंत नोटिफाई करें।' },
            ],
          },
        ],
      },
      {
        id: 'maintenance',
        icon: '💸',
        label: 'मेंटेनेंस और बिलिंग',
        colour: 'bg-amber/10 text-amber',
        articles: [
          {
            slug: 'create-a-bill',
            title: 'मेंटेनेंस बिल बनाना और पब्लिश करना',
            summary: 'मासिक बिल सेट अप करने, ड्यू डेट तय करने, और सभी रेजिडेंट्स को सूचित करने की प्रक्रिया।',
            readMins: 4,
            body: [
              { type: 'p', text: 'एक ड्राफ्ट बिल बनाएं, राशि और ड्यू डेट तय करें, फिर उसे रेजिडेंट्स को पब्लिश करें।' },
              { type: 'h3', text: 'पब्लिश और ट्रैक करें' },
              { type: 'p', text: 'रेजिडेंट्स अपने ऐप में बिल तुरंत देखते हैं और आप पेमेंट ट्रैक कर सकते हैं।' },
            ],
          },
          {
            slug: 'defaulters-report',
            title: 'डिफॉल्टर रिपोर्ट का उपयोग',
            summary: 'उन फ्लैट्स को ढूंढें और मैनेज करें जिन पर unpaid या overdue बिल हैं।',
            readMins: 2,
            body: [
              { type: 'p', text: 'डिफॉल्टर रिपोर्ट उन सभी फ्लैट्स दिखाती है जिन पर कम से कम एक unpaid बिल है।' },
              { type: 'h3', text: 'रिमाइंडर भेजें' },
              { type: 'p', text: 'रिपोर्ट से किसी फ्लैट पर जाकर उसी स्क्रीन से फॉलो-अप करें।' },
            ],
          },
        ],
      },
      {
        id: 'notices',
        icon: '📢',
        label: 'नोटिस और कम्युनिकेशन',
        colour: 'bg-green/10 text-green',
        articles: [
          {
            slug: 'post-a-notice',
            title: 'सभी रेजिडेंट्स को नोटिस पोस्ट करना',
            summary: 'Urgent, Finance, या Reminder जैसे टैग्स के साथ कम्युनिटी नोटिस बनाएं और पब्लिश करें।',
            readMins: 2,
            body: [
              { type: 'p', text: 'नोटिस हर रेजिडेंट तक एक साथ पहुंचाने का सबसे तेज़ तरीका है।' },
              { type: 'h3', text: 'नोटिस बनाएं' },
              { type: 'p', text: 'एक टैग चुनें, अपना संदेश डालें, और सोसायटी बोर्ड पर पब्लिश करें।' },
            ],
          },
          {
            slug: 'polls',
            title: 'पोल या कम्युनिटी वोट चलाना',
            summary: 'AGM फैसलों, सुविधा अपग्रेड, और अधिक चीजों के लिए तेज़ पोल बनाएं।',
            readMins: 2,
            body: [
              { type: 'p', text: 'पोल्स किसी भी फैसले पर कम्युनिटी की प्रतिक्रिया जानने में मदद करते हैं।' },
              { type: 'h3', text: 'पोल बंद करें' },
              { type: 'p', text: 'एक बार पर्याप्त वोटों के बाद सिर्फ एडमिन ही पोल बंद कर सकते हैं।' },
            ],
          },
        ],
      },
      {
        id: 'admin',
        icon: '👑',
        label: 'एडमिन और सेटिंग्स',
        colour: 'bg-purple-50 text-purple-600',
        articles: [
          {
            slug: 'add-committee-member',
            title: 'सीमित एक्सेस के साथ कमेटी मेंबर जोड़ना',
            summary: 'ट्रेज़र, सचिव, या सिक्योरिटी ऑफिसर को फुल एडमिन राइट्स के बिना विशिष्ट मॉड्यूल दें।',
            readMins: 3,
            body: [
              { type: 'p', text: 'कमेटी मेंबर्स को फुल एडमिन कंट्रोल के बिना विशिष्ट मॉड्यूल्स तक एक्सेस मिल सकता है।' },
              { type: 'h3', text: 'परमिशन असाइन करें' },
              { type: 'p', text: 'एक रोल चुनें और हर मॉड्यूल की परमिशन जरूरत के अनुसार चालू/बंद करें।' },
            ],
          },
          {
            slug: 'resident-cap-upgrade',
            title: 'जब आपके रेजिडेंट लिमिट पूरी हो जाएँ तो क्या होता है',
            summary: 'रेजिडेंट कैप्स कैसे काम करते हैं और और अधिक रेजिडेंट्स जोड़ने के लिए कैसे अपग्रेड करें।',
            readMins: 2,
            body: [
              { type: 'p', text: 'हर प्लान की अधिकतम रेजिडेंट संख्या होती है। ज्यादा सीटों की ज़रूरत होने पर अपग्रेड करें।' },
              { type: 'h3', text: 'अपने प्लान को अपग्रेड करें' },
              { type: 'p', text: 'एडमिन मेनू में Upgrades पर जाएं और खरीदारी पूरी करें।' },
            ],
          },
        ],
      },
      {
        id: 'account',
        icon: '👤',
        label: 'अकाउंट और प्रोफाइल',
        colour: 'bg-slate-100 text-slate-600',
        articles: [
          {
            slug: 'reset-password',
            title: 'पासवर्ड रीसेट करना',
            summary: 'OTP रीसेट फ्लो का उपयोग करके अपने अकाउंट तक फिर से पहुंचना।',
            readMins: 1,
            body: [
              { type: 'p', text: 'अगर आप अपना पासवर्ड भूल गए हैं, तो लॉगिन स्क्रीन पर Forgot Password फ्लो का इस्तेमाल करें।' },
              { type: 'h3', text: 'रीसेट स्टेप्स' },
              { type: 'p', text: 'अपना ईमेल दर्ज करें, OTP प्राप्त करें, और नया पासवर्ड चुनें।' },
            ],
          },
          {
            slug: 'update-profile',
            title: 'अपना प्रोफाइल और फैमिली मेंबर्स अपडेट करना',
            summary: 'अपना नाम, फोन नंबर, फोटो बदलें, और अपने फ्लैट में फैमिली मेंबर्स जोड़ें।',
            readMins: 2,
            body: [
              { type: 'p', text: 'आपका प्रोफाइल आपके नाम, फ्लैट, फोन नंबर, और फैमिली मेंबर्स की जानकारी रखता है।' },
              { type: 'h3', text: 'प्रोफाइल अपडेट करें' },
              { type: 'p', text: 'अपने प्रोफाइल आइकन पर टैप करके Edit Profile चुनें।' },
            ],
          },
        ],
      },
    ],
  },
  gu: {
    heroBadge: '🛟 हेल્પ સેન્ટર',
    heroTitle: 'અમે તમને કેવી રીતે મદદ કરી શકીએ?',
    heroSub: 'સેટઅપ, વિઝિટર, બિલિંગ, નોટિસ, એડમિન ટૂલ્સ, અને એકાઉન્ટ મદદ માટે ગાઇડ્સ.',
    noResultsTitle: 'તમારી શોધ માટે કોઈ પરિણામો મળ્યા નથી',
    noResultsSub: 'અલગ કીવર્ડ અજમાવો અથવા નીચેની ગાઇડ્સ બ્રાઉઝ કરો.',
    categories: [
      {
        id: 'getting-started',
        icon: '🚀',
        label: 'શરુઆત',
        colour: 'bg-teal/10 text-teal',
        articles: [
          {
            slug: 'register-your-society',
            title: 'તમારી સોસાયટી કેવી રીતે રજિસ્ટર કરવી?',
            summary: 'તમારી સોસાયटी માટે અરજી ભરીને લાઈવ થવા સુધીની સ્ટેપ-બાઈ-સ્ટેપ ગાઇડ.',
            readMins: 3,
            body: [
              { type: 'p', text: 'SocietyApp પર સોસાયટી રજિસ્ટર કરવામાં લગભગ 5 મિનિટ લાગે છે.' },
              { type: 'h3', text: 'અરજી સબમિટ કરો' },
              { type: 'p', text: 'રજિસ્ટ્રેશન ફોર્મમાં તમારી સોસાયટીની માહિતી, શહેર અને એડમિન સંપર્ક ભરો.' },
            ],
          },
          {
            slug: 'invite-residents',
            title: 'રેસીડેન્ટ્સને જોડવાની રીત',
            summary: 'તમારો Join Code શેર કરીને અને રેસીડેન્ટ રજિસ્ટ્રેશનને મંજૂરી આપવી.',
            readMins: 2,
            body: [
              { type: 'p', text: 'દરેક સોસાયટીને एक અનન્ય Join Code મળે છે જેને રેસીડેન્ટ્સ સાઇન-અપ દરમિયાન દાખલ કરે છે.' },
              { type: 'h3', text: 'Join Code શોધો' },
              { type: 'p', text: 'એડમિન પેનલમાં Society Settings ખોલીને Join Code કોપી કરો.' },
            ],
          },
        ],
      },
      {
        id: 'visitor',
        icon: '🚪',
        label: 'વિઝિટર મેનેજમેન્ટ',
        colour: 'bg-blue-50 text-blue-600',
        articles: [
          {
            slug: 'pre-approve-a-visitor',
            title: 'OTPથી વિઝિટરને પ્રિ-અપ્રુવ કરવું',
            summary: 'મહેમાન આવતાં પહેલાં એકવારનો OTP જનરેટ કરો જેથી એન્ટ્રી તાત્કાલિક થઈ जाए.',
            readMins: 2,
            body: [
              { type: 'p', text: 'મહેમાનને ઝડપથી અંદર પ્રવેશ આપવાનો સૌથી સારો માર્ગ OTP પહેલાંથી બનાવવો છે.' },
              { type: 'h3', text: 'આમંત્ર્રણ બનાવો' },
              { type: 'p', text: 'Visitors પર જાઓ, આમંત્રણ બનાવો, અને OTP મહેમાન સાથે શેર કરો.' },
            ],
          },
          {
            slug: 'walk-in-entry',
            title: 'વૉક-ઇન વિઝિટરને લોગ કરવું',
            summary: 'गार્ડ OTP વિના અનિચ્છિત વિઝિટરને કેવી રીતે લોગ કરે છે.',
            readMins: 2,
            body: [
              { type: 'p', text: 'જ્યારે વિઝિટર OTP વિના આવે, ત્યારે ગાર્ડ Walk-In ફ્લો વાપરે છે.' },
              { type: 'h3', text: 'ગાર્ડ પગલાં' },
              { type: 'p', text: 'વિઝિટરનું નામ અને હોસ્ટ ફ્લેટ નંબર દાખલ કરો જેથી રેસીડેન્ટને તાત્કાલિક નોટિફાય કરવામાં આવે.' },
            ],
          },
        ],
      },
    ],
  },
  ta: {
    heroBadge: '🛟 உதவி மையம்',
    heroTitle: 'நாங்கள் உங்களுக்கு எப்படி உதவலாம்?',
    heroSub: 'அமைப்பு, விருந்தினர், பில்லிங், அறிவிப்புகள், நிர்வாக கருவிகள் மற்றும் கணக்கு உதவிக்கான வழிகாட்டிகள்.',
    noResultsTitle: 'உங்கள் தேடலுக்கு முடிவுகள் எதுவும் இல்லை',
    noResultsSub: 'வேறொரு முக்கிய சொல்லை முயற்சிக்கவும் அல்லது கீழே உள்ள வழிகாட்டிகளை உலாவவும்.',
    categories: [
      {
        id: 'getting-started',
        icon: '🚀',
        label: 'தொடங்குதல்',
        colour: 'bg-teal/10 text-teal',
        articles: [
          {
            slug: 'register-your-society',
            title: 'உங்கள் சொசைட்டியை எவ்வாறு பதிவு செய்வது',
            summary: 'உங்கள் சொசைட்டி விண்ணப்பத்தை சமர்ப்பித்து நேரலையில் சேர்வதற்கான படிப்படியான வழிகாட்டி.',
            readMins: 3,
            body: [
              { type: 'p', text: 'SocietyApp இல் சொசைட்டியை பதிவு செய்வதற்கு சுமார் 5 நிமிடங்கள் ஆகும்.' },
              { type: 'h3', text: 'உங்கள் விண்ணப்பத்தை சமர்ப்பிக்கவும்' },
              { type: 'p', text: 'பதிவு படிவத்தில் உங்கள் சொசைட்டி தகவல், நகரம் மற்றும் நிர்வாகத் தொடர்புத் தகவலை நிரப்பவும்.' },
            ],
          },
          {
            slug: 'invite-residents',
            title: 'குடியிருப்பாளர்களை அழைப்பது',
            summary: 'உங்கள் Join Code ஐப் பகிர்ந்து குடியிருப்பாளர் பதிவுகளை ஒப்புதல் அளிப்பது.',
            readMins: 2,
            body: [
              { type: 'p', text: 'ஒவ்வொரு சொசைட்டிக்கும் ஒரு தனித்துவமான Join Code உள்ளது, அதை குடியிருப்பாளர்கள் சைன்-அப்பின் போது உள்ளிடுவார்கள்.' },
              { type: 'h3', text: 'Join Code யைக் கண்டறியவும்' },
              { type: 'p', text: 'நிர்வாகப் பலகத்தில் Society Settings திறந்து Join Code ஐ நகலெடுக்கவும்.' },
            ],
          },
        ],
      },
      {
        id: 'visitor',
        icon: '🚪',
        label: 'விருந்தினர் மேலாண்மை',
        colour: 'bg-blue-50 text-blue-600',
        articles: [
          {
            slug: 'pre-approve-a-visitor',
            title: 'OTP மூலம் விருந்தினரை முன்கூட்டியே ஒப்புதல் அளித்தல்',
            summary: 'விருந்தினர் வருவதற்கு முன் ஒரு முறை OTP உருவாக்கி நுழைவை உடனடியாக்கவும்.',
            readMins: 2,
            body: [
              { type: 'p', text: 'விருந்தினரை விரைவாக உள்ளே விடுவதற்கான சிறந்த வழி, அவர்களின் வருகைக்கு முன் OTP உருவாக்குவதாகும்.' },
              { type: 'h3', text: 'அழைப்பை உருவாக்கவும்' },
              { type: 'p', text: 'Visitors என்பதற்குச் சென்று, அழைப்பை உருவாக்கி OTP ஐ விருந்தினருடன் பகிரவும்.' },
            ],
          },
          {
            slug: 'walk-in-entry',
            title: 'வாக்-இன் விருந்தினரை பதிவு செய்தல்',
            summary: 'OTP இன்றி திடீரென வரும் விருந்தினரை காவலர் எவ்வாறு பதிவு செய்கிறார்.',
            readMins: 2,
            body: [
              { type: 'p', text: 'விருந்தினர் OTP இன்றி வந்தால், காவலர் Walk-In ஓட்டத்தைப் பயன்படுத்துகிறார்.' },
              { type: 'h3', text: 'காவலர் படிகள்' },
              { type: 'p', text: 'விருந்தினர் பெயர் மற்றும் ஹோஸ்ட் ஃப்ளாட் எண்ணை உள்ளிட்டு குடியிருப்பாளருக்கு உடனடியாக அறிவிக்கவும்.' },
            ],
          },
        ],
      },
    ],
  },
  mr: {
    heroBadge: '🛟 मदत केंद्र',
    heroTitle: 'आम्ही तुमची कशी मदत करू?',
    heroSub: 'सेटअप, visite, बिलिंग, सूचना, अॅडमिन टूल्स आणि खाते यांच्या मदतीसाठी मार्गदर्शक.',
    noResultsTitle: 'तुमच्या शोधासाठी कोणतेही परिणाम नाहीत',
    noResultsSub: 'वेगळा कीवर्ड वापरून पहा किंवा खालील मार्गदर्शक ब्राउझ करा.',
    categories: [
      {
        id: 'getting-started',
        icon: '🚀',
        label: 'सुरुवात',
        colour: 'bg-teal/10 text-teal',
        articles: [
          {
            slug: 'register-your-society',
            title: 'तुमची सोसायटी कशी नोंदवा?',
            summary: 'तुमची सोसायटी अर्ज सादर करून लाईव्ह होण्यापर्यंतचा चरण-दर-चरण मार्गदर्शक.',
            readMins: 3,
            body: [
              { type: 'p', text: 'SocietyApp वर सोसायटी नोंदणीकृत करण्यासाठी सुमारे 5 मिनिटे लागतात.' },
              { type: 'h3', text: 'अर्ज सबमिट करा' },
              { type: 'p', text: 'नोंदणी फॉर्ममध्ये तुमची सोसायटीची माहिती, शहर आणि अॅडमिन संपर्क भरा.' },
            ],
          },
          {
            slug: 'invite-residents',
            title: 'राहणाऱ्यांना जोडणे',
            summary: 'तुमचा Join Code शेअर करून राहणाऱ्यांच्या नोंदणीला मंजुरी द्या.',
            readMins: 2,
            body: [
              { type: 'p', text: 'प्रत्येक सोसायटीला एक अद्वितीय Join Code मिळतो, जो राहणारे साइन-अप दरम्यान टाकतात.' },
              { type: 'h3', text: 'Join Code शोधा' },
              { type: 'p', text: 'अॅडमिन पॅनेलमध्ये Society Settings उघडून Join Code कॉपी करा.' },
            ],
          },
        ],
      },
      {
        id: 'visitor',
        icon: '🚪',
        label: 'वागणूक व्यवस्थापन',
        colour: 'bg-blue-50 text-blue-600',
        articles: [
          {
            slug: 'pre-approve-a-visitor',
            title: 'OTP सह पाहुण्याला अगोदर मंजुरी देणे',
            summary: 'पाहुणा येण्यापूर्वी एकदाच वापरता येणारा OTP तयार करा आणि प्रवेश त्वरित करा.',
            readMins: 2,
            body: [
              { type: 'p', text: 'पाहुण्याला वेगाने आत सोडण्याचा सोपा मार्ग म्हणजे त्याआधी OTP तयार करणे.' },
              { type: 'h3', text: 'आमंत्रण तयार करा' },
              { type: 'p', text: 'Visitors वर जा, आमंत्रण तयार करा आणि OTP पाहुण्याला शेअर करा.' },
            ],
          },
        ],
      },
    ],
  },
  pa: {
    heroBadge: '🛟 ਸਹਾਇਤਾ ਕੇਂਦਰ',
    heroTitle: 'ਅਸੀਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦੇ ਹਾਂ?',
    heroSub: 'ਸੈਟਅਪ, ਵਿਜ਼ਿਟਰ, ਬਿਲਿੰਗ, ਨੋਟੀਸ, ਐਡਮਿਨ ਟੂਲਾਂ ਅਤੇ ਖਾਤਾ ਸਹਾਇਤਾ ਲਈ ਗਾਈਡਾਂ।',
    noResultsTitle: 'ਤੁਹਾਡੀ ਖੋਜ ਲਈ ਕੋਈ ਨਤੀਜੇ ਨਹੀਂ',
    noResultsSub: 'ਇੱਕ ਵੱਖਰਾ ਕੀਵਰਡ ਅਜ਼ਮਾਓ ਜਾਂ ਹੇਠਾਂ ਦਿੱਤੀਆਂ ਗਾਈਡਾਂ ಬ್ರਾਂਜ਼ ਕਰੋ।',
    categories: [
      {
        id: 'getting-started',
        icon: '🚀',
        label: 'ਸ਼ੁਰੂਆਤ',
        colour: 'bg-teal/10 text-teal',
        articles: [
          {
            slug: 'register-your-society',
            title: 'ਆਪਣੀ ਸੋਸਾਇਟੀ ਕਿਵੇਂ ਰਜਿਸਟਰ ਕਰਵਾਉਂਦਾ ਹੈ?',
            summary: 'ਆਪਣੀ ਸੋਸਾਇਟੀ ਲਈ ਅਰਜ਼ੀ ਭਰਕੇ ਲਾਈਵ ਹੋਣ ਤੱਕ ਦੀ ਕਦਮ-ਦਰ-ਕਦਮ ਗਾਈਡ।',
            readMins: 3,
            body: [
              { type: 'p', text: 'SocietyApp ਤੇ ਸੋਸਾਇਟੀ ਰਜਿਸਟਰ ਕਰਨ ਲਈ ਲਗਭਗ 5 ਮਿੰਟ ਲੱਗਦੇ ਹਨ।' },
              { type: 'h3', text: 'ਅਰਜ਼ੀ ਪੇਸ਼ ਕਰੋ' },
              { type: 'p', text: 'ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਫਾਰਮ ਵਿੱਚ ਆਪਣੀ ਸੋਸਾਇਟੀ ਦੀ ਜਾਣਕਾਰੀ, ਸ਼ਹਿਰ ਅਤੇ ਐਡਮਿਨ ਸੰਪਰਕ ਭਰੋ।' },
            ],
          },
          {
            slug: 'invite-residents',
            title: 'ਰਿਹਾਇਸ਼ੀ ਨੂੰ ਜੋੜਨਾ',
            summary: 'ਆਪਣਾ Join Code ਸਾਂਝਾ ਕਰਕੇ ਰਿਹਾਇਸ਼ੀ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਨੂੰ ਮਨਜ਼ੂਰੀ ਦਿਓ।',
            readMins: 2,
            body: [
              { type: 'p', text: 'ਹਰ ਸੋਸਾਇਟੀ ਨੂੰ ਇੱਕ ਵਿਲੱਖਣ Join Code ਮਿਲਦਾ ਹੈ ਜੋ ਰਿਹਾਇਸ਼ੀ ਸਾਇਨ-ਅਪ ਦੇ ਦੌਰਾਨ ਦਿਓਂਦੇ ਹਨ।' },
              { type: 'h3', text: 'Join Code ਖੋਜੋ' },
              { type: 'p', text: 'ਐਡਮਿਨ ਪੈਨਲ ਵਿੱਚ Society Settings ਖੋਲ ਕੇ Join Code ਕਾਪੀ ਕਰੋ।' },
            ],
          },
        ],
      },
      {
        id: 'visitor',
        icon: '🚪',
        label: 'ਵਿਜ਼ਿਟਰ ਮੈਨਿਜਮੈਂਟ',
        colour: 'bg-blue-50 text-blue-600',
        articles: [
          {
            slug: 'pre-approve-a-visitor',
            title: 'OTP ਨਾਲ ਵਿਜ਼ਿਟਰ ਨੂੰ ਪਹਿਲਾਂ ਤੋਂ ਮਨਜ਼ੂਰੀ',
            summary: 'ਮਹਿਮਾਨ ਆਉਣ ਤੋਂ ਪਹਿਲਾਂ ਇੱਕ ਵਾਰ ਦੀ OTP ਬਣਾਓ ਅਤੇ ਐਂਟਰੀ ਤੇਜ਼ ਕਰੋ।',
            readMins: 2,
            body: [
              { type: 'p', text: 'ਮਹਿਮਾਨ ਨੂੰ ਤੇਜ਼ੀ ਨਾਲ ਅੰਦਰ ਲੈ ਜਾਣ ਦਾ ਸੌਖਾ ਤਰੀਕਾ ਹੈ ਕਿ ਉਹਨਾਂ ਤੋਂ ਪਹਿਲਾਂ OTP ਬਣਾਉਣਾ।' },
              { type: 'h3', text: 'ਆਮਨਤ੍ਰਣ ਬਣਾਓ' },
              { type: 'p', text: 'Visitors ਤੇ ਜਾਓ, ਆਮਨਤ੍ਰਣ ਬਣਾਓ ਅਤੇ OTP ਮਹਿਮਾਨ ਨਾਲ ਸਾਂਝਾ ਕਰੋ।' },
            ],
          },
        ],
      },
    ],
  },
};

export function getSupportContent(locale: Locale): SupportPageContent {
  return supportContent[locale] ?? supportContent.en ?? {
    heroBadge: '🛟 Help Centre',
    heroTitle: 'How can we help?',
    heroSub: 'Guides for common tasks.',
    noResultsTitle: 'No results',
    noResultsSub: 'Try another keyword.',
    categories: [],
  };
}

export default supportContent;
