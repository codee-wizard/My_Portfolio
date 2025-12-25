export const personalInfo = {
  name: "Apoorva Choudhary",
  title: "Full-stack Developer & UI/UX Enthusiast",
  elevatorPitch: "Crafting seamless digital experiences through elegant code and innovative design",
  email: "choudharyapoorva155@gmail.com",
  github: "https://github.com/codee-wizard",
  linkedin: "https://www.linkedin.com/in/apoorva-choudhary-561262332/",
};

export const about = {
  bio: [
    "I'm a passionate full-stack developer with a keen eye for design and user experience. My journey in tech began with a curiosity for how things work, which evolved into a love for building beautiful, functional applications.",
    "I specialize in creating modern web applications using cutting-edge technologies like React, Node.js, and Three.js. My approach combines technical excellence with creative problem-solving to deliver experiences that users love.",
    "When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or experimenting with emerging technologies like Web3 and AI."
  ]
};

export const skills = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Languages" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "TailwindCSS", level: 90, category: "Styling" },
  { name: "Next.js", level: 85, category: "Framework" },
  { name: "MongoDB", level: 75, category: "Database" },
  { name: "Python", level: 80, category: "Languages" },
  { name: "UI/UX Design", level: 85, category: "Design" },
  { name: "Git", level: 90, category: "Tools" }
  // { name: "Three.js", level: 80, category: "3D Graphics" },
  // { name: "Docker", level: 70, category: "DevOps" },
  // { name: "GraphQL", level: 75, category: "API" },
];

export const projects = [
  {
    id: 1,
    title: "BookSwap Platform",
    description: "A comprehensive book exchange platform with real-time notifications and smart matching algorithms",
    fullDescription: "BookSwap is a full-stack application that connects book lovers and facilitates book exchanges. The platform features user authentication, book listings, swap requests, real-time notifications, and a sophisticated matching algorithm that suggests books based on user preferences.",
    image: "/Project1.png",
    tags: ["React", "Node.js", "MongoDB"],
    demo: "https://book-swap-virid-one.vercel.app/",
    highlights: [
      "Real-time chat",
      "Responsive design with mobile app",
    ]
  },
  {
  id: 2,
  title: "Construction Company Website",
  description: "A responsive construction company website built to showcase services, projects, and contact information.",
  fullDescription:
    "A modern construction company website designed to present company services, completed projects, and business details clearly. The focus was on clean layout, responsiveness across devices, and straightforward user navigation.",
  image: "/Project2.png",
  tags: ["React", "JavaScript", "TailwindCSS"],
  demo: "https://a1-constructions.vercel.app/",
  highlights: [
    "Responsive layout for mobile, tablet, and desktop",
    "Service and project showcase sections",
    "Clean UI with consistent design system",
  ]

  },
  {
  id: 3,
  title: "3D Portfolio",
  description: "A personal portfolio website featuring interactive 3D elements and smooth animations.",
  fullDescription:
    "A creative portfolio website built to showcase projects and skills using interactive 3D components and modern animations. The project focuses on visual engagement, smooth transitions, and experimenting with creative frontend techniques.",
  image: "/Project3.png",
  tags: [
    "React",
    "Three.js",
    "React Three Fiber",
    "Framer Motion",
    "GSAP",
  ],
  demo: "https://your-3d-portfoli",
  highlights: [
    "Interactive 3D elements using Three.js",
    "Smooth page and scroll-based animations",
    "Component-based architecture in React",
    "Creative UI focused on user engagement"
  ]

  },
  // {
  //   id: 4,
  //   title: "E-Commerce Platform",
  //   description: "A modern e-commerce solution with payment integration and inventory management",
  //   fullDescription: "A full-featured e-commerce platform built with scalability in mind. Includes product management, shopping cart, secure payment processing, order tracking, and admin dashboard.",
  //   image: "/assets/project4.png",
  //   tags: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
  //   demo: "https://shop-demo.com",
  //   highlights: [
  //     "Secure payment processing",
  //     "Advanced search and filters",
  //     "Inventory management system",
  //     "Multi-vendor support"
  //   ]
  // }
];

export const experience = [
  {
    id: 1,
    company: "Academic Projects & Self-Learning",
    role: "FullStack Developer (Student)",
    period: "2024 - Present",
    description:
      "Building frontend applications through academic coursework, self-learning, and small freelance-style projects. Worked on responsive user interfaces, API integration, and reusable component design while improving code quality and problem-solving skills.",
    technologies: [
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "SQL",
      "JWT Authentication",
      "TailwindCSS",
      "Fetch API",
      "Git"
    ],
    logo: "/assets/student.svg"
  },
  {
    id: 2,
    company: "Web Application Programming (WAP)",
    role: "Web Developer",
    period: "2024-Present",
    description:
      "Developed web applications as part of the Web Application Programming curriculum, covering JavaScript fundamentals, asynchronous programming, REST API handling, and React component-based development.",
    technologies: [
      "JavaScript",
      "React",
      "Promises",
      "Async/Await",
      "REST APIs"
    ],
    logo: "/assets/college.svg"
  },
  {
    id: 3,
    company: "Personal & Freelance Projects",
    role: "Frontend Developer",
    period: "2025 - Present",
    description:
      "Worked on personal and small freelance projects for practice and real-world exposure, focusing on clean UI, responsive layouts, and basic client requirements. Gained experience translating simple requirements into functional web interfaces.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "TailwindCSS",
      "GitHub"
    ],
    logo: "/assets/projects.svg"
  },
  {
    id: 4,
    company: "Data Structures & Algorithms Practice",
    role: "Problem Solver",
    period: "2025 - Present",
    description:
      "Practicing Data Structures and Algorithms through structured problem-solving, covering arrays, recursion, stacks, queues, trees, and dynamic programming to strengthen logical thinking and coding fundamentals.",
    technologies: [
      "Python",
      "DSA",
      "Algorithms",
      "Problem Solving"
    ],
    logo: "/assets/dsa.svg"
  }
];
