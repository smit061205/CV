import { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Material UI",
      "ShadCN",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Python",
      "Prisma",
      "SQLAlchemy",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    category: "Languages & Tools",
    skills: [
      "JavaScript",
      "TypeScript",
      "C++",
      "SQL",
      "Git",
      "GitHub",
      "Postman",
      "Jira",
      "NumPy",
      "Pandas",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".reveal").forEach((el, i) => {
            el.style.animationDelay = `${i * 0.1}s`;
            el.classList.add("fade-in-up");
          });
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-32 px-6 bg-black text-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="reveal opacity-0 font-mono text-xs tracking-[0.25em] uppercase text-gray-500 mb-4">
          02 / Skills
        </p>

        <div className="reveal opacity-0 w-full h-px bg-white mb-12" />

        <h2 className="reveal opacity-0 text-5xl md:text-6xl font-black tracking-tighter leading-none mb-16">
          My toolkit.
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {skillGroups.map((group) => (
            <div key={group.category} className="reveal opacity-0">
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-gray-400 mb-6">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 border border-gray-700 text-sm font-medium text-gray-200 
                               hover:border-white hover:text-white transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
