"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = [
  {
    id: "getting-started",
    icon: "🚀",
    label: "Getting Started",
    colour: "bg-teal/10 text-teal",
    articles: [
      {
        slug: "register-your-society",
        title: "How to register your society",
        summary: "Step-by-step guide to submitting your society application and going live.",
        readMins: 3,
        body: [
          { type: "p", text: "Registering your society on SocietyApp takes about 5 minutes. Here's exactly what to do." },
          { type: "h3", text: "Step 1 — Submit your application" },
          { type: "p", text: "Go to societyapp.in/register. Fill in your society name, city, state, number of flats, and your name and email as the admin. You don't need to create a password yet — we send it to you after approval." },
          { type: "h3", text: "Step 2 — Wait for approval (usually under 24 hours)" },
          { type: "p", text: "Our team reviews applications on weekdays between 9 AM – 7 PM IST. You'll receive an email with your admin credentials once approved." },
          { type: "h3", text: "Step 3 — Log in and set up your society" },
          { type: "p", text: "Use the credentials from the email to log into the app. From the Admin panel you can add your wing/block names, create flat numbers, and generate a Join Code for residents." },
          { type: "tip", text: "You can start using the gate-visitor log immediately after login — no residents need to be added first." },
          { type: "h3", text: "Step 4 — Invite your first resident" },
          { type: "p", text: "Share the 8-character Join Code with residents. They enter it during registration in the app. You approve each registration from the Approvals tab." },
        ],
      },
      {
        slug: "invite-residents",
        title: "Inviting residents to join",
        summary: "How to share your Join Code and approve resident registrations.",
        readMins: 2,
        body: [
          { type: "p", text: "Every society has a unique Join Code — a short code residents enter when they register. It ties their account to your society without requiring you to share any private link." },
          { type: "h3", text: "Finding your Join Code" },
          { type: "p", text: "In the app, go to More → Admin → Society Settings. Your Join Code is displayed at the top. Tap to copy." },
          { type: "h3", text: "Approving new registrations" },
          { type: "p", text: "New registrations appear in the Approvals tab (the crown icon on the bottom bar). Tap a pending request to view the flat number they entered, then Approve or Reject." },
          { type: "tip", text: "WhatsApp your Join Code to your residents' group chat — it takes one message to start the whole onboarding." },
        ],
      },
      {
        slug: "language-settings",
        title: "Changing the app language",
        summary: "SocietyApp supports 6 languages. Each user sets their own preference.",
        readMins: 1,
        body: [
          { type: "p", text: "SocietyApp supports English, Hindi, Gujarati, Tamil, Marathi, and Punjabi. Every user independently chooses their preferred language — the admin's choice doesn't affect residents." },
          { type: "h3", text: "How to change your language" },
          { type: "p", text: "Tap the language globe icon on the login screen (before logging in), or go to Profile → Language after login. Changes take effect immediately, no restart needed." },
        ],
      },
    ],
  },
  {
    id: "visitor",
    icon: "🚪",
    label: "Visitor Management",
    colour: "bg-blue-50 text-blue-600",
    articles: [
      {
        slug: "pre-approve-a-visitor",
        title: "Pre-approving a visitor with an OTP",
        summary: "Generate a one-time OTP before your guest arrives so entry is instant.",
        readMins: 2,
        body: [
          { type: "p", text: "The fastest way to let a guest in is to generate an OTP before they arrive. The guard scans or types it, and entry is logged automatically." },
          { type: "h3", text: "Generating an OTP" },
          { type: "p", text: "In the app, go to Visitors → + Invite. Enter your guest's name, an optional phone number, the visit purpose (Guest, Delivery, Cab, etc.), and tap Generate OTP & Invite." },
          { type: "p", text: "The app shows a 6-digit OTP. Share it with your guest via WhatsApp or SMS using the Share OTP button. A QR code is also shown for quick gate scanning." },
          { type: "h3", text: "OTP expiry" },
          { type: "p", text: "OTPs are valid for 24 hours from generation. You can cancel an invite at any time from your Visitors list before it is used." },
          { type: "tip", text: "For delivery agents, use the Delivery purpose — the system auto-logs exit after 15 minutes, keeping your gate log clean." },
        ],
      },
      {
        slug: "trusted-visitor-pass",
        title: "Setting up a Trusted Visitor pass",
        summary: "Give your maid, cook, or driver a recurring pass so they don't need an OTP every day.",
        readMins: 3,
        body: [
          { type: "p", text: "Trusted Visitor passes are designed for people who come regularly — maids, cooks, drivers, tutors. Once registered, they can enter during their allowed schedule without you needing to approve each visit." },
          { type: "h3", text: "Registering a Trusted Visitor" },
          { type: "p", text: "Go to Visitors → Trusted tab → + Register. Enter their name, category (Maid, Cook, Driver, etc.), phone number (optional), and set their allowed days and time window." },
          { type: "h3", text: "Pass types" },
          { type: "p", text: "Daily passes expire at midnight. Monthly passes are valid for 30 days. Permanent passes don't expire until you revoke them." },
          { type: "h3", text: "Revoking a pass" },
          { type: "p", text: "In the Trusted tab, find the person and tap Revoke Pass. Their access stops immediately." },
          { type: "tip", text: "Set a time window that matches actual working hours (e.g. 8:00–10:00 for a morning maid) — this prevents misuse of the pass outside those hours." },
        ],
      },
      {
        slug: "walk-in-entry",
        title: "Logging a walk-in visitor (guard flow)",
        summary: "How the security guard logs an unexpected visitor without an OTP.",
        readMins: 2,
        body: [
          { type: "p", text: "When a visitor arrives without an OTP, the guard uses the Walk-In flow to log the entry and notify the resident to approve or reject." },
          { type: "h3", text: "Guard steps" },
          { type: "p", text: "Tap + Walk-in in the Visitors screen. Enter the visitor's name, purpose, and optionally the host flat number. If you enter the flat number, the resident receives a push notification immediately." },
          { type: "h3", text: "Resident approval" },
          { type: "p", text: "The resident sees an alert in their app showing the visitor name and can tap Approve or Reject. The guard sees the decision update on their screen in real time." },
        ],
      },
    ],
  },
  {
    id: "maintenance",
    icon: "💸",
    label: "Maintenance & Billing",
    colour: "bg-amber/10 text-amber",
    articles: [
      {
        slug: "create-a-bill",
        title: "Creating and publishing a maintenance bill",
        summary: "How to set up a monthly bill, set due dates, and notify all residents.",
        readMins: 4,
        body: [
          { type: "p", text: "Maintenance billing in SocietyApp works in two stages: create a draft, then publish it to residents. Published bills are visible to residents immediately." },
          { type: "h3", text: "Step 1 — Create a draft" },
          { type: "p", text: "Go to Payments → + New. Fill in the bill title (e.g. July 2025 Maintenance), amount, due date, and choose whether it applies to all flats or specific ones." },
          { type: "h3", text: "Step 2 — Set a late penalty (optional)" },
          { type: "p", text: "Toggle Auto-charge late penalty and enter a penalty amount. The system automatically adds this to bills not paid by the due date." },
          { type: "h3", text: "Step 3 — Publish" },
          { type: "p", text: "Tap 📢 Publish. All residents get a push notification. The bill appears in their Payments tab immediately." },
          { type: "h3", text: "Recording a payment" },
          { type: "p", text: "When a resident pays (cash, UPI, NEFT), open the bill, find their flat, and tap ✓ Pay → Record Payment. Enter the amount, method, and optional transaction ID. The receipt is auto-generated." },
          { type: "tip", text: "Use the Defaulters Triage view (⚠️ shortcut on the Payments screen) to see all outstanding and overdue flats in one place, sorted by amount owed." },
        ],
      },
      {
        slug: "defaulters-report",
        title: "Using the Defaulters Report",
        summary: "Find and manage flats with unpaid or overdue bills.",
        readMins: 2,
        body: [
          { type: "p", text: "The Defaulters Report shows every flat with at least one unpaid or overdue bill. You can sort by outstanding amount, number of bills, or flat number." },
          { type: "h3", text: "Opening the report" },
          { type: "p", text: "From the Payments screen, tap ⚠️ Defaulter Triage (the shortcut at the bottom of the screen)." },
          { type: "h3", text: "Sending reminders" },
          { type: "p", text: "Tap any flat in the report to see all their unpaid bills. You can record a payment directly from this screen." },
        ],
      },
    ],
  },
  {
    id: "notices",
    icon: "📢",
    label: "Notices & Communication",
    colour: "bg-green/10 text-green",
    articles: [
      {
        slug: "post-a-notice",
        title: "Posting a notice to all residents",
        summary: "Create and publish community notices with tags like Urgent, Finance, or Reminder.",
        readMins: 2,
        body: [
          { type: "p", text: "Notices are the fastest way to communicate with every resident simultaneously. All residents receive a push notification when a new notice is posted." },
          { type: "h3", text: "Creating a notice" },
          { type: "p", text: "Go to More → Notices → Post Notice. Enter a title and message body, then choose a tag: Urgent, Finance, Event, Notice, or Reminder." },
          { type: "p", text: "Urgent notices are pinned to the top of the notice board and displayed with a red badge." },
          { type: "h3", text: "Editing a notice" },
          { type: "p", text: "Tap on any notice you've posted and select Edit. Changes are saved instantly." },
          { type: "tip", text: "Use the Finance tag for water/electricity bill announcements. Residents can filter notices by tag to find relevant ones faster." },
        ],
      },
      {
        slug: "polls",
        title: "Running a poll or community vote",
        summary: "Create single-choice polls for AGM decisions, facility upgrades, and more.",
        readMins: 2,
        body: [
          { type: "p", text: "Polls let you take the community's pulse on any decision — from choosing a new security agency to voting on parking rules." },
          { type: "h3", text: "Creating a poll" },
          { type: "p", text: "Go to More → Polls → + Create. Enter your question and at least 2 options. Tap Create Poll." },
          { type: "p", text: "The poll is live immediately. Residents can vote once. Real-time results are visible to everyone." },
          { type: "h3", text: "Closing a poll" },
          { type: "p", text: "Only admins can close a poll. Once closed, residents cannot add new votes, but results remain visible permanently." },
        ],
      },
    ],
  },
  {
    id: "admin",
    icon: "👑",
    label: "Admin & Settings",
    colour: "bg-purple-50 text-purple-600",
    articles: [
      {
        slug: "add-committee-member",
        title: "Adding a committee member with limited access",
        summary: "Grant specific modules to a treasurer, secretary, or security officer without full admin rights.",
        readMins: 3,
        body: [
          { type: "p", text: "Committee members can be granted access to specific modules without becoming full admins. For example, your treasurer can manage billing without seeing visitor logs." },
          { type: "h3", text: "Adding a committee member" },
          { type: "p", text: "Go to More → Committee → + Add Member. Search for the resident by name or flat. Assign a role (Treasurer, Secretary, Security Officer, or Custom) and toggle specific module permissions on or off." },
          { type: "h3", text: "Permission levels" },
          { type: "p", text: "Each module has three permission levels: None (no access), Read (view only), Write (full access including create/edit/delete)." },
          { type: "tip", text: "Set the security officer's account to Visitors: Write only. They can manage the gate log but cannot view maintenance bills or send notices." },
        ],
      },
      {
        slug: "resident-cap-upgrade",
        title: "What happens when you hit the resident limit",
        summary: "How resident caps work and how to upgrade to add more residents.",
        readMins: 2,
        body: [
          { type: "p", text: "Each plan has a maximum number of resident accounts. When you reach the cap, new resident approvals are blocked until you upgrade." },
          { type: "h3", text: "Plan limits" },
          { type: "p", text: "Free: 25 residents. Starter: 100 residents. Growth: 100 residents. Premium: Unlimited." },
          { type: "h3", text: "Upgrading" },
          { type: "p", text: "Go to More → Upgrades. Choose a plan and complete payment. Your resident limit increases immediately." },
        ],
      },
    ],
  },
  {
    id: "account",
    icon: "👤",
    label: "Account & Profile",
    colour: "bg-slate-100 text-slate-600",
    articles: [
      {
        slug: "reset-password",
        title: "Resetting your password",
        summary: "How to recover access to your account using the OTP reset flow.",
        readMins: 1,
        body: [
          { type: "p", text: "If you've forgotten your password, use the Forgot Password flow on the login screen." },
          { type: "h3", text: "Steps" },
          { type: "p", text: "On the login screen, tap Forgot password? Enter your registered email address. You'll receive a 6-digit OTP by email within 2 minutes." },
          { type: "p", text: "Enter the OTP, then choose a new password (minimum 8 characters, at least one uppercase letter and one number). Tap Reset Password." },
          { type: "tip", text: "If you don't receive the OTP within 5 minutes, check your spam folder. The email comes from no-reply@societyapp.in." },
        ],
      },
      {
        slug: "update-profile",
        title: "Updating your profile and family members",
        summary: "Change your name, phone number, photo, and add family members to your flat.",
        readMins: 2,
        body: [
          { type: "p", text: "Your profile stores your name, phone number, flat details, and family members. Admins can see your name and flat number in the resident directory." },
          { type: "h3", text: "Editing your profile" },
          { type: "p", text: "Tap your profile icon (top right on most screens) → Edit Profile. Change your name, phone, or profile photo, then tap Save Changes." },
          { type: "h3", text: "Adding family members" },
          { type: "p", text: "On the Profile screen, scroll to Family Members → Add Member. Enter the person's name, relation (Spouse, Child, Parent, etc.), and optional age." },
        ],
      },
    ],
  },
];

