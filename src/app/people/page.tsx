import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { DATA } from "@/data/resume";
export const metadata = {
  title: "People",
  description:
    "A community of software engineers, designers, and creatives sharing their experiences, tips, and inspiration.",
};

const BLUR_FADE_DELAY = 0.04;

// Sample data for people
const people = {
  director: [
    {
      name: "Iman Soltani, PhD",
      major: "Mechanical and Aerospace Engineering (MAE), Electrical and Computer Engineering (ECE), Computer Science (CS)",
      image: "/pics/iman_soltani.jpg"
    }
  ],
  postdoctoralFellows: [
    { name: "Amin Ghafourian", major: "Mechanical and Aerospace Engineering", image: "/pics/AminGhafourianMomenzadeh.jpeg" },
    { name: "Ehsan Kazemi", major: "Mechanical and Aerospace Engineering", image: "/sam.jpg" }
  ],
  phdStudents: [
    { name: "Ziba Fazel", major: "Mechanical and Aerospace Engineering", image: "/pics/ZibaFazel.jpg" },
    { name: "Kai Fukazawa", major: "Mechanical and Aerospace Engineering (MAE)", image: "/pics/KaiFukazawa.jpg" },
    { name: "Dechen Gao", major: "Computer Science", image: "/sam.jpg" },
    { name: "Andrew Lee", major: "Computer Science", image: "/pics/andrewlee.png" },
    { name: "Caton Mande", major: "Mechanical and Aerospace Engineering", image: "/pics/CatonMande.jpg" },
    { name: "Ricardo Tapia", major: "Mechanical and Aerospace Engineering", image: "/sam.jpg" },
    { name: "Arefeh Yavari", major: "Computer Science", image: "/pics/ArefehYavari.png" }
  ],
  mastersStudents: [
    { name: "Kokul Aananth Kathiravan Kavitha", major: "Mechanical and Aerospace Engineering", image: "/pics/KokulAananthKathiravanKavitha.jpg" },
    { name: "Hemachandran Balaji", major: "Computer Science", image: "/pics/HemachandranBalaji.png" },
    { name: "Ling-Yuan Chen", major: "Mechanical and Aerospace Engineering", image: "/pics/Ling-YuanChen.jpeg" },
    { name: "Soumyajit Ganguly", major: "Mechanical and Aerospace Engineering", image: "/pics/SoumyajitGanguly.jpg" },
    { name: "Kaleb Kokott", major: "Mechanical and Aerospace Engineering", image: "/sam.jpg" },
    { name: "Hrushikesh Mathi", major: "Mechanical and Aerospace Engineering", image: "/pics/HrushikeshMathi.jpg" },
    { name: "Kunal Mundada", major: "Computer Science", image: "/pics/KunalMundada.jpeg" },
    { name: "Mohd Shais Khan", major: "Mechanical and Aerospace Engineering", image: "/pics/MohdShaisKhan.jpg" }
  ],
  undergraduateResearchers: [
    { name: "Mohnish Gopi", major: "Computer Science", image: "/pics/MohnishGopi.jpg" },
    { name: "Kiana Amini-Naeini", major: "Cognitive Sciences", image: "/sam.jpg" },
    { name: "Tyler Beer", major: "Computer Science", image: "/pics/TylerBeer.jpg" },
    { name: "Justin Chang", major: "Computer Science", image: "/pics/JustinChang.jpeg" },
    { name: "Yuyang Chen", major: "Mechanical and Aerospace Engineering", image: "/pics/YuyangChen.jpg" },
    { name: "James Chow", major: "Aerospace Engineering", image: "/pics/JamesChow.jpg" },
    { name: "Ian Chuang", major: "Computer Science", image: "/pics/IanChuang.jpg" },
    { name: "Mohamed Elmashad", major: "Computer Science and Economics", image: "/sam.jpg" },
    { name: "Maxine Genove", major: "Electrical Engineering", image: "/pics/MaxineGenove.jpg" },
    { name: "Kavya Khare", major: "Electrical and Computer Engineering", image: "/sam.jpg" },
    { name: "Aryan Mondkar", major: "Mechanical and Aerospace Engineering (MAE)", image: "/pics/AryanMondkar.jpeg" },
    { name: "Aimee Tieu", major: "Mechanical and Aerospace Engineering", image: "/sam.jpg" },
    { name: "Xin Wei", major: "Electrical and Computer Engineering", image: "/pics/XinWei.jpg" }
  ],
  highSchoolInterns: [
    { name: "Vamsi Chilamkur", major: "Davis Senior High", image: "/pics/VamsiChilamkur.jpg" }
  ],
  alumni: [
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
    <section className="max-w-6xl mx-auto p-2 mb-16 ">
      <h1 className="font-medium text-4xl mb-8 tracking-tighter">Our Team</h1>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex-col flex flex-1 space-y-1.5">
          <img 
            src="./gro.jpeg" 
            alt="" 
            draggable="false" 
            className="rounded-lg w-full h-full mb-6 object-cover" 
          />
        </div>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <p className="prose max-w-full bg-gray-100 dark:bg-none dark:text-gray-900 rounded-lg p-4 text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            LARA Lab was founded by Dr. Iman Soltani at UC Davis to advance AI, robotics, and automation. What started as a small initiative grew into a hub for cutting-edge research in autonomous systems, industrial automation, and healthcare technologies. Today, the lab collaborates with industry and academia, pushing the boundaries of intelligent technology.
          </p>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="bg-black bg-gray-100 rounded-lg p-4 p-8 mt-4 mb-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <h3 className="text-2xl font-bold text-black">60+</h3>
                <p className="text-gray-500 dark:text-gray-400">Members</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">15+</h3>
                <p className="text-gray-500 dark:text-gray-400">Projects</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">10</h3>
                <p className="text-gray-500 dark:text-gray-400">Conferences</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">100$</h3>
                <p className="text-gray-500 dark:text-gray-400">Budget</p>
              </div>
            </div>
          </div>

          </BlurFade>
          </BlurFade>

      {Object.entries(people).map(([category, members]) => (
        <div key={category} className="mt-12">
          <h2 className="text-2xl font-bold mb-6 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {members.map((person, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full aspect-square object-cover rounded-lg mb-3"
                />
                <h3 className="font-medium text-lg">{person.name}</h3>
                <p className="text-xs text-gray-400 text-center">{person.major}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
              <hr className="border-gray-200 mb-6 dark:border-neutral-800" />
              <BlurFade delay={BLUR_FADE_DELAY * 30}>
            <p className="text-xs mb-20 tracking-tighter border-gray-200 dark:border-neutral-800">
              Crafted with ❤️ by <a href="https://mohnishgopi.com/" target="_blank" className="text-blue-500 hover:underline">Mohnish Gopi</a>
            </p>
          </BlurFade>
    </section>
  );
}
