"use client";

import Footer from "@/components/footer";

export default function ImanSoltani() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow px-6 md:px-10 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 mb-12">
            <div className="md:w-1/3">
              <img 
                src="/Portrait.jpg"
                alt="Dr. Iman Soltani"
                className="w-full rounded-lg object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h1 className="text-4xl font-medium mb-4">Iman Soltani, PhD</h1>
              <p className="text-xl text-gray-700 mb-2">Director, LARA Lab</p>
              <p className="text-gray-600 mb-4">
                Assistant Professor<br />
                Mechanical and Aerospace Engineering<br />
                University of California, Davis
              </p>
            </div>
          </div>

          <div className="prose max-w-none">
            <p>
              Iman Soltani is an assistant professor of Mechanical and Aerospace Engineering 
              and a faculty member in graduate groups of the Departments of Computer Science 
              and Electrical and Computer Engineering at the University of California, Davis. 
              His research spans the interface of artificial intelligence, instrumentation, 
              controls, and design, with a focus on machine learning and robotic systems.
            </p>

            <p>
              Before joining UC Davis, he worked at the Ford Greenfield Labs in Palo Alto, 
              CA, where he founded and led the Advanced Automation Laboratory. He earned his 
              bachelor&apos;s, master&apos;s, and PhD in mechanical engineering from Tehran Polytechnic 
              (Iran), the University of Ottawa (Canada), and the Massachusetts Institute of 
              Technology (MIT), respectively.
            </p>

            <p>
              He holds more than 18 patents and has authored over 47 journal and conference 
              publications on topics ranging from medical imaging to autonomous driving, 
              high-speed nanorobotics, dexterous bimanual robotics, machinery health 
              monitoring, and precision positioning systems.
            </p>

            <p>
              His research has been featured in prominent outlets such as The Boston Globe, 
              Elsevier Materials Today, ScienceDaily, and MIT News. Among his numerous awards 
              are the MIT Carl G. Sontheimer Award and National Instruments&apos; Engineering 
              Impact Award.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 