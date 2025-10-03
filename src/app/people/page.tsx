"use client";

import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import Image from "next/image";
import { DATA } from "@/data/resume";
import Footer from "@/components/footer";

const BLUR_FADE_DELAY = 0.04;

// Sample data for people
const people = {
  director: [
    {
      name: "Iman Soltani, PhD",
      title: "Director, LARA Lab",
      major: "Mechanical and Aerospace Engineering (MAE), Electrical and Computer Engineering (ECE), Computer Science (CS)",
      image: "/Portrait_optimized.jpg"
    }
  ],
  researchScientists: [
    { name: "Mahdi Naddaf", major: "Mechanical and Aerospace Engineering", image: "/pics/mahdi.png" }
  ],
  postdoctoralFellows: [
    { name: "Amin Ghafourian", major: "Postdoctoral Associate", image: "/pics/AminGhafourianMomenzadeh.jpeg" }
  ],
  phdStudents: [
    { name: "Ziba Fazel", major: "Mechanical and Aerospace Engineering", image: "/pics/ZibaFazel.jpg" },
    { name: "Kai Fukazawa", major: "Mechanical and Aerospace Engineering (MAE)", image: "/pics/KaiFukazawa.jpg" },
    { name: "Dechen Gao", major: "Computer Science", image: "/pics/Dechen.png" },
    { name: "Ian Chuang", major: "UC Berkeley and UC Davis", image: "/pics/IanChuang.jpg" },
    { name: "Andrew Lee", major: "Computer Science", image: "/pics/andrewlee.png" },
    { name: "Caton Mande", major: "Mechanical and Aerospace Engineering", image: "/pics/CatonMande.jpg" },
    { name: "Ricardo Tapia", major: "Mechanical and Aerospace Engineering", image: "/pics/Ricardo.png" },
    { name: "Arefeh Yavari", major: "Computer Science", image: "/pics/ArefehYavari.png" }
  ],
  mastersStudents: [
    { name: "Hrushikesh Mathi", major: "Mechanical and Aerospace Engineering", image: "/pics/HrushikeshMathi.jpg" },
    { name: "Kunal Mundada", major: "Computer Science", image: "/pics/KunalMundada.jpeg" },
    { name: "Shannon", major: "Computer Science", image: "/sam.jpg" },
    { name: "Shashank", major: "Computer Science", image: "/sam.jpg" }
  ],
  undergraduateResearchers: [
    { name: "Justin Chang", major: "Computer Science", image: "/pics/JustinChang.jpeg" }
  ],
  highSchoolInterns: [
    { name: "Vamsi Chilamkur", major: "Davis Senior High", image: "/pics/VamsiChilamkur.jpg" }
  ],
  alumni: [
    { name: "Kokul Aananth Kathiravan Kavitha", major: "Masters in Mechanical and Aerospace Engineering", image: "/pics/KokulAananthKathiravanKavitha.jpg" },
    { name: "Ling-Yuan Chen", major: "Masters in Mechanical and Aerospace Engineering", image: "/pics/Ling-YuanChen.jpeg" },
    { name: "Soumyajit Ganguly", major: "Masters in Mechanical and Aerospace Engineering", image: "/pics/SoumyajitGanguly.jpg" },
    { name: "Mohd Shais Khan", major: "Masters in Mechanical and Aerospace Engineering", image: "/pics/MohdShaisKhan.jpg" },
    { name: "Mohnish Gopi", major: "Computer Science", image: "/pics/MohnishGopi.jpg" },
    { name: "Kiana Amini-Naeini", major: "Cognitive Sciences", image: "/sam.jpg" },
    { name: "Tyler Beer", major: "Computer Science", image: "/pics/TylerBeer.jpg" },
    { name: "Yuyang Chen", major: "Mechanical and Aerospace Engineering", image: "/pics/YuyangChen.jpg" },
    { name: "James Chow", major: "Aerospace Engineering", image: "/pics/JamesChow.jpg" },
    { name: "Mohamed Elmashad", major: "Computer Science and Economics", image: "/sam.jpg" },
    { name: "Maxine Genove", major: "Electrical Engineering", image: "/pics/MaxineGenove.jpg" },
    { name: "Kavya Khare", major: "Electrical and Computer Engineering", image: "/sam.jpg" },
    { name: "Aryan Mondkar", major: "Mechanical and Aerospace Engineering (MAE)", image: "/pics/AryanMondkar.jpeg" },
    { name: "Aimee Tieu", major: "Mechanical and Aerospace Engineering", image: "/sam.jpg" },
    { name: "Xin Wei", major: "Electrical and Computer Engineering", image: "/pics/XinWei.jpg" },
    { name: "Amin Ghorbanpour", major: "Postdoctoral Associate", image: "/sam.jpg" },
    { name: "Ehsan Kazemi", major: "Postdoctoral Associate", image: "/sam.jpg" },
    { name: "Mehita Achuthan", major: "Computer Science", image: "/pics/MehitaAchuthan.jpg" },
    { name: "Al Arsh Basheer", major: "Mechanical and Aerospace Engineering", image: "/pics/AlArshBasheer.jpg" },
    { name: "Gautama Bharadwaj", major: "Electrical and Computer Engineering", image: "/pics/GautamaBharadwaj.jpg" },
    { name: "Nikhil Boora", major: "Mechanical and Aerospace Engineering", image: "/pics/NikhilBoora.jpg" },
    { name: "Srikumar Brundavanam", major: "Mechanical and Aerospace Engineering (MAE)", image: "/pics/SrikumarBrundavanam.jpeg" },
    { name: "Nathan Byrd", major: "Mechanical and Aerospace Engineering", image: "/pics/NathanByrd.jpg" },
    { name: "Jiabao Chen", major: "Electrical and Computer Engineering", image: "/pics/JiabaoChen.jpg" },
    { name: "Smriti Davey", major: "Biomedical Engineering", image: "/pics/SmritiDavey.jpg" },
    { name: "Victoria De La Trinidad", major: "Biological/Biosystems Engineering", image: "/pics/VictoriaDeLaTrinidad.jpg" },
    { name: "Victor Honein", major: "Mechanical and Aerospace Engineering", image: "/pics/VictorHonein.jpg" },
    { name: "Jeonghoon Jo", major: "Electrical and Computer Engineering", image: "/pics/JeonghoonJo.png" },
    { name: "Yacob Kidane", major: "Computer Science Engineering and Computational Neuroscience", image: "/pics/YacobKidane.jpg" },
    { name: "Mihir Kulkarni", major: "Mechanical and Aerospace Engineering (MAE)", image: "/pics/MihirKulkarni.jpg" },
    { name: "Yizhen Liao", major: "Electrical Engineering", image: "/sam.jpg" },
    { name: "Renhao Liu", major: "Mechanical and Aerospace Engineering (MAE)", image: "/pics/RenhaoLiu.jpg" },
    { name: "Utkarsh Nandy", major: "Mechanical and Aerospace Engineering (MAE)", image: "/pics/UtkarshNandy.jpg" },
    { name: "Dhruva Nidamarthi", major: "Athens High School", image: "/sam.jpg" },
    { name: "Akash Patel", major: "FRANKLIN HIGH SCHOOL", image: "/sam.jpg" },
    { name: "Rudran Pillay", major: "Mechanical and Aerospace Engineering (MAE)", image: "/pics/RudranPillay.jpg" },
    { name: "Soundararajan Rajendran", major: "Mechanical and Aerospace Engineering (MAE)", image: "/pics/SoundararajanRajendran.jpg" },
    { name: "Kavya Ravi", major: "Evergreen Valley High School", image: "/sam.jpg" },
    { name: "Rithik Sachdeva", major: "Electrical and Computer Engineering", image: "/pics/RithikSachdeva.jpg" },
    { name: "Nick Shi", major: "Electrical and Computer Engineering", image: "/pics/NickShi.jpg" },
    { name: "Adithya Srinath", major: "Mechanical and Aerospace Engineering", image: "/pics/AdithyaSrinath.jpg" },
    { name: "Shuhao Wan", major: "Mechanical and Aerospace Engineering (MAE)", image: "/pics/ShuhaoWan.jpg" },
    { name: "Yibin Xu", major: "Computer Engineering", image: "/pics/YibinXu.jpg" },
    { name: "Siddhesh Yadav", major: "Mechanical and Aerospace Engineering", image: "/pics/SiddheshYadav.jpeg" },
    { name: "Niharika Yeddanapudi", major: "Computer Science", image: "/pics/NiharikaYeddanapudi.jpg" },
    { name: "Justin Yeh", major: "Computer Science", image: "/pics/JustinYeh.jpg" },
    { name: "Will Zeng", major: "Electrical and Computer Engineering", image: "/pics/WillZeng.jpg" },
    { name: "Anna Zhong", major: "Mechanical and Aerospace Engineering", image: "/pics/AnnaZhong.jpg" }
  ]
};

