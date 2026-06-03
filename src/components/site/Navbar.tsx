import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { label: "História", href: "#historia" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Galeria", href: "#galeria" },
  { label: "Menu", href: "#menu" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 2.3, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "glass rounded-full mx-4 md:mx-auto py-3 px-6" : ""
        }`}
      >
        <a href="#top" className="flex items-center gap-2 group">
          <span className="h-9 w-9 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--ocean-deep)] grid place-items-center text-[var(--abyss)] font-display text-lg">
            M
          </span>
          <span className="font-display text-xl tracking-[0.2em] text-[var(--ice)] group-hover:text-[var(--gold)] transition-colors">
            MARÉA
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-xs uppercase tracking-[0.25em] text-[var(--ice)]/70 hover:text-[var(--gold)] transition-colors duration-300"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#reserva"
          className="group relative inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 px-5 py-2.5 text-[10px] uppercase tracking-[0.3em] text-[var(--ice)] hover:text-[var(--abyss)] transition-colors duration-500 overflow-hidden"
        >
          <span className="absolute inset-0 bg-[var(--gold)] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <span className="relative">Reservar Mesa</span>
        </a>
      </div>
    </motion.header>
  );
}