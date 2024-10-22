"use client";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { useState } from "react";

const BLUR_FADE_DELAY = 0.001;

// FAQ Data
const faqs = [
  {
    question: "How can I join the LARA Lab?",
    answer:
      "We are always looking for motivated graduate students. Please send your CV and cover letter to isoltani@ucdavis.edu with the subject “Open PhD/Masters Position.”",
  },
  {
    question: "What are the main research areas?",
    answer:
      "LARA Lab focuses on AI, robotics, automation, autonomous systems, industrial diagnostics, and healthcare solutions.",
  },
  {
    question: "Are there any open positions?",
    answer:
      "Yes, we offer positions for PhD and Master’s students with experience in machine learning, robotics (ROS), and optics.",
  },
  {
    question: "What kind of projects does LARA work on?",
    answer:
      "Our projects range from autonomous driving systems and industrial automation to healthcare diagnostics and nano-robotics.",
  },
  {
    question: "How can I access the lab’s publications?",
    answer:
      "Our latest research papers and publications are available on our Google Scholar profile. Visit our ‘Publications’ page for more details.",
  },
  {
    question: "What collaboration opportunities are available at LARA Lab?",
    answer:
      "LARA Lab collaborates with industry partners, academic institutions, and research organizations. Please contact us for more information.",
  },
];

export default function Page() {
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaqIndex(index === expandedFaqIndex ? null : index);
  };
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <img src="./13.png" alt="" draggable="false"></img>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h1 className="text-2xl font-bold">About</h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full py-1 text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
        <div className="flex flex-wrap py-2 gap-1">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <Badge key={skill}>{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-2xl">Conferences</h2>          
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={work.start}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="projects">
        <div className="space-y-4 w-full py-4">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-2xl">
                  Latest Work
                </h2>
              </div>
            </div>
          </BlurFade>
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

      {/* FAQ Section */}
      <section id="faq-anchor">
        <div className="space-y-6 w-full mb-20">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-2xl">Frequently asked questions</h2>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 max-w-[800px] mx-auto">
            {faqs.map((faq, id) => (
              <BlurFade
                key={faq.question}
                delay={BLUR_FADE_DELAY * 16 + id * 0.05}
              >
                <div
                  onClick={() => toggleFaq(id)}
                  className={`p-4 border rounded-lg transition-shadow cursor-pointer ${
                    expandedFaqIndex === id ? "shadow-lg" : "hover:shadow-lg"
                  }`}
                >
                  <h3 className="">{faq.question}</h3>
                  {expandedFaqIndex === id && (
                    <p className="font-semibold text-gray-800 dark:text-neutral-200 mt-2">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-sm/relaxed lg:text-base/relaxed sm:text-sm/relaxed">
                We are always looking for motivated and talented graduate students. If you are interested in our research, please send your CV to isoltani@ucdavis.edu. On the subject line, include "Open PhD/Masters Position".
              </p>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-sm/relaxed lg:text-base/relaxed sm:text-sm/relaxed">
                Prior experience in either of the following topics is necessary: Machine Learning, Optics, Instrumentation and Control, Machine Vision. If you are interested in machine learning research, you should have prior experience with Pytorch or Tensorflow. If you are interested in Robotics, prior experience with ROS is needed.
              </p>
            </div>
          </BlurFade>
        </div>
      </section> */}

    </main>
  );
}