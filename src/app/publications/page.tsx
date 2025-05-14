"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import Footer from "@/components/footer";
import { ALL_PUBLICATIONS } from "@/data/publications";
import Image from 'next/image';

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export default function Publications() {
  const [sortBy, setSortBy] = useState<"year">("year");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // Filter out patents and sort remaining publications
  const sortedPublications = [...ALL_PUBLICATIONS]
    .filter(pub => pub.type !== "patent")
    .sort((a, b) => {
      const order = sortOrder === "desc" ? -1 : 1;
      return (a.year - b.year) * order;
    });

  const toggleSort = (type: "year") => {
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
  };

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-gray-600 mb-4">Research</p>
          <div className="flex flex-col gap-2">
            <h1 className="text-[64px] font-medium tracking-tight leading-none mb-2">
              Publications
            </h1>
          </div>
        </div>
      </section>

      <div className="px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          {/* Sort Controls */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => toggleSort("year")}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-black transition-colors"
            >
              Sort by Year
              {sortOrder === "desc" ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
            </button>
          </div>

          {/* Publications List */}
          <div className="space-y-12">
            {sortedPublications.map((pub, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 border-b border-gray-100 pb-12 last:border-0">
                {/* Media Section */}
                <div className="md:w-1/3 aspect-video relative overflow-hidden rounded-lg bg-gray-100">
                  {pub.media ? (
                    pub.media.type === "video" ? (
                      <video
                        className="w-full h-full object-cover"
                        poster={pub.media.thumbnail}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                      >
                        <source src={pub.media.url} type="video/mp4" />
                      </video>
                    ) : (
                      <Image 
                        src={pub.media.url}
                        alt={pub.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={index < 3}
                      />
                    )
                  ) : (
                    // Default placeholder for publications without media
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="md:w-2/3">
                  <Link 
                    href={pub.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <h3 className="text-lg font-medium mb-3 group-hover:text-blue-600 transition-colors">
                      {pub.title}
                    </h3>
                  </Link>
                  
                  <div className="flex flex-wrap gap-2 mb-3 text-sm text-gray-600">
                    {pub.authors.map((author, i) => (
                      <span key={i}>
                        {author}{i < pub.authors.length - 1 ? "," : ""}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 text-sm">
                    <span className="text-gray-600">{pub.venue}</span>
                    <span className="text-gray-500 capitalize">{pub.type}</span>
                    <span className="text-gray-600">{pub.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Footer />
        </div>
      </div>
    </main>
  );
}
