// Authentic Technology Logos for Skills Constellation
// Official SVG brand logos optimized for dark and light theme visibility

export function TechLogo({ name, size = 16, className = "" }) {
  switch (name) {
    // === Generative AI ===
    case 'LangChain':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true">
          <path d="M16.5 4.5C14.5 2.5 11.5 2 9.5 3.5 7.5 5 7 8 8 10.5L3 15.5c-1 1-.5 2.5.5 3.5l1.5 1.5c1 1 2.5 1.5 3.5.5l5-5c2.5 1 5.5.5 7-1.5 1.5-2 1-5-1-7l-2.5-2.5z" fill="#10B981" />
          <circle cx="14" cy="7" r="1.5" fill="#FFFFFF" />
          <circle cx="14" cy="7" r="0.75" fill="#0F172A" />
          <path d="M18.5 7.5l3.5 1.5-3.5 2.5v-4z" fill="#F59E0B" />
        </svg>
      );

    case 'LangGraph':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true">
          <circle cx="5" cy="12" r="3" fill="#14B8A6" />
          <circle cx="19" cy="6" r="3" fill="#0EA5E9" />
          <circle cx="19" cy="18" r="3" fill="#06B6D4" />
          <path d="M7.8 10.6l8.4-3.2M7.8 13.4l8.4 3.2M19 9v6" stroke="#75A0A8" strokeWidth="1.8" strokeDasharray="2 1" />
        </svg>
      );

    case 'RAG':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true">
          <path d="M4 5a2 2 0 012-2h12a2 2 0 012 2v2H4V5z" fill="#0EA5E9" fillOpacity="0.5" />
          <path d="M4 10a2 2 0 012-2h12a2 2 0 012 2v2H4v-2z" fill="#0EA5E9" fillOpacity="0.8" />
          <path d="M4 15a2 2 0 012-2h7v4H6a2 2 0 01-2-2z" fill="#0EA5E9" />
          <circle cx="17.5" cy="16.5" r="3" stroke="#14B8A6" strokeWidth="1.8" />
          <path d="M19.8 18.8l2.2 2.2" stroke="#14B8A6" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'LLMs & AI Agents':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true">
          <rect x="3" y="6" width="18" height="13" rx="3.5" stroke="#06B6D4" strokeWidth="1.8" fill="#06B6D4" fillOpacity="0.18" />
          <circle cx="8.5" cy="12.5" r="1.5" fill="#06B6D4" />
          <circle cx="15.5" cy="12.5" r="1.5" fill="#06B6D4" />
          <path d="M12 2v4M8 2h8M10 16.5c.6.5 1.3.8 2 .8s1.4-.3 2-.8" stroke="#06B6D4" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="4" cy="12.5" r="1" fill="#14B8A6" />
          <circle cx="20" cy="12.5" r="1" fill="#14B8A6" />
        </svg>
      );

    case 'Prompt Engineering':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="3" stroke="#38BDF8" strokeWidth="1.6" fill="#38BDF8" fillOpacity="0.12" />
          <path d="M6 9l3.5 3L6 15" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 15h4" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M18 7.5l.5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5.5-1.5z" fill="#06B6D4" />
        </svg>
      );

    case 'Google Gemini API':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1A73E8" />
              <stop offset="50%" stopColor="#8AB4F8" />
              <stop offset="100%" stopColor="#C58AF9" />
            </linearGradient>
          </defs>
          <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" fill="url(#geminiGrad)" />
        </svg>
      );

    case 'Pinecone':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true">
          <path d="M18.89 6.27L12.01.57a.38.38 0 00-.4 0L4.74 6.27a.38.38 0 00-.19.33v10.8a.38.38 0 00.19.33l6.87 5.7a.38.38 0 00.4 0l6.88-5.7a.38.38 0 00.19-.33V6.6a.38.38 0 00-.19-.33zm-6.68 15.55l-6.1-5.06V7.24l6.1 5.06v9.52zm.78 0v-9.52l6.1-5.06v9.52l-6.1 5.06zm-.39-10.74L6.5 6l5.3-4.4 5.3 4.4-6.3 5.08z" fill="#06B6D4" />
        </svg>
      );

    case 'Deep Learning (PyTorch)':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="#EE4C2C" className={className} aria-hidden="true">
          <path d="M12.016 0a9.014 9.014 0 00-6.37 15.385l1.642-1.642A6.684 6.684 0 0112.016 2.33c3.69 0 6.685 2.996 6.685 6.686 0 2.274-1.135 4.283-2.87 5.485l1.637 1.637A8.974 8.974 0 0021.03 9.016C21.03 4.037 16.995 0 12.016 0zm3.896 4.793a1.166 1.166 0 100 2.331 1.166 1.166 0 000-2.331zM6.924 16.942l-1.65 1.65a9.015 9.015 0 0013.483-1.65l-1.643-1.643a6.685 6.685 0 01-10.19 1.643z"/>
        </svg>
      );

    // === Programming Languages ===
    case 'JavaScript':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className} aria-hidden="true">
          <rect width="128" height="128" rx="16" fill="#F7DF1E" />
          <path fill="#000000" d="M116.347 96.974c-.876-5.653-4.46-10.021-12.062-12.872-2.583-.935-5.385-1.603-8.406-2.004l-1.67-.2-2.003-.267c-5.786-.801-7.857-2.004-7.857-4.677 0-2.872 2.471-4.81 6.546-4.81 3.874 0 6.613 1.47 8.484 4.542l9.083-5.877c-3.74-5.877-9.485-8.816-17.566-8.816-10.219 0-17.298 5.944-17.298 15.696 0 9.484 6.078 14.292 18.233 16.029l3.473.467c6.144.869 8.279 2.405 8.279 5.343 0 3.206-3.072 5.343-7.747 5.343-5.61 0-8.949-2.538-10.886-6.812l-9.484 5.476c3.206 6.812 9.885 11.087 20.37 11.087 11.688 0 18.968-5.744 18.968-15.829 0-.468-.067-.935-.147-1.468l.493-.668zm-52.923-33.529H51.48v38.937c0 8.015-3.874 12.155-11.488 12.155-2.805 0-5.476-.534-8.015-1.603l-2.003-1.069 3.606-8.549 1.87 1.069c1.603.869 3.206 1.336 4.81 1.336 3.072 0 4.675-1.67 4.675-5.076V63.445z"/>
        </svg>
      );

    case 'Python':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
          <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.752h5.81v.826H3.88S0 5.79 0 11.904c0 6.115 3.398 5.895 3.398 5.895h2.03v-2.862s-.11-3.418 3.342-3.418h5.758v-.853h-5.87V9.82h8.38s3.473.082 3.473-5.945C20.51 0 17.067 0 11.914 0zM8.56 1.84a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1z" fill="#3776AB"/>
          <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.752h-5.81v-.826h8.136S24 18.21 24 12.096c0-6.115-3.398-5.895-3.398-5.895h-2.03v2.862s.11 3.418-3.342 3.418H9.472v.853h5.87v.846H6.962s-3.473-.082-3.473 5.945C3.49 24 6.933 24 12.086 24zm3.354-1.84a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z" fill="#FFD43B"/>
        </svg>
      );

    // === Frontend Development ===
    case 'React.js':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true">
          <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#087EA4" className="stroke-[#087EA4] dark:stroke-[#61DAFB]" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#087EA4" className="stroke-[#087EA4] dark:stroke-[#61DAFB]" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#087EA4" className="stroke-[#087EA4] dark:stroke-[#61DAFB]" strokeWidth="1.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="#087EA4" className="fill-[#087EA4] dark:fill-[#61DAFB]" />
        </svg>
      );

    case 'HTML5':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
          <path d="M1.5 0h21l-1.9 21.3L12 24l-8.6-2.7L1.5 0z" fill="#E34F26"/>
          <path d="M12 22l7.1-2.2 1.6-17.8H12V22z" fill="#EF652A"/>
          <path d="M12 8.7h4.3l-.3 3.5H12v2.8h4l-.4 4.5L12 20.6v-2.8l2.6-.7.2-2.1H7.8l.3-3.5H12V8.7zm0-4.9h7.8l-.3 2.8H12V3.8zM4.6 3.8H12v2.8H7.4l.3 3.5H12v2.8H7.9l.4 5.3 3.7 1V22l-6.4-1.8L4.6 3.8z" fill="#FFFFFF"/>
        </svg>
      );

    case 'CSS3':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
          <path d="M1.5 0h21l-1.9 21.3L12 24l-8.6-2.7L1.5 0z" fill="#1572B6"/>
          <path d="M12 22l7.1-2.2 1.6-17.8H12V22z" fill="#33A9DC"/>
          <path d="M12 9.5h4.1l-.3 3.5H12v2.8h3.8l-.4 4.5L12 21.4v-2.8l2.4-.7.2-2.1H8.1l.3-3.5H12V9.5zm0-5.7h7.8l-.3 2.8H12V3.8zM4.6 3.8H12v2.8H7.4l.3 3.5H12v2.8H7.9l.4 5.3 3.7 1V22l-6.4-1.8L4.6 3.8z" fill="#FFFFFF"/>
        </svg>
      );

    case 'Tailwind CSS':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="#06B6D4" className={className} aria-hidden="true">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
        </svg>
      );

    case 'Vite':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="viteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#41D1FF" />
              <stop offset="100%" stopColor="#BD34FE" />
            </linearGradient>
            <linearGradient id="viteBolt" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFEA83" />
              <stop offset="100%" stopColor="#FFDD35" />
            </linearGradient>
          </defs>
          <path d="M21.9 4.2L12.5 21.8c-.2.4-.8.4-1 0L2.1 4.2c-.3-.5.2-1.1.7-.9l9 3.5c.1 0 .3 0 .4 0l8.9-3.5c.6-.2 1.1.4.8.9z" fill="url(#viteGrad)" />
          <path d="M12.9 2.5l-6.3 9.4c-.3.4 0 1 .5 1h3.4l-1.8 7.3c-.2.6.6 1 1 .5l7.5-10.2c.3-.4 0-1-.5-1h-3.4l1.8-6.5c.1-.6-.7-1-1.2-.5z" fill="url(#viteBolt)" />
        </svg>
      );

    // === Backend Development ===
    case 'Node.js':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="#5FA04E" className={className} aria-hidden="true">
          <path d="M12 1.5l9.5 5.5v11L12 23.5 2.5 18V7L12 1.5zm0 2.3L4.5 8.3v9l7.5 4.3 7.5-4.3v-9L12 3.8zm2.4 5.7c1.3 0 2.1.8 2.1 2.2v4.8h-1.8v-4.6c0-.6-.4-.9-1-.9s-1.1.4-1.1 1.1v4.4h-1.8v-8.2h1.8v1.3c.4-.7 1.1-1.1 1.8-1.1z"/>
        </svg>
      );

    case 'Express.js':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#0EA5E9" fillOpacity="0.18" stroke="#0EA5E9" strokeWidth="1" />
          <path d="M5.5 8.5l3.2 4.2-3.2 4.3h2.3l2-2.8 2 2.8h2.3l-3.2-4.3 3.2-4.2h-2.3l-2 2.7-2-2.7H5.5zm10.2 0v8.5h2V8.5h-2z" fill="#0EA5E9" className="fill-[#0284C7] dark:fill-[#0EA5E9]" />
        </svg>
      );

    case 'RESTful APIs':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M4 7h16M4 7l4-4M4 7l4 4M20 17H4m16 0l-4-4m4 4l-4 4" stroke="#14B8A6" />
          <circle cx="4" cy="7" r="1.5" fill="#0EA5E9" />
          <circle cx="20" cy="17" r="1.5" fill="#14B8A6" />
        </svg>
      );

    // === Databases ===
    case 'MongoDB':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
          <path d="M12.001 0c-.22 0-.44.06-.63.17-2.6 1.54-7.44 6.78-7.37 13.56.06 6.37 4.54 9.77 7.55 10.26.15.02.3.02.45 0 3.01-.49 7.49-3.89 7.55-10.26.07-6.78-4.77-12.02-7.37-13.56a1.26 1.26 0 0 0-.18-.17zm-.03 2.1c.07.05.14.1.2.16 2.37 1.48 6.57 6.13 6.51 12.08-.05 5.34-3.72 8.35-6.68 8.86V2.1zm-.05 0v21.2c-2.96-.51-6.63-3.52-6.68-8.86-.06-5.95 4.14-10.6 6.51-12.08.06-.06.13-.11.17-.26z" fill="#47A248"/>
        </svg>
      );

    case 'PostgreSQL':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
          <path d="M11.968 0c-6.627 0-12 5.373-12 12s5.373 12 12 12c.75 0 1.482-.07 2.192-.203-.307-.798-.567-1.637-.775-2.518-.46.064-.93.098-1.417.098-5.183 0-9.385-4.202-9.385-9.385S6.785 2.615 11.968 2.615c5.184 0 9.385 4.202 9.385 9.385 0 1.258-.248 2.458-.698 3.553.864.55 1.642 1.218 2.31 1.986.643-1.69 1.003-3.524 1.003-5.539 0-6.627-5.373-12-12-12zm.68 5.762c-2.316 0-4.194 1.878-4.194 4.194 0 1.285.578 2.435 1.492 3.204-.373.916-.893 1.776-1.542 2.545 1.04.537 2.228.845 3.49.845 3.03 0 5.6-1.895 6.44-4.595.054-.176.084-.362.084-.554 0-3.06-2.508-5.639-5.77-5.639z" fill="#336791"/>
        </svg>
      );

    // === Tools and Platforms ===
    case 'Git':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="#F05032" className={className} aria-hidden="true">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.529-.527-.667-1.29-.413-1.943L12.8 8.963v6.772c.219.098.423.238.598.413.72.719.72 1.884 0 2.605-.719.719-1.88 1.719-2.6 0-.721-.721-.721-1.886 0-2.605.195-.195.422-.338.668-.432V8.89c-.246-.094-.473-.237-.668-.432-.524-.524-.666-1.284-.42-1.933L7.618 3.765.454 10.93c-.604.604-.604 1.582 0 2.186l10.48 10.48c.604.604 1.582.604 2.186 0l10.426-10.48c.606-.603.606-1.582 0-2.186z"/>
        </svg>
      );

    case 'GitHub':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={`text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] ${className}`} aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      );

    case 'Postman':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="#FF6C37" className={className} aria-hidden="true">
          <path d="M13.568 0C6.075 0 0 6.075 0 13.568c0 3.234 1.134 6.203 3.03 8.544l-.794 1.588a.634.634 0 00.567.92H13.57C21.06 24.62 24 18.543 24 13.568 24 6.075 21.06 0 13.568 0zm-1.89 4.364c1.238 0 2.242 1.004 2.242 2.242s-1.004 2.243-2.242 2.243-2.242-1.005-2.242-2.243 1.004-2.242 2.242-2.242zm4.72 13.513l-2.83-2.83-.873.872 3.702 3.703a.616.616 0 00.872 0l4.985-4.985a.616.616 0 000-.872l-.872-.872-4.984 4.984z"/>
        </svg>
      );

    case 'VS Code':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="#007ACC" className={className} aria-hidden="true">
          <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
        </svg>
      );

    case 'Docker':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="#2496ED" className={className} aria-hidden="true">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.79 11.23a8.91 8.91 0 00-3.483-2.316.208.208 0 00-.265.097c-.375.642-.907 1.168-1.554 1.536a.22.22 0 00-.074.288c.84 1.637.712 3.864-.478 5.485-1.22 1.66-3.23 2.502-5.467 2.502-1.635 0-3.32-.464-4.87-1.344-1.226-.696-2.583-.758-3.957-.468a6.974 6.974 0 01-2.916.038.225.225 0 00-.273.197c-.207 1.64.39 3.25 1.555 4.35 1.492 1.41 3.593 1.83 5.617 1.15 4.795-1.61 9.873-.8 14.542.84.148.05.3-.03.35-.18.78-2.34.88-5.74-.08-8.23z"/>
        </svg>
      );

    case 'Vercel':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={`text-[#EAFBFA] dark:text-[#EAFBFA] light:text-[#103039] ${className}`} aria-hidden="true">
          <path d="M12 1L24 22H0L12 1Z"/>
        </svg>
      );

    case 'Render':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="#46E3B7" className={className} aria-hidden="true">
          <path d="M18.847 9.873c-.027-.33-.075-.656-.145-.975a5.952 5.952 0 0 0-.832-1.99 5.86 5.86 0 0 0-1.89-1.776 5.973 5.973 0 0 0-2.884-.732H6.55v14.8h4.63v-5.2h1.914l3.193 5.2h5.363l-3.923-6.19a5.918 5.918 0 0 0 1.12-3.137zm-7.667-.323V6.9h1.914c.732 0 1.348.243 1.848.728.5.485.75 1.126.75 1.922 0 .796-.25 1.437-.75 1.922-.5.485-1.116.728-1.848.728h-1.914v-2.65z"/>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
  }
}
