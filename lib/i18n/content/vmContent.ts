// lib/i18n/content/vmContent.ts
// Visitor Management locale content.
// EN + HI: fully translated. GU/TA/MR/PA: hero strings translated, content falls back to EN.

import type { Locale } from '../translations';

export interface VMStep { icon: string; label: string; detail: string; }
export interface VMFlow { id: string; emoji: string; title: string; subtitle: string; steps: VMStep[]; }
export interface VMGuardFeature { icon: string; label: string; detail: string; }
export interface VMFeature { icon: string; title: string; desc: string; }
export interface VMFaq { q: string; a: string; }
export interface VMRelated { icon: string; title: string; href: string; desc: string; }
export interface VMProblem { icon: string; title: string; desc: string; }

export interface VMContent {
  badge: string; hero_headline: string; hero_accent: string; hero_sub: string;
  hero_note: string; hero_log_title: string; hero_log_sub: string;
  problem_headline: string; problem_sub: string;
  flows_badge: string; flows_headline: string; flows_sub: string;
  guard_badge: string; guard_headline: string; guard_sub: string;
  features_headline: string; faq_headline: string; related_headline: string;
  cta_headline: string; cta_sub: string; cta_setup: string; cta_compare: string;
  problems: VMProblem[]; flows: VMFlow[]; guard_features: VMGuardFeature[];
  features: VMFeature[]; faqs: VMFaq[]; related: VMRelated[];
}

