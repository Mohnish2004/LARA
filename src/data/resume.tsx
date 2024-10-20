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
    email: "hello@example.com",
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
        url: "isoltani@ucdavis.edu",
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
  
} as const;
