"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { formatDate } from "@/lib/blog";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { getBlogContent } from "@/lib/i18n/content/blogContent";

export default function BlogPageContent() {
  const { tr, locale } = useTranslation();
  const content = getBlogContent(locale);
  const posts = content.posts;
  const [featured, ...rest] = posts;

  return (
    <>
      <Navbar />
      <main className="bg-light min-h-screen pt-16">
        <section className="bg-navy py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-teal/10 blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-5 text-center">
            <div className="inline-block bg-teal/20 text-teal text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">Blog</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">{tr.blog_title}</h1>
            <p className="text-white/60 text-lg">{tr.blog_sub}</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 30L1440 30L1440 5C1200 25 720 0 0 15L0 30Z" fill="#F4F6F8" />
            </svg>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-5 py-14">
          <Link href={`/blog/${featured.slug}`} className="group block bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-navy p-10 flex flex-col justify-center min-h-[260px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-teal/10 rounded-full blur-[60px]" />
                <span className="text-6xl mb-5">{featured.emoji}</span>
                <div className="inline-block bg-teal/20 text-teal text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 w-fit">
                  {featured.category}
                </div>
                <h2 className="font-display text-2xl font-bold text-white leading-snug group-hover:text-teal transition-colors">
                  {featured.title}
                </h2>
              </div>
              <div className="p-8 flex flex-col justify-between">
                <p className="text-gray-500 leading-relaxed mb-6">{featured.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400">{formatDate(featured.date)}</p>
                    <p className="text-xs text-gray-400">{featured.readTime}</p>
                  </div>
                  <span className="text-teal text-sm font-semibold group-hover:underline">{tr.blog_read_article}</span>
                </div>
              </div>
            </div>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl border border-gray-100 p-6 hover:border-teal/30 hover:shadow-md transition-all flex flex-col">
                <span className="text-4xl mb-4">{post.emoji}</span>
                <div className="inline-block bg-light text-teal text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 w-fit">
                  {post.category}
                </div>
                <h2 className="font-display font-bold text-navy text-base leading-snug mb-3 group-hover:text-teal transition-colors flex-1">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{post.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <p className="text-xs text-gray-400">{post.readTime}</p>
                  <span className="text-teal text-xs font-semibold">{tr.blog_read}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
