import BlogPostContent from "@/components/BlogPostContent";
import { getAllPosts, getPost } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return { title: `${post.title} — SocietyApp Blog`, description: post.description };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  return <BlogPostContent slug={params.slug} />;
}
