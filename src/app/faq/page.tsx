"use client";
import BlurFade from "@/components/magicui/blur-fade";
import Footer from "@/components/footer";

const BLUR_FADE_DELAY = 0.04;

// FAQ Data
import { faqs } from "@/data/faq";

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