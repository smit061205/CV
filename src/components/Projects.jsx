import { useEffect, useRef } from "react";

const projects = [
  {
    number: "01",
    title: "AI-Sikhya",
    description:
      "Smart Gujarat Hackathon Finalist — A full-stack AI-powered e-learning platform built with React and FastAPI, integrating Google Gemini 2.5 Pro for contextual AI tutoring and on-demand content generation. Features real-time interactive code execution in the browser, adaptive learning flows, and a dual-database architecture — MongoDB for content and PostgreSQL for relational user data — all wrapped in a responsive, mobile-optimized UI.",
    tags: [
      "React.js",
      "FastAPI",
      "MongoDB",
      "PostgreSQL",
      "Gemini AI",
      "Tailwind CSS",
    ],
    link: "https://ai-sikhya.vercel.app/",
    year: "2025",
  },
  {
    number: "02",
    title: "Munim.AI",
    description:
      "LJ University Hackathon Finalist — An AI-assisted bookkeeping tool for small businesses and freelancers. Automates expense categorisation, generates profit/loss summaries, and supports natural-language queries over financial data — removing the steep learning curve of traditional accounting software. Built on a MERN stack with an AI layer for smart data interpretation and report generation.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "AI"],
    link: "https://github.com/smit061205/Munim.AI",
    year: "2024",
  },
  {
    number: "03",
    title: "MusicChain",
    description:
      "A decentralized music streaming and publishing platform built to put artists first. Records song ownership and automates royalty splits via smart contracts — eliminating intermediaries. Artists upload tracks, set royalty percentages for collaborators, and receive payments directly while listeners stream in a fully transparent ecosystem.",
    tags: ["React.js", "Node.js", "Blockchain", "Web3", "Smart Contracts"],
    link: "https://music-chain-sooty.vercel.app/",
    year: "2026",
  },
];

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll(".project-card") || [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 },
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-gray-400 mb-4">
          03 / Projects
        </p>
        <div className="w-full h-px bg-black mb-12" />

        <div className="flex items-end justify-between mb-16">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none">
            Selected
            <br />
            <span className="italic font-light">work.</span>
          </h2>
          <a
            href="https://github.com/smit061205"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block underline-anim font-mono text-xs tracking-widest uppercase text-gray-500 hover:text-black transition-colors"
          >
            All Projects →
          </a>
        </div>

        {/* Project list */}
        <div className="divide-y divide-gray-200">
          {projects.map((project, i) => (
            <a
              key={project.number}
              href={project.link}
              target={project.link !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="project-card group block py-10 opacity-0 transition-all duration-700 ease-out"
              style={{
                transform: "translateY(32px)",
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              <div className="grid md:grid-cols-12 gap-6 items-start">
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="font-mono text-xs text-gray-400">
                    {project.number}
                  </span>
                </div>

                {/* Title + Description */}
                <div className="md:col-span-6">
                  <h3 className="text-2xl font-bold tracking-tight group-hover:underline underline-offset-4 decoration-1 mb-3 transition-all flex items-center gap-2">
                    {project.title}
                    <span className="inline-flex opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </span>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="md:col-span-4 flex flex-wrap gap-2 mt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-gray-100 text-xs font-mono text-gray-600 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Year */}
                <div className="md:col-span-1 text-right">
                  <span className="font-mono text-xs text-gray-400">
                    {project.year}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
