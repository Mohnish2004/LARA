"use client";
import { Badge } from "@/components/ui/badge";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
const BLUR_FADE_DELAY = 0.04;

// Core values of LARA Lab
const coreValues = [
  {
    title: "Innovation",
    description: "Pushing the boundaries of AI and robotics research to create revolutionary technologies and solutions."
  },
  {
    title: "Collaboration",
    description: "Fostering interdisciplinary partnerships with industry and academic institutions to solve complex challenges."
  },
  {
    title: "Education",
    description: "Training the next generation of researchers and engineers in cutting-edge technologies and methodologies."
  },
  {
    title: "Impact",
    description: "Developing applications that address real-world problems in healthcare, automation, and autonomous systems."
  }
];

// Research approach sections
const researchApproach = [
  {
    title: "Interdisciplinary Research",
    description: "Our work bridges the gap between AI, robotics, computer vision, and mechanical engineering to create holistic solutions.",
    imageUrl: "/h1.png"
  },
  {
    title: "Real-world Applications",
    description: "We develop technologies that have practical applications in healthcare, manufacturing, autonomous vehicles, and more.",
    imageUrl: "/h2.jpg"
  },
  {
    title: "Cutting-edge Facilities",
    description: "Our laboratory is equipped with state-of-the-art equipment and technology to support innovative research and experimentation.",
    imageUrl: "/h3.jpg"
  }
];

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-16 pb-6 px-6 md:px-10 flex flex-col items-center text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-gray-600 mb-1">Laboratory</p>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-6">
            About
          </h1>
          <p className="text-[15px] text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            The Laboratory for AI, Robotics, and Automation at UC Davis is dedicated to advancing the frontiers of artificial intelligence and robotics.
          </p>
        </div>
        
        {/* Large Banner Image */}
        <div className="w-full max-w-5xl mx-auto mb-16">
          <img 
            src="https://engineering.ucdavis.edu/sites/g/files/dgvnsk2151/files/media/images/54154025480_f4c0884d88_k.jpg"
            alt="LARA Lab researchers collaborating" 
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Mission Statement */}
      <section className="px-6 md:px-10 py-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium mb-4">Our Mission</h2>
          <p className="text-[15px] leading-relaxed text-gray-600">
            The Laboratory for AI, Robotics, and Automation (LARA) at UC Davis is dedicated to advancing the frontiers of artificial intelligence and robotics. We&apos;re building autonomous systems that can learn, adapt, and operate in complex environments, with applications that range from industrial automation to healthcare diagnostics.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 md:px-10 py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((value) => (
              <BlurFade key={value.title} delay={BLUR_FADE_DELAY}>
                <div className="bg-white p-6 rounded-lg border shadow-sm">
                  <h3 className="text-base font-medium mb-2">{value.title}</h3>
                  <p className="text-[15px] text-gray-600">{value.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Research Approach */}
      <section className="px-6 md:px-10 py-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium mb-8">Our Research Approach</h2>
          <div className="space-y-16">
            {researchApproach.map((item, index) => (
              <BlurFade key={item.title} delay={BLUR_FADE_DELAY * (index + 1)}>
                <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
                  <div className="w-full md:w-1/2 h-60 bg-gray-200 rounded-lg overflow-hidden">
                    {/* Placeholder for actual images */}
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-[15px]">
                      <Image src={item.imageUrl} alt={item.title} width={500} height={500} />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-lg font-medium mb-3">{item.title}</h3>
                    <p className="text-[15px] text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="px-6 md:px-10 pt-10 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium mb-4">Our History</h2>
          <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
            Founded at UC Davis, LARA Lab has been at the forefront of AI and robotics research, establishing itself as a leader in autonomous systems development. Our journey has been marked by groundbreaking publications, successful industry collaborations, and the development of innovative technologies that push the boundaries of what&apos;s possible.
          </p>
          <div className="space-y-6 mt-8">
            <div className="flex">
              <div className="w-20 flex-shrink-0 text-gray-400 text-[15px]">2020</div>
              <div>
                <h3 className="text-base font-medium">Laboratory Established</h3>
                <p className="text-[15px] text-gray-600 mt-1">LARA Lab was founded with a focus on integrating AI and robotics research.</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-20 flex-shrink-0 text-gray-400 text-[15px]">2021</div>
              <div>
                <h3 className="text-base font-medium">First Industry Partnership</h3>
                <p className="text-[15px] text-gray-600 mt-1">Established collaboration with leading technology companies to develop industrial automation solutions.</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-20 flex-shrink-0 text-gray-400 text-[15px]">2022</div>
              <div>
                <h3 className="text-base font-medium">NeurIPS Recognition</h3>
                <p className="text-[15px] text-gray-600 mt-1">Our research on autonomous systems was presented at the prestigious NeurIPS conference.</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-20 flex-shrink-0 text-gray-400 text-[15px]">2023</div>
              <div>
                <h3 className="text-base font-medium">CVPR and Sensor Journal Publications</h3>
                <p className="text-[15px] text-gray-600 mt-1">Published groundbreaking research on deep Bayesian-assisted keypoint detection and computer vision technologies.</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />

      </section>

      

    </div>
  );
} 