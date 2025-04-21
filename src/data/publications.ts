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
export const ALL_PUBLICATIONS: Publication[] = [
    {
      title: "Krysalis Hand: A Lightweight, High-Payload, 18-DoF Anthropomorphic End-Effector for Robotic Learning and Dexterous Manipulation",
      authors: ["A Basheer", "J Chang", "Y Chen", "D Kim", "I Soltani"],
      year: 2025,
      venue: "arXiv preprint",
      link: "https://arxiv.org/abs/2504.12967",
      type: "preprint",
      media: {
        type: "video",
        url: "/publications/krysalis.mp4",
        thumbnail: "/publications/krysalis.mp4"
      }
    },
    {
      title: "User-Centered Insights into Assistive Navigation Technologies for Individuals with Visual Impairment",
      authors: ["I Soltani", "J Schofield", "M Madani", "D Kish", "P Emami-Naeini"],
      year: 2025,
      venue: "arXiv preprint",
      link: "https://arxiv.org/abs/2504.06379",
      type: "preprint",
      // media: {
      //   type: "video",
      //   url: "/publications/user.mp4",
      //   thumbnail: "/publications/user.mp4"
      // }
    },
    {
      title: "Infrared Vision Systems for Emergency Vehicle Driver Assistance in Low-Visibility Conditions",
      authors: ["MM Naddaf-Sh", "A Lee", "K Yen", "E Amini", "I Soltani"],
      year: 2025,
      venue: "arXiv preprint",
      type: "preprint",
      media: {
        type: "video",
        url: "/publications/harsh1.mp4",
        thumbnail: "/publications/harsh1.mp4"
      }
    },
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
      type: "journal",
      media: {
        type: "video",
        url: "/publications/cardreamer.gif",
        thumbnail: "/publications/cardreamer.gif"
      }
    },
    {
      title: "MarineFormer: A Transformer-based Navigation Policy Model for Collision Avoidance in Marine Environment",
      authors: ["E Kazemi", "I Soltani"],
      year: 2024,
      venue: "arXiv e-prints",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:lSLTfruPkqcC",
      type: "preprint",
      media: {
        type: "video",
        url: "/publications/USV_MarineFormer.mp4",
        thumbnail: "/publications/USV_MarineFormer.mp4"
      }
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
      type: "journal",
      media: {
        type: "video",
        url: "/publications/AV_Fully_Compliant_Lane_Change_Compliance_Ablation_movie.mp4",
        thumbnail: "/publications/AV_Fully_Compliant_Lane_Change_Compliance_Ablation_movie.mp4"
      }
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
      type: "journal",
      media: {
        type: "video",
        url: "/publications/deepbayesian.mp4",
        thumbnail: "/publications/deepbayesian.mp4"
      }
    },
    {
      title: "One-Shot Learning of Visual Path Navigation for Autonomous Vehicles",
      authors: ["Z CuiZhu", "F Charette", "A Ghafourian", "D Shi", "M Cui", "A Krishnamachar"],
      year: 2023,
      venue: "arXiv preprint",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:BqipwSGYUEgC",
      citations: 1,
      type: "preprint",
      media: {
        type: "video",
        url: "/publications/videoplayback.mp4",
        thumbnail: "/publications/videoplayback.mp4"
      }
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
      type: "patent",
      media: {
        type: "video",
        url: "/publications/safety.png",
        thumbnail: "/publications/safety.png"
      }
    },
    {
      title: "LiDAR device based on scanning mirrors array and multi-frequency laser modulation",
      authors: ["IS Bozchalooi", "K Youcef-Toumi"],
      year: 2020,
      venue: "US Patent 10,649,072",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&citation_for_view=BJ2teVoAAAAJ:L8Ckcad2t8MC",
      citations: 33,
      type: "patent",
      media: {
        type: "video",
        url: "/publications/lidar.png",
        thumbnail: "/publications/lidar.png"
      }
    },
    {
      title: "Regularized cycle consistent generative adversarial network for anomaly detection",
      authors: ["Z Yang", "I Soltani Bozchalooi", "E Darve"],
      year: 2020,
      venue: "ECAI 2020, 1618-1625",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BJ2teVoAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=BJ2teVoAAAAJ:hFOr9nPyWt4C",
      citations: 17,
      type: "conference",
      media: {
        type: "video",
        url: "/publications/regularized.png",
        thumbnail: "/publications/regularized.png"
      }
    },
    {
      title: "Active scanning probes: A versatile toolkit for fast imaging and emerging nanofabrication",
      authors: ["IW Rangelow", "T Ivanov", "A Ahmad", "M Kaestner", "C Lenk", "IS Bozchalooi", "F Xia", "K Youcef-Toumi", "M Holz", "A Reum"],
      year: 2017,
      venue: "Journal of Vacuum Science & Technology B 35 (6), 06G101",
      link: "https://pubs.aip.org/avs/jvb/article/35/6/06G101/591631",
      type: "journal",
      citations: 85,
      media: {
        type: "video",
        url: "/publications/jvb.jpg",
        thumbnail: "/publications/jvb.jpg"
      }
    },
    {
      title: "Induced vibration contact detection for minimizing cantilever tip-sample interaction forces in jumping mode atomic force microscopy",
      authors: ["F Xia", "I Soltani Bozchalooi", "K Youcef-Toumi"],
      year: 2017,
      venue: "IEEE/ASME International Conference on Advanced Intelligent Mechatronics (AIM)",
      link: "https://ieeexplore.ieee.org/abstract/document/7963591",
      type: "conference",
      citations: 12
    },
    {
      title: "Design and control of multi-actuated atomic force microscope for large-range and high-speed imaging",
      authors: ["I Soltani Bozchalooi", "A Careaga Houck", "JM AlGhamdi", "K Youcef-Toumi"],
      year: 2016,
      venue: "Ultramicroscopy 160, 213-224",
      link: "https://www.sciencedirect.com/science/article/pii/S0304399115300528",
      type: "journal",
      citations: 45,
      media: {
        type: "video",
        url: "/publications/designandcontrol.mp4",
        thumbnail: "/publications/designandcontrol.mp4"
      }
    },
    {
      title: "A study on the effectiveness of proportional-integral-derivative control in multi-actuated atomic force microscopy",
      authors: ["I Soltani Bozchalooi", "AC Houck", "K Youcef-Toumi"],
      year: 2015,
      venue: "American Control Conference (ACC)",
      link: "https://ieeexplore.ieee.org/document/7171012",
      type: "conference",
      citations: 15
    },
    {
      title: "Estimator based multi-eigenmode control of cantilevers in multifrequency Atomic Force Microscopy",
      authors: ["A Schuh", "I Soltani Bozchalooi", "IW Rangelow", "K Youcef-Toumi"],
      year: 2015,
      venue: "American Control Conference (ACC)",
      link: "https://ieeexplore.ieee.org/abstract/document/7171011",
      type: "conference",
      citations: 28
    }
  ];