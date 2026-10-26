export const personalInfo = {
  name: "Sai Ganesh Patcha",
  fullName: "Patcha Manikanta Naga Venkata Sai Ganesh",
  shortName: "Sai Ganesh",
  initials: "PG",
  headline: "Hi, I'm Sai Ganesh.",
  title: "Full-Stack Developer & AI Engineer",
  role: "Full-Stack Developer & AI Engineer",
  subheadline: "Building intelligent applications and practical AI-powered systems.",
  objective:
    "Computer Science and Data Science undergraduate with hands-on experience in full-stack development, Generative AI, and deep learning. Skilled in building RESTful APIs, AI-powered applications, and machine learning prototypes. Seeking an entry-level software development role to build scalable solutions and contribute to real-world applications.",
  location: "Tadepalligudem, Andhra Pradesh",
  phone: "8332088339",
  email: "manikantha.patcha@sasi.ac.in",
  github: "https://github.com/manikanthapatcha",
  linkedin: "https://www.linkedin.com/in/sai-ganesh-patcha-390a412a2",
  status: "Open to Full-Stack & AI Roles",
  badge: "Available Q3/Q4 2026",
  languages: ["English", "Telugu", "Hindi"],
  bio: "Computer Science and Data Science undergraduate with hands-on experience in full-stack development, Generative AI, and deep learning. Skilled in building RESTful APIs, AI-powered applications, and machine learning prototypes.",
  stats: [
    { label: "Substantial Projects", value: "05" },
    { label: "Production Stack", value: "MERN + AI" },
    { label: "B.Tech CGPA", value: "8.34/10" },
    { label: "Internship", value: "PurpleLane" },
  ],
};

