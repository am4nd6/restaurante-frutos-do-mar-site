import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroDish from "@/assets/hero-dish.jpg";

export function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const on = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", on);
    return () => window.removeEventListener("mousemove", on);
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
      {/* ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 70% 40%, oklch(0.42 0.06 200 / 0.6), transparent 70%), radial-gradient(40% 40% at 20% 70%, oklch(0.78 0.09 85 / 0.18), transparent 70%)",
        }}
      />
      {/* bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full bg-[var(--ice)]/20 animate-bubble"
            style={{
              left: `${(i * 53) % 100}%`,
              width: `${3 + (i % 6)}px`,
              height: `${3 + (i % 6)}px`,
              animationDuration: `${8 + (i % 7)}s`,
              animationDelay: `${(i % 9) * 0.7}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-12 gap-10 items-center w-full">
        {/* text */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.18, delayChildren: 2.4 } },
          }}
          className="lg:col-span-7 relative z-10"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.9 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-px w-12 bg-[var(--gold)]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]">
              São Luís · Maranhão · Desde 1987
            </span>
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] text-[var(--ice)]"
          >
            A maré
            <br />
            do <span className="italic text-gold-gradient">Maranhão</span>.
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.9 }}
            className="mt-8 max-w-xl text-[var(--ice)]/70 text-lg leading-relaxed"
          >
            No coração do centro histórico de São Luís, num casarão de azulejos portugueses,
            servimos o que a Baía de São Marcos oferece todo amanhecer — caranguejo do mangue,
            camarão da Raposa e o tempero ancestral do cuxá.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.9 }}
            className="mt-12 flex flex-wrap items-center gap-6"
          >
            <a
              href="#reserva"
              className="group relative inline-flex items-center gap-3 rounded-full bg-[var(--gold)] px-8 py-4 text-xs uppercase tracking-[0.3em] text-[var(--abyss)] font-semibold shadow-gold hover:scale-[1.02] transition-transform duration-500"
            >
              <span>Reservar Experiência</span>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
            <a href="#menu" className="text-xs uppercase tracking-[0.3em] text-[var(--ice)]/80 hover:text-[var(--gold)] transition-colors">
              Explorar o Menu →
            </a>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            transition={{ duration: 1.2 }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { n: "37", l: "Anos na Praia Grande" },
              { n: "★★★", l: "Veja Comer & Beber" },
              { n: "06h", l: "Chegada do peixe" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-[var(--gold)]">{s.n}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-[var(--ice)]/50">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* dish */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
          style={{
            transform: `perspective(1200px) rotateY(${mouse.x * 4}deg) rotateX(${-mouse.y * 4}deg)`,
            transition: "transform 0.4s ease-out",
          }}
        >
          <div className="relative aspect-square">
            {/* halo */}
            <div className="absolute -inset-10 rounded-full bg-[var(--gold)]/10 blur-3xl animate-float-slow" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--ocean)]/40 to-transparent blur-2xl" />

            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <img
                src={heroDish}
                alt="Prato exclusivo Maréa com ostras, langostino e folhas de ouro"
                className="h-full w-full object-cover rounded-full shadow-luxe ring-1 ring-[var(--gold)]/30"
                width={1024}
                height={1024}
              />
              {/* orbit gold ring */}
              <div className="pointer-events-none absolute -inset-3 rounded-full border border-[var(--gold)]/20" />
              <div className="pointer-events-none absolute -inset-8 rounded-full border border-[var(--gold)]/10" />
            </motion.div>

            {/* floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.4, duration: 0.8 }}
              className="absolute -left-6 bottom-12 glass rounded-2xl p-4 max-w-[200px]"
            >
              <div className="text-[9px] uppercase tracking-[0.3em] text-[var(--gold)] mb-1">
                Prato do Chef
              </div>
              <div className="font-display text-lg text-[var(--ice)]">Caranguejada Reinado</div>
              <div className="mt-1 text-[10px] text-[var(--ice)]/60">
                Caranguejo-uçá · arroz de cuxá · pimenta de cheiro
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--ice)]/50">scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-10 w-px bg-gradient-to-b from-[var(--gold)] to-transparent"
        />
      </motion.div>
    </section>
  );
}