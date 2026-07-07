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
    hero_note: `દરેક એન્ટ્રી ટાઈ. સ. - ક્લ. ઓ. ટ. - શ. હ. ખ.`,
    hero_log_title: `ગેટ એન્ટ્રી લોગ`,
    hero_log_sub: `લાઈવ આજ`,
    problem_headline: `આજના ગેટ એન્ટ્રીની સમસ્યા`,
    problem_sub: `મોટાભાગની ભારતીય સોસ. હજુ પેપર ર., WhatsApp ક. પ. ન. છ.`,
    flows_badge: `4 વિઝ. ફ્લો`,
    flows_headline: `દ. વ. પ., આ. લ.`,
    flows_sub: `પૂ.-આ. મ.થ. અ. ડ. - SocietyApp ઉ.-ન. ફ. .`,
    guard_badge: `સ. ગ. વ.`,
    guard_headline: `ગ. પ. પ. એ જ એ.`,
    guard_sub: `ગ. એ. SA. ક. ડ. ન., ટ. ન., હ. ઈ. ન.`,
    features_headline: `શ. ત. શ. બ.`,
    faq_headline: `વ. મ. FAQ`,
    related_headline: `સ. મ.`,
    cta_headline: `5 મ. ક. ઓ. વ. મ. સ. .`,
    cta_sub: `50 ય. હ. મ. .`,
    cta_setup: `5 મ. - મ.`,
    cta_compare: `પ. સ.`,
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
  }

};

export function getVMContent(locale: Locale): VMContent {
  return (content[locale] ?? content['en']) as VMContent;
}
