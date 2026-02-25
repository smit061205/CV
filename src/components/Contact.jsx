import { useEffect, useRef } from "react";

const socials = [
  { label: "GitHub", href: "https://github.com/smit061205" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/smit-thakkar-379ab6293",
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1assFWIbWOWW4M_vlyH-0QbEqbpLIfXRK/view?usp=sharing",
  },
];

export default function Contact() {
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
    <section id="contact" className="py-32 px-6 bg-black text-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="reveal opacity-0 font-mono text-xs tracking-[0.25em] uppercase text-gray-500 mb-4">
          04 / Contact
        </p>
        <div className="reveal opacity-0 w-full h-px bg-white mb-12" />

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <h2 className="reveal opacity-0 text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">
              Let&apos;s build
              <br />
              <span className="italic font-light">something great.</span>
            </h2>
            <p className="reveal opacity-0 text-gray-400 leading-relaxed mb-10 max-w-sm">
              Whether you have a project in mind, an internship opportunity, or
              just want to say hi — my inbox is always open.
            </p>

            <a
              href="mailto:smit061205@gmail.com"
              className="reveal opacity-0 inline-flex items-center gap-3 text-xl font-bold tracking-tight border-b border-gray-600 pb-2 hover:border-white transition-colors duration-200"
            >
              smit061205@gmail.com
              <span className="text-gray-400 text-base">↗</span>
            </a>
          </div>

          {/* Right — socials */}
          <div className="flex flex-col justify-end">
            <p className="reveal opacity-0 font-mono text-xs tracking-widest uppercase text-gray-500 mb-6">
              Find me on
            </p>
            <div className="space-y-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reveal opacity-0 group flex items-center justify-between py-3 border-b border-gray-800 hover:border-gray-400 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold group-hover:text-gray-300 transition-colors">
                    {s.label}
                  </span>
                  <span className="text-gray-600 group-hover:text-white transition-all duration-200 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
