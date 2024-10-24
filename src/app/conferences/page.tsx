import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { ResumeCard } from "@/components/resume-card";
export const metadata = {
  title: "Publications",
  description:
"All of lara lab's publications since 2020",
};
import { ProjectCard } from "@/components/project-card";
import AvatarCircles from "@/components/ui/avatar-circles";

const avatarUrls = [

  "/pics/MohnishGopi.jpg",

  "/pics/TylerBeer.jpg",
  
  "/pics/IanChuang.jpg",
  
  "/pics/andrewlee.png",
  
];

const BLUR_FADE_DELAY = 0.04;


export default function Publication() {
  return (
    <section className="max-w-6xl mx-auto p-2">
      <h1 className="font-medium text-4xl mb-10 tracking-tighter">All Conferences</h1>
      <BlurFade delay={BLUR_FADE_DELAY}>
      <section id="allwork">
        <div className="flex min-h-0 mb-10 flex-col gap-y-3">
          {DATA.allwork.map((allwork, id) => (
            <BlurFade
              key={allwork.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={allwork.company}
                logoUrl={allwork.logoUrl}
                altText={allwork.company}
                title={allwork.company}
                subtitle={allwork.title}
                href={allwork.href}
                badges={allwork.badges}
                period={allwork.start}
                description={allwork.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      </BlurFade>
      <hr className="border-gray-200 mb-6 dark:border-neutral-800" />
      <BlurFade delay={BLUR_FADE_DELAY * 30}>
            <p className="text-xs mb-20 tracking-tighter border-gray-200 dark:border-neutral-800">
              Crafted with ❤️ by <a href="https://mohnishgopi.com/" target="_blank" className="text-blue-500 hover:underline">Mohnish Gopi</a>
            </p>
          </BlurFade>
    </section>
  );
}
