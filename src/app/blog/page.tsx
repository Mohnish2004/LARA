import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import Footer from "@/components/footer";

export const metadata = {
  title: "News & Blog",
  description: "News and updates from LARA Lab.",
};

const BLUR_FADE_DELAY = 0.04;

// Add news links data
const NEWS_ITEMS = [
  {
    title: "Eye, Robot: Researchers Give Machines a New Perspective with Active Vision",
    date: "2024-11-25",
    description: "After seeing the gaps in robotics in the automotive industry, Assistant Professor of Mechanical and Aerospace Engineering Iman Soltani is teaching robots to adjust their sight line using active vision and machine learning.",
    link: "https://engineering.ucdavis.edu/news/eye-robot-researchers-give-machines-new-perspective-active-vision",
    source: "UC Davis",
    image: "https://engineering.ucdavis.edu/sites/g/files/dgvnsk2151/files/styles/sf_landscape_16x9/public/media/images/54153856858_e90b921e2f_k.jpg?h=31fb5ac6&itok=d61g3vd3"
  },
  {
    title: "New microscope creates near-real-time videos of nanoscale processes",
    date: "2015-12-14",
    description: "MIT engineers have designed an atomic force microscope that scans images 2,000 times faster than existing commercial models.",
    link: "https://news.mit.edu/2015/new-microscope-real-time-videos-nanoscale-1214",
    source: "MIT News",
    image: "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201512/MIT-Better-Micro-1_0.jpg?itok=rZy1cexJ"
  },
  {
    title: "New MIT microscope takes near real-time videos on a nanoscale",
    date: "2016-01-07",
    description: "MIT engineers invent a microscope that can take near real-time video of nanoscale processes.",
    link: "https://www.bostonglobe.com/ideas/2016/01/07/new-mit-microscope-takes-near-real-time-videos-nanoscale/mIRSbxxqvHKHO1vkLgXYbM/story.html",
    source: "Boston Globe",
    image: "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/v2/G7WHWVFUUII6LEHE4AOQBOPV3M.jpg?auth=90ddf415b814f83f3306c5fa8b5201203a2b04d521de8291d692983090fd8e12&width=1440"
  },
  {
    title: "Hop, skip or jump? Study says no to all of the above",
    date: "2013-04-17",
    description: "MIT engineers find that in the earliest stages of arthritis, high-impact exercise may worsen cartilage damage.",
    link: "https://news.mit.edu/2013/how-early-arthritis-affects-cartilage-0417",
    source: "MIT News",
    image: "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201304/20130417094911-0_0.jpg?itok=486HVQQC"
  }
];

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-gray-600 mb-4">Updates</p>
          <h1 className="text-[64px] font-medium tracking-tight mb-6 leading-none">
            News & Blog
          </h1>
        </div>
      </section>

      <div className="px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          {/* News Section */}
          <section className="mb-20">
            <h2 className="text-[17px] font-medium mb-12 uppercase tracking-wider">Latest News</h2>
            <div className="space-y-12">
              {NEWS_ITEMS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map((news, id) => (
                  <BlurFade delay={BLUR_FADE_DELAY * id} key={news.link}>
                    <a
                      href={news.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-8"
                    >
                      {/* Thumbnail */}
                      <div className="w-48 h-32 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                        <img
                          src={news.image || "https://images.ctfassets.net/kftzwdyauwt9/32cmTSUIF5POX5FMuoHJwO/be8b42b8016957ca28e07274f05f1d3d/stangel-2022-0527.webp"}
                          alt={news.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <time 
                          dateTime={news.date}
                          className="text-sm text-gray-500 mb-2 block"
                        >
                          {new Date(news.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </time>
                        <div className="flex items-center gap-2">
                          <h3 className="text-[15px] font-medium group-hover:text-blue-600 transition-colors">
                            {news.title}
                          </h3>
                          <span className="text-sm text-gray-500">({news.source})</span>
                        </div>
                        <p className="mt-1 text-[15px] text-gray-600">
                          {news.description}
                        </p>
                      </div>
                    </a>
                  </BlurFade>
              ))}
            </div>
          </section>

          {/* Blog Posts Section */}
          <section>
            <h2 className="text-[17px] font-medium mb-12 uppercase tracking-wider">Blog Posts</h2>
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

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </main>
  );
}
