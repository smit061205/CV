export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-gray-400 tracking-widest uppercase">
          © {year} Smit Thakkar. All rights reserved.
        </p>
        <p className="font-mono text-xs text-gray-400 tracking-wide">
          Designed & Built with ♥
        </p>
        <a
          href="#hero"
          className="font-mono text-xs tracking-widest uppercase text-gray-400 hover:text-black transition-colors underline-anim"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
