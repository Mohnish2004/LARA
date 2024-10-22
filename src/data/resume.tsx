import People from "@/app/people/page";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "LARA",
  initials: "LARA",
  url: "https://dillion.io",
  location: "Davis, CA",
  locationLink: "https://www.google.com/maps/place/davis",
  description:
  "The Laboratory for AI, Robotics, and Automation (LARA) at UC Davis is at the forefront of research in artificial intelligence and robotics, focusing on the development of autonomous systems that can learn, adapt, and operate in complex environments. Our interdisciplinary research spans across cutting-edge technologies, including machine learning, reinforcement learning, and robotic systems, with applications in automation, autonomous vehicles, and human-robot interaction.",
  summary:
    "The Laboratory for AI, Robotics, and Automation (LARA) at UC Davis is at the forefront of research in artificial intelligence and robotics, focusing on the development of autonomous systems that can learn, adapt, and operate in complex environments. Our interdisciplinary research spans across cutting-edge technologies, including machine learning, reinforcement learning, and robotic systems, with applications in automation, autonomous vehicles, and human-robot interaction.",
  skills: [
    "Autonomous Systems",
    "Industrial Automation",
    "Health Diagnostics"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/people", icon: Icons.people, label: "People" },
    { href: "/publications", icon: Icons.publication, label: "Publication" },
    { href: "/gallery", icon: Icons.gallery, label: "Gallery" },
    { href: "/contact", icon: Icons.contact, label: "Contact" },



  ],
  contact: {
    email: "isoltani@ucdavis.edu",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Soltanilara",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/soltani-lab-lara",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:isoltani@ucdavis.edu",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  projects: [
    {
      title: "InterACT: Inter-dependency Aware Action...",
      href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&cstart=20&pagesize=80&citation_for_view=BJ2teVoAAAAJ:ns9cj8rnVeAC",
      dates: "2022 - Present",
      active: true,
      description:
        "Inter-dependency Aware Action Chunking with Hierarchical Attention Transformers for Bimanual Manipulation.",
      authors: ["John Doe", "Jane Smith"],
      year: "2022",
      image: "/test.png",
      video: "",
      links: [
        {
          type: "Website",
          href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&cstart=20&pagesize=80&citation_for_view=BJ2teVoAAAAJ:ns9cj8rnVeAC",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Performance of Automated ML in Predicting...",
      href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&cstart=20&pagesize=80&citation_for_view=BJ2teVoAAAAJ:RGFaLdJalmkC",
      dates: "2020 - Present",
      active: true,
      description:
        "Performance of Automated Machine Learning in Predicting Outcomes of Pneumatic Retinopexy.",
      authors: ["Alice Brown", "David Wilson"],
      year: "2020",
      image: "/test.png",
      video: "",
      links: [
        {
          type: "Website",
          href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&cstart=20&pagesize=80&citation_for_view=BJ2teVoAAAAJ:RGFaLdJalmkC",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Targeted Collapse Regularized Autoencoder...",
      href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&cstart=20&pagesize=80&citation_for_view=BJ2teVoAAAAJ:NaGl4SEjCO4C",
      dates: "2021 - Ongoing",
      active: true,
      description:
        "Targeted collapse regularized autoencoder for anomaly detection: black hole at the center.",
      authors: ["Mark Johnson", "Emily Davis"],
      year: "2021",
      image: "/test.png",
      video: "",
      links: [
        {
          type: "Website",
          href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&cstart=20&pagesize=80&citation_for_view=BJ2teVoAAAAJ:NaGl4SEjCO4C",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "High-Throughput Automated Annotation...",
      href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&cstart=20&pagesize=80&citation_for_view=BJ2teVoAAAAJ:R3hNpaxXUhUC",
      dates: "2022 - Present",
      active: true,
      description:
        "High-throughput automated annotation of visual data for training neural networks used for landmark detection.",
      authors: ["Robert Walker", "Sophie Brown"],
      year: "2022",
      image: "/test.png",
      video: "",
      links: [
        {
          type: "Website",
          href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&cstart=20&pagesize=80&citation_for_view=BJ2teVoAAAAJ:R3hNpaxXUhUC",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Robotic Manipulation Using an Independently...",
      href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&cstart=20&pagesize=80&citation_for_view=BJ2teVoAAAAJ:e5wmG9Sq2KIC",
      dates: "2021 - 2022",
      active: false,
      description:
        "Robotic manipulation using an independently actuated vision system, an adversarial control scheme, and a multi-tasking deep learning architecture.",
      authors: ["Chris Anderson", "Jessica Martinez"],
      year: "2021",
      image: "/test.png",
      video: "",
      links: [
        {
          type: "Website",
          href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&cstart=20&pagesize=80&citation_for_view=BJ2teVoAAAAJ:e5wmG9Sq2KIC",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Learning Systems and Methods...",
      href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&cstart=20&pagesize=80&citation_for_view=BJ2teVoAAAAJ:RHpTSmoSYBkC",
      dates: "2021 - 2022",
      active: false,
      description:
        "Learning systems and methods for dynamic task execution using machine learning techniques.",
      authors: ["Laura Lee", "Michael Green"],
      year: "2021",
      image: "/test.png",
      video: "",
      links: [
        {
          type: "Website",
          href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&cstart=20&pagesize=80&citation_for_view=BJ2teVoAAAAJ:RHpTSmoSYBkC",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Hierarchical End-to-End Autonomous...",
      href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&cstart=20&pagesize=80&citation_for_view=BJ2teVoAAAAJ:JV2RwH3_ST0C",
      dates: "2020 - Ongoing",
      active: true,
      description:
        "Hierarchical end-to-end autonomous navigation through few-shot waypoint detection.",
      authors: ["Daniel Robinson", "Eve Adams"],
      year: "2020",
      image: "/test.png",
      video: "",
      links: [
        {
          type: "Website",
          href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&cstart=20&pagesize=80&citation_for_view=BJ2teVoAAAAJ:JV2RwH3_ST0C",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "CarDreamer: Open-Source Learning Platform...",
      href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&cstart=20&pagesize=80&citation_for_view=BJ2teVoAAAAJ:GnPB-g6toBAC",
      dates: "2020 - Ongoing",
      active: true,
      description:
        "CarDreamer: Open-Source Learning Platform for World Model based Autonomous Driving.",
      authors: ["James Taylor", "Rachel Harris"],
      year: "2020",
      image: "/test.png",
      video: "",
      links: [
        {
          type: "Website",
          href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&cstart=20&pagesize=80&citation_for_view=BJ2teVoAAAAJ:GnPB-g6toBAC",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Assessing the Impact of Driver Compliance...",
      href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&cstart=20&pagesize=80&citation_for_view=BJ2teVoAAAAJ:NMxIlDl6LWMC",
      dates: "2020 - Ongoing",
      active: true,
      description:
        "Assessing the impact of driver compliance on traffic flow and safety in mixed autonomy work zones.",
      authors: ["Chris Anderson", "Jessica Martinez"],
      year: "2020",
      links: [
        {
          type: "Website",
          href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&cstart=20&pagesize=80&citation_for_view=BJ2teVoAAAAJ:NMxIlDl6LWMC",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/test.png",
      video: "",

    },
  ],

  work: [
    {
      company: "International Conference on Robotics and Automation (ICRA)",
      href: "https://www.icra.org/",
      badges: [],
      location: "Paris, France",
      title: "Attendee",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgf6CCfjF1yEwO3YcpZM1s9LMn6lQqDfX3w&s",
      start: "May 2023",
      end: "May 2023",
      description:
        "Attended sessions on autonomous systems, human-robot interaction, and cutting-edge robotics technologies. Participated in workshops focusing on advancements in AI-driven robotics and their real-world applications in industries such as healthcare and manufacturing.",
    },
    {
      company: "Robotics: Science and Systems (RSS)",
      href: "http://roboticsconference.org/",
      badges: [],
      location: "New York, NY",
      title: "Presenter",
      logoUrl: "https://pbs.twimg.com/profile_images/1823303968203886592/BIHV9m2C_400x400.jpg",
      start: "June 2022",
      end: "June 2022",
      description:
        "Presented research on reinforcement learning for robotic systems, showcasing the development of a novel algorithm that improves robot navigation in dynamic environments. Engaged with leading academics and industry experts to discuss the future of AI in robotics.",
    },
    {
      company: "IEEE International Conference on Intelligent Robots and Systems",
      href: "https://www.iros.org/",
      badges: [],
      location: "Kyoto, Japan",
      title: "Speaker",
      logoUrl: "https://i0.wp.com/iros2022.org/cms/wp-content/uploads/2022/05/iros2022_logo_full_s.png?fit=500%2C268&ssl=1",
      start: "October 2021",
      end: "October 2021",
      description:
        "Delivered a talk on the integration of ZED cameras with ROS for virtual reality environments. Explored collaborative robotics systems and machine learning applications with global thought leaders in the field of robotics.",
    },
    {
      company: "International Conference on Humanoid Robots (Humanoids)",
      href: "https://www.humanoids2021.org/",
      badges: [],
      location: "Munich, Germany",
      title: "Panelist",
      logoUrl: "data:image/png;base64,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",
      start: "December 2020",
      end: "December 2020",
      description:
        "Served as a panelist discussing the ethical implications of humanoid robots in society. Engaged with researchers on advancements in humanoid locomotion, manipulation, and interaction with human environments.",
    },
  ],
} as const;
