import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPost, getAllPosts, formatDate } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return { title: `${post.title} — SocietyApp Blog`, description: post.description };
}

// Very simple markdown-like renderer (handles ## headings, **bold**, paragraphs)
function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) { elements.push(<div key={key++} className="h-2" />); continue; }

    if (trimmed.startsWith("### ")) {
      elements.push(<h3 key={key++} className="font-display text-xl font-bold text-navy mt-8 mb-3">{trimmed.slice(4)}</h3>);
    } else if (trimmed.startsWith("## ")) {
      elements.push(<h2 key={key++} className="font-display text-2xl font-bold text-navy mt-10 mb-4">{trimmed.slice(3)}</h2>);
    } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      elements.push(<p key={key++} className="font-semibold text-navy mb-3">{trimmed.slice(2, -2)}</p>);
    } else if (trimmed.startsWith("| ")) {
      // Skip markdown tables — just skip lines
    } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      elements.push(
        <li key={key++} className="flex gap-2 text-gray-600 leading-relaxed mb-1.5">
          <span className="text-teal font-bold mt-0.5 flex-shrink-0">•</span>
          <span dangerouslySetInnerHTML={{ __html: trimmed.slice(2).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
        </li>
      );
    } else {
      elements.push(
        <p key={key++} className="text-gray-600 leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: trimmed.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
      );
    }
  }
  return elements;
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="bg-light min-h-screen pt-16">

        {/* Hero */}
        <section className="bg-navy py-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-teal/10 blur-[100px] pointer-events-none" />
          <div className="max-w-3xl mx-auto px-5">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-white/40 hover:text-white text-sm mb-6 transition-colors">
              ← Blog
            </Link>
            <div className="inline-block bg-teal/20 text-teal text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
              {post.category}
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-5">{post.title}</h1>
            <p className="text-white/50 leading-relaxed mb-6">{post.description}</p>
            <div className="flex items-center gap-4 text-white/40 text-sm">
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 30L1440 30L1440 5C1200 25 720 0 0 15L0 30Z" fill="#F4F6F8" />
            </svg>
          </div>
        </section>

        {/* Article */}
        <article className="max-w-3xl mx-auto px-5 py-14">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12">
            <div className="text-6xl mb-8 text-center">{post.emoji}</div>
            <ul className="list-none p-0 m-0">
              {renderContent(post.content)}
            </ul>
          </div>

          {/* CTA card */}
          <div className="mt-10 bg-teal rounded-3xl p-8 text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-2">Try SocietyApp free</h3>
            <p className="text-white/70 mb-6">Free forever for societies up to 50 units. No credit card. No hardware.</p>
            <Link href="/register" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-teal font-bold text-sm hover:bg-white/90 transition-colors">
              Register Your Society →
            </Link>
          </div>
        </article>

        {/* More posts */}
        {allPosts.length > 0 && (
          <section className="max-w-6xl mx-auto px-5 pb-16">
            <h2 className="font-display text-xl font-bold text-navy mb-5">More articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {allPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-white rounded-2xl border border-gray-100 p-5 hover:border-teal/30 hover:shadow-md transition-all">
                  <span className="text-3xl block mb-3">{p.emoji}</span>
                  <h3 className="font-display font-bold text-navy text-sm leading-snug mb-2 group-hover:text-teal transition-colors">{p.title}</h3>
                  <p className="text-gray-400 text-xs">{p.readTime}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
