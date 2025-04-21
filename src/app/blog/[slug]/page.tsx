import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

// Add this constant at the top with other constants
const NEWS_ITEMS = [
  {
    title: "Eye, Robot: Researchers Give Machines a New Perspective with Active Vision",
    date: "2024-11-25",
    link: "https://engineering.ucdavis.edu/news/eye-robot-researchers-give-machines-new-perspective-active-vision",
    description: "After seeing the gaps in robotics in the automotive industry, Assistant Professor of Mechanical and Aerospace Engineering Iman Soltani is teaching robots to adjust their sight line using active vision and machine learning, hoping to push robotics one step closer to widespread adoption."
  },
  {
    title: "New microscope creates near-real-time videos of nanoscale processes",
    date: "2015-12-14",
    link: "https://news.mit.edu/2015/new-microscope-real-time-videos-nanoscale-1214",
    description: "MIT engineers have designed an atomic force microscope that scans images 2,000 times faster than existing commercial models."
  },
  {
    title: "New MIT microscope takes near real-time videos on a nanoscale",
    date: "2016-01-07",
    link: "https://www.bostonglobe.com/ideas/2016/01/07/new-mit-microscope-takes-near-real-time-videos-nanoscale/mIRSbxxqvHKHO1vkLgXYbM/story.html",
    description: "MIT engineers invent a microscope that can take near real-time video of nanoscale processes."
  },
  {
    title: "Hop, skip or jump? Study says no to all of the above",
    date: "2013-04-17",
    link: "https://news.mit.edu/2013/how-early-arthritis-affects-cartilage-0417",
    description: "MIT engineers find that in the earliest stages of arthritis, high-impact exercise may worsen cartilage damage."
  }
];

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="max-w-4xl mx-auto px-6">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      
      {/* Back to blog link */}
      <div className="py-6">
        <Link href="/blog" className="inline-flex items-center text-[15px] text-gray-600 hover:text-gray-900">
          <svg className="mr-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to all posts
        </Link>
      </div>
      
      {/* Post header */}
      <div className="pt-8 pb-10 max-w-3xl mx-auto text-center">
        <div className="mb-3 flex items-center justify-center">
          <span className="text-sm text-gray-500">
            {formatDate(post.metadata.publishedAt)}
          </span>
          {post.metadata.category && (
            <>
              <span className="mx-2">·</span>
              <span className="text-sm text-gray-500">{post.metadata.category}</span>
            </>
          )}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
          {post.metadata.title}
        </h1>
        
        <p className="text-[17px] text-gray-600 max-w-2xl mx-auto">
          {post.metadata.summary}
        </p>
      </div>
      
      {/* Featured image */}
      {post.metadata.image && (
        <div className="mb-12">
          <img 
            src={post.metadata.image}
            alt={post.metadata.title}
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}
      
      {/* If no image is specified, use the default OpenAI style image */}
      {!post.metadata.image && (
        <div className="mb-12">
          <img 
            src="https://images.ctfassets.net/kftzwdyauwt9/32cmTSUIF5POX5FMuoHJwO/be8b42b8016957ca28e07274f05f1d3d/stangel-2022-0527.webp?w=3840&q=90&fm=webp"
            alt={post.metadata.title}
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}
      
      {/* Post content */}
      <article className="max-w-3xl mx-auto">
        <div
          className="prose prose-gray max-w-none text-[15px]"
          dangerouslySetInnerHTML={{ __html: post.source }}
        ></div>
      </article>
      
      {/* Authors section */}
      <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-gray-100">
        <h2 className="text-xl font-medium mb-4">Authors</h2>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
          <div>
            <h3 className="text-base font-medium">LARA Lab</h3>
            <p className="text-[15px] text-gray-600">
              The Laboratory for AI, Robotics, and Automation at UC Davis
            </p>
          </div>
        </div>
      </div>
      
      {/* Related posts (placeholder - would need to implement logic) */}
      <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-gray-100">
        <h2 className="text-xl font-medium mb-6">Related Research</h2>
        <div className="space-y-4">
          {/* You can implement related posts logic here */}
          <p className="text-[15px] text-gray-600">
            Explore more research from our lab
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="max-w-3xl mx-auto mt-16 pt-8 pb-16 border-t border-gray-100 text-sm text-gray-600">
        <p>University of California, Davis</p>
        <p>One Shields Avenue, Davis, CA 95616</p>
        <p className="mt-4">© The Regents of the University of California, Davis campus.</p>
      </footer>
    </section>
  );
}
