import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".reveal").forEach((el, i) => {
            el.style.animationDelay = `${i * 0.12}s`;
            el.classList.add("fade-in-up");
          });
        }
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="reveal opacity-0 font-mono text-xs tracking-[0.25em] uppercase text-gray-400 mb-4">
          01 / About
        </p>

        {/* Divider */}
        <div className="reveal opacity-0 w-full h-px bg-black mb-12" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — Heading */}
          <div>
            <h2 className="reveal opacity-0 text-5xl md:text-6xl font-black tracking-tighter leading-none mb-0">
              Crafting code
              <br />
              <span className="italic font-light">that matters.</span>
            </h2>
          </div>

          {/* Right — Bio */}
          <div className="space-y-5">
            <p className="reveal opacity-0 text-gray-700 leading-relaxed">
              I&apos;m a Computer Engineering student at the Institute of
              Advanced Research, Gandhinagar (2023–2027) with real-world
              experience as a Frontend Intern and Freelance Full-Stack
              Developer.
            </p>
            <p className="reveal opacity-0 text-gray-700 leading-relaxed">
              I build fast, scalable web applications with modern stacks —
              specializing in React, Node.js and AI integrations. I thrive where
              clean design meets performant engineering, and I love turning
              complex problems into elegant solutions.
            </p>

            {/* Stats */}
            <div className="reveal opacity-0 grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {[
                { value: "1+", label: "Year Exp." },
                { value: "5+", label: "Projects" },
                { value: "2", label: "Clients" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 font-mono uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
