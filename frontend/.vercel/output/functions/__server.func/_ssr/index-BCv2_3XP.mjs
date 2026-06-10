import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { I as Instagram, F as Facebook, T as Twitter } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Loader() {
  const [done, setDone] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setDone(true), 2200);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: !done && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.9, ease: "easeInOut" },
      className: "fixed inset-0 z-100 flex items-center justify-center bg-abyss",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overflow-hidden", children: Array.from({ length: 24 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "absolute block rounded-full bg-(--gold)/30 animate-bubble",
            style: {
              left: `${i * 37 % 100}%`,
              width: `${2 + i % 5}px`,
              height: `${2 + i % 5}px`,
              animationDuration: `${5 + i % 6}s`,
              animationDelay: `${i % 8 * 0.4}s`
            }
          },
          i
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { x: "-120%" },
            animate: { x: "120%" },
            transition: { duration: 1.8, ease: "easeInOut" },
            className: "absolute inset-y-0 w-1/3 -skew-x-12 bg-linear-to-r from-transparent via-(--gold)/10 to-transparent"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.92, letterSpacing: "0.2em" },
            animate: { opacity: 1, scale: 1, letterSpacing: "0.45em" },
            transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] },
            className: "relative z-10 text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.5em] text-(--gold)/80 mb-3", children: "Maison" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl md:text-6xl text-gold-gradient", children: "Maréa" })
            ]
          }
        )
      ]
    }
  ) });
}
function FishIcon({ className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/peixe-icon.png", alt: "Maréa", className });
}
const links = [
  { label: "Início", href: "#top" },
  { label: "Nossa Casa", href: "#historia" },
  { label: "Do Mangue", href: "#especialidades" },
  { label: "Galeria", href: "#galeria" },
  { label: "Cardápio", href: "#menu" },
  { label: "Visite", href: "#contato" }
];
const trackedSections = [...links, { label: "Reserva", href: "#reserva" }];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [activeSection, setActiveSection] = reactExports.useState("#top");
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  const headerContentRef = reactExports.useRef(null);
  const mobileMenuRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
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
  reactExports.useEffect(() => {
    if (!menuOpen) return;
    const handlePointerDown = (event) => {
      const target = event.target;
      if (headerContentRef.current?.contains(target) || mobileMenuRef.current?.contains(target)) {
        return;
      }
      setMenuOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [menuOpen]);
  reactExports.useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1180px)");
    const closeOnDesktop = () => {
      if (desktopQuery.matches) setMenuOpen(false);
    };
    closeOnDesktop();
    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.9, delay: 2.3, ease: [0.22, 1, 0.36, 1] },
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3 bg-(--abyss)/85 backdrop-blur-xl shadow-lg shadow-black/15" : "py-6 bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: headerContentRef,
            className: `mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between gap-4 transition-all duration-500 ${scrolled ? "py-1" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2 group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-full bg-linear-to-br from-gold to-[oklch(0.66_0.08_84)] text-abyss shadow-gold ring-1 ring-gold/30 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FishIcon, { className: "h-6 w-6" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl tracking-[0.2em] text-ice group-hover:text-gold transition-colors", children: "MARÉA" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden min-[1180px]:flex items-center gap-7 xl:gap-10", children: links.map((l) => {
                const active = activeSection === l.href;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: l.href,
                    "aria-current": active ? "page" : void 0,
                    className: `group relative whitespace-nowrap text-xs uppercase tracking-[0.2em] transition-colors duration-300 xl:tracking-[0.25em] ${active ? "text-gold" : "text-ice/70 hover:text-gold"}`,
                    children: [
                      l.label,
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `absolute -bottom-2 left-1/2 h-px -translate-x-1/2 bg-gold transition-all duration-500 ${active ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"}`
                        }
                      ),
                      active && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.span,
                        {
                          layoutId: "nav-active-dot",
                          className: "absolute -bottom-2.75 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-gold shadow-gold",
                          transition: { type: "spring", stiffness: 420, damping: 34 }
                        }
                      )
                    ]
                  },
                  l.href
                );
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "#reserva",
                    "aria-current": activeSection === "#reserva" ? "page" : void 0,
                    className: `relative hidden h-10 max-h-10 items-center justify-center gap-2 overflow-hidden rounded-full border px-5 text-[10px] uppercase tracking-[0.3em] whitespace-nowrap shadow-[0_0_0_1px_oklch(1_0_0_/0.03)] transition-colors duration-300 contain-paint min-[390px]:inline-flex hover:border-gold hover:bg-gold hover:text-abyss ${activeSection === "#reserva" ? "border-gold bg-gold text-abyss" : "border-gold/50 bg-gold/5 text-ice"}`,
                    children: "Reservar Mesa"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "aria-label": menuOpen ? "Fechar menu" : "Abrir menu",
                    "aria-expanded": menuOpen,
                    onClick: () => setMenuOpen((open) => !open),
                    className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-ice transition-colors hover:border-gold hover:text-gold min-[1180px]:hidden",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Menu" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative h-3.5 w-5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: `absolute left-0 top-0 h-px w-full bg-current transition-transform ${menuOpen ? "translate-y-1.75 rotate-45" : ""}`
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: `absolute left-0 top-1.75 h-px w-full bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: `absolute bottom-0 left-0 h-px w-full bg-current transition-transform ${menuOpen ? "-translate-y-1.75 -rotate-45" : ""}`
                          }
                        )
                      ] })
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        menuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "nav",
          {
            ref: mobileMenuRef,
            className: "mx-auto mt-2 grid max-w-7xl gap-2 px-4 pb-4 min-[390px]:px-6 min-[1180px]:hidden",
            children: [...links, { label: "Reservar", href: "#reserva" }].map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: link.href,
                onClick: () => setMenuOpen(false),
                className: `rounded-2xl border px-4 py-3 text-center text-[11px] uppercase tracking-[0.24em] transition-colors ${activeSection === link.href ? "border-gold bg-gold text-abyss" : "border-gold/10 bg-abyss/80 text-ice/75 hover:border-gold/50 hover:text-gold"}`,
                children: link.label
              },
              link.href
            ))
          }
        )
      ]
    }
  );
}
const heroDish = "/assets/hero-dish-DyLlAsMa.jpg";
function Hero() {
  const [mouse, setMouse] = reactExports.useState({ x: 0, y: 0 });
  reactExports.useEffect(() => {
    const on = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };
    window.addEventListener("mousemove", on);
    return () => window.removeEventListener("mousemove", on);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "top",
      className: "relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(60% 50% at 70% 40%, oklch(0.42 0.06 200 / 0.6), transparent 70%), radial-gradient(40% 40% at 20% 70%, oklch(0.78 0.09 85 / 0.18), transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: Array.from({ length: 18 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "absolute block rounded-full bg-ice/20 animate-bubble",
            style: {
              left: `${i * 53 % 100}%`,
              width: `${3 + i % 6}px`,
              height: `${3 + i % 6}px`,
              animationDuration: `${8 + i % 7}s`,
              animationDelay: `${i % 9 * 0.7}s`
            }
          },
          i
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "site-container relative mx-auto max-w-7xl px-6 md:px-10 grid min-[1200px]:grid-cols-12 gap-10 items-center w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              animate: "show",
              variants: {
                hidden: {},
                show: { transition: { staggerChildren: 0.18, delayChildren: 2.4 } }
              },
              className: "min-[1200px]:col-span-7 relative z-10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-xl px-2 min-[390px]:px-4 md:max-w-2xl md:px-0 min-[1200px]:mx-0 min-[1200px]:max-w-none", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      variants: { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } },
                      transition: { duration: 0.9 },
                      className: "flex items-center gap-3 mb-8",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-gold" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.4em] text-gold", children: "São Luís · Maranhão · Desde 1987" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.h1,
                    {
                      variants: { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } },
                      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                      className: "font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] text-ice",
                      children: [
                        "A maré",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                        "do ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gold-gradient", children: "Maranhão" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.p,
                    {
                      variants: { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } },
                      transition: { duration: 0.9 },
                      className: "mt-8 max-w-xl text-ice/70 text-lg leading-relaxed text-justify md:max-w-2xl min-[1200px]:max-w-xl",
                      children: "No coração do centro histórico de São Luís, num casarão de azulejos portugueses, servimos o que a Baía de São Marcos oferece todo amanhecer — caranguejo do mangue, camarão da Raposa e o tempero ancestral do cuxá."
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      variants: { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } },
                      transition: { duration: 0.9 },
                      className: "mx-auto mt-12 flex max-w-md flex-col items-stretch gap-4 min-[600px]:max-w-none min-[600px]:flex-row min-[600px]:items-center min-[600px]:justify-center min-[1200px]:mx-0 min-[1200px]:justify-start",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "a",
                          {
                            href: "#reserva",
                            className: "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gold px-8 py-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-abyss shadow-gold transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_60px_-22px_var(--gold)]",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Reservar Experiência" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "10", viewBox: "0 0 14 10", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "path",
                                {
                                  d: "M1 5h12m0 0L9 1m4 4L9 9",
                                  stroke: "currentColor",
                                  strokeWidth: "1.5",
                                  strokeLinecap: "round"
                                }
                              ) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "a",
                          {
                            href: "#menu",
                            className: "group inline-flex items-center justify-center gap-3 rounded-full border border-ice/15 bg-white/3 px-8 py-4 text-center text-xs uppercase tracking-[0.3em] text-ice/80 backdrop-blur-sm transition-all duration-500 hover:border-gold/60 hover:bg-gold/10 hover:text-gold",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-gold/60 transition-all duration-500 group-hover:w-12" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Explorar Menu" })
                            ]
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    variants: { hidden: { opacity: 0 }, show: { opacity: 1 } },
                    transition: { duration: 1.2 },
                    className: "mx-auto mt-3 grid max-w-sm grid-cols-2 gap-5 border-t border-ice/10 pt-3 text-center min-[560px]:max-w-md min-[560px]:grid-cols-3 min-[1200px]:mx-0",
                    children: [
                      { n: "37", l: "Anos na Praia Grande" },
                      { n: "★★★★", l: "Venha Comer & Beber" },
                      { n: "06h", l: "Chegada do peixe" }
                    ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "last:col-span-2 last:justify-self-center min-[560px]:last:col-span-1",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-gold", children: s.n }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] uppercase tracking-[0.25em] text-ice/50", children: s.l })
                        ]
                      },
                      s.l
                    ))
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.85, y: 60 },
              animate: { opacity: 1, scale: 1, y: 0 },
              transition: { duration: 1.6, delay: 2.5, ease: [0.22, 1, 0.36, 1] },
              className: "min-[1200px]:col-span-5 relative mx-auto w-full max-w-[min(78vw,22rem)] sm:max-w-sm md:max-w-md min-[1200px]:max-w-none",
              style: {
                transform: `perspective(1200px) rotateY(${mouse.x * 4}deg) rotateX(${-mouse.y * 4}deg)`,
                transition: "transform 0.4s ease-out"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-10 rounded-full bg-gold/10 blur-3xl animate-float-slow" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-linear-to-br from-ocean/40 to-transparent blur-2xl" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    animate: { y: [0, -18, 0] },
                    transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                    className: "relative h-full w-full",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: heroDish,
                          alt: "Prato exclusivo Maréa com ostras, langostino e folhas de ouro",
                          className: "h-full w-full object-cover rounded-full shadow-luxe ring-1 ring-gold/30",
                          width: 1024,
                          height: 1024
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -inset-3 rounded-full border border-gold/20" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -inset-8 rounded-full border border-gold/10" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, x: 20, y: 10 },
                    animate: { opacity: 1, x: 0 },
                    transition: {
                      opacity: { delay: 3.4, duration: 0.8 },
                      x: { delay: 3.4, duration: 0.8 }
                    },
                    className: "absolute -left-2 bottom-6 max-w-50 sm:-left-6 sm:bottom-12",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        animate: { y: [0, -6, 0] },
                        transition: { duration: 6, repeat: Infinity, ease: [0.45, 0, 0.55, 1] },
                        className: "rounded-2xl glass p-4 will-change-transform",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-[0.3em] text-gold mb-1", children: "Assinatura do Chef" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg text-ice", children: "Pérolas do Maranhão" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] text-ice/60", children: "Ostras frescas · camarão selecionado · flores comestíveis · ouro 24k" })
                        ]
                      }
                    )
                  }
                )
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1, y: [0, 8, 0] },
            transition: { opacity: { delay: 4, duration: 1 }, y: { duration: 2, repeat: Infinity } },
            className: "absolute bottom-8 left-1/2 h-10 w-px -translate-x-1/2 bg-linear-to-b from-gold to-transparent"
          }
        )
      ]
    }
  );
}
const interior = "/assets/restaurant-interior-hmsnypsu.jpg";
function Story() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "historia", className: "relative py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "site-container mx-auto max-w-7xl px-6 md:px-10 grid min-[1200px]:grid-cols-12 gap-12 md:gap-16 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -40 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
        className: "min-[1200px]:col-span-5 relative mx-auto w-full max-w-[min(82vw,20rem)] sm:max-w-sm md:max-w-md min-[1200px]:max-w-none",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative aspect-3/4 overflow-hidden rounded-[2rem] shadow-luxe", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: interior,
                alt: "Interior do restaurante Maréa",
                loading: "lazy",
                className: "h-full w-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:rotate-1"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-abyss via-transparent to-transparent transition-opacity duration-700 group-hover:opacity-80" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-4 rounded-[1.5rem] border border-gold/0 transition-all duration-700 group-hover:inset-6 group-hover:border-gold/30" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-8 -right-8 glass rounded-2xl px-6 py-5 max-w-60 hidden md:block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display italic text-gold text-2xl leading-tight", children: [
              '"A maré',
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              ' manda no menu."'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[10px] uppercase tracking-[0.3em] text-ice/60", children: "— Chef Dona Lurdes" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 1 },
        className: "min-[1200px]:col-span-7 text-center min-[1200px]:text-left",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mb-6 min-[1200px]:justify-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.4em] text-gold", children: "Nossa Casa" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl leading-[1.05] text-ice", children: [
            "Um casarão ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gold-gradient", children: "na Praia Grande" }),
            " desde 1987"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-10 max-w-xl space-y-6 px-2 text-justify text-lg leading-relaxed text-ice/70 min-[390px]:px-4 md:max-w-2xl md:px-0 min-[1200px]:mx-0 min-[1200px]:max-w-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A Maréa nasceu num sobrado azulejado do Centro Histórico de São Luís, tombado pela UNESCO, fundado por uma família de marisqueiras da Raposa. Aqui, a Baía de São Marcos chega cedo — caranguejos do mangue, peixe-pedra fresco e o jambu colhido na manhã." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sob o comando de Dona Lurdes e do filho Chef Caio Reis, traduzimos o tempero da Ilha em uma cozinha autoral: ancestral no sabor, contemporânea na técnica, generosa como o povo maranhense." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-12 grid max-w-sm grid-cols-2 gap-8 border-t border-border pt-10 text-center min-[560px]:max-w-none min-[560px]:grid-cols-3 min-[1200px]:mx-0", children: [
            { k: "Pesca artesanal", v: "100%" },
            { k: "Comunidades parceiras", v: "14" },
            { k: "Cachaças do Nordeste", v: "180" }
          ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "last:col-span-2 last:justify-self-center min-[560px]:last:col-span-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl text-ice", children: s.v }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] uppercase tracking-[0.3em] text-ice/50", children: s.k })
              ]
            },
            s.k
          )) })
        ]
      }
    )
  ] }) });
}
const shrimp = "/assets/spec-shrimp-CBLIRgGy.jpg";
const crab = "/assets/spec-crab-D0nuUFPz.jpg";
const items$1 = [
  { n: "01", t: "Caranguejo-uçá", img: crab, d: "Do mangue da Raposa, no leite de coco e cuxá." },
  {
    n: "02",
    t: "Camarão da Baía",
    img: shrimp,
    d: "Camarão-rosa de São Marcos, na moranga com jambu."
  },
  {
    n: "03",
    t: "Sururu & Ostras",
    img: "/src/assets/sururu.png",
    d: "Mariscos do litoral, abertos sobre brasa de carvão."
  },
  {
    n: "04",
    t: "Peixe-Pedra",
    img: "/src/assets/peixe.png",
    d: "Inteiro, escamado na brasa, com farofa d'água."
  },
  {
    n: "05",
    t: "Polvo do Atol",
    img: "/src/assets/polvo.png",
    d: "Grelhado em folha de bananeira e azeite de dendê."
  },
  {
    n: "06",
    t: "Lagosta de Tutoia",
    img: "/src/assets/lagosta.png",
    d: "Ao molho de pimenta-de-cheiro e manteiga de garrafa."
  }
];
function Card({ item, i }) {
  const ref = reactExports.useRef(null);
  const [tilt, setTilt] = reactExports.useState({ x: 0, y: 0 });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.9, delay: i % 3 * 0.12 },
      onMouseMove: (e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setTilt({
          x: ((e.clientX - r.left) / r.width - 0.5) * 10,
          y: ((e.clientY - r.top) / r.height - 0.5) * -10
        });
      },
      onMouseLeave: () => setTilt({ x: 0, y: 0 }),
      style: {
        transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        transition: "transform 0.5s ease-out"
      },
      className: "group relative overflow-hidden rounded-[1.75rem] bg-linear-to-b from-ocean-deep/60 to-abyss/80 border border-gold/10 hover:border-gold/40 transition-colors duration-700",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-4/5 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: item.img,
              alt: item.t,
              loading: "lazy",
              className: "h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-abyss via-abyss/30 to-transparent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_var(--mx)_var(--my),oklch(0.78_0.09_85/0.18),transparent_50%)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.4em] text-gold", children: item.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-3xl text-ice", children: item.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-ice/60 max-w-[80%]", children: item.d })
        ] })
      ]
    }
  );
}
function Specialties() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "especialidades", className: "relative py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "site-container mx-auto max-w-7xl px-6 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-14 max-w-5xl text-center min-[1200px]:mx-0 min-[1200px]:text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-7 min-[1200px]:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.55fr)] min-[1200px]:items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mb-6 min-[1200px]:justify-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-gold" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.4em] text-gold", children: "Do Mangue à Mesa" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mx-auto font-display text-5xl md:text-7xl text-ice max-w-3xl leading-[1.05] min-[1200px]:mx-0", children: [
        "Cozinha de maré, brasa e ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gold-gradient", children: "mangue" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 min-[600px]:grid-cols-2 min-[1200px]:grid-cols-3 gap-6", children: items$1.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { item: it, i }, it.t)) })
  ] }) });
}
const g1 = "/assets/gallery-1-Dy6kC_JZ.jpg";
const g2 = "/assets/gallery-2-DdLA4vpC.jpg";
const g3 = "/assets/gallery-3-B0-Eycan.jpg";
const g4 = "/assets/gallery-4-CTn00OBd.jpg";
function Gallery() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "galeria", className: "relative py-20 md:py-28 bg-ocean-deep/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "site-container mx-auto max-w-7xl px-6 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-gold" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.4em] text-gold", children: "Experiência Maranhense" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-gold" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl text-ice leading-[1.05]", children: [
        "A ilha que se ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gold-gradient", children: "come" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-5xl grid-cols-1 gap-4 min-[390px]:grid-cols-2 md:gap-6", children: [
      {
        src: g2,
        alt: "Chef emplatando"
      },
      {
        src: g1,
        alt: "Pasta com vongole"
      },
      {
        src: g3,
        alt: "Champagne com ostras"
      },
      {
        src: g4,
        alt: "Vieiras seladas"
      }
    ].map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.figure,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.9, delay: i * 0.1 },
        className: "group relative aspect-4/3 overflow-hidden rounded-[1.5rem]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: it.src,
              alt: it.alt,
              loading: "lazy",
              className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-abyss/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 contain-paint" })
        ]
      },
      i
    )) })
  ] }) });
}
const dishes = [
  {
    name: "Caranguejada Reinado",
    img: crab,
    ing: "Caranguejo-uçá · arroz de cuxá · vinagrete de pimenta-de-cheiro",
    price: "R$ 168"
  },
  {
    name: "Polvo na Folha",
    img: "/src/assets/polvo.png",
    ing: "Polvo grelhado · folha de bananeira · azeite de dendê · jambu",
    price: "R$ 152"
  },
  {
    name: "Peixada do Cais",
    img: "/src/assets/peixe.png",
    ing: "Peixe-pedra · leite de coco · pirão de camarão · coentro",
    price: "R$ 138"
  },
  {
    name: "Camarão na Moranga",
    img: shrimp,
    ing: "Camarão da Raposa · catupiry artesanal · jerimum · farinha d'água",
    price: "R$ 144"
  }
];
function Menu() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "menu", className: "relative py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "site-container mx-auto max-w-7xl px-6 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-12 text-center min-[960px]:text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mb-6 min-[960px]:justify-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-gold" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.4em] text-gold", children: "Cardápio da Casa" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl text-ice leading-[1.05]", children: [
        "Sabores ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gold-gradient", children: "ancestrais" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 min-[960px]:grid-cols-2 gap-6", children: dishes.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.9, delay: i % 2 * 0.1 },
        className: "group glass rounded-[1.75rem] p-3 flex flex-col gap-4 items-stretch hover:border-gold/40 transition-all duration-700 hover:-translate-y-1 min-[390px]:flex-row min-[390px]:items-center min-[390px]:gap-5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-square w-full shrink-0 overflow-hidden rounded-2xl min-[390px]:h-32 min-[390px]:w-32 md:h-36 md:w-36", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: d.img,
              alt: d.name,
              loading: "lazy",
              className: "h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 py-2 min-[390px]:pr-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 min-[560px]:flex-row min-[560px]:items-baseline min-[560px]:justify-between min-[560px]:gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "min-w-0 font-display text-2xl text-ice group-hover:text-gold transition-colors", children: d.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 whitespace-nowrap font-display text-xl text-gold", children: d.price })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-ice/60 leading-relaxed", children: d.ing }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-4 inline-flex items-center gap-2 whitespace-nowrap text-[10px] uppercase tracking-[0.24em] text-ice/80 transition-colors hover:text-gold min-[390px]:tracking-[0.3em]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Adicionar à reserva" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "→" })
            ] })
          ] })
        ]
      },
      d.name
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "#reserva",
        className: "group mx-auto inline-flex w-fit max-w-full items-center justify-center gap-3 rounded-full border border-gold/30 px-6 py-3 text-center text-xs uppercase tracking-[0.24em] text-ice/80 transition-all duration-500 hover:border-gold hover:bg-gold/10 hover:text-gold min-[390px]:px-7 min-[390px]:tracking-[0.3em]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap", children: "Menu completo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform duration-500 group-hover:translate-x-1", children: "→" })
        ]
      }
    ) })
  ] }) });
}
const items = [
  {
    q: "É São Luís servida num prato. O caranguejo é poesia do mangue, e o arroz de cuxá tem o gosto da minha infância.",
    a: "Joãozinho Ribeiro",
    r: "Cronista · O Imparcial"
  },
  {
    q: "Atmosfera de casarão colonial, brisa da baía e uma cozinha que respeita o Maranhão de verdade. Saí transformado.",
    a: "Bel Coelho",
    r: "Chef · Guia Comer & Beber"
  },
  {
    q: "Da farinha d'água ao jambu, cada detalhe é manejado com técnica e devoção. Uma das melhores mesas do Nordeste.",
    a: "Carla Pernambuco",
    r: "Crítica Gastronômica · Folha"
  }
];
function Testimonials() {
  const [i, setI] = reactExports.useState(0);
  const next = () => setI((x) => (x + 1) % items.length);
  reactExports.useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % items.length), 3e3);
    return () => clearInterval(t);
  }, [i]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 md:py-28 bg-ocean-deep/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 md:px-10 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-gold" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.4em] text-gold", children: "Vozes da Ilha" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-gold" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative min-h-65 md:min-h-55", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.button,
      {
        type: "button",
        onClick: next,
        "aria-label": "Avançar depoimento",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.8 },
        className: "glass w-full cursor-pointer rounded-[2rem] p-10 text-center transition-colors hover:border-gold/30 md:p-14",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "font-display text-2xl md:text-4xl italic text-ice leading-[1.3]", children: [
            '"',
            items[i].q,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-8 bg-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-ice", children: items[i].a }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-ice/50 mt-1", children: items[i].r })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-8 bg-gold" })
          ] })
        ]
      },
      i
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex items-center justify-center gap-2", children: items.map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setI(idx),
        className: `h-1 rounded-full transition-all duration-500 ${idx === i ? "w-10 bg-gold" : "w-2 bg-ice/20"}`,
        "aria-label": `Depoimento ${idx + 1}`
      },
      idx
    )) })
  ] }) });
}
const fields = [
  {
    l: "Nome",
    t: "text",
    ph: "Como devemos chamá-lo",
    validate: (v) => !v.trim() ? "Informe seu nome" : null
  },
  {
    l: "E-mail",
    t: "email",
    ph: "voce@email.com",
    validate: (v) => {
      if (!v.trim()) return "Informe seu e-mail";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
        return "E-mail inválido — use o formato voce@email.com";
      return null;
    }
  },
  {
    l: "Telefone",
    t: "tel",
    ph: "+55 (99) 99999-9999",
    validate: (v) => {
      const digits = v.replace(/\D/g, "");
      if (!digits) return "Informe seu telefone";
      if (digits.length < 12) return "Telefone incompleto — informe DDD + número";
      return null;
    }
  },
  {
    l: "Pessoas",
    t: "number",
    ph: "2",
    validate: (v) => {
      if (!v.trim()) return "Informe o número de pessoas";
      const n = Number(v);
      if (isNaN(n) || n < 1) return "Mínimo de 1 pessoa";
      return null;
    }
  },
  { l: "Data", t: "date", validate: (v) => !v ? "Selecione uma data" : null },
  {
    l: "Horário",
    t: "time",
    validate: (v) => {
      if (!v) return "Selecione um horário";
      if (!/^\d{2}:\d{2}$/.test(v)) return "Formato inválido — use HH:MM";
      const [h, m] = v.split(":").map(Number);
      if (h > 23 || m > 59) return "Horário inválido";
      const min = h * 60 + m;
      if (min >= 12 * 60 && min <= 15 * 60 + 30) return null;
      if (min >= 19 * 60 && min <= 23 * 60) return null;
      return "Fora do horário — Almoço 12h–15h30 · Jantar 19h–23h";
    }
  }
];
const MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];
const WEEKDAYS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const fmtDate = (v) => {
  if (!v) return "";
  const [y, m, d] = v.split("-");
  return `${d}/${m}/${y}`;
};
const fmtPhone = (raw) => {
  const d = raw.replace(/\D/g, "");
  if (d.length === 0) return "+55 ";
  if (d.length <= 2) return `+${d}`;
  if (d.length <= 4) return `+${d.slice(0, 2)} (${d.slice(2)}`;
  if (d.length <= 9) return `+${d.slice(0, 2)} (${d.slice(2, 4)}) ${d.slice(4)}`;
  return `+${d.slice(0, 2)} (${d.slice(2, 4)}) ${d.slice(4, 9)}-${d.slice(9, 13)}`;
};
const HOURS = ["12", "13", "14", "15", "19", "20", "21", "22", "23"];
const MINS = ["00", "30"];
function useClickOutside(refs, cb) {
  reactExports.useEffect(() => {
    const handler = (e) => {
      if (refs.every((r) => r.current && !r.current.contains(e.target))) cb();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [refs, cb]);
}
function Reserve() {
  const [values, setValues] = reactExports.useState({ Pessoas: "1", Telefone: "+55 " });
  const [errors, setErrors] = reactExports.useState({});
  const [sent, setSent] = reactExports.useState(false);
  const [touched, setTouched] = reactExports.useState({});
  const [focusedField, setFocusedField] = reactExports.useState(null);
  const [calendarOpen, setCalendarOpen] = reactExports.useState(false);
  const [calMonth, setCalMonth] = reactExports.useState(() => (/* @__PURE__ */ new Date()).getMonth());
  const [calYear, setCalYear] = reactExports.useState(() => (/* @__PURE__ */ new Date()).getFullYear());
  const [timeOpen, setTimeOpen] = reactExports.useState(false);
  const [tempHour, setTempHour] = reactExports.useState("12");
  const [tempMin, setTempMin] = reactExports.useState("00");
  const calRef = reactExports.useRef(null);
  const calTriggerRef = reactExports.useRef(null);
  const timeRef = reactExports.useRef(null);
  const timeTriggerRef = reactExports.useRef(null);
  useClickOutside([calRef, calTriggerRef], () => setCalendarOpen(false));
  useClickOutside([timeRef, timeTriggerRef], () => {
    if (timeOpen) setTimeOpen(false);
  });
  const today = /* @__PURE__ */ new Date();
  `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const allValid = reactExports.useMemo(
    () => fields.every((f) => {
      const v = values[f.l] ?? "";
      return v.trim() !== "" && f.validate?.(v) === null;
    }),
    [values]
  );
  const runValidate = (label, value) => {
    const field = fields.find((f) => f.l === label);
    return field?.validate?.(value) ?? null;
  };
  const validateAll = () => {
    const ns = {};
    for (const f of fields) {
      const err = runValidate(f.l, values[f.l] ?? "");
      if (err) ns[f.l] = err;
    }
    setErrors(ns);
    return Object.keys(ns).length === 0;
  };
  const change = (label, value) => {
    setValues((prev) => ({ ...prev, [label]: value }));
    if (label === "E-mail") {
      setTouched((prev) => ({ ...prev, "E-mail": true }));
    }
    if (touched[label]) {
      const err = runValidate(label, value);
      setErrors((prev) => {
        const next = { ...prev };
        if (err) next[label] = err;
        else delete next[label];
        return next;
      });
    }
  };
  const handleFocus = (label) => setFocusedField(label);
  const handleBlur = (label) => {
    setFocusedField((prev) => prev === label ? null : prev);
    setTouched((prev) => ({ ...prev, [label]: true }));
    const err = runValidate(label, values[label] ?? "");
    setErrors((prev) => {
      const next = { ...prev };
      if (err) next[label] = err;
      else delete next[label];
      return next;
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const allT = {};
    for (const f of fields) allT[f.l] = true;
    setTouched((prev) => ({ ...prev, ...allT }));
    if (validateAll()) setSent(true);
  };
  const adjustPeople = (delta) => {
    const cur = Number(values["Pessoas"] ?? 1);
    const next = Math.max(1, Math.min(20, cur + delta));
    change("Pessoas", String(next));
    setTouched((prev) => ({ ...prev, Pessoas: true }));
    setFocusedField("Pessoas");
  };
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const calDays = [];
  for (let i = 0; i < firstDay; i++) calDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) calDays.push(i);
  while (calDays.length < 42) calDays.push(null);
  const selectDate = (d) => {
    change(
      "Data",
      `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`
    );
    setTouched((prev) => ({ ...prev, Data: true }));
    setCalendarOpen(false);
  };
  const isToday = (d) => {
    const t = /* @__PURE__ */ new Date();
    return d === t.getDate() && calMonth === t.getMonth() && calYear === t.getFullYear();
  };
  const isSelected = (d) => {
    if (!values["Data"]) return false;
    const [y, m, day] = values["Data"].split("-");
    return Number(day) === d && Number(m) === calMonth + 1 && Number(y) === calYear;
  };
  const navMonth = (delta) => {
    let m = calMonth + delta;
    let y = calYear;
    if (m < 0) {
      m = 11;
      y--;
    }
    if (m > 11) {
      m = 0;
      y++;
    }
    setCalMonth(m);
    setCalYear(y);
  };
  const toggleCalendar = () => {
    if (calendarOpen) {
      setCalendarOpen(false);
    } else {
      if (values["Data"]) {
        const [y, m] = values["Data"].split("-");
        setCalYear(Number(y));
        setCalMonth(Number(m) - 1);
      } else {
        const t = /* @__PURE__ */ new Date();
        setCalMonth(t.getMonth());
        setCalYear(t.getFullYear());
      }
      setCalendarOpen(true);
      handleFocus("Data");
    }
  };
  const goToToday = () => {
    const t = /* @__PURE__ */ new Date();
    setCalMonth(t.getMonth());
    setCalYear(t.getFullYear());
  };
  const openTimePicker = () => {
    if (values["Horário"]) {
      const [h, m] = values["Horário"].split(":");
      setTempHour(h);
      setTempMin(m);
    } else {
      setTempHour("12");
      setTempMin("00");
    }
    setCalendarOpen(false);
    setTimeOpen(true);
    handleFocus("Horário");
  };
  const adjustHour = (delta) => {
    const idx = HOURS.indexOf(tempHour);
    const next = (idx + delta + HOURS.length) % HOURS.length;
    setTempHour(HOURS[next]);
  };
  const adjustMin = (delta) => {
    const idx = MINS.indexOf(tempMin);
    const next = (idx + delta + MINS.length) % MINS.length;
    setTempMin(MINS[next]);
  };
  const confirmTime = () => {
    change("Horário", tempHour + ":" + tempMin);
    setTouched((prev) => ({ ...prev, Horário: true }));
    setTimeOpen(false);
  };
  const renderField = (f) => {
    const hasErr = !!errors[f.l];
    const isFocused = focusedField === f.l;
    const val = values[f.l] ?? "";
    const labelEl = /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        className: `block text-[11px] uppercase tracking-[0.3em] mb-2 transition-colors duration-300 ${hasErr ? "text-red-400" : isFocused ? "text-gold" : "text-(--gold)/70"}`,
        children: [
          f.l,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `ml-1 ${hasErr ? "text-red-400" : "text-(--gold)/40"}`, children: "*" })
        ]
      }
    );
    const errEl = hasErr ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0, y: -6, height: 0 },
        animate: { opacity: 1, y: 0, height: "auto" },
        exit: { opacity: 0, y: -6, height: 0 },
        transition: { duration: 0.25 },
        className: "mt-1.5 text-[11px] text-red-400/90 leading-tight",
        children: errors[f.l]
      },
      f.l + "-err"
    ) : null;
    const underline = /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: `absolute bottom-0 left-0 h-[1.5px] transition-all duration-500 ease-out rounded-full ${hasErr ? "bg-red-400" : "bg-gold"} ${isFocused ? "w-full" : "w-0"}`
      }
    );
    if (f.l === "Data") {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block relative", children: [
        labelEl,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", ref: calTriggerRef, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              role: "button",
              tabIndex: 0,
              onClick: toggleCalendar,
              onKeyDown: (e) => {
                if (e.key === "Enter") toggleCalendar();
              },
              className: `flex items-center justify-between py-3 border-b transition-colors duration-300 cursor-pointer ${hasErr ? "border-red-400/70" : isFocused || calendarOpen ? "border-transparent" : "border-(--ice)/15"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-ice transition-opacity ${val ? "opacity-100" : "opacity-30"}`, children: val ? fmtDate(val) : "Selecione a data" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    className: "w-4 h-4 text-(--gold)/60 shrink-0 ml-2",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    strokeWidth: 1.5,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      }
                    )
                  }
                )
              ]
            }
          ),
          underline,
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: calendarOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              ref: calRef,
              initial: { opacity: 0, y: -8, scale: 0.96 },
              animate: { opacity: 1, y: 0, scale: 1 },
              exit: { opacity: 0, y: -8, scale: 0.96 },
              transition: { duration: 0.2 },
              className: "absolute top-full mt-2 z-50 w-[min(17.5rem,calc(100vw-2rem))] origin-top-left",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-4 border border-(--gold)/20 shadow-2xl bg-(--abyss)/95 backdrop-blur-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (e) => {
                        e.stopPropagation();
                        navMonth(-1);
                      },
                      className: "flex min-h-11 min-w-11 items-center justify-center rounded-full text-(--gold)/60 hover:text-gold hover:bg-(--gold)/10 transition-all",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "svg",
                        {
                          className: "w-4 h-4",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          strokeWidth: 2,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m15 19-7-7 7-7" })
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-sm text-ice", children: [
                    MONTHS[calMonth],
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-(--gold)/60", children: calYear })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (e) => {
                        e.stopPropagation();
                        navMonth(1);
                      },
                      className: "flex min-h-11 min-w-11 items-center justify-center rounded-full text-(--gold)/60 hover:text-gold hover:bg-(--gold)/10 transition-all",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "svg",
                        {
                          className: "w-4 h-4",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          strokeWidth: 2,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m9 5 7 7-7 7" })
                        }
                      )
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1 mb-2", children: WEEKDAYS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-[10px] uppercase tracking-wider text-(--gold)/50 text-center",
                    children: d
                  },
                  d
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1", children: calDays.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    disabled: !d,
                    onClick: (e) => {
                      e.stopPropagation();
                      if (d) selectDate(d);
                    },
                    className: `relative flex items-center justify-center w-full aspect-square rounded-xl text-sm transition-all duration-200 ${!d ? "invisible" : isSelected(d) && isToday(d) ? "bg-gold text-abyss font-semibold ring-2 ring-inset ring-white/30" : isSelected(d) ? "bg-gold text-abyss font-semibold" : isToday(d) ? "text-gold font-medium ring-1 ring-inset ring-(--gold)/50 hover:bg-(--gold)/15" : "text-ice/80 hover:bg-gold/10 hover:text-gold"}`,
                    children: d
                  },
                  i
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (e) => {
                      e.stopPropagation();
                      goToToday();
                    },
                    className: "mt-3 w-full rounded-xl border border-(--gold)/20 py-2 text-[11px] uppercase tracking-[0.25em] text-(--gold)/70 transition-all hover:bg-(--gold)/10 hover:text-gold hover:border-gold/40",
                    children: "Hoje"
                  }
                )
              ] })
            },
            "cal"
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: errEl })
      ] }, f.l);
    }
    if (f.l === "Horário") {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block relative", children: [
        labelEl,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", ref: timeTriggerRef, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              role: "button",
              tabIndex: 0,
              onClick: openTimePicker,
              onKeyDown: (e) => {
                if (e.key === "Enter") openTimePicker();
              },
              onBlur: () => handleBlur("Horário"),
              className: `flex items-center justify-between py-3 border-b transition-colors duration-300 cursor-pointer ${hasErr ? "border-red-400/70" : isFocused || timeOpen ? "border-transparent" : "border-(--ice)/15"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-ice transition-opacity ${val ? "opacity-100" : "opacity-30"}`, children: val || "HH:MM" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    className: "w-4 h-4 text-(--gold)/60 shrink-0 ml-2",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    strokeWidth: 1.5,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      }
                    )
                  }
                )
              ]
            }
          ),
          underline,
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: timeOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              ref: timeRef,
              initial: { opacity: 0, y: -8, scale: 0.96 },
              animate: { opacity: 1, y: 0, scale: 1 },
              exit: { opacity: 0, y: -8, scale: 0.96 },
              transition: { duration: 0.2 },
              className: "absolute top-full mt-2 z-50 w-[min(15rem,calc(100vw-2rem))] origin-top-left",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-5 border border-(--gold)/20 shadow-2xl bg-(--abyss)/95 backdrop-blur-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mb-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl tracking-wider text-ice", children: tempHour }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl text-gold animate-pulse", children: ":" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl tracking-wider text-ice", children: tempMin })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-8 mb-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (e) => {
                          e.stopPropagation();
                          adjustHour(1);
                        },
                        className: "flex items-center justify-center w-10 h-10 rounded-xl border border-(--gold)/20 text-(--gold)/70 hover:text-gold hover:bg-(--gold)/12 hover:border-gold/40 transition-all active:scale-90",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "svg",
                          {
                            className: "w-4 h-4",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: 2.5,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m5 15 7-7 7 7" })
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.25em] text-(--gold)/50", children: "Hora" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (e) => {
                          e.stopPropagation();
                          adjustHour(-1);
                        },
                        className: "flex items-center justify-center w-10 h-10 rounded-xl border border-(--gold)/20 text-(--gold)/70 hover:text-gold hover:bg-(--gold)/12 hover:border-gold/40 transition-all active:scale-90",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "svg",
                          {
                            className: "w-4 h-4",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: 2.5,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m19 9-7 7-7-7" })
                          }
                        )
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (e) => {
                          e.stopPropagation();
                          adjustMin(1);
                        },
                        className: "flex items-center justify-center w-10 h-10 rounded-xl border border-(--gold)/20 text-(--gold)/70 hover:text-gold hover:bg-(--gold)/12 hover:border-gold/40 transition-all active:scale-90",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "svg",
                          {
                            className: "w-4 h-4",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: 2.5,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m5 15 7-7 7 7" })
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.25em] text-(--gold)/50", children: "Min" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (e) => {
                          e.stopPropagation();
                          adjustMin(-1);
                        },
                        className: "flex items-center justify-center w-10 h-10 rounded-xl border border-(--gold)/20 text-(--gold)/70 hover:text-gold hover:bg-(--gold)/12 hover:border-gold/40 transition-all active:scale-90",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "svg",
                          {
                            className: "w-4 h-4",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: 2.5,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m19 9-7 7-7-7" })
                          }
                        )
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (e) => {
                      e.stopPropagation();
                      confirmTime();
                    },
                    className: "w-full rounded-xl bg-gold text-abyss font-semibold py-3 text-xs uppercase tracking-[0.3em] shadow-lg shadow-(--gold)/20 hover:shadow-xl hover:shadow-(--gold)/30 transition-all active:scale-95",
                    children: "Confirmar Horário"
                  }
                )
              ] })
            },
            "time"
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: errEl })
      ] }, f.l);
    }
    if (f.l === "Pessoas") {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block relative", children: [
        labelEl,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative flex items-center border-b transition-colors duration-300 py-1.5 gap-3",
            style: {
              borderColor: hasErr ? "rgba(248,113,113,0.7)" : isFocused ? "transparent" : "rgba(245,240,235,0.15)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => adjustPeople(-1),
                  disabled: Number(val || 1) <= 1,
                  className: `flex min-h-11 min-w-11 items-center justify-center rounded-full border transition-all duration-300 ${Number(val || 1) <= 1 ? "border-(--ice)/10 text-(--ice)/20 cursor-not-allowed" : "border-(--gold)/30 text-(--gold)/70 hover:border-gold hover:text-gold hover:bg-(--gold)/10 cursor-pointer active:scale-90"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "svg",
                    {
                      className: "w-4 h-4",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 12h14" })
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  inputMode: "numeric",
                  value: val,
                  onChange: (e) => {
                    const v = e.target.value.replace(/\D/g, "");
                    const n = Number(v);
                    if (v === "" || n >= 1 && n <= 20 || v === "0") change("Pessoas", v);
                  },
                  onFocus: () => handleFocus("Pessoas"),
                  onBlur: () => handleBlur("Pessoas"),
                  className: "w-12 bg-transparent text-center text-lg text-ice outline-none tabular-nums [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => adjustPeople(1),
                  disabled: Number(val || 1) >= 20,
                  className: `flex min-h-11 min-w-11 items-center justify-center rounded-full border transition-all duration-300 ${Number(val || 1) >= 20 ? "border-(--ice)/10 text-(--ice)/20 cursor-not-allowed" : "border-(--gold)/30 text-(--gold)/70 hover:border-gold hover:text-gold hover:bg-(--gold)/10 cursor-pointer active:scale-90"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "svg",
                    {
                      className: "w-4 h-4",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 5v14m7-7H5" })
                    }
                  )
                }
              ),
              underline
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: errEl })
      ] }, f.l);
    }
    if (f.l === "Telefone") {
      const handlePhoneChange = (raw) => {
        let digits = raw.replace(/\D/g, "");
        if (!digits.startsWith("55")) digits = "55" + digits;
        digits = digits.slice(0, 13);
        const formatted = fmtPhone(digits);
        change("Telefone", formatted);
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block relative", children: [
        labelEl,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "tel",
              placeholder: "+55 (99) 99999-9999",
              value: val,
              onChange: (e) => handlePhoneChange(e.target.value),
              onFocus: () => handleFocus(f.l),
              onBlur: () => handleBlur(f.l),
              className: `peer w-full bg-transparent border-b py-3 pr-3 outline-none transition-all duration-300 text-ice placeholder:text-(--ice)/25 ${hasErr ? "border-red-400/70 focus:border-red-400" : "border-(--ice)/15 focus:border-transparent"}`
            }
          ),
          underline
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: errEl })
      ] }, f.l);
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block relative", children: [
      labelEl,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: f.t,
            placeholder: f.ph,
            value: val,
            onChange: (e) => change(f.l, e.target.value),
            onFocus: () => handleFocus(f.l),
            onBlur: () => handleBlur(f.l),
            className: `peer w-full bg-transparent border-b py-3 pr-3 outline-none transition-all duration-300 text-ice placeholder:text-(--ice)/25 ${hasErr ? "border-red-400/70 focus:border-red-400" : "border-(--ice)/15 focus:border-transparent"}`
          }
        ),
        underline
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: errEl })
    ] }, f.l);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "reserva", className: "relative py-20 md:py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        .btn-shine {
          position: relative;
          overflow: hidden;
        }
        .btn-shine::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            oklch(0.95 0.15 85 / 0.25) 50%,
            transparent 70%
          );
          transform: translateX(-100%) rotate(25deg);
          pointer-events: none;
        }
        .btn-shine:not(:disabled):hover::after {
          animation: shine 0.8s ease-out forwards;
        }
        @keyframes shine {
          100% { transform: translateX(100%) rotate(25deg); }
        }
        .scrollbar-gold::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-gold::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-gold::-webkit-scrollbar-thumb {
          background: oklch(0.78 0.09 85 / 0.3);
          border-radius: 99px;
        }
        .scrollbar-gold::-webkit-scrollbar-thumb:hover {
          background: oklch(0.78 0.09 85 / 0.5);
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 pointer-events-none",
        style: {
          background: "radial-gradient(50% 50% at 50% 50%, oklch(0.78 0.09 85 / 0.08), transparent 70%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 md:px-10 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 1 },
          className: "text-center mb-14",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-gold" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.4em] text-gold", children: "Reserva de Mesa" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-gold" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl text-ice leading-[1.05]", children: [
              "Reserve sua mesa ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gold-gradient", children: "na Ilha" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.form,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 1, delay: 0.2 },
          onSubmit: handleSubmit,
          noValidate: true,
          className: "relative glass rounded-[2rem] p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7 border border-gold/10",
          children: [
            fields.map(renderField),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block md:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-[11px] uppercase tracking-[0.3em] text-(--gold)/70 mb-2", children: [
                "Ocasião especial",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-(--gold)/30 ml-1 text-[9px]", children: "(opcional)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  rows: 3,
                  placeholder: "Aniversário, alergias, pedido especial...",
                  className: "w-full bg-transparent border-b border-(--ice)/15 focus:border-gold outline-none py-3 text-ice placeholder:text-(--ice)/25 resize-none transition-all duration-300"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-(--ice)/45 max-w-sm leading-relaxed text-justify", children: "Confirmamos por WhatsApp em até 2 horas. Cancelamentos com 24h de antecedência. Recomendamos reservar com uma semana — São Luís enche aos fins de semana." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  className: "inline-flex items-center gap-3 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-8 py-4 text-sm text-emerald-400 font-medium shrink-0",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "svg",
                      {
                        className: "w-5 h-5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m5 13 4 4L19 7" })
                      }
                    ),
                    "Reserva enviada ✓"
                  ]
                },
                "sent"
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.button,
                {
                  type: "submit",
                  disabled: !allValid,
                  whileHover: allValid ? { scale: 1.03 } : {},
                  whileTap: allValid ? { scale: 0.97 } : {},
                  className: `btn-shine inline-flex items-center gap-3 rounded-full px-10 py-4 text-xs uppercase tracking-[0.3em] font-semibold transition-all duration-500 shrink-0 ${allValid ? "bg-gold text-abyss shadow-lg shadow-(--gold)/25 hover:shadow-xl hover:shadow-(--gold)/35 cursor-pointer" : "bg-(--ice)/8 text-(--ice)/30 cursor-not-allowed border border-(--ice)/10"}`,
                  children: allValid ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    "Confirmar Reserva",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "svg",
                      {
                        className: "w-4 h-4",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m9 5 7 7-7 7" })
                      }
                    )
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "svg",
                      {
                        className: "w-4 h-4",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        strokeWidth: 1.5,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                          }
                        )
                      }
                    ),
                    "Preencha os campos"
                  ] })
                },
                "submit"
              ) })
            ] })
          ]
        }
      )
    ] })
  ] });
}
function Location() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contato", className: "relative py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "site-container mx-auto max-w-7xl px-6 md:px-10 grid min-[1200px]:grid-cols-12 gap-12 items-stretch", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 1 },
        className: "min-[1200px]:col-span-5 text-center min-[1200px]:text-left",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mb-6 min-[1200px]:justify-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.4em] text-gold", children: "Visite-nos" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl text-ice leading-[1.05]", children: [
            "No coração da ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gold-gradient", children: "Praia Grande" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "glass mx-auto mt-12 max-w-xl space-y-7 rounded-[1.75rem] border border-ice/10 px-5 py-6 text-left min-[390px]:px-6 md:px-8 min-[1200px]:mx-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border pb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "mb-2 text-[10px] uppercase tracking-[0.3em] text-gold", children: "Endereço" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("dd", { className: "text-lg leading-relaxed text-ice", children: [
                "Rua da Estrela, 187",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-base text-ice/60", children: "Praia Grande · Centro Histórico · São Luís — MA" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border pb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "mb-3 text-[10px] uppercase tracking-[0.3em] text-gold", children: "Reservas" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("dd", { className: "grid gap-3 text-ice sm:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "tel:+559832321987",
                    className: "glass rounded-2xl px-4 py-3 transition-colors hover:text-gold",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] uppercase tracking-[0.25em] text-(--ice)/45", children: "Telefone" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 block text-lg", children: "+55 (98) 3232-1987" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://wa.me/5598988001987",
                    className: "glass rounded-2xl px-4 py-3 transition-colors hover:text-gold",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] uppercase tracking-[0.25em] text-(--ice)/45", children: "WhatsApp" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 block text-lg", children: "(98) 98800-1987" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border pb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "mb-3 text-[10px] uppercase tracking-[0.3em] text-gold", children: "Horário" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("dd", { className: "space-y-2 text-lg leading-relaxed text-ice", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sand", children: "Terça a domingo" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-base text-(--ice)/65", children: [
                    "· Almoço: 12h às 16h",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "· Jantar: 19h às 23h30"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-base text-(--ice)/55", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[oklch(0.68_0.14_25)]", children: "Fechado:" }),
                  " Segundas-feiras"
                ] })
              ] })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 1 },
        className: "min-[1200px]:col-span-7 relative min-h-105 overflow-hidden rounded-[2rem] shadow-luxe",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "iframe",
            {
              title: "Mapa do Maréa na Praia Grande, São Luís",
              src: "https://maps.google.com/maps?hl=pt-BR&q=-2.5296319,-44.3055576&z=18&iwloc=near&output=embed",
              loading: "lazy",
              referrerPolicy: "no-referrer-when-downgrade",
              className: "absolute inset-0 h-full w-full border-0"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 left-6 glass rounded-2xl px-5 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-gold", children: "Maréa" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl text-ice mt-1", children: "Rua da Estrela, 187" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-ice/60 mt-1", children: "Praia Grande · Centro Histórico · São Luís — MA" })
          ] })
        ]
      }
    )
  ] }) });
}
const footerLinks = [
  { label: "Início", href: "#top" },
  { label: "Nossa Casa", href: "#historia" },
  { label: "Do Mangue", href: "#especialidades" },
  { label: "Galeria", href: "#galeria" },
  { label: "Cardápio", href: "#menu" },
  { label: "Visite", href: "#contato" },
  { label: "Reservar", href: "#reserva" }
];
const socials = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Twitter", href: "#", icon: Twitter }
];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative border-t border-border py-14 mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 min-[400px]:px-6 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-full bg-linear-to-br from-gold to-[oklch(0.66_0.08_84)] text-abyss shadow-gold ring-1 ring-gold/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FishIcon, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg tracking-[0.2em] text-ice", children: "MARÉA" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-ice/40", children: "Cozinha Maranhense · São Luís — MA" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex w-full flex-col items-center gap-0.5 pt-6 min-[1200px]:gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-5 gap-y-2 max-[410px]:grid max-[410px]:w-full max-[410px]:grid-cols-3 max-[410px]:gap-x-3 min-[640px]:gap-x-6 min-[640px]:gap-y-3", children: footerLinks.map((l, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: l.href,
          className: `whitespace-nowrap text-center text-[10px] uppercase leading-none tracking-[0.18em] text-ice/60 transition-colors hover:text-gold max-[410px]:text-[9px] max-[410px]:tracking-[0.08em] min-[640px]:tracking-[0.3em] ${index === footerLinks.length - 1 ? "max-[410px]:col-span-3 max-[410px]:justify-self-center" : ""}`,
          children: l.label
        },
        l.href
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-3", children: socials.map(({ label, href, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href,
          "aria-label": label,
          className: "grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ice/20 p-0 text-ice/70 transition-colors hover:border-gold hover:text-gold",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "block h-4 w-4 shrink-0", "aria-hidden": "true" })
        },
        label
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 text-center text-[10px] uppercase tracking-[0.3em] text-ice/30", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Maréa · Todos os direitos reservados"
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Specialties, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Location, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reserve, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