const content: Partial<Record<Locale, VMContent>> = {
  en: {
    badge: `Visitor Management`,
    hero_headline: `Know exactly who enters your society`,
    hero_accent: `before they walk in.`,
    hero_sub: `4 smart flows covering every visitor scenario. Works entirely on smartphones - no hardware, no QR scanners, no installation costs.`,
    hero_note: `Every entry logged with timestamp. Cloud audit trail. Zero per-unit hardware cost.`,
    hero_log_title: `Gate Entry Log`,
    hero_log_sub: `Live Today`,
    problem_headline: `The problem with today's gate entry`,
    problem_sub: `Most Indian societies still rely on paper registers, WhatsApp calls, or no process at all.`,
    flows_badge: `4 Visitor Flows`,
    flows_headline: `Every visitor scenario, covered`,
    flows_sub: `From pre-planned visits to unannounced deliveries. SocietyApp handles every case with a purpose-built flow.`,
    guard_badge: `Security Guard View`,
    guard_headline: `One app for the guard, too`,
    guard_sub: `The guard uses the exact same SocietyApp. No separate device, no training cost, no hardware install.`,
    features_headline: `What makes it powerful`,
    faq_headline: `Visitor Management FAQ`,
    related_headline: `Related Modules`,
    cta_headline: `Set up visitor management in under 5 minutes`,
    cta_sub: `Free forever for societies up to 50 units. No credit card. No hardware.`,
    cta_setup: `Set Up in 5 Minutes - Free`,
    cta_compare: `Compare Plans`,
    problems: [
      {
        icon: `📓`,
        title: `Paper registers at gate`,
        desc: `No searchability, no timestamps, easy to fake. Lost during guard handovers.`,
      },
      {
        icon: `📱`,
        title: `WhatsApp chaos`,
        desc: `Guard calls resident, resident misses call, visitor waits. No audit trail at all.`,
      },
      {
        icon: `🖥️`,
        title: `Hardware is expensive`,
        desc: `QR scanners and RFID readers cost Rs.15,000-50,000 per gate plus annual maintenance.`,
      },
    ],
    flows: [
      {
        id: `A`,
        emoji: `📨`,
        title: `Pre-Approved Invite`,
        subtitle: `Resident sends OTP before visitor arrives`,
        steps: [
          {
            icon: `📱`,
            label: `Resident creates invite`,
            detail: `Opens app, goes to Visitors then Invite. Fills visitor name, phone, purpose and expected arrival time.`,
          },
          {
            icon: `🔢`,
            label: `OTP generated`,
            detail: `Backend generates a 6-digit OTP valid for 24 hours or 2 hours after expected arrival.`,
          },
          {
            icon: `💬`,
            label: `OTP shared with visitor`,
            detail: `Resident shares OTP via WhatsApp or SMS. Visitor arrives and quotes OTP at the gate.`,
          },
          {
            icon: `✅`,
            label: `Guard verifies and logs entry`,
            detail: `Guard enters OTP in app, backend validates, entry timestamp recorded automatically.`,
          },
          {
            icon: `🚶`,
            label: `Guard marks exit`,
            detail: `When visitor leaves, guard taps Exit. Full audit trail stored in the cloud.`,
          },
        ],
      },
      {
        id: `B`,
        emoji: `🚶`,
        title: `Walk-In`,
        subtitle: `Guard logs an unannounced visitor`,
        steps: [
          {
            icon: `🛡️`,
            label: `Guard logs walk-in`,
            detail: `Guard opens app, taps Log Walk-In, enters visitor name and host flat number.`,
          },
          {
            icon: `🔔`,
            label: `Push notification fires`,
            detail: `Resident gets an instant push notification: Someone is at the gate asking for you.`,
          },
          {
            icon: `👍`,
            label: `Resident approves or rejects`,
            detail: `Resident taps Approve or Reject from their phone - no need to go to the gate.`,
          },
          {
            icon: `📋`,
            label: `Entry or denial recorded`,
            detail: `Decision logged with timestamp. Rejected visitors recorded for security review.`,
          },
          {
            icon: `🚶`,
            label: `Guard marks exit`,
            detail: `Exit logged when visitor leaves. Complete visitor lifecycle captured.`,
          },
        ],
      },
      {
        id: `C`,
        emoji: `🏠`,
        title: `Trusted Visitors`,
        subtitle: `Maids, cooks and drivers with standing passes`,
        steps: [
          {
            icon: `📝`,
            label: `Resident registers trusted visitor`,
            detail: `Adds name, category (maid, cook or driver), and pass type: daily, monthly, or permanent.`,
          },
          {
            icon: `🗓️`,
            label: `Optional schedule set`,
            detail: `Resident restricts access to specific days and time windows, e.g. Mon-Fri, 8-10 AM.`,
          },
          {
            icon: `✅`,
            label: `Guard auto-approves`,
            detail: `Guard looks up visitor by name or phone. Backend checks schedule and auto-approves silently.`,
          },
          {
            icon: `📊`,
            label: `Daily digest sent`,
            detail: `Resident gets one push at 9 PM with all trusted visitor entries that day, not per-visit noise.`,
          },
          {
            icon: `🚫`,
            label: `Resident can revoke anytime`,
            detail: `One tap to expire the pass. Auto-expiry reminder sent 3 days before monthly passes end.`,
          },
        ],
      },
      {
        id: `D`,
        emoji: `📦`,
        title: `Delivery`,
        subtitle: `Auto-exit timer for couriers and parcels`,
        steps: [
          {
            icon: `📦`,
            label: `Guard logs delivery walk-in`,
            detail: `Same as Walk-In flow but purpose is set to Delivery. Resident notified immediately.`,
          },
          {
            icon: `⏱️`,
            label: `Auto-exit timer starts`,
            detail: `On approval, a 15-minute countdown begins automatically. No manual exit needed.`,
          },
          {
            icon: `🤖`,
            label: `System auto-exits`,
            detail: `A cron job runs every 5 minutes and exits delivery visitors past their timer.`,
          },
          {
            icon: `🚪`,
            label: `Guard can exit early`,
            detail: `If courier leaves before 15 minutes, guard can tap early exit at any time.`,
          },
        ],
      },
    ],
    guard_features: [
      {
        icon: `📲`,
        label: `No separate device`,
        detail: `Guard uses the same SocietyApp - no QR scanners or hardware terminals needed.`,
      },
      {
        icon: `🔢`,
        label: `OTP verify screen`,
        detail: `Tap Verify OTP, enter 6 digits, see visitor details and approve in one tap.`,
      },
      {
        icon: `📋`,
        label: `Walk-in form`,
        detail: `Name plus host flat - takes under 15 seconds. Autocomplete on known flats.`,
      },
      {
        icon: `🏷️`,
        label: `Trusted pass check-in`,
        detail: `Search by name or phone. Pass validity shown instantly with schedule.`,
      },
    ],
    features: [
      {
        icon: `☁️`,
        title: `Cloud audit trail`,
        desc: `Every entry with timestamp, guard name, resident approval, and visitor photo (optional). Tamper-evident.`,
      },
      {
        icon: `📵`,
        title: `Zero hardware`,
        desc: `No QR scanners. No RFID cards. No installation. Guard uses the same phone they already carry.`,
      },
      {
        icon: `🔒`,
        title: `OTP expiry control`,
        desc: `OTPs expire after 24h or 2h post-expected arrival. Residents can cancel invites anytime.`,
      },
      {
        icon: `📅`,
        title: `Schedule-based passes`,
        desc: `Trusted visitors auto-approved only on allowed days and time windows.`,
      },
      {
        icon: `🔔`,
        title: `Instant push alerts`,
        desc: `Resident notified in under 2 seconds when a visitor is logged at the gate.`,
      },
      {
        icon: `📊`,
        title: `Full gate reports`,
        desc: `Export daily, weekly, or monthly gate logs. Filter by visitor type, guard, or flat.`,
      },
    ],
    faqs: [
      {
        q: `Does the security guard need a separate app or device?`,
        a: `No. The guard uses the same SocietyApp as residents and admins. Any Android or iOS smartphone works. No additional hardware required.`,
      },
      {
        q: `What happens if a visitor's OTP expires?`,
        a: `The guard sees an OTP expired message. The resident simply generates a new invite. Expired OTPs are automatically logged for the audit trail.`,
      },
      {
        q: `Can I set specific timings for my maid's entry?`,
        a: `Yes. When registering a trusted visitor, set allowed days and time windows such as Mon-Fri, 8-10 AM. Outside these hours the check-in is blocked.`,
      },
      {
        q: `Is visitor data stored securely?`,
        a: `All visitor logs are stored in encrypted cloud storage. Only admins and the relevant resident can view visitor history. Data is never shared with third parties.`,
      },
      {
        q: `Can I see who approved and who rejected entries?`,
        a: `Yes. The gate log shows the approving resident, the guard who logged the entry, timestamps, and the visitor purpose - a complete audit trail.`,
      },
    ],
    related: [
      {
        icon: `🛡️`,
        title: `Security Guard Portal`,
        href: `/features`,
        desc: `Dedicated UX for guard shift management and handover.`,
      },
      {
        icon: `💸`,
        title: `Maintenance & Billing`,
        href: `/features/maintenance`,
        desc: `Auto-generate monthly bills and track payment status.`,
      },
      {
        icon: `📢`,
        title: `Notice Board`,
        href: `/features/notices`,
        desc: `Push tagged notices to all residents in seconds.`,
      },
    ],
  },
  hi: {
    badge: `विजिटर मैनेजमेंट`,
    hero_headline: `जानें कौन आपकी सोसायटी में प्रवेश कर रहा है`,
    hero_accent: `आने से पहले।`,
    hero_sub: `हर विजिटर परिदृश्य को कवर करने वाले 4 स्मार्ट फ्लो। पूरी तरह स्मार्टफोन पर - कोई हार्डवेयर नहीं।`,
    hero_note: `हर एंट्री टाइमस्टैम्प के साथ लॉग। क्लाउड ऑडिट ट्रेल। शून्य हार्डवेयर लागत।`,
    hero_log_title: `गेट एंट्री लॉग`,
    hero_log_sub: `लाइव आज`,
    problem_headline: `आज के गेट एंट्री की समस्या`,
    problem_sub: `अधिकांश भारतीय सोसायटियां अभी भी पेपर रजिस्टर और WhatsApp कॉल पर निर्भर हैं।`,
    flows_badge: `4 विजिटर फ्लो`,
    flows_headline: `हर विजिटर परिदृश्य, कवर किया गया`,
    flows_sub: `पूर्व-नियोजित यात्राओं से अचानक डिलीवरी तक - SocietyApp हर मामला उद्देश्य-निर्मित फ्लो से संभालता है।`,
    guard_badge: `सिक्योरिटी गार्ड व्यू`,
    guard_headline: `गार्ड के लिए भी एक ही ऐप`,
    guard_sub: `गार्ड वही SocietyApp इस्तेमाल करता है। कोई अलग डिवाइस नहीं, कोई हार्डवेयर इंस्टॉल नहीं।`,
    features_headline: `क्या इसे शक्तिशाली बनाता है`,
    faq_headline: `विजिटर मैनेजमेंट FAQ`,
    related_headline: `संबंधित मॉड्यूल`,
    cta_headline: `5 मिनट से कम में विजिटर मैनेजमेंट सेट करें`,
    cta_sub: `50 यूनिट तक हमेशा मुफ्त। कोई क्रेडिट कार्ड नहीं। कोई हार्डवेयर नहीं।`,
    cta_setup: `5 मिनट में सेट अप करें - मुफ्त`,
    cta_compare: `प्लान तुलना करें`,
    problems: [
      {
        icon: `📓`,
        title: `गेट पर पेपर रजिस्टर`,
        desc: `कोई खोज नहीं, कोई टाइमस्टैम्प नहीं, आसानी से नकली। गार्ड हैंडओवर में खो जाता है।`,
      },
      {
        icon: `📱`,
        title: `WhatsApp की अफरा-तफरी`,
        desc: `गार्ड कॉल करे, रेजिडेंट मिस करे, विजिटर इंतजार करे। कोई ऑडिट ट्रेल नहीं।`,
      },
      {
        icon: `🖥️`,
        title: `हार्डवेयर महंगा है`,
        desc: `QR स्कैनर 15,000 से 50,000 रुपये प्रति गेट और वार्षिक रखरखाव।`,
      },
    ],
    flows: [
      {
        id: `A`,
        emoji: `📨`,
        title: `प्री-अप्रूव्ड इन्वाइट`,
        subtitle: `रेजिडेंट विजिटर के आने से पहले OTP भेजता है`,
        steps: [
          {
            icon: `📱`,
            label: `रेजिडेंट इन्वाइट बनाता है`,
            detail: `ऐप खोलता है, विजिटर नाम, फोन, उद्देश्य और अपेक्षित आगमन समय भरता है।`,
          },
          {
            icon: `🔢`,
            label: `OTP जनरेट होता है`,
            detail: `24 घंटे या अपेक्षित आगमन के 2 घंटे बाद तक वैध 6-अंकीय OTP बनता है।`,
          },
          {
            icon: `💬`,
            label: `OTP विजिटर को साझा होता है`,
            detail: `रेजिडेंट WhatsApp या SMS से OTP साझा करता है। विजिटर गेट पर OTP बताता है।`,
          },
          {
            icon: `✅`,
            label: `गार्ड वेरिफाई करता और एंट्री लॉग करता है`,
            detail: `गार्ड OTP दर्ज करता है, बैकएंड वेलिडेट करता है, एंट्री टाइमस्टैम्प अपने आप दर्ज।`,
          },
          {
            icon: `🚶`,
            label: `गार्ड एग्जिट मार्क करता है`,
            detail: `विजिटर के जाने पर गार्ड Exit टैप करता है। क्लाउड में पूरा ऑडिट ट्रेल।`,
          },
        ],
      },
      {
        id: `B`,
        emoji: `🚶`,
        title: `वॉक-इन`,
        subtitle: `गार्ड अचानक आए विजिटर को लॉग करता है`,
        steps: [
          {
            icon: `🛡️`,
            label: `गार्ड वॉक-इन लॉग करता है`,
            detail: `ऐप खोलता है, विजिटर नाम और होस्ट फ्लैट नंबर भरता है।`,
          },
          {
            icon: `🔔`,
            label: `पुश नोटिफिकेशन भेजता है`,
            detail: `रेजिडेंट को तुरंत पुश मिलता है: गेट पर कोई आपसे मिलना चाहता है।`,
          },
          {
            icon: `👍`,
            label: `रेजिडेंट अप्रूव या रिजेक्ट करता है`,
            detail: `रेजिडेंट फोन से Approve या Reject टैप करता है, गेट पर जाने की जरूरत नहीं।`,
          },
          {
            icon: `📋`,
            label: `एंट्री या अस्वीकृति दर्ज होती है`,
            detail: `निर्णय टाइमस्टैम्प के साथ लॉग होता है। अस्वीकृत विजिटर सिक्योरिटी समीक्षा में दर्ज।`,
          },
          {
            icon: `🚶`,
            label: `गार्ड एग्जिट मार्क करता है`,
            detail: `विजिटर के जाने पर एग्जिट लॉग। पूरा विजिटर जीवनचक्र कैप्चर।`,
          },
        ],
      },
      {
        id: `C`,
        emoji: `🏠`,
        title: `ट्रस्टेड विजिटर्स`,
        subtitle: `स्थायी पास वाले नौकरानी, कुक और ड्राइवर`,
        steps: [
          {
            icon: `📝`,
            label: `रेजिडेंट ट्रस्टेड विजिटर रजिस्टर करता है`,
            detail: `नाम, श्रेणी जैसे नौकरानी, कुक या ड्राइवर, और पास टाइप: दैनिक, मासिक, या स्थायी।`,
          },
          {
            icon: `🗓️`,
            label: `वैकल्पिक शेड्यूल सेट`,
            detail: `रेजिडेंट खास दिन और समय विंडो तक एक्सेस प्रतिबंधित कर सकता है।`,
          },
          {
            icon: `✅`,
            label: `गार्ड ऑटो-अप्रूव करता है`,
            detail: `गार्ड नाम या फोन से खोजता है। बैकएंड शेड्यूल जांचकर चुपचाप ऑटो-अप्रूव करता है।`,
          },
          {
            icon: `📊`,
            label: `डेली डाइजेस्ट भेजा जाता है`,
            detail: `रेजिडेंट को रात 9 बजे उस दिन के सभी ट्रस्टेड एंट्री का एक पुश मिलता है।`,
          },
          {
            icon: `🚫`,
            label: `रेजिडेंट कभी भी रद्द कर सकता है`,
            detail: `पास एक्सपायर करने के लिए एक टैप। मासिक पास से 3 दिन पहले ऑटो-रिमाइंडर।`,
          },
        ],
      },
      {
        id: `D`,
        emoji: `📦`,
        title: `डिलीवरी`,
        subtitle: `कूरियर और पार्सल के लिए ऑटो-एग्जिट टाइमर`,
        steps: [
          {
            icon: `📦`,
            label: `गार्ड डिलीवरी वॉक-इन लॉग करता है`,
            detail: `वॉक-इन जैसा लेकिन उद्देश्य Delivery। रेजिडेंट को तुरंत सूचना।`,
          },
          {
            icon: `⏱️`,
            label: `ऑटो-एग्जिट टाइमर शुरू`,
            detail: `अप्रूवल पर 15 मिनट का काउंटडाउन अपने आप शुरू। कोई मैनुअल एग्जिट नहीं।`,
          },
          {
            icon: `🤖`,
            label: `सिस्टम ऑटो-एग्जिट करता है`,
            detail: `हर 5 मिनट में क्रॉन जॉब टाइमर पार कर चुके विजिटर एग्जिट करता है।`,
          },
          {
            icon: `🚪`,
            label: `गार्ड जल्दी एग्जिट कर सकता है`,
            detail: `15 मिनट से पहले कूरियर गया हो तो गार्ड अर्ली एग्जिट टैप कर सकता है।`,
          },
        ],
      },
    ],
    guard_features: [
      {
        icon: `📲`,
        label: `कोई अलग डिवाइस नहीं`,
        detail: `गार्ड वही SocietyApp, कोई QR स्कैनर या हार्डवेयर टर्मिनल नहीं।`,
      },
      {
        icon: `🔢`,
        label: `OTP वेरिफाई स्क्रीन`,
        detail: `OTP वेरिफाई टैप करें, 6 अंक डालें, विजिटर डिटेल्स देखें और एक टैप अप्रूव।`,
      },
      {
        icon: `📋`,
        label: `वॉक-इन फॉर्म`,
        detail: `नाम और होस्ट फ्लैट - 15 सेकंड से कम। ज्ञात फ्लैट्स पर ऑटोकम्पलीट।`,
      },
      {
        icon: `🏷️`,
        label: `ट्रस्टेड पास चेक-इन`,
        detail: `नाम या फोन से खोजें। शेड्यूल सहित पास वैलिडिटी तुरंत दिखती है।`,
      },
    ],
    features: [
      {
        icon: `☁️`,
        title: `क्लाउड ऑडिट ट्रेल`,
        desc: `टाइमस्टैम्प, गार्ड नाम, रेजिडेंट अप्रूवल के साथ हर एंट्री। टैम्पर-एविडेंट।`,
      },
      {
        icon: `📵`,
        title: `शून्य हार्डवेयर`,
        desc: `QR स्कैनर नहीं, RFID कार्ड नहीं, इंस्टॉलेशन नहीं। गार्ड वही फोन इस्तेमाल करता है।`,
      },
      {
        icon: `🔒`,
        title: `OTP एक्सपायरी कंट्रोल`,
        desc: `OTP 24 घंटे या अपेक्षित आगमन के 2 घंटे बाद एक्सपायर। रेजिडेंट कभी भी रद्द कर सकते हैं।`,
      },
      {
        icon: `📅`,
        title: `शेड्यूल-आधारित पास`,
        desc: `ट्रस्टेड विजिटर्स केवल अनुमत दिनों और समय विंडो पर ऑटो-अप्रूव होते हैं।`,
      },
      {
        icon: `🔔`,
        title: `तुरंत पुश अलर्ट`,
        desc: `गेट पर विजिटर लॉग होते ही 2 सेकंड से कम में रेजिडेंट को सूचना।`,
      },
      {
        icon: `📊`,
        title: `पूरी गेट रिपोर्ट`,
        desc: `दैनिक, साप्ताहिक, या मासिक गेट लॉग एक्सपोर्ट। विजिटर प्रकार, गार्ड, या फ्लैट से फिल्टर।`,
      },
    ],
    faqs: [
      {
        q: `क्या सिक्योरिटी गार्ड को अलग ऐप या डिवाइस चाहिए?`,
        a: `नहीं। गार्ड वही SocietyApp इस्तेमाल करता है। कोई भी Android या iOS स्मार्टफोन काम करता है।`,
      },
      {
        q: `विजिटर का OTP एक्सपायर हो जाए तो क्या होता है?`,
        a: `गार्ड को OTP एक्सपायर्ड संदेश दिखेगा। रेजिडेंट को बस नया इन्वाइट बनाना होगा।`,
      },
      {
        q: `क्या मैं अपनी नौकरानी के आने का खास समय सेट कर सकता हूं?`,
        a: `हां। ट्रस्टेड विजिटर रजिस्टर करते समय अनुमत दिन और समय विंडो सेट करें।`,
      },
      {
        q: `क्या विजिटर डेटा सुरक्षित है?`,
        a: `सभी विजिटर लॉग एन्क्रिप्टेड क्लाउड स्टोरेज में हैं। केवल एडमिन और संबंधित रेजिडेंट ही इतिहास देख सकते हैं।`,
      },
      {
        q: `क्या मैं देख सकता हूं किसने अप्रूव और किसने रिजेक्ट किया?`,
        a: `हां। गेट लॉग में अप्रूव करने वाले रेजिडेंट का नाम, गार्ड, टाइमस्टैम्प, और उद्देश्य दिखता है।`,
      },
    ],
    related: [
      {
        icon: `🛡️`,
        title: `सिक्योरिटी गार्ड पोर्टल`,
        href: `/features`,
        desc: `गार्ड शिफ्ट मैनेजमेंट और हैंडओवर के लिए समर्पित UX।`,
      },
      {
        icon: `💸`,
        title: `मेंटेनेंस और बिलिंग`,
        href: `/features/maintenance`,
        desc: `अपने आप मासिक बिल बनाएं और पेमेंट स्टेटस ट्रैक करें।`,
      },
      {
        icon: `📢`,
        title: `नोटिस बोर्ड`,
        href: `/features/notices`,
        desc: `सेकंडों में सभी रेजिडेंट्स को टैग किए गए नोटिस पुश करें।`,
      },
    ],
  },
  gu: {
    badge: `વિઝિટર મેનેજમેન્ટ`,
    hero_headline: `જાણો કોણ તમારી સોસાયટીમાં પ્રવેશ કરે છે`,
    hero_accent: `આવ્યા પહેલા.`,
    hero_sub: `દરેક વિઝિટર માટે 4 સ્માર્ટ ફ્લો. સ્માર્ટફોન પર - કોઈ હાર્ડવેર નહીં, QR સ્કેનર નહીં.`,
    hero_note: `દરેક એન્ટ્રી ટાઈમસ્ટેમ્પ સાથે લોગ. ક્લાઉડ ઓડિટ ટ્રેલ. શૂન્ય હાર્ડવેર ખર્ચ.`,
    hero_log_title: `ગેટ એન્ટ્રી લોગ`,
    hero_log_sub: `લાઈવ આજ`,
    problem_headline: `આજના ગેટ એન્ટ્રીની સમસ્યા`,
    problem_sub: `મોટાભાગની ભારતીય સોસાયટીઓ હજુ પણ પેપર રજિસ્ટર, WhatsApp કોલ પર, અથવા કોઈ પ્રોસેસ વગર જ ચાલે છે.`,
    flows_badge: `4 વિઝિટર ફ્લો`,
    flows_headline: `દરેક વિઝિટર પરિસ્થિતિ, આવરી લેવાઈ`,
    flows_sub: `પૂર્વ-આયોજિત મુલાકાતોથી લઈને અચાનક ડિલિવરી સુધી - SocietyApp દરેક કેસ માટે ખાસ બનાવેલો ફ્લો આપે છે.`,
    guard_badge: `સિક્યોરિટી ગાર્ડ વ્યૂ`,
    guard_headline: `ગાર્ડ માટે પણ એ જ એપ`,
    guard_sub: `ગાર્ડ એ જ SocietyApp વાપરે છે. કોઈ અલગ ડિવાઈસ નહીં, કોઈ ટ્રેનિંગ ખર્ચ નહીં, કોઈ હાર્ડવેર ઈન્સ્ટોલ નહીં.`,
    features_headline: `શું તેને શક્તિશાળી બનાવે છે`,
    faq_headline: `વિઝિટર મેનેજમેન્ટ FAQ`,
    related_headline: `સંબંધિત મોડ્યુલ્સ`,
    cta_headline: `5 મિનિટથી ઓછામાં વિઝિટર મેનેજમેન્ટ સેટ કરો`,
    cta_sub: `50 યુનિટ સુધીની સોસાયટીઓ માટે હંમેશા મફત. કોઈ ક્રેડિટ કાર્ડ નહીં. કોઈ હાર્ડવેર નહીં.`,
    cta_setup: `5 મિનિટમાં સેટ અપ કરો - મફત`,
    cta_compare: `પ્લાન સરખાવો`,
    problems: [
      {
        icon: `📓`,
        title: `ગેટ પર પેપર રજિસ્ટર`,
        desc: `કોઈ શોધ નહીં, કોઈ ટાઈમસ્ટેમ્પ નહીં, સરળતાથી બનાવટી. ગાર્ડ હેન્ડઓવર દરમિયાન ખોવાઈ જાય છે.`,
      },
      {
        icon: `📱`,
        title: `WhatsApp ની અંધાધૂંધી`,
        desc: `ગાર્ડ કોલ કરે, રેસિડેન્ટ મિસ કરે, વિઝિટર રાહ જુએ. કોઈ ઓડિટ ટ્રેલ જ નહીં.`,
      },
      {
        icon: `🖥️`,
        title: `હાર્ડવેર મોંઘું છે`,
        desc: `QR સ્કેનર અને RFID રીડર દરેક ગેટ દીઠ રૂ.15,000-50,000 ઉપરાંત વાર્ષિક જાળવણી ખર્ચ કરે છે.`,
      },
    ],
    flows: [
      {
        id: `A`,
        emoji: `📨`,
        title: `પ્રી-અપ્રૂવ્ડ ઇન્વાઇટ`,
        subtitle: `વિઝિટર આવે તે પહેલા રેસિડેન્ટ OTP મોકલે છે`,
        steps: [
          {
            icon: `📱`,
            label: `રેસિડેન્ટ ઇન્વાઇટ બનાવે છે`,
            detail: `એપ ખોલે છે, Visitors પછી Invite પર જાય છે. વિઝિટરનું નામ, ફોન, હેતુ અને અપેક્ષિત આગમન સમય ભરે છે.`,
          },
          {
            icon: `🔢`,
            label: `OTP જનરેટ થાય છે`,
            detail: `બેકએન્ડ 24 કલાક અથવા અપેક્ષિત આગમન પછી 2 કલાક માટે માન્ય 6-અંકનો OTP બનાવે છે.`,
          },
          {
            icon: `💬`,
            label: `OTP વિઝિટર સાથે શેર થાય છે`,
            detail: `રેસિડેન્ટ WhatsApp અથવા SMS દ્વારા OTP શેર કરે છે. વિઝિટર આવીને ગેટ પર OTP જણાવે છે.`,
          },
          {
            icon: `✅`,
            label: `ગાર્ડ વેરિફાય કરે અને એન્ટ્રી લોગ કરે છે`,
            detail: `ગાર્ડ એપમાં OTP નાખે છે, બેકએન્ડ વેલિડેટ કરે છે, એન્ટ્રી ટાઈમસ્ટેમ્પ આપોઆપ નોંધાય છે.`,
          },
          {
            icon: `🚶`,
            label: `ગાર્ડ એક્ઝિટ માર્ક કરે છે`,
            detail: `વિઝિટર જાય ત્યારે ગાર્ડ Exit ટેપ કરે છે. સંપૂર્ણ ઓડિટ ટ્રેલ ક્લાઉડમાં સંગ્રહાય છે.`,
          },
        ],
      },
      {
        id: `B`,
        emoji: `🚶`,
        title: `વોક-ઇન`,
        subtitle: `ગાર્ડ અણધાર્યા વિઝિટરને લોગ કરે છે`,
        steps: [
          {
            icon: `🛡️`,
            label: `ગાર્ડ વોક-ઇન લોગ કરે છે`,
            detail: `ગાર્ડ એપ ખોલે છે, Log Walk-In ટેપ કરે છે, વિઝિટરનું નામ અને હોસ્ટ ફ્લેટ નંબર નાખે છે.`,
          },
          {
            icon: `🔔`,
            label: `પુશ નોટિફિકેશન મોકલાય છે`,
            detail: `રેસિડેન્ટને તરત પુશ નોટિફિકેશન મળે છે: ગેટ પર કોઈ તમને મળવા માંગે છે.`,
          },
          {
            icon: `👍`,
            label: `રેસિડેન્ટ મંજૂર અથવા નામંજૂર કરે છે`,
            detail: `રેસિડેન્ટ પોતાના ફોનથી Approve અથવા Reject ટેપ કરે છે - ગેટ પર જવાની જરૂર નથી.`,
          },
          {
            icon: `📋`,
            label: `એન્ટ્રી અથવા નકાર નોંધાય છે`,
            detail: `નિર્ણય ટાઈમસ્ટેમ્પ સાથે લોગ થાય છે. નકારેલા વિઝિટર સુરક્ષા સમીક્ષા માટે નોંધાય છે.`,
          },
          {
            icon: `🚶`,
            label: `ગાર્ડ એક્ઝિટ માર્ક કરે છે`,
            detail: `વિઝિટર જાય ત્યારે એક્ઝિટ લોગ થાય છે. સંપૂર્ણ વિઝિટર જીવનચક્ર કેપ્ચર થાય છે.`,
          },
        ],
      },
      {
        id: `C`,
        emoji: `🏠`,
        title: `ટ્રસ્ટેડ વિઝિટર્સ`,
        subtitle: `કાયમી પાસ ધરાવતા કામવાળા, રસોઈયા અને ડ્રાઈવર`,
        steps: [
          {
            icon: `📝`,
            label: `રેસિડેન્ટ ટ્રસ્ટેડ વિઝિટર રજિસ્ટર કરે છે`,
            detail: `નામ, કેટેગરી (કામવાળા, રસોઈયા અથવા ડ્રાઈવર), અને પાસનો પ્રકાર ઉમેરે છે: દૈનિક, માસિક, અથવા કાયમી.`,
          },
          {
            icon: `🗓️`,
            label: `વૈકલ્પિક શેડ્યૂલ સેટ`,
            detail: `રેસિડેન્ટ ચોક્કસ દિવસો અને સમય વિન્ડો સુધી પ્રવેશ મર્યાદિત કરે છે, દા.ત. સોમ-શુક્ર, 8-10 AM.`,
          },
          {
            icon: `✅`,
            label: `ગાર્ડ ઓટો-અપ્રૂવ કરે છે`,
            detail: `ગાર્ડ નામ કે ફોનથી વિઝિટર શોધે છે. બેકએન્ડ શેડ્યૂલ ચકાસી ચૂપચાપ ઓટો-અપ્રૂવ કરે છે.`,
          },
          {
            icon: `📊`,
            label: `દૈનિક ડાયજેસ્ટ મોકલાય છે`,
            detail: `રેસિડેન્ટને રાત્રે 9 વાગ્યે તે દિવસની બધી ટ્રસ્ટેડ વિઝિટર એન્ટ્રીનું એક જ પુશ મળે છે, દરેક મુલાકાત માટે અલગ નહીં.`,
          },
          {
            icon: `🚫`,
            label: `રેસિડેન્ટ ગમે ત્યારે રદ કરી શકે છે`,
            detail: `પાસ સમાપ્ત કરવા માટે એક ટેપ. માસિક પાસ પૂરો થવાના 3 દિવસ પહેલા ઓટો-રિમાઇન્ડર મોકલાય છે.`,
          },
        ],
      },
      {
        id: `D`,
        emoji: `📦`,
        title: `ડિલિવરી`,
        subtitle: `કુરિયર અને પાર્સલ માટે ઓટો-એક્ઝિટ ટાઈમર`,
        steps: [
          {
            icon: `📦`,
            label: `ગાર્ડ ડિલિવરી વોક-ઇન લોગ કરે છે`,
            detail: `વોક-ઇન ફ્લો જેવું જ પણ હેતુ Delivery સેટ થાય છે. રેસિડેન્ટને તરત જાણ થાય છે.`,
          },
          {
            icon: `⏱️`,
            label: `ઓટો-એક્ઝિટ ટાઈમર શરૂ થાય છે`,
            detail: `મંજૂરી મળતાં 15-મિનિટનું કાઉન્ટડાઉન આપોઆપ શરૂ થાય છે. મેન્યુઅલ એક્ઝિટની જરૂર નથી.`,
          },
          {
            icon: `🤖`,
            label: `સિસ્ટમ ઓટો-એક્ઝિટ કરે છે`,
            detail: `એક ક્રોન જોબ દર 5 મિનિટે ચાલે છે અને ટાઈમર વીતી ગયેલા ડિલિવરી વિઝિટરને એક્ઝિટ કરે છે.`,
          },
          {
            icon: `🚪`,
            label: `ગાર્ડ વહેલા એક્ઝિટ કરી શકે છે`,
            detail: `જો કુરિયર 15 મિનિટ પહેલા જ જતો રહે, તો ગાર્ડ ગમે ત્યારે અર્લી એક્ઝિટ ટેપ કરી શકે છે.`,
          },
        ],
      },
    ],
    guard_features: [
      {
        icon: `📲`,
        label: `કોઈ અલગ ડિવાઈસ નહીં`,
        detail: `ગાર્ડ એ જ SocietyApp વાપરે છે - કોઈ QR સ્કેનર કે હાર્ડવેર ટર્મિનલની જરૂર નથી.`,
      },
      {
        icon: `🔢`,
        label: `OTP વેરિફાય સ્ક્રીન`,
        detail: `Verify OTP ટેપ કરો, 6 અંક નાખો, વિઝિટર વિગતો જુઓ અને એક જ ટેપમાં મંજૂર કરો.`,
      },
      {
        icon: `📋`,
        label: `વોક-ઇન ફોર્મ`,
        detail: `નામ અને હોસ્ટ ફ્લેટ - 15 સેકન્ડથી ઓછો સમય લે છે. જાણીતા ફ્લેટ પર ઓટોકમ્પ્લીટ.`,
      },
      {
        icon: `🏷️`,
        label: `ટ્રસ્ટેડ પાસ ચેક-ઇન`,
        detail: `નામ કે ફોનથી શોધો. પાસની માન્યતા શેડ્યૂલ સાથે તરત બતાવાય છે.`,
      },
    ],
    features: [
      {
        icon: `☁️`,
        title: `ક્લાઉડ ઓડિટ ટ્રેલ`,
        desc: `ટાઈમસ્ટેમ્પ, ગાર્ડનું નામ, રેસિડેન્ટની મંજૂરી, અને વિઝિટરનો ફોટો (વૈકલ્પિક) સાથે દરેક એન્ટ્રી. ટેમ્પર-એવિડન્ટ.`,
      },
      {
        icon: `📵`,
        title: `શૂન્ય હાર્ડવેર`,
        desc: `કોઈ QR સ્કેનર નહીં. કોઈ RFID કાર્ડ નહીં. કોઈ ઇન્સ્ટોલેશન નહીં. ગાર્ડ પોતાનો જ ફોન વાપરે છે.`,
      },
      {
        icon: `🔒`,
        title: `OTP એક્સપાયરી કંટ્રોલ`,
        desc: `OTP 24 કલાક અથવા અપેક્ષિત આગમન પછી 2 કલાકે એક્સપાયર થાય છે. રેસિડેન્ટ ગમે ત્યારે ઇન્વાઇટ રદ કરી શકે છે.`,
      },
      {
        icon: `📅`,
        title: `શેડ્યૂલ-આધારિત પાસ`,
        desc: `ટ્રસ્ટેડ વિઝિટર્સ ફક્ત મંજૂર દિવસો અને સમય વિન્ડોમાં જ ઓટો-અપ્રૂવ થાય છે.`,
      },
      {
        icon: `🔔`,
        title: `તરત પુશ એલર્ટ`,
        desc: `ગેટ પર વિઝિટર લોગ થતાં જ 2 સેકન્ડથી ઓછા સમયમાં રેસિડેન્ટને જાણ થાય છે.`,
      },
      {
        icon: `📊`,
        title: `સંપૂર્ણ ગેટ રિપોર્ટ`,
        desc: `દૈનિક, સાપ્તાહિક, અથવા માસિક ગેટ લોગ એક્સપોર્ટ કરો. વિઝિટર પ્રકાર, ગાર્ડ, અથવા ફ્લેટ પ્રમાણે ફિલ્ટર કરો.`,
      },
    ],
    faqs: [
      {
        q: `શું સિક્યોરિટી ગાર્ડને અલગ એપ કે ડિવાઈસની જરૂર છે?`,
        a: `ના. ગાર્ડ રેસિડેન્ટ અને એડમિન જેવી જ SocietyApp વાપરે છે. કોઈ પણ Android કે iOS સ્માર્ટફોન ચાલે છે. વધારાના હાર્ડવેરની જરૂર નથી.`,
      },
      {
        q: `વિઝિટરનો OTP એક્સપાયર થાય તો શું થાય?`,
        a: `ગાર્ડને OTP expired મેસેજ દેખાય છે. રેસિડેન્ટ ફક્ત નવું ઇન્વાઇટ બનાવે છે. એક્સપાયર થયેલા OTP ઓડિટ ટ્રેલ માટે આપોઆપ નોંધાય છે.`,
      },
      {
        q: `શું હું મારા કામવાળાની એન્ટ્રી માટે ચોક્કસ સમય સેટ કરી શકું?`,
        a: `હા. ટ્રસ્ટેડ વિઝિટર રજિસ્ટર કરતી વખતે, સોમ-શુક્ર, 8-10 AM જેવા મંજૂર દિવસો અને સમય વિન્ડો સેટ કરો. આ સમય બહાર ચેક-ઇન બ્લોક થાય છે.`,
      },
      {
        q: `શું વિઝિટર ડેટા સુરક્ષિત રીતે સંગ્રહાય છે?`,
        a: `બધા વિઝિટર લોગ એન્ક્રિપ્ટેડ ક્લાઉડ સ્ટોરેજમાં સંગ્રહાય છે. ફક્ત એડમિન અને સંબંધિત રેસિડેન્ટ જ વિઝિટર ઇતિહાસ જોઈ શકે છે. ડેટા ક્યારેય ત્રીજા પક્ષ સાથે શેર થતો નથી.`,
      },
      {
        q: `શું હું જોઈ શકું કે કોણે મંજૂર કર્યું અને કોણે નકાર્યું?`,
        a: `હા. ગેટ લોગમાં મંજૂર કરનાર રેસિડેન્ટ, એન્ટ્રી લોગ કરનાર ગાર્ડ, ટાઈમસ્ટેમ્પ, અને વિઝિટરનો હેતુ દેખાય છે - એક સંપૂર્ણ ઓડિટ ટ્રેલ.`,
      },
    ],
    related: [
      {
        icon: `🛡️`,
        title: `સિક્યોરિટી ગાર્ડ પોર્ટલ`,
        href: `/features`,
        desc: `ગાર્ડ શિફ્ટ મેનેજમેન્ટ અને હેન્ડઓવર માટે સમર્પિત UX.`,
      },
      {
        icon: `💸`,
        title: `મેન્ટેનન્સ અને બિલિંગ`,
        href: `/features/maintenance`,
        desc: `માસિક બિલ આપોઆપ બનાવો અને પેમેન્ટ સ્ટેટસ ટ્રેક કરો.`,
      },
      {
        icon: `📢`,
        title: `નોટિસ બોર્ડ`,
        href: `/features/notices`,
        desc: `થોડી સેકંડમાં બધા રેસિડેન્ટ્સને ટેગ કરેલી નોટિસ પુશ કરો.`,
      },
    ],
  },

  ta: {
    badge: `விசிட்டர் மேலாண்மை`,
    hero_headline: `உங்கள் சொசைட்டியில் யார் நுழைகிறார்கள் என்பதை சரியாக அறியுங்கள்`,
    hero_accent: `அவர்கள் உள்ளே வருவதற்கு முன்பே.`,
    hero_sub: `ஒவ்வொரு விசிட்டர் சூழ்நிலையையும் கையாளும் 4 ஸ்மார்ட் ஃப்ளோக்கள். முழுவதுமாக ஸ்மார்ட்போன்களில் இயங்குகிறது - ஹார்டவேர் இல்லை, QR ஸ்கேனர் இல்லை, இன்ஸ்டாலேஷன் செலவு இல்லை.`,
    hero_note: `ஒவ்வொரு நுழைவும் நேர முத்திரையுடன் பதிவு செய்யப்படுகிறது. கிளவுட் ஆடிட் ட்ரெயில். ஒரு யூனிட்டுக்கு ஹார்டவேர் செலவு இல்லை.`,
    hero_log_title: `கேட் என்ட்ரி லாக்`,
    hero_log_sub: `இன்று நேரலை`,
    problem_headline: `இன்றைய கேட் என்ட்ரியின் பிரச்சனை`,
    problem_sub: `பெரும்பாலான இந்திய சொசைட்டிகள் இன்னும் பேப்பர் ரெஜிஸ்டர், WhatsApp கால்கள், அல்லது எந்த செயல்முறையும் இல்லாமல் நம்பியிருக்கின்றன.`,
    flows_badge: `4 விசிட்டர் ஃப்ளோக்கள்`,
    flows_headline: `ஒவ்வொரு விசிட்டர் சூழ்நிலையும் கவர் செய்யப்பட்டுள்ளது`,
    flows_sub: `முன்கூட்டியே திட்டமிடப்பட்ட வருகைகள் முதல் திடீர் டெலிவரிகள் வரை - SocietyApp ஒவ்வொரு வழக்கையும் நோக்கத்திற்கேற்ப உருவாக்கப்பட்ட ஃப்ளோ மூலம் கையாளுகிறது.`,
    guard_badge: `செக்யூரிட்டி கார்டு வியூ`,
    guard_headline: `கார்டுக்கும் ஒரே ஆப்`,
    guard_sub: `கார்டு அதே SocietyApp-ஐ பயன்படுத்துகிறார். தனி டிவைஸ் இல்லை, பயிற்சி செலவு இல்லை, ஹார்டவேர் இன்ஸ்டால் இல்லை.`,
    features_headline: `இதை சக்திவாய்ந்ததாக ஆக்குவது என்ன`,
    faq_headline: `விசிட்டர் மேலாண்மை FAQ`,
    related_headline: `தொடர்புடைய மாட்யூல்கள்`,
    cta_headline: `5 நிமிடத்திற்குள் விசிட்டர் மேலாண்மையை அமைக்கவும்`,
    cta_sub: `50 யூனிட் வரையிலான சொசைட்டிகளுக்கு எப்போதும் இலவசம். கிரெடிட் கார்டு தேவையில்லை. ஹார்டவேர் தேவையில்லை.`,
    cta_setup: `5 நிமிடத்தில் அமைக்கவும் - இலவசம்`,
    cta_compare: `பிளான்களை ஒப்பிடவும்`,
    problems: [
      {
        icon: `📓`,
        title: `கேட்டில் பேப்பர் ரெஜிஸ்டர்`,
        desc: `தேடல் வசதி இல்லை, நேர முத்திரை இல்லை, எளிதில் போலியாக்க முடியும். கார்டு மாற்றத்தின் போது தொலைந்துவிடும்.`,
      },
      {
        icon: `📱`,
        title: `WhatsApp குழப்பம்`,
        desc: `கார்டு அழைக்கிறார், ரெசிடென்ட் அழைப்பை தவறவிடுகிறார், விசிட்டர் காத்திருக்கிறார். ஆடிட் ட்ரெயில் எதுவும் இல்லை.`,
      },
      {
        icon: `🖥️`,
        title: `ஹார்டவேர் விலை உயர்ந்தது`,
        desc: `QR ஸ்கேனர் மற்றும் RFID ரீடர்கள் ஒரு கேட்டுக்கு ரூ.15,000-50,000 வரை செலவாகும், அத்துடன் வருடாந்திர பராமரிப்பு செலவும் உண்டு.`,
      },
    ],
    flows: [
      {
        id: `A`,
        emoji: `📨`,
        title: `முன்-அங்கீகரிக்கப்பட்ட அழைப்பு`,
        subtitle: `விசிட்டர் வருவதற்கு முன் ரெசிடென்ட் OTP அனுப்புகிறார்`,
        steps: [
          {
            icon: `📱`,
            label: `ரெசிடென்ட் அழைப்பை உருவாக்குகிறார்`,
            detail: `ஆப்பை திறந்து, Visitors பிறகு Invite-க்கு செல்கிறார். விசிட்டர் பெயர், போன், நோக்கம் மற்றும் எதிர்பார்க்கப்படும் வருகை நேரத்தை நிரப்புகிறார்.`,
          },
          {
            icon: `🔢`,
            label: `OTP உருவாக்கப்படுகிறது`,
            detail: `பேக்எண்ட் 24 மணி நேரம் அல்லது எதிர்பார்க்கப்படும் வருகைக்குப் பிறகு 2 மணி நேரம் வரை செல்லுபடியாகும் 6-இலக்க OTP-ஐ உருவாக்குகிறது.`,
          },
          {
            icon: `💬`,
            label: `OTP விசிட்டருடன் பகிரப்படுகிறது`,
            detail: `ரெசிடென்ட் WhatsApp அல்லது SMS மூலம் OTP-ஐ பகிர்கிறார். விசிட்டர் வந்து கேட்டில் OTP-ஐ கூறுகிறார்.`,
          },
          {
            icon: `✅`,
            label: `கார்டு சரிபார்த்து என்ட்ரியை பதிவு செய்கிறார்`,
            detail: `கார்டு ஆப்பில் OTP-ஐ உள்ளிடுகிறார், பேக்எண்ட் சரிபார்க்கிறது, என்ட்ரி நேர முத்திரை தானாக பதிவாகும்.`,
          },
          {
            icon: `🚶`,
            label: `கார்டு எக்ஸிட்டை குறிக்கிறார்`,
            detail: `விசிட்டர் வெளியேறும்போது கார்டு Exit-ஐ தட்டுகிறார். முழு ஆடிட் ட்ரெயிலும் கிளவுடில் சேமிக்கப்படுகிறது.`,
          },
        ],
      },
      {
        id: `B`,
        emoji: `🚶`,
        title: `வாக்-இன்`,
        subtitle: `அறிவிக்காமல் வந்த விசிட்டரை கார்டு பதிவு செய்கிறார்`,
        steps: [
          {
            icon: `🛡️`,
            label: `கார்டு வாக்-இன்-ஐ பதிவு செய்கிறார்`,
            detail: `கார்டு ஆப்பை திறந்து, Log Walk-In-ஐ தட்டி, விசிட்டர் பெயர் மற்றும் ஹோஸ்ட் ஃப்ளாட் எண்ணை உள்ளிடுகிறார்.`,
          },
          {
            icon: `🔔`,
            label: `புஷ் நோட்டிஃபிகேஷன் அனுப்பப்படுகிறது`,
            detail: `ரெசிடென்ட்டுக்கு உடனடியாக புஷ் கிடைக்கிறது: கேட்டில் ஒருவர் உங்களைப் பார்க்க வேண்டும் என்று கேட்கிறார்.`,
          },
          {
            icon: `👍`,
            label: `ரெசிடென்ட் அங்கீகரிக்கிறார் அல்லது நிராகரிக்கிறார்`,
            detail: `ரெசிடென்ட் தனது போனிலிருந்து Approve அல்லது Reject-ஐ தட்டுகிறார் - கேட்டுக்கு செல்ல தேவையில்லை.`,
          },
          {
            icon: `📋`,
            label: `என்ட்ரி அல்லது நிராகரிப்பு பதிவாகிறது`,
            detail: `முடிவு நேர முத்திரையுடன் பதிவாகிறது. நிராகரிக்கப்பட்ட விசிட்டர்கள் பாதுகாப்பு மறுஆய்வுக்காக பதிவு செய்யப்படுகிறார்கள்.`,
          },
          {
            icon: `🚶`,
            label: `கார்டு எக்ஸிட்டை குறிக்கிறார்`,
            detail: `விசிட்டர் வெளியேறும்போது எக்ஸிட் பதிவாகும். முழு விசிட்டர் வாழ்க்கை சுழற்சியும் பதிவு செய்யப்படுகிறது.`,
          },
        ],
      },
      {
        id: `C`,
        emoji: `🏠`,
        title: `நம்பகமான விசிட்டர்கள்`,
        subtitle: `நிரந்தர பாஸ் கொண்ட வேலைக்காரிகள், சமையல்காரர்கள் மற்றும் டிரைவர்கள்`,
        steps: [
          {
            icon: `📝`,
            label: `ரெசிடென்ட் நம்பகமான விசிட்டரை பதிவு செய்கிறார்`,
            detail: `பெயர், வகை (வேலைக்காரி, சமையல்காரர் அல்லது டிரைவர்), மற்றும் பாஸ் வகை: தினசரி, மாதாந்திரம், அல்லது நிரந்தரம் ஆகியவற்றை சேர்க்கிறார்.`,
          },
          {
            icon: `🗓️`,
            label: `விருப்ப அட்டவணை அமைக்கப்படுகிறது`,
            detail: `ரெசிடென்ட் குறிப்பிட்ட நாட்கள் மற்றும் நேர வரம்புகளுக்கு அணுகலை கட்டுப்படுத்துகிறார், எ.கா. திங்கள்-வெள்ளி, காலை 8-10.`,
          },
          {
            icon: `✅`,
            label: `கார்டு தானாக அங்கீகரிக்கிறார்`,
            detail: `கார்டு பெயர் அல்லது போன் மூலம் விசிட்டரை தேடுகிறார். பேக்எண்ட் அட்டவணையை சரிபார்த்து அமைதியாக தானாக அங்கீகரிக்கிறது.`,
          },
          {
            icon: `📊`,
            label: `தினசரி டைஜெஸ்ட் அனுப்பப்படுகிறது`,
            detail: `ரெசிடென்ட்டுக்கு இரவு 9 மணிக்கு அன்றைய அனைத்து நம்பகமான விசிட்டர் என்ட்ரிகளும் ஒரே புஷ்-ஆக கிடைக்கும், ஒவ்வொரு வருகைக்கும் தனித்தனி அறிவிப்பு வராது.`,
          },
          {
            icon: `🚫`,
            label: `ரெசிடென்ட் எப்போது வேண்டுமானாலும் ரத்து செய்யலாம்`,
            detail: `பாஸை காலாவதியாக்க ஒரு தட்டு போதும். மாதாந்திர பாஸ் முடிவதற்கு 3 நாட்களுக்கு முன் தானாக நினைவூட்டல் அனுப்பப்படும்.`,
          },
        ],
      },
      {
        id: `D`,
        emoji: `📦`,
        title: `டெலிவரி`,
        subtitle: `கூரியர் மற்றும் பார்சல்களுக்கான ஆட்டோ-எக்ஸிட் டைமர்`,
        steps: [
          {
            icon: `📦`,
            label: `கார்டு டெலிவரி வாக்-இன்-ஐ பதிவு செய்கிறார்`,
            detail: `வாக்-இன் ஃப்ளோவைப் போலவே ஆனால் நோக்கம் Delivery என அமைக்கப்படும். ரெசிடென்ட்டுக்கு உடனடியாக அறிவிக்கப்படும்.`,
          },
          {
            icon: `⏱️`,
            label: `ஆட்டோ-எக்ஸிட் டைமர் தொடங்குகிறது`,
            detail: `அங்கீகரிக்கப்பட்டவுடன், 15 நிமிட கவுன்ட்டவுன் தானாக தொடங்குகிறது. கைமுறையாக எக்ஸிட் செய்ய தேவையில்லை.`,
          },
          {
            icon: `🤖`,
            label: `சிஸ்டம் தானாக எக்ஸிட் செய்கிறது`,
            detail: `ஒரு க்ரான் ஜாப் ஒவ்வொரு 5 நிமிடத்திற்கும் இயங்கி, தங்கள் டைமரை கடந்த டெலிவரி விசிட்டர்களை எக்ஸிட் செய்கிறது.`,
          },
          {
            icon: `🚪`,
            label: `கார்டு முன்கூட்டியே எக்ஸிட் செய்யலாம்`,
            detail: `கூரியர் 15 நிமிடத்திற்கு முன்பே சென்றுவிட்டால், கார்டு எந்நேரமும் early exit-ஐ தட்டலாம்.`,
          },
        ],
      },
    ],
    guard_features: [
      {
        icon: `📲`,
        label: `தனி டிவைஸ் இல்லை`,
        detail: `கார்டு அதே SocietyApp-ஐ பயன்படுத்துகிறார் - QR ஸ்கேனர் அல்லது ஹார்டவேர் டெர்மினல் தேவையில்லை.`,
      },
      {
        icon: `🔢`,
        label: `OTP வெரிஃபை ஸ்கிரீன்`,
        detail: `Verify OTP-ஐ தட்டவும், 6 இலக்கங்களை உள்ளிடவும், விசிட்டர் விவரங்களை பார்த்து ஒரே தட்டில் அங்கீகரிக்கவும்.`,
      },
      {
        icon: `📋`,
        label: `வாக்-இன் படிவம்`,
        detail: `பெயர் மற்றும் ஹோஸ்ட் ஃப்ளாட் - 15 வினாடிகளுக்குள். தெரிந்த ஃப்ளாட்களுக்கு ஆட்டோகம்ப்ளீட்.`,
      },
      {
        icon: `🏷️`,
        label: `நம்பகமான பாஸ் செக்-இன்`,
        detail: `பெயர் அல்லது போன் மூலம் தேடவும். அட்டவணையுடன் பாஸ் செல்லுபடி உடனடியாக காட்டப்படும்.`,
      },
    ],
    features: [
      {
        icon: `☁️`,
        title: `கிளவுட் ஆடிட் ட்ரெயில்`,
        desc: `நேர முத்திரை, கார்டு பெயர், ரெசிடென்ட் அங்கீகாரம் மற்றும் விசிட்டர் புகைப்படத்துடன் (விருப்பம்) ஒவ்வொரு என்ட்ரியும். சேதப்படுத்த முடியாதது.`,
      },
      {
        icon: `📵`,
        title: `ஹார்டவேர் இல்லை`,
        desc: `QR ஸ்கேனர் இல்லை. RFID கார்டு இல்லை. இன்ஸ்டாலேஷன் இல்லை. கார்டு ஏற்கனவே வைத்திருக்கும் அதே போனை பயன்படுத்துகிறார்.`,
      },
      {
        icon: `🔒`,
        title: `OTP காலாவதி கட்டுப்பாடு`,
        desc: `OTP 24 மணி நேரம் அல்லது எதிர்பார்க்கப்படும் வருகைக்குப் பிறகு 2 மணி நேரத்தில் காலாவதியாகும். ரெசிடென்ட்கள் எப்போது வேண்டுமானாலும் அழைப்புகளை ரத்து செய்யலாம்.`,
      },
      {
        icon: `📅`,
        title: `அட்டவணை அடிப்படையிலான பாஸ்கள்`,
        desc: `நம்பகமான விசிட்டர்கள் அனுமதிக்கப்பட்ட நாட்கள் மற்றும் நேர வரம்புகளில் மட்டுமே தானாக அங்கீகரிக்கப்படுவார்கள்.`,
      },
      {
        icon: `🔔`,
        title: `உடனடி புஷ் அலர்ட்`,
        desc: `கேட்டில் விசிட்டர் பதிவான 2 வினாடிகளுக்குள் ரெசிடென்ட்டுக்கு அறிவிப்பு.`,
      },
      {
        icon: `📊`,
        title: `முழுமையான கேட் அறிக்கைகள்`,
        desc: `தினசரி, வாராந்திர, அல்லது மாதாந்திர கேட் லாக்குகளை ஏற்றுமதி செய்யவும். விசிட்டர் வகை, கார்டு, அல்லது ஃப்ளாட் மூலம் ஃபில்டர் செய்யவும்.`,
      },
    ],
    faqs: [
      {
        q: `செக்யூரிட்டி கார்டுக்கு தனி ஆப் அல்லது டிவைஸ் தேவையா?`,
        a: `இல்லை. கார்டு ரெசிடென்ட்கள் மற்றும் அட்மின்கள் பயன்படுத்தும் அதே SocietyApp-ஐ பயன்படுத்துகிறார். எந்த Android அல்லது iOS ஸ்மார்ட்போனும் வேலை செய்யும். கூடுதல் ஹார்டவேர் தேவையில்லை.`,
      },
      {
        q: `விசிட்டரின் OTP காலாவதியானால் என்ன நடக்கும்?`,
        a: `கார்டுக்கு OTP காலாவதியானது என்ற செய்தி தெரியும். ரெசிடென்ட் வெறுமனே புதிய அழைப்பை உருவாக்கலாம். காலாவதியான OTP-கள் ஆடிட் ட்ரெயிலுக்காக தானாக பதிவு செய்யப்படும்.`,
      },
      {
        q: `என் வேலைக்காரியின் வருகைக்கு குறிப்பிட்ட நேரத்தை நான் அமைக்க முடியுமா?`,
        a: `ஆம். நம்பகமான விசிட்டரை பதிவு செய்யும்போது, திங்கள்-வெள்ளி, காலை 8-10 போன்ற அனுமதிக்கப்பட்ட நாட்கள் மற்றும் நேர வரம்புகளை அமைக்கவும். இந்த நேரத்திற்கு வெளியே செக்-இன் தடுக்கப்படும்.`,
      },
      {
        q: `விசிட்டர் தரவு பாதுகாப்பாக சேமிக்கப்படுகிறதா?`,
        a: `அனைத்து விசிட்டர் லாக்குகளும் என்க்ரிப்ட் செய்யப்பட்ட கிளவுட் ஸ்டோரேஜில் சேமிக்கப்படுகின்றன. அட்மின்கள் மற்றும் தொடர்புடைய ரெசிடென்ட் மட்டுமே விசிட்டர் வரலாற்றை பார்க்க முடியும். தரவு மூன்றாம் தரப்பினருடன் ஒருபோதும் பகிரப்படாது.`,
      },
      {
        q: `யார் அங்கீகரித்தார்கள், யார் நிராகரித்தார்கள் என்பதை நான் பார்க்க முடியுமா?`,
        a: `ஆம். கேட் லாக் அங்கீகரித்த ரெசிடென்ட், என்ட்ரியை பதிவு செய்த கார்டு, நேர முத்திரைகள், மற்றும் விசிட்டர் நோக்கத்தை காட்டுகிறது - ஒரு முழுமையான ஆடிட் ட்ரெயில்.`,
      },
    ],
    related: [
      {
        icon: `🛡️`,
        title: `செக்யூரிட்டி கார்டு போர்டல்`,
        href: `/features`,
        desc: `கார்டு ஷிஃப்ட் மேலாண்மை மற்றும் ஹேண்டோவருக்கான பிரத்யேக UX.`,
      },
      {
        icon: `💸`,
        title: `மெயின்டெனன்ஸ் மற்றும் பில்லிங்`,
        href: `/features/maintenance`,
        desc: `மாதாந்திர பில்களை தானாக உருவாக்கி பேமெண்ட் நிலையை கண்காணிக்கவும்.`,
      },
      {
        icon: `📢`,
        title: `நோட்டீஸ் போர்டு`,
        href: `/features/notices`,
        desc: `சில வினாடிகளில் அனைத்து ரெசிடென்ட்களுக்கும் குறிச்சொல் இடப்பட்ட நோட்டீஸை புஷ் செய்யவும்.`,
      },
    ],
  },

  mr: {
    badge: `व्हिजिटर मॅनेजमेंट`,
    hero_headline: `तुमच्या सोसायटीत कोण प्रवेश करत आहे हे नेमके जाणून घ्या`,
    hero_accent: `ते आत येण्यापूर्वीच.`,
    hero_sub: `प्रत्येक व्हिजिटर परिस्थिती हाताळणारे 4 स्मार्ट फ्लो. पूर्णपणे स्मार्टफोनवर काम करते - हार्डवेअर नाही, QR स्कॅनर नाही, इन्स्टॉलेशन खर्च नाही.`,
    hero_note: `प्रत्येक एंट्री टाइमस्टॅम्पसह लॉग होते. क्लाउड ऑडिट ट्रेल. प्रति-युनिट हार्डवेअर खर्च शून्य.`,
    hero_log_title: `गेट एंट्री लॉग`,
    hero_log_sub: `आज लाइव्ह`,
    problem_headline: `आजच्या गेट एंट्रीची समस्या`,
    problem_sub: `बहुतांश भारतीय सोसायट्या अजूनही पेपर रजिस्टर, WhatsApp कॉल्स किंवा कोणतीही प्रक्रिया नसताना चालतात.`,
    flows_badge: `4 व्हिजिटर फ्लो`,
    flows_headline: `प्रत्येक व्हिजिटर परिस्थिती कव्हर केली आहे`,
    flows_sub: `पूर्व-नियोजित भेटींपासून ते अचानक येणाऱ्या डिलिव्हरीपर्यंत - SocietyApp प्रत्येक केस खास तयार केलेल्या फ्लोने हाताळते.`,
    guard_badge: `सिक्युरिटी गार्ड व्ह्यू`,
    guard_headline: `गार्डसाठीही तीच अ‍ॅप`,
    guard_sub: `गार्ड तीच SocietyApp वापरतो. वेगळे डिव्हाइस नाही, ट्रेनिंग खर्च नाही, हार्डवेअर इन्स्टॉल नाही.`,
    features_headline: `याला शक्तिशाली काय बनवते`,
    faq_headline: `व्हिजिटर मॅनेजमेंट FAQ`,
    related_headline: `संबंधित मॉड्यूल्स`,
    cta_headline: `5 मिनिटांपेक्षा कमी वेळात व्हिजिटर मॅनेजमेंट सेट करा`,
    cta_sub: `50 युनिट्सपर्यंतच्या सोसायट्यांसाठी कायमचे मोफत. क्रेडिट कार्ड नाही. हार्डवेअर नाही.`,
    cta_setup: `5 मिनिटांत सेट अप करा - मोफत`,
    cta_compare: `प्लॅन्सची तुलना करा`,
    problems: [
      {
        icon: `📓`,
        title: `गेटवर पेपर रजिस्टर`,
        desc: `शोधण्याची सोय नाही, टाइमस्टॅम्प नाही, सहज बनावट करता येते. गार्ड हँडओव्हरमध्ये हरवते.`,
      },
      {
        icon: `📱`,
        title: `WhatsApp चा गोंधळ`,
        desc: `गार्ड कॉल करतो, रहिवासी कॉल चुकवतो, व्हिजिटर वाट पाहतो. कोणताही ऑडिट ट्रेल नाही.`,
      },
      {
        icon: `🖥️`,
        title: `हार्डवेअर महाग आहे`,
        desc: `QR स्कॅनर आणि RFID रीडर प्रति गेट रु.15,000-50,000 खर्च करतात, शिवाय वार्षिक देखभाल खर्च.`,
      },
    ],
    flows: [
      {
        id: `A`,
        emoji: `📨`,
        title: `प्री-अप्रूव्ड इनव्हाइट`,
        subtitle: `व्हिजिटर येण्यापूर्वी रहिवासी OTP पाठवतो`,
        steps: [
          {
            icon: `📱`,
            label: `रहिवासी इनव्हाइट तयार करतो`,
            detail: `अ‍ॅप उघडतो, Visitors नंतर Invite वर जातो. व्हिजिटरचे नाव, फोन, उद्देश आणि अपेक्षित येण्याची वेळ भरतो.`,
          },
          {
            icon: `🔢`,
            label: `OTP तयार होतो`,
            detail: `बॅकएंड 24 तास किंवा अपेक्षित आगमनानंतर 2 तासांपर्यंत वैध असलेला 6-अंकी OTP तयार करतो.`,
          },
          {
            icon: `💬`,
            label: `OTP व्हिजिटरसोबत शेअर होतो`,
            detail: `रहिवासी WhatsApp किंवा SMS द्वारे OTP शेअर करतो. व्हिजिटर गेटवर येऊन OTP सांगतो.`,
          },
          {
            icon: `✅`,
            label: `गार्ड व्हेरिफाय करून एंट्री लॉग करतो`,
            detail: `गार्ड अ‍ॅपमध्ये OTP टाकतो, बॅकएंड व्हॅलिडेट करतो, एंट्री टाइमस्टॅम्प आपोआप नोंदवला जातो.`,
          },
          {
            icon: `🚶`,
            label: `गार्ड एक्झिट मार्क करतो`,
            detail: `व्हिजिटर निघून गेल्यावर गार्ड Exit टॅप करतो. संपूर्ण ऑडिट ट्रेल क्लाउडमध्ये साठवला जातो.`,
          },
        ],
      },
      {
        id: `B`,
        emoji: `🚶`,
        title: `वॉक-इन`,
        subtitle: `गार्ड अनपेक्षित व्हिजिटरची नोंद करतो`,
        steps: [
          {
            icon: `🛡️`,
            label: `गार्ड वॉक-इन लॉग करतो`,
            detail: `गार्ड अ‍ॅप उघडतो, Log Walk-In वर टॅप करतो, व्हिजिटरचे नाव आणि होस्ट फ्लॅट नंबर टाकतो.`,
          },
          {
            icon: `🔔`,
            label: `पुश नोटिफिकेशन येते`,
            detail: `रहिवाशाला त्वरित पुश मिळतो: गेटवर कोणीतरी तुम्हाला भेटायला आले आहे.`,
          },
          {
            icon: `👍`,
            label: `रहिवासी मंजूर किंवा नाकारतो`,
            detail: `रहिवासी फोनवरून Approve किंवा Reject टॅप करतो - गेटवर जाण्याची गरज नाही.`,
          },
          {
            icon: `📋`,
            label: `एंट्री किंवा नकार नोंदवला जातो`,
            detail: `निर्णय टाइमस्टॅम्पसह लॉग होतो. नाकारलेले व्हिजिटर सुरक्षा पुनरावलोकनासाठी नोंदवले जातात.`,
          },
          {
            icon: `🚶`,
            label: `गार्ड एक्झिट मार्क करतो`,
            detail: `व्हिजिटर निघून गेल्यावर एक्झिट लॉग होते. संपूर्ण व्हिजिटर जीवनचक्र नोंदवले जाते.`,
          },
        ],
      },
      {
        id: `C`,
        emoji: `🏠`,
        title: `ट्रस्टेड व्हिजिटर्स`,
        subtitle: `कायमस्वरूपी पास असलेल्या मोलकरणी, स्वयंपाकी आणि ड्रायव्हर`,
        steps: [
          {
            icon: `📝`,
            label: `रहिवासी ट्रस्टेड व्हिजिटर नोंदवतो`,
            detail: `नाव, प्रकार (मोलकरीण, स्वयंपाकी किंवा ड्रायव्हर) आणि पासचा प्रकार जोडतो: दैनिक, मासिक, किंवा कायमस्वरूपी.`,
          },
          {
            icon: `🗓️`,
            label: `ऐच्छिक वेळापत्रक सेट`,
            detail: `रहिवासी विशिष्ट दिवस आणि वेळेच्या मर्यादेत प्रवेश मर्यादित करतो, उदा. सोम-शुक्र, सकाळी 8-10.`,
          },
          {
            icon: `✅`,
            label: `गार्ड आपोआप मंजूर करतो`,
            detail: `गार्ड नाव किंवा फोनने व्हिजिटर शोधतो. बॅकएंड वेळापत्रक तपासून शांतपणे आपोआप मंजूर करतो.`,
          },
          {
            icon: `📊`,
            label: `दैनिक डायजेस्ट पाठवला जातो`,
            detail: `रहिवाशाला रात्री 9 वाजता त्या दिवसाच्या सर्व ट्रस्टेड व्हिजिटर एंट्रीजचा एकच पुश मिळतो, प्रत्येक भेटीसाठी वेगळा त्रास नाही.`,
          },
          {
            icon: `🚫`,
            label: `रहिवासी कधीही रद्द करू शकतो`,
            detail: `पास एक्सपायर करण्यासाठी एक टॅप पुरेसा. मासिक पास संपण्याच्या 3 दिवस आधी आपोआप स्मरणपत्र पाठवले जाते.`,
          },
        ],
      },
      {
        id: `D`,
        emoji: `📦`,
        title: `डिलिव्हरी`,
        subtitle: `कुरिअर आणि पार्सलसाठी ऑटो-एक्झिट टायमर`,
        steps: [
          {
            icon: `📦`,
            label: `गार्ड डिलिव्हरी वॉक-इन लॉग करतो`,
            detail: `वॉक-इन फ्लो प्रमाणेच पण उद्देश Delivery असा सेट केला जातो. रहिवाशाला त्वरित सूचित केले जाते.`,
          },
          {
            icon: `⏱️`,
            label: `ऑटो-एक्झिट टायमर सुरू होतो`,
            detail: `मंजुरी मिळाल्यावर 15 मिनिटांचा काउंटडाउन आपोआप सुरू होतो. मॅन्युअल एक्झिटची गरज नाही.`,
          },
          {
            icon: `🤖`,
            label: `सिस्टम आपोआप एक्झिट करते`,
            detail: `दर 5 मिनिटांनी चालणारी क्रॉन जॉब त्यांचा टायमर संपलेल्या डिलिव्हरी व्हिजिटर्सना एक्झिट करते.`,
          },
          {
            icon: `🚪`,
            label: `गार्ड लवकर एक्झिट करू शकतो`,
            detail: `कुरिअर 15 मिनिटांपूर्वी निघून गेल्यास, गार्ड कधीही early exit टॅप करू शकतो.`,
          },
        ],
      },
    ],
    guard_features: [
      {
        icon: `📲`,
        label: `वेगळे डिव्हाइस नाही`,
        detail: `गार्ड तीच SocietyApp वापरतो - QR स्कॅनर किंवा हार्डवेअर टर्मिनलची गरज नाही.`,
      },
      {
        icon: `🔢`,
        label: `OTP व्हेरिफाय स्क्रीन`,
        detail: `Verify OTP टॅप करा, 6 अंक टाका, व्हिजिटरचे तपशील पाहा आणि एका टॅपमध्ये मंजूर करा.`,
      },
      {
        icon: `📋`,
        label: `वॉक-इन फॉर्म`,
        detail: `नाव आणि होस्ट फ्लॅट - 15 सेकंदांपेक्षा कमी वेळात. ज्ञात फ्लॅट्सवर ऑटोकम्प्लीट.`,
      },
      {
        icon: `🏷️`,
        label: `ट्रस्टेड पास चेक-इन`,
        detail: `नाव किंवा फोनने शोधा. वेळापत्रकासह पासची वैधता त्वरित दिसते.`,
      },
    ],
    features: [
      {
        icon: `☁️`,
        title: `क्लाउड ऑडिट ट्रेल`,
        desc: `टाइमस्टॅम्प, गार्डचे नाव, रहिवासी मंजुरी, आणि व्हिजिटरचा फोटो (ऐच्छिक) यासह प्रत्येक एंट्री. टॅम्पर-एव्हिडंट.`,
      },
      {
        icon: `📵`,
        title: `शून्य हार्डवेअर`,
        desc: `QR स्कॅनर नाही. RFID कार्ड नाही. इन्स्टॉलेशन नाही. गार्ड आधीपासून वापरत असलेला तोच फोन वापरतो.`,
      },
      {
        icon: `🔒`,
        title: `OTP एक्सपायरी नियंत्रण`,
        desc: `OTP 24 तासांनंतर किंवा अपेक्षित आगमनानंतर 2 तासांनी एक्सपायर होतो. रहिवासी कधीही इनव्हाइट रद्द करू शकतात.`,
      },
      {
        icon: `📅`,
        title: `वेळापत्रक-आधारित पास`,
        desc: `ट्रस्टेड व्हिजिटर्स फक्त परवानगी दिलेल्या दिवशी आणि वेळेतच आपोआप मंजूर होतात.`,
      },
      {
        icon: `🔔`,
        title: `त्वरित पुश अलर्ट`,
        desc: `गेटवर व्हिजिटरची नोंद होताच 2 सेकंदांपेक्षा कमी वेळात रहिवाशाला सूचना.`,
      },
      {
        icon: `📊`,
        title: `संपूर्ण गेट अहवाल`,
        desc: `दैनिक, साप्ताहिक, किंवा मासिक गेट लॉग एक्सपोर्ट करा. व्हिजिटरचा प्रकार, गार्ड, किंवा फ्लॅटनुसार फिल्टर करा.`,
      },
    ],
    faqs: [
      {
        q: `सिक्युरिटी गार्डला वेगळे अ‍ॅप किंवा डिव्हाइस लागते का?`,
        a: `नाही. गार्ड रहिवासी आणि अ‍ॅडमिन वापरतात तीच SocietyApp वापरतो. कोणताही Android किंवा iOS स्मार्टफोन चालतो. अतिरिक्त हार्डवेअरची गरज नाही.`,
      },
      {
        q: `व्हिजिटरचा OTP एक्सपायर झाला तर काय होते?`,
        a: `गार्डला OTP एक्सपायर झाल्याचा मेसेज दिसतो. रहिवासी फक्त नवीन इनव्हाइट तयार करतो. एक्सपायर झालेले OTP ऑडिट ट्रेलसाठी आपोआप नोंदवले जातात.`,
      },
      {
        q: `मी माझ्या मोलकरणीच्या येण्यासाठी विशिष्ट वेळ सेट करू शकतो का?`,
        a: `होय. ट्रस्टेड व्हिजिटर नोंदवताना, सोम-शुक्र, सकाळी 8-10 सारखे परवानगी असलेले दिवस आणि वेळ सेट करा. या वेळेबाहेर चेक-इन ब्लॉक होते.`,
      },
      {
        q: `व्हिजिटरचा डेटा सुरक्षितपणे साठवला जातो का?`,
        a: `सर्व व्हिजिटर लॉग एन्क्रिप्टेड क्लाउड स्टोरेजमध्ये साठवले जातात. फक्त अ‍ॅडमिन आणि संबंधित रहिवासीच व्हिजिटर इतिहास पाहू शकतात. डेटा कधीही तिसऱ्या पक्षासोबत शेअर केला जात नाही.`,
      },
      {
        q: `कोणी मंजूर केले आणि कोणी नाकारले हे मी पाहू शकतो का?`,
        a: `होय. गेट लॉगमध्ये मंजूर करणारा रहिवासी, एंट्री नोंदवणारा गार्ड, टाइमस्टॅम्प, आणि व्हिजिटरचा उद्देश दिसतो - एक संपूर्ण ऑडिट ट्रेल.`,
      },
    ],
    related: [
      {
        icon: `🛡️`,
        title: `सिक्युरिटी गार्ड पोर्टल`,
        href: `/features`,
        desc: `गार्ड शिफ्ट मॅनेजमेंट आणि हँडओव्हरसाठी समर्पित UX.`,
      },
      {
        icon: `💸`,
        title: `मेंटेनन्स आणि बिलिंग`,
        href: `/features/maintenance`,
        desc: `मासिक बिल आपोआप तयार करा आणि पेमेंट स्टेटस ट्रॅक करा.`,
      },
      {
        icon: `📢`,
        title: `नोटिस बोर्ड`,
        href: `/features/notices`,
        desc: `काही सेकंदात सर्व रहिवाशांना टॅग केलेली नोटिस पुश करा.`,
      },
    ],
  },

  pa: {
    badge: `ਵਿਜ਼ਿਟਰ ਮੈਨੇਜਮੈਂਟ`,
    hero_headline: `ਜਾਣੋ ਕਿ ਤੁਹਾਡੀ ਸੋਸਾਇਟੀ ਵਿੱਚ ਕੌਣ ਦਾਖਲ ਹੋ ਰਿਹਾ ਹੈ`,
    hero_accent: `ਉਨ੍ਹਾਂ ਦੇ ਅੰਦਰ ਆਉਣ ਤੋਂ ਪਹਿਲਾਂ।`,
    hero_sub: `ਹਰ ਵਿਜ਼ਿਟਰ ਸਥਿਤੀ ਨੂੰ ਕਵਰ ਕਰਨ ਵਾਲੇ 4 ਸਮਾਰਟ ਫਲੋ। ਪੂਰੀ ਤਰ੍ਹਾਂ ਸਮਾਰਟਫੋਨ 'ਤੇ ਕੰਮ ਕਰਦਾ ਹੈ - ਕੋਈ ਹਾਰਡਵੇਅਰ ਨਹੀਂ, ਕੋਈ QR ਸਕੈਨਰ ਨਹੀਂ, ਕੋਈ ਇੰਸਟਾਲੇਸ਼ਨ ਖਰਚਾ ਨਹੀਂ।`,
    hero_note: `ਹਰ ਐਂਟਰੀ ਟਾਈਮਸਟੈਂਪ ਨਾਲ ਲੌਗ ਹੁੰਦੀ ਹੈ। ਕਲਾਊਡ ਆਡਿਟ ਟ੍ਰੇਲ। ਪ੍ਰਤੀ-ਯੂਨਿਟ ਹਾਰਡਵੇਅਰ ਖਰਚਾ ਜ਼ੀਰੋ।`,
    hero_log_title: `ਗੇਟ ਐਂਟਰੀ ਲੌਗ`,
    hero_log_sub: `ਅੱਜ ਲਾਈਵ`,
    problem_headline: `ਅੱਜ ਦੀ ਗੇਟ ਐਂਟਰੀ ਦੀ ਸਮੱਸਿਆ`,
    problem_sub: `ਜ਼ਿਆਦਾਤਰ ਭਾਰਤੀ ਸੋਸਾਇਟੀਆਂ ਅਜੇ ਵੀ ਪੇਪਰ ਰਜਿਸਟਰ, WhatsApp ਕਾਲਾਂ, ਜਾਂ ਕਿਸੇ ਵੀ ਪ੍ਰਕਿਰਿਆ ਤੋਂ ਬਿਨਾਂ ਚੱਲਦੀਆਂ ਹਨ।`,
    flows_badge: `4 ਵਿਜ਼ਿਟਰ ਫਲੋ`,
    flows_headline: `ਹਰ ਵਿਜ਼ਿਟਰ ਸਥਿਤੀ, ਕਵਰ ਕੀਤੀ ਗਈ`,
    flows_sub: `ਪਹਿਲਾਂ ਤੋਂ ਯੋਜਨਾਬੱਧ ਮੁਲਾਕਾਤਾਂ ਤੋਂ ਲੈ ਕੇ ਅਚਾਨਕ ਡਿਲੀਵਰੀਆਂ ਤੱਕ - SocietyApp ਹਰ ਮਾਮਲੇ ਨੂੰ ਖਾਸ ਤੌਰ 'ਤੇ ਬਣਾਏ ਗਏ ਫਲੋ ਨਾਲ ਸੰਭਾਲਦਾ ਹੈ।`,
    guard_badge: `ਸਿਕਿਓਰਿਟੀ ਗਾਰਡ ਵਿਊ`,
    guard_headline: `ਗਾਰਡ ਲਈ ਵੀ ਉਹੀ ਐਪ`,
    guard_sub: `ਗਾਰਡ ਉਹੀ SocietyApp ਵਰਤਦਾ ਹੈ। ਕੋਈ ਵੱਖਰਾ ਡਿਵਾਈਸ ਨਹੀਂ, ਕੋਈ ਟ੍ਰੇਨਿੰਗ ਖਰਚਾ ਨਹੀਂ, ਕੋਈ ਹਾਰਡਵੇਅਰ ਇੰਸਟਾਲ ਨਹੀਂ।`,
    features_headline: `ਇਸਨੂੰ ਸ਼ਕਤੀਸ਼ਾਲੀ ਕੀ ਬਣਾਉਂਦਾ ਹੈ`,
    faq_headline: `ਵਿਜ਼ਿਟਰ ਮੈਨੇਜਮੈਂਟ FAQ`,
    related_headline: `ਸੰਬੰਧਿਤ ਮੌਡਿਊਲ`,
    cta_headline: `5 ਮਿੰਟਾਂ ਤੋਂ ਘੱਟ ਸਮੇਂ ਵਿੱਚ ਵਿਜ਼ਿਟਰ ਮੈਨੇਜਮੈਂਟ ਸੈੱਟ ਅੱਪ ਕਰੋ`,
    cta_sub: `50 ਯੂਨਿਟਾਂ ਤੱਕ ਦੀਆਂ ਸੋਸਾਇਟੀਆਂ ਲਈ ਹਮੇਸ਼ਾ ਮੁਫ਼ਤ। ਕੋਈ ਕ੍ਰੈਡਿਟ ਕਾਰਡ ਨਹੀਂ। ਕੋਈ ਹਾਰਡਵੇਅਰ ਨਹੀਂ।`,
    cta_setup: `5 ਮਿੰਟਾਂ ਵਿੱਚ ਸੈੱਟ ਅੱਪ ਕਰੋ - ਮੁਫ਼ਤ`,
    cta_compare: `ਪਲਾਨ ਤੁਲਨਾ ਕਰੋ`,
    problems: [
      {
        icon: `📓`,
        title: `ਗੇਟ 'ਤੇ ਪੇਪਰ ਰਜਿਸਟਰ`,
        desc: `ਕੋਈ ਖੋਜ ਸਹੂਲਤ ਨਹੀਂ, ਕੋਈ ਟਾਈਮਸਟੈਂਪ ਨਹੀਂ, ਆਸਾਨੀ ਨਾਲ ਨਕਲੀ ਬਣਾਇਆ ਜਾ ਸਕਦਾ ਹੈ। ਗਾਰਡ ਹੈਂਡਓਵਰ ਦੌਰਾਨ ਗੁੰਮ ਹੋ ਜਾਂਦਾ ਹੈ।`,
      },
      {
        icon: `📱`,
        title: `WhatsApp ਦੀ ਹਫੜਾ-ਦਫੜੀ`,
        desc: `ਗਾਰਡ ਕਾਲ ਕਰਦਾ ਹੈ, ਨਿਵਾਸੀ ਕਾਲ ਮਿਸ ਕਰਦਾ ਹੈ, ਵਿਜ਼ਿਟਰ ਉਡੀਕ ਕਰਦਾ ਹੈ। ਕੋਈ ਆਡਿਟ ਟ੍ਰੇਲ ਨਹੀਂ।`,
      },
      {
        icon: `🖥️`,
        title: `ਹਾਰਡਵੇਅਰ ਮਹਿੰਗਾ ਹੈ`,
        desc: `QR ਸਕੈਨਰ ਅਤੇ RFID ਰੀਡਰ ਪ੍ਰਤੀ ਗੇਟ ਰੁ.15,000-50,000 ਖਰਚ ਕਰਦੇ ਹਨ, ਨਾਲ ਹੀ ਸਲਾਨਾ ਰੱਖ-ਰਖਾਅ ਖਰਚਾ।`,
      },
    ],
    flows: [
      {
        id: `A`,
        emoji: `📨`,
        title: `ਪ੍ਰੀ-ਅਪਰੂਵਡ ਇਨਵਾਈਟ`,
        subtitle: `ਨਿਵਾਸੀ ਵਿਜ਼ਿਟਰ ਦੇ ਆਉਣ ਤੋਂ ਪਹਿਲਾਂ OTP ਭੇਜਦਾ ਹੈ`,
        steps: [
          {
            icon: `📱`,
            label: `ਨਿਵਾਸੀ ਇਨਵਾਈਟ ਬਣਾਉਂਦਾ ਹੈ`,
            detail: `ਐਪ ਖੋਲ੍ਹਦਾ ਹੈ, Visitors ਫਿਰ Invite 'ਤੇ ਜਾਂਦਾ ਹੈ। ਵਿਜ਼ਿਟਰ ਦਾ ਨਾਮ, ਫੋਨ, ਮਕਸਦ ਅਤੇ ਆਉਣ ਦਾ ਅਨੁਮਾਨਿਤ ਸਮਾਂ ਭਰਦਾ ਹੈ।`,
          },
          {
            icon: `🔢`,
            label: `OTP ਤਿਆਰ ਹੁੰਦਾ ਹੈ`,
            detail: `ਬੈਕਐਂਡ 24 ਘੰਟੇ ਜਾਂ ਅਨੁਮਾਨਿਤ ਆਗਮਨ ਤੋਂ 2 ਘੰਟੇ ਬਾਅਦ ਤੱਕ ਵੈਧ 6-ਅੰਕਾਂ ਵਾਲਾ OTP ਬਣਾਉਂਦਾ ਹੈ।`,
          },
          {
            icon: `💬`,
            label: `OTP ਵਿਜ਼ਿਟਰ ਨਾਲ ਸਾਂਝਾ ਹੁੰਦਾ ਹੈ`,
            detail: `ਨਿਵਾਸੀ WhatsApp ਜਾਂ SMS ਰਾਹੀਂ OTP ਸਾਂਝਾ ਕਰਦਾ ਹੈ। ਵਿਜ਼ਿਟਰ ਆ ਕੇ ਗੇਟ 'ਤੇ OTP ਦੱਸਦਾ ਹੈ।`,
          },
          {
            icon: `✅`,
            label: `ਗਾਰਡ ਤਸਦੀਕ ਕਰਦਾ ਹੈ ਅਤੇ ਐਂਟਰੀ ਲੌਗ ਕਰਦਾ ਹੈ`,
            detail: `ਗਾਰਡ ਐਪ ਵਿੱਚ OTP ਦਰਜ ਕਰਦਾ ਹੈ, ਬੈਕਐਂਡ ਤਸਦੀਕ ਕਰਦਾ ਹੈ, ਐਂਟਰੀ ਟਾਈਮਸਟੈਂਪ ਆਪਣੇ ਆਪ ਦਰਜ ਹੋ ਜਾਂਦਾ ਹੈ।`,
          },
          {
            icon: `🚶`,
            label: `ਗਾਰਡ ਐਗਜ਼ਿਟ ਮਾਰਕ ਕਰਦਾ ਹੈ`,
            detail: `ਵਿਜ਼ਿਟਰ ਦੇ ਜਾਣ 'ਤੇ ਗਾਰਡ Exit ਟੈਪ ਕਰਦਾ ਹੈ। ਪੂਰਾ ਆਡਿਟ ਟ੍ਰੇਲ ਕਲਾਊਡ ਵਿੱਚ ਸਟੋਰ ਹੁੰਦਾ ਹੈ।`,
          },
        ],
      },
      {
        id: `B`,
        emoji: `🚶`,
        title: `ਵਾਕ-ਇਨ`,
        subtitle: `ਗਾਰਡ ਬਿਨਾਂ ਦੱਸੇ ਆਏ ਵਿਜ਼ਿਟਰ ਨੂੰ ਲੌਗ ਕਰਦਾ ਹੈ`,
        steps: [
          {
            icon: `🛡️`,
            label: `ਗਾਰਡ ਵਾਕ-ਇਨ ਲੌਗ ਕਰਦਾ ਹੈ`,
            detail: `ਗਾਰਡ ਐਪ ਖੋਲ੍ਹਦਾ ਹੈ, Log Walk-In 'ਤੇ ਟੈਪ ਕਰਦਾ ਹੈ, ਵਿਜ਼ਿਟਰ ਦਾ ਨਾਮ ਅਤੇ ਹੋਸਟ ਫਲੈਟ ਨੰਬਰ ਦਰਜ ਕਰਦਾ ਹੈ।`,
          },
          {
            icon: `🔔`,
            label: `ਪੁਸ਼ ਨੋਟੀਫਿਕੇਸ਼ਨ ਭੇਜੀ ਜਾਂਦੀ ਹੈ`,
            detail: `ਨਿਵਾਸੀ ਨੂੰ ਤੁਰੰਤ ਪੁਸ਼ ਮਿਲਦਾ ਹੈ: ਗੇਟ 'ਤੇ ਕੋਈ ਤੁਹਾਨੂੰ ਮਿਲਣਾ ਚਾਹੁੰਦਾ ਹੈ।`,
          },
          {
            icon: `👍`,
            label: `ਨਿਵਾਸੀ ਮਨਜ਼ੂਰ ਜਾਂ ਰੱਦ ਕਰਦਾ ਹੈ`,
            detail: `ਨਿਵਾਸੀ ਆਪਣੇ ਫੋਨ ਤੋਂ Approve ਜਾਂ Reject ਟੈਪ ਕਰਦਾ ਹੈ - ਗੇਟ 'ਤੇ ਜਾਣ ਦੀ ਲੋੜ ਨਹੀਂ।`,
          },
          {
            icon: `📋`,
            label: `ਐਂਟਰੀ ਜਾਂ ਇਨਕਾਰ ਦਰਜ ਹੁੰਦਾ ਹੈ`,
            detail: `ਫੈਸਲਾ ਟਾਈਮਸਟੈਂਪ ਨਾਲ ਲੌਗ ਹੁੰਦਾ ਹੈ। ਰੱਦ ਕੀਤੇ ਵਿਜ਼ਿਟਰ ਸੁਰੱਖਿਆ ਸਮੀਖਿਆ ਲਈ ਦਰਜ ਕੀਤੇ ਜਾਂਦੇ ਹਨ।`,
          },
          {
            icon: `🚶`,
            label: `ਗਾਰਡ ਐਗਜ਼ਿਟ ਮਾਰਕ ਕਰਦਾ ਹੈ`,
            detail: `ਵਿਜ਼ਿਟਰ ਦੇ ਜਾਣ 'ਤੇ ਐਗਜ਼ਿਟ ਲੌਗ ਹੁੰਦੀ ਹੈ। ਪੂਰਾ ਵਿਜ਼ਿਟਰ ਜੀਵਨ ਚੱਕਰ ਕੈਪਚਰ ਹੁੰਦਾ ਹੈ।`,
          },
        ],
      },
      {
        id: `C`,
        emoji: `🏠`,
        title: `ਭਰੋਸੇਯੋਗ ਵਿਜ਼ਿਟਰ`,
        subtitle: `ਸਥਾਈ ਪਾਸ ਵਾਲੀਆਂ ਮੇਡਾਂ, ਕੁੱਕ ਅਤੇ ਡਰਾਈਵਰ`,
        steps: [
          {
            icon: `📝`,
            label: `ਨਿਵਾਸੀ ਭਰੋਸੇਯੋਗ ਵਿਜ਼ਿਟਰ ਰਜਿਸਟਰ ਕਰਦਾ ਹੈ`,
            detail: `ਨਾਮ, ਸ਼੍ਰੇਣੀ (ਮੇਡ, ਕੁੱਕ ਜਾਂ ਡਰਾਈਵਰ), ਅਤੇ ਪਾਸ ਦੀ ਕਿਸਮ ਜੋੜਦਾ ਹੈ: ਰੋਜ਼ਾਨਾ, ਮਹੀਨਾਵਾਰ, ਜਾਂ ਸਥਾਈ।`,
          },
          {
            icon: `🗓️`,
            label: `ਵਿਕਲਪਿਕ ਸ਼ਡਿਊਲ ਸੈੱਟ`,
            detail: `ਨਿਵਾਸੀ ਖਾਸ ਦਿਨਾਂ ਅਤੇ ਸਮੇਂ ਦੀਆਂ ਵਿੰਡੋਜ਼ ਤੱਕ ਪਹੁੰਚ ਸੀਮਤ ਕਰਦਾ ਹੈ, ਜਿਵੇਂ ਸੋਮ-ਸ਼ੁੱਕਰ, ਸਵੇਰੇ 8-10।`,
          },
          {
            icon: `✅`,
            label: `ਗਾਰਡ ਆਪਣੇ ਆਪ ਮਨਜ਼ੂਰ ਕਰਦਾ ਹੈ`,
            detail: `ਗਾਰਡ ਨਾਮ ਜਾਂ ਫੋਨ ਨਾਲ ਵਿਜ਼ਿਟਰ ਲੱਭਦਾ ਹੈ। ਬੈਕਐਂਡ ਸ਼ਡਿਊਲ ਦੀ ਜਾਂਚ ਕਰਕੇ ਚੁੱਪਚਾਪ ਆਪਣੇ ਆਪ ਮਨਜ਼ੂਰ ਕਰਦਾ ਹੈ।`,
          },
          {
            icon: `📊`,
            label: `ਰੋਜ਼ਾਨਾ ਡਾਈਜੈਸਟ ਭੇਜਿਆ ਜਾਂਦਾ ਹੈ`,
            detail: `ਨਿਵਾਸੀ ਨੂੰ ਰਾਤ 9 ਵਜੇ ਉਸ ਦਿਨ ਦੀਆਂ ਸਾਰੀਆਂ ਭਰੋਸੇਯੋਗ ਵਿਜ਼ਿਟਰ ਐਂਟਰੀਆਂ ਦਾ ਇੱਕ ਪੁਸ਼ ਮਿਲਦਾ ਹੈ, ਹਰ ਮੁਲਾਕਾਤ ਲਈ ਵੱਖਰੀ ਸੂਚਨਾ ਨਹੀਂ।`,
          },
          {
            icon: `🚫`,
            label: `ਨਿਵਾਸੀ ਕਿਸੇ ਵੀ ਸਮੇਂ ਰੱਦ ਕਰ ਸਕਦਾ ਹੈ`,
            detail: `ਪਾਸ ਨੂੰ ਖਤਮ ਕਰਨ ਲਈ ਇੱਕ ਟੈਪ ਕਾਫੀ ਹੈ। ਮਹੀਨਾਵਾਰ ਪਾਸ ਖਤਮ ਹੋਣ ਤੋਂ 3 ਦਿਨ ਪਹਿਲਾਂ ਆਪਣੇ ਆਪ ਰਿਮਾਈਂਡਰ ਭੇਜਿਆ ਜਾਂਦਾ ਹੈ।`,
          },
        ],
      },
      {
        id: `D`,
        emoji: `📦`,
        title: `ਡਿਲੀਵਰੀ`,
        subtitle: `ਕੋਰੀਅਰ ਅਤੇ ਪਾਰਸਲਾਂ ਲਈ ਆਟੋ-ਐਗਜ਼ਿਟ ਟਾਈਮਰ`,
        steps: [
          {
            icon: `📦`,
            label: `ਗਾਰਡ ਡਿਲੀਵਰੀ ਵਾਕ-ਇਨ ਲੌਗ ਕਰਦਾ ਹੈ`,
            detail: `ਵਾਕ-ਇਨ ਫਲੋ ਵਾਂਗ ਹੀ ਪਰ ਮਕਸਦ Delivery ਸੈੱਟ ਕੀਤਾ ਜਾਂਦਾ ਹੈ। ਨਿਵਾਸੀ ਨੂੰ ਤੁਰੰਤ ਸੂਚਿਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।`,
          },
          {
            icon: `⏱️`,
            label: `ਆਟੋ-ਐਗਜ਼ਿਟ ਟਾਈਮਰ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ`,
            detail: `ਮਨਜ਼ੂਰੀ ਮਿਲਣ 'ਤੇ 15 ਮਿੰਟ ਦੀ ਕਾਊਂਟਡਾਊਨ ਆਪਣੇ ਆਪ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ। ਮੈਨੂਅਲ ਐਗਜ਼ਿਟ ਦੀ ਲੋੜ ਨਹੀਂ।`,
          },
          {
            icon: `🤖`,
            label: `ਸਿਸਟਮ ਆਪਣੇ ਆਪ ਐਗਜ਼ਿਟ ਕਰਦਾ ਹੈ`,
            detail: `ਹਰ 5 ਮਿੰਟ ਵਿੱਚ ਚੱਲਣ ਵਾਲੀ ਕ੍ਰੌਨ ਜੌਬ ਆਪਣਾ ਟਾਈਮਰ ਪਾਰ ਕਰ ਚੁੱਕੇ ਡਿਲੀਵਰੀ ਵਿਜ਼ਿਟਰਾਂ ਨੂੰ ਐਗਜ਼ਿਟ ਕਰਦੀ ਹੈ।`,
          },
          {
            icon: `🚪`,
            label: `ਗਾਰਡ ਜਲਦੀ ਐਗਜ਼ਿਟ ਕਰ ਸਕਦਾ ਹੈ`,
            detail: `ਜੇ ਕੋਰੀਅਰ 15 ਮਿੰਟਾਂ ਤੋਂ ਪਹਿਲਾਂ ਚਲਾ ਜਾਂਦਾ ਹੈ, ਗਾਰਡ ਕਿਸੇ ਵੀ ਸਮੇਂ early exit ਟੈਪ ਕਰ ਸਕਦਾ ਹੈ।`,
          },
        ],
      },
    ],
    guard_features: [
      {
        icon: `📲`,
        label: `ਕੋਈ ਵੱਖਰਾ ਡਿਵਾਈਸ ਨਹੀਂ`,
        detail: `ਗਾਰਡ ਉਹੀ SocietyApp ਵਰਤਦਾ ਹੈ - ਕਿਸੇ QR ਸਕੈਨਰ ਜਾਂ ਹਾਰਡਵੇਅਰ ਟਰਮੀਨਲ ਦੀ ਲੋੜ ਨਹੀਂ।`,
      },
      {
        icon: `🔢`,
        label: `OTP ਵੈਰੀਫਾਈ ਸਕ੍ਰੀਨ`,
        detail: `Verify OTP ਟੈਪ ਕਰੋ, 6 ਅੰਕ ਦਰਜ ਕਰੋ, ਵਿਜ਼ਿਟਰ ਦੇ ਵੇਰਵੇ ਦੇਖੋ ਅਤੇ ਇੱਕ ਟੈਪ ਵਿੱਚ ਮਨਜ਼ੂਰ ਕਰੋ।`,
      },
      {
        icon: `📋`,
        label: `ਵਾਕ-ਇਨ ਫਾਰਮ`,
        detail: `ਨਾਮ ਅਤੇ ਹੋਸਟ ਫਲੈਟ - 15 ਸਕਿੰਟਾਂ ਤੋਂ ਘੱਟ ਸਮੇਂ ਵਿੱਚ। ਜਾਣੇ-ਪਛਾਣੇ ਫਲੈਟਾਂ 'ਤੇ ਆਟੋਕੰਪਲੀਟ।`,
      },
      {
        icon: `🏷️`,
        label: `ਭਰੋਸੇਯੋਗ ਪਾਸ ਚੈੱਕ-ਇਨ`,
        detail: `ਨਾਮ ਜਾਂ ਫੋਨ ਨਾਲ ਖੋਜੋ। ਸ਼ਡਿਊਲ ਸਮੇਤ ਪਾਸ ਦੀ ਵੈਧਤਾ ਤੁਰੰਤ ਦਿਖਾਈ ਦਿੰਦੀ ਹੈ।`,
      },
    ],
    features: [
      {
        icon: `☁️`,
        title: `ਕਲਾਊਡ ਆਡਿਟ ਟ੍ਰੇਲ`,
        desc: `ਟਾਈਮਸਟੈਂਪ, ਗਾਰਡ ਦਾ ਨਾਮ, ਨਿਵਾਸੀ ਦੀ ਮਨਜ਼ੂਰੀ, ਅਤੇ ਵਿਜ਼ਿਟਰ ਦੀ ਫੋਟੋ (ਵਿਕਲਪਿਕ) ਨਾਲ ਹਰ ਐਂਟਰੀ। ਟੈਂਪਰ-ਏਵੀਡੈਂਟ।`,
      },
      {
        icon: `📵`,
        title: `ਜ਼ੀਰੋ ਹਾਰਡਵੇਅਰ`,
        desc: `ਕੋਈ QR ਸਕੈਨਰ ਨਹੀਂ। ਕੋਈ RFID ਕਾਰਡ ਨਹੀਂ। ਕੋਈ ਇੰਸਟਾਲੇਸ਼ਨ ਨਹੀਂ। ਗਾਰਡ ਉਹੀ ਫੋਨ ਵਰਤਦਾ ਹੈ ਜੋ ਉਹ ਪਹਿਲਾਂ ਤੋਂ ਰੱਖਦਾ ਹੈ।`,
      },
      {
        icon: `🔒`,
        title: `OTP ਮਿਆਦ ਕੰਟਰੋਲ`,
        desc: `OTP 24 ਘੰਟਿਆਂ ਬਾਅਦ ਜਾਂ ਅਨੁਮਾਨਿਤ ਆਗਮਨ ਤੋਂ 2 ਘੰਟੇ ਬਾਅਦ ਖਤਮ ਹੋ ਜਾਂਦਾ ਹੈ। ਨਿਵਾਸੀ ਕਿਸੇ ਵੀ ਸਮੇਂ ਇਨਵਾਈਟ ਰੱਦ ਕਰ ਸਕਦੇ ਹਨ।`,
      },
      {
        icon: `📅`,
        title: `ਸ਼ਡਿਊਲ-ਅਧਾਰਿਤ ਪਾਸ`,
        desc: `ਭਰੋਸੇਯੋਗ ਵਿਜ਼ਿਟਰ ਸਿਰਫ਼ ਮਨਜ਼ੂਰਸ਼ੁਦਾ ਦਿਨਾਂ ਅਤੇ ਸਮੇਂ ਦੀਆਂ ਵਿੰਡੋਜ਼ ਵਿੱਚ ਹੀ ਆਪਣੇ ਆਪ ਮਨਜ਼ੂਰ ਹੁੰਦੇ ਹਨ।`,
      },
      {
        icon: `🔔`,
        title: `ਤੁਰੰਤ ਪੁਸ਼ ਅਲਰਟ`,
        desc: `ਗੇਟ 'ਤੇ ਵਿਜ਼ਿਟਰ ਦੇ ਲੌਗ ਹੁੰਦੇ ਹੀ 2 ਸਕਿੰਟਾਂ ਤੋਂ ਘੱਟ ਸਮੇਂ ਵਿੱਚ ਨਿਵਾਸੀ ਨੂੰ ਸੂਚਨਾ।`,
      },
      {
        icon: `📊`,
        title: `ਪੂਰੀ ਗੇਟ ਰਿਪੋਰਟ`,
        desc: `ਰੋਜ਼ਾਨਾ, ਹਫ਼ਤਾਵਾਰੀ, ਜਾਂ ਮਹੀਨਾਵਾਰੀ ਗੇਟ ਲੌਗ ਐਕਸਪੋਰਟ ਕਰੋ। ਵਿਜ਼ਿਟਰ ਦੀ ਕਿਸਮ, ਗਾਰਡ, ਜਾਂ ਫਲੈਟ ਦੁਆਰਾ ਫਿਲਟਰ ਕਰੋ।`,
      },
    ],
    faqs: [
      {
        q: `ਕੀ ਸਿਕਿਓਰਿਟੀ ਗਾਰਡ ਨੂੰ ਵੱਖਰੀ ਐਪ ਜਾਂ ਡਿਵਾਈਸ ਦੀ ਲੋੜ ਹੈ?`,
        a: `ਨਹੀਂ। ਗਾਰਡ ਨਿਵਾਸੀਆਂ ਅਤੇ ਐਡਮਿਨਾਂ ਵਾਂਗ ਉਹੀ SocietyApp ਵਰਤਦਾ ਹੈ। ਕੋਈ ਵੀ Android ਜਾਂ iOS ਸਮਾਰਟਫੋਨ ਕੰਮ ਕਰਦਾ ਹੈ। ਕੋਈ ਵਾਧੂ ਹਾਰਡਵੇਅਰ ਲੋੜੀਂਦਾ ਨਹੀਂ।`,
      },
      {
        q: `ਜੇ ਵਿਜ਼ਿਟਰ ਦਾ OTP ਖਤਮ ਹੋ ਜਾਵੇ ਤਾਂ ਕੀ ਹੁੰਦਾ ਹੈ?`,
        a: `ਗਾਰਡ ਨੂੰ OTP ਖਤਮ ਹੋਣ ਦਾ ਸੁਨੇਹਾ ਦਿਖਾਈ ਦਿੰਦਾ ਹੈ। ਨਿਵਾਸੀ ਬਸ ਨਵਾਂ ਇਨਵਾਈਟ ਬਣਾਉਂਦਾ ਹੈ। ਖਤਮ ਹੋਏ OTP ਆਡਿਟ ਟ੍ਰੇਲ ਲਈ ਆਪਣੇ ਆਪ ਦਰਜ ਹੁੰਦੇ ਹਨ।`,
      },
      {
        q: `ਕੀ ਮੈਂ ਆਪਣੀ ਮੇਡ ਦੀ ਐਂਟਰੀ ਲਈ ਖਾਸ ਸਮਾਂ ਸੈੱਟ ਕਰ ਸਕਦਾ ਹਾਂ?`,
        a: `ਹਾਂ। ਭਰੋਸੇਯੋਗ ਵਿਜ਼ਿਟਰ ਰਜਿਸਟਰ ਕਰਦੇ ਸਮੇਂ, ਸੋਮ-ਸ਼ੁੱਕਰ, ਸਵੇਰੇ 8-10 ਵਰਗੇ ਮਨਜ਼ੂਰਸ਼ੁਦਾ ਦਿਨ ਅਤੇ ਸਮੇਂ ਦੀਆਂ ਵਿੰਡੋਜ਼ ਸੈੱਟ ਕਰੋ। ਇਸ ਸਮੇਂ ਤੋਂ ਬਾਹਰ ਚੈੱਕ-ਇਨ ਬਲੌਕ ਹੋ ਜਾਂਦਾ ਹੈ।`,
      },
      {
        q: `ਕੀ ਵਿਜ਼ਿਟਰ ਡਾਟਾ ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਸਟੋਰ ਕੀਤਾ ਜਾਂਦਾ ਹੈ?`,
        a: `ਸਾਰੇ ਵਿਜ਼ਿਟਰ ਲੌਗ ਐਨਕ੍ਰਿਪਟਡ ਕਲਾਊਡ ਸਟੋਰੇਜ ਵਿੱਚ ਸਟੋਰ ਕੀਤੇ ਜਾਂਦੇ ਹਨ। ਸਿਰਫ਼ ਐਡਮਿਨ ਅਤੇ ਸੰਬੰਧਿਤ ਨਿਵਾਸੀ ਹੀ ਵਿਜ਼ਿਟਰ ਇਤਿਹਾਸ ਦੇਖ ਸਕਦੇ ਹਨ। ਡਾਟਾ ਕਦੇ ਵੀ ਤੀਜੀ ਧਿਰ ਨਾਲ ਸਾਂਝਾ ਨਹੀਂ ਕੀਤਾ ਜਾਂਦਾ।`,
      },
      {
        q: `ਕੀ ਮੈਂ ਦੇਖ ਸਕਦਾ ਹਾਂ ਕਿ ਕਿਸਨੇ ਮਨਜ਼ੂਰ ਕੀਤਾ ਅਤੇ ਕਿਸਨੇ ਰੱਦ ਕੀਤਾ?`,
        a: `ਹਾਂ। ਗੇਟ ਲੌਗ ਵਿੱਚ ਮਨਜ਼ੂਰ ਕਰਨ ਵਾਲੇ ਨਿਵਾਸੀ, ਐਂਟਰੀ ਲੌਗ ਕਰਨ ਵਾਲੇ ਗਾਰਡ, ਟਾਈਮਸਟੈਂਪ, ਅਤੇ ਵਿਜ਼ਿਟਰ ਦੇ ਮਕਸਦ ਦਿਖਾਈ ਦਿੰਦੇ ਹਨ - ਇੱਕ ਪੂਰਾ ਆਡਿਟ ਟ੍ਰੇਲ।`,
      },
    ],
    related: [
      {
        icon: `🛡️`,
        title: `ਸਿਕਿਓਰਿਟੀ ਗਾਰਡ ਪੋਰਟਲ`,
        href: `/features`,
        desc: `ਗਾਰਡ ਸ਼ਿਫਟ ਮੈਨੇਜਮੈਂਟ ਅਤੇ ਹੈਂਡਓਵਰ ਲਈ ਸਮਰਪਿਤ UX।`,
      },
      {
        icon: `💸`,
        title: `ਮੇਨਟੇਨੈਂਸ ਅਤੇ ਬਿਲਿੰਗ`,
        href: `/features/maintenance`,
        desc: `ਮਹੀਨਾਵਾਰ ਬਿੱਲ ਆਪਣੇ ਆਪ ਬਣਾਓ ਅਤੇ ਪੇਮੈਂਟ ਸਟੇਟਸ ਟਰੈਕ ਕਰੋ।`,
      },
      {
        icon: `📢`,
        title: `ਨੋਟਿਸ ਬੋਰਡ`,
        href: `/features/notices`,
        desc: `ਕੁਝ ਸਕਿੰਟਾਂ ਵਿੱਚ ਸਾਰੇ ਨਿਵਾਸੀਆਂ ਨੂੰ ਟੈਗ ਕੀਤੀਆਂ ਨੋਟਿਸਾਂ ਪੁਸ਼ ਕਰੋ।`,
      },
    ],
  }

};

export function getVMContent(locale: Locale): VMContent {
  return (content[locale] ?? content['en']) as VMContent;
}