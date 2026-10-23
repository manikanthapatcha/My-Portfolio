export const personalInfo = {
  name: "Sai Ganesh Patcha",
  initials: "PG",
  headline: "Building intelligent products with code, data, and AI.",
  subheadline:
    "Full-stack developer focused on building scalable web applications, AI-powered systems, and practical machine learning solutions.",
  role: "Full-Stack Developer | Generative AI | Deep Learning",
  location: "Tadepalligudem, Andhra Pradesh, India",
  email: "manikantha.patcha@sasi.ac.in",
  github: "https://github.com/manikanthapatcha",
  linkedin: "https://www.linkedin.com/in/sai-ganesh-patcha-390a412a2",
  status: "Open to Full-Stack & AI Roles",
  badge: "Available Q3/Q4 2026",
  bio: "I'm a Computer Science & Data Science undergraduate and MERN Stack Developer Intern at PurpleLane. I specialize in designing and shipping production web applications that bridge intuitive frontend user interfaces with robust backend architectures and state-of-the-art Generative AI workflows like RAG, vector embeddings, and autonomous agent chains.",
  stats: [
    { label: "Substantial Projects", value: "05" },
    { label: "Production Stack", value: "MERN + AI" },
    { label: "B.Tech CGPA", value: "8.34/10" },
    { label: "Internship", value: "PurpleLane" },
  ],
};

