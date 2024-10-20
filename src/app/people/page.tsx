import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { DATA } from "@/data/resume";
export const metadata = {
  title: "people",
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
      image: "/about.jpg"
    }
  ],
  postdoctoralFellows: [
    { name: "Amin Ghafourian", major: "Mechanical and Aerospace Engineering", image: "/about.jpg" },
    { name: "Ehsan Kazemi", major: "Mechanical and Aerospace Engineering", image: "/about.jpg" }
  ],
  phdStudents: [
    { name: "Ziba Fazel", major: "Mechanical and Aerospace Engineering", image: "/about.jpg" },
    { name: "Kai Fukazawa", major: "Mechanical and Aerospace Engineering (MAE)", image: "/about.jpg" },
    { name: "Dechen Gao", major: "Computer Science", image: "/path-to-dechen-image.jpg" },
    { name: "Andrew Lee", major: "Computer Science", image: "/path-to-andrew-image.jpg" },
    { name: "Caton Mande", major: "Mechanical and Aerospace Engineering", image: "/path-to-caton-image.jpg" },
    { name: "Ricardo Tapia", major: "Mechanical and Aerospace Engineering", image: "/path-to-ricardo-image.jpg" },
    { name: "Arefeh Yavari", major: "Computer Science", image: "/path-to-arefeh-image.jpg" }
  ],
  mastersStudents: [
    { name: "Kokul Aananth Kathiravan Kavitha", major: "Mechanical and Aerospace Engineering", image: "/about.jpg" },
    { name: "Hemachandran Balaji", major: "Computer Science", image: "/path-to-hemachandran-image.jpg" },
    { name: "Ling-Yuan Chen", major: "Mechanical and Aerospace Engineering", image: "/path-to-lingyuan-image.jpg" },
    { name: "Soumyajit Ganguly", major: "Mechanical and Aerospace Engineering", image: "/path-to-soumyajit-image.jpg" },
    { name: "Kaleb Kokott", major: "Mechanical and Aerospace Engineering", image: "/path-to-kaleb-image.jpg" },
    { name: "Hrushikesh Mathi", major: "Mechanical and Aerospace Engineering", image: "/path-to-hrushikesh-image.jpg" },
    { name: "Kunal Mundada", major: "Computer Science", image: "/path-to-kunal-image.jpg" },
    { name: "Mohd Shais Khan", major: "Mechanical and Aerospace Engineering", image: "/path-to-mohd-image.jpg" }
  ],
  undergraduateResearchers: [
    { name: "Kiana Amini-Naeini", major: "Cognitive Sciences", image: "/about.jpg" },
    { name: "Tyler Beer", major: "Computer Science", image: "/path-to-tyler-image.jpg" },
    { name: "Justin Chang", major: "Computer Science", image: "/path-to-justin-chang-image.jpg" },
    { name: "Yuyang Chen", major: "Mechanical and Aerospace Engineering", image: "/path-to-yuyang-image.jpg" },
    { name: "James Chow", major: "Aerospace Engineering", image: "/path-to-james-image.jpg" },
    { name: "Ian Chuang", major: "Computer Science", image: "/path-to-ian-image.jpg" },
    { name: "Mohamed Elmashad", major: "Computer Science and Economics", image: "/path-to-mohamed-image.jpg" },
    { name: "Maxine Genove", major: "Electrical Engineering", image: "/path-to-maxine-image.jpg" },
    { name: "Mohnish Gopi", major: "Computer Science", image: "/path-to-mohnish-image.jpg" },
    { name: "Kavya Khare", major: "Electrical and Computer Engineering", image: "/path-to-kavya-image.jpg" },
    { name: "Aryan Mondkar", major: "Mechanical and Aerospace Engineering (MAE)", image: "/path-to-aryan-image.jpg" },
    { name: "Aimee Tieu", major: "Mechanical and Aerospace Engineering", image: "/path-to-aimee-image.jpg" },
    { name: "Xin Wei", major: "Electrical and Computer Engineering", image: "/path-to-xin-image.jpg" }
  ],
  highSchoolInterns: [
    { name: "Vamsi Chilamkur", major: "Davis Senior High", image: "/about.jpg" }
  ],
  alumni: [
    { name: "Mehita Achuthan", major: "Computer Science", image: "/about.jpg" },
    { name: "Al Arsh Basheer", major: "Mechanical and Aerospace Engineering", image: "/path-to-al-image.jpg" },
    { name: "Gautama Bharadwaj", major: "Electrical and Computer Engineering", image: "/path-to-gautama-image.jpg" },
    { name: "Nikhil Boora", major: "Mechanical and Aerospace Engineering", image: "/path-to-nikhil-image.jpg" },
    { name: "Srikumar Brundavanam", major: "Mechanical and Aerospace Engineering (MAE)", image: "/path-to-srikumar-image.jpg" },
    { name: "Nathan Byrd", major: "Mechanical and Aerospace Engineering", image: "/path-to-nathan-image.jpg" },
    { name: "Jiabao Chen", major: "Electrical and Computer Engineering", image: "/path-to-jiabao-image.jpg" },
    { name: "Smriti Davey", major: "Biomedical Engineering", image: "/path-to-smriti-image.jpg" },
    { name: "Victoria De La Trinidad", major: "Biological/Biosystems Engineering", image: "/path-to-victoria-image.jpg" },
    { name: "Victor Honein", major: "Mechanical and Aerospace Engineering", image: "/path-to-victor-image.jpg" },
    { name: "Jeonghoon Jo", major: "Electrical and Computer Engineering", image: "/path-to-jeonghoon-image.jpg" },
    { name: "Yacob Kidane", major: "Computer Science Engineering and Computational Neuroscience", image: "/path-to-yacob-image.jpg" },
    { name: "Mihir Kulkarni", major: "Mechanical and Aerospace Engineering (MAE)", image: "/path-to-mihir-image.jpg" },
    { name: "Yizhen Liao", major: "Electrical Engineering", image: "/path-to-yizhen-image.jpg" },
    { name: "Renhao Liu", major: "Mechanical and Aerospace Engineering (MAE)", image: "/path-to-renhao-image.jpg" },
    { name: "Utkarsh Nandy", major: "Mechanical and Aerospace Engineering (MAE)", image: "/path-to-utkarsh-image.jpg" },
    { name: "Dhruva Nidamarthi", major: "Athens High School", image: "/path-to-dhruva-image.jpg" },
    { name: "Akash Patel", major: "FRANKLIN HIGH SCHOOL", image: "/path-to-akash-image.jpg" },
    { name: "Rudran Pillay", major: "Mechanical and Aerospace Engineering (MAE)", image: "/path-to-rudran-image.jpg" },
    { name: "Soundararajan Rajendran", major: "Mechanical and Aerospace Engineering (MAE)", image: "/path-to-soundararajan-image.jpg" },
    { name: "Kavya Ravi", major: "Evergreen Valley High School", image: "/path-to-kavya-ravi-image.jpg" },
    { name: "Rithik Sachdeva", major: "Electrical and Computer Engineering", image: "/path-to-rithik-image.jpg" },
    { name: "Nick Shi", major: "Electrical and Computer Engineering", image: "/path-to-nick-image.jpg" },
    { name: "Adithya Srinath", major: "Mechanical and Aerospace Engineering", image: "/path-to-adithya-image.jpg" },
    { name: "Shuhao Wan", major: "Mechanical and Aerospace Engineering (MAE)", image: "/path-to-shuhao-image.jpg" },
    { name: "Yibin Xu", major: "Computer Engineering", image: "/path-to-yibin-image.jpg" },
    { name: "Siddhesh Yadav", major: "Mechanical and Aerospace Engineering", image: "/path-to-siddhesh-image.jpg" },
    { name: "Niharika Yeddanapudi", major: "Computer Science", image: "/path-to-niharika-image.jpg" },
    { name: "Justin Yeh", major: "Computer Science", image: "/path-to-justin-yeh-image.jpg" },
    { name: "Will Zeng", major: "Electrical and Computer Engineering", image: "/path-to-will-image.jpg" },
    { name: "Anna Zhong", major: "Mechanical and Aerospace Engineering", image: "/path-to-anna-image.jpg" }
  ]
};

export default function People() {
  return (
    <section className="max-w-6xl mx-auto p-2">
      <h1 className="font-medium text-4xl mb-8 tracking-tighter">Our Team</h1>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex-col flex flex-1 space-y-1.5">
          <img 
            src="./about.jpg" 
            alt="" 
            draggable="false" 
            className="rounded-lg w-full h-40 mb-6 object-cover" 
          />
        </div>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <p className="prose max-w-full bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            LARA Lab was founded by Dr. Iman Soltani at UC Davis to advance AI, robotics, and automation. What started as a small initiative grew into a hub for cutting-edge research in autonomous systems, industrial automation, and healthcare technologies. Today, the lab collaborates with industry and academia, pushing the boundaries of intelligent technology.
          </p>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="bg-white bg-gray-100 rounded-lg p-4 bg-gray-100p-8 mt-4 mb-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <h3 className="text-2xl font-bold">60+</h3>
                <p className="text-gray-500 dark:text-gray-400">Members</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">15+</h3>
                <p className="text-gray-500 dark:text-gray-400">Projects</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">10</h3>
                <p className="text-gray-500 dark:text-gray-400">Conferences</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">100$</h3>
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
    </section>
  );
}
