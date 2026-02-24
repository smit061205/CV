import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "Frontend Engineer",
  "AI Enthusiast",
  "Problem Solver",
];

const terminalLines = [
  { text: "const smit = {", delay: 0 },
  { text: '  name: "Smit Thakkar",', delay: 120 },
  { text: '  role: "Full-Stack Developer",', delay: 240 },
  { text: '  location: "Ahmedabad, India 🇮🇳",', delay: 360 },
  { text: '  education: "B.Tech CE @ IAR",', delay: 480 },
  { text: '  passion: ["AI", "Web3", "Open Source"],', delay: 600 },
  { text: '  hackathons: ["Smart Gujarat", "LJ Univ"],', delay: 720 },
  { text: '  status: "open to work 🟢",', delay: 840 },
  { text: "}", delay: 960 },
  { text: "", delay: 1080 },
  { text: "smit.build() ✓", delay: 1200, highlight: true },
];

function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers = terminalLines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay + 600),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full max-w-md font-mono text-sm rounded-none border border-gray-200 overflow-hidden shadow-2xl">
      {/* Title bar */}
      <div className="bg-black flex items-center gap-2 px-4 py-3 border-b border-gray-800">
        <span className="w-3 h-3 rounded-full bg-gray-600" />
        <span className="w-3 h-3 rounded-full bg-gray-600" />
        <span className="w-3 h-3 rounded-full bg-gray-600" />
        <span className="ml-3 text-gray-500 text-xs tracking-widest">
          smit.js
        </span>
      </div>

      {/* Code body */}
      <div className="bg-[#0d0d0d] px-6 py-5 min-h-[280px]">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="leading-7">
            {line.text === "" ? (
              <br />
            ) : line.highlight ? (
              <span className="text-white font-semibold">{line.text}</span>
            ) : (
              <span>
                {/* syntax colouring — key vs value */}
                {line.text.includes(":") && !line.text.startsWith("}") ? (
                  <>
                    <span className="text-gray-500">
                      {line.text.slice(0, line.text.indexOf(":") + 1)}
                    </span>
                    <span className="text-gray-300">
                      {line.text.slice(line.text.indexOf(":") + 1)}
                    </span>
                  </>
                ) : (
                  <span className="text-gray-400">{line.text}</span>
                )}
              </span>
            )}
          </div>
        ))}

        {/* Blinking cursor */}
        {visibleLines <= terminalLines.length && (
          <span className="cursor-blink text-white font-bold text-base leading-none">
            ▮
          </span>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          60,
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 max-w-6xl mx-auto pt-20"
    >
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        {/* LEFT — Text content */}
        <div>
          <p className="fade-in-up delay-100 font-mono text-xs tracking-[0.25em] uppercase text-gray-500 mb-6">
            Open to opportunities
          </p>

          <h1 className="fade-in-up delay-200 text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter mb-6">
            Smit
            <br />
            Thakkar
          </h1>

          <div className="fade-in-up delay-300 flex items-center gap-2 mb-8">
            <span className="font-mono text-lg md:text-xl text-gray-700">
              {displayed}
            </span>
            <span className="cursor-blink font-mono text-2xl leading-none">
              |
            </span>
          </div>

          <p className="fade-in-up delay-400 max-w-md text-base text-gray-600 leading-relaxed mb-10">
            Computer Engineering student building scalable web apps at the
            intersection of AI and modern web technology. Based in Ahmedabad,
            India.
          </p>

          <div className="fade-in-up delay-500 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-black text-white text-sm font-semibold tracking-wide transition-all duration-200 hover:bg-gray-900 hover:scale-[1.02] active:scale-95"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-black text-black text-sm font-semibold tracking-wide transition-all duration-200 hover:bg-black hover:text-white hover:scale-[1.02] active:scale-95"
            >
              Get In Touch
            </a>
          </div>

          <div className="fade-in-up delay-600 mt-16 flex items-center gap-3 text-gray-400">
            <div className="w-12 h-px bg-gray-300" />
            <span className="font-mono text-xs tracking-widest uppercase">
              Scroll
            </span>
            <div className="w-4 h-4 border border-gray-300 rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
            </div>
          </div>
        </div>

        {/* RIGHT — Terminal block */}
        <div className="fade-in-up delay-300 hidden md:flex justify-center lg:justify-end">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