export default function People() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6 md:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-600 mb-4">Laboratory</p>
          <h1 className="text-[64px] font-medium tracking-tight mb-6 leading-none">
            Meet our team
          </h1>
          <p className="text-[15px] text-gray-600 mb-15 leading-relaxed max-w-2xl mx-auto">
            A diverse group of researchers and students working together to advance<br />
            the frontiers of AI, robotics, and automation at UC Davis.
          </p>
        </div>
      </section>

      {/* Group Photo */}
      <section className="px-6 md:px-10 pb-20">
        <div className="w-full max-w-5xl mx-auto">
          <Image 
            src="/group_optimized.jpg"
            alt="LARA Lab research team" 
            width={1000}
            height={600}
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIEBwAAAAAAAAAAAAABAgMABAUGEiEiMWGRkv/aAAwDAQACEQMRAD8A0XGARPlQHhAhAAOlNGAbA8E8gv8A0/mQBxD4KZwMzCIA/9k="
            className="w-full h-[500px] rounded-md object-cover object-top"
          />
        </div>
      </section>
      
      <div className="px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          {/* Director Section */}
          <section className="py-16">
            <h2 className="text-[17px] font-medium mb-12 uppercase tracking-wider">Director</h2>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/4">
                <Image 
                  src={people.director[0].image}
                  alt={people.director[0].name}
                  width={200}
                  height={200}
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
              <div className="md:w-3/4">
                <h3 className="text-[24px] font-medium mb-3">{people.director[0].name}</h3>
                <p className="text-[15px] text-gray-600 mb-4">{people.director[0].title}</p>
                <p className="text-[15px] text-gray-600 mb-6">{people.director[0].major}</p>
                <Link 
                  href="/people/iman-soltani"
                  className="text-[14px] bg-black text-white px-4 py-1.5 rounded-full hover:bg-gray-800 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </section>

          {/* Research Scientists */}
          <section className="py-16 border-t border-gray-100">
            <h2 className="text-[17px] font-medium mb-12 uppercase tracking-wider">Research Scientists</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-16">
              {people.researchScientists.map((person) => (
                <div key={person.name} className="flex gap-4 items-start">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-[15px] font-medium">{person.name}</h3>
                    <p className="text-[13px] text-gray-600 mt-1">{person.major}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Post-doctoral Fellows */}
          <section className="py-16 border-t border-gray-100">
            <h2 className="text-[17px] font-medium mb-12 uppercase tracking-wider">Post-doctoral Fellows</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-16">
              {people.postdoctoralFellows.map((person) => (
                <div key={person.name} className="flex gap-4 items-start">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-[15px] font-medium">{person.name}</h3>
                    <p className="text-[13px] text-gray-600 mt-1">{person.major}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PhD Students */}
          <section className="py-16 border-t border-gray-100">
            <h2 className="text-[17px] font-medium mb-12 uppercase tracking-wider">PhD Students</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-16">
              {people.phdStudents.map((person) => (
                <div key={person.name} className="flex gap-4 items-start">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-[15px] font-medium">{person.name}</h3>
                    <p className="text-[13px] text-gray-600 mt-1">{person.major}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Masters Students */}
          <section className="py-16 border-t border-gray-100">
            <h2 className="text-[17px] font-medium mb-12 uppercase tracking-wider">Masters Students</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-16">
              {people.mastersStudents.map((person) => (
                <div key={person.name} className="flex gap-4 items-start">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-[15px] font-medium">{person.name}</h3>
                    <p className="text-[13px] text-gray-600 mt-1">{person.major}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Undergraduate Researchers */}
          <section className="py-16 border-t border-gray-100">
            <h2 className="text-[17px] font-medium mb-12 uppercase tracking-wider">Undergraduate Researchers</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-16">
              {people.undergraduateResearchers.map((person) => (
                <div key={person.name} className="flex gap-4 items-start">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-[15px] font-medium">{person.name}</h3>
                    <p className="text-[13px] text-gray-600 mt-1">{person.major}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Alumni */}
          <section className="py-16 border-t border-gray-100">
            <h2 className="text-[17px] font-medium mb-12 uppercase tracking-wider">Alumni</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6">
              {people.alumni.map((person) => (
                <div key={person.name}>
                  <h3 className="text-[15px] font-medium">{person.name}</h3>
                  <p className="text-[13px] text-gray-600 mt-1">{person.major}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <Footer />

      </div>

    </main>
  );
}