// Flatten all articles for search
const allArticles = categories.flatMap((cat) =>
  cat.articles.map((a) => ({ ...a, category: cat.label, categoryId: cat.id, icon: cat.icon }))
);

// ─── Sub-components ───────────────────────────────────────────────────────────

function ArticleModal({ article, category, onClose }: {
  article: typeof allArticles[0];
  category: typeof categories[0];
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 backdrop-blur-sm p-4 pt-16 overflow-y-auto"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl mb-16">
        {/* Header */}
        <div className="bg-navy rounded-t-3xl px-7 py-6">
          <div className="flex items-center justify-between mb-3">
            <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-white/60`}>
              {category.icon} {category.label}
            </span>
            <button
              onClick={onClose}
              className="text-white/50 hover:text-white text-2xl leading-none transition-colors"
            >
              ×
            </button>
          </div>
          <h2 className="font-display text-2xl font-bold text-white leading-snug">{article.title}</h2>
          <p className="text-white/50 text-sm mt-2">{article.readMins} min read</p>
        </div>

        {/* Body */}
        <div className="px-7 py-7 space-y-4">
          {article.body.map((block, i) => {
            if (block.type === "h3") return (
              <h3 key={i} className="font-display font-bold text-navy text-lg pt-2">{block.text}</h3>
            );
            if (block.type === "tip") return (
              <div key={i} className="bg-teal/8 border border-teal/20 rounded-2xl px-5 py-4 flex gap-3">
                <span className="text-xl flex-shrink-0">💡</span>
                <p className="text-sm text-teal leading-relaxed">{block.text}</p>
              </div>
            );
            return (
              <p key={i} className="text-gray-600 text-[15px] leading-relaxed">{block.text}</p>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-7 pb-7 pt-2 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <p className="text-gray-400 text-sm">Was this helpful?</p>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 rounded-xl border border-gray-200 text-gray-500 text-sm hover:border-teal hover:text-teal transition-colors">
                👍 Yes
              </button>
              <button className="px-4 py-1.5 rounded-xl border border-gray-200 text-gray-500 text-sm hover:border-red-300 hover:text-red-500 transition-colors">
                👎 No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HelpCentrePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openArticle, setOpenArticle] = useState<typeof allArticles[0] | null>(null);

  const searchResults = useMemo(() => {
    if (!search.trim()) return null;
    const q = search.toLowerCase();
    return allArticles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.body.some((b) => b.text?.toLowerCase().includes(q))
    );
  }, [search]);

  const displayedCategories = activeCategory
    ? categories.filter((c) => c.id === activeCategory)
    : categories;

  const openArticleCategory = openArticle
    ? categories.find((c) => c.id === openArticle.categoryId)!
    : null;

  const totalArticles = allArticles.length;

  return (
    <>
      <Navbar />

      <main className="bg-light min-h-screen pt-16">

        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section className="bg-navy py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-20 w-[300px] h-[300px] rounded-full bg-teal/5 blur-[80px] pointer-events-none" />

          <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-teal/20 text-teal text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              🛟 Help Centre
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              How can we help?
            </h1>
            <p className="text-white/60 text-lg mb-8">
              {totalArticles} guides covering everything from getting started to advanced admin features.
            </p>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setActiveCategory(null);
                }}
                placeholder="Search guides... e.g. 'visitor OTP' or 'add resident'"
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 pl-12 text-white placeholder-white/40 text-sm focus:outline-none focus:border-teal/70 focus:bg-white/15 transition-all"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-lg">🔍</span>
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 text-lg transition-colors"
                >
                  ×
                </button>
              )}
            </div>

            {/* Quick category pills */}
            {!search && (
              <div className="flex flex-wrap justify-center gap-2 mt-5">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() =>
                      setActiveCategory(activeCategory === cat.id ? null : cat.id)
                    }
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      activeCategory === cat.id
                        ? "bg-teal text-white"
                        : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    {cat.icon} {cat.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 32L1440 32L1440 8C1200 28 720 2 0 18L0 32Z" fill="#F4F6F8" />
            </svg>
          </div>
        </section>

        {/* ── Stats bar ──────────────────────────────────────────────────── */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-5 py-4 flex flex-wrap gap-6 justify-center text-center">
            {[
              { value: totalArticles, label: "Guides" },
              { value: categories.length, label: "Categories" },
              { value: "< 2h", label: "Avg. response" },
              { value: "6", label: "Languages" },
            ].map(({ value, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="font-display font-bold text-navy text-lg">{value}</span>
                <span className="text-gray-400 text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Main content ────────────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-5 py-12">

          {/* ── Search results ── */}
          {searchResults !== null && (
            <>
              {searchResults.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-5xl mb-4">🤔</div>
                  <h2 className="font-display font-bold text-navy text-xl mb-2">
                    No results for &ldquo;{search}&rdquo;
                  </h2>
                  <p className="text-gray-500 mb-6">
                    Try different keywords or browse all guides below.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={() => setSearch("")}
                      className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold hover:border-teal hover:text-teal transition-colors"
                    >
                      Browse all guides
                    </button>
                    <Link
                      href="/contact"
                      className="px-5 py-2.5 rounded-xl bg-teal text-white text-sm font-semibold hover:bg-teal/90 transition-colors"
                    >
                      Contact support
                    </Link>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-gray-500 text-sm mb-5">
                    <span className="font-semibold text-navy">{searchResults.length}</span> result
                    {searchResults.length !== 1 && "s"} for &ldquo;{search}&rdquo;
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {searchResults.map((article) => {
                      const cat = categories.find((c) => c.id === article.categoryId)!;
                      return (
                        <ArticleCard
                          key={article.slug}
                          article={article}
                          category={cat}
                          onOpen={() => setOpenArticle(article)}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </>
          )}

          {/* ── Category grid (no search) ── */}
          {searchResults === null && (
            <>
              {activeCategory && (
                <button
                  onClick={() => setActiveCategory(null)}
                  className="flex items-center gap-1.5 text-teal text-sm font-semibold mb-6 hover:gap-2.5 transition-all"
                >
                  ← All categories
                </button>
              )}

              {displayedCategories.map((cat) => (
                <div key={cat.id} className="mb-12">
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${cat.colour.split(" ")[0]}`}>
                      {cat.icon}
                    </span>
                    <div>
                      <h2 className="font-display font-bold text-navy text-xl">{cat.label}</h2>
                      <p className="text-gray-400 text-xs">
                        {cat.articles.length} guide{cat.articles.length !== 1 && "s"}
                      </p>
                    </div>
                    {!activeCategory && (
                      <button
                        onClick={() => setActiveCategory(cat.id)}
                        className="ml-auto text-teal text-sm font-semibold hover:underline"
                      >
                        See all →
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cat.articles.map((article) => (
                      <ArticleCard
                        key={article.slug}
                        article={article}
                        category={cat}
                        onOpen={() =>
                          setOpenArticle({ ...article, category: cat.label, categoryId: cat.id, icon: cat.icon })
                        }
                      />
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}

          {/* ── Still need help ── */}
          <div className="mt-8 bg-navy rounded-3xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Couldn&apos;t find what you need?
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Our support team responds on WhatsApp within 2 hours on weekdays (9 AM – 7 PM IST).
                For billing queries, include your society name and registered email.
              </p>
            </div>
            <div className="flex flex-col gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal text-white font-semibold text-sm hover:bg-teal/90 transition-colors"
              >
                📧 Email Support
              </Link>
              <a
                href="https://wa.me/919537495474"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-colors"
              >
                💬 WhatsApp Us
              </a>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/60 font-semibold text-sm hover:text-white hover:bg-white/10 transition-colors"
              >
                🔍 Browse FAQ
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Article modal */}
      {openArticle && openArticleCategory && (
        <ArticleModal
          article={openArticle}
          category={openArticleCategory}
          onClose={() => setOpenArticle(null)}
        />
      )}

      <Footer />
    </>
  );
}

// ─── Article Card ─────────────────────────────────────────────────────────────
function ArticleCard({
  article,
  category,
  onOpen,
}: {
  article: { title: string; summary: string; readMins: number };
  category: { colour: string; icon: string };
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className="group text-left bg-white border border-gray-100 rounded-2xl p-5 hover:border-teal/30 hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className={`text-2xl`}>{category.icon}</span>
        <span className="text-gray-300 group-hover:text-teal text-lg transition-colors">→</span>
      </div>
      <h3 className="font-display font-semibold text-navy text-sm leading-snug mb-2 group-hover:text-teal transition-colors">
        {article.title}
      </h3>
      <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2">{article.summary}</p>
      <span className="text-gray-300 text-xs">{article.readMins} min read</span>
    </button>
  );
}