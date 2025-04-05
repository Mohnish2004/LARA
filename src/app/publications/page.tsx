"use client";
import Link from "next/link";
import { DATA } from "@/data/resume";
import AvatarCircles from "@/components/ui/avatar-circles";
import Footer from "@/components/footer";

const avatarUrls = [
  "/pics/MohnishGopi.jpg",
  "/pics/TylerBeer.jpg",
  "/pics/IanChuang.jpg",
  "/pics/andrewlee.png",
];

export default function Publications() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-gray-600 mb-4">Research</p>
          <h1 className="text-[64px] font-medium tracking-tight mb-6 leading-none">
            Publications
          </h1>
        </div>
      </section>

      <div className="px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          {/* Publications Grid */}
          <section>
            <div className="space-y-16">
              {DATA.projects.map((project, index) => (
                <div key={project.title} className="flex flex-col md:flex-row gap-12">
                  {/* Image */}
                  <div className="md:w-2/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-3/5">
                    <Link 
                      href={`/blog/publication-${index + 1}`} 
                      className="group"
                    >
                      <h3 className="text-[15px] font-medium mb-3 whitespace-normal break-words group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="text-[15px] text-gray-600 mb-4">{project.description}</p>
                    
                    {/* Authors */}
                    <div className="flex flex-wrap gap-x-2 mb-4">
                      {project.authors.map((author, index) => (
                        <span key={author} className="text-[13px] text-gray-600">
                          {author}{index < project.authors.length - 1 ? "," : ""}
                        </span>
                      ))}
                    </div>
                    
                    {/* Links */}
                    <div className="flex gap-4">
                      {project.links.map((link) => (
                        <a 
                          key={link.type} 
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[14px] text-gray-600 hover:text-black transition-colors flex items-center gap-1"
                        >
                          {link.icon} {link.type}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Conference Papers */}
          <section className="py-16 border-t border-gray-100">
            <h2 className="text-[17px] font-medium mb-12 uppercase tracking-wider">Conference Papers</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {DATA.work.slice(0, 5).map((work) => (
                <div key={work.company} className="flex gap-6 items-start">
                  <div className="w-20 h-20 bg-gray-50 rounded flex items-center justify-center flex-shrink-0">
                    {work.logoUrl && (
                      <img
                        src={work.logoUrl}
                        alt={work.company}
                        className="w-16 h-16 object-contain"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-medium mb-2 whitespace-normal break-words">{work.company}</h3>
                    <p className="text-[13px] text-gray-600">{work.description}</p>
                    <p className="text-[13px] text-gray-600 mt-2">{work.start}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Journal Articles */}
          <section className="py-16 border-t border-gray-100">
            <h2 className="text-[17px] font-medium mb-12 uppercase tracking-wider">Journal Articles</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {DATA.allwork.slice(0, 5).map((work) => (
                <div key={work.company} className="flex gap-6 items-start">
                  <div className="w-20 h-20 bg-gray-50 rounded flex items-center justify-center flex-shrink-0">
                    {work.logoUrl && (
                      <img
                        src={work.logoUrl}
                        alt={work.company}
                        className="w-16 h-16 object-contain"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-medium mb-2 whitespace-normal break-words">{work.company}</h3>
                    <p className="text-[13px] text-gray-600">{work.description}</p>
                    <p className="text-[13px] text-gray-600 mt-2">{work.start}</p>
                  </div>
                </div>
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
