# Sai Ganesh Patcha — Developer Portfolio

A production-grade, engineering-focused personal portfolio website for **Sai Ganesh Patcha**, Computer Science and Engineering (Data Science) undergraduate and MERN Stack Developer Intern at PurpleLane.

Designed with an Obsidian/Charcoal/Lime editorial aesthetic inspired by modern developer desks (e.g. Fernando Lin, JExcellence, Michael F. Jones), featuring interactive radial constellation mechanics, responsive bento grids, deep-dive project case studies, and verified credentials.

---

## ⚡ Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 with design tokens and dark/light themes
- **Routing**: React Router DOM (Single Page Application with Vercel rewrites)
- **Icons**: Lucide Icons & Custom SVG brand marks
- **Quality**: Oxlint (0 errors, 0 warnings), production Vite builds

---

## 🚀 Key Features

1. **Editorial Hero & Bento Overview**:
   - Terminal status indicator (`~/sai-ganesh/portfolio` with active availability beacon).
   - Confident primary headline: *"Building intelligent products with code, data, and AI."*
   - Direct CTA links: Explore Projects, Download/View Resume, GitHub, LinkedIn, Contact.
   - Quick stat tiles highlighting projects, internship, and academic CGPA (8.34/10).

2. **Featured Case Studies (`/` & `/projects/:id`)**:
   - **ShopMate**: AI-powered e-commerce platform integrating Pinecone vector search, Gemini listing generation, and LangChain/LangGraph customer support agents.
   - **Student Intelligence**: AI-powered student assistant utilizing a locally hosted Llama 3.2 model via Ollama for private, zero-cloud conversational academic guidance.
   - **LegalGenie**: AI legal research assistant with PDF ingestion, ChromaDB vector indexing, and citation-backed RAG question answering.
   - **Order Management System**: Full-stack MERN business operations platform with atomic inventory tracking.

3. **Interactive Radial Skills Constellation**:
   - Orbital radial visualization with concentric dashed rings, animated satellites, and interactive central category hub.
   - 5 Engineering Domains: Frontend, Backend, Databases, AI & Generative AI, Developer Tools.
   - Accessible keyboard focus and responsive mobile fallback list.

4. **Experience, Education & Credentials**:
   - PurpleLane MERN Stack Developer Intern timeline with verified responsibilities and technologies.
   - Academic history: B.Tech (Data Science) at Sasi Institute of Tech & Eng (CGPA 8.34), Intermediate (70%), SSC (92%).
   - Certifications: MERN Stack (PurpleLane), Generative AI (PurpleLane), Python 101 for Data Science (IBM SkillsBuild).
   - Honors & Activities: Smart India Hackathon (SIH) Internal Hackathon 2026 Participant, IEEE Member.

5. **ATS-Ready Resume Modal**:
   - Full curriculum vitae on screen with direct "Print / Save PDF" browser trigger.
   - Plaintext copy for applicant tracking systems.
   - Direct `/resume.pdf` download detection when a local file is placed in `public/`.

6. **Contact & Communication**:
   - Direct one-click email copying with visual confirmation.
   - Validated message form that generates pre-populated mailto dispatches to `manikantha.patcha@sasi.ac.in`.

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run lint checks
npm run lint

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment to Vercel

This repository includes a `vercel.json` rewrite configuration ensuring client-side routes (e.g. `/projects/shopmate`) are cleanly handled on Vercel:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Push to GitHub and import into Vercel with standard Vite preset.
