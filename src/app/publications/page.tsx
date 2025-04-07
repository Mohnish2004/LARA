"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import Footer from "@/components/footer";

// Define the Publication type
type Publication = {
  title: string;
  authors: string[];
  year: number;
  citations?: number;
  venue: string;
  link?: string;
  type: "journal" | "conference" | "patent" | "preprint";
  media?: {
    type: "image" | "video";
    url: string;
    thumbnail?: string;
  };
};

// Publications data
const publications: Publication[] = [
  {
    title: "Design and Implementation of a Dual Uncrewed Surface Vessel Platform for Bathymetry Research under High-flow Conditions",
    authors: ["D Kumar", "A Ghorbanpour", "K Yen", "I Soltani"],
    year: 2025,
    venue: "arXiv",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:vV6vV6tmYwMC",
    type: "preprint"
  },
  {
    title: "Anomaly augmented generative adversarial network",
    authors: ["Z Yang", "EF Darve", "IS Bozchalooi"],
    year: 2024,
    venue: "US Patent 12,165,067",
    citations: 1,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:4JMBOYKVnBMC",
    type: "patent"
  },
  {
    title: "Targeted collapse regularized autoencoder for anomaly detection: black hole at the center",
    authors: ["A Ghafourian", "H Shui", "D Upadhyay", "R Gupta", "D Filev", "I Soltani"],
    year: 2024,
    venue: "IEEE Transactions on Neural Networks and Learning Systems",
    citations: 1,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:k_IJM867U9cC",
    type: "journal"
  },
  {
    title: "Cardreamer: Open-source learning platform for world model based autonomous driving",
    authors: ["D Gao", "S Cai", "H Zhou", "H Wang", "I Soltani", "J Zhang"],
    year: 2024,
    venue: "IEEE Internet of Things Journal",
    citations: 4,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:GnPB-g6toBAC",
    type: "journal"
  },
  {
    title: "MarineFormer: A Transformer-based Navigation Policy Model for Collision Avoidance in Marine Environment",
    authors: ["E Kazemi", "I Soltani"],
    year: 2024,
    venue: "arXiv e-prints",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:lSLTfruPkqcC",
    type: "preprint"
  },
  {
    title: "Active vision might be all you need: Exploring active vision in bimanual robotic manipulation",
    authors: ["I Chuang", "A Lee", "D Gao", "I Soltani"],
    year: 2024,
    venue: "arXiv preprint",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:O3NaXMp0MMsC",
    citations: 5,
    type: "preprint",
    media: {
      type: "image",
      url: "/publications/av-aloha.gif"
    }
  },
  {
    title: "InterACT: Inter-dependency Aware Action Chunking with Hierarchical Attention Transformers for Bimanual Manipulation",
    authors: ["A Lee", "I Chuang", "LY Chen", "I Soltani"],
    year: 2024,
    venue: "arXiv preprint",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:YFjsv_pBGBYC",
    citations: 5,
    type: "preprint",
    media: {
      type: "video",
      url: "/publications/InteractDemo.mp4",
      thumbnail: "/publications/InteractDemo.mp4"
    }
  },
  {
    title: "Performance of Automated Machine Learning in Predicting Outcomes of Pneumatic Retinopexy",
    authors: ["A Nisanova", "A Yavary", "J Deaner", "FS Ali", "P Gogte", "R Kaplan", "KC Chen"],
    year: 2024,
    venue: "Ophthalmology Science 4 (5), 100470",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:hMod-77fHWUC",
    citations: 1,
    type: "journal"
  },
  {
    title: "Assessing the impact of driver compliance on traffic flow and safety in work zones amid varied mixed autonomy scenarios",
    authors: ["IS Ehsan Kazemi"],
    year: 2024,
    venue: "Transportation Research Interdisciplinary Perspectives 27",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:NMxIlDl6LWMC",
    citations: 1,
    type: "journal"
  },
  {
    title: "Hierarchical end-to-end autonomous navigation through few-shot waypoint detection",
    authors: ["A Ghafourian", "Z CuiZhu", "D Shi", "I Chuang", "F Charette", "R Sachdeva"],
    year: 2024,
    venue: "IEEE Robotics and Automation Letters 9 (4), 3211-3218",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:JV2RwH3_ST0C",
    citations: 2,
    type: "journal",
    media: {
      type: "video",
      url: "/publications/demo_autodrive.mp4"
    }
  },
  {
    title: "Vehicle neural network enhancement",
    authors: ["IS Bozchalooi", "F Charette", "DP Filev", "R Burke", "D Upadhyay"],
    year: 2023,
    venue: "US Patent 11,829,131",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:bEWYMUwI8FkC",
    type: "patent"
  },
  {
    title: "Deep Bayesian-Assisted Keypoint Detection for Pose Estimation in Assembly Automation",
    authors: ["IS Debo Shi", "Alireza Rahimpour", "Amin Ghafourian", "Mohammad Mahdi Naddaf"],
    year: 2023,
    venue: "Sensors 23 (13)",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:maZDTaKrznsC",
    citations: 5,
    type: "journal"
  },
  {
    title: "One-Shot Learning of Visual Path Navigation for Autonomous Vehicles",
    authors: ["Z CuiZhu", "F Charette", "A Ghafourian", "D Shi", "M Cui", "A Krishnamachar"],
    year: 2023,
    venue: "arXiv preprint",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:BqipwSGYUEgC",
    citations: 1,
    type: "preprint"
  },
  {
    title: "Anomaly detection with domain adaptation",
    authors: ["Z Yang", "I Soltani", "E Darve"],
    year: 2023,
    venue: "Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:_Qo2XoVZTnwC",
    citations: 43,
    type: "conference"
  },
  {
    title: "Systems and methods for image-based component detection",
    authors: ["IS Bozchalooi", "A Rahimpour", "D Upadhyay"],
    year: 2022,
    venue: "US Patent 11,423,571",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:TFP_iSt0sucC",
    type: "patent"
  },
  {
    title: "Memory-augmented generative adversarial networks for anomaly detection",
    authors: ["Z Yang", "T Zhang", "IS Bozchalooi", "E Darve"],
    year: 2021,
    venue: "IEEE Transactions on Neural Networks and Learning Systems 33 (6), 2324-2334",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:mB3voiENLucC",
    citations: 32,
    type: "journal"
  },
  {
    title: "Enhanced vehicle operation",
    authors: ["IS Bozchalooi", "F Charette", "P Narayanan", "R Burke", "D Upadhyay", "DP Filev"],
    year: 2021,
    venue: "US Patent App. 16/904,653",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:iH-uZ7U-co4C",
    citations: 5,
    type: "patent"
  },
  {
    title: "Learning systems and methods",
    authors: ["IS Bozchalooi"],
    year: 2021,
    venue: "US Patent 11,126,190",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:RHpTSmoSYBkC",
    citations: 5,
    type: "patent"
  },
  {
    title: "Adaptive sensor fusion",
    authors: ["IS Bozchalooi", "F Assadian", "L Scaria"],
    year: 2021,
    venue: "US Patent 11,069,161",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:r0BpntZqJG4C",
    citations: 6,
    type: "patent"
  },
  {
    title: "Robotic manipulation using an independently actuated vision system, an adversarial control scheme, and a multi-tasking deep learning architecture",
    authors: ["IS Bozchalooi", "F Assadian"],
    year: 2021,
    venue: "US Patent 10,926,416",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:e5wmG9Sq2KIC",
    type: "patent"
  },
  {
    title: "High-throughput automated annotation of visual data for training neural networks used for landmark detection",
    authors: ["IS Bozchalooi", "F Assadian"],
    year: 2021,
    venue: "US Patent 10,929,714",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:R3hNpaxXUhUC",
    citations: 1,
    type: "patent"
  },
  {
    title: "Automation safety and performance robustness through uncertainty driven learning and control",
    authors: ["IS Bozchalooi"],
    year: 2020,
    venue: "US Patent App. 16/197,649",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:HDshCWvjkbEC",
    citations: 1,
    type: "patent"
  },
  {
    title: "LiDAR device based on scanning mirrors array and multi-frequency laser modulation",
    authors: ["IS Bozchalooi", "K Youcef-Toumi"],
    year: 2020,
    venue: "US Patent 10,649,072",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:HDshCWvjkbEC",
    citations: 33,
    type: "patent"
  },
  {
    title: "Regularized cycle consistent generative adversarial network for anomaly detection",
    authors: ["Z Yang", "I Soltani Bozchalooi", "E Darve"],
    year: 2020,
    venue: "ECAI 2020, 1618-1625",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:hFOr9nPyWt4C",
    citations: 17,
    type: "conference"
  }
];