export const projects = [
  {
    id: "shopmate",
    title: "ShopMate",
    tagline: "AI-Powered E-Commerce Platform",
    category: "Full-Stack & AI",
    badge: "Featured AI Project",
    summary:
      "A modern full-stack commerce engine integrating conventional catalog workflows with intelligent AI capabilities including Pinecone vector search, Gemini-powered automated listing generation, and LangChain/LangGraph customer support agents.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB Native Driver",
      "Pinecone",
      "Google Gemini AI",
      "LangChain",
      "LangGraph",
    ],
    highlights: [
      "Catalog and product management with high-speed query indexing",
      "Dual search engine combining keyword matching with Pinecone vector semantic search",
      "Automated product descriptions and SEO tag generation using Google Gemini",
      "Image-based listing ingestion converting uploaded photos into structured product drafts",
      "RAG-driven conversational support answering shipping, returns, and policy queries",
      "Human-reviewed AI blog generation engine producing draft articles for editorial review",
    ],
    architecture:
      "Three-tier architecture with a React (Vite) client interacting through REST endpoints with an Express.js backend. Persistence is split between MongoDB Native Driver for relational catalog & user data, and a Pinecone vector index (768-dimension Gemini embeddings) for semantic vector queries. LangGraph coordinates multi-turn agent reasoning for policy verification and customer inquiries.",
    challenges:
      "Balancing latency between real-time vector embedding creation and instant catalog browsing. Resolved by implementing asynchronous queue processing for embedding ingestion and optimistic client-side UI states.",
    githubUrl: "https://github.com/manikanthapatcha/ShopMateBlogAI",
    liveDemoUrl: null,
    isPrototype: false,
    featured: true,
  },
  {
    id: "legalgenie",
    title: "LegalGenie",
    tagline: "AI-Powered Legal Research Assistant",
    category: "Generative AI",
    badge: "RAG & NLP",
    summary:
      "An intelligent legal document analysis tool that ingests complex legal PDFs, chunks and embeds statutory texts into ChromaDB, and delivers citation-backed question answering using LangChain and Google Gemini.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "LangChain",
      "ChromaDB",
      "Google Gemini AI",
      "REST APIs",
    ],
    highlights: [
      "Automated PDF ingestion and structural document text extraction",
      "Recursive text chunking with 200-token contextual overlap",
      "Vector similarity retrieval using ChromaDB for sub-second clause lookups",
      "Strict Retrieval-Augmented Generation (RAG) preventing legal hallucination",
      "AI-generated case summaries, headnotes, and key legal argument briefs",
      "Explicit source attribution linking every generated answer to exact case citations",
    ],
    architecture:
      "A document processing pipeline where legal PDFs are uploaded, extracted, and segmented. Chunks are converted into dense embeddings and indexed in ChromaDB. When users query the assistant, LangChain constructs a contextual prompt with top-k retrieved excerpts, passing them to Gemini to synthesize precise, citation-grounded legal answers.",
    challenges:
      "Legal documents feature dense terminology and lengthy multi-page statutes where isolated sentences lose meaning. Addressed by designing a recursive character splitter with overlap and injecting metadata headers (case title, section numbers) into each chunk.",
    githubUrl: "https://github.com/manikanthapatcha/LegalGenie",
    liveDemoUrl: null,
    isPrototype: false,
    featured: true,
  },
  {
    id: "neptune-cxr",
    title: "NEPTUNE-CXR",
    tagline: "Deep Learning-Based Chest X-Ray Disease Probability Detection",
    category: "Deep Learning",
    badge: "Deep Learning & CV",
    summary:
      "A deep learning computer vision research prototype leveraging transfer learning with DenseNet121 and Grad-CAM heatmaps to estimate probabilities across 14 thoracic disease categories from chest radiography.",
    technologies: [
      "Python",
      "PyTorch",
      "DenseNet121",
      "FastAPI",
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Grad-CAM",
    ],
    highlights: [
      "Chest X-ray image upload, DICOM/PNG normalization, and tensor preprocessing",
      "Multi-label classification estimating probabilities across 14 thoracic conditions",
      "Grad-CAM visual explainability overlays displaying radiological heatmaps of interest",
      "Historical scan log, patient report storage, and interactive analytics dashboard",
      "Asynchronous FastAPI inference engine for model serving with sub-second turnaround",
    ],
    architecture:
      "PyTorch DenseNet121 backbone fine-tuned on chest radiography datasets, served through an asynchronous FastAPI inference microservice. Grad-CAM computes gradients at the final convolutional feature layer to synthesize visual heatmaps that map activations back onto the input image coordinates.",
    challenges:
      "Handling extreme class imbalance across 14 multi-label thoracic categories without model collapse. Solved by implementing positive-weighted binary cross-entropy loss and data augmentation (random rotation, contrast normalization).",
    disclaimer:
      "Research prototype developed for educational and experimental research purposes. Not clinically validated or approved as a medical diagnostic system.",
    githubUrl: "https://github.com/manikanthapatcha",
    liveDemoUrl: null,
    isPrototype: true,
    featured: true,
  },
  {
    id: "order-management-system",
    title: "Order Management System",
    tagline: "Full-Stack Inventory & Order Workflow Engine",
    category: "Full-Stack",
    badge: "Full-Stack Enterprise",
    summary:
      "A robust business operations platform engineered with React, Material UI, Node.js, and MongoDB for complete customer, product, inventory, and lifecycle order tracking.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Material UI",
      "CSS",
      "REST APIs",
    ],
    highlights: [
      "Comprehensive CRUD operations for products, customers, and order workflows",
      "Real-time status tracking pipeline (Pending, Processing, Dispatched, Delivered, Cancelled)",
      "Stock threshold monitoring with automated inventory deductions on order confirmation",
      "Structured validation layers and centralized error-handling middleware",
      "Search, pagination, and multi-parameter filtering for operations desks",
    ],
    architecture:
      "Modular MVC backend architecture with Express controllers and MongoDB models. React frontend with Material UI components communicates with the API server via RESTful endpoints, implementing JWT authentication and transactional status checkpoints.",
    challenges:
      "Preventing inventory race conditions when multiple customer orders are processed concurrently. Mitigated by using atomic MongoDB findAndModify operations with conditional quantity checks.",
    githubUrl: "https://github.com/manikanthapatcha",
    liveDemoUrl: null,
    isPrototype: false,
    featured: false,
  },
  {
    id: "student-intelligence",
    title: "Student Intelligence",
    tagline: "AI-Powered Student Assistant (Local LLM)",
    category: "Generative AI",
    badge: "Local LLM · Ollama",
    summary:
      "A developer-grade study intelligence platform that harnesses a locally hosted Llama 3.2 model via Ollama to deliver conversational academic assistance, engineered study modes, and zero-cloud private inference.",
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Ollama",
      "Llama 3.2",
      "JavaScript",
      "REST APIs",
    ],
    highlights: [
      "Integrated locally running Llama 3.2 model using Ollama for private, zero-latency inference",
      "Custom Express service layer communicating directly with Ollama REST APIs (/api/chat, /api/tags)",
      "Proactive model detection, health monitoring, and connection fallback handling",
      "Engineered study modes: Conceptual Breakdown, Technical Analysis, and University Exam Answers",
      "Zero-cloud architecture ensuring complete student data privacy on local hardware",
    ],
    architecture:
      "Two-tier client-server architecture: A Vite + React frontend connects over RESTful endpoints to an Express.js backend. The server coordinates with an Ollama REST engine daemon (http://127.0.0.1:11434) running Llama 3.2 locally, managing prompt templates, stream processing, and server health checks.",
    challenges:
      "Ensuring seamless conversational UX during local engine cold starts and handling hardware constraints; addressed by developing dedicated health probes, dynamic model detection, and structured fallback notifications on the client.",
    problemSolved:
      "Provides students with an accessible, high-performance AI assistant for academic support while enabling local language-model execution without depending on external cloud API subscriptions.",
    githubUrl: "https://github.com/manikanthapatcha/StudentIntelligence",
    liveDemoUrl: null,
    isPrototype: false,
    featured: true,
  },
];