export const projects = [
  {
    id: "student-intelligence",
    title: "Student Intelligence",
    tagline: "AI-Powered Student Assistant (Local LLM)",
    category: "Generative AI",
    badge: "Local LLM · Ollama",
    projectType: "Personal Engineering Project (Zero-Cloud Local LLM)",
    summary:
      "An AI-powered academic assistant leveraging a locally running Llama 3.2 model through Ollama to enable private, high-performance conversational support without cloud dependencies.",
    problemSolved:
      "Students often require continuous AI study support for complex technical coursework, but cloud API subscriptions can be expensive and expose proprietary academic or personal study notes to third-party data tracking.",
    intendedUsers:
      "Engineering and computer science students needing a private, offline-capable study assistant for technical problem breakdowns, university exam preparation, and conceptual explanations.",
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "Ollama",
      "Llama 3.2",
      "JavaScript",
      "REST APIs",
    ],
    highlights: [
      "Integrated the locally running Llama 3.2 model through Ollama to enable AI-powered student conversations.",
      "Developed backend chat and health-monitoring APIs with a dedicated service for local model communication.",
      "Implemented model detection and fallback handling to improve application reliability.",
    ],
    architecture:
      "Two-tier client-server architecture: A Vite + React frontend connects over RESTful endpoints to an Express.js backend. The server coordinates with an Ollama REST engine daemon (http://127.0.0.1:11434) running Llama 3.2 locally, managing prompt templates, stream processing, and server health checks.",
    keyDecisions: [
      "Connected React frontend directly to a local Express service coordinating with an Ollama daemon running Llama 3.2 on local hardware, ensuring 100% zero-cloud data privacy.",
      "Engineered 3 dedicated study prompt modes: Conceptual Breakdown, Technical Analysis, and University Exam Answers.",
      "Implemented active health probes (/api/tags) and model detection to alert users if the local Ollama daemon is offline.",
    ],
    securityAndPerformance: [
      "100% local execution — zero user queries, lecture notes, or chats leave the local network boundary.",
      "Local model detection prevents client hangs and provides clear recovery diagnostics if host RAM or VRAM is constrained.",
      "Optimized stream chunking for rapid time-to-first-token conversational responsiveness.",
    ],
    challenges:
      "Ensuring seamless conversational UX during local engine cold starts and handling hardware constraints; addressed by developing dedicated health probes, dynamic model detection, and structured fallback notifications on the client.",
    limitationsAndFutureWork: [
      "Inference throughput is tied directly to host GPU/VRAM hardware specs (operates best on 8GB+ unified memory).",
      "Future iteration: Multi-document local vector indexing with ChromaDB to allow students to query entire textbook PDFs locally.",
      "Future iteration: Local speech-to-text integration for voice-driven study prompts.",
    ],
    githubUrl: "https://github.com/manikanthapatcha/StudentIntelligence",
    liveDemoUrl: null,
    isPrototype: false,
    featured: true,
  },
  {
    id: "shopmate",
    title: "ShopMate",
    tagline: "AI-Powered E-Commerce Platform",
    category: "Full-Stack & AI",
    badge: "Featured AI Project",
    projectType: "Personal Full-Stack & Generative AI Engineering Project",
    summary:
      "A modern full-stack commerce engine integrating catalog workflows with intelligent AI capabilities including Pinecone vector search, Gemini-powered automated listing generation, and LangChain/LangGraph customer support agents.",
    problemSolved:
      "Conventional catalog search fails when users describe products conversationally or provide reference photos, while manual catalog management and product description drafting consume hours of administrative overhead.",
    intendedUsers:
      "Online shoppers seeking intuitive semantic product discovery and e-commerce administrators seeking automated AI cataloging and intelligent customer support.",
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB Native Driver",
      "JWT",
      "Pinecone",
      "Google Gemini AI",
      "LangChain",
      "LangGraph",
    ],
    highlights: [
      "Developed a full-stack e-commerce platform with authentication, product management, and keyword-based search.",
      "Integrated semantic product search, AI-generated product descriptions, and multimodal image-based product listing.",
      "Built AI customer support, a RAG-based policy assistant, and an AI blog-generation workflow with human review.",
    ],
    architecture:
      "Three-tier architecture with a React (Vite) client interacting through REST endpoints with an Express.js backend. Persistence is split between MongoDB Native Driver for relational catalog & user data, and a Pinecone vector index (768-dimension Gemini embeddings) for semantic vector queries. LangGraph coordinates multi-turn agent reasoning for policy verification and customer inquiries.",
    keyDecisions: [
      "Employed Pinecone vector index with 768-dimensional Gemini embeddings alongside MongoDB Native Driver for hybrid search (dense semantic search + structured metadata filters).",
      "Adopted LangGraph for stateful customer support to maintain conversation context across multiple turns and enforce policy guardrails without loops.",
      "Designed multimodal product listing ingestion where Gemini Vision extracts structured JSON product attributes (title, category, tags, specs) directly from uploaded product imagery.",
    ],
    securityAndPerformance: [
      "Stateless JWT authentication with bcrypt password hashing and defensive input validation on all CRUD endpoints.",
      "Atomic MongoDB findAndModify operations during inventory reservation to prevent race conditions during concurrent orders.",
      "Asynchronous queue processing for vector embedding generation to keep catalog browsing fast and responsive.",
    ],
    challenges:
      "Balancing latency between real-time vector embedding creation and instant catalog browsing. Resolved by implementing asynchronous queue processing for embedding ingestion and optimistic client-side UI states.",
    limitationsAndFutureWork: [
      "Cold-start latency on free-tier deployment environments when warming up vector connections.",
      "Future iteration: Implementation of Redis caching for hot product catalogs and search query caching.",
      "Future iteration: Stripe payment gateway integration for end-to-end checkout processing.",
    ],
    githubUrl: "https://github.com/manikanthapatcha/ShopMateTask",
    liveDemoUrl: "https://shopmate-pi.vercel.app/login",
    isPrototype: false,
    featured: true,
  },
  {
    id: "neptune-cxr",
    title: "NEPTUNE-CXR",
    tagline: "Deep Learning-Based Chest X-Ray Disease Probability Detection",
    category: "Deep Learning",
    badge: "Deep Learning & CV",
    projectType: "Academic Research Prototype (Deep Learning & Computer Vision)",
    summary:
      "A deep learning computer vision research prototype leveraging transfer learning with DenseNet121 and Grad-CAM heatmaps to estimate probabilities across 14 thoracic disease categories from chest radiography.",
    problemSolved:
      "Preliminary radiographic triage in emergency settings requires fast, explainable multi-label thoracic screening, but deep neural networks are often treated as uninterpretable black boxes by clinicians.",
    intendedUsers:
      "Educational researchers, computational biology students, and medical imaging researchers exploring transfer learning and visual explainability.",
    technologies: [
      "Python",
      "PyTorch",
      "DenseNet121",
      "FastAPI",
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Grad-CAM",
    ],
    highlights: [
      "Developed a deep learning prototype estimating probabilities across 14 thoracic disease categories from chest X-ray images.",
      "Implemented image preprocessing, probability visualization, Grad-CAM heatmaps, report storage, and an analytics dashboard.",
    ],
    architecture:
      "PyTorch DenseNet121 backbone fine-tuned on chest radiography datasets, served through an asynchronous FastAPI inference microservice. Grad-CAM computes gradients at the final convolutional feature layer to synthesize visual heatmaps that map activations back onto the input image coordinates.",
    keyDecisions: [
      "Leveraged a DenseNet121 architecture pretrained on ImageNet and fine-tuned on multi-label chest radiography datasets, capitalizing on dense connectivity for feature propagation.",
      "Integrated Grad-CAM (Gradient-weighted Class Activation Mapping) at the final convolutional feature maps to project gradient heatmaps back onto radiographic lung fields.",
      "Built an asynchronous FastAPI microservice backend to isolate PyTorch GPU/CPU inference from the client dashboard.",
    ],
    securityAndPerformance: [
      "Image normalization and tensor transformation pipelines ensure strict input dimension and contrast consistency.",
      "Clearly flagged with visible academic disclaimers: 'Research prototype for educational and experimental research purposes. Not approved for clinical diagnostics.'",
      "Asynchronous inference queue prevents worker timeouts during tensor processing.",
    ],
    challenges:
      "Handling extreme class imbalance across 14 multi-label thoracic categories without model collapse. Solved by implementing positive-weighted binary cross-entropy loss and data augmentation (random rotation, contrast normalization).",
    limitationsAndFutureWork: [
      "Evaluated on experimental benchmark datasets; not validated on clinical PACS hospital workflows.",
      "Future iteration: Integration with DICOM medical standard viewers and multi-view (lateral + frontal) paired inference.",
    ],
    disclaimer:
      "Research prototype developed for educational and experimental research purposes. Not clinically validated or approved as a medical diagnostic system.",
    githubUrl: "https://github.com/manikanthapatcha",
    liveDemoUrl: null,
    isPrototype: true,
    featured: true,
  },
  {
    id: "legalgenie",
    title: "LegalGenie",
    tagline: "AI-Powered Legal Research Assistant",
    category: "Generative AI",
    badge: "RAG & NLP",
    projectType: "Personal Full-Stack & Generative AI Project",
    summary:
      "An intelligent legal document analysis tool that ingests complex legal PDFs, chunks and embeds statutory texts into ChromaDB, and delivers citation-backed question answering using LangChain and Google Gemini.",
    problemSolved:
      "Legal statutory codes and court judgments span hundreds of pages with dense legal terminology. Finding relevant precedent clauses through manual keyword search is tedious and prone to missing critical contextual nuance.",
    intendedUsers:
      "Law students, legal researchers, and legal practitioners needing fast, citation-grounded clause retrieval and automated case headnote generation.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "LangChain",
      "ChromaDB",
      "Gemini AI",
      "REST APIs",
    ],
    highlights: [
      "Developed semantic search and RAG-based legal research for retrieving relevant cases and generating contextual answers.",
      "Implemented PDF ingestion, document processing, vector retrieval, and AI-generated case summaries and briefs.",
    ],
    architecture:
      "A document processing pipeline where legal PDFs are uploaded, extracted, and segmented. Chunks are converted into dense embeddings and indexed in ChromaDB. When users query the assistant, LangChain constructs a contextual prompt with top-k retrieved excerpts, passing them to Gemini to synthesize precise, citation-grounded legal answers.",
    keyDecisions: [
      "Utilized ChromaDB vector store paired with LangChain recursive character chunking (500 tokens with 100 token overlap) to preserve statutory legal context across section boundaries.",
      "Strict RAG prompting: Instructed Google Gemini to answer questions exclusively using retrieved chunks, explicitly instructing 'If not found in the provided statutory text, state that the record is silent' to eliminate hallucinations.",
      "Automatic clause citation: Every generated sentence is linked to the exact document page and clause number.",
    ],
    securityAndPerformance: [
      "In-memory and persistent ChromaDB vector storage with collection-level isolation for different statutory documents.",
      "Server-side PDF sanitization rejecting malformed or password-protected files before text extraction.",
      "Top-k vector similarity thresholds to avoid polluting LLM prompts with irrelevant excerpts.",
    ],
    challenges:
      "Legal documents feature dense terminology and lengthy multi-page statutes where isolated sentences lose meaning. Addressed by designing a recursive character splitter with overlap and injecting metadata headers (case title, section numbers) into each chunk.",
    limitationsAndFutureWork: [
      "Current version parses standard text PDFs; scanned image-only PDFs require OCR preprocessing before chunking.",
      "Future iteration: Integration of Tesseract OCR for digitized archival court records.",
      "Future iteration: Legal document comparison diffing across statutory revisions.",
    ],
    githubUrl: "https://github.com/manikanthapatcha/LegalGenie",
    liveDemoUrl: "https://legal-genie-six.vercel.app/",
    isPrototype: false,
    featured: true,
  },
  {
    id: "order-management-system",
    title: "Order Management System",
    tagline: "Full-Stack Inventory & Order Workflow Engine",
    category: "Full-Stack",
    badge: "Full-Stack Enterprise",
    projectType: "Full-Stack Enterprise Workflow Platform",
    summary:
      "A robust business operations platform engineered with React, Material UI, Node.js, and MongoDB for complete customer, product, inventory, and lifecycle order tracking.",
    problemSolved:
      "Operations desks often juggle disparate inventory lists and customer spreadsheets, leading to inventory discrepancies, overselling, and lack of real-time order visibility.",
    intendedUsers:
      "Warehouse administrators, customer fulfillment staff, and business operations teams managing high-volume order flows.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Material UI",
      "CSS",
      "REST APIs",
    ],
    highlights: [
      "Developed a full-stack application for product, customer, inventory, and order management.",
      "Implemented CRUD operations, RESTful APIs, order status tracking, database integration, and error handling.",
    ],
    architecture:
      "Modular MVC backend architecture with Express controllers and MongoDB models. React frontend with Material UI components communicates with the API server via RESTful endpoints, implementing JWT authentication and transactional status checkpoints.",
    keyDecisions: [
      "Engineered modular MVC architecture with Node.js, Express controllers, and MongoDB models.",
      "Built responsive Material UI interface with live status lifecycle tracking: Pending, Processing, Dispatched, Delivered, Cancelled.",
      "Employed atomic MongoDB operations with conditional quantity checks to prevent inventory race conditions during concurrent orders.",
    ],
    securityAndPerformance: [
      "Centralized error-handling middleware catching validation errors with clear client diagnostics.",
      "Database indexing on order IDs, customer references, and SKU codes for low query latency.",
      "Role-based action guards preventing unauthorized status transitions.",
    ],
    challenges:
      "Preventing inventory race conditions when multiple customer orders are processed concurrently. Mitigated by using atomic MongoDB findAndModify operations with conditional quantity checks.",
    limitationsAndFutureWork: [
      "Currently supports single-warehouse inventory pools.",
      "Future iteration: Multi-warehouse allocation logic and automated webhook notifications to shipping logistics providers.",
    ],
    githubUrl: "https://github.com/manikanthapatcha",
    liveDemoUrl: "https://order-management-seven-indol.vercel.app/",
    isPrototype: false,
    featured: true,
  },
];

