import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import Footer from "@/components/footer";

export const metadata = {
  title: "Blog",
  description: "News and updates from LARA Lab.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-gray-600 mb-4">Updates</p>
          <h1 className="text-[64px] font-medium tracking-tight mb-6 leading-none">
            Blog
          </h1>
        </div>
      </section>

      <div className="px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          {/* Featured Posts Grid */}
          <section>
            <div className="grid md:grid-cols-2 gap-12">
              {posts
                .sort((a, b) => {
                  if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
                    return -1;
                  }
                  return 1;
                })
                .map((post, id) => (
                  <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col"
                    >
                      {/* Image */}
                      <div className="aspect-[4/3] mb-6 overflow-hidden rounded-lg bg-gray-100">
                        <img
                          src={post.metadata.image || "https://images.ctfassets.net/kftzwdyauwt9/32cmTSUIF5POX5FMuoHJwO/be8b42b8016957ca28e07274f05f1d3d/stangel-2022-0527.webp"}
                          alt={post.metadata.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* Content */}
                      <div>
                        <div className="mb-3 flex items-center gap-3 text-sm text-gray-500">
                          <time dateTime={post.metadata.publishedAt}>
                            {new Date(post.metadata.publishedAt).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </time>
                          {post.metadata.category && (
                            <>
                              <span>·</span>
                              <span>{post.metadata.category}</span>
                            </>
                          )}
                        </div>
                        
                        <h2 className="text-[15px] font-medium mb-2 group-hover:text-blue-600 transition-colors">
                          {post.metadata.title}
                        </h2>
                        
                        {post.metadata.description && (
                          <p className="text-[15px] text-gray-600 line-clamp-2">
                            {post.metadata.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  </BlurFade>
                ))}
            </div>
          </section>

          {/* Archive Section */}
          <section className="py-16 border-t border-gray-100 mt-16">
            <h2 className="text-[17px] font-medium mb-12 uppercase tracking-wider">Archive</h2>
            <div className="space-y-8">
              {posts
                .sort((a, b) => {
                  if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
                    return -1;
                  }
                  return 1;
                })
                .map((post, id) => (
                  <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex items-start gap-8"
                    >
                      <time 
                        dateTime={post.metadata.publishedAt}
                        className="w-32 shrink-0 text-sm text-gray-500"
                      >
                        {new Date(post.metadata.publishedAt).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </time>
                      <div>
                        <h3 className="text-[15px] font-medium group-hover:text-blue-600 transition-colors">
                          {post.metadata.title}
                        </h3>
                        {post.metadata.description && (
                          <p className="mt-1 text-[15px] text-gray-600">
                            {post.metadata.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  </BlurFade>
                ))}
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </main>
  );
}