export const skillCategories = [
  {
    id: "ai",
    name: "AI & Generative AI",
    shortName: "AI / GenAI",
    icon: "Brain",
    color: "#84cc16",
    description: "LLMs, Agentic Frameworks, Vector Stores & Deep Learning",
    skills: [
      { name: "LangChain", level: "Advanced", icon: "Link" },
      { name: "LangGraph", level: "Proficient", icon: "GitFork" },
      { name: "RAG Systems", level: "Advanced", icon: "FileSearch" },
      { name: "Ollama (Llama 3.2)", level: "Advanced", icon: "Bot" },
      { name: "Google Gemini API", level: "Advanced", icon: "Sparkles" },
      { name: "Pinecone", level: "Proficient", icon: "Database" },
      { name: "LLMs & Agents", level: "Advanced", icon: "Bot" },
      { name: "Prompt Engineering", level: "Advanced", icon: "Terminal" },
      { name: "Deep Learning (PyTorch)", level: "Intermediate", icon: "Cpu" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend Development",
    shortName: "Frontend",
    icon: "Layout",
    color: "#38bdf8",
    description: "Modern, responsive, accessible web interfaces",
    skills: [
      { name: "React.js", level: "Advanced", icon: "Atom" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "Code2" },
      { name: "Tailwind CSS", level: "Advanced", icon: "Palette" },
      { name: "HTML5 & Semantic Web", level: "Advanced", icon: "FileCode" },
      { name: "CSS3 / Modern Styling", level: "Advanced", icon: "Layers" },
      { name: "Vite", level: "Proficient", icon: "Zap" },
    ],
  },
  {
    id: "backend",
    name: "Backend Development",
    shortName: "Backend",
    icon: "Server",
    color: "#a855f7",
    description: "Scalable server architectures, APIs & microservices",
    skills: [
      { name: "Node.js", level: "Advanced", icon: "Server" },
      { name: "Express.js", level: "Advanced", icon: "Cpu" },
      { name: "RESTful APIs", level: "Advanced", icon: "ArrowLeftRight" },
      { name: "Python", level: "Proficient", icon: "Binary" },
      { name: "FastAPI", level: "Intermediate", icon: "Zap" },
      { name: "Authentication / JWT", level: "Proficient", icon: "Lock" },
    ],
  },
  {
    id: "databases",
    name: "Databases & Storage",
    shortName: "Databases",
    icon: "Database",
    color: "#f59e0b",
    description: "Document, relational, and vector data storage",
    skills: [
      { name: "MongoDB", level: "Advanced", icon: "Database" },
      { name: "MongoDB Native Driver", level: "Advanced", icon: "HardDrive" },
      { name: "PostgreSQL", level: "Intermediate", icon: "Table" },
      { name: "ChromaDB", level: "Proficient", icon: "Compass" },
      { name: "Pinecone Vector DB", level: "Proficient", icon: "Boxes" },
    ],
  },
  {
    id: "tools",
    name: "Developer Tools & DevOps",
    shortName: "Dev Tools",
    icon: "Wrench",
    color: "#ec4899",
    description: "Version control, containerization & deployment",
    skills: [
      { name: "Git", level: "Advanced", icon: "GitBranch" },
      { name: "GitHub", level: "Advanced", icon: "Github" },
      { name: "VS Code", level: "Advanced", icon: "Code" },
      { name: "Postman", level: "Advanced", icon: "Send" },
      { name: "Docker", level: "Intermediate", icon: "Box" },
      { name: "Vercel", level: "Proficient", icon: "Triangle" },
      { name: "Render", level: "Proficient", icon: "Cloud" },
    ],
  },
];

export const experience = [
  {
    id: "purplelane",
    role: "MERN Stack Developer Intern",
    company: "PurpleLane",
    duration: "February 2026 – August 2026",
    period: "Feb 2026 – Aug 2026",
    type: "Internship",
    location: "Remote / Hybrid",
    description:
      "Developed responsive user interface components and backend functionality using the MERN stack, integrated RESTful APIs with database operations, implemented reusable application components and authentication flows, and improved application workflows through structured backend logic and error handling.",
    responsibilities: [
      "Engineered reusable, high-performance React UI components paired with responsive Tailwind CSS layouts.",
      "Developed structured Node.js / Express backend endpoints connecting MongoDB with client applications.",
      "Implemented secure JWT authentication flows, session handling, and defensive input validation.",
      "Reduced endpoint response latency through MongoDB indexing and structured error handling middleware.",
      "Collaborated in code reviews, agile sprints, and Git-based collaborative feature workflows.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs", "Git"],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering (Data Science)",
    institution: "Sasi Institute of Technology and Engineering",
    location: "Tadepalligudem, Andhra Pradesh",
    year: "Expected 2027",
    score: "CGPA: 8.34 / 10",
    details:
      "Focused on Data Structures, Machine Learning, Deep Learning, Cloud Computing, and Web Engineering. Active member of technical clubs and hackathon teams.",
    current: true,
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "Aditya Junior College",
    location: "Andhra Pradesh",
    year: "2023",
    score: "Percentage: 70%",
    details: "Mathematics, Physics, and Chemistry (MPC stream).",
    current: false,
  },
  {
    degree: "Secondary School Certificate (SSC, Class X)",
    institution: "St. Ann's E.M. School",
    location: "Andhra Pradesh",
    year: "2021",
    score: "Percentage: 92%",
    details: "Strong foundational academic performance with excellence in science and mathematics.",
    current: false,
  },
];

export const certifications = [
  {
    title: "MERN Stack",
    issuer: "PurpleLane",
    period: "2026",
    description: "Full-stack web application development covering MongoDB, Express.js, React.js, and Node.js.",
  },
  {
    title: "Generative AI",
    issuer: "PurpleLane",
    period: "2026",
    description: "Hands-on implementation of LLMs, prompt engineering, RAG pipelines, and agentic workflows.",
  },
  {
    title: "Python 101 for Data Science",
    issuer: "IBM SkillsBuild",
    period: "2024",
    description: "Core Python programming, data manipulation, logic construction, and data analysis fundamentals.",
  },
];

export const achievements = [
  {
    title: "Smart India Hackathon (SIH) Internal Hackathon",
    role: "Participant",
    year: "2026",
    description:
      "Collaborated in a multidisciplinary team to architect and prototype a technology-driven software solution addressing real-world problem statements.",
  },
  {
    title: "IEEE Student Member",
    role: "Active Member",
    year: "Ongoing",
    description:
      "Participating in technical seminars, computational workshops, and professional networking within the IEEE student community.",
  },
];
