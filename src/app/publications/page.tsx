import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { DATA } from "@/data/resume";
export const metadata = {
  title: "publications",
  description:
"All of lara lab's publications since 2020",
};
import { ProjectCard } from "@/components/project-card";
import AvatarCircles from "@/components/ui/avatar-circles";

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];

const BLUR_FADE_DELAY = 0.04;


export default function Publication() {
  return (
    <section className="max-w-6xl mx-auto p-2">
      <h1 className="font-medium text-4xl mb-3 tracking-tighter">All Publications</h1>
      <Link href="/people">
      <AvatarCircles numPeople={20} avatarUrls={avatarUrls} />
      </Link>
      <BlurFade delay={BLUR_FADE_DELAY}>

        <section id="projects">
        <div className="space-y-12 w-full py-12">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.authors}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      </BlurFade>

    </section>
  );
}