export const skillCategories = [
  {
    id: "ai",
    name: "Generative AI",
    shortName: "GenAI",
    icon: "Brain",
    color: "#84cc16",
    description: "LangChain, LangGraph, RAG, LLMs, AI Agents, Prompt Engineering, Gemini, Pinecone",
    skills: [
      { name: "LangChain", level: "Advanced", icon: "Link" },
      { name: "LangGraph", level: "Proficient", icon: "GitFork" },
      { name: "RAG", level: "Advanced", icon: "FileSearch" },
      { name: "LLMs & AI Agents", level: "Advanced", icon: "Bot" },
      { name: "Prompt Engineering", level: "Advanced", icon: "Terminal" },
      { name: "Google Gemini API", level: "Advanced", icon: "Sparkles" },
      { name: "Pinecone", level: "Proficient", icon: "Database" },
      { name: "Deep Learning (PyTorch)", level: "Intermediate", icon: "Cpu" },
    ],
  },
  {
    id: "programming",
    name: "Programming Languages",
    shortName: "Languages",
    icon: "Code2",
    color: "#38bdf8",
    description: "Core software engineering and scripting languages",
    skills: [
      { name: "JavaScript", level: "Advanced", icon: "Code2" },
      { name: "Python", level: "Proficient", icon: "Binary" },
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
      { name: "HTML5", level: "Advanced", icon: "FileCode" },
      { name: "CSS3", level: "Advanced", icon: "Layers" },
      { name: "Tailwind CSS", level: "Advanced", icon: "Palette" },
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
    ],
  },
  {
    id: "databases",
    name: "Databases",
    shortName: "Databases",
    icon: "Database",
    color: "#f59e0b",
    description: "Document, relational, and vector data storage",
    skills: [
      { name: "MongoDB", level: "Advanced", icon: "Database" },
      { name: "PostgreSQL", level: "Intermediate", icon: "Table" },
    ],
  },
  {
    id: "tools",
    name: "Tools and Platforms",
    shortName: "Tools & Platforms",
    icon: "Wrench",
    color: "#ec4899",
    description: "Version control, containerization & deployment",
    skills: [
      { name: "Git", level: "Advanced", icon: "GitBranch" },
      { name: "GitHub", level: "Advanced", icon: "Github" },
      { name: "Postman", level: "Advanced", icon: "Send" },
      { name: "VS Code", level: "Advanced", icon: "Code" },
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
    duration: "February 22, 2026 – August 22, 2026",
    period: "Feb 22, 2026 – Aug 22, 2026",
    type: "Internship",
    location: "Remote / Hybrid",
    description:
      "Developed and enhanced full-stack web application features using React.js, Node.js, Express.js, and MongoDB. Built reusable UI components, integrated RESTful APIs, implemented backend functionality, and managed database operations. Focused on responsive design, modular code development, and application performance while following maintainable software development practices.",
    responsibilities: [
      "Developed and enhanced full-stack web application features using React.js, Node.js, Express.js, and MongoDB.",
      "Built reusable UI components, integrated RESTful APIs, implemented backend functionality, and managed database operations.",
      "Focused on responsive design, modular code development, and application performance while following maintainable software development practices.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "RESTful APIs", "Git"],
  },
];

export const education = [
  {
    degree: "B.Tech — Computer Science and Engineering (Data Science)",
    institution: "Sasi Institute of Technology and Engineering",
    location: "Tadepalligudem, Andhra Pradesh",
    year: "Expected Graduation: 2027",
    score: "CGPA: 8.34/10",
    details:
      "Hands-on experience in full-stack development, Generative AI, data structures, and deep learning.",
    current: true,
  },
  {
    degree: "Intermediate",
    institution: "Aditya Junior College",
    location: "Andhra Pradesh",
    year: "2023",
    score: "Percentage: 70%",
    details: "Mathematics, Physics, and Chemistry (MPC stream).",
    current: false,
  },
  {
    degree: "SSC",
    institution: "St. Ann’s E.M. School",
    location: "Andhra Pradesh",
    year: "2021",
    score: "Percentage: 92%",
    details: "Strong academic foundation with excellence in mathematics and science.",
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
      "Participated in SIH Internal Hackathon 2026 to architect and prototype a technology-driven software solution.",
  },
  {
    title: "IEEE Member",
    role: "Member",
    year: "Ongoing",
    description:
      "Active IEEE Member participating in computational seminars and professional engineering workshops.",
  },
];
