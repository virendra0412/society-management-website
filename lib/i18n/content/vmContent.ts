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
  }

};

export function getVMContent(locale: Locale): VMContent {
  return (content[locale] ?? content['en']) as VMContent;
}