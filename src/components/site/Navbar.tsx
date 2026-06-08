import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CrabIcon } from "./CrabIcon";

const links = [
  { label: "Início", href: "#top" },
  { label: "Nossa Casa", href: "#historia" },
  { label: "Do Mangue", href: "#especialidades" },
  { label: "Galeria", href: "#galeria" },
  { label: "Cardápio", href: "#menu" },
  { label: "Visite", href: "#contato" },
];

const trackedSections = [...links, { label: "Reserva", href: "#reserva" }];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#top");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const marker = window.scrollY + window.innerHeight * 0.35;
      const current = trackedSections.reduce((active, link) => {
        const section = document.querySelector(link.href);
        if (!section) return active;

        const top = section.getBoundingClientRect().top + window.scrollY;
        return marker >= top ? link.href : active;
      }, "#top");

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
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
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[var(--gold)] to-[oklch(0.66_0.08_84)] text-[var(--abyss)] shadow-gold ring-1 ring-[var(--gold)]/30 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
            <CrabIcon className="h-6 w-6" />
          </span>
          <span className="font-display text-xl tracking-[0.2em] text-[var(--ice)] group-hover:text-[var(--gold)] transition-colors">
            MARÉA
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => {
            const active = activeSection === l.href;

            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`group relative text-xs uppercase tracking-[0.25em] transition-colors duration-300 ${
                  active ? "text-[var(--gold)]" : "text-[var(--ice)]/70 hover:text-[var(--gold)]"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-2 left-1/2 h-px -translate-x-1/2 bg-[var(--gold)] transition-all duration-500 ${
                    active
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }`}
                />
                {active && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute -bottom-[11px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[var(--gold)] shadow-gold"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <a
          href="#reserva"
          aria-current={activeSection === "#reserva" ? "page" : undefined}
          className={`relative inline-flex h-10 max-h-10 items-center justify-center gap-2 overflow-hidden rounded-full border px-5 text-[10px] uppercase tracking-[0.3em] shadow-[0_0_0_1px_oklch(1_0_0_/_0.03)] transition-colors duration-300 [contain:paint] hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--abyss)] ${
            activeSection === "#reserva"
              ? "border-[var(--gold)] bg-[var(--gold)] text-[var(--abyss)]"
              : "border-[var(--gold)]/50 bg-[var(--gold)]/5 text-[var(--ice)]"
          }`}
        >
          Reservar Mesa
        </a>
      </div>
    </motion.header>
  );
}
