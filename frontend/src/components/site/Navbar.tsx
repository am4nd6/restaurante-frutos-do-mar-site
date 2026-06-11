import { motion } from "framer-motion";
import { useEffect, useRef, useState, forwardRef } from "react";
import { useTapHover } from "@/lib/use-tap-hover";
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

function LogoLink() {
  const { hovered, handleTap } = useTapHover();
  return (
    <a href="#top" className="flex items-center gap-2 group" onClick={handleTap}>
      <span className={`grid h-9 w-9 place-items-center rounded-full bg-linear-to-br from-gold to-[oklch(0.66_0.08_84)] text-abyss shadow-gold ring-1 ring-gold/30 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105 ${hovered ? "rotate-6 scale-105" : ""}`}>
        <FishIcon className="h-6 w-6" />
      </span>
      <span className={`font-display text-xl tracking-[0.2em] text-ice group-hover:text-gold transition-colors ${hovered ? "text-gold" : ""}`}>
        MARÉA
      </span>
    </a>
  );
}

function NavLink({ l, active }: { l: { label: string; href: string }; active: boolean }) {
  const { hovered, handleTap } = useTapHover();
  return (
    <a
      href={l.href}
      aria-current={active ? "page" : undefined}
      onClick={handleTap}
      className={`group relative whitespace-nowrap text-xs uppercase tracking-[0.2em] transition-colors duration-300 xl:tracking-[0.25em] ${active ? "text-gold" : `text-ice/70 hover:text-gold ${hovered ? "text-gold" : ""}`}`}
    >
      {l.label}
      <span className={`absolute -bottom-2 left-1/2 h-px -translate-x-1/2 bg-gold transition-all duration-500 ${active ? "w-full opacity-100" : `w-0 opacity-0 group-hover:w-full group-hover:opacity-100 ${hovered ? "w-full opacity-100" : ""}`}`} />
      {active && (
        <motion.span
          layoutId="nav-active-dot"
          className="absolute -bottom-2.75 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-gold shadow-gold"
          transition={{ type: "spring", stiffness: 420, damping: 34 }}
        />
      )}
    </a>
  );
}

function ReservedButton({ activeSection }: { activeSection: string }) {
  const { hovered, handleTap } = useTapHover();
  const isActive = activeSection === "#reserva";
  return (
    <a
      href="#reserva"
      aria-current={isActive ? "page" : undefined}
      onClick={handleTap}
      className={`relative hidden h-10 max-h-10 items-center justify-center gap-2 overflow-hidden rounded-full border px-5 text-[10px] uppercase tracking-[0.3em] whitespace-nowrap shadow-[0_0_0_1px_oklch(1_0_0_/0.03)] transition-colors duration-300 min-[390px]:inline-flex ${hovered ? "border-gold bg-gold text-abyss" : isActive ? "border-gold bg-gold text-abyss" : "border-gold/50 bg-gold/5 text-ice hover:border-gold hover:bg-gold hover:text-abyss"}`}
    >
      Reservar Mesa
    </a>
  );
}

function HamburgerButton({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const { hovered, handleTap } = useTapHover({ delay: 600 });
  return (
    <button
      type="button"
      aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
      aria-expanded={menuOpen}
      onClick={() => { setMenuOpen((open: boolean) => !open); handleTap(); }}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-ice transition-colors hover:border-gold hover:text-gold min-[1180px]:hidden ${hovered ? "border-gold text-gold" : ""}`}
    >
      <span className="sr-only">Menu</span>
      <span className="relative h-3.5 w-5">
        <span className={`absolute left-0 top-0 h-px w-full bg-current transition-transform ${menuOpen ? "translate-y-1.75 rotate-45" : ""}`} />
        <span className={`absolute left-0 top-1.75 h-px w-full bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`absolute bottom-0 left-0 h-px w-full bg-current transition-transform ${menuOpen ? "-translate-y-1.75 -rotate-45" : ""}`} />
      </span>
    </button>
  );
}

function MobileNavLink({ link, activeSection, setMenuOpen }: { link: { label: string; href: string }; activeSection: string; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const { hovered, handleTap } = useTapHover();
  const isActive = activeSection === link.href;
  return (
    <a
      href={link.href}
      onClick={() => { setMenuOpen(false); handleTap(); }}
      className={`rounded-2xl border px-4 py-3 text-center text-[11px] uppercase tracking-[0.24em] transition-colors ${isActive ? "border-gold bg-gold text-abyss" : `border-gold/10 bg-abyss/80 text-ice/75 hover:border-gold/50 hover:text-gold ${hovered ? "border-gold/50 text-gold" : ""}`}`}
    >
      {link.label}
    </a>
  );
}

function HeaderContent({ divRef, scrolled, activeSection, menuOpen, setMenuOpen }: { divRef: React.RefObject<HTMLDivElement | null>; scrolled: boolean; activeSection: string; menuOpen: boolean; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <div
      ref={divRef}
      className={`mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between gap-4 transition-all duration-500 ${scrolled ? "py-1" : ""}`}
    >
      <LogoLink />

      <nav className="hidden min-[1180px]:flex items-center gap-7 xl:gap-10">
        {links.map((l) => (
          <NavLink key={l.href} l={l} active={activeSection === l.href} />
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <ReservedButton activeSection={activeSection} />
        <HamburgerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </div>
  );
}

const MobileMenu = forwardRef<HTMLElement, { activeSection: string; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }>(
  ({ activeSection, setMenuOpen }, ref) => (
    <nav
      ref={ref}
      className="mx-auto mt-2 grid max-w-7xl gap-2 px-4 pb-4 min-[390px]:px-6 min-[1180px]:hidden"
    >
      {[...links, { label: "Reservar", href: "#reserva" }].map((link) => (
        <MobileNavLink key={link.href} link={link} activeSection={activeSection} setMenuOpen={setMenuOpen} />
      ))}
    </nav>
  )
);

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
      <HeaderContent divRef={headerContentRef} scrolled={scrolled} activeSection={activeSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && (
        <MobileMenu ref={mobileMenuRef} activeSection={activeSection} setMenuOpen={setMenuOpen} />
      )}
    </motion.header>
  );
}
