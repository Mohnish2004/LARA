"use client";
import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlurFade from "@/components/magicui/blur-fade";
import { useEffect, useState } from 'react';

const BLUR_FADE_DELAY = 0.04;
const metadata = {
  title: "Gallery",
  description: "Explore videos and images showcasing our AI, robotics, and automation projects at LARA Lab.",
};

// Sample videos from YouTube
const videos = [
  { title: "Autonomous Navigation", url: "https://www.youtube.com/embed/-UdFOdBh4kg" },
  { title: "Robotics in Action", url: "https://www.youtube.com/embed/-UdFOdBh4kg" },
  { title: "AI Applications", url: "https://www.youtube.com/embed/-UdFOdBh4kg" },
  { title: "Healthcare Automation", url: "https://www.youtube.com/embed/-UdFOdBh4kg" },
];

// Sample images for the bento grid
const labImages = [
  { src: "/test.png", alt: "Lab Work" },
  { src: "/test.png", alt: "Robotic Systems" },
  { src: "/test.png", alt: "AI Research" },
  { src: "/test.png", alt: "Collaborations" },
];



// Dynamically import react-slick with no SSR
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function GalleryPage() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const [isClient, setIsClient] = useState(false);

  // Ensure component is only rendered on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="max-w-6xl mx-auto p-2">
      <h1 className="font-medium text-4xl mb-8 tracking-tighter">Gallery</h1>

      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Featured Videos</h2>
          {isClient && (
            <Slider {...sliderSettings}>
              {videos.map((video, index) => (
                <div key={index} className="w-full relative pb-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={video.url}
                    title={video.title}
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Lab Photos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {labImages.map((image, index) => (
              <div key={index} className="w-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-60 rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}