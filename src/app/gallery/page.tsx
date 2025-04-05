"use client";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import BlurFade from "@/components/magicui/blur-fade";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Footer from '@/components/footer';

const Slider = dynamic(() => import("react-slick"), { ssr: false });
const BLUR_FADE_DELAY = 0.04;

// Custom arrow components
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full p-2 text-gray-400 hover:text-gray-900 transition-colors"
      aria-label="Next slide"
    >
      <ChevronRight className="h-5 w-5" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full p-2 text-gray-400 hover:text-gray-900 transition-colors"
      aria-label="Previous slide"
    >
      <ChevronLeft className="h-5 w-5" />
    </button>
  );
}

// Sample data - Move this to a separate data file later
const videos = [
  { 
    title: "Autonomous Navigation System",
    description: "Demonstration of our latest autonomous navigation capabilities in complex environments.",
    url: "https://www.youtube.com/embed/-UdFOdBh4kg",
    date: "2024-03",
    category: "Robotics"
  },
  { 
    title: "Autonomous Navigation System",
    description: "Demonstration of our latest autonomous navigation capabilities in complex environments.",
    url: "https://www.youtube.com/embed/-UdFOdBh4kg",
    date: "2024-03",
    category: "Robotics"
  },  { 
    title: "Autonomous Navigation System",
    description: "Demonstration of our latest autonomous navigation capabilities in complex environments.",
    url: "https://www.youtube.com/embed/-UdFOdBh4kg",
    date: "2024-03",
    category: "Robotics"
  },  { 
    title: "Autonomous Navigation System",
    description: "Demonstration of our latest autonomous navigation capabilities in complex environments.",
    url: "https://www.youtube.com/embed/-UdFOdBh4kg",
    date: "2024-03",
    category: "Robotics"
  },
  // Add more videos...
];

const images = [
  {
    title: "Lab Equipment Setup",
    description: "Our state-of-the-art robotics testing environment",
    src: "/test.png",
    date: "2024-03",
    category: "Lab"
  },
  // Add more images...
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'videos' | 'photos'>('all');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const VideoCard = ({ video }: { video: typeof videos[0] }) => (
    <div className="px-3">
      <div className="space-y-4">
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
          {isClient && (
            <iframe
              className="w-full h-full"
              src={video.url}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <div>
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
            <time>{video.date}</time>
            <span>·</span>
            <span>{video.category}</span>
          </div>
          <h3 className="text-[15px] font-medium mb-2">{video.title}</h3>
          <p className="text-[15px] text-gray-600 line-clamp-2">{video.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-gray-600 mb-4">Media</p>
          <h1 className="text-[64px] font-medium tracking-tight mb-6 leading-none">
            Gallery
          </h1>
        </div>
      </section>

      <div className="px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-8 border-b border-gray-100">
            <button
              onClick={() => setActiveTab('all')}
              className={`pb-4 text-[15px] transition-colors ${
                activeTab === 'all'
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`pb-4 text-[15px] transition-colors ${
                activeTab === 'videos'
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Videos
            </button>
            <button
              onClick={() => setActiveTab('photos')}
              className={`pb-4 text-[15px] transition-colors ${
                activeTab === 'photos'
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Photos
            </button>
          </div>

          {/* Videos Section */}
          {(activeTab === 'all' || activeTab === 'videos') && (
            <section className="py-16">
              <h2 className="text-[17px] font-medium mb-12 uppercase tracking-wider">Videos</h2>
              {activeTab === 'all' ? (
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <div className="relative px-8">
                    {isClient && (
                      <Slider {...sliderSettings}>
                        {videos.map((video, index) => (
                          <VideoCard key={index} video={video} />
                        ))}
                      </Slider>
                    )}
                  </div>
                </BlurFade>
              ) : (
                <div className="grid md:grid-cols-2 gap-12">
                  {videos.map((video, index) => (
                    <BlurFade delay={BLUR_FADE_DELAY * index} key={index}>
                      <VideoCard video={video} />
                    </BlurFade>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Photos Section */}
          {(activeTab === 'all' || activeTab === 'photos') && (
            <section className={`${activeTab === 'photos' ? 'pt-16' : 'py-16 border-t border-gray-100'}`}>
              <h2 className="text-[17px] font-medium mb-12 uppercase tracking-wider">Photos</h2>
              <div className="grid md:grid-cols-2 gap-12">
                {images.map((image, index) => (
                  <BlurFade delay={BLUR_FADE_DELAY * index} key={index}>
                    <div className="space-y-4">
                      <div className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                          <time>{image.date}</time>
                          <span>·</span>
                          <span>{image.category}</span>
                        </div>
                        <h3 className="text-[15px] font-medium mb-2">{image.title}</h3>
                        <p className="text-[15px] text-gray-600">{image.description}</p>
                      </div>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </section>
          )}
                    <Footer />

        </div>
      </div>
    </main>
  );
}