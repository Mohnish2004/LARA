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
import { ChevronRightIcon } from "lucide-react";
import Footer from "@/components/footer";

// FAQ Data
const faqs = [
  {
    question: "How can  I join the LARA Lab?",
    answer:
      "We are always looking for motivated graduate students. Please send your CV and cover letter to isoltani@ucdavis.edu with the subject 'Open PhD/Masters Position.'",
  },
  {
    question: "What are the main research areas?",
    answer:
      "LARA Lab focuses on AI, robotics, automation, autonomous systems, industrial diagnostics, and healthcare solutions.",
  },
  {
    question: "Are there any open positions?",
    answer:
      "Yes, we offer positions for PhD and Master's students with experience in machine learning, robotics (ROS), and optics.",
  },
  {
    question: "What kind of projects does LARA work on?",
    answer:
      "Our projects range from autonomous driving systems and industrial automation to healthcare diagnostics and nano-robotics.",
  },
  {
    question: "How can I access the lab's publications?",
    answer:
      "Our latest research papers and publications are available on our Google Scholar profile. Visit our 'Publications' page for more details.",
  },
  {
    question: "What collaboration opportunities are available at LARA Lab?",
    answer:
      "LARA Lab collaborates with industry partners, academic institutions, and research organizations. Please contact us for more information.",
  },
];

const researchAreas = [
  {
    title: "Autonomous Systems",
    description: "Developing intelligent systems that can operate independently in complex environments",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    )
  },
  {
    title: "Industrial Automation",
    description: "Creating solutions that enhance efficiency and safety in manufacturing and industrial processes",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    )
  },
  {
    title: "Health Diagnostics",
    description: "Applying AI and robotics to improve medical diagnostics and healthcare delivery systems",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }
];

const recentNews = [
  {
    title: "Sensors Journal: Deep Bayesian-Assisted Keypoint Detection",
    date: "August 21, 2023",
    type: "Publication"
  },
  {
    title: "CVPR 2023",
    date: "April 03, 2023",
    type: "Conference"
  },
  {
    title: "NeurIPS 2022",
    date: "November 13, 2022",
    type: "Conference"
  },
  {
    title: "LARA Seminar Series",
    date: "February 23, 2022",
    type: "Event"
  }
];

export default function Page() {
  // Get the first 3 projects for a cleaner layout
  const featuredProjects = DATA.projects.slice(0, 3);

  return (
    <main className="flex flex-col">
      {/* Hero Section - Simplified and more impactful */}
      <section className="pt-32 pb-24 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-8 leading-[1.1]">
            Laboratory for AI, 
            <br />
            Robotics, and Automation
          </h1>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-2xl">
            Developing autonomous systems that learn, adapt, and operate in complex environments at UC Davis.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center text-[15px] font-medium bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all hover:translate-x-1"
          >
            Get Involved <ChevronRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
      
      {/* Banner Image - Full bleed with gradient overlay */}
      <section className="relative w-full h-[60vh] mb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 z-10" />
        <img 
          src="https://engineering.ucdavis.edu/sites/g/files/dgvnsk2151/files/styles/sf_landscape_16x9/public/media/images/54153856858_e90b921e2f_k.jpg?h=31fb5ac6&itok=d61g3vd3"
          alt="UC Davis Engineering Building"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Research Focus - Modern grid layout */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-medium mb-16 uppercase tracking-wider text-gray-500">Research Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {researchAreas.map((area) => (
              <div key={area.title} className="group space-y-4">
                <div className="text-gray-400 group-hover:text-black transition-colors">
                  {area.icon}
                </div>
                <h3 className="text-xl font-medium">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Clean card layout */}
      <section className="px-6 md:px-10 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500">Latest Research</h2>
            <Link href="/projects" className="text-sm font-medium hover:text-gray-600 transition-colors">
              View all projects →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredProjects.map((project) => (
              <Link key={project.title} href={project.href} className="group">
                <div className="space-y-6">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img 
                      src={project.image || "/test.png"} 
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 group-hover:text-gray-600 transition-colors">
                      {project.title}
                    </h3>
                    {project.links && (
                      <div className="flex gap-4">
                        {project.links.map((link, idx) => (
                          <span key={idx} className="text-sm text-gray-500">
                            {link.type}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Events - Minimal list */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500">Recent Events</h2>
            <Link href="/blog" className="text-sm font-medium hover:text-gray-600 transition-colors">
              View all →
            </Link>
          </div>
          
          <div className="space-y-8">
            {recentNews.map((item) => (
              <div key={item.title} className="flex justify-between items-center py-6 border-b border-gray-100">
                <div>
                  <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
                <Badge variant="secondary" className="text-xs px-3 py-1">
                  {item.type}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal centered layout with new styling */}
      <section className="px-6 md:px-10 pt-12">
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl p-12 bg-gray-50 md:p-10 overflow-hidden text-center">

            {/* Content */}
            <div className="relative space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-medium">
                  Join Our Research Community
                </h2>
                <p className="text-gray-600 text-lg mx-auto max-w-xl">
                  We&apos;re looking for talented researchers, industry partners, and students to collaborate on cutting-edge projects.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  href="/contact"
                  className="group inline-flex items-center justify-center text-sm bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-all"
                >
                  <span>Contact Us</span>

                </Link>
                <Link 
                  href="/faq"
                  className="inline-flex items-center justify-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Read FAQ 
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </main>
  );
}
