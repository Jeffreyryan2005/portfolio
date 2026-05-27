export const siteConfig = {
  name: "Jeffrey Ryan R",
  title: "Full Stack Developer",
  email: "ryanrajesh0@gmail.com",
  linkedin: "https://www.linkedin.com/in/jeffreyryan05",
  github: "https://github.com/jeffreyryan05",
  location: "Tirunelveli, India",
  resumeTagline: "Building the future, one line of code at a time.",
  heroSubtitles: [
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Hackathon Champion",
    "Problem Solver",
  ],
};

export const aboutData = {
  headline: "Crafting Digital Experiences That Matter",
  description: `I'm a Computer Science Engineering student with a passion for building scalable, 
production-ready web applications. With hands-on experience across the full stack — from 
pixel-perfect frontends to robust backend architectures — I thrive on turning complex problems 
into elegant, performant solutions.

My journey spans internships at industry leaders like Infosys, hackathon victories, and 
real-world projects that push the boundaries of what's possible on the web. I specialize in 
the modern JavaScript ecosystem, with deep expertise in React, Next.js, Node.js, and cloud 
infrastructure.`,
  stats: [
    { label: "Projects Built", value: 3, suffix: "+" },
    { label: "Internships", value: 2, suffix: "" },
    { label: "Hackathon Wins", value: 1, suffix: "st Place" },
    { label: "Certifications", value: 4, suffix: "+" },
  ],
};

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "Monitor",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "PostgreSQL" },
      { name: "Prisma" },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      { name: "AWS S3" },
      { name: "AWS EC2" },
      { name: "Vercel" },
      { name: "Git" },
      { name: "GitHub" },
    ],
  },
  {
    category: "Languages",
    icon: "Code2",
    skills: [
      { name: "Java" },
      { name: "Python" },
      { name: "C" },
      { name: "SQL" },
    ],
  },
  {
    category: "Tools",
    icon: "Wrench",
    skills: [
      { name: "VS Code" },
      { name: "Postman" },
      { name: "Figma" },
    ],
  },
];

export const allSkillNames = skillsData.flatMap((cat) =>
  cat.skills.map((s) => s.name)
);

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  type: string;
  description: string;
  highlights: string[];
}

export const experienceData: Experience[] = [
  {
    id: 1,
    role: "Web Developer",
    company: "Infosys Springboard",
    duration: "Oct 2025 — Dec 2025",
    type: "Internship",
    description:
      "Building production-grade applications at one of India's largest IT companies.",
    highlights: [
      "Engineered a smart waste pickup & recycling platform with secure role-based access control and dynamic agent assignment",
      "Implemented real-time agent matching algorithms based on geolocation and waste classification",
      "Built real-time messaging and notification systems for seamless communication between users and agents",
      "Designed optimized relational database schemas and developed comprehensive admin dashboards with analytics",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digisailor",
    duration: "Jan 2025 — Feb 2025",
    type: "Internship",
    description:
      "Delivered full-stack web applications for diverse client requirements.",
    highlights: [
      "Developed 3+ responsive full-stack web applications using Next.js, HTML, CSS, and JavaScript",
      "Created backend integrations using Prisma ORM and PostgreSQL for data persistence",
      "Built reusable UI component libraries based on client specifications and design systems",
      "Collaborated with cross-functional teams to deliver pixel-perfect responsive websites on tight deadlines",
    ],
  },
];

export interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  github?: string;
  live?: string;
  featured: boolean;
  gradient: string;
  stats: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "AI Email Triage System",
    tagline: "1st Place — VISAI 2026 Hackathon",
    description:
      "An AI-powered centralized email classification system that automates ticket routing, categorization, and priority handling. Built intelligent backend logic to triage incoming emails and route them to the right teams instantly — eliminating manual sorting and reducing response times dramatically.",
    techStack: ["Next.js", "Node.js", "AI/ML", "PostgreSQL", "Prisma"],
    github: "#",
    featured: true,
    gradient: "from-cyan-500 to-blue-600",
    stats: ["10K+ Emails", "Real-time", "Role-based Auth"],
  },
  {
    id: 2,
    title: "PathFinder",
    tagline: "Real-time Graph Algorithm Visualizer",
    description:
      "An interactive pathfinding application that fetches live road network data from OpenStreetMap and computes optimal routes using A*, Dijkstra's, and BFS algorithms built from scratch. Features stunning node-exploration animations and real-time algorithm comparison dashboards.",
    techStack: ["React", "JavaScript", "OpenStreetMap API", "Graph Algorithms"],
    github: "#",
    featured: false,
    gradient: "from-violet-500 to-purple-600",
    stats: ["Live Data", "3 Algorithms", "60 FPS"],
  },
  {
    id: 3,
    title: "WasteZero",
    tagline: "Smart Waste Management Platform",
    description:
      "A comprehensive full-stack waste management platform enabling smart waste pickup scheduling and recycling tracking. Features real-time communication, dynamic agent assignment based on location and waste type, role-based access control, and an admin dashboard with analytics.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "AWS"],
    github: "#",
    featured: false,
    gradient: "from-emerald-500 to-teal-600",
    stats: ["Full Stack", "Geospatial", "IoT Ready"],
  },
];

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  icon: string;
}

export const certificationsData: Certification[] = [
  {
    id: 1,
    title: "Data Structures and Algorithms",
    issuer: "UC San Diego — Coursera",
    icon: "BookOpen",
  },
  {
    id: 2,
    title: "Full Stack Development: Front-End & Back-End",
    issuer: "Meta — Coursera",
    icon: "Layers",
  },
  {
    id: 3,
    title: "Full Stack Development",
    issuer: "GUCCI Academy",
    icon: "GraduationCap",
  },
  {
    id: 4,
    title: "AI Powered Web Development",
    issuer: "Dhatchan Academy",
    icon: "Sparkles",
  },
];

export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const achievementsData: Achievement[] = [
  {
    id: 1,
    title: "1st Place — VISAI 2026 Hackathon",
    description:
      "Secured first place at Vel Tech Chennai for building an AI-Powered Centralized Email Triage System.",
    icon: "Trophy",
  },
  {
    id: 2,
    title: "Quiz Competition — 2nd Prize",
    description:
      "Won second prize at NEC, Kovilpatti in a competitive technical quiz.",
    icon: "Award",
  },
  {
    id: 3,
    title: "Paper Presentations",
    description:
      "Presented research papers at multiple engineering colleges including GCE, NEC, and AAA College of Engineering.",
    icon: "FileText",
  },
];

export const educationData = [
  {
    degree: "B.E. Computer Science & Engineering",
    institution: "SCAD College of Engineering & Technology",
    duration: "2023 — 2027",
    grade: "CGPA: 7.6",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Bell Matric. Hr. Sec. School",
    duration: "2022 — 2023",
    grade: "Score: 75%",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
