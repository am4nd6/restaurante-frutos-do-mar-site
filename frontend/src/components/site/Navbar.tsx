import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FishIcon } from "./FishIcon";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const headerContentRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

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

  useEffect(() => {
    if (!menuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;

      if (headerContentRef.current?.contains(target) || mobileMenuRef.current?.contains(target)) {
        return;
      }

      setMenuOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [menuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1180px)");
    const closeOnDesktop = () => {
      if (desktopQuery.matches) setMenuOpen(false);
    };

    closeOnDesktop();
    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 2.3, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-(--abyss)/85 backdrop-blur-xl shadow-lg shadow-black/15"
          : "py-6 bg-transparent"
      }`}
    >
      <div
        ref={headerContentRef}
        className={`mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between gap-4 transition-all duration-500 ${
          scrolled ? "py-1" : ""
        }`}
      >
        <a href="#top" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[var(--gold)] to-[oklch(0.66_0.08_84)] text-[var(--abyss)] shadow-gold ring-1 ring-[var(--gold)]/30 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
            <FishIcon className="h-6 w-6" />
          </span>
          <span className="font-display text-xl tracking-[0.2em] text-[var(--ice)] group-hover:text-[var(--gold)] transition-colors">
            MARÉA
          </span>
        </a>

        <nav className="hidden min-[1180px]:flex items-center gap-7 xl:gap-10">
          {links.map((l) => {
            const active = activeSection === l.href;

            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`group relative whitespace-nowrap text-xs uppercase tracking-[0.2em] transition-colors duration-300 xl:tracking-[0.25em] ${
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

        <div className="flex items-center gap-3">
          <a
            href="#reserva"
            aria-current={activeSection === "#reserva" ? "page" : undefined}
            className={`relative hidden h-10 max-h-10 items-center justify-center gap-2 overflow-hidden rounded-full border px-5 text-[10px] uppercase tracking-[0.3em] whitespace-nowrap shadow-[0_0_0_1px_oklch(1_0_0_/_0.03)] transition-colors duration-300 [contain:paint] min-[390px]:inline-flex hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--abyss)] ${
              activeSection === "#reserva"
                ? "border-[var(--gold)] bg-[var(--gold)] text-[var(--abyss)]"
                : "border-[var(--gold)]/50 bg-[var(--gold)]/5 text-[var(--ice)]"
            }`}
          >
            Reservar Mesa
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--gold)/40 bg-(--gold)/5 text-(--ice) transition-colors hover:border-(--gold) hover:text-gold min-[1180px]:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="relative h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-current transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-full bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-current transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav
          ref={mobileMenuRef}
          className="mx-auto mt-2 grid max-w-7xl gap-2 px-4 pb-4 min-[390px]:px-6 min-[1180px]:hidden"
        >
          {[...links, { label: "Reservar", href: "#reserva" }].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`rounded-2xl border px-4 py-3 text-center text-[11px] uppercase tracking-[0.24em] transition-colors ${
                activeSection === link.href
                  ? "border-(--gold) bg-(--gold) text-(--abyss)"
                  : "border-(--ice)/10 bg-(--abyss)/80 text-(--ice)/75 hover:border-(--gold)/50 hover:text-gold"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </motion.header>
  );
}
