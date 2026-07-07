// lib/i18n/content/featureContent.ts
// AUTO-GENERATED — EN + HI + GU complete; TA / MR / PA fall back to EN.
// Run /tmp/content_gen build scripts to regenerate after editing.

import type { FeaturePageContent, FeaturePageSlug } from './types';
import type { Locale } from '../translations';

// ─── Content dictionary ─────────────────────────────────────────────────────
const content: Record<FeaturePageSlug, Partial<Record<Locale, FeaturePageContent>>> = {
  "maintenance": {
    en: {
      badge: `Maintenance & Billing`,
      emoji: `💸`,
      headline: `End the WhatsApp payment chase.`,
      headlineAccent: `Maintenance billing, finally sorted.`,
      subline: `Auto-generate monthly bills, track every payment, and give residents a proper digital receipt — without Excel sheets or UPI screenshot chaos.`,
      problems: [
            {
            icon: `📱`,
            title: `UPI screenshots in WhatsApp groups`,
            desc: `Residents send payment screenshots in group chats. No receipt, no audit trail, impossible to reconcile at month end.`
          },
            {
            icon: `📊`,
            title: `Defaulter list on a spreadsheet`,
            desc: `The secretary maintains a manual Excel sheet of who paid and who didn't. It's always out of date.`
          },
            {
            icon: `❓`,
            title: `Residents don't know what they're paying for`,
            desc: `No bill breakdown, no due date notifications, no history. Disputes happen because of zero transparency.`
          },
          ],
      flows: [
            {
            icon: `📋`,
            label: `Admin creates a bill`,
            detail: `Enter bill name (e.g., 'August Maintenance'), amount, and due date. Optionally set flat-specific amounts for different unit sizes.`
          },
            {
            icon: `📤`,
            label: `Bill published to all residents`,
            detail: `One tap to publish. All residents instantly see the bill in their app with full breakdown and due date.`
          },
            {
            icon: `💰`,
            label: `Resident makes payment`,
            detail: `Resident pays via UPI, NEFT, cash, or cheque as usual, then marks the payment method in the app.`
          },
            {
            icon: `✅`,
            label: `Admin confirms & receipt generated`,
            detail: `Admin marks payment received. A digital receipt with bill details, payment date, and amount is auto-generated and saved.`
          },
            {
            icon: `📊`,
            label: `Defaulter report updated live`,
            detail: `Any unpaid bills automatically appear on the Defaulter Report with flat number, resident name, and overdue days.`
          },
          ],
      adminView: {
            title: `⚙️ Admin / Secretary View`,
            points: [
            `Create one-time or recurring monthly bills`,
            `Set flat-specific amounts for 1BHK, 2BHK, 3BHK`,
            `View defaulter report with contact details`,
            `Send automated payment reminders to all defaulters`,
            `Mark payments received and generate receipts`,
            `Export full payment history as CSV for annual audit`,
          ]
          },
      residentView: {
            title: `👤 Resident View`,
            points: [
            `See all outstanding and paid bills in one screen`,
            `View itemised bill breakdown (maintenance, sinking fund, etc.)`,
            `Get push notification 7 days before due date`,
            `Receive digital receipt immediately after admin confirmation`,
            `View full 12-month payment history`,
            `Raise dispute or query on a specific bill`,
          ]
          },
      features: [
            {
            icon: `🔄`,
            title: `Recurring billing`,
            desc: `Set up monthly bills once. They auto-generate on the 1st of each month.`
          },
            {
            icon: `📊`,
            title: `Defaulter report`,
            desc: `Real-time list of unpaid bills. Filter by overdue days, flat, or amount.`
          },
            {
            icon: `🧾`,
            title: `Digital receipts`,
            desc: `Auto-generated PDF receipts with society header, bill details, and payment date.`
          },
            {
            icon: `🏠`,
            title: `Flat-specific amounts`,
            desc: `Different rates for 1BHK, 2BHK, corner units, or any custom grouping.`
          },
            {
            icon: `🔔`,
            title: `Due date reminders`,
            desc: `Automated push notifications 7 days, 3 days, and 1 day before due date.`
          },
            {
            icon: `📁`,
            title: `Annual statement`,
            desc: `Residents can export their full year's payment history for tax or verification.`
          },
          ],
      faqs: [
            {
            q: `Can I create different bill amounts for different flat sizes?`,
            a: `Yes. When creating a bill, you can set flat-specific amounts. For example, 1BHK flats get charged ₹1,500 and 3BHK flats ₹3,000 from the same bill creation screen.`
          },
            {
            q: `Does SocietyApp collect payments on our behalf?`,
            a: `No. SocietyApp is a records and communication tool, not a payment processor. Residents pay via their usual UPI, NEFT, or cash methods, and the admin marks the payment as received.`
          },
            {
            q: `How do I handle special levy collections (e.g., lift repair fund)?`,
            a: `You can create one-time bills with a custom name, amount, and due date at any time. These appear alongside regular maintenance bills in residents' apps.`
          },
            {
            q: `What happens when a bill is disputed by a resident?`,
            a: `Residents can raise a query on any bill. The admin sees it on the bill management screen and can respond with a note. All communication is logged in the app.`
          },
          ],
      related: [
            {
            icon: `🚪`,
            title: `Visitor Management`,
            href: `/features/visitor-management`,
            desc: `Gate security with 4 flows — no hardware needed.`
          },
            {
            icon: `🛠️`,
            title: `Issues & Complaints`,
            href: `/features/issues`,
            desc: `Resident complaints tracked from report to resolution.`
          },
            {
            icon: `📊`,
            title: `Audit Log`,
            href: `/features`,
            desc: `Tamper-evident activity log for all admin actions.`
          },
          ],
      ctaHeadline: `Replace WhatsApp screenshots with proper billing.`,
      ctaSub: `Basic Maintenance billing is included in the Free plan. No credit card required.`,
    },
    hi: {
      badge: `मेंटेनेंस और बिलिंग`,
      emoji: `💸`,
      headline: `WhatsApp पेमेंट की मारामारी खत्म करें।`,
      headlineAccent: `मेंटेनेंस बिलिंग, आखिरकार व्यवस्थित।`,
      subline: `हर महीने अपने आप बिल बनाएं, हर पेमेंट ट्रैक करें, और रेजिडेंट्स को सही डिजिटल रसीद दें — Excel शीट या UPI स्क्रीनशॉट की झंझट के बिना।`,
      problems: [
            {
            icon: `📱`,
            title: `WhatsApp ग्रुप में UPI स्क्रीनशॉट`,
            desc: `रेजिडेंट्स ग्रुप चैट में पेमेंट स्क्रीनशॉट भेजते हैं। कोई रसीद नहीं, कोई ऑडिट ट्रेल नहीं, महीने के अंत में मिलान करना नामुमकिन।`
          },
            {
            icon: `📊`,
            title: `स्प्रेडशीट पर डिफॉल्टर लिस्ट`,
            desc: `सेक्रेटरी मैन्युअल Excel शीट में रखता है कि किसने पेमेंट किया और किसने नहीं। यह हमेशा पुरानी हो जाती है।`
          },
            {
            icon: `❓`,
            title: `रेजिडेंट्स को पता नहीं किस चीज़ का पेमेंट कर रहे हैं`,
            desc: `कोई बिल ब्रेकडाउन नहीं, कोई ड्यू डेट नोटिफिकेशन नहीं, कोई हिस्ट्री नहीं। पारदर्शिता की कमी से विवाद होते हैं।`
          },
          ],
      flows: [
            {
            icon: `📋`,
            label: `एडमिन बिल बनाता है`,
            detail: `बिल का नाम (जैसे 'अगस्त मेंटेनेंस'), राशि, और ड्यू डेट डालें। अलग-अलग यूनिट साइज़ के लिए फ्लैट-वाइज राशि भी सेट कर सकते हैं।`
          },
            {
            icon: `📤`,
            label: `बिल सभी रेजिडेंट्स को भेजा जाता है`,
            detail: `एक टैप में पब्लिश करें। सभी रेजिडेंट्स को उनके ऐप में पूरा ब्रेकडाउन और ड्यू डेट के साथ बिल दिखता है।`
          },
            {
            icon: `💰`,
            label: `रेजिडेंट पेमेंट करता है`,
            detail: `रेजिडेंट हमेशा की तरह UPI, NEFT, कैश, या चेक से पेमेंट करता है, फिर ऐप में पेमेंट का तरीका दर्ज करता है।`
          },
            {
            icon: `✅`,
            label: `एडमिन कन्फर्म करता है और रसीद बनती है`,
            detail: `एडमिन पेमेंट मिलने की पुष्टि करता है। बिल डिटेल्स, पेमेंट डेट, और राशि के साथ डिजिटल रसीद अपने आप बन जाती है।`
          },
            {
            icon: `📊`,
            label: `डिफॉल्टर रिपोर्ट लाइव अपडेट होती है`,
            detail: `कोई भी अनपेड बिल अपने आप डिफॉल्टर रिपोर्ट में फ्लैट नंबर, रेजिडेंट के नाम, और बकाया दिनों के साथ दिखता है।`
          },
          ],
      adminView: {
            title: `⚙️ एडमिन / सेक्रेटरी व्यू`,
            points: [
            `एक-बार या मासिक रिकरिंग बिल बनाएं`,
            `1BHK, 2BHK, 3BHK के लिए फ्लैट-वाइज राशि सेट करें`,
            `संपर्क विवरण के साथ डिफॉल्टर रिपोर्ट देखें`,
            `सभी डिफॉल्टर्स को ऑटोमेटेड पेमेंट रिमाइंडर भेजें`,
            `पेमेंट प्राप्त चिह्नित करें और रसीद बनाएं`,
            `वार्षिक ऑडिट के लिए पूरी पेमेंट हिस्ट्री CSV में एक्सपोर्ट करें`,
          ]
          },
      residentView: {
            title: `👤 रेजिडेंट व्यू`,
            points: [
            `सभी बकाया और भुगतान किए गए बिल एक स्क्रीन पर देखें`,
            `बिल का पूरा ब्रेकडाउन देखें (मेंटेनेंस, सिंकिंग फंड, आदि)`,
            `ड्यू डेट से 7 दिन पहले पुश नोटिफिकेशन पाएं`,
            `एडमिन की पुष्टि के तुरंत बाद डिजिटल रसीद पाएं`,
            `पूरे 12 महीने की पेमेंट हिस्ट्री देखें`,
            `किसी खास बिल पर विवाद या प्रश्न उठाएं`,
          ]
          },
      features: [
            {
            icon: `🔄`,
            title: `रिकरिंग बिलिंग`,
            desc: `मासिक बिल एक बार सेट करें। वे हर महीने की 1 तारीख को अपने आप बन जाते हैं।`
          },
            {
            icon: `📊`,
            title: `डिफॉल्टर रिपोर्ट`,
            desc: `अनपेड बिलों की रियल-टाइम लिस्ट। बकाया दिनों, फ्लैट, या राशि से फ़िल्टर करें।`
          },
            {
            icon: `🧾`,
            title: `डिजिटल रसीदें`,
            desc: `सोसायटी हेडर, बिल डिटेल्स, और पेमेंट डेट के साथ अपने आप बनी PDF रसीदें।`
          },
            {
            icon: `🏠`,
            title: `फ्लैट-वाइज राशि`,
            desc: `1BHK, 2BHK, कॉर्नर यूनिट्स, या किसी भी कस्टम ग्रुपिंग के लिए अलग दरें।`
          },
            {
            icon: `🔔`,
            title: `ड्यू डेट रिमाइंडर`,
            desc: `ड्यू डेट से 7 दिन, 3 दिन, और 1 दिन पहले ऑटोमेटेड पुश नोटिफिकेशन।`
          },
            {
            icon: `📁`,
            title: `वार्षिक विवरण`,
            desc: `रेजिडेंट्स टैक्स या वेरिफिकेशन के लिए अपनी पूरे साल की पेमेंट हिस्ट्री एक्सपोर्ट कर सकते हैं।`
          },
          ],
      faqs: [
            {
            q: `क्या मैं अलग-अलग फ्लैट साइज़ के लिए अलग बिल राशि बना सकता हूं?`,
            a: `हां। बिल बनाते समय आप फ्लैट-वाइज राशि सेट कर सकते हैं। उदाहरण के लिए, 1BHK फ्लैट्स को ₹1,500 और 3BHK फ्लैट्स को ₹3,000 चार्ज किया जा सकता है, वो भी एक ही बिल क्रिएशन स्क्रीन से।`
          },
            {
            q: `क्या SocietyApp हमारी ओर से पेमेंट कलेक्ट करता है?`,
            a: `नहीं। SocietyApp एक रिकॉर्ड्स और कम्युनिकेशन टूल है, पेमेंट प्रोसेसर नहीं। रेजिडेंट्स अपने सामान्य UPI, NEFT, या कैश तरीकों से पेमेंट करते हैं, और एडमिन पेमेंट को प्राप्त के रूप में चिह्नित करता है।`
          },
            {
            q: `स्पेशल लेवी कलेक्शन (जैसे लिफ्ट रिपेयर फंड) कैसे हैंडल करूं?`,
            a: `आप किसी भी समय कस्टम नाम, राशि, और ड्यू डेट के साथ एक-बार के बिल बना सकते हैं। ये रेजिडेंट्स के ऐप में नियमित मेंटेनेंस बिलों के साथ दिखाई देते हैं।`
          },
            {
            q: `जब कोई रेजिडेंट बिल पर विवाद करता है तो क्या होता है?`,
            a: `रेजिडेंट्स किसी भी बिल पर प्रश्न उठा सकते हैं। एडमिन इसे बिल मैनेजमेंट स्क्रीन पर देखता है और नोट के साथ जवाब दे सकता है। सभी कम्युनिकेशन ऐप में लॉग होता है।`
          },
          ],
      related: [
            {
            icon: `🚪`,
            title: `विजिटर मैनेजमेंट`,
            href: `/features/visitor-management`,
            desc: `4 फ्लो के साथ गेट सुरक्षा — हार्डवेयर की जरूरत नहीं।`
          },
            {
            icon: `🛠️`,
            title: `समस्याएं और शिकायतें`,
            href: `/features/issues`,
            desc: `रिपोर्ट से समाधान तक ट्रैक की गई रेजिडेंट शिकायतें।`
          },
            {
            icon: `📊`,
            title: `ऑडिट लॉग`,
            href: `/features`,
            desc: `सभी एडमिन कार्रवाइयों का टैम्पर-एविडेंट एक्टिविटी लॉग।`
          },
          ],
      ctaHeadline: `WhatsApp स्क्रीनशॉट को सही बिलिंग से बदलें।`,
      ctaSub: `बेसिक मेंटेनेंस बिलिंग फ्री प्लान में शामिल है। कोई क्रेडिट कार्ड जरूरी नहीं।`,
    },
    gu: {
      badge: `મેઈન્ટેનન્સ અને બિલિંગ`,
      emoji: `💸`,
      headline: `WhatsApp પેમેન્ટની ધમાલ ખતમ કરો.`,
      headlineAccent: `મેઈન્ટેનન્સ બિલિંગ, આખરે વ્યવસ્થિત.`,
      subline: `દર મહિને બિલ ઓટોમેટિક બનાવો, દરેક પેમેન્ટ ટ્રેક કરો, અને રહેવાસીઓને યોગ્ય ડિજિટલ રસીદ આપો — Excel શીટ કે UPI સ્ક્રીનશોટની ઝંઝટ વગર.`,
      problems: [
            {
            icon: `📱`,
            title: `WhatsApp ગ્રુપમાં UPI સ્ક્રીનશોટ`,
            desc: `રહેવાસીઓ ગ્રુપ ચેટમાં પેમેન્ટ સ્ક્રીનશોટ મોકલે છે. કોઈ રસીદ નહીં, કોઈ ઓડિટ ટ્રેલ નહીં, મહિનાના અંતે મેળ બેસાડવો અશક્ય.`
          },
            {
            icon: `📊`,
            title: `સ્પ્રેડશીટ પર ડિફોલ્ટર લિસ્ટ`,
            desc: `સેક્રેટરી મેન્યુઅલ Excel શીટ રાખે છે કે કોણે પેમેન્ટ કર્યું અને કોણે નહીં. તે હંમેશા જૂની હોય છે.`
          },
            {
            icon: `❓`,
            title: `રહેવાસીઓને ખબર નથી શેના માટે પેમેન્ટ કરી રહ્યા છે`,
            desc: `કોઈ બિલ બ્રેકડાઉન નહીં, કોઈ ડ્યૂ ડેટ નોટિફિકેશન નહીં, કોઈ ઈતિહાસ નહીં. પારદર્શિતાના અભાવે વિવાદો થાય છે.`
          },
          ],
      flows: [
            {
            icon: `📋`,
            label: `એડમિન બિલ બનાવે છે`,
            detail: `બિલનું નામ (જેમ કે 'ઓગસ્ટ મેઈન્ટેનન્સ'), રકમ, અને ડ્યૂ ડેટ દાખલ કરો. અલગ-અલગ યુનિટ સાઈઝ માટે ફ્લેટ-વાઈઝ રકમ પણ સેટ કરી શકાય.`
          },
            {
            icon: `📤`,
            label: `બિલ બધા રહેવાસીઓને મોકલાય છે`,
            detail: `એક ટેપમાં પબ્લિશ કરો. બધા રહેવાસીઓને તેમની એપમાં પૂરું બ્રેકડાઉન અને ડ્યૂ ડેટ સાથે બિલ તરત દેખાય છે.`
          },
            {
            icon: `💰`,
            label: `રહેવાસી પેમેન્ટ કરે છે`,
            detail: `રહેવાસી હંમેશની જેમ UPI, NEFT, રોકડ, અથવા ચેકથી પેમેન્ટ કરે છે, પછી એપમાં પેમેન્ટ પદ્ધતિ નોંધે છે.`
          },
            {
            icon: `✅`,
            label: `એડમિન કન્ફર્મ કરે છે અને રસીદ બને છે`,
            detail: `એડમિન પેમેન્ટ મળ્યાની પુષ્ટિ કરે છે. બિલ વિગતો, પેમેન્ટ તારીખ, અને રકમ સાથે ડિજિટલ રસીદ ઓટોમેટિક બને છે અને સચવાય છે.`
          },
            {
            icon: `📊`,
            label: `ડિફોલ્ટર રિપોર્ટ લાઈવ અપડેટ થાય છે`,
            detail: `કોઈપણ બાકી બિલ ઓટોમેટિક ડિફોલ્ટર રિપોર્ટમાં ફ્લેટ નંબર, રહેવાસીના નામ, અને બાકી દિવસો સાથે દેખાય છે.`
          },
          ],
      adminView: {
            title: `⚙️ એડમિન / સેક્રેટરી વ્યૂ`,
            points: [
            `એક-વખત અથવા માસિક રિકરિંગ બિલ બનાવો`,
            `1BHK, 2BHK, 3BHK માટે ફ્લેટ-વાઈઝ રકમ સેટ કરો`,
            `સંપર્ક વિગતો સાથે ડિફોલ્ટર રિપોર્ટ જુઓ`,
            `બધા ડિફોલ્ટર્સને ઓટોમેટેડ પેમેન્ટ રિમાઈન્ડર મોકલો`,
            `પેમેન્ટ મળ્યું તરીકે ચિહ્નિત કરો અને રસીદ બનાવો`,
            `વાર્ષિક ઓડિટ માટે પૂરો પેમેન્ટ ઈતિહાસ CSV તરીકે એક્સપોર્ટ કરો`,
          ]
          },
      residentView: {
            title: `👤 રહેવાસી વ્યૂ`,
            points: [
            `બધા બાકી અને ચૂકવેલા બિલ એક સ્ક્રીન પર જુઓ`,
            `બિલનું વિગતવાર બ્રેકડાઉન જુઓ (મેઈન્ટેનન્સ, સિંકિંગ ફંડ, વગેરે)`,
            `ડ્યૂ ડેટના 7 દિવસ પહેલા પુશ નોટિફિકેશન મેળવો`,
            `એડમિનની પુષ્ટિ પછી તરત ડિજિટલ રસીદ મેળવો`,
            `પૂરો 12-મહિનાનો પેમેન્ટ ઈતિહાસ જુઓ`,
            `કોઈ ચોક્કસ બિલ પર વિવાદ અથવા પ્રશ્ન ઉઠાવો`,
          ]
          },
      features: [
            {
            icon: `🔄`,
            title: `રિકરિંગ બિલિંગ`,
            desc: `માસિક બિલ એક વાર સેટ કરો. તે દર મહિનાની 1લી તારીખે ઓટોમેટિક બને છે.`
          },
            {
            icon: `📊`,
            title: `ડિફોલ્ટર રિપોર્ટ`,
            desc: `બાકી બિલોની રિયલ-ટાઈમ યાદી. બાકી દિવસો, ફ્લેટ, અથવા રકમ દ્વારા ફિલ્ટર કરો.`
          },
            {
            icon: `🧾`,
            title: `ડિજિટલ રસીદો`,
            desc: `સોસાયટી હેડર, બિલ વિગતો, અને પેમેન્ટ તારીખ સાથે ઓટોમેટિક બનતી PDF રસીદો.`
          },
            {
            icon: `🏠`,
            title: `ફ્લેટ-વાઈઝ રકમ`,
            desc: `1BHK, 2BHK, કોર્નર યુનિટ્સ, અથવા કોઈપણ કસ્ટમ ગ્રુપિંગ માટે અલગ દરો.`
          },
            {
            icon: `🔔`,
            title: `ડ્યૂ ડેટ રિમાઈન્ડર`,
            desc: `ડ્યૂ ડેટના 7 દિવસ, 3 દિવસ, અને 1 દિવસ પહેલા ઓટોમેટેડ પુશ નોટિફિકેશન.`
          },
            {
            icon: `📁`,
            title: `વાર્ષિક સ્ટેટમેન્ટ`,
            desc: `રહેવાસીઓ ટેક્સ અથવા વેરિફિકેશન માટે તેમનો પૂરો વર્ષનો પેમેન્ટ ઈતિહાસ એક્સપોર્ટ કરી શકે છે.`
          },
          ],
      faqs: [
            {
            q: `શું હું અલગ-અલગ ફ્લેટ સાઈઝ માટે અલગ બિલ રકમ બનાવી શકું?`,
            a: `હા. બિલ બનાવતી વખતે તમે ફ્લેટ-વાઈઝ રકમ સેટ કરી શકો છો. ઉદાહરણ તરીકે, 1BHK ફ્લેટ્સને ₹1,500 અને 3BHK ફ્લેટ્સને ₹3,000 ચાર્જ થઈ શકે, એક જ બિલ ક્રિએશન સ્ક્રીનથી.`
          },
            {
            q: `શું SocietyApp અમારા વતી પેમેન્ટ કલેક્ટ કરે છે?`,
            a: `ના. SocietyApp એક રેકોર્ડ્સ અને કમ્યુનિકેશન ટૂલ છે, પેમેન્ટ પ્રોસેસર નહીં. રહેવાસીઓ તેમની સામાન્ય UPI, NEFT, અથવા રોકડ પદ્ધતિઓથી પેમેન્ટ કરે છે, અને એડમિન પેમેન્ટને મળેલ તરીકે ચિહ્નિત કરે છે.`
          },
            {
            q: `સ્પેશિયલ લેવી કલેક્શન (જેમ કે લિફ્ટ રિપેર ફંડ) કેવી રીતે હેન્ડલ કરું?`,
            a: `તમે કોઈપણ સમયે કસ્ટમ નામ, રકમ, અને ડ્યૂ ડેટ સાથે એક-વખતના બિલ બનાવી શકો છો. આ રહેવાસીઓની એપમાં નિયમિત મેઈન્ટેનન્સ બિલો સાથે દેખાય છે.`
          },
            {
            q: `જ્યારે કોઈ રહેવાસી બિલ પર વિવાદ કરે ત્યારે શું થાય?`,
            a: `રહેવાસીઓ કોઈપણ બિલ પર પ્રશ્ન ઉઠાવી શકે છે. એડમિન તેને બિલ મેનેજમેન્ટ સ્ક્રીન પર જુએ છે અને નોટ સાથે જવાબ આપી શકે છે. બધો સંપર્ક એપમાં લોગ થાય છે.`
          },
          ],
      related: [
            {
            icon: `🚪`,
            title: `વિઝિટર મેનેજમેન્ટ`,
            href: `/features/visitor-management`,
            desc: `4 ફ્લો સાથે ગેટ સુરક્ષા — હાર્ડવેરની જરૂર નથી.`
          },
            {
            icon: `🛠️`,
            title: `સમસ્યાઓ અને ફરિયાદો`,
            href: `/features/issues`,
            desc: `રિપોર્ટથી ઉકેલ સુધી ટ્રેક થયેલી રહેવાસી ફરિયાદો.`
          },
            {
            icon: `📊`,
            title: `ઓડિટ લોગ`,
            href: `/features`,
            desc: `બધી એડમિન કાર્યવાહીઓનો ટેમ્પર-એવિડન્ટ એક્ટિવિટી લોગ.`
          },
          ],
      ctaHeadline: `WhatsApp સ્ક્રીનશોટને યોગ્ય બિલિંગથી બદલો.`,
      ctaSub: `બેઝિક મેઈન્ટેનન્સ બિલિંગ ફ્રી પ્લાનમાં સામેલ છે. કોઈ ક્રેડિટ કાર્ડ જરૂરી નથી.`,
    },
    ta: {
      badge: `பராமரிப்பு மற்றும் பில்லிங்`,
      emoji: `💸`,
      headline: `WhatsApp பேமெண்ட் தேடலை முடிவுக்கு கொண்டு வாருங்கள்.`,
      headlineAccent: `பராமரிப்பு பில்லிங், இறுதியாக ஒழுங்கமைக்கப்பட்டது.`,
      subline: `மாதாந்திர பில்களை தானாக உருவாக்கவும், ஒவ்வொரு பேமெண்டையும் கண்காணிக்கவும், Excel ஷீட் அல்லது UPI ஸ்கிரீன்ஷாட் குழப்பமின்றி குடியிருப்பாளர்களுக்கு சரியான டிஜிட்டல் ரசீது கொடுங்கள்.`,
      problems: [
            {
            icon: `📱`,
            title: `WhatsApp குழுக்களில் UPI ஸ்கிரீன்ஷாட்கள்`,
            desc: `குடியிருப்பாளர்கள் குரூப் சாட்டில் பேமெண்ட் ஸ்கிரீன்ஷாட் அனுப்புகிறார்கள். ரசீது இல்லை, ஆடிட் டிரெயில் இல்லை, மாத இறுதியில் ஒப்பிடுவது சாத்தியமில்லை.`
          },
            {
            icon: `📊`,
            title: `ஸ்பிரெட்ஷீட்டில் டிஃபால்டர் லிஸ்ட்`,
            desc: `செயலாளர் யார் பணம் செலுத்தினார்கள், யார் செலுத்தவில்லை என்பதை மேனுவலாக Excel ஷீட்டில் வைத்திருக்கிறார். இது எப்போதும் காலாவதியாகிவிடும்.`
          },
            {
            icon: `❓`,
            title: `குடியிருப்பாளர்களுக்கு எதற்காக பணம் செலுத்துகிறோம் என்று தெரியாது`,
            desc: `பில் விவரம் இல்லை, டியூ டேட் அறிவிப்பு இல்லை, வரலாறு இல்லை. வெளிப்படைத்தன்மை இல்லாததால் தகராறுகள் ஏற்படுகின்றன.`
          },
          ],
      flows: [
            {
            icon: `📋`,
            label: `அட்மின் பில் உருவாக்குகிறார்`,
            detail: `பில் பெயர் (உதா. 'ஆகஸ்ட் பராமரிப்பு'), தொகை, மற்றும் டியூ டேட் உள்ளிடவும். வெவ்வேறு யூனிட் அளவுகளுக்கு ஃப்ளாட்-குறிப்பிட்ட தொகைகளையும் அமைக்கலாம்.`
          },
            {
            icon: `📤`,
            label: `பில் அனைத்து குடியிருப்பாளர்களுக்கும் வெளியிடப்படுகிறது`,
            detail: `ஒரே தட்டில் வெளியிடவும். அனைத்து குடியிருப்பாளர்களும் தங்கள் ஆப்பில் முழு விவரத்துடன் மற்றும் டியூ டேட்டுடன் பில்லை உடனடியாக பார்க்கிறார்கள்.`
          },
            {
            icon: `💰`,
            label: `குடியிருப்பாளர் பணம் செலுத்துகிறார்`,
            detail: `குடியிருப்பாளர் வழக்கம்போல் UPI, NEFT, பணம், அல்லது காசோலை மூலம் செலுத்துகிறார், பின்னர் ஆப்பில் பேமெண்ட் முறையை குறிக்கிறார்.`
          },
            {
            icon: `✅`,
            label: `அட்மின் உறுதிப்படுத்துகிறார் & ரசீது உருவாகிறது`,
            detail: `அட்மின் பணம் பெறப்பட்டதாக குறிக்கிறார். பில் விவரங்கள், பேமெண்ட் தேதி, மற்றும் தொகையுடன் டிஜிட்டல் ரசீது தானாக உருவாக்கப்பட்டு சேமிக்கப்படுகிறது.`
          },
            {
            icon: `📊`,
            label: `டிஃபால்டர் அறிக்கை நேரலையில் புதுப்பிக்கப்படுகிறது`,
            detail: `செலுத்தப்படாத எந்த பில்லும் ஃப்ளாட் எண், குடியிருப்பாளர் பெயர், மற்றும் தாமத நாட்களுடன் தானாக டிஃபால்டர் அறிக்கையில் தோன்றும்.`
          },
          ],
      adminView: {
            title: `⚙️ அட்மின் / செயலாளர் காட்சி`,
            points: [
            `ஒரு முறை அல்லது மாதாந்திர தொடர் பில்களை உருவாக்கவும்`,
            `1BHK, 2BHK, 3BHK க்கு ஃப்ளாட்-குறிப்பிட்ட தொகைகளை அமைக்கவும்`,
            `தொடர்பு விவரங்களுடன் டிஃபால்டர் அறிக்கையை பார்க்கவும்`,
            `அனைத்து டிஃபால்டர்களுக்கும் தானியங்கி பேமெண்ட் நினைவூட்டல்களை அனுப்பவும்`,
            `பணம் பெறப்பட்டதாக குறித்து ரசீதுகளை உருவாக்கவும்`,
            `வருடாந்திர தணிக்கைக்காக முழு பேமெண்ட் வரலாற்றையும் CSV ஆக ஏற்றுமதி செய்யவும்`,
          ]
          },
      residentView: {
            title: `👤 குடியிருப்பாளர் காட்சி`,
            points: [
            `நிலுவையிலுள்ள மற்றும் செலுத்தப்பட்ட அனைத்து பில்களையும் ஒரே திரையில் காணவும்`,
            `பில்லின் விரிவான விவரத்தை காணவும் (பராமரிப்பு, சிங்கிங் ஃபண்ட், போன்றவை)`,
            `டியூ டேட்டுக்கு 7 நாட்களுக்கு முன் புஷ் அறிவிப்பு பெறவும்`,
            `அட்மின் உறுதிப்படுத்திய உடனடியாக டிஜிட்டல் ரசீது பெறவும்`,
            `முழு 12 மாத பேமெண்ட் வரலாற்றையும் காணவும்`,
            `ஒரு குறிப்பிட்ட பில் பற்றி தகராறு அல்லது கேள்வி எழுப்பவும்`,
          ]
          },
      features: [
            {
            icon: `🔄`,
            title: `தொடர் பில்லிங்`,
            desc: `மாதாந்திர பில்களை ஒரு முறை அமைக்கவும். அவை ஒவ்வொரு மாதமும் 1ஆம் தேதி தானாக உருவாகும்.`
          },
            {
            icon: `📊`,
            title: `டிஃபால்டர் அறிக்கை`,
            desc: `செலுத்தப்படாத பில்களின் நேரலை பட்டியல். தாமத நாட்கள், ஃப்ளாட், அல்லது தொகையால் வடிகட்டவும்.`
          },
            {
            icon: `🧾`,
            title: `டிஜிட்டல் ரசீதுகள்`,
            desc: `சொசைட்டி ஹெடர், பில் விவரங்கள், மற்றும் பேமெண்ட் தேதியுடன் தானாக உருவாகும் PDF ரசீதுகள்.`
          },
            {
            icon: `🏠`,
            title: `ஃப்ளாட்-குறிப்பிட்ட தொகைகள்`,
            desc: `1BHK, 2BHK, கார்னர் யூனிட்கள், அல்லது எந்த கஸ்டம் குழுவிற்கும் வெவ்வேறு விகிதங்கள்.`
          },
            {
            icon: `🔔`,
            title: `டியூ டேட் நினைவூட்டல்கள்`,
            desc: `டியூ டேட்டுக்கு 7 நாட்கள், 3 நாட்கள், மற்றும் 1 நாள் முன் தானியங்கி புஷ் அறிவிப்புகள்.`
          },
            {
            icon: `📁`,
            title: `வருடாந்திர அறிக்கை`,
            desc: `குடியிருப்பாளர்கள் வரி அல்லது சரிபார்ப்புக்காக தங்கள் முழு வருட பேமெண்ட் வரலாற்றையும் ஏற்றுமதி செய்யலாம்.`
          },
          ],
      faqs: [
            {
            q: `வெவ்வேறு ஃப்ளாட் அளவுகளுக்கு வெவ்வேறு பில் தொகைகளை உருவாக்க முடியுமா?`,
            a: `ஆம். பில் உருவாக்கும்போது, ஃப்ளாட்-குறிப்பிட்ட தொகைகளை அமைக்கலாம். உதாரணமாக, 1BHK ஃப்ளாட்களுக்கு ₹1,500 மற்றும் 3BHK ஃப்ளாட்களுக்கு ₹3,000 என்று அதே பில் உருவாக்கும் திரையிலிருந்தே வசூலிக்கலாம்.`
          },
            {
            q: `SocietyApp எங்களுக்காக பேமெண்ட்களை வசூலிக்குமா?`,
            a: `இல்லை. SocietyApp ஒரு பதிவு மற்றும் தொடர்பு கருவி, பேமெண்ட் ப்ராசசர் அல்ல. குடியிருப்பாளர்கள் தங்கள் வழக்கமான UPI, NEFT, அல்லது பணம் முறைகள் மூலம் செலுத்துகிறார்கள், மற்றும் அட்மின் பேமெண்டை பெறப்பட்டதாக குறிக்கிறார்.`
          },
            {
            q: `சிறப்பு லெவி வசூல்களை (உதா. லிஃப்ட் ரிப்பேர் ஃபண்ட்) எப்படி கையாள்வது?`,
            a: `நீங்கள் எந்த நேரத்திலும் கஸ்டம் பெயர், தொகை, மற்றும் டியூ டேட்டுடன் ஒரு முறை பில்களை உருவாக்கலாம். இவை குடியிருப்பாளர்களின் ஆப்பில் வழக்கமான பராமரிப்பு பில்களுடன் தோன்றும்.`
          },
            {
            q: `ஒரு குடியிருப்பாளர் பில்லில் தகராறு எழுப்பினால் என்ன நடக்கும்?`,
            a: `குடியிருப்பாளர்கள் எந்த பில்லிலும் கேள்வி எழுப்பலாம். அட்மின் இதை பில் நிர்வாக திரையில் பார்த்து குறிப்புடன் பதிலளிக்கலாம். அனைத்து தொடர்பும் ஆப்பில் பதிவு செய்யப்படுகிறது.`
          },
          ],
      related: [
            {
            icon: `🚪`,
            title: `விசிட்டர் மேனேஜ்மென்ட்`,
            href: `/features/visitor-management`,
            desc: `4 ஃப்ளோக்களுடன் கேட் பாதுகாப்பு — ஹார்ட்வேர் தேவையில்லை.`
          },
            {
            icon: `🛠️`,
            title: `பிரச்சினைகள் & புகார்கள்`,
            href: `/features/issues`,
            desc: `புகாரிலிருந்து தீர்வு வரை கண்காணிக்கப்படும் குடியிருப்பாளர் புகார்கள்.`
          },
            {
            icon: `📊`,
            title: `ஆடிட் லாக்`,
            href: `/features`,
            desc: `அனைத்து அட்மின் செயல்களுக்கான டேம்பர்-எவிடென்ட் ஆக்டிவிட்டி லாக்.`
          },
          ],
      ctaHeadline: `WhatsApp ஸ்கிரீன்ஷாட்களை சரியான பில்லிங்குடன் மாற்றவும்.`,
      ctaSub: `அடிப்படை பராமரிப்பு பில்லிங் இலவச திட்டத்தில் சேர்க்கப்பட்டுள்ளது. கிரெடிட் கார்டு தேவையில்லை.`,
    },
  },
  "amenities": {
    en: {
      badge: `Amenity Booking`,
      emoji: `🏊`,
      headline: `Book the clubhouse from your phone.`,
      headlineAccent: `No call. No WhatsApp. No double-booking.`,
      subline: `Self-service amenity booking with real-time slot availability, deposit collection, and admin approval flow. Residents book in 30 seconds. Admins manage everything in one view.`,
      problems: [
            {
            icon: `📞`,
            title: `Booking via phone call to secretary`,
            desc: `Residents call the secretary to book the clubhouse. The secretary keeps a manual diary that gets lost or double-booked.`
          },
            {
            icon: `💬`,
            title: `Confirmation on WhatsApp`,
            desc: `Confirmation is a WhatsApp text. No receipt. No reminder. Resident forgets, slot is wasted.`
          },
            {
            icon: `💸`,
            title: `Deposit tracking in a notebook`,
            desc: `Security deposits for amenity bookings noted in a register. Disputes happen when the notebook is unclear or missing.`
          },
          ],
      flows: [
            {
            icon: `🏊`,
            label: `Resident selects amenity`,
            detail: `Opens Amenities screen, selects the facility (Clubhouse, Gym, Pool, Court), and picks a date.`
          },
            {
            icon: `🕐`,
            label: `Chooses available slot`,
            detail: `Time slots shown in real time. Already-booked slots are greyed out. No double-booking possible.`
          },
            {
            icon: `💳`,
            label: `Pays deposit (if required)`,
            detail: `Deposit amount configured by admin per amenity. Resident records payment method in app. Admin confirms.`
          },
            {
            icon: `✅`,
            label: `Admin approves booking`,
            detail: `Admin receives notification and approves or rejects with a reason. Resident notified immediately.`
          },
            {
            icon: `🔔`,
            label: `Reminder sent 1 hour before`,
            detail: `Automatic push reminder 1 hour before booking. Admin notified if booking expires unused.`
          },
          ],
      adminView: {
            title: `⚙️ Admin / Committee View`,
            points: [
            `Configure amenities with name, capacity, and allowed hours`,
            `Set slot duration (30 min, 1 hour, 2 hours)`,
            `Set deposit amounts and refund policies per amenity`,
            `View all upcoming bookings in a calendar view`,
            `Approve or reject bookings with one tap`,
            `Block amenity for cleaning or maintenance periods`,
          ]
          },
      residentView: {
            title: `👤 Resident View`,
            points: [
            `Browse all available amenities with photos and rules`,
            `See real-time slot availability for any date`,
            `Book a slot in under 30 seconds`,
            `Receive push confirmation and booking receipt`,
            `Get a reminder 1 hour before the booking`,
            `Cancel up to the admin-defined deadline for refund`,
          ]
          },
      features: [
            {
            icon: `📅`,
            title: `Real-time slot availability`,
            desc: `Live calendar showing booked and available slots. Prevents double-booking automatically.`
          },
            {
            icon: `💰`,
            title: `Deposit management`,
            desc: `Per-amenity deposit amounts. Resident logs payment; admin confirms and tracks refunds.`
          },
            {
            icon: `⏰`,
            title: `Configurable slots`,
            desc: `Set slot duration, opening hours, max bookings per resident per week — fully customisable.`
          },
            {
            icon: `🚫`,
            title: `Blackout dates`,
            desc: `Block amenities for cleaning, maintenance, or special events so they can't be booked during those periods.`
          },
            {
            icon: `📊`,
            title: `Utilisation report`,
            desc: `See which amenities are most used, peak hours, and revenue from deposits — monthly report.`
          },
            {
            icon: `🔔`,
            title: `Smart reminders`,
            desc: `Booking confirmation, 1-hour-before reminder, and cancellation notification — all automated.`
          },
          ],
      faqs: [
            {
            q: `How many amenities can I set up?`,
            a: `Unlimited amenities on Pro and Enterprise plans. You can set up separate booking systems for Clubhouse, Gym, Swimming Pool, Badminton Court, Party Hall, and any other facility.`
          },
            {
            q: `Can I charge different rates for weekends?`,
            a: `Yes. You can configure weekday and weekend deposit amounts separately for each amenity on the Pro plan.`
          },
            {
            q: `What happens to unclaimed deposits if a booking is cancelled?`,
            a: `The admin controls the refund policy per amenity. Cancellations before a defined cutoff get a full refund; late cancellations can be set to forfeit the deposit.`
          },
            {
            q: `Can only the resident who booked use the amenity, or can they bring guests?`,
            a: `This is configurable. You can set max guest count per booking. The resident remains responsible for the amenity during their slot.`
          },
          ],
      related: [
            {
            icon: `🅿️`,
            title: `Parking Management`,
            href: `/features/parking`,
            desc: `Vehicle registry, slot allocation, and visitor parking.`
          },
            {
            icon: `🎉`,
            title: `Events & Polls`,
            href: `/features/events`,
            desc: `Plan society events with RSVP and photo galleries.`
          },
            {
            icon: `🛠️`,
            title: `Issues & Complaints`,
            href: `/features/issues`,
            desc: `Residents raise and track complaints to resolution.`
          },
          ],
      ctaHeadline: `Self-service amenity booking for your society.`,
      ctaSub: `Amenity Booking is available on the Pro plan. Free demo available.`,
    },
    hi: {
      badge: `एमेनिटी बुकिंग`,
      emoji: `🏊`,
      headline: `अपने फोन से क्लबहाउस बुक करें।`,
      headlineAccent: `कोई कॉल नहीं। कोई WhatsApp नहीं। कोई डबल-बुकिंग नहीं।`,
      subline: `रियल-टाइम स्लॉट उपलब्धता, डिपॉजिट कलेक्शन, और एडमिन अप्रूवल फ्लो के साथ सेल्फ-सर्विस एमेनिटी बुकिंग। रेजिडेंट्स 30 सेकंड में बुक करते हैं। एडमिन सब कुछ एक व्यू में मैनेज करते हैं।`,
      problems: [
            {
            icon: `📞`,
            title: `सेक्रेटरी को फोन कॉल से बुकिंग`,
            desc: `रेजिडेंट्स क्लबहाउस बुक करने के लिए सेक्रेटरी को कॉल करते हैं। सेक्रेटरी एक मैन्युअल डायरी रखता है जो खो जाती है या डबल-बुक हो जाती है।`
          },
            {
            icon: `💬`,
            title: `WhatsApp पर कन्फर्मेशन`,
            desc: `कन्फर्मेशन एक WhatsApp टेक्स्ट है। कोई रसीद नहीं। कोई रिमाइंडर नहीं। रेजिडेंट भूल जाता है, स्लॉट बर्बाद हो जाता है।`
          },
            {
            icon: `💸`,
            title: `नोटबुक में डिपॉजिट ट्रैकिंग`,
            desc: `एमेनिटी बुकिंग के लिए सिक्योरिटी डिपॉजिट एक रजिस्टर में लिखे जाते हैं। नोटबुक अस्पष्ट या गुम होने पर विवाद होते हैं।`
          },
          ],
      flows: [
            {
            icon: `🏊`,
            label: `रेजिडेंट एमेनिटी चुनता है`,
            detail: `एमेनिटीज स्क्रीन खोलता है, सुविधा चुनता है (क्लबहाउस, जिम, पूल, कोर्ट), और तारीख चुनता है।`
          },
            {
            icon: `🕐`,
            label: `उपलब्ध स्लॉट चुनता है`,
            detail: `टाइम स्लॉट रियल टाइम में दिखते हैं। पहले से बुक स्लॉट ग्रे हो जाते हैं। डबल-बुकिंग संभव नहीं।`
          },
            {
            icon: `💳`,
            label: `डिपॉजिट भुगतान (अगर ज़रूरी हो)`,
            detail: `डिपॉजिट राशि एडमिन द्वारा प्रति एमेनिटी सेट की जाती है। रेजिडेंट ऐप में पेमेंट मेथड दर्ज करता है। एडमिन कन्फर्म करता है।`
          },
            {
            icon: `✅`,
            label: `एडमिन बुकिंग अप्रूव करता है`,
            detail: `एडमिन को नोटिफिकेशन मिलता है और वो कारण के साथ अप्रूव या रिजेक्ट करता है। रेजिडेंट को तुरंत सूचित किया जाता है।`
          },
            {
            icon: `🔔`,
            label: `1 घंटे पहले रिमाइंडर भेजा जाता है`,
            detail: `बुकिंग से 1 घंटा पहले ऑटोमेटिक पुश रिमाइंडर। अगर बुकिंग बिना उपयोग के एक्सपायर होती है तो एडमिन को सूचित किया जाता है।`
          },
          ],
      adminView: {
            title: `⚙️ एडमिन / कमेटी व्यू`,
            points: [
            `नाम, क्षमता, और अनुमत घंटों के साथ एमेनिटीज कॉन्फ़िगर करें`,
            `स्लॉट अवधि सेट करें (30 मिनट, 1 घंटा, 2 घंटे)`,
            `प्रति एमेनिटी डिपॉजिट राशि और रिफंड पॉलिसी सेट करें`,
            `कैलेंडर व्यू में सभी आगामी बुकिंग देखें`,
            `एक टैप में बुकिंग अप्रूव या रिजेक्ट करें`,
            `सफाई या मेंटेनेंस के लिए एमेनिटी ब्लॉक करें`,
          ]
          },
      residentView: {
            title: `👤 रेजिडेंट व्यू`,
            points: [
            `फोटो और नियमों के साथ सभी उपलब्ध एमेनिटीज ब्राउज़ करें`,
            `किसी भी तारीख के लिए रियल-टाइम स्लॉट उपलब्धता देखें`,
            `30 सेकंड से कम में एक स्लॉट बुक करें`,
            `पुश कन्फर्मेशन और बुकिंग रसीद प्राप्त करें`,
            `बुकिंग से 1 घंटा पहले रिमाइंडर पाएं`,
            `रिफंड के लिए एडमिन द्वारा तय समय-सीमा तक रद्द करें`,
          ]
          },
      features: [
            {
            icon: `📅`,
            title: `रियल-टाइम स्लॉट उपलब्धता`,
            desc: `बुक और उपलब्ध स्लॉट दिखाने वाला लाइव कैलेंडर। डबल-बुकिंग अपने आप रोकता है।`
          },
            {
            icon: `💰`,
            title: `डिपॉजिट मैनेजमेंट`,
            desc: `प्रति एमेनिटी डिपॉजिट राशि। रेजिडेंट पेमेंट लॉग करता है; एडमिन कन्फर्म और रिफंड ट्रैक करता है।`
          },
            {
            icon: `⏰`,
            title: `कस्टमाइज़ेबल स्लॉट`,
            desc: `स्लॉट अवधि, खुलने का समय, प्रति रेजिडेंट प्रति सप्ताह अधिकतम बुकिंग सेट करें — पूरी तरह कस्टमाइज़ेबल।`
          },
            {
            icon: `🚫`,
            title: `ब्लैकआउट डेट्स`,
            desc: `सफाई, मेंटेनेंस, या खास इवेंट्स के लिए एमेनिटीज ब्लॉक करें ताकि उस अवधि में बुकिंग न हो सके।`
          },
            {
            icon: `📊`,
            title: `उपयोग रिपोर्ट`,
            desc: `देखें कौन-सी एमेनिटी सबसे ज्यादा इस्तेमाल होती है, पीक आवर्स, और डिपॉजिट से रेवेन्यू — मासिक रिपोर्ट।`
          },
            {
            icon: `🔔`,
            title: `स्मार्ट रिमाइंडर`,
            desc: `बुकिंग कन्फर्मेशन, 1-घंटा-पहले रिमाइंडर, और रद्दीकरण नोटिफिकेशन — सब ऑटोमेटेड।`
          },
          ],
      faqs: [
            {
            q: `मैं कितनी एमेनिटीज सेट कर सकता हूं?`,
            a: `Pro और Enterprise प्लान पर असीमित एमेनिटीज। आप क्लबहाउस, जिम, स्विमिंग पूल, बैडमिंटन कोर्ट, पार्टी हॉल, और किसी भी अन्य सुविधा के लिए अलग बुकिंग सिस्टम सेट कर सकते हैं।`
          },
            {
            q: `क्या मैं वीकेंड्स के लिए अलग दरें चार्ज कर सकता हूं?`,
            a: `हां। Pro प्लान पर आप प्रत्येक एमेनिटी के लिए वीकडे और वीकेंड डिपॉजिट राशि अलग-अलग कॉन्फ़िगर कर सकते हैं।`
          },
            {
            q: `अगर बुकिंग रद्द हो जाए तो अनक्लेम्ड डिपॉजिट का क्या होता है?`,
            a: `एडमिन प्रति एमेनिटी रिफंड पॉलिसी कंट्रोल करता है। तय कटऑफ से पहले रद्द करने पर पूरा रिफंड मिलता है; देर से रद्द करने पर डिपॉजिट जब्त किया जा सकता है।`
          },
            {
            q: `क्या सिर्फ बुक करने वाला रेजिडेंट एमेनिटी इस्तेमाल कर सकता है, या वो मेहमान ला सकता है?`,
            a: `यह कॉन्फ़िगर करने योग्य है। आप प्रति बुकिंग अधिकतम मेहमानों की संख्या सेट कर सकते हैं। रेजिडेंट अपने स्लॉट के दौरान एमेनिटी के लिए जिम्मेदार रहता है।`
          },
          ],
      related: [
            {
            icon: `🅿️`,
            title: `पार्किंग मैनेजमेंट`,
            href: `/features/parking`,
            desc: `वाहन रजिस्ट्री, स्लॉट आवंटन, और विजिटर पार्किंग।`
          },
            {
            icon: `🎉`,
            title: `इवेंट्स और पोल्स`,
            href: `/features/events`,
            desc: `RSVP और फोटो गैलरी के साथ सोसायटी इवेंट्स प्लान करें।`
          },
            {
            icon: `🛠️`,
            title: `समस्याएं और शिकायतें`,
            href: `/features/issues`,
            desc: `रेजिडेंट्स शिकायतें उठाते और समाधान तक ट्रैक करते हैं।`
          },
          ],
      ctaHeadline: `आपकी सोसायटी के लिए सेल्फ-सर्विस एमेनिटी बुकिंग।`,
      ctaSub: `एमेनिटी बुकिंग Pro प्लान पर उपलब्ध है। फ्री डेमो उपलब्ध है।`,
    },
    gu: {
      badge: `એમેનિટી બુકિંગ`,
      emoji: `🏊`,
      headline: `તમારા ફોનથી ક્લબહાઉસ બુક કરો.`,
      headlineAccent: `કોઈ કોલ નહીં. કોઈ WhatsApp નહીં. કોઈ ડબલ-બુકિંગ નહીં.`,
      subline: `રિયલ-ટાઈમ સ્લોટ ઉપલબ્ધતા, ડિપોઝિટ કલેક્શન, અને એડમિન અપ્રૂવલ ફ્લો સાથે સેલ્ફ-સર્વિસ એમેનિટી બુકિંગ. રહેવાસીઓ 30 સેકન્ડમાં બુક કરે છે. એડમિન બધું એક વ્યૂમાં મેનેજ કરે છે.`,
      problems: [
            {
            icon: `📞`,
            title: `સેક્રેટરીને ફોન કોલથી બુકિંગ`,
            desc: `રહેવાસીઓ ક્લબહાઉસ બુક કરવા સેક્રેટરીને કોલ કરે છે. સેક્રેટરી મેન્યુઅલ ડાયરી રાખે છે જે ખોવાઈ જાય છે અથવા ડબલ-બુક થાય છે.`
          },
            {
            icon: `💬`,
            title: `WhatsApp પર કન્ફર્મેશન`,
            desc: `કન્ફર્મેશન એક WhatsApp ટેક્સ્ટ છે. કોઈ રસીદ નહીં. કોઈ રિમાઈન્ડર નહીં. રહેવાસી ભૂલી જાય છે, સ્લોટ બગડે છે.`
          },
            {
            icon: `💸`,
            title: `નોટબુકમાં ડિપોઝિટ ટ્રેકિંગ`,
            desc: `એમેનિટી બુકિંગ માટે સિક્યોરિટી ડિપોઝિટ રજિસ્ટરમાં લખાય છે. નોટબુક અસ્પષ્ટ કે ગુમ હોય ત્યારે વિવાદો થાય છે.`
          },
          ],
      flows: [
            {
            icon: `🏊`,
            label: `રહેવાસી એમેનિટી પસંદ કરે છે`,
            detail: `એમેનિટીઝ સ્ક્રીન ખોલે છે, સુવિધા પસંદ કરે છે (ક્લબહાઉસ, જિમ, પૂલ, કોર્ટ), અને તારીખ પસંદ કરે છે.`
          },
            {
            icon: `🕐`,
            label: `ઉપલબ્ધ સ્લોટ પસંદ કરે છે`,
            detail: `ટાઈમ સ્લોટ રિયલ ટાઈમમાં દેખાય છે. પહેલેથી બુક થયેલા સ્લોટ ગ્રે થઈ જાય છે. ડબલ-બુકિંગ શક્ય નથી.`
          },
            {
            icon: `💳`,
            label: `ડિપોઝિટ ચૂકવણી (જો જરૂરી હોય)`,
            detail: `ડિપોઝિટ રકમ એડમિન દ્વારા પ્રતિ એમેનિટી સેટ થાય છે. રહેવાસી એપમાં પેમેન્ટ પદ્ધતિ નોંધે છે. એડમિન કન્ફર્મ કરે છે.`
          },
            {
            icon: `✅`,
            label: `એડમિન બુકિંગ અપ્રૂવ કરે છે`,
            detail: `એડમિનને નોટિફિકેશન મળે છે અને કારણ સાથે અપ્રૂવ અથવા રિજેક્ટ કરે છે. રહેવાસીને તરત જાણ થાય છે.`
          },
            {
            icon: `🔔`,
            label: `1 કલાક પહેલા રિમાઈન્ડર મોકલાય છે`,
            detail: `બુકિંગના 1 કલાક પહેલા ઓટોમેટિક પુશ રિમાઈન્ડર. જો બુકિંગ ઉપયોગ વગર એક્સપાયર થાય તો એડમિનને જાણ થાય છે.`
          },
          ],
      adminView: {
            title: `⚙️ એડમિન / કમિટી વ્યૂ`,
            points: [
            `નામ, ક્ષમતા, અને મંજૂર કલાકો સાથે એમેનિટીઝ કોન્ફિગર કરો`,
            `સ્લોટ સમયગાળો સેટ કરો (30 મિનિટ, 1 કલાક, 2 કલાક)`,
            `પ્રતિ એમેનિટી ડિપોઝિટ રકમ અને રિફંડ પોલિસી સેટ કરો`,
            `કેલેન્ડર વ્યૂમાં બધી આવનારી બુકિંગ જુઓ`,
            `એક ટેપમાં બુકિંગ અપ્રૂવ અથવા રિજેક્ટ કરો`,
            `સફાઈ અથવા મેઈન્ટેનન્સ માટે એમેનિટી બ્લોક કરો`,
          ]
          },
      residentView: {
            title: `👤 રહેવાસી વ્યૂ`,
            points: [
            `ફોટા અને નિયમો સાથે બધી ઉપલબ્ધ એમેનિટીઝ બ્રાઉઝ કરો`,
            `કોઈપણ તારીખ માટે રિયલ-ટાઈમ સ્લોટ ઉપલબ્ધતા જુઓ`,
            `30 સેકન્ડથી ઓછા સમયમાં સ્લોટ બુક કરો`,
            `પુશ કન્ફર્મેશન અને બુકિંગ રસીદ મેળવો`,
            `બુકિંગના 1 કલાક પહેલા રિમાઈન્ડર મેળવો`,
            `રિફંડ માટે એડમિન-નિર્ધારિત સમયમર્યાદા સુધી રદ કરો`,
          ]
          },
      features: [
            {
            icon: `📅`,
            title: `રિયલ-ટાઈમ સ્લોટ ઉપલબ્ધતા`,
            desc: `બુક અને ઉપલબ્ધ સ્લોટ બતાવતું લાઈવ કેલેન્ડર. ડબલ-બુકિંગ ઓટોમેટિક અટકાવે છે.`
          },
            {
            icon: `💰`,
            title: `ડિપોઝિટ મેનેજમેન્ટ`,
            desc: `પ્રતિ એમેનિટી ડિપોઝિટ રકમ. રહેવાસી પેમેન્ટ લોગ કરે છે; એડમિન કન્ફર્મ અને રિફંડ ટ્રેક કરે છે.`
          },
            {
            icon: `⏰`,
            title: `કસ્ટમાઈઝેબલ સ્લોટ`,
            desc: `સ્લોટ સમયગાળો, ખુલવાના કલાકો, પ્રતિ રહેવાસી પ્રતિ સપ્તાહ મહત્તમ બુકિંગ સેટ કરો — સંપૂર્ણ કસ્ટમાઈઝેબલ.`
          },
            {
            icon: `🚫`,
            title: `બ્લેકઆઉટ તારીખો`,
            desc: `સફાઈ, મેઈન્ટેનન્સ, અથવા ખાસ ઈવેન્ટ્સ માટે એમેનિટીઝ બ્લોક કરો જેથી તે સમયગાળામાં બુક ન થઈ શકે.`
          },
            {
            icon: `📊`,
            title: `ઉપયોગ રિપોર્ટ`,
            desc: `જુઓ કઈ એમેનિટી સૌથી વધુ વપરાય છે, પીક અવર્સ, અને ડિપોઝિટમાંથી આવક — માસિક રિપોર્ટ.`
          },
            {
            icon: `🔔`,
            title: `સ્માર્ટ રિમાઈન્ડર`,
            desc: `બુકિંગ કન્ફર્મેશન, 1-કલાક-પહેલા રિમાઈન્ડર, અને રદ્દીકરણ નોટિફિકેશન — બધું ઓટોમેટેડ.`
          },
          ],
      faqs: [
            {
            q: `હું કેટલી એમેનિટીઝ સેટ કરી શકું?`,
            a: `Pro અને Enterprise પ્લાન પર અમર્યાદિત એમેનિટીઝ. તમે ક્લબહાઉસ, જિમ, સ્વિમિંગ પૂલ, બેડમિન્ટન કોર્ટ, પાર્ટી હોલ, અને કોઈપણ અન્ય સુવિધા માટે અલગ બુકિંગ સિસ્ટમ સેટ કરી શકો છો.`
          },
            {
            q: `શું હું વીકએન્ડ માટે અલગ દરો વસૂલી શકું?`,
            a: `હા. Pro પ્લાન પર તમે દરેક એમેનિટી માટે વીકડે અને વીકએન્ડ ડિપોઝિટ રકમ અલગ-અલગ કોન્ફિગર કરી શકો છો.`
          },
            {
            q: `જો બુકિંગ રદ થાય તો અનક્લેઈમ્ડ ડિપોઝિટનું શું થાય?`,
            a: `એડમિન પ્રતિ એમેનિટી રિફંડ પોલિસી નિયંત્રિત કરે છે. નિર્ધારિત કટઓફ પહેલા રદ કરવા પર સંપૂર્ણ રિફંડ મળે છે; મોડું રદ કરવા પર ડિપોઝિટ જપ્ત થઈ શકે છે.`
          },
            {
            q: `શું ફક્ત બુક કરનાર રહેવાસી જ એમેનિટી વાપરી શકે, કે મહેમાનો લાવી શકે?`,
            a: `આ કોન્ફિગર કરી શકાય તેવું છે. તમે પ્રતિ બુકિંગ મહત્તમ મહેમાનોની સંખ્યા સેટ કરી શકો છો. રહેવાસી તેમના સ્લોટ દરમિયાન એમેનિટી માટે જવાબદાર રહે છે.`
          },
          ],
      related: [
            {
            icon: `🅿️`,
            title: `પાર્કિંગ મેનેજમેન્ટ`,
            href: `/features/parking`,
            desc: `વાહન રજિસ્ટ્રી, સ્લોટ ફાળવણી, અને વિઝિટર પાર્કિંગ.`
          },
            {
            icon: `🎉`,
            title: `ઈવેન્ટ્સ અને પોલ્સ`,
            href: `/features/events`,
            desc: `RSVP અને ફોટો ગેલેરી સાથે સોસાયટી ઈવેન્ટ્સ પ્લાન કરો.`
          },
            {
            icon: `🛠️`,
            title: `સમસ્યાઓ અને ફરિયાદો`,
            href: `/features/issues`,
            desc: `રહેવાસીઓ ફરિયાદો ઉઠાવે અને ઉકેલ સુધી ટ્રેક કરે છે.`
          },
          ],
      ctaHeadline: `તમારી સોસાયટી માટે સેલ્ફ-સર્વિસ એમેનિટી બુકિંગ.`,
      ctaSub: `એમેનિટી બુકિંગ Pro પ્લાન પર ઉપલબ્ધ છે. ફ્રી ડેમો ઉપલબ્ધ છે.`,
    },
    ta: {
      badge: `அமெனிட்டி முன்பதிவு`,
      emoji: `🏊`,
      headline: `உங்கள் ஃபோனிலிருந்தே கிளப்ஹவுஸை முன்பதிவு செய்யுங்கள்.`,
      headlineAccent: `கால் இல்லை. WhatsApp இல்லை. இரட்டை முன்பதிவு இல்லை.`,
      subline: `நேரலை ஸ்லாட் இருப்பு, டெபாசிட் வசூல், மற்றும் அட்மின் ஒப்புதல் ஃப்ளோவுடன் தன்னிச்சையான அமெனிட்டி முன்பதிவு. குடியிருப்பாளர்கள் 30 வினாடிகளில் முன்பதிவு செய்கிறார்கள். அட்மின்கள் அனைத்தையும் ஒரே காட்சியில் நிர்வகிக்கிறார்கள்.`,
      problems: [
            {
            icon: `📞`,
            title: `செயலாளருக்கு போன் கால் மூலம் முன்பதிவு`,
            desc: `குடியிருப்பாளர்கள் கிளப்ஹவுஸை முன்பதிவு செய்ய செயலாளரை அழைக்கிறார்கள். செயலாளர் வைத்திருக்கும் மேனுவல் டைரி தொலைந்துவிடும் அல்லது இரட்டை முன்பதிவாகிவிடும்.`
          },
            {
            icon: `💬`,
            title: `WhatsApp இல் உறுதிப்படுத்தல்`,
            desc: `உறுதிப்படுத்தல் ஒரு WhatsApp செய்தி மட்டுமே. ரசீது இல்லை. நினைவூட்டல் இல்லை. குடியிருப்பாளர் மறந்துவிடுவார், ஸ்லாட் வீணாகிவிடும்.`
          },
            {
            icon: `💸`,
            title: `நோட்புக்கில் டெபாசிட் கண்காணிப்பு`,
            desc: `அமெனிட்டி முன்பதிவுகளுக்கான பாதுகாப்பு டெபாசிட்கள் ஒரு பதிவேட்டில் குறிக்கப்படுகின்றன. நோட்புக் தெளிவில்லாமல் அல்லது காணாமல் போகும்போது தகராறுகள் ஏற்படுகின்றன.`
          },
          ],
      flows: [
            {
            icon: `🏊`,
            label: `குடியிருப்பாளர் அமெனிட்டியை தேர்வு செய்கிறார்`,
            detail: `அமெனிட்டீஸ் திரையை திறக்கிறார், வசதியை (கிளப்ஹவுஸ், ஜிம், பூல், கோர்ட்) தேர்ந்தெடுத்து, ஒரு தேதியை தேர்வு செய்கிறார்.`
          },
            {
            icon: `🕐`,
            label: `கிடைக்கும் ஸ்லாட்டை தேர்வு செய்கிறார்`,
            detail: `நேர ஸ்லாட்கள் நேரலையில் காட்டப்படுகின்றன. ஏற்கனவே முன்பதிவு செய்யப்பட்ட ஸ்லாட்கள் மங்கலாக காட்டப்படும். இரட்டை முன்பதிவு சாத்தியமில்லை.`
          },
            {
            icon: `💳`,
            label: `டெபாசிட் செலுத்துகிறார் (தேவைப்பட்டால்)`,
            detail: `ஒவ்வொரு அமெனிட்டிக்கும் அட்மின் டெபாசிட் தொகையை அமைக்கிறார். குடியிருப்பாளர் ஆப்பில் பேமெண்ட் முறையை பதிவு செய்கிறார். அட்மின் உறுதிப்படுத்துகிறார்.`
          },
            {
            icon: `✅`,
            label: `அட்மின் முன்பதிவை ஒப்புதல் அளிக்கிறார்`,
            detail: `அட்மின் அறிவிப்பைப் பெற்று காரணத்துடன் ஒப்புதல் அல்லது நிராகரிக்கிறார். குடியிருப்பாளருக்கு உடனடியாக தெரிவிக்கப்படுகிறது.`
          },
            {
            icon: `🔔`,
            label: `1 மணி நேரத்திற்கு முன் நினைவூட்டல் அனுப்பப்படுகிறது`,
            detail: `முன்பதிவுக்கு 1 மணி நேரத்திற்கு முன் தானியங்கி புஷ் நினைவூட்டல். முன்பதிவு பயன்படுத்தப்படாமல் காலாவதியானால் அட்மினுக்கு தெரிவிக்கப்படும்.`
          },
          ],
      adminView: {
            title: `⚙️ அட்மின் / கமிட்டி காட்சி`,
            points: [
            `பெயர், கொள்ளளவு, மற்றும் அனுமதிக்கப்பட்ட நேரங்களுடன் அமெனிட்டீஸை கட்டமைக்கவும்`,
            `ஸ்லாட் கால அளவை அமைக்கவும் (30 நிமிடம், 1 மணி, 2 மணி)`,
            `ஒவ்வொரு அமெனிட்டிக்கும் டெபாசிட் தொகைகள் மற்றும் திரும்பப் பெறும் கொள்கைகளை அமைக்கவும்`,
            `காலெண்டர் காட்சியில் அனைத்து வரவிருக்கும் முன்பதிவுகளையும் காணவும்`,
            `ஒரே தட்டில் முன்பதிவுகளை ஒப்புதல் அல்லது நிராகரிக்கவும்`,
            `சுத்தம் அல்லது பராமரிப்பு காலங்களுக்கு அமெனிட்டியை தடுக்கவும்`,
          ]
          },
      residentView: {
            title: `👤 குடியிருப்பாளர் காட்சி`,
            points: [
            `புகைப்படங்கள் மற்றும் விதிகளுடன் அனைத்து கிடைக்கும் அமெனிட்டீஸையும் பார்க்கவும்`,
            `எந்த தேதிக்கும் நேரலை ஸ்லாட் இருப்பை காணவும்`,
            `30 வினாடிகளுக்குள் ஒரு ஸ்லாட்டை முன்பதிவு செய்யவும்`,
            `புஷ் உறுதிப்படுத்தல் மற்றும் முன்பதிவு ரசீது பெறவும்`,
            `முன்பதிவுக்கு 1 மணி நேரத்திற்கு முன் நினைவூட்டல் பெறவும்`,
            `திரும்பப் பெறுவதற்காக அட்மின் நிர்ணயித்த காலக்கெடுவரை ரத்து செய்யவும்`,
          ]
          },
      features: [
            {
            icon: `📅`,
            title: `நேரலை ஸ்லாட் இருப்பு`,
            desc: `முன்பதிவு செய்யப்பட்ட மற்றும் கிடைக்கும் ஸ்லாட்களை காட்டும் நேரலை காலெண்டர். இரட்டை முன்பதிவை தானாக தடுக்கிறது.`
          },
            {
            icon: `💰`,
            title: `டெபாசிட் நிர்வாகம்`,
            desc: `ஒவ்வொரு அமெனிட்டிக்கும் தனித்தனி டெபாசிட் தொகைகள். குடியிருப்பாளர் பேமெண்டை பதிவு செய்கிறார்; அட்மின் உறுதிப்படுத்தி திரும்பப்பெறுதல்களை கண்காணிக்கிறார்.`
          },
            {
            icon: `⏰`,
            title: `கட்டமைக்கக்கூடிய ஸ்லாட்கள்`,
            desc: `ஸ்லாட் கால அளவு, திறக்கும் நேரங்கள், ஒரு வாரத்திற்கு ஒரு குடியிருப்பாளருக்கு அதிகபட்ச முன்பதிவுகள் — முழுமையாக தனிப்பயனாக்கக்கூடியது.`
          },
            {
            icon: `🚫`,
            title: `பிளாக்அவுட் தேதிகள்`,
            desc: `சுத்தம், பராமரிப்பு, அல்லது சிறப்பு நிகழ்வுகளுக்காக அமெனிட்டீஸை தடுக்கவும், அந்த காலங்களில் முன்பதிவு செய்ய முடியாது.`
          },
            {
            icon: `📊`,
            title: `பயன்பாட்டு அறிக்கை`,
            desc: `எந்த அமெனிட்டீஸ் அதிகம் பயன்படுத்தப்படுகின்றன, உச்ச நேரங்கள், மற்றும் டெபாசிட்களில் இருந்து வருமானத்தை காணவும் — மாதாந்திர அறிக்கை.`
          },
            {
            icon: `🔔`,
            title: `ஸ்மார்ட் நினைவூட்டல்கள்`,
            desc: `முன்பதிவு உறுதிப்படுத்தல், 1-மணி-நேரம்-முன் நினைவூட்டல், மற்றும் ரத்து அறிவிப்பு — அனைத்தும் தானியங்கி.`
          },
          ],
      faqs: [
            {
            q: `நான் எத்தனை அமெனிட்டீஸை அமைக்க முடியும்?`,
            a: `Pro மற்றும் Enterprise திட்டங்களில் வரம்பற்ற அமெனிட்டீஸ். கிளப்ஹவுஸ், ஜிம், நீச்சல் குளம், பேட்மிண்டன் கோர்ட், பார்ட்டி ஹால், மற்றும் வேறு எந்த வசதிக்கும் தனித்தனி முன்பதிவு அமைப்புகளை அமைக்கலாம்.`
          },
            {
            q: `வாரயிறுதி நாட்களுக்கு வேறு விகிதங்களை வசூலிக்க முடியுமா?`,
            a: `ஆம். Pro திட்டத்தில் ஒவ்வொரு அமெனிட்டிக்கும் வார நாட்கள் மற்றும் வாரயிறுதி டெபாசிட் தொகைகளை தனித்தனியாக கட்டமைக்கலாம்.`
          },
            {
            q: `ஒரு முன்பதிவு ரத்து செய்யப்பட்டால் கோரப்படாத டெபாசிட்களுக்கு என்ன நடக்கும்?`,
            a: `திரும்பப்பெறும் கொள்கையை அட்மின் ஒவ்வொரு அமெனிட்டிக்கும் கட்டுப்படுத்துகிறார். வரையறுக்கப்பட்ட கடைசி தேதிக்கு முன் ரத்து செய்தால் முழு பணம் திரும்பும்; தாமதமான ரத்துகளுக்கு டெபாசிட் இழக்கும்படி அமைக்கலாம்.`
          },
            {
            q: `முன்பதிவு செய்த குடியிருப்பாளர் மட்டும் அமெனிட்டியை பயன்படுத்த முடியுமா, அல்லது விருந்தினர்களை கூட்டிவரலாமா?`,
            a: `இது கட்டமைக்கக்கூடியது. ஒரு முன்பதிவுக்கு அதிகபட்ச விருந்தினர் எண்ணிக்கையை அமைக்கலாம். குடியிருப்பாளரே தன் ஸ்லாட் நேரத்தில் அமெனிட்டிக்கு பொறுப்பாளியாக இருப்பார்.`
          },
          ],
      related: [
            {
            icon: `🅿️`,
            title: `பார்க்கிங் நிர்வாகம்`,
            href: `/features/parking`,
            desc: `வாகன பதிவேடு, ஸ்லாட் ஒதுக்கீடு, மற்றும் விசிட்டர் பார்க்கிங்.`
          },
            {
            icon: `🎉`,
            title: `நிகழ்வுகள் & வாக்கெடுப்புகள்`,
            href: `/features/events`,
            desc: `RSVP மற்றும் புகைப்பட கேலரிகளுடன் சொசைட்டி நிகழ்வுகளை திட்டமிடுங்கள்.`
          },
            {
            icon: `🛠️`,
            title: `பிரச்சினைகள் & புகார்கள்`,
            href: `/features/issues`,
            desc: `குடியிருப்பாளர்கள் புகார்களை எழுப்பி தீர்வு வரை கண்காணிக்கிறார்கள்.`
          },
          ],
      ctaHeadline: `உங்கள் சொசைட்டிக்கான தன்னிச்சையான அமெனிட்டி முன்பதிவு.`,
      ctaSub: `அமெனிட்டி முன்பதிவு Pro திட்டத்தில் கிடைக்கிறது. இலவச டெமோ கிடைக்கிறது.`,
    },
  },
  "community-help": {
    en: {
      badge: `Community Help`,
      emoji: `🤝`,
      headline: `Need a plumber? Ask your neighbours`,
      headlineAccent: `not a random app.`,
      subline: `A trust-based service marketplace within your society. Share and discover recommendations for maids, plumbers, tutors, and more — from neighbours you actually know.`,
      problems: [
            {
            icon: `🤔`,
            title: `No trusted vendor network in the society`,
            desc: `Every new resident asks the same question in the WhatsApp group: 'Can anyone recommend a good plumber?' Answers get buried and lost.`
          },
            {
            icon: `📋`,
            title: `No record of past recommendations`,
            desc: `A great recommendation from 2019 is gone. The WhatsApp scroll goes back only so far. New residents always start from scratch.`
          },
            {
            icon: `⚠️`,
            title: `Unknown vendors from apps are risky`,
            desc: `Booking a stranger from a hyperlocal app is a gamble. Your neighbour's recommendation of someone they've used for years is gold.`
          },
          ],
      flows: [
            {
            icon: `✍️`,
            label: `Resident posts a need or offer`,
            detail: `Posts what they need (e.g., 'Looking for a good electrician') or what they offer/recommend (e.g., 'Rajan the plumber — highly reliable, 9876543210').`
          },
            {
            icon: `📂`,
            label: `Post categorised automatically`,
            detail: `Categories: Domestic Help, Plumbing, Electrical, Tutoring, Transport, Miscellaneous. Easy to find what you need.`
          },
            {
            icon: `👍`,
            label: `Neighbours upvote trusted contacts`,
            detail: `Other residents who've used the same vendor can upvote the recommendation. Social proof within the community.`
          },
            {
            icon: `💬`,
            label: `In-app chat or contact sharing`,
            detail: `Residents can contact the poster or the recommended vendor directly through the app or via phone.`
          },
            {
            icon: `📊`,
            label: `Most helpful vendors surface to top`,
            detail: `Highest-upvoted recommendations stay visible. Low-quality or outdated posts fade over time.`
          },
          ],
      adminView: {
            title: `⚙️ Admin / Committee View`,
            points: [
            `Moderate posts — approve, reject, or remove inappropriate content`,
            `Pin verified society-wide vendor recommendations (e.g., official electrician)`,
            `Set posting permissions (all residents or verified only)`,
            `View post activity and engagement reports`,
            `Create official society vendor directory (Pro plan)`,
            `Receive reports of inappropriate vendor contact details`,
          ]
          },
      residentView: {
            title: `👤 Resident View`,
            points: [
            `Browse help listings by category without posting`,
            `Post a need or share a recommendation in 30 seconds`,
            `Upvote vendors you've personally used and trusted`,
            `Save contacts of vendors you want to remember`,
            `Contact vendors or the recommending resident directly`,
            `Set a request as 'Fulfilled' once your need is met`,
          ]
          },
      features: [
            {
            icon: `⭐`,
            title: `Community upvotes`,
            desc: `Residents upvote trusted recommendations. The most reliable vendors rise to the top organically.`
          },
            {
            icon: `📂`,
            title: `Smart categories`,
            desc: `Domestic Help, Plumbing, Electrical, AC Repair, Tutoring, Car Wash, Transport, and more.`
          },
            {
            icon: `🛡️`,
            title: `Society-only visibility`,
            desc: `All posts are visible only to verified residents of your society. No public listing.`
          },
            {
            icon: `📌`,
            title: `Admin-pinned vendors`,
            desc: `Admins can pin official society vendor recommendations at the top of each category.`
          },
            {
            icon: `🔍`,
            title: `Search within community`,
            desc: `Search by service type or vendor name. Find any recommendation in seconds.`
          },
            {
            icon: `✅`,
            title: `Request fulfilment tracking`,
            desc: `Post a need; mark it fulfilled when sorted. Keeps the board clean and current.`
          },
          ],
      faqs: [
            {
            q: `Can anyone in the society post a recommendation?`,
            a: `All verified residents can post. Admins can restrict posting to 'admin-approved' if they prefer a curated directory. Upvoting is always open to all residents.`
          },
            {
            q: `Is this like a public marketplace?`,
            a: `No. Community Help is completely private to your society. Only verified residents with the society's app can see posts. No external access.`
          },
            {
            q: `Can vendors pay to be featured?`,
            a: `No. SocietyApp is not an advertising platform. Recommendations are organic from residents. Admins can pin official society vendors at no charge.`
          },
            {
            q: `Is Community Help available on the Free plan?`,
            a: `Yes. Community Help is included in the Free plan for all societies, including those up to 50 units.`
          },
          ],
      related: [
            {
            icon: `📢`,
            title: `Notice Board`,
            href: `/features/notices`,
            desc: `Post society-wide notices with push delivery.`
          },
            {
            icon: `🎉`,
            title: `Events & Polls`,
            href: `/features/events`,
            desc: `Plan and manage society events with RSVP.`
          },
            {
            icon: `🛠️`,
            title: `Issues & Complaints`,
            href: `/features/issues`,
            desc: `Track complaints from report to resolution.`
          },
          ],
      ctaHeadline: `Build a trusted community, not just a building.`,
      ctaSub: `Community Help is included in the Free plan. No credit card needed.`,
    },
    hi: {
      badge: `कम्युनिटी हेल्प`,
      emoji: `🤝`,
      headline: `प्लंबर चाहिए? अपने पड़ोसियों से पूछें,`,
      headlineAccent: `किसी रैंडम ऐप से नहीं।`,
      subline: `आपकी सोसायटी के भीतर एक भरोसे पर आधारित सर्विस मार्केटप्लेस। नौकरानी, प्लंबर, ट्यूटर, और बहुत कुछ की सिफारिशें साझा करें और खोजें — उन पड़ोसियों से जिन्हें आप वाकई जानते हैं।`,
      problems: [
            {
            icon: `🤔`,
            title: `सोसायटी में कोई भरोसेमंद वेंडर नेटवर्क नहीं`,
            desc: `हर नया रेजिडेंट WhatsApp ग्रुप में वही सवाल पूछता है: 'क्या कोई अच्छे प्लंबर की सिफारिश कर सकता है?' जवाब दब जाते हैं और खो जाते हैं।`
          },
            {
            icon: `📋`,
            title: `पुरानी सिफारिशों का कोई रिकॉर्ड नहीं`,
            desc: `2019 की एक बढ़िया सिफारिश गायब हो जाती है। WhatsApp स्क्रॉल सिर्फ इतना पीछे जाती है। नए रेजिडेंट्स हमेशा शुरुआत से शुरू करते हैं।`
          },
            {
            icon: `⚠️`,
            title: `ऐप्स से अनजान वेंडर जोखिम भरे हैं`,
            desc: `हाइपरलोकल ऐप से किसी अजनबी को बुक करना एक जुआ है। आपके पड़ोसी की सालों से इस्तेमाल किए गए व्यक्ति की सिफारिश सोने जैसी है।`
          },
          ],
      flows: [
            {
            icon: `✍️`,
            label: `रेजिडेंट जरूरत या ऑफर पोस्ट करता है`,
            detail: `वे जो चाहते हैं वो पोस्ट करते हैं (जैसे 'अच्छा इलेक्ट्रीशियन चाहिए') या जो ऑफर/सिफारिश करते हैं (जैसे 'राजन प्लंबर — बहुत भरोसेमंद, 9876543210')।`
          },
            {
            icon: `📂`,
            label: `पोस्ट अपने आप कैटेगराइज़ हो जाती है`,
            detail: `श्रेणियां: घरेलू सहायता, प्लंबिंग, इलेक्ट्रिकल, ट्यूटरिंग, ट्रांसपोर्ट, अन्य। जो चाहिए वो ढूंढना आसान।`
          },
            {
            icon: `👍`,
            label: `पड़ोसी भरोसेमंद संपर्कों को अपवोट करते हैं`,
            detail: `जिन रेजिडेंट्स ने उसी वेंडर का इस्तेमाल किया है वो सिफारिश को अपवोट कर सकते हैं। कम्युनिटी के अंदर सोशल प्रूफ।`
          },
            {
            icon: `💬`,
            label: `इन-ऐप चैट या संपर्क साझा करना`,
            detail: `रेजिडेंट्स पोस्ट करने वाले या सिफारिश किए गए वेंडर से ऐप या फोन के जरिए सीधे संपर्क कर सकते हैं।`
          },
            {
            icon: `📊`,
            label: `सबसे मददगार वेंडर ऊपर आते हैं`,
            detail: `सबसे ज्यादा अपवोटेड सिफारिशें दिखती रहती हैं। कम क्वालिटी या पुरानी पोस्ट समय के साथ धुंधली हो जाती हैं।`
          },
          ],
      adminView: {
            title: `⚙️ एडमिन / कमेटी व्यू`,
            points: [
            `पोस्ट मॉडरेट करें — अनुचित कंटेंट अप्रूव, रिजेक्ट, या हटाएं`,
            `वेरिफाइड सोसायटी-वाइड वेंडर सिफारिशें पिन करें (जैसे आधिकारिक इलेक्ट्रीशियन)`,
            `पोस्टिंग परमिशन सेट करें (सभी रेजिडेंट्स या सिर्फ वेरिफाइड)`,
            `पोस्ट एक्टिविटी और एंगेजमेंट रिपोर्ट देखें`,
            `आधिकारिक सोसायटी वेंडर डायरेक्टरी बनाएं (Pro प्लान)`,
            `अनुचित वेंडर संपर्क विवरण की रिपोर्ट प्राप्त करें`,
          ]
          },
      residentView: {
            title: `👤 रेजिडेंट व्यू`,
            points: [
            `बिना पोस्ट किए श्रेणी के अनुसार हेल्प लिस्टिंग ब्राउज़ करें`,
            `30 सेकंड में एक जरूरत पोस्ट करें या सिफारिश साझा करें`,
            `उन वेंडर्स को अपवोट करें जिन्हें आपने खुद इस्तेमाल और भरोसा किया है`,
            `याद रखने के लिए वेंडर्स के संपर्क सेव करें`,
            `वेंडर्स या सिफारिश करने वाले रेजिडेंट से सीधे संपर्क करें`,
            `जरूरत पूरी होने पर रिक्वेस्ट को 'पूरा हुआ' सेट करें`,
          ]
          },
      features: [
            {
            icon: `⭐`,
            title: `कम्युनिटी अपवोट्स`,
            desc: `रेजिडेंट्स भरोसेमंद सिफारिशों को अपवोट करते हैं। सबसे विश्वसनीय वेंडर्स खुद-ब-खुद ऊपर आते हैं।`
          },
            {
            icon: `📂`,
            title: `स्मार्ट कैटेगरीज`,
            desc: `घरेलू सहायता, प्लंबिंग, इलेक्ट्रिकल, AC रिपेयर, ट्यूटरिंग, कार वॉश, ट्रांसपोर्ट, और भी बहुत कुछ।`
          },
            {
            icon: `🛡️`,
            title: `सिर्फ सोसायटी के लिए दृश्यता`,
            desc: `सभी पोस्ट सिर्फ आपकी सोसायटी के वेरिफाइड रेजिडेंट्स को दिखती हैं। कोई पब्लिक लिस्टिंग नहीं।`
          },
            {
            icon: `📌`,
            title: `एडमिन-पिन किए गए वेंडर्स`,
            desc: `एडमिन हर श्रेणी के शीर्ष पर आधिकारिक सोसायटी वेंडर सिफारिशें पिन कर सकते हैं।`
          },
            {
            icon: `🔍`,
            title: `कम्युनिटी में खोजें`,
            desc: `सर्विस टाइप या वेंडर नाम से खोजें। सेकंडों में कोई भी सिफारिश पाएं।`
          },
            {
            icon: `✅`,
            title: `रिक्वेस्ट पूर्णता ट्रैकिंग`,
            desc: `एक जरूरत पोस्ट करें; निपटने पर पूरा चिह्नित करें। बोर्ड को साफ और अप-टू-डेट रखता है।`
          },
          ],
      faqs: [
            {
            q: `क्या सोसायटी में कोई भी सिफारिश पोस्ट कर सकता है?`,
            a: `सभी वेरिफाइड रेजिडेंट्स पोस्ट कर सकते हैं। यदि एडमिन को क्यूरेटेड डायरेक्टरी पसंद है तो वे पोस्टिंग को 'एडमिन-अप्रूव्ड' तक सीमित कर सकते हैं। अपवोटिंग हमेशा सभी रेजिडेंट्स के लिए खुली रहती है।`
          },
            {
            q: `क्या यह पब्लिक मार्केटप्लेस जैसा है?`,
            a: `नहीं। कम्युनिटी हेल्प पूरी तरह से आपकी सोसायटी के लिए निजी है। सिर्फ सोसायटी के ऐप वाले वेरिफाइड रेजिडेंट्स ही पोस्ट देख सकते हैं। कोई बाहरी एक्सेस नहीं।`
          },
            {
            q: `क्या वेंडर्स फीचर होने के लिए पैसे दे सकते हैं?`,
            a: `नहीं। SocietyApp एक विज्ञापन प्लेटफॉर्म नहीं है। सिफारिशें रेजिडेंट्स से ऑर्गेनिक रूप से आती हैं। एडमिन आधिकारिक सोसायटी वेंडर्स को बिना किसी शुल्क के पिन कर सकते हैं।`
          },
            {
            q: `क्या कम्युनिटी हेल्प फ्री प्लान पर उपलब्ध है?`,
            a: `हां। कम्युनिटी हेल्प सभी सोसायटियों के लिए फ्री प्लान में शामिल है, 50 यूनिट तक की सोसायटियों सहित।`
          },
          ],
      related: [
            {
            icon: `📢`,
            title: `नोटिस बोर्ड`,
            href: `/features/notices`,
            desc: `पुश डिलीवरी के साथ सोसायटी-वाइड नोटिस पोस्ट करें।`
          },
            {
            icon: `🎉`,
            title: `इवेंट्स और पोल्स`,
            href: `/features/events`,
            desc: `RSVP के साथ सोसायटी इवेंट्स प्लान और मैनेज करें।`
          },
            {
            icon: `🛠️`,
            title: `समस्याएं और शिकायतें`,
            href: `/features/issues`,
            desc: `रिपोर्ट से समाधान तक शिकायतें ट्रैक करें।`
          },
          ],
      ctaHeadline: `सिर्फ एक इमारत नहीं, एक भरोसेमंद कम्युनिटी बनाएं।`,
      ctaSub: `कम्युनिटी हेल्प फ्री प्लान में शामिल है। कोई क्रेडिट कार्ड जरूरी नहीं।`,
    },
    gu: {
      badge: `કમ્યુનિટી હેલ્પ`,
      emoji: `🤝`,
      headline: `પ્લમ્બર જોઈએ છે? તમારા પડોશીઓને પૂછો,`,
      headlineAccent: `કોઈ રેન્ડમ એપને નહીં.`,
      subline: `તમારી સોસાયટીની અંદર ભરોસા પર આધારિત સર્વિસ માર્કેટપ્લેસ. કામવાળી, પ્લમ્બર, ટ્યુટર, અને વધુ માટેની ભલામણો શેર કરો અને શોધો — એવા પડોશીઓ પાસેથી જેમને તમે ખરેખર ઓળખો છો.`,
      problems: [
            {
            icon: `🤔`,
            title: `સોસાયટીમાં કોઈ વિશ્વસનીય વેન્ડર નેટવર્ક નથી`,
            desc: `દરેક નવો રહેવાસી WhatsApp ગ્રુપમાં એ જ સવાલ પૂછે છે: 'કોઈ સારા પ્લમ્બરની ભલામણ કરી શકે?' જવાબો દબાઈ જાય છે અને ખોવાઈ જાય છે.`
          },
            {
            icon: `📋`,
            title: `ભૂતકાળની ભલામણોનો કોઈ રેકોર્ડ નથી`,
            desc: `2019 ની એક સરસ ભલામણ ગાયબ થઈ જાય છે. WhatsApp સ્ક્રોલ માત્ર અમુક હદ સુધી પાછળ જાય છે. નવા રહેવાસીઓ હંમેશા શરૂઆતથી શરૂ કરે છે.`
          },
            {
            icon: `⚠️`,
            title: `એપ્સના અજાણ્યા વેન્ડર્સ જોખમી છે`,
            desc: `હાઈપરલોકલ એપમાંથી અજાણ્યા વ્યક્તિને બુક કરવો જુગાર છે. તમારા પડોશીની વર્ષોથી વાપરેલા વ્યક્તિની ભલામણ સોના જેવી છે.`
          },
          ],
      flows: [
            {
            icon: `✍️`,
            label: `રહેવાસી જરૂરિયાત અથવા ઓફર પોસ્ટ કરે છે`,
            detail: `તેઓ જે જોઈએ છે તે પોસ્ટ કરે છે (જેમ કે 'સારો ઈલેક્ટ્રિશિયન જોઈએ છે') અથવા જે ઓફર/ભલામણ કરે છે (જેમ કે 'રાજન પ્લમ્બર — ખૂબ વિશ્વસનીય, 9876543210').`
          },
            {
            icon: `📂`,
            label: `પોસ્ટ ઓટોમેટિક કેટેગરાઈઝ થાય છે`,
            detail: `શ્રેણીઓ: ઘરેલુ મદદ, પ્લમ્બિંગ, ઈલેક્ટ્રિકલ, ટ્યુટરિંગ, ટ્રાન્સપોર્ટ, અન્ય. જે જોઈએ તે શોધવું સરળ.`
          },
            {
            icon: `👍`,
            label: `પડોશીઓ વિશ્વસનીય સંપર્કોને અપવોટ કરે છે`,
            detail: `જે રહેવાસીઓએ એ જ વેન્ડર વાપર્યો છે તેઓ ભલામણને અપવોટ કરી શકે છે. કમ્યુનિટીમાં સોશિયલ પ્રૂફ.`
          },
            {
            icon: `💬`,
            label: `ઈન-એપ ચેટ અથવા સંપર્ક શેરિંગ`,
            detail: `રહેવાસીઓ પોસ્ટ કરનાર અથવા ભલામણ કરેલા વેન્ડરનો સીધો સંપર્ક એપ અથવા ફોન દ્વારા કરી શકે છે.`
          },
            {
            icon: `📊`,
            label: `સૌથી મદદરૂપ વેન્ડર્સ ટોચ પર આવે છે`,
            detail: `સૌથી વધુ અપવોટ થયેલી ભલામણો દેખાતી રહે છે. નબળી ગુણવત્તા કે જૂની પોસ્ટ સમય જતાં ઝાંખી થાય છે.`
          },
          ],
      adminView: {
            title: `⚙️ એડમિન / કમિટી વ્યૂ`,
            points: [
            `પોસ્ટ મોડરેટ કરો — અયોગ્ય કન્ટેન્ટ અપ્રૂવ, રિજેક્ટ, અથવા દૂર કરો`,
            `વેરિફાઈડ સોસાયટી-વાઈડ વેન્ડર ભલામણો પિન કરો (જેમ કે અધિકૃત ઈલેક્ટ્રિશિયન)`,
            `પોસ્ટિંગ પરમિશન સેટ કરો (બધા રહેવાસીઓ અથવા ફક્ત વેરિફાઈડ)`,
            `પોસ્ટ એક્ટિવિટી અને એંગેજમેન્ટ રિપોર્ટ જુઓ`,
            `અધિકૃત સોસાયટી વેન્ડર ડિરેક્ટરી બનાવો (Pro પ્લાન)`,
            `અયોગ્ય વેન્ડર સંપર્ક વિગતોના રિપોર્ટ્સ મેળવો`,
          ]
          },
      residentView: {
            title: `👤 રહેવાસી વ્યૂ`,
            points: [
            `પોસ્ટ કર્યા વગર શ્રેણી મુજબ હેલ્પ લિસ્ટિંગ બ્રાઉઝ કરો`,
            `30 સેકન્ડમાં જરૂરિયાત પોસ્ટ કરો અથવા ભલામણ શેર કરો`,
            `જે વેન્ડર્સ તમે ખુદ વાપર્યા અને ભરોસો કર્યો છે તેમને અપવોટ કરો`,
            `યાદ રાખવા માટે વેન્ડર્સના સંપર્કો સેવ કરો`,
            `વેન્ડર્સ અથવા ભલામણ કરનાર રહેવાસીનો સીધો સંપર્ક કરો`,
            `જરૂરિયાત પૂરી થાય ત્યારે વિનંતીને 'પૂર્ણ' તરીકે સેટ કરો`,
          ]
          },
      features: [
            {
            icon: `⭐`,
            title: `કમ્યુનિટી અપવોટ્સ`,
            desc: `રહેવાસીઓ વિશ્વસનીય ભલામણોને અપવોટ કરે છે. સૌથી વિશ્વસનીય વેન્ડર્સ આપમેળે ટોચ પર આવે છે.`
          },
            {
            icon: `📂`,
            title: `સ્માર્ટ કેટેગરીઝ`,
            desc: `ઘરેલુ મદદ, પ્લમ્બિંગ, ઈલેક્ટ્રિકલ, AC રિપેર, ટ્યુટરિંગ, કાર વોશ, ટ્રાન્સપોર્ટ, અને વધુ.`
          },
            {
            icon: `🛡️`,
            title: `ફક્ત સોસાયટી માટે દૃશ્યતા`,
            desc: `બધી પોસ્ટ ફક્ત તમારી સોસાયટીના વેરિફાઈડ રહેવાસીઓને દેખાય છે. કોઈ પબ્લિક લિસ્ટિંગ નહીં.`
          },
            {
            icon: `📌`,
            title: `એડમિન-પિન કરેલા વેન્ડર્સ`,
            desc: `એડમિન દરેક શ્રેણીની ટોચ પર અધિકૃત સોસાયટી વેન્ડર ભલામણો પિન કરી શકે છે.`
          },
            {
            icon: `🔍`,
            title: `કમ્યુનિટીમાં શોધો`,
            desc: `સર્વિસ પ્રકાર અથવા વેન્ડર નામથી શોધો. સેકન્ડોમાં કોઈપણ ભલામણ મેળવો.`
          },
            {
            icon: `✅`,
            title: `વિનંતી પૂર્ણતા ટ્રેકિંગ`,
            desc: `જરૂરિયાત પોસ્ટ કરો; ઉકેલાય ત્યારે પૂર્ણ ચિહ્નિત કરો. બોર્ડને સ્વચ્છ અને અપ-ટુ-ડેટ રાખે છે.`
          },
          ],
      faqs: [
            {
            q: `શું સોસાયટીમાં કોઈપણ ભલામણ પોસ્ટ કરી શકે?`,
            a: `બધા વેરિફાઈડ રહેવાસીઓ પોસ્ટ કરી શકે છે. જો એડમિનને ક્યુરેટેડ ડિરેક્ટરી પસંદ હોય તો તેઓ પોસ્ટિંગને 'એડમિન-અપ્રૂવ્ડ' સુધી મર્યાદિત કરી શકે છે. અપવોટિંગ હંમેશા બધા રહેવાસીઓ માટે ખુલ્લું હોય છે.`
          },
            {
            q: `શું આ પબ્લિક માર્કેટપ્લેસ જેવું છે?`,
            a: `ના. કમ્યુનિટી હેલ્પ સંપૂર્ણપણે તમારી સોસાયટી માટે ખાનગી છે. ફક્ત સોસાયટીની એપવાળા વેરિફાઈડ રહેવાસીઓ જ પોસ્ટ જોઈ શકે છે. કોઈ બાહ્ય એક્સેસ નહીં.`
          },
            {
            q: `શું વેન્ડર્સ ફીચર થવા માટે પૈસા આપી શકે?`,
            a: `ના. SocietyApp એક જાહેરાત પ્લેટફોર્મ નથી. ભલામણો રહેવાસીઓ તરફથી ઓર્ગેનિક રીતે આવે છે. એડમિન અધિકૃત સોસાયટી વેન્ડર્સને કોઈ ચાર્જ વગર પિન કરી શકે છે.`
          },
            {
            q: `શું કમ્યુનિટી હેલ્પ ફ્રી પ્લાન પર ઉપલબ્ધ છે?`,
            a: `હા. કમ્યુનિટી હેલ્પ બધી સોસાયટીઓ માટે ફ્રી પ્લાનમાં સામેલ છે, 50 યુનિટ સુધીની સોસાયટીઓ સહિત.`
          },
          ],
      related: [
            {
            icon: `📢`,
            title: `નોટિસ બોર્ડ`,
            href: `/features/notices`,
            desc: `પુશ ડિલિવરી સાથે સોસાયટી-વાઈડ નોટિસ પોસ્ટ કરો.`
          },
            {
            icon: `🎉`,
            title: `ઈવેન્ટ્સ અને પોલ્સ`,
            href: `/features/events`,
            desc: `RSVP સાથે સોસાયટી ઈવેન્ટ્સ પ્લાન અને મેનેજ કરો.`
          },
            {
            icon: `🛠️`,
            title: `સમસ્યાઓ અને ફરિયાદો`,
            href: `/features/issues`,
            desc: `રિપોર્ટથી ઉકેલ સુધી ફરિયાદો ટ્રેક કરો.`
          },
          ],
      ctaHeadline: `ફક્ત ઈમારત નહીં, વિશ્વસનીય કમ્યુનિટી બનાવો.`,
      ctaSub: `કમ્યુનિટી હેલ્પ ફ્રી પ્લાનમાં સામેલ છે. કોઈ ક્રેડિટ કાર્ડ જરૂરી નથી.`,
    },
    ta: {
      badge: `கம்யூனிட்டி ஹெல்ப்`,
      emoji: `🤝`,
      headline: `பிளம்பர் தேவையா? உங்கள் அண்டை வீட்டாரிடம் கேளுங்கள்,`,
      headlineAccent: `ஏதோ ஒரு ரேண்டம் ஆப் அல்ல.`,
      subline: `உங்கள் சொசைட்டிக்குள் நம்பிக்கை அடிப்படையிலான சேவை மார்க்கெட்பிளேஸ். வேலைக்காரி, பிளம்பர், டியூட்டர் மற்றும் பலருக்கான பரிந்துரைகளை நீங்கள் உண்மையில் அறிந்த அண்டை வீட்டாரிடமிருந்து பகிரவும், கண்டறியவும்.`,
      problems: [
            {
            icon: `🤔`,
            title: `சொசைட்டியில் நம்பகமான வெண்டர் நெட்வொர்க் இல்லை`,
            desc: `ஒவ்வொரு புதிய குடியிருப்பாளரும் WhatsApp குழுவில் அதே கேள்வியை கேட்கிறார்கள்: 'நல்ல பிளம்பரை யாராவது பரிந்துரைக்க முடியுமா?' பதில்கள் புதைந்து தொலைந்துவிடும்.`
          },
            {
            icon: `📋`,
            title: `கடந்த பரிந்துரைகளின் பதிவு இல்லை`,
            desc: `2019இல் கிடைத்த ஒரு சிறந்த பரிந்துரை இப்போது இல்லை. WhatsApp ஸ்க்ரோல் ஒரு எல்லை வரை மட்டுமே செல்லும். புதிய குடியிருப்பாளர்கள் எப்போதும் மீண்டும் ஆரம்பிக்கிறார்கள்.`
          },
            {
            icon: `⚠️`,
            title: `ஆப்களில் இருந்து தெரியாத வெண்டர்கள் ஆபத்தானவை`,
            desc: `ஹைப்பர்லோக்கல் ஆப்பில் இருந்து ஒரு அந்நியரை முன்பதிவு செய்வது ஒரு சூதாட்டம். பல ஆண்டுகளாக பயன்படுத்திய ஒருவரை உங்கள் அண்டை வீட்டார் பரிந்துரைப்பது தங்கம் போன்றது.`
          },
          ],
      flows: [
            {
            icon: `✍️`,
            label: `குடியிருப்பாளர் ஒரு தேவை அல்லது சலுகையை பதிவிடுகிறார்`,
            detail: `தேவையானதை பதிவிடுகிறார் (உதா. 'நல்ல எலக்ட்ரீஷியன் தேடுகிறேன்') அல்லது சலுகை/பரிந்துரையை பதிவிடுகிறார் (உதா. 'ராஜன் பிளம்பர் — மிகவும் நம்பகமானவர், 9876543210').`
          },
            {
            icon: `📂`,
            label: `பதிவு தானாக வகைப்படுத்தப்படுகிறது`,
            detail: `வகைகள்: வீட்டு உதவி, பிளம்பிங், எலக்ட்ரிக்கல், டியூஷன், போக்குவரத்து, இதர. உங்களுக்கு தேவையானதை எளிதாக கண்டறியலாம்.`
          },
            {
            icon: `👍`,
            label: `அண்டை வீட்டார் நம்பகமான தொடர்புகளுக்கு வோட் அளிக்கிறார்கள்`,
            detail: `அதே வெண்டரை பயன்படுத்திய மற்ற குடியிருப்பாளர்கள் பரிந்துரைக்கு வோட் அளிக்கலாம். சமூகத்திற்குள் சமூக நம்பகத்தன்மை.`
          },
            {
            icon: `💬`,
            label: `ஆப்பிற்குள் அரட்டை அல்லது தொடர்பு பகிர்வு`,
            detail: `குடியிருப்பாளர்கள் ஆப் மூலமாகவோ அல்லது போன் மூலமாகவோ பதிவிட்டவரையோ பரிந்துரைக்கப்பட்ட வெண்டரையோ நேரடியாக தொடர்பு கொள்ளலாம்.`
          },
            {
            icon: `📊`,
            label: `மிகவும் உதவிகரமான வெண்டர்கள் மேலே தோன்றுகிறார்கள்`,
            detail: `அதிக வோட் பெற்ற பரிந்துரைகள் காணக்கூடியதாகவே இருக்கும். தரம் குறைந்த அல்லது காலாவதியான பதிவுகள் காலப்போக்கில் மறையும்.`
          },
          ],
      adminView: {
            title: `⚙️ அட்மின் / கமிட்டி காட்சி`,
            points: [
            `பதிவுகளை மிதப்படுத்தவும் — பொருத்தமற்ற உள்ளடக்கத்தை ஒப்புதல், நிராகரிப்பு, அல்லது அகற்றவும்`,
            `சரிபார்க்கப்பட்ட சொசைட்டி-தழுவிய வெண்டர் பரிந்துரைகளை பின் செய்யவும் (உதா. அதிகாரப்பூர்வ எலக்ட்ரீஷியன்)`,
            `பதிவிடும் அனுமதிகளை அமைக்கவும் (அனைத்து குடியிருப்பாளர்கள் அல்லது சரிபார்க்கப்பட்டவர்கள் மட்டும்)`,
            `பதிவு செயல்பாடு மற்றும் ஈடுபாடு அறிக்கைகளை காணவும்`,
            `அதிகாரப்பூர்வ சொசைட்டி வெண்டர் டைரக்டரியை உருவாக்கவும் (Pro திட்டம்)`,
            `பொருத்தமற்ற வெண்டர் தொடர்பு விவரங்கள் பற்றிய புகார்களை பெறவும்`,
          ]
          },
      residentView: {
            title: `👤 குடியிருப்பாளர் காட்சி`,
            points: [
            `பதிவிடாமலேயே வகை வாரியாக உதவி பட்டியல்களை பார்க்கவும்`,
            `30 வினாடிகளில் ஒரு தேவையை பதிவிடவும் அல்லது பரிந்துரையை பகிரவும்`,
            `நீங்கள் தனிப்பட்ட முறையில் பயன்படுத்தி நம்பிய வெண்டர்களுக்கு வோட் அளிக்கவும்`,
            `நினைவில் வைக்க விரும்பும் வெண்டர்களின் தொடர்புகளை சேமிக்கவும்`,
            `வெண்டர்களை அல்லது பரிந்துரைத்த குடியிருப்பாளரை நேரடியாக தொடர்பு கொள்ளவும்`,
            `உங்கள் தேவை நிறைவேறியதும் கோரிக்கையை 'நிறைவேற்றப்பட்டது' என அமைக்கவும்`,
          ]
          },
      features: [
            {
            icon: `⭐`,
            title: `கம்யூனிட்டி வோட்டுகள்`,
            desc: `குடியிருப்பாளர்கள் நம்பகமான பரிந்துரைகளுக்கு வோட் அளிக்கிறார்கள். மிகவும் நம்பகமான வெண்டர்கள் இயல்பாகவே மேலே வருகிறார்கள்.`
          },
            {
            icon: `📂`,
            title: `ஸ்மார்ட் வகைகள்`,
            desc: `வீட்டு உதவி, பிளம்பிங், எலக்ட்ரிக்கல், ஏசி ரிப்பேர், டியூஷன், கார் வாஷ், போக்குவரத்து, மற்றும் பல.`
          },
            {
            icon: `🛡️`,
            title: `சொசைட்டி-மட்டும் காட்சி`,
            desc: `அனைத்து பதிவுகளும் உங்கள் சொசைட்டியின் சரிபார்க்கப்பட்ட குடியிருப்பாளர்களுக்கு மட்டுமே தெரியும். பொது பட்டியல் இல்லை.`
          },
            {
            icon: `📌`,
            title: `அட்மின்-பின் செய்த வெண்டர்கள்`,
            desc: `அட்மின்கள் ஒவ்வொரு வகையின் மேலேயும் அதிகாரப்பூர்வ சொசைட்டி வெண்டர் பரிந்துரைகளை பின் செய்யலாம்.`
          },
            {
            icon: `🔍`,
            title: `கம்யூனிட்டிக்குள் தேடல்`,
            desc: `சேவை வகை அல்லது வெண்டர் பெயரால் தேடவும். எந்த பரிந்துரையையும் வினாடிகளில் கண்டறியவும்.`
          },
            {
            icon: `✅`,
            title: `கோரிக்கை நிறைவேற்ற கண்காணிப்பு`,
            desc: `ஒரு தேவையை பதிவிடவும்; தீர்வானதும் நிறைவேற்றப்பட்டதாக குறிக்கவும். போர்டை சுத்தமாகவும் புதுப்பித்ததாகவும் வைத்திருக்கிறது.`
          },
          ],
      faqs: [
            {
            q: `சொசைட்டியில் யார் வேண்டுமானாலும் ஒரு பரிந்துரையை பதிவிடலாமா?`,
            a: `அனைத்து சரிபார்க்கப்பட்ட குடியிருப்பாளர்களும் பதிவிடலாம். ஒரு தேர்ந்தெடுக்கப்பட்ட டைரக்டரியை விரும்பினால் அட்மின்கள் பதிவிடுவதை 'அட்மின்-ஒப்புதல்' என கட்டுப்படுத்தலாம். வோட் அளிப்பது எப்போதும் அனைத்து குடியிருப்பாளர்களுக்கும் திறந்திருக்கும்.`
          },
            {
            q: `இது ஒரு பொது மார்க்கெட்பிளேஸ் போலவா?`,
            a: `இல்லை. கம்யூனிட்டி ஹெல்ப் முற்றிலும் உங்கள் சொசைட்டிக்கு மட்டுமே பிரைவேட். சொசைட்டியின் ஆப் உள்ள சரிபார்க்கப்பட்ட குடியிருப்பாளர்கள் மட்டுமே பதிவுகளை பார்க்க முடியும். வெளிப்புற அணுகல் இல்லை.`
          },
            {
            q: `வெண்டர்கள் ஃபீச்சர் செய்யப்பட பணம் செலுத்த முடியுமா?`,
            a: `இல்லை. SocietyApp ஒரு விளம்பர தளம் அல்ல. பரிந்துரைகள் குடியிருப்பாளர்களிடமிருந்து இயல்பாகவே வருகின்றன. அட்மின்கள் அதிகாரப்பூர்வ சொசைட்டி வெண்டர்களை கட்டணமின்றி பின் செய்யலாம்.`
          },
            {
            q: `கம்யூனிட்டி ஹெல்ப் ஃப்ரீ திட்டத்தில் கிடைக்குமா?`,
            a: `ஆம். 50 யூனிட் வரை உள்ள சொசைட்டீஸ் உட்பட அனைத்திற்கும் கம்யூனிட்டி ஹெல்ப் ஃப்ரீ திட்டத்தில் சேர்க்கப்பட்டுள்ளது.`
          },
          ],
      related: [
            {
            icon: `📢`,
            title: `நோட்டீஸ் போர்டு`,
            href: `/features/notices`,
            desc: `புஷ் டெலிவரியுடன் சொசைட்டி-தழுவிய நோட்டீஸ்களை பதிவிடுங்கள்.`
          },
            {
            icon: `🎉`,
            title: `நிகழ்வுகள் & வாக்கெடுப்புகள்`,
            href: `/features/events`,
            desc: `RSVP உடன் சொசைட்டி நிகழ்வுகளை திட்டமிட்டு நிர்வகிக்கவும்.`
          },
            {
            icon: `🛠️`,
            title: `பிரச்சினைகள் & புகார்கள்`,
            href: `/features/issues`,
            desc: `புகாரிலிருந்து தீர்வு வரை புகார்களை கண்காணிக்கவும்.`
          },
          ],
      ctaHeadline: `வெறும் கட்டிடம் அல்ல, நம்பகமான கம்யூனிட்டியை உருவாக்குங்கள்.`,
      ctaSub: `கம்யூனிட்டி ஹெல்ப் ஃப்ரீ திட்டத்தில் சேர்க்கப்பட்டுள்ளது. கிரெடிட் கார்டு தேவையில்லை.`,
    },
  },
  "events": {
    en: {
      badge: `Events & Polls`,
      emoji: `🎉`,
      headline: `Society events with RSVP.`,
      headlineAccent: `Polls residents actually answer.`,
      subline: `From Diwali celebrations to maintenance levy votes — plan events with RSVP and share memories in a photo gallery. Run polls that are transparent, anonymous, and actually work.`,
      problems: [
            {
            icon: `📅`,
            title: `Events announced, attendance unknown`,
            desc: `You post on WhatsApp but have no idea how many people are coming. Catering for 50, but 120 show up (or 15).`
          },
            {
            icon: `🗳️`,
            title: `Polls in WhatsApp groups are unreliable`,
            desc: `Members vote multiple times, votes are lost, and the admin isn't even sure if the poll result is valid.`
          },
            {
            icon: `📷`,
            title: `Event photos scattered across phones`,
            desc: `Society Diwali photos are on three different phones in four different WhatsApp albums. No central gallery.`
          },
          ],
      flows: [
            {
            icon: `📅`,
            label: `Admin creates event`,
            detail: `Enter event name, date, time, location, and description. Optionally set max RSVP count.`
          },
            {
            icon: `🔔`,
            label: `Residents notified`,
            detail: `All residents receive a push notification with event details and RSVP buttons.`
          },
            {
            icon: `👍`,
            label: `Residents RSVP`,
            detail: `One tap to RSVP as Attending or Not Attending. Admin sees live headcount.`
          },
            {
            icon: `📸`,
            label: `Photos uploaded after event`,
            detail: `Admin and approved residents can upload event photos to the gallery. All residents can view and download.`
          },
            {
            icon: `📤`,
            label: `Calendar export`,
            detail: `Residents can add any event to their Google Calendar or Apple Calendar with one tap.`
          },
          ],
      adminView: {
            title: `⚙️ Admin / Committee View`,
            points: [
            `Create events with all details including location map link`,
            `See real-time RSVP count and attendee list`,
            `Set maximum RSVP capacity with auto-waitlist`,
            `Upload event photos to community gallery`,
            `Create anonymous or named polls with multiple choice options`,
            `See poll results live as votes come in`,
          ]
          },
      residentView: {
            title: `👤 Resident View`,
            points: [
            `See all upcoming events in a calendar view`,
            `RSVP in one tap from push notification`,
            `Add events to personal calendar (Google / Apple)`,
            `View event photo gallery and download photos`,
            `Vote in society polls — anonymous or named`,
            `See poll results after voting or after closing`,
          ]
          },
      features: [
            {
            icon: `📋`,
            title: `RSVP management`,
            desc: `Live headcount, attendee list export, and optional capacity limit with waitlist.`
          },
            {
            icon: `🗳️`,
            title: `Anonymous polls`,
            desc: `Votes are counted without revealing who voted for what. Perfect for sensitive society decisions.`
          },
            {
            icon: `📸`,
            title: `Event photo gallery`,
            desc: `Centralised gallery for each event. Residents can upload, view, and download all photos.`
          },
            {
            icon: `📅`,
            title: `Calendar export`,
            desc: `One tap to add any event to Google Calendar, Apple Calendar, or Outlook.`
          },
            {
            icon: `📊`,
            title: `Poll result charts`,
            desc: `Visual pie and bar charts showing voting results in real time.`
          },
            {
            icon: `🔔`,
            title: `Event reminders`,
            desc: `Automatic push reminder 24 hours and 1 hour before each event.`
          },
          ],
      faqs: [
            {
            q: `Can I restrict event RSVP to specific blocks or flats?`,
            a: `Yes. On the Pro plan, you can create events visible only to specific blocks (e.g., Block A Diwali party). Standard plan events are society-wide.`
          },
            {
            q: `Are poll results anonymous?`,
            a: `You choose when creating the poll. Anonymous polls show only vote counts. Named polls show who voted for what, useful for AGM voting records.`
          },
            {
            q: `Can residents upload their own photos to the event gallery?`,
            a: `Admins can enable or disable resident photo uploads per event. By default, only admins upload photos, which you can then make downloadable by residents.`
          },
            {
            q: `Can I export the attendee list for an event?`,
            a: `Yes. Export the RSVP list as CSV with names, flat numbers, and RSVP status. Useful for catering planning and AGM attendance records.`
          },
          ],
      related: [
            {
            icon: `📢`,
            title: `Notice Board`,
            href: `/features/notices`,
            desc: `Post tagged notices with push delivery to all residents.`
          },
            {
            icon: `🏊`,
            title: `Amenity Booking`,
            href: `/features/amenities`,
            desc: `Clubhouse and gym booking with slot selection.`
          },
            {
            icon: `🤝`,
            title: `Community Help`,
            href: `/features/community-help`,
            desc: `Neighbour-to-neighbour service marketplace.`
          },
          ],
      ctaHeadline: `Plan your next society event the smart way.`,
      ctaSub: `Events & Polls is available from the Standard plan. Free trial available.`,
    },
    hi: {
      badge: `इवेंट्स और पोल्स`,
      emoji: `🎉`,
      headline: `RSVP के साथ सोसायटी इवेंट्स।`,
      headlineAccent: `पोल्स जिनका रेजिडेंट्स वाकई जवाब देते हैं।`,
      subline: `दिवाली समारोह से लेकर मेंटेनेंस लेवी वोट तक — RSVP के साथ इवेंट्स प्लान करें और फोटो गैलरी में यादें साझा करें। पारदर्शी, गुमनाम, और वाकई काम करने वाले पोल्स चलाएं।`,
      problems: [
            {
            icon: `📅`,
            title: `इवेंट्स की घोषणा, उपस्थिति अज्ञात`,
            desc: `आप WhatsApp पर पोस्ट करते हैं लेकिन आपको नहीं पता कितने लोग आ रहे हैं। 50 के लिए खाना मंगाया, लेकिन 120 (या 15) आ गए।`
          },
            {
            icon: `🗳️`,
            title: `WhatsApp ग्रुप में पोल्स अविश्वसनीय हैं`,
            desc: `सदस्य कई बार वोट करते हैं, वोट्स खो जाते हैं, और एडमिन को भी यकीन नहीं कि पोल का नतीजा सही है।`
          },
            {
            icon: `📷`,
            title: `इवेंट फोटोज़ फोन्स में बिखरे हुए`,
            desc: `सोसायटी की दिवाली की फोटोज़ चार अलग-अलग WhatsApp एल्बम में तीन अलग-अलग फोन्स में हैं। कोई सेंट्रल गैलरी नहीं।`
          },
          ],
      flows: [
            {
            icon: `📅`,
            label: `एडमिन इवेंट बनाता है`,
            detail: `इवेंट का नाम, तारीख, समय, स्थान, और विवरण डालें। वैकल्पिक रूप से अधिकतम RSVP संख्या सेट करें।`
          },
            {
            icon: `🔔`,
            label: `रेजिडेंट्स को सूचित किया जाता है`,
            detail: `सभी रेजिडेंट्स को इवेंट डिटेल्स और RSVP बटन के साथ पुश नोटिफिकेशन मिलता है।`
          },
            {
            icon: `👍`,
            label: `रेजिडेंट्स RSVP करते हैं`,
            detail: `उपस्थित या अनुपस्थित के रूप में RSVP करने के लिए एक टैप। एडमिन लाइव हेडकाउंट देखता है।`
          },
            {
            icon: `📸`,
            label: `इवेंट के बाद फोटोज़ अपलोड`,
            detail: `एडमिन और अप्रूव्ड रेजिडेंट्स गैलरी में इवेंट फोटोज़ अपलोड कर सकते हैं। सभी रेजिडेंट्स देख और डाउनलोड कर सकते हैं।`
          },
            {
            icon: `📤`,
            label: `कैलेंडर एक्सपोर्ट`,
            detail: `रेजिडेंट्स एक टैप में किसी भी इवेंट को Google कैलेंडर या Apple कैलेंडर में जोड़ सकते हैं।`
          },
          ],
      adminView: {
            title: `⚙️ एडमिन / कमेटी व्यू`,
            points: [
            `लोकेशन मैप लिंक सहित सभी विवरणों के साथ इवेंट्स बनाएं`,
            `रियल-टाइम RSVP संख्या और अटेंडी लिस्ट देखें`,
            `ऑटो-वेटलिस्ट के साथ अधिकतम RSVP क्षमता सेट करें`,
            `कम्युनिटी गैलरी में इवेंट फोटोज़ अपलोड करें`,
            `मल्टीपल चॉइस विकल्पों के साथ गुमनाम या नामांकित पोल्स बनाएं`,
            `वोट आने पर लाइव पोल नतीजे देखें`,
          ]
          },
      residentView: {
            title: `👤 रेजिडेंट व्यू`,
            points: [
            `कैलेंडर व्यू में सभी आगामी इवेंट्स देखें`,
            `पुश नोटिफिकेशन से एक टैप में RSVP करें`,
            `इवेंट्स को पर्सनल कैलेंडर में जोड़ें (Google / Apple)`,
            `इवेंट फोटो गैलरी देखें और फोटोज़ डाउनलोड करें`,
            `सोसायटी पोल्स में वोट करें — गुमनाम या नामांकित`,
            `वोटिंग के बाद या बंद होने के बाद पोल नतीजे देखें`,
          ]
          },
      features: [
            {
            icon: `📋`,
            title: `RSVP मैनेजमेंट`,
            desc: `लाइव हेडकाउंट, अटेंडी लिस्ट एक्सपोर्ट, और वैकल्पिक क्षमता सीमा के साथ वेटलिस्ट।`
          },
            {
            icon: `🗳️`,
            title: `गुमनाम पोल्स`,
            desc: `किसने किसको वोट दिया यह बताए बिना वोट गिने जाते हैं। संवेदनशील सोसायटी निर्णयों के लिए बिल्कुल सही।`
          },
            {
            icon: `📸`,
            title: `इवेंट फोटो गैलरी`,
            desc: `हर इवेंट के लिए केंद्रीकृत गैलरी। रेजिडेंट्स सभी फोटोज़ अपलोड, देख और डाउनलोड कर सकते हैं।`
          },
            {
            icon: `📅`,
            title: `कैलेंडर एक्सपोर्ट`,
            desc: `किसी भी इवेंट को Google कैलेंडर, Apple कैलेंडर, या Outlook में जोड़ने के लिए एक टैप।`
          },
            {
            icon: `📊`,
            title: `पोल नतीजे चार्ट्स`,
            desc: `रियल टाइम में वोटिंग नतीजे दिखाने वाले विज़ुअल पाई और बार चार्ट्स।`
          },
            {
            icon: `🔔`,
            title: `इवेंट रिमाइंडर`,
            desc: `हर इवेंट से 24 घंटे और 1 घंटा पहले ऑटोमेटिक पुश रिमाइंडर।`
          },
          ],
      faqs: [
            {
            q: `क्या मैं इवेंट RSVP को खास ब्लॉक या फ्लैट्स तक सीमित कर सकता हूं?`,
            a: `हां। Pro प्लान पर, आप ऐसे इवेंट्स बना सकते हैं जो सिर्फ खास ब्लॉक्स को दिखें (जैसे ब्लॉक A की दिवाली पार्टी)। स्टैंडर्ड प्लान इवेंट्स पूरी सोसायटी के लिए होते हैं।`
          },
            {
            q: `क्या पोल नतीजे गुमनाम होते हैं?`,
            a: `पोल बनाते समय आप चुनते हैं। गुमनाम पोल्स सिर्फ वोट काउंट दिखाते हैं। नामांकित पोल्स दिखाते हैं किसने किसको वोट दिया, जो AGM वोटिंग रिकॉर्ड्स के लिए उपयोगी है।`
          },
            {
            q: `क्या रेजिडेंट्स इवेंट गैलरी में अपनी खुद की फोटोज़ अपलोड कर सकते हैं?`,
            a: `एडमिन प्रति इवेंट रेजिडेंट फोटो अपलोड को सक्षम या अक्षम कर सकते हैं। डिफॉल्ट रूप से, केवल एडमिन फोटोज़ अपलोड करते हैं, जिन्हें फिर आप रेजिडेंट्स के लिए डाउनलोड करने योग्य बना सकते हैं।`
          },
            {
            q: `क्या मैं किसी इवेंट के लिए अटेंडी लिस्ट एक्सपोर्ट कर सकता हूं?`,
            a: `हां। नामों, फ्लैट नंबरों, और RSVP स्टेटस के साथ RSVP लिस्ट को CSV के रूप में एक्सपोर्ट करें। कैटरिंग प्लानिंग और AGM उपस्थिति रिकॉर्ड्स के लिए उपयोगी।`
          },
          ],
      related: [
            {
            icon: `📢`,
            title: `नोटिस बोर्ड`,
            href: `/features/notices`,
            desc: `सभी रेजिडेंट्स को पुश डिलीवरी के साथ टैग किए गए नोटिस पोस्ट करें।`
          },
            {
            icon: `🏊`,
            title: `एमेनिटी बुकिंग`,
            href: `/features/amenities`,
            desc: `स्लॉट सेलेक्शन के साथ क्लबहाउस और जिम बुकिंग।`
          },
            {
            icon: `🤝`,
            title: `कम्युनिटी हेल्प`,
            href: `/features/community-help`,
            desc: `पड़ोसी-से-पड़ोसी सर्विस मार्केटप्लेस।`
          },
          ],
      ctaHeadline: `अपना अगला सोसायटी इवेंट स्मार्ट तरीके से प्लान करें।`,
      ctaSub: `इवेंट्स और पोल्स स्टैंडर्ड प्लान से उपलब्ध है। फ्री ट्रायल उपलब्ध है।`,
    },
    gu: {
      badge: `ઈવેન્ટ્સ અને પોલ્સ`,
      emoji: `🎉`,
      headline: `RSVP સાથે સોસાયટી ઈવેન્ટ્સ.`,
      headlineAccent: `પોલ્સ જેનો રહેવાસીઓ ખરેખર જવાબ આપે છે.`,
      subline: `દિવાળી ઉજવણીથી લઈને મેઈન્ટેનન્સ લેવી મત સુધી — RSVP સાથે ઈવેન્ટ્સ પ્લાન કરો અને ફોટો ગેલેરીમાં યાદો શેર કરો. પારદર્શક, અનામી, અને ખરેખર કામ કરતા પોલ્સ ચલાવો.`,
      problems: [
            {
            icon: `📅`,
            title: `ઈવેન્ટ્સની જાહેરાત, હાજરી અજાણ`,
            desc: `તમે WhatsApp પર પોસ્ટ કરો છો પણ ખબર નથી કેટલા લોકો આવશે. 50 માટે જમવાનું મંગાવ્યું, પણ 120 (અથવા 15) આવ્યા.`
          },
            {
            icon: `🗳️`,
            title: `WhatsApp ગ્રુપમાં પોલ્સ અવિશ્વસનીય છે`,
            desc: `સભ્યો ઘણી વખત મત આપે છે, મત ખોવાય છે, અને એડમિનને પણ ખાતરી નથી પોલનું પરિણામ સાચું છે કે નહીં.`
          },
            {
            icon: `📷`,
            title: `ઈવેન્ટ ફોટા ફોન્સમાં વેરવિખેર`,
            desc: `સોસાયટીની દિવાળીના ફોટા ચાર અલગ WhatsApp આલબમમાં ત્રણ અલગ ફોન્સમાં છે. કોઈ સેન્ટ્રલ ગેલેરી નહીં.`
          },
          ],
      flows: [
            {
            icon: `📅`,
            label: `એડમિન ઈવેન્ટ બનાવે છે`,
            detail: `ઈવેન્ટનું નામ, તારીખ, સમય, સ્થળ, અને વર્ણન દાખલ કરો. વૈકલ્પિક રીતે મહત્તમ RSVP સંખ્યા સેટ કરો.`
          },
            {
            icon: `🔔`,
            label: `રહેવાસીઓને જાણ થાય છે`,
            detail: `બધા રહેવાસીઓને ઈવેન્ટ વિગતો અને RSVP બટન સાથે પુશ નોટિફિકેશન મળે છે.`
          },
            {
            icon: `👍`,
            label: `રહેવાસીઓ RSVP કરે છે`,
            detail: `હાજર અથવા ગેરહાજર તરીકે RSVP કરવા એક ટેપ. એડમિન લાઈવ હેડકાઉન્ટ જુએ છે.`
          },
            {
            icon: `📸`,
            label: `ઈવેન્ટ પછી ફોટા અપલોડ`,
            detail: `એડમિન અને અપ્રૂવ્ડ રહેવાસીઓ ગેલેરીમાં ઈવેન્ટ ફોટા અપલોડ કરી શકે છે. બધા રહેવાસીઓ જોઈ અને ડાઉનલોડ કરી શકે છે.`
          },
            {
            icon: `📤`,
            label: `કેલેન્ડર એક્સપોર્ટ`,
            detail: `રહેવાસીઓ એક ટેપમાં કોઈપણ ઈવેન્ટને Google કેલેન્ડર અથવા Apple કેલેન્ડરમાં ઉમેરી શકે છે.`
          },
          ],
      adminView: {
            title: `⚙️ એડમિન / કમિટી વ્યૂ`,
            points: [
            `લોકેશન મેપ લિંક સહિત બધી વિગતો સાથે ઈવેન્ટ્સ બનાવો`,
            `રિયલ-ટાઈમ RSVP સંખ્યા અને હાજરી લિસ્ટ જુઓ`,
            `ઓટો-વેઈટલિસ્ટ સાથે મહત્તમ RSVP ક્ષમતા સેટ કરો`,
            `કમ્યુનિટી ગેલેરીમાં ઈવેન્ટ ફોટા અપલોડ કરો`,
            `મલ્ટિપલ ચોઈસ વિકલ્પો સાથે અનામી અથવા નામાંકિત પોલ્સ બનાવો`,
            `મત આવે ત્યારે લાઈવ પોલ પરિણામો જુઓ`,
          ]
          },
      residentView: {
            title: `👤 રહેવાસી વ્યૂ`,
            points: [
            `કેલેન્ડર વ્યૂમાં બધી આવનારી ઈવેન્ટ્સ જુઓ`,
            `પુશ નોટિફિકેશનથી એક ટેપમાં RSVP કરો`,
            `ઈવેન્ટ્સને પર્સનલ કેલેન્ડરમાં ઉમેરો (Google / Apple)`,
            `ઈવેન્ટ ફોટો ગેલેરી જુઓ અને ફોટા ડાઉનલોડ કરો`,
            `સોસાયટી પોલ્સમાં મત આપો — અનામી અથવા નામાંકિત`,
            `મત આપ્યા પછી અથવા બંધ થયા પછી પોલ પરિણામો જુઓ`,
          ]
          },
      features: [
            {
            icon: `📋`,
            title: `RSVP મેનેજમેન્ટ`,
            desc: `લાઈવ હેડકાઉન્ટ, હાજરી લિસ્ટ એક્સપોર્ટ, અને વૈકલ્પિક ક્ષમતા મર્યાદા સાથે વેઈટલિસ્ટ.`
          },
            {
            icon: `🗳️`,
            title: `અનામી પોલ્સ`,
            desc: `કોણે કોને મત આપ્યો તે જાહેર કર્યા વગર મત ગણાય છે. સંવેદનશીલ સોસાયટી નિર્ણયો માટે યોગ્ય.`
          },
            {
            icon: `📸`,
            title: `ઈવેન્ટ ફોટો ગેલેરી`,
            desc: `દરેક ઈવેન્ટ માટે કેન્દ્રિત ગેલેરી. રહેવાસીઓ બધા ફોટા અપલોડ, જોઈ અને ડાઉનલોડ કરી શકે છે.`
          },
            {
            icon: `📅`,
            title: `કેલેન્ડર એક્સપોર્ટ`,
            desc: `કોઈપણ ઈવેન્ટને Google કેલેન્ડર, Apple કેલેન્ડર, અથવા Outlookમાં ઉમેરવા એક ટેપ.`
          },
            {
            icon: `📊`,
            title: `પોલ પરિણામ ચાર્ટ્સ`,
            desc: `રિયલ ટાઈમમાં મતદાન પરિણામો બતાવતા વિઝ્યુઅલ પાઈ અને બાર ચાર્ટ્સ.`
          },
            {
            icon: `🔔`,
            title: `ઈવેન્ટ રિમાઈન્ડર`,
            desc: `દરેક ઈવેન્ટના 24 કલાક અને 1 કલાક પહેલા ઓટોમેટિક પુશ રિમાઈન્ડર.`
          },
          ],
      faqs: [
            {
            q: `શું હું ઈવેન્ટ RSVP ને ચોક્કસ બ્લોક અથવા ફ્લેટ્સ સુધી મર્યાદિત કરી શકું?`,
            a: `હા. Pro પ્લાન પર, તમે એવા ઈવેન્ટ્સ બનાવી શકો છો જે ફક્ત ચોક્કસ બ્લોક્સને દેખાય (જેમ કે બ્લોક A ની દિવાળી પાર્ટી). સ્ટાન્ડર્ડ પ્લાન ઈવેન્ટ્સ આખી સોસાયટી માટે હોય છે.`
          },
            {
            q: `શું પોલ પરિણામો અનામી હોય છે?`,
            a: `પોલ બનાવતી વખતે તમે પસંદ કરો છો. અનામી પોલ્સ ફક્ત મત ગણતરી બતાવે છે. નામાંકિત પોલ્સ બતાવે છે કોણે કોને મત આપ્યો, જે AGM મતદાન રેકોર્ડ્સ માટે ઉપયોગી છે.`
          },
            {
            q: `શું રહેવાસીઓ ઈવેન્ટ ગેલેરીમાં પોતાના ફોટા અપલોડ કરી શકે?`,
            a: `એડમિન દરેક ઈવેન્ટ માટે રહેવાસી ફોટો અપલોડ સક્ષમ અથવા અક્ષમ કરી શકે છે. ડિફોલ્ટ રીતે, ફક્ત એડમિન ફોટા અપલોડ કરે છે, જેને પછી તમે રહેવાસીઓ માટે ડાઉનલોડ કરી શકાય તેવા બનાવી શકો છો.`
          },
            {
            q: `શું હું કોઈ ઈવેન્ટ માટે હાજરી લિસ્ટ એક્સપોર્ટ કરી શકું?`,
            a: `હા. નામો, ફ્લેટ નંબરો, અને RSVP સ્ટેટસ સાથે RSVP લિસ્ટને CSV તરીકે એક્સપોર્ટ કરો. કેટરિંગ પ્લાનિંગ અને AGM હાજરી રેકોર્ડ્સ માટે ઉપયોગી.`
          },
          ],
      related: [
            {
            icon: `📢`,
            title: `નોટિસ બોર્ડ`,
            href: `/features/notices`,
            desc: `બધા રહેવાસીઓને પુશ ડિલિવરી સાથે ટેગ કરેલી નોટિસ પોસ્ટ કરો.`
          },
            {
            icon: `🏊`,
            title: `એમેનિટી બુકિંગ`,
            href: `/features/amenities`,
            desc: `સ્લોટ સિલેક્શન સાથે ક્લબહાઉસ અને જિમ બુકિંગ.`
          },
            {
            icon: `🤝`,
            title: `કમ્યુનિટી હેલ્પ`,
            href: `/features/community-help`,
            desc: `પડોશી-થી-પડોશી સર્વિસ માર્કેટપ્લેસ.`
          },
          ],
      ctaHeadline: `તમારી આગામી સોસાયટી ઈવેન્ટ સ્માર્ટ રીતે પ્લાન કરો.`,
      ctaSub: `ઈવેન્ટ્સ અને પોલ્સ સ્ટાન્ડર્ડ પ્લાનથી ઉપલબ્ધ છે. ફ્રી ટ્રાયલ ઉપલબ્ધ છે.`,
    },
    ta: {
      badge: `நிகழ்வுகள் & வாக்கெடுப்புகள்`,
      emoji: `🎉`,
      headline: `RSVP உடன் சொசைட்டி நிகழ்வுகள்.`,
      headlineAccent: `குடியிருப்பாளர்கள் உண்மையிலேயே பதிலளிக்கும் வாக்கெடுப்புகள்.`,
      subline: `தீபாவளி கொண்டாட்டங்கள் முதல் பராமரிப்பு லெவி வாக்குகள் வரை — RSVP உடன் நிகழ்வுகளை திட்டமிடுங்கள் மற்றும் புகைப்பட கேலரியில் நினைவுகளை பகிருங்கள். வெளிப்படையான, அநாமதேய, மற்றும் உண்மையாக வேலை செய்யும் வாக்கெடுப்புகளை நடத்துங்கள்.`,
      problems: [
            {
            icon: `📅`,
            title: `நிகழ்வுகள் அறிவிக்கப்படுகின்றன, வருகை தெரியவில்லை`,
            desc: `நீங்கள் WhatsApp இல் பதிவிடுகிறீர்கள் ஆனால் எத்தனை பேர் வருகிறார்கள் என தெரியாது. 50 பேருக்கு கேட்டரிங் வைத்திருப்பீர்கள், ஆனால் 120 பேர் வருவார்கள் (அல்லது 15 பேர்).`
          },
            {
            icon: `🗳️`,
            title: `WhatsApp குழுக்களில் வாக்கெடுப்புகள் நம்பகமானவை அல்ல`,
            desc: `உறுப்பினர்கள் பல முறை வாக்களிக்கிறார்கள், வாக்குகள் தொலைந்துவிடுகின்றன, மற்றும் வாக்கெடுப்பு முடிவு செல்லுபடியாகுமா என்று அட்மினுக்கே உறுதியில்லை.`
          },
            {
            icon: `📷`,
            title: `நிகழ்வு புகைப்படங்கள் பல ஃபோன்களில் சிதறியுள்ளன`,
            desc: `சொசைட்டி தீபாவளி புகைப்படங்கள் மூன்று வெவ்வேறு ஃபோன்களில் நான்கு வெவ்வேறு WhatsApp ஆல்பங்களில் உள்ளன. மையப்படுத்தப்பட்ட கேலரி இல்லை.`
          },
          ],
      flows: [
            {
            icon: `📅`,
            label: `அட்மின் நிகழ்வை உருவாக்குகிறார்`,
            detail: `நிகழ்வின் பெயர், தேதி, நேரம், இடம், மற்றும் விவரணையை உள்ளிடவும். விருப்பப்படி அதிகபட்ச RSVP எண்ணிக்கையை அமைக்கலாம்.`
          },
            {
            icon: `🔔`,
            label: `குடியிருப்பாளர்களுக்கு தெரிவிக்கப்படுகிறது`,
            detail: `அனைத்து குடியிருப்பாளர்களும் நிகழ்வு விவரங்கள் மற்றும் RSVP பட்டன்களுடன் புஷ் அறிவிப்பை பெறுகிறார்கள்.`
          },
            {
            icon: `👍`,
            label: `குடியிருப்பாளர்கள் RSVP செய்கிறார்கள்`,
            detail: `வருகிறேன் அல்லது வர மாட்டேன் என RSVP செய்ய ஒரே தட்டு. அட்மின் நேரலை தலைவரிசை எண்ணிக்கையை பார்க்கிறார்.`
          },
            {
            icon: `📸`,
            label: `நிகழ்விற்குப் பின் புகைப்படங்கள் பதிவேற்றப்படுகின்றன`,
            detail: `அட்மின் மற்றும் அனுமதிக்கப்பட்ட குடியிருப்பாளர்கள் நிகழ்வு புகைப்படங்களை கேலரியில் பதிவேற்றலாம். அனைத்து குடியிருப்பாளர்களும் பார்த்து பதிவிறக்கலாம்.`
          },
            {
            icon: `📤`,
            label: `காலெண்டர் ஏற்றுமதி`,
            detail: `குடியிருப்பாளர்கள் எந்த நிகழ்வையும் ஒரே தட்டில் தங்கள் Google காலெண்டர் அல்லது Apple காலெண்டரில் சேர்க்கலாம்.`
          },
          ],
      adminView: {
            title: `⚙️ அட்மின் / கமிட்டி காட்சி`,
            points: [
            `இட வரைபட இணைப்பு உட்பட அனைத்து விவரங்களுடன் நிகழ்வுகளை உருவாக்கவும்`,
            `நேரலை RSVP எண்ணிக்கை மற்றும் பங்கேற்பாளர் பட்டியலை காணவும்`,
            `தானியங்கி காத்திருப்பு பட்டியலுடன் அதிகபட்ச RSVP கொள்ளளவை அமைக்கவும்`,
            `நிகழ்வு புகைப்படங்களை கம்யூனிட்டி கேலரிக்கு பதிவேற்றவும்`,
            `பல தேர்வு விருப்பங்களுடன் அநாமதேய அல்லது பெயரிடப்பட்ட வாக்கெடுப்புகளை உருவாக்கவும்`,
            `வாக்குகள் வரும்போது வாக்கெடுப்பு முடிவுகளை நேரலையில் காணவும்`,
          ]
          },
      residentView: {
            title: `👤 குடியிருப்பாளர் காட்சி`,
            points: [
            `அனைத்து வரவிருக்கும் நிகழ்வுகளையும் காலெண்டர் காட்சியில் காணவும்`,
            `புஷ் அறிவிப்பிலிருந்து ஒரே தட்டில் RSVP செய்யவும்`,
            `நிகழ்வுகளை தனிப்பட்ட காலெண்டரில் சேர்க்கவும் (Google / Apple)`,
            `நிகழ்வு புகைப்பட கேலரியை பார்த்து புகைப்படங்களை பதிவிறக்கவும்`,
            `சொசைட்டி வாக்கெடுப்புகளில் வாக்களிக்கவும் — அநாமதேய அல்லது பெயரிடப்பட்டது`,
            `வாக்களித்த பின் அல்லது மூடிய பின் வாக்கெடுப்பு முடிவுகளை காணவும்`,
          ]
          },
      features: [
            {
            icon: `📋`,
            title: `RSVP நிர்வாகம்`,
            desc: `நேரலை தலைவரிசை எண்ணிக்கை, பங்கேற்பாளர் பட்டியல் ஏற்றுமதி, மற்றும் காத்திருப்பு பட்டியலுடன் விருப்ப கொள்ளளவு வரம்பு.`
          },
            {
            icon: `🗳️`,
            title: `அநாமதேய வாக்கெடுப்புகள்`,
            desc: `யார் எதற்கு வாக்களித்தார் என்பதை வெளிப்படுத்தாமல் வாக்குகள் எண்ணப்படுகின்றன. உணர்திறன் வாய்ந்த சொசைட்டி முடிவுகளுக்கு சிறந்தது.`
          },
            {
            icon: `📸`,
            title: `நிகழ்வு புகைப்பட கேலரி`,
            desc: `ஒவ்வொரு நிகழ்விற்கும் மையப்படுத்தப்பட்ட கேலரி. குடியிருப்பாளர்கள் அனைத்து புகைப்படங்களையும் பதிவேற்றி, பார்த்து, பதிவிறக்கலாம்.`
          },
            {
            icon: `📅`,
            title: `காலெண்டர் ஏற்றுமதி`,
            desc: `எந்த நிகழ்வையும் Google காலெண்டர், Apple காலெண்டர், அல்லது Outlook இல் சேர்க்க ஒரே தட்டு.`
          },
            {
            icon: `📊`,
            title: `வாக்கெடுப்பு முடிவு விளக்கப்படங்கள்`,
            desc: `வாக்களிப்பு முடிவுகளை நேரலையில் காட்டும் காட்சி பை மற்றும் பார் விளக்கப்படங்கள்.`
          },
            {
            icon: `🔔`,
            title: `நிகழ்வு நினைவூட்டல்கள்`,
            desc: `ஒவ்வொரு நிகழ்விற்கும் 24 மணி நேரம் மற்றும் 1 மணி நேரம் முன் தானியங்கி புஷ் நினைவூட்டல்.`
          },
          ],
      faqs: [
            {
            q: `குறிப்பிட்ட பிளாக்குகள் அல்லது ஃப்ளாட்களுக்கு நிகழ்வு RSVPஐ கட்டுப்படுத்த முடியுமா?`,
            a: `ஆம். Pro திட்டத்தில், குறிப்பிட்ட பிளாக்குகளுக்கு மட்டும் தெரியும் நிகழ்வுகளை உருவாக்கலாம் (உதா. பிளாக் A தீபாவளி பார்ட்டி). ஸ்டாண்டர்ட் திட்ட நிகழ்வுகள் சொசைட்டி முழுவதற்குமானவை.`
          },
            {
            q: `வாக்கெடுப்பு முடிவுகள் அநாமதேயமா?`,
            a: `வாக்கெடுப்பை உருவாக்கும்போது நீங்கள் தேர்வு செய்கிறீர்கள். அநாமதேய வாக்கெடுப்புகள் வாக்கு எண்ணிக்கையை மட்டும் காட்டும். பெயரிடப்பட்ட வாக்கெடுப்புகள் யார் எதற்கு வாக்களித்தார் என்பதை காட்டும், AGM வாக்களிப்பு பதிவுகளுக்கு பயனுள்ளது.`
          },
            {
            q: `குடியிருப்பாளர்கள் தங்கள் சொந்த புகைப்படங்களை நிகழ்வு கேலரிக்கு பதிவேற்ற முடியுமா?`,
            a: `அட்மின்கள் ஒவ்வொரு நிகழ்விற்கும் குடியிருப்பாளர் புகைப்பட பதிவேற்றத்தை இயக்கலாம் அல்லது முடக்கலாம். இயல்பாக, அட்மின்கள் மட்டுமே புகைப்படங்களை பதிவேற்றுவார்கள், பின்னர் அதை குடியிருப்பாளர்கள் பதிவிறக்கக்கூடியதாக ஆக்கலாம்.`
          },
            {
            q: `ஒரு நிகழ்வுக்கான பங்கேற்பாளர் பட்டியலை ஏற்றுமதி செய்ய முடியுமா?`,
            a: `ஆம். பெயர்கள், ஃப்ளாட் எண்கள், மற்றும் RSVP நிலையுடன் RSVP பட்டியலை CSV ஆக ஏற்றுமதி செய்யவும். கேட்டரிங் திட்டமிடல் மற்றும் AGM வருகை பதிவுகளுக்கு பயனுள்ளது.`
          },
          ],
      related: [
            {
            icon: `📢`,
            title: `நோட்டீஸ் போர்டு`,
            href: `/features/notices`,
            desc: `அனைத்து குடியிருப்பாளர்களுக்கும் புஷ் டெலிவரியுடன் டேக் செய்யப்பட்ட நோட்டீஸ்களை பதிவிடுங்கள்.`
          },
            {
            icon: `🏊`,
            title: `அமெனிட்டி முன்பதிவு`,
            href: `/features/amenities`,
            desc: `ஸ்லாட் தேர்வுடன் கிளப்ஹவுஸ் மற்றும் ஜிம் முன்பதிவு.`
          },
            {
            icon: `🤝`,
            title: `கம்யூனிட்டி ஹெல்ப்`,
            href: `/features/community-help`,
            desc: `அண்டை வீட்டார்-க்கு-அண்டை வீட்டார் சேவை மார்க்கெட்பிளேஸ்.`
          },
          ],
      ctaHeadline: `உங்கள் அடுத்த சொசைட்டி நிகழ்வை ஸ்மார்ட்டாக திட்டமிடுங்கள்.`,
      ctaSub: `நிகழ்வுகள் & வாக்கெடுப்புகள் ஸ்டாண்டர்ட் திட்டத்திலிருந்து கிடைக்கிறது. இலவச டிரையல் கிடைக்கிறது.`,
    },
  },
  "issues": {
    en: {
      badge: `Issues & Complaints`,
      emoji: `🛠️`,
      headline: `No more complaints lost in`,
      headlineAccent: `WhatsApp threads. Ever.`,
      subline: `A proper issue tracking system for residential societies. From pothole to plumber — every complaint logged, assigned, and resolved with full transparency.`,
      problems: [
            {
            icon: `📱`,
            title: `Complaints die in WhatsApp`,
            desc: `A resident complains about a broken lift in the group. The admin sees it, gets distracted, and forgets. Two weeks later the lift is still broken and the resident is furious.`
          },
            {
            icon: `🤷`,
            title: `No accountability`,
            desc: `Who was supposed to fix the water pump? Which vendor was called? When? There's no way to trace what happened without scrolling through months of chats.`
          },
            {
            icon: `⏰`,
            title: `No resolution timeline`,
            desc: `Residents have no idea when their complaint will be fixed. The waiting in the dark creates more frustration than the issue itself.`
          },
          ],
      flows: [
            {
            icon: `📝`,
            label: `Resident raises a complaint`,
            detail: `Fills in title, description, category (Electrical / Plumbing / Lift / Common Area / Security), and optional photo.`
          },
            {
            icon: `🔔`,
            label: `Admin notified instantly`,
            detail: `Admin receives a push notification. The complaint appears in the Issues dashboard with status: Open.`
          },
            {
            icon: `👷`,
            label: `Admin assigns to vendor or committee`,
            detail: `Admin selects a vendor from the approved list or assigns to a committee member. Sets an estimated resolution date.`
          },
            {
            icon: `📊`,
            label: `Status updates logged`,
            detail: `As work progresses, status changes: Open → In Progress → Resolved. Each change pushes a notification to the resident.`
          },
            {
            icon: `⭐`,
            label: `Resident confirms and rates`,
            detail: `On resolution, resident gets a prompt to confirm the fix and rate the resolution from 1–5 stars.`
          },
          ],
      adminView: {
            title: `⚙️ Admin / Committee View`,
            points: [
            `Dashboard showing all open, in-progress, and resolved issues`,
            `Filter issues by category, age, or assigned vendor`,
            `Assign issues to specific committee members or vendors`,
            `Add internal notes visible only to admins`,
            `Set estimated resolution dates with resident notification`,
            `Monthly resolution rate report for committee review`,
          ]
          },
      residentView: {
            title: `👤 Resident View`,
            points: [
            `Raise a complaint with photo in under 60 seconds`,
            `Track real-time status: Open → In Progress → Resolved`,
            `Receive push notifications on every status change`,
            `See who the issue was assigned to and when`,
            `Rate the resolution quality after closure`,
            `View history of all past complaints and resolutions`,
          ]
          },
      features: [
            {
            icon: `🏷️`,
            title: `Category tagging`,
            desc: `Electrical, Plumbing, Lift, Common Area, Security, Parking — pre-built categories with icons.`
          },
            {
            icon: `📸`,
            title: `Photo evidence`,
            desc: `Residents attach photos when raising an issue. Guards can add photos on resolution.`
          },
            {
            icon: `⚡`,
            title: `Priority levels`,
            desc: `Mark issues as Low, Medium, High, or Urgent. Urgent issues trigger priority alerts to admins.`
          },
            {
            icon: `👷`,
            title: `Vendor assignment`,
            desc: `Maintain an approved vendor list. Assign issues to the right vendor directly in the app.`
          },
            {
            icon: `📊`,
            title: `Resolution analytics`,
            desc: `Average resolution time, open issue count, and category trends — monthly report for committee.`
          },
            {
            icon: `⭐`,
            title: `Resident rating`,
            desc: `Residents rate resolutions from 1–5 stars. A quality score visible to the committee.`
          },
          ],
      faqs: [
            {
            q: `Can a resident see other residents' complaints?`,
            a: `Only the admin and committee can see all complaints. Residents see only their own complaints. Common area issues (like a broken lift) are shown to all residents on the community board.`
          },
            {
            q: `What happens if an issue is reopened after resolution?`,
            a: `The resident can reopen a closed issue within 7 days if the problem persists. The status reverts to 'Reopened' and the admin is notified immediately.`
          },
            {
            q: `Can I track which vendor has which issues assigned?`,
            a: `Yes. The Vendor View in the admin panel shows all issues assigned to each vendor, their average resolution time, and rating scores.`
          },
            {
            q: `Is Issues & Complaints available on the Free plan?`,
            a: `Issues & Complaints is available from the Standard plan (₹2,999/month) onwards. The Free plan includes basic notice board and visitor management.`
          },
          ],
      related: [
            {
            icon: `📢`,
            title: `Notice Board`,
            href: `/features/notices`,
            desc: `Post tagged notices with push delivery to all residents.`
          },
            {
            icon: `🏊`,
            title: `Amenity Booking`,
            href: `/features/amenities`,
            desc: `Clubhouse, gym, and court booking with approval flow.`
          },
            {
            icon: `💸`,
            title: `Maintenance & Billing`,
            href: `/features/maintenance`,
            desc: `Auto-generate bills and track defaulters.`
          },
          ],
      ctaHeadline: `End the WhatsApp complaint chain.`,
      ctaSub: `Issues & Complaints is available from the Standard plan. Start with a free trial.`,
    },
    hi: {
      badge: `समस्याएं और शिकायतें`,
      emoji: `🛠️`,
      headline: `अब शिकायतें खोएंगी नहीं`,
      headlineAccent: `WhatsApp थ्रेड्स में। कभी नहीं।`,
      subline: `रेजिडेंशियल सोसायटियों के लिए एक सही इश्यू ट्रैकिंग सिस्टम। गड्ढे से लेकर प्लंबर तक — हर शिकायत पूरी पारदर्शिता के साथ लॉग, असाइन, और हल की जाती है।`,
      problems: [
            {
            icon: `📱`,
            title: `शिकायतें WhatsApp में मर जाती हैं`,
            desc: `एक रेजिडेंट ग्रुप में टूटी हुई लिफ्ट की शिकायत करता है। एडमिन देखता है, ध्यान भटकता है, और भूल जाता है। दो हफ्ते बाद भी लिफ्ट टूटी है और रेजिडेंट नाराज़ है।`
          },
            {
            icon: `🤷`,
            title: `कोई जवाबदेही नहीं`,
            desc: `वॉटर पंप कौन ठीक करने वाला था? किस वेंडर को बुलाया गया था? कब? महीनों की चैट स्क्रॉल किए बिना पता लगाने का कोई तरीका नहीं।`
          },
            {
            icon: `⏰`,
            title: `कोई समाधान समयरेखा नहीं`,
            desc: `रेजिडेंट्स को नहीं पता उनकी शिकायत कब ठीक होगी। अंधेरे में इंतज़ार करना समस्या से ज्यादा निराशा पैदा करता है।`
          },
          ],
      flows: [
            {
            icon: `📝`,
            label: `रेजिडेंट शिकायत दर्ज करता है`,
            detail: `शीर्षक, विवरण, श्रेणी (इलेक्ट्रिकल / प्लंबिंग / लिफ्ट / कॉमन एरिया / सिक्योरिटी), और वैकल्पिक फोटो भरता है।`
          },
            {
            icon: `🔔`,
            label: `एडमिन को तुरंत सूचित किया जाता है`,
            detail: `एडमिन को पुश नोटिफिकेशन मिलता है। शिकायत इश्यूज़ डैशबोर्ड में स्टेटस: खुला के साथ दिखती है।`
          },
            {
            icon: `👷`,
            label: `एडमिन वेंडर या कमेटी को असाइन करता है`,
            detail: `एडमिन अप्रूव्ड लिस्ट से वेंडर चुनता है या किसी कमेटी मेंबर को असाइन करता है। अनुमानित समाधान तारीख सेट करता है।`
          },
            {
            icon: `📊`,
            label: `स्टेटस अपडेट लॉग होते हैं`,
            detail: `काम बढ़ने के साथ, स्टेटस बदलता है: खुला → प्रगति में → हल हुआ। हर बदलाव रेजिडेंट को नोटिफिकेशन भेजता है।`
          },
            {
            icon: `⭐`,
            label: `रेजिडेंट पुष्टि और रेटिंग करता है`,
            detail: `समाधान पर, रेजिडेंट को फिक्स की पुष्टि करने और 1–5 स्टार रेटिंग देने का प्रॉम्प्ट मिलता है।`
          },
          ],
      adminView: {
            title: `⚙️ एडमिन / कमेटी व्यू`,
            points: [
            `सभी खुले, प्रगति में, और हल हुए इश्यूज़ दिखाने वाला डैशबोर्ड`,
            `श्रेणी, उम्र, या असाइन किए गए वेंडर से इश्यूज़ फ़िल्टर करें`,
            `इश्यूज़ को खास कमेटी मेंबर्स या वेंडर्स को असाइन करें`,
            `केवल एडमिन को दिखने वाले इंटरनल नोट्स जोड़ें`,
            `रेजिडेंट नोटिफिकेशन के साथ अनुमानित समाधान तारीखें सेट करें`,
            `कमेटी समीक्षा के लिए मासिक समाधान दर रिपोर्ट`,
          ]
          },
      residentView: {
            title: `👤 रेजिडेंट व्यू`,
            points: [
            `60 सेकंड से कम में फोटो के साथ शिकायत दर्ज करें`,
            `रियल-टाइम स्टेटस ट्रैक करें: खुला → प्रगति में → हल हुआ`,
            `हर स्टेटस बदलाव पर पुश नोटिफिकेशन पाएं`,
            `देखें कि इश्यू किसे और कब असाइन किया गया`,
            `बंद होने के बाद समाधान की क्वालिटी रेट करें`,
            `सभी पुरानी शिकायतों और समाधानों का इतिहास देखें`,
          ]
          },
      features: [
            {
            icon: `🏷️`,
            title: `श्रेणी टैगिंग`,
            desc: `इलेक्ट्रिकल, प्लंबिंग, लिफ्ट, कॉमन एरिया, सिक्योरिटी, पार्किंग — आइकन के साथ पहले से बनी श्रेणियां।`
          },
            {
            icon: `📸`,
            title: `फोटो सबूत`,
            desc: `रेजिडेंट्स इश्यू दर्ज करते समय फोटो जोड़ते हैं। गार्ड्स समाधान पर फोटो जोड़ सकते हैं।`
          },
            {
            icon: `⚡`,
            title: `प्राथमिकता स्तर`,
            desc: `इश्यूज़ को निम्न, मध्यम, उच्च, या अति-आवश्यक चिह्नित करें। अति-आवश्यक इश्यूज़ एडमिन को प्राथमिकता अलर्ट भेजते हैं।`
          },
            {
            icon: `👷`,
            title: `वेंडर असाइनमेंट`,
            desc: `अप्रूव्ड वेंडर लिस्ट बनाए रखें। ऐप में सीधे सही वेंडर को इश्यूज़ असाइन करें।`
          },
            {
            icon: `📊`,
            title: `समाधान एनालिटिक्स`,
            desc: `औसत समाधान समय, खुले इश्यू की संख्या, और श्रेणी रुझान — कमेटी के लिए मासिक रिपोर्ट।`
          },
            {
            icon: `⭐`,
            title: `रेजिडेंट रेटिंग`,
            desc: `रेजिडेंट्स समाधानों को 1–5 स्टार रेट करते हैं। कमेटी को दिखने वाला क्वालिटी स्कोर।`
          },
          ],
      faqs: [
            {
            q: `क्या एक रेजिडेंट दूसरे रेजिडेंट्स की शिकायतें देख सकता है?`,
            a: `केवल एडमिन और कमेटी सभी शिकायतें देख सकते हैं। रेजिडेंट्स केवल अपनी खुद की शिकायतें देखते हैं। कॉमन एरिया इश्यूज़ (जैसे टूटी लिफ्ट) सभी रेजिडेंट्स को कम्युनिटी बोर्ड पर दिखाए जाते हैं।`
          },
            {
            q: `समाधान के बाद इश्यू फिर से खुलने पर क्या होता है?`,
            a: `अगर समस्या बनी रहती है तो रेजिडेंट 7 दिनों के भीतर बंद इश्यू को फिर से खोल सकता है। स्टेटस 'फिर से खोला गया' में बदल जाता है और एडमिन को तुरंत सूचित किया जाता है।`
          },
            {
            q: `क्या मैं ट्रैक कर सकता हूं किस वेंडर को कौन से इश्यूज़ असाइन हैं?`,
            a: `हां। एडमिन पैनल में वेंडर व्यू हर वेंडर को असाइन किए गए सभी इश्यूज़, उनका औसत समाधान समय, और रेटिंग स्कोर दिखाता है।`
          },
            {
            q: `क्या समस्याएं और शिकायतें फ्री प्लान पर उपलब्ध हैं?`,
            a: `समस्याएं और शिकायतें स्टैंडर्ड प्लान (₹2,999/महीना) से उपलब्ध हैं। फ्री प्लान में बेसिक नोटिस बोर्ड और विजिटर मैनेजमेंट शामिल है।`
          },
          ],
      related: [
            {
            icon: `📢`,
            title: `नोटिस बोर्ड`,
            href: `/features/notices`,
            desc: `सभी रेजिडेंट्स को पुश डिलीवरी के साथ टैग किए गए नोटिस पोस्ट करें।`
          },
            {
            icon: `🏊`,
            title: `एमेनिटी बुकिंग`,
            href: `/features/amenities`,
            desc: `अप्रूवल फ्लो के साथ क्लबहाउस, जिम, और कोर्ट बुकिंग।`
          },
            {
            icon: `💸`,
            title: `मेंटेनेंस और बिलिंग`,
            href: `/features/maintenance`,
            desc: `अपने आप बिल बनाएं और डिफॉल्टर्स ट्रैक करें।`
          },
          ],
      ctaHeadline: `WhatsApp शिकायत चेन को खत्म करें।`,
      ctaSub: `समस्याएं और शिकायतें स्टैंडर्ड प्लान से उपलब्ध हैं। फ्री ट्रायल से शुरू करें।`,
    },
    gu: {
      badge: `સમસ્યાઓ અને ફરિયાદો`,
      emoji: `🛠️`,
      headline: `હવે ફરિયાદો ખોવાશે નહીં`,
      headlineAccent: `WhatsApp થ્રેડ્સમાં. ક્યારેય નહીં.`,
      subline: `રેસિડેન્શિયલ સોસાયટીઓ માટે યોગ્ય ઈશ્યૂ ટ્રેકિંગ સિસ્ટમ. ખાડાથી લઈને પ્લમ્બર સુધી — દરેક ફરિયાદ સંપૂર્ણ પારદર્શિતા સાથે લોગ, સોંપાયેલ, અને ઉકેલાય છે.`,
      problems: [
            {
            icon: `📱`,
            title: `ફરિયાદો WhatsApp માં મરી જાય છે`,
            desc: `એક રહેવાસી ગ્રુપમાં તૂટેલી લિફ્ટની ફરિયાદ કરે છે. એડમિન જુએ છે, ધ્યાન ભટકે છે, અને ભૂલી જાય છે. બે અઠવાડિયા પછી પણ લિફ્ટ તૂટેલી છે અને રહેવાસી ગુસ્સે છે.`
          },
            {
            icon: `🤷`,
            title: `કોઈ જવાબદારી નથી`,
            desc: `વોટર પંપ કોણે ઠીક કરવાનો હતો? કયા વેન્ડરને બોલાવ્યો હતો? ક્યારે? મહિનાઓની ચેટ સ્ક્રોલ કર્યા વગર શું થયું તે જાણવાનો કોઈ રસ્તો નથી.`
          },
            {
            icon: `⏰`,
            title: `કોઈ ઉકેલ સમયરેખા નથી`,
            desc: `રહેવાસીઓને ખબર નથી તેમની ફરિયાદ ક્યારે ઠીક થશે. અંધારામાં રાહ જોવી સમસ્યા કરતાં વધુ નિરાશા પેદા કરે છે.`
          },
          ],
      flows: [
            {
            icon: `📝`,
            label: `રહેવાસી ફરિયાદ નોંધાવે છે`,
            detail: `શીર્ષક, વર્ણન, શ્રેણી (ઈલેક્ટ્રિકલ / પ્લમ્બિંગ / લિફ્ટ / કોમન એરિયા / સિક્યોરિટી), અને વૈકલ્પિક ફોટો ભરે છે.`
          },
            {
            icon: `🔔`,
            label: `એડમિનને તરત જાણ થાય છે`,
            detail: `એડમિનને પુશ નોટિફિકેશન મળે છે. ફરિયાદ ઈશ્યૂઝ ડેશબોર્ડમાં સ્ટેટસ: ઓપન સાથે દેખાય છે.`
          },
            {
            icon: `👷`,
            label: `એડમિન વેન્ડર અથવા કમિટીને સોંપે છે`,
            detail: `એડમિન અપ્રૂવ્ડ લિસ્ટમાંથી વેન્ડર પસંદ કરે છે અથવા કમિટી સભ્યને સોંપે છે. અંદાજિત ઉકેલ તારીખ સેટ કરે છે.`
          },
            {
            icon: `📊`,
            label: `સ્ટેટસ અપડેટ લોગ થાય છે`,
            detail: `કામ આગળ વધતા, સ્ટેટસ બદલાય છે: ઓપન → પ્રગતિમાં → ઉકેલાયું. દરેક ફેરફાર રહેવાસીને નોટિફિકેશન મોકલે છે.`
          },
            {
            icon: `⭐`,
            label: `રહેવાસી પુષ્ટિ અને રેટિંગ આપે છે`,
            detail: `ઉકેલ પર, રહેવાસીને ફિક્સની પુષ્ટિ કરવા અને 1–5 સ્ટાર રેટિંગ આપવા માટે પ્રોમ્પ્ટ મળે છે.`
          },
          ],
      adminView: {
            title: `⚙️ એડમિન / કમિટી વ્યૂ`,
            points: [
            `બધી ઓપન, પ્રગતિમાં, અને ઉકેલાયેલી સમસ્યાઓ બતાવતું ડેશબોર્ડ`,
            `શ્રેણી, ઉંમર, અથવા સોંપાયેલા વેન્ડર દ્વારા ઈશ્યૂઝ ફિલ્ટર કરો`,
            `ઈશ્યૂઝને ચોક્કસ કમિટી સભ્યો અથવા વેન્ડર્સને સોંપો`,
            `ફક્ત એડમિનને દેખાતી આંતરિક નોંધો ઉમેરો`,
            `રહેવાસી નોટિફિકેશન સાથે અંદાજિત ઉકેલ તારીખો સેટ કરો`,
            `કમિટી સમીક્ષા માટે માસિક ઉકેલ દર રિપોર્ટ`,
          ]
          },
      residentView: {
            title: `👤 રહેવાસી વ્યૂ`,
            points: [
            `60 સેકન્ડથી ઓછા સમયમાં ફોટો સાથે ફરિયાદ નોંધાવો`,
            `રિયલ-ટાઈમ સ્ટેટસ ટ્રેક કરો: ઓપન → પ્રગતિમાં → ઉકેલાયું`,
            `દરેક સ્ટેટસ ફેરફાર પર પુશ નોટિફિકેશન મેળવો`,
            `જુઓ ઈશ્યૂ કોને અને ક્યારે સોંપાયો`,
            `બંધ થયા પછી ઉકેલની ગુણવત્તા રેટ કરો`,
            `બધી ભૂતકાળની ફરિયાદો અને ઉકેલોનો ઈતિહાસ જુઓ`,
          ]
          },
      features: [
            {
            icon: `🏷️`,
            title: `શ્રેણી ટેગિંગ`,
            desc: `ઈલેક્ટ્રિકલ, પ્લમ્બિંગ, લિફ્ટ, કોમન એરિયા, સિક્યોરિટી, પાર્કિંગ — આઈકન સાથે પૂર્વ-નિર્મિત શ્રેણીઓ.`
          },
            {
            icon: `📸`,
            title: `ફોટો પુરાવો`,
            desc: `રહેવાસીઓ ઈશ્યૂ ઉઠાવતી વખતે ફોટા જોડે છે. ગાર્ડ્સ ઉકેલ વખતે ફોટા ઉમેરી શકે છે.`
          },
            {
            icon: `⚡`,
            title: `પ્રાથમિકતા સ્તરો`,
            desc: `ઈશ્યૂઝને નીચું, મધ્યમ, ઉચ્ચ, અથવા તાત્કાલિક ચિહ્નિત કરો. તાત્કાલિક ઈશ્યૂઝ એડમિનને પ્રાથમિકતા અલર્ટ મોકલે છે.`
          },
            {
            icon: `👷`,
            title: `વેન્ડર સોંપણી`,
            desc: `અપ્રૂવ્ડ વેન્ડર લિસ્ટ જાળવો. એપમાં સીધા જ યોગ્ય વેન્ડરને ઈશ્યૂઝ સોંપો.`
          },
            {
            icon: `📊`,
            title: `ઉકેલ એનાલિટિક્સ`,
            desc: `સરેરાશ ઉકેલ સમય, ઓપન ઈશ્યૂ સંખ્યા, અને શ્રેણી વલણો — કમિટી માટે માસિક રિપોર્ટ.`
          },
            {
            icon: `⭐`,
            title: `રહેવાસી રેટિંગ`,
            desc: `રહેવાસીઓ ઉકેલોને 1–5 સ્ટાર રેટ કરે છે. કમિટીને દેખાતો ગુણવત્તા સ્કોર.`
          },
          ],
      faqs: [
            {
            q: `શું એક રહેવાસી બીજા રહેવાસીઓની ફરિયાદો જોઈ શકે?`,
            a: `ફક્ત એડમિન અને કમિટી બધી ફરિયાદો જોઈ શકે છે. રહેવાસીઓ ફક્ત પોતાની ફરિયાદો જુએ છે. કોમન એરિયા ઈશ્યૂઝ (જેમ કે તૂટેલી લિફ્ટ) બધા રહેવાસીઓને કમ્યુનિટી બોર્ડ પર બતાવાય છે.`
          },
            {
            q: `ઉકેલ પછી ઈશ્યૂ ફરી ખુલે તો શું થાય?`,
            a: `જો સમસ્યા ચાલુ રહે તો રહેવાસી 7 દિવસની અંદર બંધ ઈશ્યૂ ફરી ખોલી શકે છે. સ્ટેટસ 'ફરી ખોલાયું' માં બદલાય છે અને એડમિનને તરત જાણ થાય છે.`
          },
            {
            q: `શું હું ટ્રેક કરી શકું કયા વેન્ડરને કયા ઈશ્યૂઝ સોંપાયા છે?`,
            a: `હા. એડમિન પેનલમાં વેન્ડર વ્યૂ દરેક વેન્ડરને સોંપાયેલા બધા ઈશ્યૂઝ, તેમનો સરેરાશ ઉકેલ સમય, અને રેટિંગ સ્કોર બતાવે છે.`
          },
            {
            q: `શું સમસ્યાઓ અને ફરિયાદો ફ્રી પ્લાન પર ઉપલબ્ધ છે?`,
            a: `સમસ્યાઓ અને ફરિયાદો સ્ટાન્ડર્ડ પ્લાન (₹2,999/મહિનો) થી ઉપલબ્ધ છે. ફ્રી પ્લાનમાં બેઝિક નોટિસ બોર્ડ અને વિઝિટર મેનેજમેન્ટ સામેલ છે.`
          },
          ],
      related: [
            {
            icon: `📢`,
            title: `નોટિસ બોર્ડ`,
            href: `/features/notices`,
            desc: `બધા રહેવાસીઓને પુશ ડિલિવરી સાથે ટેગ કરેલી નોટિસ પોસ્ટ કરો.`
          },
            {
            icon: `🏊`,
            title: `એમેનિટી બુકિંગ`,
            href: `/features/amenities`,
            desc: `અપ્રૂવલ ફ્લો સાથે ક્લબહાઉસ, જિમ, અને કોર્ટ બુકિંગ.`
          },
            {
            icon: `💸`,
            title: `મેઈન્ટેનન્સ અને બિલિંગ`,
            href: `/features/maintenance`,
            desc: `ઓટોમેટિક બિલ બનાવો અને ડિફોલ્ટર્સ ટ્રેક કરો.`
          },
          ],
      ctaHeadline: `WhatsApp ફરિયાદ ચેઈનને ખતમ કરો.`,
      ctaSub: `સમસ્યાઓ અને ફરિયાદો સ્ટાન્ડર્ડ પ્લાનથી ઉપલબ્ધ છે. ફ્રી ટ્રાયલથી શરૂ કરો.`,
    },
    ta: {
      badge: `பிரச்சினைகள் & புகார்கள்`,
      emoji: `🛠️`,
      headline: `இனி புகார்கள்`,
      headlineAccent: `WhatsApp த்ரெட்களில் தொலைவதில்லை. ஒருபோதும் இல்லை.`,
      subline: `குடியிருப்பு சொசைட்டீஸுக்கான ஒரு சரியான பிரச்சினை கண்காணிப்பு அமைப்பு. குழிகள் முதல் பிளம்பர் வரை — ஒவ்வொரு புகாரும் முழு வெளிப்படைத்தன்மையுடன் பதிவு செய்யப்பட்டு, ஒதுக்கப்பட்டு, தீர்க்கப்படுகிறது.`,
      problems: [
            {
            icon: `📱`,
            title: `WhatsApp இல் புகார்கள் இறந்துவிடுகின்றன`,
            desc: `ஒரு குடியிருப்பாளர் குழுவில் உடைந்த லிஃப்ட் பற்றி புகார் செய்கிறார். அட்மின் அதை பார்க்கிறார், கவனச்சிதறல் ஏற்படுகிறது, மற்றும் மறந்துவிடுகிறார். இரண்டு வாரங்களுக்குப் பிறகும் லிஃப்ட் இன்னும் உடைந்திருக்கிறது, குடியிருப்பாளர் கோபமாக இருக்கிறார்.`
          },
            {
            icon: `🤷`,
            title: `பொறுப்புணர்வு இல்லை`,
            desc: `நீர் பம்பை சரிசெய்ய யாரிடம் ஒப்படைக்கப்பட்டது? எந்த வெண்டர் அழைக்கப்பட்டார்? எப்போது? பல மாதங்களின் அரட்டைகளை ஸ்க்ரோல் செய்யாமல் என்ன நடந்தது என்று கண்டறிய வழியில்லை.`
          },
            {
            icon: `⏰`,
            title: `தீர்வு காலவரிசை இல்லை`,
            desc: `தங்கள் புகார் எப்போது சரிசெய்யப்படும் என்று குடியிருப்பாளர்களுக்கு தெரியாது. இருட்டில் காத்திருப்பது பிரச்சினையை விட அதிக விரக்தியை உருவாக்குகிறது.`
          },
          ],
      flows: [
            {
            icon: `📝`,
            label: `குடியிருப்பாளர் ஒரு புகாரை எழுப்புகிறார்`,
            detail: `தலைப்பு, விவரணை, வகை (எலக்ட்ரிக்கல் / பிளம்பிங் / லிஃப்ட் / பொது இடம் / பாதுகாப்பு), மற்றும் விருப்ப புகைப்படத்தை நிரப்புகிறார்.`
          },
            {
            icon: `🔔`,
            label: `அட்மினுக்கு உடனடியாக தெரிவிக்கப்படுகிறது`,
            detail: `அட்மின் ஒரு புஷ் அறிவிப்பை பெறுகிறார். புகார் Issues டாஷ்போர்டில் நிலை: Open என தோன்றும்.`
          },
            {
            icon: `👷`,
            label: `அட்மின் வெண்டர் அல்லது கமிட்டிக்கு ஒதுக்குகிறார்`,
            detail: `அட்மின் ஒப்புதல் அளிக்கப்பட்ட பட்டியலிலிருந்து ஒரு வெண்டரை தேர்ந்தெடுக்கிறார் அல்லது ஒரு கமிட்டி உறுப்பினருக்கு ஒதுக்குகிறார். மதிப்பிடப்பட்ட தீர்வு தேதியை அமைக்கிறார்.`
          },
            {
            icon: `📊`,
            label: `நிலை புதுப்பிப்புகள் பதிவு செய்யப்படுகின்றன`,
            detail: `வேலை முன்னேறும்போது, நிலை மாறுகிறது: Open → In Progress → Resolved. ஒவ்வொரு மாற்றமும் குடியிருப்பாளருக்கு ஒரு அறிவிப்பை அனுப்புகிறது.`
          },
            {
            icon: `⭐`,
            label: `குடியிருப்பாளர் உறுதிப்படுத்தி மதிப்பிடுகிறார்`,
            detail: `தீர்வானதும், குடியிருப்பாளருக்கு சரிசெய்தலை உறுதிப்படுத்தி 1–5 நட்சத்திரங்களில் தீர்வை மதிப்பிட ஒரு அறிவிப்பு வரும்.`
          },
          ],
      adminView: {
            title: `⚙️ அட்மின் / கமிட்டி காட்சி`,
            points: [
            `அனைத்து திறந்த, செயலில் உள்ள, மற்றும் தீர்க்கப்பட்ட பிரச்சினைகளையும் காட்டும் டாஷ்போர்டு`,
            `வகை, காலம், அல்லது ஒதுக்கப்பட்ட வெண்டரால் பிரச்சினைகளை வடிகட்டவும்`,
            `குறிப்பிட்ட கமிட்டி உறுப்பினர்கள் அல்லது வெண்டர்களுக்கு பிரச்சினைகளை ஒதுக்கவும்`,
            `அட்மின்களுக்கு மட்டும் தெரியும் உள் குறிப்புகளை சேர்க்கவும்`,
            `குடியிருப்பாளர் அறிவிப்புடன் மதிப்பிடப்பட்ட தீர்வு தேதிகளை அமைக்கவும்`,
            `கமிட்டி மறுஆய்வுக்கான மாதாந்திர தீர்வு விகித அறிக்கை`,
          ]
          },
      residentView: {
            title: `👤 குடியிருப்பாளர் காட்சி`,
            points: [
            `60 வினாடிகளுக்குள் புகைப்படத்துடன் ஒரு புகாரை எழுப்பவும்`,
            `நேரலை நிலையை கண்காணிக்கவும்: Open → In Progress → Resolved`,
            `ஒவ்வொரு நிலை மாற்றத்திலும் புஷ் அறிவிப்புகளை பெறவும்`,
            `பிரச்சினை யாருக்கு ஒதுக்கப்பட்டது, எப்போது என்பதை காணவும்`,
            `மூடிய பின் தீர்வின் தரத்தை மதிப்பிடவும்`,
            `கடந்த அனைத்து புகார்கள் மற்றும் தீர்வுகளின் வரலாற்றையும் காணவும்`,
          ]
          },
      features: [
            {
            icon: `🏷️`,
            title: `வகை டேகிங்`,
            desc: `எலக்ட்ரிக்கல், பிளம்பிங், லிஃப்ட், பொது இடம், பாதுகாப்பு, பார்க்கிங் — ஐகான்களுடன் முன்கூட்டியே கட்டமைக்கப்பட்ட வகைகள்.`
          },
            {
            icon: `📸`,
            title: `புகைப்பட ஆதாரம்`,
            desc: `ஒரு பிரச்சினையை எழுப்பும்போது குடியிருப்பாளர்கள் புகைப்படங்களை இணைக்கிறார்கள். தீர்வின்போது காவலர்கள் புகைப்படங்களை சேர்க்கலாம்.`
          },
            {
            icon: `⚡`,
            title: `முன்னுரிமை நிலைகள்`,
            desc: `பிரச்சினைகளை குறைவு, நடுத்தரம், அதிகம், அல்லது அவசரம் என குறிக்கவும். அவசர பிரச்சினைகள் அட்மின்களுக்கு முன்னுரிமை எச்சரிக்கைகளை தூண்டும்.`
          },
            {
            icon: `👷`,
            title: `வெண்டர் ஒதுக்கீடு`,
            desc: `ஒப்புதல் அளிக்கப்பட்ட வெண்டர் பட்டியலை பராமரிக்கவும். ஆப்பிலேயே நேரடியாக சரியான வெண்டருக்கு பிரச்சினைகளை ஒதுக்கவும்.`
          },
            {
            icon: `📊`,
            title: `தீர்வு பகுப்பாய்வு`,
            desc: `சராசரி தீர்வு நேரம், திறந்த பிரச்சினை எண்ணிக்கை, மற்றும் வகை போக்குகள் — கமிட்டிக்கான மாதாந்திர அறிக்கை.`
          },
            {
            icon: `⭐`,
            title: `குடியிருப்பாளர் மதிப்பீடு`,
            desc: `குடியிருப்பாளர்கள் தீர்வுகளை 1–5 நட்சத்திரங்களில் மதிப்பிடுகிறார்கள். கமிட்டிக்கு தெரியும் தரமான மதிப்பெண்.`
          },
          ],
      faqs: [
            {
            q: `ஒரு குடியிருப்பாளர் மற்ற குடியிருப்பாளர்களின் புகார்களை பார்க்க முடியுமா?`,
            a: `அட்மின் மற்றும் கமிட்டி மட்டுமே அனைத்து புகார்களையும் பார்க்க முடியும். குடியிருப்பாளர்கள் தங்கள் சொந்த புகார்களை மட்டுமே பார்க்கிறார்கள். பொது இடப் பிரச்சினைகள் (உடைந்த லிஃப்ட் போன்றவை) கம்யூனிட்டி போர்டில் அனைத்து குடியிருப்பாளர்களுக்கும் காட்டப்படும்.`
          },
            {
            q: `தீர்வுக்குப் பிறகு ஒரு பிரச்சினை மீண்டும் திறக்கப்பட்டால் என்ன நடக்கும்?`,
            a: `பிரச்சினை தொடர்ந்தால் குடியிருப்பாளர் 7 நாட்களுக்குள் மூடப்பட்ட ஒரு பிரச்சினையை மீண்டும் திறக்கலாம். நிலை 'மீண்டும் திறக்கப்பட்டது' என மாறும் மற்றும் அட்மினுக்கு உடனடியாக தெரிவிக்கப்படும்.`
          },
            {
            q: `எந்த வெண்டருக்கு எந்த பிரச்சினைகள் ஒதுக்கப்பட்டுள்ளன என்பதை கண்காணிக்க முடியுமா?`,
            a: `ஆம். அட்மின் பேனலில் உள்ள வெண்டர் காட்சி ஒவ்வொரு வெண்டருக்கும் ஒதுக்கப்பட்ட அனைத்து பிரச்சினைகளையும், அவர்களின் சராசரி தீர்வு நேரத்தையும், மதிப்பீட்டு மதிப்பெண்களையும் காட்டுகிறது.`
          },
            {
            q: `பிரச்சினைகள் & புகார்கள் ஃப்ரீ திட்டத்தில் கிடைக்குமா?`,
            a: `பிரச்சினைகள் & புகார்கள் ஸ்டாண்டர்ட் திட்டத்திலிருந்து (₹2,999/மாதம்) கிடைக்கிறது. ஃப்ரீ திட்டத்தில் அடிப்படை நோட்டீஸ் போர்டு மற்றும் விசிட்டர் மேனேஜ்மென்ட் அடங்கும்.`
          },
          ],
      related: [
            {
            icon: `📢`,
            title: `நோட்டீஸ் போர்டு`,
            href: `/features/notices`,
            desc: `அனைத்து குடியிருப்பாளர்களுக்கும் புஷ் டெலிவரியுடன் டேக் செய்யப்பட்ட நோட்டீஸ்களை பதிவிடுங்கள்.`
          },
            {
            icon: `🏊`,
            title: `அமெனிட்டி முன்பதிவு`,
            href: `/features/amenities`,
            desc: `ஒப்புதல் ஃப்ளோவுடன் கிளப்ஹவுஸ், ஜிம், மற்றும் கோர்ட் முன்பதிவு.`
          },
            {
            icon: `💸`,
            title: `பராமரிப்பு மற்றும் பில்லிங்`,
            href: `/features/maintenance`,
            desc: `பில்களை தானாக உருவாக்கி டிஃபால்டர்களை கண்காணிக்கவும்.`
          },
          ],
      ctaHeadline: `WhatsApp புகார் சங்கிலியை முடிவுக்கு கொண்டு வாருங்கள்.`,
      ctaSub: `பிரச்சினைகள் & புகார்கள் ஸ்டாண்டர்ட் திட்டத்திலிருந்து கிடைக்கிறது. இலவச டிரையலுடன் தொடங்குங்கள்.`,
    },
  },
  "notices": {
    en: {
      badge: `Notice Board`,
      emoji: `📢`,
      headline: `Stop spamming your WhatsApp group.`,
      headlineAccent: `Notices that actually get read.`,
      subline: `Tagged, push-delivered notices that stay organised. Urgent water cuts, finance reminders, event announcements — each in their own lane.`,
      problems: [
            {
            icon: `😵`,
            title: `Notices drown in WhatsApp chats`,
            desc: `Important water cut notices get buried under good morning messages and cricket scores. Residents miss critical information.`
          },
            {
            icon: `🗂️`,
            title: `No structure or categories`,
            desc: `Finance, events, and urgent alerts all mixed in the same scroll. Impossible to find a notice from last week.`
          },
            {
            icon: `📵`,
            title: `No proof of delivery`,
            desc: `Admins have no idea if residents actually read the notice. Disputes happen because someone claimed they 'never got it'.`
          },
          ],
      flows: [
            {
            icon: `✍️`,
            label: `Admin writes notice`,
            detail: `Enter title, body, and choose a tag: Urgent / Finance / Event / General / Maintenance.`
          },
            {
            icon: `📌`,
            label: `Pin important notices`,
            detail: `Critical notices (water cuts, emergency) can be pinned to the top of the board so they're always visible.`
          },
            {
            icon: `🔔`,
            label: `Push notification fires instantly`,
            detail: `All residents receive a push notification immediately. The tag determines the notification sound and priority.`
          },
            {
            icon: `📖`,
            label: `Residents read and acknowledge`,
            detail: `Residents tap the notification to open the notice. Admins can see read-receipt counts per notice.`
          },
            {
            icon: `🗃️`,
            label: `Notice archived automatically`,
            detail: `Past notices stay searchable in the archive. Residents can search by keyword or filter by tag.`
          },
          ],
      adminView: {
            title: `⚙️ Admin / Committee View`,
            points: [
            `Post notices with rich text (bold, lists, links)`,
            `Choose from 5 tags: Urgent, Finance, Event, General, Maintenance`,
            `Pin up to 3 notices to the top of the board`,
            `Schedule notices to publish at a future date/time`,
            `See read-receipt count per notice`,
            `Edit or delete notices after publishing`,
          ]
          },
      residentView: {
            title: `👤 Resident View`,
            points: [
            `See all notices with tag colour-coding`,
            `Pinned notices always at the top`,
            `Filter notices by tag (Finance, Events, etc.)`,
            `Full archive searchable by keyword`,
            `Get instant push notification for new notices`,
            `Share notice via WhatsApp or email`,
          ]
          },
      features: [
            {
            icon: `🏷️`,
            title: `Tagged notices`,
            desc: `5 standard tags with colour codes — Urgent (red), Finance (amber), Event (teal), General (gray), Maintenance (blue).`
          },
            {
            icon: `📌`,
            title: `Pinned notices`,
            desc: `Pin up to 3 critical notices permanently at the top of the board for all residents.`
          },
            {
            icon: `📅`,
            title: `Scheduled publishing`,
            desc: `Write a notice now, set it to publish at 6 PM today. Perfect for after-hours announcements.`
          },
            {
            icon: `👁️`,
            title: `Read receipts`,
            desc: `See how many residents have opened each notice. Identify who hasn't read urgent alerts.`
          },
            {
            icon: `🔍`,
            title: `Searchable archive`,
            desc: `Every notice ever posted is searchable. Find that water schedule from 3 months ago in seconds.`
          },
            {
            icon: `🌐`,
            title: `Multilingual notices`,
            desc: `Post notices in English, Hindi, Gujarati, or any of the 6 supported languages. Each resident sees it in their preferred language.`
          },
          ],
      faqs: [
            {
            q: `Can I post notices in Hindi or Gujarati?`,
            a: `Yes. You can write notices in any of SocietyApp's 6 supported languages. Residents who've set Hindi as their app language will see Hindi notices; English-preference residents see English. The admin chooses the language when posting.`
          },
            {
            q: `Is there a limit to how many notices I can post?`,
            a: `No limit. Post as many notices as your society needs. Notices are archived automatically after 90 days on the Free plan, and kept indefinitely on paid plans.`
          },
            {
            q: `Can residents reply to or comment on notices?`,
            a: `On the Standard plan and above, residents can react to notices with emoji reactions (👍, ❤️, etc.). Comments/replies are available on the Pro plan to keep discussions organised.`
          },
            {
            q: `Can committee members post notices, or only the main admin?`,
            a: `On the Standard plan and above, you can grant committee members the 'Notice Board Editor' permission so they can post and manage notices independently.`
          },
          ],
      related: [
            {
            icon: `🎉`,
            title: `Events & Polls`,
            href: `/features/events`,
            desc: `RSVP events, photo galleries, and resident polls.`
          },
            {
            icon: `🛠️`,
            title: `Issues & Complaints`,
            href: `/features/issues`,
            desc: `Structured complaint lifecycle for residents.`
          },
            {
            icon: `🤝`,
            title: `Community Help`,
            href: `/features/community-help`,
            desc: `Neighbour-to-neighbour service marketplace.`
          },
          ],
      ctaHeadline: `Give your society a proper notice board.`,
      ctaSub: `Notice Board is included in the Free plan. No WhatsApp group needed.`,
    },
    hi: {
      badge: `नोटिस बोर्ड`,
      emoji: `📢`,
      headline: `अपने WhatsApp ग्रुप को स्पैम करना बंद करें।`,
      headlineAccent: `नोटिस जिन्हें वाकई पढ़ा जाता है।`,
      subline: `टैग किए गए, पुश-डिलीवर्ड नोटिस जो व्यवस्थित रहते हैं। अर्जेंट पानी की कटौती, फाइनेंस रिमाइंडर, इवेंट घोषणाएं — हर एक अपनी अलग लेन में।`,
      problems: [
            {
            icon: `😵`,
            title: `नोटिस WhatsApp चैट्स में डूब जाते हैं`,
            desc: `महत्वपूर्ण पानी कटौती नोटिस गुड मॉर्निंग मैसेज और क्रिकेट स्कोर के नीचे दब जाते हैं। रेजिडेंट्स महत्वपूर्ण जानकारी मिस कर देते हैं।`
          },
            {
            icon: `🗂️`,
            title: `कोई संरचना या श्रेणियां नहीं`,
            desc: `फाइनेंस, इवेंट्स, और अर्जेंट अलर्ट सभी एक ही स्क्रॉल में मिल जाते हैं। पिछले हफ्ते का नोटिस ढूंढना नामुमकिन।`
          },
            {
            icon: `📵`,
            title: `डिलीवरी का कोई सबूत नहीं`,
            desc: `एडमिन को नहीं पता रेजिडेंट्स ने वाकई नोटिस पढ़ा या नहीं। विवाद होते हैं क्योंकि कोई दावा करता है उसे 'कभी मिला ही नहीं'।`
          },
          ],
      flows: [
            {
            icon: `✍️`,
            label: `एडमिन नोटिस लिखता है`,
            detail: `शीर्षक, मुख्य भाग डालें, और एक टैग चुनें: अर्जेंट / फाइनेंस / इवेंट / सामान्य / मेंटेनेंस।`
          },
            {
            icon: `📌`,
            label: `महत्वपूर्ण नोटिस पिन करें`,
            detail: `महत्वपूर्ण नोटिस (पानी कटौती, इमरजेंसी) बोर्ड के शीर्ष पर पिन किए जा सकते हैं ताकि वे हमेशा दिखें।`
          },
            {
            icon: `🔔`,
            label: `पुश नोटिफिकेशन तुरंत भेजा जाता है`,
            detail: `सभी रेजिडेंट्स को तुरंत पुश नोटिफिकेशन मिलता है। टैग नोटिफिकेशन ध्वनि और प्राथमिकता तय करता है।`
          },
            {
            icon: `📖`,
            label: `रेजिडेंट्स पढ़ते और स्वीकार करते हैं`,
            detail: `रेजिडेंट्स नोटिफिकेशन पर टैप करके नोटिस खोलते हैं। एडमिन प्रति नोटिस रीड-रसीद काउंट देख सकते हैं।`
          },
            {
            icon: `🗃️`,
            label: `नोटिस अपने आप आर्काइव होता है`,
            detail: `पुराने नोटिस आर्काइव में खोजने योग्य रहते हैं। रेजिडेंट्स कीवर्ड से खोज सकते हैं या टैग से फ़िल्टर कर सकते हैं।`
          },
          ],
      adminView: {
            title: `⚙️ एडमिन / कमेटी व्यू`,
            points: [
            `रिच टेक्स्ट के साथ नोटिस पोस्ट करें (बोल्ड, लिस्ट, लिंक)`,
            `5 टैग में से चुनें: अर्जेंट, फाइनेंस, इवेंट, सामान्य, मेंटेनेंस`,
            `बोर्ड के शीर्ष पर 3 तक नोटिस पिन करें`,
            `भविष्य की तारीख/समय पर पब्लिश होने के लिए नोटिस शेड्यूल करें`,
            `प्रति नोटिस रीड-रसीद काउंट देखें`,
            `पब्लिश करने के बाद नोटिस एडिट या डिलीट करें`,
          ]
          },
      residentView: {
            title: `👤 रेजिडेंट व्यू`,
            points: [
            `टैग कलर-कोडिंग के साथ सभी नोटिस देखें`,
            `पिन किए गए नोटिस हमेशा शीर्ष पर`,
            `टैग से नोटिस फ़िल्टर करें (फाइनेंस, इवेंट्स, आदि)`,
            `कीवर्ड से खोजने योग्य पूरा आर्काइव`,
            `नए नोटिस के लिए तुरंत पुश नोटिफिकेशन पाएं`,
            `WhatsApp या ईमेल से नोटिस साझा करें`,
          ]
          },
      features: [
            {
            icon: `🏷️`,
            title: `टैग किए गए नोटिस`,
            desc: `रंग कोड के साथ 5 स्टैंडर्ड टैग — अर्जेंट (लाल), फाइनेंस (एम्बर), इवेंट (टील), सामान्य (ग्रे), मेंटेनेंस (नीला)।`
          },
            {
            icon: `📌`,
            title: `पिन किए गए नोटिस`,
            desc: `सभी रेजिडेंट्स के लिए बोर्ड के शीर्ष पर स्थायी रूप से 3 तक महत्वपूर्ण नोटिस पिन करें।`
          },
            {
            icon: `📅`,
            title: `शेड्यूल्ड पब्लिशिंग`,
            desc: `अभी एक नोटिस लिखें, आज शाम 6 बजे पब्लिश होने के लिए सेट करें। ऑफ-आवर्स घोषणाओं के लिए परफेक्ट।`
          },
            {
            icon: `👁️`,
            title: `रीड रसीदें`,
            desc: `देखें कितने रेजिडेंट्स ने हर नोटिस खोला है। पहचानें किसने अर्जेंट अलर्ट नहीं पढ़ा।`
          },
            {
            icon: `🔍`,
            title: `खोजने योग्य आर्काइव`,
            desc: `अब तक पोस्ट किया गया हर नोटिस खोजने योग्य है। 3 महीने पहले का पानी का शेड्यूल सेकंडों में ढूंढें।`
          },
            {
            icon: `🌐`,
            title: `बहुभाषी नोटिस`,
            desc: `अंग्रेज़ी, हिंदी, गुजराती, या 6 समर्थित भाषाओं में से किसी में भी नोटिस पोस्ट करें। हर रेजिडेंट इसे अपनी पसंदीदा भाषा में देखता है।`
          },
          ],
      faqs: [
            {
            q: `क्या मैं हिंदी या गुजराती में नोटिस पोस्ट कर सकता हूं?`,
            a: `हां। आप SocietyApp की 6 समर्थित भाषाओं में से किसी में भी नोटिस लिख सकते हैं। जिन रेजिडेंट्स ने हिंदी को अपनी ऐप भाषा सेट किया है उन्हें हिंदी नोटिस दिखेंगे; अंग्रेज़ी पसंद वाले रेजिडेंट्स को अंग्रेज़ी दिखेगी। एडमिन पोस्ट करते समय भाषा चुनता है।`
          },
            {
            q: `क्या मैं कितने नोटिस पोस्ट कर सकता हूं इसकी कोई सीमा है?`,
            a: `कोई सीमा नहीं। अपनी सोसायटी की जरूरत के अनुसार जितने चाहें नोटिस पोस्ट करें। फ्री प्लान पर नोटिस 90 दिनों के बाद अपने आप आर्काइव हो जाते हैं, और पेड प्लान्स पर अनिश्चित काल तक रखे जाते हैं।`
          },
            {
            q: `क्या रेजिडेंट्स नोटिस पर जवाब दे सकते हैं या कमेंट कर सकते हैं?`,
            a: `स्टैंडर्ड प्लान और उससे ऊपर, रेजिडेंट्स इमोजी रिएक्शन (👍, ❤️, आदि) के साथ नोटिस पर रिएक्ट कर सकते हैं। चर्चाओं को व्यवस्थित रखने के लिए कमेंट्स/जवाब Pro प्लान पर उपलब्ध हैं।`
          },
            {
            q: `क्या कमेटी मेंबर्स नोटिस पोस्ट कर सकते हैं, या सिर्फ मुख्य एडमिन?`,
            a: `स्टैंडर्ड प्लान और उससे ऊपर, आप कमेटी मेंबर्स को 'नोटिस बोर्ड एडिटर' परमिशन दे सकते हैं ताकि वे स्वतंत्र रूप से नोटिस पोस्ट और मैनेज कर सकें।`
          },
          ],
      related: [
            {
            icon: `🎉`,
            title: `इवेंट्स और पोल्स`,
            href: `/features/events`,
            desc: `RSVP इवेंट्स, फोटो गैलरी, और रेजिडेंट पोल्स।`
          },
            {
            icon: `🛠️`,
            title: `समस्याएं और शिकायतें`,
            href: `/features/issues`,
            desc: `रेजिडेंट्स के लिए संरचित शिकायत जीवनचक्र।`
          },
            {
            icon: `🤝`,
            title: `कम्युनिटी हेल्प`,
            href: `/features/community-help`,
            desc: `पड़ोसी-से-पड़ोसी सर्विस मार्केटप्लेस।`
          },
          ],
      ctaHeadline: `अपनी सोसायटी को एक सही नोटिस बोर्ड दें।`,
      ctaSub: `नोटिस बोर्ड फ्री प्लान में शामिल है। किसी WhatsApp ग्रुप की जरूरत नहीं।`,
    },
    gu: {
      badge: `નોટિસ બોર્ડ`,
      emoji: `📢`,
      headline: `તમારા WhatsApp ગ્રુપને સ્પેમ કરવાનું બંધ કરો.`,
      headlineAccent: `નોટિસ જે ખરેખર વંચાય છે.`,
      subline: `ટેગ કરેલી, પુશ-ડિલિવર્ડ નોટિસ જે વ્યવસ્થિત રહે છે. તાત્કાલિક પાણી કાપ, ફાઈનાન્સ રિમાઈન્ડર, ઈવેન્ટ જાહેરાતો — દરેક પોતાની અલગ લેનમાં.`,
      problems: [
            {
            icon: `😵`,
            title: `નોટિસ WhatsApp ચેટ્સમાં ડૂબી જાય છે`,
            desc: `મહત્વપૂર્ણ પાણી કાપ નોટિસ ગુડ મોર્નિંગ મેસેજ અને ક્રિકેટ સ્કોર નીચે દબાઈ જાય છે. રહેવાસીઓ મહત્વપૂર્ણ માહિતી ચૂકી જાય છે.`
          },
            {
            icon: `🗂️`,
            title: `કોઈ માળખું કે શ્રેણીઓ નથી`,
            desc: `ફાઈનાન્સ, ઈવેન્ટ્સ, અને તાત્કાલિક અલર્ટ બધું એક જ સ્ક્રોલમાં ભળી જાય છે. ગયા અઠવાડિયાની નોટિસ શોધવી અશક્ય.`
          },
            {
            icon: `📵`,
            title: `ડિલિવરીનો કોઈ પુરાવો નથી`,
            desc: `એડમિનને ખબર નથી રહેવાસીઓએ ખરેખર નોટિસ વાંચી છે કે નહીં. વિવાદો થાય છે કારણ કે કોઈ દાવો કરે છે તેને 'ક્યારેય મળી જ નહોતી'.`
          },
          ],
      flows: [
            {
            icon: `✍️`,
            label: `એડમિન નોટિસ લખે છે`,
            detail: `શીર્ષક, મુખ્ય ભાગ દાખલ કરો, અને ટેગ પસંદ કરો: તાત્કાલિક / ફાઈનાન્સ / ઈવેન્ટ / સામાન્ય / મેઈન્ટેનન્સ.`
          },
            {
            icon: `📌`,
            label: `મહત્વપૂર્ણ નોટિસ પિન કરો`,
            detail: `મહત્વપૂર્ણ નોટિસ (પાણી કાપ, ઈમરજન્સી) બોર્ડની ટોચ પર પિન કરી શકાય જેથી તે હંમેશા દેખાય.`
          },
            {
            icon: `🔔`,
            label: `પુશ નોટિફિકેશન તરત મોકલાય છે`,
            detail: `બધા રહેવાસીઓને તરત પુશ નોટિફિકેશન મળે છે. ટેગ નોટિફિકેશન ધ્વનિ અને પ્રાથમિકતા નક્કી કરે છે.`
          },
            {
            icon: `📖`,
            label: `રહેવાસીઓ વાંચે છે અને સ્વીકારે છે`,
            detail: `રહેવાસીઓ નોટિફિકેશન પર ટેપ કરીને નોટિસ ખોલે છે. એડમિન પ્રતિ નોટિસ રીડ-રસીદ ગણતરી જોઈ શકે છે.`
          },
            {
            icon: `🗃️`,
            label: `નોટિસ ઓટોમેટિક આર્કાઈવ થાય છે`,
            detail: `જૂની નોટિસ આર્કાઈવમાં શોધી શકાય તેવી રહે છે. રહેવાસીઓ કીવર્ડથી શોધી શકે અથવા ટેગથી ફિલ્ટર કરી શકે.`
          },
          ],
      adminView: {
            title: `⚙️ એડમિન / કમિટી વ્યૂ`,
            points: [
            `રિચ ટેક્સ્ટ સાથે નોટિસ પોસ્ટ કરો (બોલ્ડ, લિસ્ટ, લિંક)`,
            `5 ટેગમાંથી પસંદ કરો: તાત્કાલિક, ફાઈનાન્સ, ઈવેન્ટ, સામાન્ય, મેઈન્ટેનન્સ`,
            `બોર્ડની ટોચ પર 3 સુધી નોટિસ પિન કરો`,
            `ભવિષ્યની તારીખ/સમયે પ્રકાશિત થવા નોટિસ શેડ્યુલ કરો`,
            `પ્રતિ નોટિસ રીડ-રસીદ ગણતરી જુઓ`,
            `પ્રકાશિત કર્યા પછી નોટિસ એડિટ અથવા ડિલીટ કરો`,
          ]
          },
      residentView: {
            title: `👤 રહેવાસી વ્યૂ`,
            points: [
            `ટેગ કલર-કોડિંગ સાથે બધી નોટિસ જુઓ`,
            `પિન કરેલી નોટિસ હંમેશા ટોચ પર`,
            `ટેગથી નોટિસ ફિલ્ટર કરો (ફાઈનાન્સ, ઈવેન્ટ્સ, વગેરે)`,
            `કીવર્ડથી શોધી શકાય તેવું પૂરું આર્કાઈવ`,
            `નવી નોટિસ માટે તરત પુશ નોટિફિકેશન મેળવો`,
            `WhatsApp અથવા ઈમેલ દ્વારા નોટિસ શેર કરો`,
          ]
          },
      features: [
            {
            icon: `🏷️`,
            title: `ટેગ કરેલી નોટિસ`,
            desc: `રંગ કોડ સાથે 5 સ્ટાન્ડર્ડ ટેગ — તાત્કાલિક (લાલ), ફાઈનાન્સ (એમ્બર), ઈવેન્ટ (ટીલ), સામાન્ય (ગ્રે), મેઈન્ટેનન્સ (વાદળી).`
          },
            {
            icon: `📌`,
            title: `પિન કરેલી નોટિસ`,
            desc: `બધા રહેવાસીઓ માટે બોર્ડની ટોચ પર કાયમ માટે 3 સુધી મહત્વપૂર્ણ નોટિસ પિન કરો.`
          },
            {
            icon: `📅`,
            title: `શેડ્યુલ્ડ પબ્લિશિંગ`,
            desc: `અત્યારે નોટિસ લખો, આજે સાંજે 6 વાગે પ્રકાશિત થવા સેટ કરો. ઓફ-અવર્સ જાહેરાતો માટે પરફેક્ટ.`
          },
            {
            icon: `👁️`,
            title: `રીડ રસીદો`,
            desc: `જુઓ કેટલા રહેવાસીઓએ દરેક નોટિસ ખોલી છે. ઓળખો કોણે તાત્કાલિક અલર્ટ નથી વાંચ્યું.`
          },
            {
            icon: `🔍`,
            title: `શોધી શકાય તેવું આર્કાઈવ`,
            desc: `અત્યાર સુધી પોસ્ટ થયેલી દરેક નોટિસ શોધી શકાય તેવી છે. 3 મહિના પહેલાનું પાણીનું શેડ્યુલ સેકન્ડોમાં શોધો.`
          },
            {
            icon: `🌐`,
            title: `બહુભાષી નોટિસ`,
            desc: `અંગ્રેજી, હિન્દી, ગુજરાતી, અથવા 6 સમર્થિત ભાષાઓમાંથી કોઈપણમાં નોટિસ પોસ્ટ કરો. દરેક રહેવાસી તેને પોતાની પસંદગીની ભાષામાં જુએ છે.`
          },
          ],
      faqs: [
            {
            q: `શું હું હિન્દી અથવા ગુજરાતીમાં નોટિસ પોસ્ટ કરી શકું?`,
            a: `હા. તમે SocietyApp ની 6 સમર્થિત ભાષાઓમાંથી કોઈપણમાં નોટિસ લખી શકો છો. જે રહેવાસીઓએ હિન્દીને તેમની એપ ભાષા સેટ કરી છે તેમને હિન્દી નોટિસ દેખાશે; અંગ્રેજી પસંદગીવાળા રહેવાસીઓને અંગ્રેજી દેખાશે. એડમિન પોસ્ટ કરતી વખતે ભાષા પસંદ કરે છે.`
          },
            {
            q: `શું હું કેટલી નોટિસ પોસ્ટ કરી શકું તેની કોઈ મર્યાદા છે?`,
            a: `કોઈ મર્યાદા નથી. તમારી સોસાયટીની જરૂરિયાત મુજબ જેટલી જોઈએ તેટલી નોટિસ પોસ્ટ કરો. ફ્રી પ્લાન પર નોટિસ 90 દિવસ પછી ઓટોમેટિક આર્કાઈવ થાય છે, અને પેઈડ પ્લાન્સ પર અમર્યાદિત સમય માટે રખાય છે.`
          },
            {
            q: `શું રહેવાસીઓ નોટિસનો જવાબ આપી શકે કે કમેન્ટ કરી શકે?`,
            a: `સ્ટાન્ડર્ડ પ્લાન અને તેથી ઉપર, રહેવાસીઓ ઈમોજી રિએક્શન (👍, ❤️, વગેરે) સાથે નોટિસ પર પ્રતિક્રિયા આપી શકે છે. ચર્ચાઓને વ્યવસ્થિત રાખવા કમેન્ટ્સ/જવાબો Pro પ્લાન પર ઉપલબ્ધ છે.`
          },
            {
            q: `શું કમિટી સભ્યો નોટિસ પોસ્ટ કરી શકે, કે ફક્ત મુખ્ય એડમિન?`,
            a: `સ્ટાન્ડર્ડ પ્લાન અને તેથી ઉપર, તમે કમિટી સભ્યોને 'નોટિસ બોર્ડ એડિટર' પરમિશન આપી શકો છો જેથી તેઓ સ્વતંત્ર રીતે નોટિસ પોસ્ટ અને મેનેજ કરી શકે.`
          },
          ],
      related: [
            {
            icon: `🎉`,
            title: `ઈવેન્ટ્સ અને પોલ્સ`,
            href: `/features/events`,
            desc: `RSVP ઈવેન્ટ્સ, ફોટો ગેલેરી, અને રહેવાસી પોલ્સ.`
          },
            {
            icon: `🛠️`,
            title: `સમસ્યાઓ અને ફરિયાદો`,
            href: `/features/issues`,
            desc: `રહેવાસીઓ માટે માળખાગત ફરિયાદ જીવનચક્ર.`
          },
            {
            icon: `🤝`,
            title: `કમ્યુનિટી હેલ્પ`,
            href: `/features/community-help`,
            desc: `પડોશી-થી-પડોશી સર્વિસ માર્કેટપ્લેસ.`
          },
          ],
      ctaHeadline: `તમારી સોસાયટીને યોગ્ય નોટિસ બોર્ડ આપો.`,
      ctaSub: `નોટિસ બોર્ડ ફ્રી પ્લાનમાં સામેલ છે. કોઈ WhatsApp ગ્રુપની જરૂર નથી.`,
    },
    ta: {
      badge: `நோட்டீஸ் போர்டு`,
      emoji: `📢`,
      headline: `உங்கள் WhatsApp குழுவை ஸ்பேம் செய்வதை நிறுத்துங்கள்.`,
      headlineAccent: `உண்மையிலேயே படிக்கப்படும் நோட்டீஸ்கள்.`,
      subline: `டேக் செய்யப்பட்ட, புஷ்-டெலிவரி செய்யப்பட்ட நோட்டீஸ்கள் ஒழுங்காக இருக்கும். அவசர தண்ணீர் தடை, நிதி நினைவூட்டல்கள், நிகழ்வு அறிவிப்புகள் — ஒவ்வொன்றும் அதனதன் தனி பாதையில்.`,
      problems: [
            {
            icon: `😵`,
            title: `WhatsApp அரட்டைகளில் நோட்டீஸ்கள் மூழ்கிவிடுகின்றன`,
            desc: `முக்கியமான தண்ணீர் தடை நோட்டீஸ்கள் காலை வணக்க செய்திகள் மற்றும் கிரிக்கெட் ஸ்கோர்களுக்கு அடியில் புதைந்துவிடுகின்றன. குடியிருப்பாளர்கள் முக்கியமான தகவலை தவறவிடுகிறார்கள்.`
          },
            {
            icon: `🗂️`,
            title: `கட்டமைப்பு அல்லது வகைகள் இல்லை`,
            desc: `நிதி, நிகழ்வுகள், மற்றும் அவசர எச்சரிக்கைகள் அனைத்தும் ஒரே ஸ்க்ரோலில் கலந்திருக்கின்றன. கடந்த வாரத்தின் நோட்டீஸை கண்டறிவது சாத்தியமில்லை.`
          },
            {
            icon: `📵`,
            title: `டெலிவரி ஆதாரம் இல்லை`,
            desc: `குடியிருப்பாளர்கள் உண்மையில் நோட்டீஸை படித்தார்களா என்று அட்மின்களுக்கு தெரியாது. யாராவது 'எனக்கு அது கிடைக்கவே இல்லை' என்று சொல்வதால் தகராறுகள் ஏற்படுகின்றன.`
          },
          ],
      flows: [
            {
            icon: `✍️`,
            label: `அட்மின் நோட்டீஸை எழுதுகிறார்`,
            detail: `தலைப்பு, உள்ளடக்கம் உள்ளிட்டு ஒரு டேக்கை தேர்வு செய்யவும்: அவசரம் / நிதி / நிகழ்வு / பொது / பராமரிப்பு.`
          },
            {
            icon: `📌`,
            label: `முக்கியமான நோட்டீஸ்களை பின் செய்யவும்`,
            detail: `முக்கியமான நோட்டீஸ்களை (தண்ணீர் தடை, அவசரம்) எப்போதும் காணக்கூடியதாக இருக்க போர்டின் மேலே பின் செய்யலாம்.`
          },
            {
            icon: `🔔`,
            label: `புஷ் அறிவிப்பு உடனடியாக அனுப்பப்படுகிறது`,
            detail: `அனைத்து குடியிருப்பாளர்களும் உடனடியாக ஒரு புஷ் அறிவிப்பை பெறுகிறார்கள். டேக் அறிவிப்பு ஒலி மற்றும் முன்னுரிமையை தீர்மானிக்கிறது.`
          },
            {
            icon: `📖`,
            label: `குடியிருப்பாளர்கள் படித்து ஒப்புக்கொள்கிறார்கள்`,
            detail: `குடியிருப்பாளர்கள் நோட்டீஸை திறக்க அறிவிப்பை தட்டுகிறார்கள். அட்மின்கள் ஒவ்வொரு நோட்டீஸிற்கும் படித்தவர்களின் எண்ணிக்கையை காணலாம்.`
          },
            {
            icon: `🗃️`,
            label: `நோட்டீஸ் தானாக காப்பகப்படுத்தப்படுகிறது`,
            detail: `கடந்த நோட்டீஸ்கள் காப்பகத்தில் தேடக்கூடியதாக இருக்கும். குடியிருப்பாளர்கள் முக்கிய வார்த்தை அல்லது டேக் மூலம் தேடலாம்.`
          },
          ],
      adminView: {
            title: `⚙️ அட்மின் / கமிட்டி காட்சி`,
            points: [
            `ரிச் டெக்ஸ்ட்டுடன் (போல்ட், லிஸ்ட், லிங்க்) நோட்டீஸ்களை பதிவிடவும்`,
            `5 டேக்குகளில் இருந்து தேர்வு செய்யவும்: அவசரம், நிதி, நிகழ்வு, பொது, பராமரிப்பு`,
            `3 நோட்டீஸ்கள் வரை போர்டின் மேலே பின் செய்யவும்`,
            `எதிர்கால தேதி/நேரத்தில் வெளியிட நோட்டீஸ்களை திட்டமிடவும்`,
            `ஒவ்வொரு நோட்டீஸிற்கும் படித்தவர்களின் எண்ணிக்கையை காணவும்`,
            `வெளியிட்ட பின் நோட்டீஸ்களை திருத்தவும் அல்லது நீக்கவும்`,
          ]
          },
      residentView: {
            title: `👤 குடியிருப்பாளர் காட்சி`,
            points: [
            `டேக் வண்ண-குறியீட்டுடன் அனைத்து நோட்டீஸ்களையும் காணவும்`,
            `பின் செய்யப்பட்ட நோட்டீஸ்கள் எப்போதும் மேலே இருக்கும்`,
            `டேக் மூலம் நோட்டீஸ்களை வடிகட்டவும் (நிதி, நிகழ்வுகள், போன்றவை)`,
            `முழு காப்பகமும் முக்கிய வார்த்தையால் தேடக்கூடியது`,
            `புதிய நோட்டீஸ்களுக்கு உடனடி புஷ் அறிவிப்பை பெறவும்`,
            `WhatsApp அல்லது மின்னஞ்சல் மூலம் நோட்டீஸை பகிரவும்`,
          ]
          },
      features: [
            {
            icon: `🏷️`,
            title: `டேக் செய்யப்பட்ட நோட்டீஸ்கள்`,
            desc: `வண்ண குறியீடுகளுடன் 5 நிலையான டேக்குகள் — அவசரம் (சிவப்பு), நிதி (அம்பர்), நிகழ்வு (டீல்), பொது (சாம்பல்), பராமரிப்பு (நீலம்).`
          },
            {
            icon: `📌`,
            title: `பின் செய்யப்பட்ட நோட்டீஸ்கள்`,
            desc: `அனைத்து குடியிருப்பாளர்களுக்காகவும் 3 முக்கியமான நோட்டீஸ்கள் வரை போர்டின் மேலே நிரந்தரமாக பின் செய்யவும்.`
          },
            {
            icon: `📅`,
            title: `திட்டமிடப்பட்ட வெளியீடு`,
            desc: `இப்போது ஒரு நோட்டீஸை எழுதி, இன்று மாலை 6 மணிக்கு வெளியிட அமைக்கவும். வேலை நேரத்திற்குப் பிந்தைய அறிவிப்புகளுக்கு சரியானது.`
          },
            {
            icon: `👁️`,
            title: `படித்த ரசீதுகள்`,
            desc: `எத்தனை குடியிருப்பாளர்கள் ஒவ்வொரு நோட்டீஸையும் திறந்திருக்கிறார்கள் என்பதை காணவும். அவசர எச்சரிக்கைகளை படிக்காதவர்களை கண்டறியவும்.`
          },
            {
            icon: `🔍`,
            title: `தேடக்கூடிய காப்பகம்`,
            desc: `இதுவரை பதிவிடப்பட்ட ஒவ்வொரு நோட்டீஸும் தேடக்கூடியது. 3 மாதங்களுக்கு முந்தைய தண்ணீர் அட்டவணையை வினாடிகளில் கண்டறியவும்.`
          },
            {
            icon: `🌐`,
            title: `பன்மொழி நோட்டீஸ்கள்`,
            desc: `ஆங்கிலம், இந்தி, குஜராத்தி, அல்லது ஆதரிக்கப்படும் 6 மொழிகளில் ஏதேனும் ஒன்றில் நோட்டீஸ்களை பதிவிடவும். ஒவ்வொரு குடியிருப்பாளரும் அவர்களின் விருப்ப மொழியில் அதை பார்க்கிறார்.`
          },
          ],
      faqs: [
            {
            q: `இந்தி அல்லது குஜராத்தியில் நோட்டீஸ்களை பதிவிட முடியுமா?`,
            a: `ஆம். SocietyApp ஆதரிக்கும் 6 மொழிகளில் ஏதேனும் ஒன்றில் நோட்டீஸ்களை எழுதலாம். இந்தியை தங்கள் ஆப் மொழியாக அமைத்த குடியிருப்பாளர்கள் இந்தி நோட்டீஸ்களை பார்ப்பார்கள்; ஆங்கில-விருப்ப குடியிருப்பாளர்கள் ஆங்கிலத்தை பார்ப்பார்கள். பதிவிடும்போது அட்மின் மொழியை தேர்வு செய்கிறார்.`
          },
            {
            q: `நான் எத்தனை நோட்டீஸ்களை பதிவிடலாம் என்பதற்கு வரம்பு உள்ளதா?`,
            a: `வரம்பு இல்லை. உங்கள் சொசைட்டிக்கு தேவையான அளவு நோட்டீஸ்களை பதிவிடலாம். ஃப்ரீ திட்டத்தில் 90 நாட்களுக்குப் பிறகு நோட்டீஸ்கள் தானாக காப்பகப்படுத்தப்படுகின்றன, கட்டண திட்டங்களில் காலவரம்பின்றி வைக்கப்படுகின்றன.`
          },
            {
            q: `குடியிருப்பாளர்கள் நோட்டீஸ்களுக்கு பதிலளிக்க அல்லது கருத்து தெரிவிக்க முடியுமா?`,
            a: `ஸ்டாண்டர்ட் திட்டம் மற்றும் அதற்கு மேல், குடியிருப்பாளர்கள் ஈமோஜி எதிர்வினைகளுடன் (👍, ❤️, போன்றவை) நோட்டீஸ்களுக்கு பதிலளிக்கலாம். விவாதங்களை ஒழுங்காக வைத்திருக்க Pro திட்டத்தில் கருத்துகள்/பதில்கள் கிடைக்கின்றன.`
          },
            {
            q: `கமிட்டி உறுப்பினர்கள் நோட்டீஸ்களை பதிவிடலாமா, அல்லது முதன்மை அட்மின் மட்டுமா?`,
            a: `ஸ்டாண்டர்ட் திட்டம் மற்றும் அதற்கு மேல், கமிட்டி உறுப்பினர்களுக்கு 'நோட்டீஸ் போர்டு எடிட்டர்' அனுமதியை வழங்கலாம், அதனால் அவர்கள் சுயாதீனமாக நோட்டீஸ்களை பதிவிட்டு நிர்வகிக்கலாம்.`
          },
          ],
      related: [
            {
            icon: `🎉`,
            title: `நிகழ்வுகள் & வாக்கெடுப்புகள்`,
            href: `/features/events`,
            desc: `RSVP நிகழ்வுகள், புகைப்பட கேலரிகள், மற்றும் குடியிருப்பாளர் வாக்கெடுப்புகள்.`
          },
            {
            icon: `🛠️`,
            title: `பிரச்சினைகள் & புகார்கள்`,
            href: `/features/issues`,
            desc: `குடியிருப்பாளர்களுக்கான கட்டமைக்கப்பட்ட புகார் வாழ்க்கை சுழற்சி.`
          },
            {
            icon: `🤝`,
            title: `கம்யூனிட்டி ஹெல்ப்`,
            href: `/features/community-help`,
            desc: `அண்டை வீட்டார்-க்கு-அண்டை வீட்டார் சேவை மார்க்கெட்பிளேஸ்.`
          },
          ],
      ctaHeadline: `உங்கள் சொசைட்டிக்கு ஒரு சரியான நோட்டீஸ் போர்டை கொடுங்கள்.`,
      ctaSub: `நோட்டீஸ் போர்டு ஃப்ரீ திட்டத்தில் சேர்க்கப்பட்டுள்ளது. WhatsApp குழு தேவையில்லை.`,
    },
  },
  "parking": {
    en: {
      badge: `Parking Management`,
      emoji: `🅿️`,
      headline: `Who parked in my spot?`,
      headlineAccent: `Never ask that question again.`,
      subline: `A complete vehicle and slot management system for residential societies. Register every vehicle, assign every slot, and handle visitor parking — all without a paper register.`,
      problems: [
            {
            icon: `🚗`,
            title: `Unknown vehicles in reserved slots`,
            desc: `Residents park in each other's designated spots. There's no easy way for the guard to know who the slot belongs to.`
          },
            {
            icon: `📋`,
            title: `Vehicle register is a paper notebook`,
            desc: `The society vehicle list is handwritten and out of date. When a new resident moves in, their car details aren't added for months.`
          },
            {
            icon: `🤷`,
            title: `Visitor parking has no system`,
            desc: `Visitors park wherever, blocking exits and driveways. Guards don't know who to call. Chaos ensues.`
          },
          ],
      flows: [
            {
            icon: `🚗`,
            label: `Resident registers vehicle`,
            detail: `Adds vehicle number, type (car/bike/commercial), make, model, and colour. Linked to their flat automatically.`
          },
            {
            icon: `🅿️`,
            label: `Admin assigns parking slot`,
            detail: `Admin assigns specific slot numbers to flats. If a flat has 2 vehicles, they get 2 slots.`
          },
            {
            icon: `✅`,
            label: `Guard verifies vehicle at entry`,
            detail: `Guard looks up vehicle number. App shows slot assignment and resident's name. Unknown vehicles flagged.`
          },
            {
            icon: `🔖`,
            label: `Visitor parking pass issued`,
            detail: `Guard issues a time-limited visitor parking pass (2–24 hours) linked to the host flat.`
          },
            {
            icon: `📊`,
            label: `Parking violation logged`,
            detail: `If a vehicle is in the wrong slot, guard logs a violation. Admin and resident notified immediately.`
          },
          ],
      adminView: {
            title: `⚙️ Admin / Committee View`,
            points: [
            `View complete vehicle registry with flat-to-vehicle mapping`,
            `Assign, reassign, or deactivate parking slots`,
            `Set limits on vehicles per flat`,
            `View all current visitor parking passes`,
            `Log and track parking violations`,
            `Export vehicle registry for security audit`,
          ]
          },
      residentView: {
            title: `👤 Resident View`,
            points: [
            `Register up to the flat's permitted number of vehicles`,
            `See their assigned slot number in the app`,
            `Request a visitor parking pass for guests`,
            `Get notified if a violation is logged against their slot`,
            `Update vehicle details when changing cars`,
            `View parking rules and visitor pass policy`,
          ]
          },
      features: [
            {
            icon: `🚗`,
            title: `Vehicle registry`,
            desc: `Flat-wise vehicle list with number, type, make, and model. Searchable by guard in seconds.`
          },
            {
            icon: `🅿️`,
            title: `Slot allocation`,
            desc: `Assign specific slot numbers to specific flats. Clear, digital record replaces paper register.`
          },
            {
            icon: `🔖`,
            title: `Visitor parking pass`,
            desc: `Timed passes (2h to 24h) for visitor vehicles, linked to host flat. Guard issues in 15 seconds.`
          },
            {
            icon: `⚠️`,
            title: `Violation logging`,
            desc: `Log wrong-slot or unauthorised parking with photo. Admin and violating resident notified.`
          },
            {
            icon: `📊`,
            title: `Occupancy dashboard`,
            desc: `See which slots are occupied, empty, or reserved at any moment. Helps guards manage overflow.`
          },
            {
            icon: `🔍`,
            title: `Instant vehicle lookup`,
            desc: `Guard types a plate number and instantly sees the flat, resident, and allocated slot.`
          },
          ],
      faqs: [
            {
            q: `Can the guard look up a vehicle number in real time?`,
            a: `Yes. The guard's app has a search bar — type the first 4 characters of a number plate and the vehicle's flat assignment and resident name appear instantly.`
          },
            {
            q: `What happens when a new resident moves in?`,
            a: `The new resident registers their vehicle during onboarding, or the admin adds it directly. The previous resident's vehicle is automatically removed when their profile is deactivated.`
          },
            {
            q: `Can I manage bicycle and commercial vehicle parking separately?`,
            a: `Yes. Vehicle type (car, bike, bicycle, commercial) is tracked separately. You can allocate different zones for each vehicle type.`
          },
            {
            q: `Is Parking Management available on the Free plan?`,
            a: `Parking Management is available from the Standard plan (₹2,999/month). Basic vehicle registration is available on Free.`
          },
          ],
      related: [
            {
            icon: `🚪`,
            title: `Visitor Management`,
            href: `/features/visitor-management`,
            desc: `Gate entry logging with OTP and walk-in flows.`
          },
            {
            icon: `🏊`,
            title: `Amenity Booking`,
            href: `/features/amenities`,
            desc: `Self-service booking for shared facilities.`
          },
            {
            icon: `🛠️`,
            title: `Issues & Complaints`,
            href: `/features/issues`,
            desc: `Track parking disputes from report to resolution.`
          },
          ],
      ctaHeadline: `A proper parking management system for your society.`,
      ctaSub: `Parking Management is available from the Standard plan. Free trial available.`,
    },
    hi: {
      badge: `पार्किंग मैनेजमेंट`,
      emoji: `🅿️`,
      headline: `मेरी जगह पर किसने पार्क किया?`,
      headlineAccent: `अब यह सवाल कभी मत पूछिए।`,
      subline: `रेजिडेंशियल सोसायटियों के लिए एक पूर्ण वाहन और स्लॉट मैनेजमेंट सिस्टम। हर वाहन रजिस्टर करें, हर स्लॉट असाइन करें, और विजिटर पार्किंग संभालें — पेपर रजिस्टर के बिना।`,
      problems: [
            {
            icon: `🚗`,
            title: `रिजर्व्ड स्लॉट्स में अनजान वाहन`,
            desc: `रेजिडेंट्स एक-दूसरे की निर्धारित जगहों में पार्क करते हैं। गार्ड के लिए यह जानने का कोई आसान तरीका नहीं कि स्लॉट किसका है।`
          },
            {
            icon: `📋`,
            title: `वाहन रजिस्टर एक पेपर नोटबुक है`,
            desc: `सोसायटी की वाहन लिस्ट हाथ से लिखी और पुरानी होती है। जब नया रेजिडेंट आता है, तो उसकी कार डिटेल्स महीनों तक नहीं जुड़ती।`
          },
            {
            icon: `🤷`,
            title: `विजिटर पार्किंग का कोई सिस्टम नहीं`,
            desc: `विजिटर्स जहां चाहें पार्क करते हैं, एग्जिट और ड्राइववे ब्लॉक करते हैं। गार्ड्स को नहीं पता किसे कॉल करें। अफरा-तफरी मच जाती है।`
          },
          ],
      flows: [
            {
            icon: `🚗`,
            label: `रेजिडेंट वाहन रजिस्टर करता है`,
            detail: `वाहन नंबर, प्रकार (कार/बाइक/कमर्शियल), मेक, मॉडल, और रंग जोड़ता है। अपने आप उनके फ्लैट से लिंक हो जाता है।`
          },
            {
            icon: `🅿️`,
            label: `एडमिन पार्किंग स्लॉट असाइन करता है`,
            detail: `एडमिन फ्लैट्स को खास स्लॉट नंबर असाइन करता है। अगर किसी फ्लैट में 2 वाहन हैं, तो उन्हें 2 स्लॉट मिलते हैं।`
          },
            {
            icon: `✅`,
            label: `गार्ड एंट्री पर वाहन वेरिफाई करता है`,
            detail: `गार्ड वाहन नंबर खोजता है। ऐप स्लॉट असाइनमेंट और रेजिडेंट का नाम दिखाता है। अनजान वाहन फ्लैग किए जाते हैं।`
          },
            {
            icon: `🔖`,
            label: `विजिटर पार्किंग पास जारी किया जाता है`,
            detail: `गार्ड होस्ट फ्लैट से लिंक एक समय-सीमित विजिटर पार्किंग पास (2–24 घंटे) जारी करता है।`
          },
            {
            icon: `📊`,
            label: `पार्किंग उल्लंघन लॉग होता है`,
            detail: `अगर कोई वाहन गलत स्लॉट में है, तो गार्ड एक उल्लंघन लॉग करता है। एडमिन और रेजिडेंट को तुरंत सूचित किया जाता है।`
          },
          ],
      adminView: {
            title: `⚙️ एडमिन / कमेटी व्यू`,
            points: [
            `फ्लैट-टू-व्हीकल मैपिंग के साथ पूरी वाहन रजिस्ट्री देखें`,
            `पार्किंग स्लॉट्स असाइन, पुनः असाइन, या निष्क्रिय करें`,
            `प्रति फ्लैट वाहनों की सीमा सेट करें`,
            `सभी मौजूदा विजिटर पार्किंग पास देखें`,
            `पार्किंग उल्लंघन लॉग और ट्रैक करें`,
            `सिक्योरिटी ऑडिट के लिए वाहन रजिस्ट्री एक्सपोर्ट करें`,
          ]
          },
      residentView: {
            title: `👤 रेजिडेंट व्यू`,
            points: [
            `फ्लैट की अनुमत वाहन संख्या तक रजिस्टर करें`,
            `ऐप में अपना असाइन किया गया स्लॉट नंबर देखें`,
            `मेहमानों के लिए विजिटर पार्किंग पास का अनुरोध करें`,
            `अगर उनके स्लॉट के खिलाफ उल्लंघन लॉग होता है तो सूचित हों`,
            `कार बदलते समय वाहन विवरण अपडेट करें`,
            `पार्किंग नियम और विजिटर पास नीति देखें`,
          ]
          },
      features: [
            {
            icon: `🚗`,
            title: `वाहन रजिस्ट्री`,
            desc: `नंबर, प्रकार, मेक, और मॉडल के साथ फ्लैट-वाइज वाहन लिस्ट। गार्ड द्वारा सेकंडों में खोजने योग्य।`
          },
            {
            icon: `🅿️`,
            title: `स्लॉट आवंटन`,
            desc: `खास फ्लैट्स को खास स्लॉट नंबर असाइन करें। स्पष्ट, डिजिटल रिकॉर्ड पेपर रजिस्टर की जगह लेता है।`
          },
            {
            icon: `🔖`,
            title: `विजिटर पार्किंग पास`,
            desc: `होस्ट फ्लैट से लिंक विजिटर वाहनों के लिए समयबद्ध पास (2घं से 24घं)। गार्ड 15 सेकंड में जारी करता है।`
          },
            {
            icon: `⚠️`,
            title: `उल्लंघन लॉगिंग`,
            desc: `फोटो के साथ गलत-स्लॉट या अनधिकृत पार्किंग लॉग करें। एडमिन और उल्लंघन करने वाले रेजिडेंट को सूचित किया जाता है।`
          },
            {
            icon: `📊`,
            title: `ऑक्युपेंसी डैशबोर्ड`,
            desc: `देखें कौन-से स्लॉट किसी भी समय कब्जे में, खाली, या रिजर्व्ड हैं। गार्ड्स को ओवरफ्लो मैनेज करने में मदद करता है।`
          },
            {
            icon: `🔍`,
            title: `तुरंत वाहन लुकअप`,
            desc: `गार्ड एक प्लेट नंबर टाइप करता है और तुरंत फ्लैट, रेजिडेंट, और आवंटित स्लॉट देखता है।`
          },
          ],
      faqs: [
            {
            q: `क्या गार्ड रियल टाइम में वाहन नंबर खोज सकता है?`,
            a: `हां। गार्ड के ऐप में एक सर्च बार है — नंबर प्लेट के पहले 4 अक्षर टाइप करें और वाहन का फ्लैट असाइनमेंट और रेजिडेंट का नाम तुरंत दिखाई देता है।`
          },
            {
            q: `नया रेजिडेंट आने पर क्या होता है?`,
            a: `नया रेजिडेंट ऑनबोर्डिंग के दौरान अपना वाहन रजिस्टर करता है, या एडमिन इसे सीधे जोड़ता है। पिछले रेजिडेंट का वाहन उनकी प्रोफाइल निष्क्रिय होने पर अपने आप हटा दिया जाता है।`
          },
            {
            q: `क्या मैं साइकिल और कमर्शियल वाहन पार्किंग अलग से मैनेज कर सकता हूं?`,
            a: `हां। वाहन प्रकार (कार, बाइक, साइकिल, कमर्शियल) अलग से ट्रैक किया जाता है। आप प्रत्येक वाहन प्रकार के लिए अलग जोन आवंटित कर सकते हैं।`
          },
            {
            q: `क्या पार्किंग मैनेजमेंट फ्री प्लान पर उपलब्ध है?`,
            a: `पार्किंग मैनेजमेंट स्टैंडर्ड प्लान (₹2,999/महीना) से उपलब्ध है। बेसिक वाहन रजिस्ट्रेशन फ्री पर उपलब्ध है।`
          },
          ],
      related: [
            {
            icon: `🚪`,
            title: `विजिटर मैनेजमेंट`,
            href: `/features/visitor-management`,
            desc: `OTP और वॉक-इन फ्लो के साथ गेट एंट्री लॉगिंग।`
          },
            {
            icon: `🏊`,
            title: `एमेनिटी बुकिंग`,
            href: `/features/amenities`,
            desc: `साझा सुविधाओं के लिए सेल्फ-सर्विस बुकिंग।`
          },
            {
            icon: `🛠️`,
            title: `समस्याएं और शिकायतें`,
            href: `/features/issues`,
            desc: `रिपोर्ट से समाधान तक पार्किंग विवादों को ट्रैक करें।`
          },
          ],
      ctaHeadline: `आपकी सोसायटी के लिए एक सही पार्किंग मैनेजमेंट सिस्टम।`,
      ctaSub: `पार्किंग मैनेजमेंट स्टैंडर्ड प्लान से उपलब्ध है। फ्री ट्रायल उपलब्ध है।`,
    },
    gu: {
      badge: `પાર્કિંગ મેનેજમેન્ટ`,
      emoji: `🅿️`,
      headline: `મારી જગ્યાએ કોણે પાર્ક કર્યું?`,
      headlineAccent: `હવે આ સવાલ ક્યારેય ન પૂછો.`,
      subline: `રેસિડેન્શિયલ સોસાયટીઓ માટે સંપૂર્ણ વાહન અને સ્લોટ મેનેજમેન્ટ સિસ્ટમ. દરેક વાહન રજિસ્ટર કરો, દરેક સ્લોટ ફાળવો, અને વિઝિટર પાર્કિંગ સંભાળો — પેપર રજિસ્ટર વગર.`,
      problems: [
            {
            icon: `🚗`,
            title: `રિઝર્વ્ડ સ્લોટ્સમાં અજાણ્યા વાહનો`,
            desc: `રહેવાસીઓ એકબીજાની નિર્ધારિત જગ્યાઓમાં પાર્ક કરે છે. ગાર્ડ માટે જાણવાનો કોઈ સરળ રસ્તો નથી કે સ્લોટ કોનું છે.`
          },
            {
            icon: `📋`,
            title: `વાહન રજિસ્ટર એક પેપર નોટબુક છે`,
            desc: `સોસાયટીની વાહન યાદી હાથે લખેલી અને જૂની છે. જ્યારે નવો રહેવાસી આવે છે, ત્યારે તેની કારની વિગતો મહિનાઓ સુધી ઉમેરાતી નથી.`
          },
            {
            icon: `🤷`,
            title: `વિઝિટર પાર્કિંગનું કોઈ સિસ્ટમ નથી`,
            desc: `વિઝિટર્સ જ્યાં ઈચ્છે ત્યાં પાર્ક કરે છે, એક્ઝિટ અને ડ્રાઈવવે બ્લોક કરે છે. ગાર્ડ્સને ખબર નથી કોને કોલ કરવો. અંધાધૂંધી થાય છે.`
          },
          ],
      flows: [
            {
            icon: `🚗`,
            label: `રહેવાસી વાહન રજિસ્ટર કરે છે`,
            detail: `વાહન નંબર, પ્રકાર (કાર/બાઈક/કમર્શિયલ), મેક, મોડેલ, અને રંગ ઉમેરે છે. આપમેળે તેમના ફ્લેટ સાથે લિંક થાય છે.`
          },
            {
            icon: `🅿️`,
            label: `એડમિન પાર્કિંગ સ્લોટ ફાળવે છે`,
            detail: `એડમિન ફ્લેટ્સને ચોક્કસ સ્લોટ નંબર ફાળવે છે. જો ફ્લેટમાં 2 વાહનો હોય, તો તેમને 2 સ્લોટ મળે છે.`
          },
            {
            icon: `✅`,
            label: `ગાર્ડ એન્ટ્રી પર વાહન વેરિફાય કરે છે`,
            detail: `ગાર્ડ વાહન નંબર શોધે છે. એપ સ્લોટ સોંપણી અને રહેવાસીનું નામ બતાવે છે. અજાણ્યા વાહનો ફ્લેગ થાય છે.`
          },
            {
            icon: `🔖`,
            label: `વિઝિટર પાર્કિંગ પાસ ઈશ્યૂ થાય છે`,
            detail: `ગાર્ડ હોસ્ટ ફ્લેટ સાથે લિંક થયેલ સમય-મર્યાદિત વિઝિટર પાર્કિંગ પાસ (2–24 કલાક) ઈશ્યૂ કરે છે.`
          },
            {
            icon: `📊`,
            label: `પાર્કિંગ ઉલ્લંઘન લોગ થાય છે`,
            detail: `જો કોઈ વાહન ખોટા સ્લોટમાં હોય, તો ગાર્ડ ઉલ્લંઘન લોગ કરે છે. એડમિન અને રહેવાસીને તરત જાણ થાય છે.`
          },
          ],
      adminView: {
            title: `⚙️ એડમિન / કમિટી વ્યૂ`,
            points: [
            `ફ્લેટ-ટુ-વ્હીકલ મેપિંગ સાથે સંપૂર્ણ વાહન રજિસ્ટ્રી જુઓ`,
            `પાર્કિંગ સ્લોટ્સ ફાળવો, ફરી ફાળવો, અથવા નિષ્ક્રિય કરો`,
            `પ્રતિ ફ્લેટ વાહનોની મર્યાદા સેટ કરો`,
            `બધા હાલના વિઝિટર પાર્કિંગ પાસ જુઓ`,
            `પાર્કિંગ ઉલ્લંઘન લોગ અને ટ્રેક કરો`,
            `સિક્યોરિટી ઓડિટ માટે વાહન રજિસ્ટ્રી એક્સપોર્ટ કરો`,
          ]
          },
      residentView: {
            title: `👤 રહેવાસી વ્યૂ`,
            points: [
            `ફ્લેટની મંજૂર વાહન સંખ્યા સુધી રજિસ્ટર કરો`,
            `એપમાં તેમનો સોંપાયેલ સ્લોટ નંબર જુઓ`,
            `મહેમાનો માટે વિઝિટર પાર્કિંગ પાસની વિનંતી કરો`,
            `જો તેમના સ્લોટ સામે ઉલ્લંઘન લોગ થાય તો જાણ થાય`,
            `કાર બદલતી વખતે વાહન વિગતો અપડેટ કરો`,
            `પાર્કિંગ નિયમો અને વિઝિટર પાસ નીતિ જુઓ`,
          ]
          },
      features: [
            {
            icon: `🚗`,
            title: `વાહન રજિસ્ટ્રી`,
            desc: `નંબર, પ્રકાર, મેક, અને મોડેલ સાથે ફ્લેટ-વાઈઝ વાહન યાદી. ગાર્ડ દ્વારા સેકન્ડોમાં શોધી શકાય તેવી.`
          },
            {
            icon: `🅿️`,
            title: `સ્લોટ ફાળવણી`,
            desc: `ચોક્કસ ફ્લેટ્સને ચોક્કસ સ્લોટ નંબર ફાળવો. સ્પષ્ટ, ડિજિટલ રેકોર્ડ પેપર રજિસ્ટરની જગ્યા લે છે.`
          },
            {
            icon: `🔖`,
            title: `વિઝિટર પાર્કિંગ પાસ`,
            desc: `હોસ્ટ ફ્લેટ સાથે લિંક થયેલ વિઝિટર વાહનો માટે સમયબદ્ધ પાસ (2કલા થી 24કલા). ગાર્ડ 15 સેકન્ડમાં ઈશ્યૂ કરે છે.`
          },
            {
            icon: `⚠️`,
            title: `ઉલ્લંઘન લોગિંગ`,
            desc: `ફોટો સાથે ખોટા-સ્લોટ અથવા અનધિકૃત પાર્કિંગ લોગ કરો. એડમિન અને ઉલ્લંઘન કરનાર રહેવાસીને જાણ થાય છે.`
          },
            {
            icon: `📊`,
            title: `ઓક્યુપન્સી ડેશબોર્ડ`,
            desc: `જુઓ કયા સ્લોટ કોઈપણ સમયે કબજામાં, ખાલી, અથવા રિઝર્વ્ડ છે. ગાર્ડ્સને ઓવરફ્લો મેનેજ કરવામાં મદદ કરે છે.`
          },
            {
            icon: `🔍`,
            title: `તરત વાહન લુકઅપ`,
            desc: `ગાર્ડ પ્લેટ નંબર ટાઈપ કરે છે અને તરત ફ્લેટ, રહેવાસી, અને ફાળવેલ સ્લોટ જુએ છે.`
          },
          ],
      faqs: [
            {
            q: `શું ગાર્ડ રિયલ ટાઈમમાં વાહન નંબર શોધી શકે?`,
            a: `હા. ગાર્ડની એપમાં સર્ચ બાર છે — નંબર પ્લેટના પહેલા 4 અક્ષર ટાઈપ કરો અને વાહનની ફ્લેટ સોંપણી અને રહેવાસીનું નામ તરત દેખાય છે.`
          },
            {
            q: `નવો રહેવાસી આવે ત્યારે શું થાય?`,
            a: `નવો રહેવાસી ઓનબોર્ડિંગ દરમિયાન પોતાનું વાહન રજિસ્ટર કરે છે, અથવા એડમિન તેને સીધું ઉમેરે છે. પાછલા રહેવાસીનું વાહન તેમની પ્રોફાઈલ નિષ્ક્રિય થાય ત્યારે આપમેળે દૂર થાય છે.`
          },
            {
            q: `શું હું સાયકલ અને કમર્શિયલ વાહન પાર્કિંગ અલગથી મેનેજ કરી શકું?`,
            a: `હા. વાહન પ્રકાર (કાર, બાઈક, સાયકલ, કમર્શિયલ) અલગથી ટ્રેક થાય છે. તમે દરેક વાહન પ્રકાર માટે અલગ ઝોન ફાળવી શકો છો.`
          },
            {
            q: `શું પાર્કિંગ મેનેજમેન્ટ ફ્રી પ્લાન પર ઉપલબ્ધ છે?`,
            a: `પાર્કિંગ મેનેજમેન્ટ સ્ટાન્ડર્ડ પ્લાન (₹2,999/મહિનો) થી ઉપલબ્ધ છે. બેઝિક વાહન રજિસ્ટ્રેશન ફ્રી પર ઉપલબ્ધ છે.`
          },
          ],
      related: [
            {
            icon: `🚪`,
            title: `વિઝિટર મેનેજમેન્ટ`,
            href: `/features/visitor-management`,
            desc: `OTP અને વોક-ઈન ફ્લો સાથે ગેટ એન્ટ્રી લોગિંગ.`
          },
            {
            icon: `🏊`,
            title: `એમેનિટી બુકિંગ`,
            href: `/features/amenities`,
            desc: `શેર કરેલી સુવિધાઓ માટે સેલ્ફ-સર્વિસ બુકિંગ.`
          },
            {
            icon: `🛠️`,
            title: `સમસ્યાઓ અને ફરિયાદો`,
            href: `/features/issues`,
            desc: `રિપોર્ટથી ઉકેલ સુધી પાર્કિંગ વિવાદો ટ્રેક કરો.`
          },
          ],
      ctaHeadline: `તમારી સોસાયટી માટે યોગ્ય પાર્કિંગ મેનેજમેન્ટ સિસ્ટમ.`,
      ctaSub: `પાર્કિંગ મેનેજમેન્ટ સ્ટાન્ડર્ડ પ્લાનથી ઉપલબ્ધ છે. ફ્રી ટ્રાયલ ઉપલબ્ધ છે.`,
    },
  },
};

// ─── Accessor with EN fallback ──────────────────────────────────────────────

export function getFeatureContent(
  slug: FeaturePageSlug,
  locale: Locale
): FeaturePageContent {
  const page = content[slug];
  // TA / MR / PA fall back to EN until translations are added
  return (page[locale] ?? page['en']) as FeaturePageContent;
}