export const personalInfo = {
  name: "Arpit Verma",
  title: "AI & ML Undergraduate",
  subtitle: "MERN Stack Developer | Problem Solver",
  bio: "I build scalable web applications, solve algorithmic challenges, and create innovative AI-powered solutions.",
  email: "av6821246@gmail.com",
  phone: "+91 7052501218",
  location: "Kanpur, Uttar Pradesh",
  github: "https://github.com/Arpit1825",
  linkedin: "https://linkedin.com/in/arpit-verma-687b3b332",
  leetcode: "https://leetcode.com/code_x_arpit",
  college: "Pranveer Singh Institute of Technology, Kanpur",
  degree: "B.Tech – Computer Science (AI & ML)",
  graduation: "2024 – 2028",
  careerGoal: "Seeking Software Development and Full Stack opportunities where I can contribute, learn from production environments, and solve real-world engineering challenges.",
};

export const skills = {
  Programming: [
    { name: "C++", level: 85 },
    { name: "Python", level: 80 },
    { name: "JavaScript", level: 88 },
    { name: "C", level: 75 },
  ],
  Frontend: [
    { name: "React.js", level: 85 },
    { name: "HTML5/CSS3", level: 90 },
    { name: "Tailwind CSS", level: 88 },
  ],
  Backend: [
    { name: "Node.js", level: 78 },
    { name: "Express.js", level: 76 },
    { name: "REST APIs", level: 80 },
  ],
  Databases: [
    { name: "MongoDB", level: 75 },
    { name: "MySQL", level: 70 },
    { name: "Firebase", level: 68 },
  ],
  "Libraries & Tools": [
    { name: "Redux Toolkit", level: 50 },
    { name: "NumPy/Pandas", level: 70 },
    { name: "Chart.js", level: 75 },
    { name: "Axios", level: 80 },
  ],
  "Core Concepts": [
    { name: "DSA", level: 78 },
    { name: "OOP", level: 82 },
    { name: "API Integration", level: 85 },
    { name: "Problem Solving", level: 82 },
  ],
};

export const techIcons = [
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#68A063" },
  { name: "Python", color: "#3776AB" },
  { name: "C++", color: "#00599C" },
  { name: "MongoDB", color: "#47A248" },
];

export const projects = [
  {
    id: 1,
    title: "CryptoTracker",
    description: "Real-time cryptocurrency tracking platform monitoring 500+ cryptocurrencies with live price data, historical trend analysis, and interactive charts.",
    longDesc: "Built with React and Redux Toolkit, this platform integrates the CoinGecko API to deliver live crypto data. Features include portfolio tracking, price alerts, and interactive Chart.js visualizations.",
    tech: ["React", "Redux Toolkit", "Axios", "Chart.js", "Tailwind CSS"],
    features: ["CoinGecko API Integration", "500+ Cryptocurrencies", "Historical Trend Analysis", "Responsive Design", "Redux State Management"],
    github: "https://github.com/Arpit1825/Full-Stack-Journey/tree/main/Crypto/Cryptoproject",
    demo: "https://full-stack-journey-pied.vercel.app/",
    featured: true,
    badge: null,
    color: "#f7931a",
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
  {
    id: 2,
    title: "Smart Water Automation & Dosing System",
    description: "Patent-backed IoT-based water quality monitoring and automated dosing system with real-time sensor processing, dashboard analytics, and automated chemical dosing.",
    longDesc: "An innovative IoT solution using ESP32 microcontrollers for real-time water quality monitoring. The system automates chemical dosing based on sensor data and provides live dashboard analytics.",
    tech: ["ESP32", "Python", "IoT", "Dashboard Dev", "Sensor Processing"],
    features: ["ESP32 Integration", "Real-time Monitoring", "Dashboard Analytics", "Automated Chemical Dosing", "Sensor Data Processing"],
    github: "https://github.com/Arpit1825/Smart-Water-Automation-Dosing-System",
    demo: "#",
    featured: true,
    badge: "Patent Published – Indian Patent Journal (Feb 2026)",
    color: "#00d4ff",
    gradient: "from-cyan-500/20 to-blue-500/20",
    large: true,
  },
  {
    id: 3,
    title: "Travel In-Depth",
    description: "Sustainable travel guide platform promoting eco-friendly tourism with destination insights, sustainability recommendations, and a fully responsive design.",
    longDesc: "A modular, responsive travel platform that highlights sustainable tourism practices. Built with vanilla web technologies for maximum compatibility and fast load times.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["Destination Insights", "Sustainability Recommendations", "Responsive Design", "Modular Architecture"],
    github: "https://github.com/Arpit1825/travel-in-depth",
    demo: "https://travel-in-depth.vercel.app",
    featured: true,
    badge: null,
    color: "#22d3ee",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];

export const achievements = [
  {
    icon: "code",
    title: "175+ DSA Problems",
    subtitle: "Solved on LeetCode",
    description: "Diving into competitive programming practice across arrays, trees, graphs, DP.",
    color: "#f7931a",
    count: 170,
    suffix: "+",
  },
  {
    icon: "patent",
    title: "Patent Publication",
    subtitle: "Indian Patent Journal, Feb 2026",
    description: "IoT Water Automation & Dosing System — patent published nationally.",
    color: "#a855f7",
    count: 1,
    suffix: "",
  },
  {
    icon: "iit",
    title: "IIT Kanpur Workshop",
    subtitle: "Technical Workshop Participant",
    description: "Participated in advanced technical workshop at IIT Kanpur.",
    color: "#4f8eff",
    count: null,
    suffix: "",
  },
  {
    icon: "trophy",
    title: "PROTECH 2K25",
    subtitle: "Project Presenter",
    description: "Presented Smart Water Automation project at PROTECH 2K25.",
    color: "#22d3ee",
    count: null,
    suffix: "",
  },
  {
    icon: "cert",
    title: "Infosys Certifications",
    subtitle: "Springboard Program",
    description: "Multiple certifications from Infosys Springboard platform.",
    color: "#fb923c",
    count: null,
    suffix: "",
  },
];

export const timeline = [
  {
    year: "2024",
    title: "Started B.Tech",
    description: "Enrolled at PSIT Kanpur in CS (AI & ML). Began learning DSA and web development fundamentals.",
    icon: "education",
  },
  {
    year: "2024",
    title: "Frontend Development",
    description: "Mastered HTML, CSS, JavaScript. Built Travel In-Depth as first full project.",
    icon: "code",
  },
  {
    year: "2025",
    title: "JavaScript & React ",
    description: "Deep-dived into React ecosystem, Redux, Node.js, Express, MongoDB. Built CryptoTracker.",
    icon: "react",
  },
  {
    year: "2025-2026",
    title: "MERN  IoT & Patent",
    description: "Developed Smart Water Automation System. Patent published in Indian Patent Journal.",
    icon: "patent",
  },
  {
    year: "2026",
    title: "AI & ML Exploration",
    description: "Exploring machine learning with Python, NumPy, Pandas, Matplotlib. Solving 170+ LeetCode problems.",
    icon: "ai",
  },
  {
    year: "2026+",
    title: "Full Stack Engineering",
    description: "Building production-grade applications. Seeking internship/job opportunities.",
    icon: "target",
  },
];

export const education = {
  college: "Pranveer Singh Institute of Technology",
  degree: "Bachelor of Technology",
  branch: "Computer Science (AI & ML)",
  duration: "2024 – 2028",
  coursework: [
    "Data Structures & Algorithms",
    "AI & ML Foundations",
    "SQL & Databases",
    "Computer Architecture",
    "Web Development",
    "Object-Oriented Programming",
  ],
};
