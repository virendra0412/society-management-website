// lib/i18n/content/features/maintenance.ts
// Per-locale content for the "maintenance" feature page.
import type { FeaturePageContent } from '../types';
import type { Locale } from '../../translations';

const maintenance: Partial<Record<Locale, FeaturePageContent>> = {

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
    mr: {
      badge: `देखभाल आणि बिलिंग`,
      emoji: `💸`,
      headline: `WhatsApp पेमेंटचा पाठपुरावा थांबवा.`,
      headlineAccent: `मासिक बिलिंग आता व्यवस्थित.`,
      subline: `स्वयंचलित बिल तयार करा, देयता ट्रॅक करा आणि रहिवाशांना डिजिटल पावत्या द्या.`,
      problems: [{ icon: `📱`, title: `WhatsApp मधील UPI स्क्रीनशॉट`, desc: `राहणारे पेमेंट स्क्रीनशॉट पाठवतात आणि पावत्या नसतात.` }],
      flows: [{ icon: `📋`, label: `अॅडमिन बिल तयार करतो`, detail: `बिल नाव, रक्कम आणि देय दिनांक भरून बिल तयार करा.` }],
      adminView: { title: `⚙️ अॅडमिन / सचिव दृश्य`, points: [`बिल तयार करा`, `राहणाऱ्यांना सूचना पाठवा`] },
      residentView: { title: `👤 रहिवासी दृश्य`, points: [`बिल पहा`, `देयता ट्रॅक करा`] },
      features: [{ icon: `🔄`, title: `स्वयंचलित बिलिंग`, desc: `मासिक बिल्स आपोआप तयार होतात.` }],
      faqs: [{ q: `हे कसे कार्य करते?`, a: `बिल तयार करून रहिवाशांना पाठवा आणि देयता ट्रॅक करा.` }],
      related: [{ icon: `🚪`, title: `विजिटर मॅनेजमेंट`, href: `/features/visitor-management`, desc: `गेट प्रवेश आणि सुरक्षा.` }],
      ctaHeadline: `WhatsApp स्क्रीनशॉटऐवजी योग्य बिलिंग वापरा.`,
      ctaSub: `मूलभूत देखभाल बिलिंग विनामूल्य प्लॅनमध्ये समाविष्ट आहे.`,
    },
    pa: {
      badge: `ਮੈਂਟੇਨੈਂਸ ਅਤੇ ਬਿਲਿੰਗ`,
      emoji: `💸`,
      headline: `WhatsApp ਭੁਗਤਾਨ ਦੀ ਮਾਰਾਮਾਰੀ ਖਤਮ ਕਰੋ.`,
      headlineAccent: `ਮਾਸਿਕ ਬਿਲਿੰਗ ਹੁਣ ਸੰਗਠਿਤ ਹੈ.`,
      subline: `ਆਟੋ-ਜਨਰੇਟ ਕੀਤੇ ਬਿਲਾਂ, ਦੇਣੀਆਂ ਦਾ ਟਰੈਕ, ਅਤੇ ਰਿਹਾਇਸ਼ੀ ਲਈ ਡਿਜ਼ਿਟਲ ਰਸੀਦਾਂ.`,
      problems: [{ icon: `📱`, title: `WhatsApp ਵਿੱਚ UPI ਸਕ੍ਰੀਨਸ਼ੌਟ`, desc: `ਰਿਹਾਇਸ਼ੀ ਭੁਗਤਾਨ ਸਕ੍ਰੀਨਸ਼ੌਟ ਭੇਜਦੇ ਹਨ ਅਤੇ ਕੋਈ ਰਸੀਦ ਨਹੀਂ.` }],
      flows: [{ icon: `📋`, label: `ਐਡਮਿਨ ਬਿਲ ਬਣਾਉਂਦਾ ਹੈ`, detail: `ਬਿਲ ਦਾ ਨਾਂ, ਰਕਮ ਅਤੇ ਡਿਊ ਡੇਟ ਭਰੋ.` }],
      adminView: { title: `⚙️ ਐਡਮਿਨ / ਸੈਕਰਟਰੀ ਦ੍ਰਿਸ਼`, points: [`ਬਿਲ ਬਣਾਓ`, `ਰਿਹਾਇਸ਼ੀ ਨੂੰ ਨੋਟੀਫਿਕੇਸ਼ਨ ਭੇਜੋ`] },
      residentView: { title: `👤 ਰਿਹਾਇਸ਼ੀ ਦ੍ਰਿਸ਼`, points: [`ਬਿਲ ਦੇਖੋ`, `ਭੁਗਤਾਨ ਟਰੈਕ ਕਰੋ`] },
      features: [{ icon: `🔄`, title: `ਆਟੋ ਬਿਲਿੰਗ`, desc: `ਮਾਸਿਕ ਬਿਲ ਆਪਣੇ-ਆਪ ਬਣਦੇ ਹਨ.` }],
      faqs: [{ q: `ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ?`, a: `ਬਿਲ ਬਣਾਓ ਅਤੇ ਰਿਹਾਇਸ਼ੀ ਨੂੰ ਭੇਜੋ.` }],
      related: [{ icon: `🚪`, title: `ਵਿਜ਼ਿਟਰ ਮੈਨਿਜਮੈਂਟ`, href: `/features/visitor-management`, desc: `ਗੇਟ ਐਂਟਰੀ ਅਤੇ ਸੁਰੱਖਿਆ.` }],
      ctaHeadline: `WhatsApp ਸਕ੍ਰੀਨਸ਼ੌਟ ਦੀ ਬਜਾਏ ਸਹੀ ਬਿਲਿੰਗ ਵਰਤੋ.`,
      ctaSub: `ਮੁ basic ਮੈਨਟੇਨੈਂਸ ਬਿਲਿੰਗ ਮੁਫ਼ਤ ਪਲਾਨ ਵਿੱਚ ਸ਼ਾਮਲ ਹੈ.`,
    },
};

export default maintenance;
