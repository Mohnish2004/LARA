"use client";
import BlurFade from "@/components/magicui/blur-fade";
import Footer from "@/components/footer";
// export const metadata = {
//   title: "publications",
//   description: "All of LARA Lab's publications since 2020",
// };

const BLUR_FADE_DELAY = 0.04;

export default function Contact() {
  return (
    <main className="flex flex-col">
      <section className="px-6 md:px-10 pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
                Contact us
              </h1>
              <p className="text-lg text-gray-600">
                We&apos;re excited to collaborate with researchers and industry partners
                to advance the future of AI and robotics.
              </p>
            </div>
            <div className="w-full md:w-1/3 aspect-[4/3]">
              <img 
                src="/h1.png"
                alt="LARA Lab environment" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
     

      {/* Contact Content */}
      <section className="px-6 md:px-10 pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column: Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-sm font-medium mb-8 uppercase tracking-wider text-gray-500">
                  Contact Information
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-base font-medium mb-2">Email</h3>
                    <a href="mailto:isoltani@ucdavis.edu" 
                       className="text-gray-600 hover:text-black transition-colors">
                      isoltani@ucdavis.edu
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-medium mb-2">Location</h3>
                    <p className="text-gray-600">
                      Mechanical & Aerospace Engineering<br />
                      One Shields Avenue<br />
                      Davis, CA 95616
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-100 p-4">
                <p className="text-sm text-gray-500">
                  Our lab is located in the Mechanical & Aerospace Engineering building
                  at UC Davis main campus.
                </p>
              </div>
            </div>

            {/* Right Column: Join Lab */}
            <div className="space-y-12">
              <div>
                <h2 className="text-sm font-medium mb-8 uppercase tracking-wider text-gray-500">
                  Join Our Lab
                </h2>
                
                <div className="space-y-8">
                  <p className="text-gray-600">
                    We&apos;re looking for motivated graduate students with experience in:
                  </p>
                  
                  <div className="space-y-4">
                    {['Machine Learning & AI', 'Robotics', 'Computer Vision & Opto-mechatronics'].map((skill) => (
                      <div key={skill} className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-black rounded-full" />
                        <p>{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Application CTA */}
              <div className="rounded-lg border border-gray-100 p-6 space-y-4">
                <h3 className="font-medium">Ready to apply?</h3>
                <p className="text-sm text-gray-600">
                  Send your CV and cover letter with the subject &quot;Open PhD/Masters Position&quot;
                </p>
                <a 
                  href="mailto:isoltani@ucdavis.edu?subject=Open%20PhD/Masters%20Position" 
                  className="inline-flex items-center text-sm bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-900 transition-all"
                >
                  Apply Now →
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </main>
  );
}