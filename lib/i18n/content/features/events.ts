// lib/i18n/content/features/events.ts
// Per-locale content for the "events" feature page.
import type { FeaturePageContent } from '../types';
import type { Locale } from '../../translations';

const events: Partial<Record<Locale, FeaturePageContent>> = {

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
    mr: {
      badge: `कार्यक्रम आणि पोल्स`,
      emoji: `🎉`,
      headline: `RSVP सह सोसायटी कार्यक्रम.`,
      headlineAccent: `पोल्स ज्या रहिवाशांना खरंच उत्तर द्यायचे असतात.`,
      subline: `कार्यक्रम प्लॅन करा, RSVP मिळवा आणि फोटो गॅलरीमध्ये आठवणी शेअर करा.`,
      problems: [{ icon: `📅`, title: `कार्यक्रमांची घोषणा पण उपस्थिती अज्ञात`, desc: `कोण किती लोक येणार हे माहित नाही.` }],
      flows: [{ icon: `📅`, label: `अॅडमिन कार्यक्रम तयार करतो`, detail: `कार्यक्रम नाव, तारीख आणि वेळ भरून तयार करा.` }],
      adminView: { title: `⚙️ अॅडमिन / कमिटी दृश्य`, points: [`कार्यक्रम तयार करा`, `RSVP ट्रॅक करा`] },
      residentView: { title: `👤 रहिवासी दृश्य`, points: [`कार्यक्रम पाहा`, `RSVP द्या`] },
      features: [{ icon: `📋`, title: `RSVP व्यवस्थापन`, desc: `उपस्थिती सहज ट्रॅक करा.` }],
      faqs: [{ q: `हे कसे कार्य करते?`, a: `कार्यक्रम आणि पोल्स एका अॅपमध्ये व्यवस्थापित करा.` }],
      related: [{ icon: `📢`, title: `नोटिस बोर्ड`, href: `/features/notices`, desc: `सूचना आणि घोषणा.` }],
      ctaHeadline: `तुमचा पुढचा सोसायटी कार्यक्रम स्मार्ट पद्धतीने नियोजित करा.`,
      ctaSub: `कार्यक्रम आणि पोल्स स्टँडर्ड प्लॅनमध्ये उपलब्ध आहेत.`,
    },
    pa: {
      badge: `ਈਵੈਂਟਸ ਅਤੇ ਪੋਲਸ`,
      emoji: `🎉`,
      headline: `RSVP ਨਾਲ ਸੋਸਾਇਟੀ ਇਵੈਂਟਸ.`,
      headlineAccent: `ਪੋਲ ਜੋ ਰਿਹਾਇਸ਼ੀ ਅਸਲ ਵਿੱਚ ਜਵਾਬ ਦਿੰਦੇ ਹਨ.`,
      subline: `ਈਵੈਂਟਸ plannen ਕਰੋ, RSVP ਲਓ ਅਤੇ ਫੋਟੋ ਗੈਲਰੀ ਵਿੱਚ ਯਾਦਾਂ ਸਾਂਝੀਆਂ ਕਰੋ.`,
      problems: [{ icon: `📅`, title: `ਈਵੈਂਟਸ ਦੀ ਘੋਸ਼ਣਾ ਪਰ ਹਾਜ਼ਰੀ ਅਣਜਾਣ`, desc: `ਕੋਣ ਕਿੰਨੇ ਆਉਂਦੇ ਹਨ ਇਹ ਪਤਾ ਨਹੀਂ.` }],
      flows: [{ icon: `📅`, label: `ਐਡਮਿਨ ਇਵੈਂਟ ਬਣਾਉਂਦਾ ਹੈ`, detail: `ਨਾਮ, ਤਾਰੀਖ ਅਤੇ ਵੇਲ੍ਹ ਭਰੋ.` }],
      adminView: { title: `⚙️ ਐਡਮਿਨ / ਕਮੇਟੀ ਦ੍ਰਿਸ਼`, points: [`ਈਵੈਂਟ ਬਣਾਓ`, `RSVP ਟਰੈਕ ਕਰੋ`] },
      residentView: { title: `👤 ਰਿਹਾਇਸ਼ੀ ਦ੍ਰਿਸ਼`, points: [`ਈਵੈਂਟ ਦੇਖੋ`, `RSVP ਦਿਓ`] },
      features: [{ icon: `📋`, title: `RSVP ਮੈਨਿਜਮੈਂਟ`, desc: `ਹਾਜ਼ਰੀ ਆਸਾਨੀ ਨਾਲ ਟਰੈਕ ਕਰੋ.` }],
      faqs: [{ q: `ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ?`, a: `ਈਵੈਂਟਸ ਅਤੇ ਪੋਲ ਇੱਕ ਐਪ ਵਿੱਚ ਮੈਨਿਜ ਕਰਦੇ ਹਨ.` }],
      related: [{ icon: `📢`, title: `ਨੋਟੀਸ ਬੋਰਡ`, href: `/features/notices`, desc: `ਨੋਟੀਸ ਅਤੇ ਘੋਸ਼ਣਾਵਾਂ.` }],
      ctaHeadline: `ਆਪਣੇ ਅਗਲੇ ਸੋਸਾਇਟੀ ਇਵੈਂਟ ਨੂੰ ਸਮਝਦਾਰ ਤਰੀਕੇ ਨਾਲ ਯੋਜਿਤ ਕਰੋ.`,
      ctaSub: `ਈਵੈਂਟਸ ਅਤੇ ਪੋਲ ਸਟੈਂਡਰਡ ਪਲਾਨ ਵਿੱਚ ਉਪਲਬਧ ਹਨ.`,
    },
};

export default events;
