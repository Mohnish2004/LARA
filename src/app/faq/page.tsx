"use client";
import BlurFade from "@/components/magicui/blur-fade";
import Footer from "@/components/footer";

const BLUR_FADE_DELAY = 0.04;

// FAQ Data
const faqs = [
  {
    question: "How can I join the LARA Lab?",
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
    question: "What collaboration opportunities are available?",
    answer:
      "LARA Lab collaborates with industry partners, academic institutions, and research organizations. Please contact us for more information.",
  },
  {
    question: "Do you offer lab tours?",
    answer:
      "Yes, we offer lab tours to prospective students and collaborators. Please contact us via email to schedule a visit.",
  },
  {
    question: "Is there funding available for graduate students?",
    answer:
      "We offer various funding opportunities including research assistantships, teaching assistantships, and fellowships for qualified candidates.",
  },
];

export default function FAQ() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-gray-600 mb-4">Help Center</p>
          <h1 className="text-[64px] font-medium tracking-tight mb-6 leading-none">
            FAQ
          </h1>
        </div>
      </section>

      <div className="px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          {/* FAQ Content */}
          <section>
            <div className="space-y-12">
              {faqs.map((faq, index) => (
                <BlurFade delay={BLUR_FADE_DELAY * index} key={index}>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[15px] font-medium">{faq.question}</h3>
                    <p className="text-[15px] text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
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