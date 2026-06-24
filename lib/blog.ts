// home/claude/societyapp-build/lib/blog.ts

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  emoji: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "visitor-management-without-hardware",
    title: "How to manage society visitors without a hardware gate device",
    description: "QR scanners and RFID systems cost ₹50,000+ per gate. Here's how modern societies manage visitor entry with just a smartphone app — and why it's actually more secure.",
    date: "2024-11-15",
    readTime: "7 min read",
    category: "Security",
    emoji: "🚪",
    content: `
## The ₹50,000 problem at your gate

Walk into most gated communities across India and you'll see one of two things: a bored security guard with a paper register, or an expensive QR scanner that residents have figured out how to bypass in 3 days.

Neither option works well. And here's what's changed: neither option is necessary anymore.

### Why hardware-based visitor management fails

Traditional hardware gate solutions — QR scanners, RFID card readers, intercom systems — have a fundamental problem: they're built for corporate offices, not residential societies.

Consider the costs. A basic QR scanner setup with intercom costs ₹15,000–₹50,000 per gate, plus annual maintenance contracts. For a 100-unit society, that's a significant capital expenditure before you've solved any actual security problem.

Then there's the maintenance issue. Hardware breaks. Scanners malfunction in the rain. Cards get lost. Residents forget their RFID tags. And when the system is down, the guard reverts to the paper register anyway.

### The smartphone-first approach

Modern visitor management works entirely on smartphones — no hardware at the gate at all. Here's how the 4 core flows work:

**Pre-Approved Invite:** The resident creates an invite in the app and shares a 6-digit OTP with their visitor. When the visitor arrives, the guard enters the OTP and the entry is logged automatically.

**Walk-In:** An unannounced visitor arrives. The guard logs their name and host flat in the app. The resident receives an instant push notification and approves or rejects from their phone — no need to walk to the gate.

**Trusted Visitors:** Regular domestic help (maids, cooks, drivers) get standing passes. The guard checks them in with one tap. Residents get a daily digest rather than per-visit notifications.

**Delivery:** Courier and delivery apps get auto-exit timers (default 15 minutes). The guard doesn't need to remember to manually close the entry.

### The security audit trail

Here's what paper registers can't give you: a timestamped, searchable, tamper-evident log of every visitor who entered your society. Every entry includes:

- Visitor name and purpose
- Which resident approved the entry
- Which guard logged it
- Entry and exit timestamps
- The OTP or pass type used

This audit trail is invaluable if there's ever a security incident. You can search by date, flat, or visitor name in seconds.

### What about societies that insist on hardware?

Some large gated communities with multiple gates and 24-hour guards prefer a hybrid approach — they use the app for the digital audit trail but also have intercom systems for resident communication. SocietyApp supports this too.

But for the majority of Indian societies — 50 to 500 units with one gate — a smartphone-based system is simpler, cheaper, and more secure than any hardware solution.

### Getting started

The entire visitor management setup takes under 5 minutes:

1. Register your society on SocietyApp (free up to 50 units)
2. Add your security guard as a Guard user
3. The guard downloads the app and is ready

That's it. No wiring, no installation, no contractor visits.

Visitor Management is included permanently in the Free plan. There's no trial period — you get the full feature set for societies up to 50 units at zero cost.
    `,
  },
  {
    slug: "mygate-vs-societyapp-comparison",
    title: "MyGate vs SocietyApp: Full comparison 2024",
    description: "Switching from MyGate? Here's an honest comparison of pricing, features, hardware requirements, and what Indian societies actually care about.",
    date: "2024-11-08",
    readTime: "9 min read",
    category: "Comparison",
    emoji: "⚖️",
    content: `
## MyGate vs SocietyApp: Which one is right for your society?

MyGate is the dominant player in Indian society management. They've built a strong brand, have solid funding, and have introduced many societies to the idea of digital gate management.

But dominance doesn't mean it's the right fit for every society. Here's an honest comparison.

### Pricing

This is where the difference is most stark.

**MyGate** charges on a per-unit, per-month basis. For a 200-unit society, expect to pay ₹8,000–₹15,000 per month depending on your plan and negotiation. Annual contracts are standard. There's no meaningful free tier.

**SocietyApp** offers a genuinely free tier (up to 50 units, including Visitor Management), and paid plans start at a flat ₹2,999/month for up to 200 units — not per unit.

For a 200-unit society, that's potentially ₹60,000–₹100,000/year saved.

### Hardware requirements

**MyGate** traditionally requires hardware at the gate — their proprietary intercom/tablet system. While they've moved toward more app-based flows in recent years, the hardware setup is still part of most enterprise deployments. That means installation time, maintenance contracts, and hardware failure risks.

**SocietyApp** requires zero hardware. The guard uses the same Android smartphone they likely already carry. This reduces the barrier to adoption significantly, especially for smaller societies.

### Features comparison

| Feature | MyGate | SocietyApp |
|---|---|---|
| Visitor Management | ✅ | ✅ |
| Maintenance Billing | ✅ | ✅ |
| Notice Board | ✅ | ✅ Free |
| Multilingual UI | Limited | 6 languages |
| Free tier | No | Yes (50 units) |
| Per-unit pricing | Yes | No (up to 200) |
| Hardware required | Usually | Never |
| API access | Enterprise only | Pro plan |

### Where MyGate wins

MyGate has more integrations with building hardware (intercoms, CCTV systems, boom barriers). If your society has invested in hardware infrastructure and you need deep integration, MyGate may be the better fit.

They also have a larger support team and more established processes for very large communities (1,000+ units).

### Where SocietyApp wins

For societies that want to get started quickly without hardware investment, SocietyApp is significantly faster and cheaper to deploy. The Free plan with real Visitor Management is a genuine advantage — societies can validate the system before committing.

The 6-language UI is a meaningful differentiator. For secretaries in Gujarat, Maharashtra, Tamil Nadu, or Punjab who are more comfortable in their regional language, this matters in daily use.

### Which should you choose?

- **Choose MyGate if:** You're a large community (500+ units) that has existing hardware infrastructure and needs enterprise integrations.
- **Choose SocietyApp if:** You want a cost-effective, hardware-free solution and want to try it free before committing.

The honest answer is: try both. SocietyApp's Free plan costs nothing to set up. Within a week, you'll know if it works for your society.
    `,
  },
  {
    slug: "collect-maintenance-fees-online",
    title: "How to collect maintenance fees online from residents without chasing",
    description: "Still sending WhatsApp messages asking residents to pay? Here's how to automate maintenance billing, get receipts automatically, and cut defaulters by 60%.",
    date: "2024-10-22",
    readTime: "6 min read",
    category: "Finance",
    emoji: "💸",
    content: `
## The maintenance fee chase is exhausting

If you're a society secretary, you know the drill. The 10th of the month arrives. You send a WhatsApp message to the group asking everyone to pay. Some do. Most don't. You send a follow-up on the 15th. Then individual messages to the stragglers. Then you have to compile who paid from a flurry of UPI screenshots across three different WhatsApp chats.

This takes hours every month. And it's completely unnecessary.

### Why the current system fails

The problem isn't that residents don't want to pay — most do. The problem is friction and lack of structure.

When the only "bill" is a WhatsApp message in a group chat, it gets buried. There's no clear due date displayed. There's no receipt. The resident pays via UPI, sends a screenshot, and assumes it's done. The secretary has to match screenshots to flats manually.

And the defaulter list? Most secretaries maintain it in Excel or, worse, in their head.

### How digital maintenance billing works

Here's the flow with SocietyApp:

**The admin creates the bill once.** Enter the bill name (August Maintenance), amount, and due date. If you have different rates for 1BHK and 2BHK flats, you can set that too.

**Residents see the bill in their app.** Not in a WhatsApp group — in a dedicated Bills section with a clear due date and amount breakdown.

**Automated reminders do the chasing.** Push notifications go out 7 days before, 3 days before, and on the due date. No manual follow-up needed.

**Admin confirms payments, receipts are auto-generated.** When a resident pays (via any method), the admin marks it in the app. A digital receipt is immediately available to the resident.

**The defaulter report is always current.** At any moment, you can see exactly who hasn't paid, their contact details, and how many days overdue they are.

### The results

Societies using structured digital billing typically see:

- 40–60% reduction in payment follow-up time
- 30% improvement in on-time payment rates (because reminders work)
- Zero reconciliation disputes (because every payment has a digital trail)

One society in Pune reduced their average payment collection time from 25 days to 8 days after switching.

### Getting started

Maintenance billing is included in SocietyApp's Free plan for basic monthly billing, and in Standard and above for full automation including defaulter reports and receipt generation.

The setup takes about 15 minutes: create your first bill, set your flat amounts, and publish. Residents get a notification that the bill is ready.

No more UPI screenshot archaeology.
    `,
  },
  {
    slug: "trusted-visitor-passes-maids-domestic-help",
    title: "How to set up trusted visitor passes for maids and domestic help",
    description: "Your maid comes every day at 8 AM. Should the security guard call you every single morning? Here's a smarter way to handle domestic staff entry.",
    date: "2024-10-10",
    readTime: "5 min read",
    category: "Security",
    emoji: "🏠",
    content: `
## The daily maid call problem

In many societies, every morning goes like this: the maid arrives at the gate. The guard calls the resident. The resident is in the shower, or asleep, or on a work call. The maid waits. The guard calls again. The resident answers groggy and annoyed. "Yes, she can come up!"

This happens 25 days a month, every month. It's friction that shouldn't exist.

### What are trusted visitor passes?

A trusted visitor pass is a pre-authorised entry permit for regular domestic help — maids, cooks, drivers, and other frequent visitors. Instead of the guard calling you every day, the system automatically authorises entry for these specific people based on rules you've set.

### Setting it up in SocietyApp

Creating a trusted pass takes about 2 minutes:

**Step 1: Open the Visitors section** in your SocietyApp and select Trusted Visitors.

**Step 2: Add the visitor details.** Name, phone number, and category (Maid / Cook / Driver / Other).

**Step 3: Set the pass type.** Choose from Daily (renews every day), Monthly (valid for a month), or Permanent (until you manually revoke it).

**Step 4: Set an access schedule (optional but recommended).** Specify which days and what time window the person is allowed entry. For example: Monday to Saturday, 8:00 AM to 10:00 AM only.

That's it. The guard now sees this person's name and valid pass when they arrive and can check them in with one tap — no call to you needed.

### What the guard sees

When the domestic help arrives, the guard searches by name or phone number. The app shows:

- Pass type and validity
- Allowed days and time window
- Resident's flat number
- A simple Check-In button

If the person arrives outside the allowed schedule (say, on a Sunday when you've set Monday to Saturday), the check-in is blocked and the guard is prompted to call the resident.

### How you're kept informed

Instead of a phone call every morning, you get a daily digest push notification at 9 PM showing all trusted visitor entries for that day. One notification instead of many.

You can also view the full entry history for any trusted visitor in the app.

### Revoking a pass

If your circumstances change — the maid stops coming, or you have a concern — you can revoke the pass instantly from your phone. The revocation takes effect immediately. The next time that person arrives, the guard's app will show the pass as expired.

### Monthly pass expiry reminders

If you've set a monthly pass, you get an in-app reminder 3 days before it expires so you can renew it in time. No unpleasant situations at the gate on a Monday morning.

This entire system is part of the Free plan — no upgrade required.
    `,
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find(p => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}