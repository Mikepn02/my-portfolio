import { FaGithub, FaLinkedin } from "react-icons/fa";

export const navItems = [

    {
        id: 1,
        name: 'Home',
        link: '#home',
    },
    {
        id: 2,
        name: 'About',
        link: '#about',
    },
    {
        id: 3,
        name: 'Resume',
        link: '#resume',
    },
    {
        id: 4,
        name: 'Works',
        link: '#works',
    },
    {
        id: 5,
        name: 'Contact',
        link: '#contact',
    },
]

export const socialLinks = [

    {
        id: 1,
        name: 'GitHub',
        link: 'https://github.com/Mikepn02',
        icon: FaGithub
    },
    {
        id: 2,
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/nzabera-mike-peter-983166256/',
        icon: FaLinkedin
    },
]

export const allSkills = [
    "JavaScript", "React.js", "TypeScript", "Angular.js", "Vue.js", "MUI",
    "Node.js/Express.js", "Go", "C#", "NestJS", "Django", "Laravel", "GraphQL", "RabbitMQ",
    "Spring Boot", "REST API", "React Native", "Flutter", "TailwindCSS",
    "MySQL", "MongoDB", "PostgreSQL", "MS SQL", "SQLite", "Ethereum",
    "Smart Contracts", "Solidity", "Rust", "DApp", "Web3.js", "Ethers.js",
    "AI", "Machine Learning", "RAG", "LLMs",
    "Git", "tRPC", "DevOps", "Docker", "Kubernetes", "Jenkins", "Github Actions",
    "AWS", "Firebase", "CI/CD"
];



 export const experiences = [
    {
      period: "Aug 2025 — Present",
      title: "Backend Developer",
      company: "eFiche - internship",
      achievements: [
        "Designed and implemented scalable REST APIs using NestJS, improving backend performance and maintainability for eFiche's mobile health application.",
        "Integrated AI health assistant into the backend to enable intelligent, context-aware responses and improved user interactions.",
        "Collaborated with mobile teams to ensure smooth communication between the assistant, backend services and user interfaces.",
        "Optimized backend performance, database queries and response times for better scalability and reliability.",
        "Contributed to testing, documentation and CI/CD processes to ensure high quality and maintainable backend systems."
      ]
    },
    {
      period: "Jun 2024 — Present",
      title: "Full Stack Engineer",
      company: "Freelance",
      achievements: [
        "Develop, test, and deploy scalable web applications using React, Node.js, TypeScript, and GraphQL.",
        "Collaborate with clients to identify project requirements, develop project plans, and manage project timelines.",
        "Work independently and within a team environment to meet project deadlines and exceed customer expectations.",
        "Utilized blockchain technology to improve data security and streamline transaction processing.",
        "Developed smart contracts and decentralized applications using Solidity and Hardhat for the Ethereum blockchain platform.",
        "Collaborated with colleagues to devise innovative solutions and create new opportunities."
      ]
    },
    {
      period: "Jun 2024 — Apr 2025",
      title: "Lead Backend Engineer",
      company: "Ziba Pay",
      achievements: [
        "Developed and maintained a secure, scalable payment gateway facilitating seamless MTN and Airtel Money transactions.",
        "Developed robust backend services with TypeScript and GraphQL ensuring efficient payment processing and API performance.",
        "Integrated third-party payment APIs and improved transaction reliability through advanced error handling and performance tuning.",
        "Built CI/CD pipeline and implemented automated testing, deployment, and monitoring processes to ensure reliable, efficient, and scalable software delivery."
      ]
    },
    {
      period: "Jul 2024 — Aug 2024",
      title: "Backend Engineer",
      company: "Mashirika Performing Arts and Media Company",
      achievements: [
        "Developed backend services for a Content Management System (CMS) using NestJS, integrating with Sanity CMS to manage event content.",
        "Built secure, scalable APIs enabling dynamic event updates and efficient content management.",
        "Worked closely with the Next.js front-end team to ensure seamless API integration and data flow.",
        "Supported platform deployment and stability during the festival to enhance audience experience."
      ]
    }
  ];

export   const projects = [

    {
      title: "Ziba Pay Gateway",
      category: "Full Stack",
      description: "Secure payment gateway facilitating seamless MTN and Airtel Money transactions with robust backend services.",
      tech: ["TypeScript", "GraphQL", "Node.js","Devops", "CI/CD", "Kubernetes"],
      image: "/ziba-pay.png",
      github: "#",
      live: "http://zibapay.com/"
    },
    {
      title: "MarketReady.ai",
      category: "Full Stack",
      description: "Streamline property marketing with AI-powered tools— reach more buyers and tenants in minutes, not days",
      tech: ["Next.js", "AI Integration", "TailwindCSS", "Node.js"],
      image: "/marketready.png",
      github: "#",
      live: "https://marketreadyai-web-dev.vercel.app"
    },
     {
      title: "Crypta Vita",
      category: "Full Stack",
      description: "An Early Warning System for Hazards",
      tech: ["React", "React Native", "Node.js"],
      image: "/cryptavita.png",
      github: "#",
      live: "https://cryptavita.life"
    },

  ];