export default function Publications() {
  const [sortBy, setSortBy] = useState<"year" | "citations">("year");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const sortedPublications = [...publications].sort((a, b) => {
    const order = sortOrder === "desc" ? -1 : 1;
    if (sortBy === "year") {
      return (a.year - b.year) * order;
    }
    return ((a.citations || 0) - (b.citations || 0)) * order;
  });

  const toggleSort = (type: "year" | "citations") => {
    if (sortBy === type) {
      setSortOrder(sortOrder === "desc" ? "asc" : "desc");
    } else {
      setSortBy(type);
      setSortOrder("desc");
    }
  };

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-gray-600 mb-4">Research</p>
          <h1 className="text-[64px] font-medium tracking-tight mb-6 leading-none">
            Publications
          </h1>
      </div>
      </section>

      <div className="px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          {/* Sort Controls */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => toggleSort("year")}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-black transition-colors"
            >
              Sort by Year
              {sortBy === "year" && (sortOrder === "desc" ? <ChevronDown size={16} /> : <ChevronUp size={16} />)}
            </button>
            <button
              onClick={() => toggleSort("citations")}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-black transition-colors"
            >
              Sort by Citations
              {sortBy === "citations" && (sortOrder === "desc" ? <ChevronDown size={16} /> : <ChevronUp size={16} />)}
            </button>
          </div>

          {/* Updated Publications List */}
          <div className="space-y-12">
            {sortedPublications.map((pub, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 border-b border-gray-100 pb-12 last:border-0">
                {/* Media Section */}
                <div className="md:w-1/3 aspect-video relative overflow-hidden rounded-lg bg-gray-100">
                  {pub.media ? (
                    pub.media.type === "video" ? (
                      <video
                        className="w-full h-full object-cover"
                        poster={pub.media.thumbnail}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                      >
                        <source src={pub.media.url} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={pub.media.url}
                        alt={pub.title}
                        className="w-full h-full object-cover"
                      />
                    )
                  ) : (
                    // Default placeholder for publications without media
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="md:w-2/3">
                  <Link 
                    href={pub.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <h3 className="text-lg font-medium mb-3 group-hover:text-blue-600 transition-colors">
                      {pub.title}
                    </h3>
                  </Link>
                  
                  <div className="flex flex-wrap gap-2 mb-3 text-sm text-gray-600">
                    {pub.authors.map((author, i) => (
                      <span key={i}>
                        {author}{i < pub.authors.length - 1 ? "," : ""}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 text-sm">
                    <span className="text-gray-600">{pub.venue}</span>
                    <span className="text-gray-600">{pub.year}</span>
                    {pub.citations !== undefined && (
                      <span className="text-gray-600">Citations: {pub.citations}</span>
                    )}
                    <span className="text-gray-500 capitalize">{pub.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Footer />
        </div>
      </div>
    </main>
  );
}
